define [
  'jquery'
  'underscore'
  'react'
  'react-router'
  'react-modal'
  '../modules/customPropTypes'
  'i18n!file_preview'
  './FriendlyDatetime'
  'compiled/util/friendlyBytes'
  'compiled/models/Folder'
  'compiled/models/File'
  'compiled/models/FilesystemObject'
  'compiled/fn/preventDefault'
  'compiled/react/shared/utils/withReactElement'
  '../utils/collectionHandler'
  './FilePreviewInfoPanel'
  '../modules/filesEnv'
  '../modules/FocusStore'
], ($, _, React, ReactRouter, ReactModal, customPropTypes, I18n, FriendlyDatetimeComponent, friendlyBytes, Folder, File, FilesystemObject, preventDefault, withReactElement, collectionHandler, FilePreviewInfoPanelComponent, filesEnv, FocusStore) ->

  FriendlyDatetime = React.createFactory FriendlyDatetimeComponent
  FilePreviewInfoPanel = React.createFactory FilePreviewInfoPanelComponent
  Link = React.createFactory ReactRouter.Link

  FilePreview = React.createClass

    displayName: 'FilePreview'

    mixins: [React.addons.PureRenderMixin, ReactRouter.Navigation, ReactRouter.State]

    propTypes:
      currentFolder: customPropTypes.folder
      query: React.PropTypes.object
      collection: React.PropTypes.object
      params: React.PropTypes.object

    getInitialState: ->
      showInfoPanel: false
      displayedItem: null

    componentWillMount: ->
      items = @getItemsToView @props, (items) =>
        @setState @stateProperties(items, @props)

    componentDidMount: ->
      $('.ReactModal__Overlay').on 'keydown', @handleKeyboardNavigation

    componentWillUnmount: ->
      $('.ReactModal__Overlay').off 'keydown', @handleKeyboardNavigation

    componentWillReceiveProps: (newProps) ->
      items = @getItemsToView newProps, (items) =>
        @setState @stateProperties(items, newProps)

    getItemsToView: (props, cb) ->
      # Sets up our collection that we will be using.
      initialItem = null
      onlyIdsToPreview = @getQuery().only_preview?.split(',')
      files = if !!@getQuery().search_term
                props.collection.models
              else
                props.currentFolder.files.models

      otherItems =  files.filter (file) ->
                      return true unless onlyIdsToPreview
                      file.id in onlyIdsToPreview

      visibleFile = @getQuery().preview and _.findWhere(files, {id: @getQuery().preview})

      if !visibleFile
        responseDataRequested = ["enhanced_preview_url"]
        responseDataRequested.push("usage_rights") if props.usageRightsRequiredForContext
        new File({id: @getQuery().preview}, {preflightUrl: 'no/url/needed'}).fetch(data: $.param({"include": responseDataRequested})).success (file) ->
          initialItem = new FilesystemObject(file)
          cb?({initialItem, otherItems})
      else
        initialItem = visibleFile or (files[0] if files.length)
        cb?({initialItem, otherItems})

    stateProperties: (items, props) ->
      initialItem: items.initialItem
      displayedItem: items.initialItem
      otherItems: items.otherItems
      currentFolder: props.currentFolder
      params: props.params
      otherItemsString: (@getQuery().only_preview if @getQuery().only_preview)
      otherItemsIsBackBoneCollection: items.otherItems instanceof Backbone.Collection

    setUpOtherItemsQuery: (otherItems) ->
      otherItems.map((item) ->
        item.id
      ).join(',')

    getRouteIdentifier: ->
      if @getQuery().search_term
        'search'
      else if @props.currentFolder?.urlPath()
        'folder'
      else
        'rootFolder'

    getNavigationParams: (opts = {id: null, except: []}) ->
      obj =
        preview: (opts.id if opts.id)
        search_term: (@getQuery().search_term if @getQuery().search_term)
        only_preview: (@state.otherItemsString if @state.otherItemsString)

      _.each obj, (v, k) ->
        delete obj[k] if not v or (opts.except?.length and (opts.except is k or k in opts.except))

      obj


    handleKeyboardNavigation: (event) ->
      return null unless (event.keyCode is $.ui.keyCode.LEFT or event.keyCode is $.ui.keyCode.RIGHT)
      # left arrow
      if (event.keyCode is $.ui.keyCode.LEFT)
        nextItem = collectionHandler.getPreviousInRelationTo(@state.otherItems, @state.displayedItem)

      # right arrow
      if (event.keyCode is $.ui.keyCode.RIGHT)
        nextItem = collectionHandler.getNextInRelationTo(@state.otherItems, @state.displayedItem)

      @transitionTo(@getRouteIdentifier(), @getParams(), @getNavigationParams(id: nextItem.id))

    renderArrowLink: (direction) ->
      # TODO: Refactor this to use the collectionHandler
      # Get the current position in the collection
      curItemIndex = @state.otherItems.indexOf(@state.displayedItem)
      switch direction
        when 'left'
          goToItemIndex = curItemIndex - 1
          if goToItemIndex < 0
            goToItemIndex = @state.otherItems.length - 1
        when 'right'
          goToItemIndex = curItemIndex + 1
          if goToItemIndex > @state.otherItems.length - 1
            goToItemIndex = 0
      goToItem = if @state.otherItemsIsBackBoneCollection
        @state.otherItems.at(goToItemIndex)
      else
        @state.otherItems[goToItemIndex]
      if (@state.otherItemsString)
        @getParams().only_preview = @state.otherItemsString
      div {className: 'col-xs-1 ef-file-arrow_container'},
        Link {
          to: @getRouteIdentifier()
          query: (@getNavigationParams(id: goToItem.id) if goToItem)
          params: @getParams()
          className: 'ef-file-preview-container-arrow-link'
        },
          div {className: 'ef-file-preview-arrow-link'},
            i {className: "icon-arrow-open-#{direction}"}

    closeModal: ->
      @transitionTo(@getRouteIdentifier(), @getParams(), @getNavigationParams(except: 'only_preview'))
      FocusStore.setFocusToItem()

    toggle: (key) ->
      newState = {}
      newState[key] = !@state[key]
      return =>
        @setState newState

    render: withReactElement ->
      React.createFactory(ReactModal) {isOpen: true, onRequestClose: @closeModal, className: 'ReactModal__Content--ef-file-preview', overlayClassName: 'ReactModal__Overlay--ef-file-preview', closeTimeoutMS: 10},
        div {className: 'ef-file-preview-overlay'},
          div {className: 'ef-file-preview-header'},
            h1 {className: 'ef-file-preview-header-filename'},
              @state.initialItem?.displayName()
            div {className: 'ef-file-preview-header-buttons'},
              unless @state.displayedItem?.get('locked_for_user')
                a {
                  className: 'ef-file-preview-header-download ef-file-preview-button'
                  download: true
                  href: @state.displayedItem?.get('url')
                },
                  i {className: 'icon-download'}
                  ' ' + I18n.t('file_preview_headerbutton_download', 'Download')
              button {
                type: 'button'
                className: "ef-file-preview-header-info ef-file-preview-button #{if @state.showInfoPanel then 'ef-file-preview-button--active' else ''}"
                onClick: @toggle('showInfoPanel')
              },
                # wrap content in a div because firefox doesn't support display: flex on buttons
                div {},
                  i {className: 'icon-info'}
                  ' ' + I18n.t('file_preview_headerbutton_info', 'Info')
              a {
                href: '#'
                onClick: preventDefault(@closeModal)
                className: 'ef-file-preview-header-close ef-file-preview-button',
              },
                i {className: 'icon-end'}
                ' ' + I18n.t('file_preview_headerbutton_close', 'Close')

          div {className: 'ef-file-preview-stretch'},
            @renderArrowLink('left') if @state.otherItems?.length > 0

            if @state.displayedItem?.get 'preview_url'
              iframe {
                allowFullScreen: true
                title: I18n.t('File Preview')
                src: @state.displayedItem.get 'preview_url'
                className: 'ef-file-preview-frame' + if @state.displayedItem.get('content-type') is 'text/html' then ' ef-file-preview-frame-html' else ''
              }
            else # file was not found
              div className: 'ef-file-not-found ef-file-preview-frame',
                i className:'media-object ef-not-found-icon FilesystemObjectThumbnail mimeClass-file'
                I18n.t "File not found"

            @renderArrowLink('right') if @state.otherItems?.length > 0

            if @state.showInfoPanel
              FilePreviewInfoPanel
                displayedItem: @state.displayedItem
                getStatusMessage: @getStatusMessage
                usageRightsRequiredForContext: @props.usageRightsRequiredForContext
