/*
 * Copyright (C) 2019 - present Instructure, Inc.
 *
 * This file is part of Canvas.
 *
 * Canvas is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, version 3 of the License.
 *
 * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License along
 * with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import React from 'react'
import ReactDOM from 'react-dom'

import HideAssignmentGradesTray from '../../../grading/HideAssignmentGradesTray'
import PostAssignmentGradesTray from '../../../grading/PostAssignmentGradesTray'

export default class PostPolicies {
  constructor(gradebook) {
    this._gradebook = gradebook

    this._coursePostPolicy = {postManually: !!gradebook.options.post_manually}
  }

  initialize() {
    const $hideContainer = document.getElementById('hide-assignment-grades-tray')
    const bindHideTray = ref => {
      this._hideAssignmentGradesTray = ref
    }
    ReactDOM.render(<HideAssignmentGradesTray ref={bindHideTray} />, $hideContainer)

    const $postContainer = document.getElementById('post-assignment-grades-tray')
    const bindPostTray = ref => {
      this._postAssignmentGradesTray = ref
    }
    ReactDOM.render(<PostAssignmentGradesTray ref={bindPostTray} />, $postContainer)
  }

  destroy() {
    ReactDOM.unmountComponentAtNode(document.getElementById('hide-assignment-grades-tray'))
    ReactDOM.unmountComponentAtNode(document.getElementById('post-assignment-grades-tray'))
  }

  showHideAssignmentGradesTray({assignmentId, onExited}) {
    const {id, name} = this._gradebook.getAssignment(assignmentId)

    this._hideAssignmentGradesTray.show({
      assignment: {id, name},
      onExited
    })
  }

  showPostAssignmentGradesTray({assignmentId, onExited}) {
    const {id, name} = this._gradebook.getAssignment(assignmentId)

    this._postAssignmentGradesTray.show({
      assignment: {id, name},
      onExited
    })
  }

  get coursePostPolicy() {
    return this._coursePostPolicy
  }

  setCoursePostPolicy(policy) {
    this._coursePostPolicy = policy
  }
}
