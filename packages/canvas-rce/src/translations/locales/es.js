/*
 * Copyright (C) 2021 - present Instructure, Inc.
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

import formatMessage from '../../format-message'
import '../tinymce/es'

const locale = {
  "access_the_pretty_html_editor_37168efe": {
    "message": "Acceda al Editor HTML agradable"
  },
  "accessibility_checker_b3af1f6c": {
    "message": "Verificador de accesibilidad"
  },
  "add_8523c19b": { "message": "Agregar" },
  "add_another_f4e50d57": { "message": "Agregar otro" },
  "add_cc_subtitles_55f0394e": { "message": "Agregar CC/subtítulos" },
  "add_image_60b2de07": { "message": "Agregar imagen" },
  "aleph_f4ffd155": { "message": "Aleph" },
  "alignment_and_lists_5cebcb69": { "message": "Alineación y listas" },
  "all_4321c3a1": { "message": "Todo" },
  "all_apps_a50dea49": { "message": "Todas las aplicaciones" },
  "alpha_15d59033": { "message": "Alfa" },
  "alphabetical_55b5b4e0": { "message": "Alfabético" },
  "alt_text_611fb322": { "message": "Texto alternativo" },
  "amalg_coproduct_c589fb12": { "message": "Amalg (coproducto)" },
  "an_error_occured_reading_the_file_ff48558b": {
    "message": "Hubo un error al leer el archivo"
  },
  "an_error_occurred_making_a_network_request_d1bda348": {
    "message": "Se produjo un error al realizar una solicitud de red"
  },
  "an_error_occurred_uploading_your_media_71f1444d": {
    "message": "Se produjo un error al cargar sus elementos multimedia."
  },
  "and_7fcc2911": { "message": "Y" },
  "angle_c5b4ec50": { "message": "Ángulo" },
  "announcement_list_da155734": { "message": "Lista de anuncios" },
  "announcements_a4b8ed4a": { "message": "Anuncios" },
  "apply_781a2546": { "message": "Aplicar" },
  "apply_changes_to_all_instances_of_this_icon_maker__2642f466": {
    "message": "Aplicar los cambios a todas las instancias a este ícono de Icon Maker en el curso."
  },
  "approaches_the_limit_893aeec9": { "message": "Se acerca al límite" },
  "approximately_e7965800": { "message": "Aproximadamente" },
  "apps_54d24a47": { "message": "Aplicaciones" },
  "arrows_464a3e54": { "message": "Flechas" },
  "art_icon_8e1daad": { "message": "Ícono de arte" },
  "aspect_ratio_will_be_preserved_cb5fdfb8": {
    "message": "Se conservará la relación de aspecto"
  },
  "assignments_1e02582c": { "message": "Tareas" },
  "asterisk_82255584": { "message": "Asterisco" },
  "attributes_963ba262": { "message": "Atributos" },
  "audio_and_video_recording_not_supported_please_use_5ce3f0d7": {
    "message": "No se admite la grabación de audio y video; utilice un otro navegador."
  },
  "audio_options_feb58e2c": { "message": "Opciones de audio" },
  "audio_options_tray_33a90711": { "message": "Bandeja de opciones de audio" },
  "audio_player_for_title_20cc70d": {
    "message": "Reproductor de audio para { title }"
  },
  "auto_saved_content_exists_would_you_like_to_load_t_fee528f2": {
    "message": "Hay contenido guardado automáticamente. ¿Desea cargar el contenido guardado automáticamente?"
  },
  "available_folders_694d0436": { "message": "Carpetas disponibles" },
  "backslash_b2d5442d": { "message": "Barra invertida" },
  "bar_ec63ed6": { "message": "Barra" },
  "basic_554cdc0a": { "message": "Básico" },
  "because_501841b": { "message": "Porque" },
  "below_81d4dceb": { "message": "Debajo" },
  "beta_cb5f307e": { "message": "Beta" },
  "big_circle_16b2e604": { "message": "Círculo grande" },
  "binomial_coefficient_ea5b9bb7": { "message": "Coeficiente binomial" },
  "black_4cb01371": { "message": "Negro" },
  "blue_daf8fea9": { "message": "Azul" },
  "bottom_15a2a9be": { "message": "Abajo" },
  "bottom_third_5f5fec1d": { "message": "Tercero desde abajo" },
  "bowtie_5f9629e4": { "message": "Pajarita" },
  "brick_f2656265": { "message": "Ladrillo" },
  "c_2001_acme_inc_283f7f80": { "message": "(c) 2001 Acme Inc." },
  "cancel_caeb1e68": { "message": "Cancelar" },
  "cap_product_3a5265a6": { "message": "Extremo de producto" },
  "centered_dot_64d5e378": { "message": "Punto centrado" },
  "centered_horizontal_dots_451c5815": {
    "message": "Puntos horizontales centrados"
  },
  "chi_54a32644": { "message": "Chi" },
  "choose_caption_file_9c45bc4e": { "message": "Elegir archivo de subtítulos" },
  "choose_usage_rights_33683854": { "message": "Elegir derechos de uso..." },
  "circle_484abe63": { "message": "Círculo" },
  "clear_2084585f": { "message": "Eliminar" },
  "clear_image_3213fe62": { "message": "Imagen clara" },
  "clear_selected_file_82388e50": { "message": "Borrar archivo seleccionado" },
  "clear_selected_file_filename_2fe8a58e": {
    "message": "Eliminar archivo seleccionado: { filename }"
  },
  "click_or_shift_click_for_the_html_editor_25d70bb4": {
    "message": "Haga clic o presione Mayús y haga clic para acceder al editor html."
  },
  "click_to_embed_imagename_c41ea8df": {
    "message": "Haga clic para incluir { imageName }"
  },
  "click_to_hide_preview_3c707763": {
    "message": "Hacer clic para ocultar la vista previa"
  },
  "click_to_insert_a_link_into_the_editor_c19613aa": {
    "message": "Haz clic para insertar un enlace en el editor."
  },
  "click_to_show_preview_faa27051": {
    "message": "Hacer clic para mostrar la vista previa"
  },
  "close_a_menu_or_dialog_also_returns_you_to_the_edi_739079e6": {
    "message": "Cerrar un menú o diálogo. También lo vuelve a llevar al área de editor"
  },
  "close_d634289d": { "message": "Cerrar" },
  "closed_caption_file_must_be_less_than_maxkb_kb_5880f752": {
    "message": "El archivo de subtítulos debe pesar menos de { maxKb } kB"
  },
  "closed_captions_subtitles_e6aaa016": {
    "message": "Subtítulos/subtítulos ocultos"
  },
  "clubs_suit_c1ffedff": { "message": "Bastos (palo)" },
  "collaborations_5c56c15f": { "message": "Colaboraciones" },
  "collapse_to_hide_types_1ab46d2e": {
    "message": "Colapsar para ocultar { types }"
  },
  "color_picker_6b359edf": { "message": "Selector de color" },
  "color_picker_colorname_selected_ad4cf400": {
    "message": "Selector de color ({ colorName } seleccionado)"
  },
  "complex_numbers_a543d004": { "message": "Números complejos" },
  "computer_1d7dfa6f": { "message": "Computadora" },
  "congruent_5a244acd": { "message": "Congruente" },
  "contains_311f37b7": { "message": "Contiene" },
  "content_1440204b": { "message": "Contenido" },
  "content_is_still_being_uploaded_if_you_continue_it_8f06d0cb": {
    "message": "Todavía se está cargando el contenido; si continúa, no se incrustará correctamente."
  },
  "content_subtype_5ce35e88": { "message": "Subtipo de contenido" },
  "content_type_2cf90d95": { "message": "Tipo de contenido" },
  "coproduct_e7838082": { "message": "Coproducto" },
  "copyright_holder_66ee111": {
    "message": "Titular de los derechos de autor:"
  },
  "count_plural_0_0_words_one_1_word_other_words_acf32eca": {
    "message": "{ count, plural,\n     =0 {0 palabras}\n    one {1 palabra}\n  other {# palabras}\n}"
  },
  "count_plural_one_item_loaded_other_items_loaded_857023b7": {
    "message": "{ count, plural,\n    one {# ítem cargado}\n  other {# ítems cargados}\n}"
  },
  "course_documents_104d76e0": { "message": "Documentos del curso" },
  "course_files_62deb8f8": { "message": "Archivos del curso" },
  "course_files_a31f97fc": { "message": "Archivos del curso" },
  "course_images_f8511d04": { "message": "Imágenes del curso" },
  "course_links_b56959b9": { "message": "Enlaces del curso" },
  "course_media_ec759ad": { "message": "Multimedia del curso" },
  "course_navigation_dd035109": { "message": "Navegación del curso" },
  "create_icon_110d6463": { "message": "Crear ícono" },
  "creative_commons_license_725584ae": {
    "message": "Licencia Creative Commons:"
  },
  "crop_image_41bf940c": { "message": "Delimitar imagen" },
  "crop_image_807ebb08": { "message": "Cortar imagen" },
  "cup_product_14174434": { "message": "Copa de producto" },
  "current_image_f16c249c": { "message": "Imagen actual" },
  "custom_6979cd81": { "message": "Personalizar" },
  "cyan_c1d5f68a": { "message": "Cian" },
  "dagger_57e0f4e5": { "message": "Daga" },
  "date_added_ed5ad465": { "message": "Fecha de agregado" },
  "decorative_icon_9a7f3fc3": { "message": "Ícono decorativo" },
  "decorative_type_upper_f2c95e3": { "message": "{ TYPE_UPPER } decorativo" },
  "deep_purple_bb3e2907": { "message": "Morado oscuro" },
  "definite_integral_fe7ffed1": { "message": "Integral definida" },
  "degree_symbol_4a823d5f": { "message": "Símbolo de grados" },
  "delimiters_4db4840d": { "message": "Delimitadores" },
  "delta_53765780": { "message": "Delta" },
  "describe_the_icon_f6a18823": { "message": "(Describa el ícono)" },
  "describe_the_type_ff448da5": { "message": "(Describir el { TYPE })" },
  "describe_the_video_2fe8f46a": { "message": "(Describir el video)" },
  "details_98a31b68": { "message": "Detalles" },
  "diagonal_dots_7d71b57e": { "message": "Puntos diagonales" },
  "diamond_b8dfe7ae": { "message": "Diamante" },
  "diamonds_suit_526abaaf": { "message": "Diamantes (palo)" },
  "digamma_258ade94": { "message": "Digamma" },
  "dimension_type_f5fa9170": { "message": "Tipo de dimensión" },
  "dimensions_45ddb7b7": { "message": "Dimensiones" },
  "directionality_26ae9e08": { "message": "Direccionalidad" },
  "directly_edit_latex_b7e9235b": { "message": "Edición directa en LaTeX" },
  "disable_preview_222bdf72": { "message": "Deshabilitar vista previa" },
  "discussions_a5f96392": { "message": "Foros de discusión" },
  "discussions_index_6c36ced": { "message": "Índice de foros de discusión" },
  "disjoint_union_e74351a8": { "message": "Unión disjunta" },
  "display_options_315aba85": { "message": "Mostrar opciones" },
  "display_text_link_opens_in_a_new_tab_75e9afc9": {
    "message": "Mostrar enlace de texto (se abre en una nueva pestaña)"
  },
  "division_sign_72190870": { "message": "Signo de dividir" },
  "documents_81393201": { "message": "Documentos" },
  "done_54e3d4b6": { "message": "Listo" },
  "double_dagger_faf78681": { "message": "Daga doble" },
  "down_and_left_diagonal_arrow_40ef602c": {
    "message": "Flecha diagonal hacia abajo y a la izquierda"
  },
  "down_and_right_diagonal_arrow_6ea0f460": {
    "message": "Flecha diagonal hacia abajo y a la derecha"
  },
  "download_filename_2baae924": { "message": "Descargar { filename }" },
  "downward_arrow_cca52012": { "message": "Flecha hacia abajo" },
  "downward_pointing_triangle_2a12a601": {
    "message": "Triángulo apuntando hacia abajo"
  },
  "drag_a_file_here_1bf656d5": { "message": "Arrastrar un archivo aquí" },
  "drag_and_drop_or_click_to_browse_your_computer_60772d6d": {
    "message": "Arrastre y suelte, o haga clic para buscar en su computadora"
  },
  "drag_handle_use_up_and_down_arrows_to_resize_e29eae5c": {
    "message": "Icono de arrastre. Use las flechas arriba y abajo para cambiar el tamaño"
  },
  "due_multiple_dates_cc0ee3f5": { "message": "Fecha límite: Varias fechas" },
  "due_when_7eed10c6": { "message": "Fecha límite: { when }" },
  "edit_alt_text_for_this_icon_instance_9c6fc5fd": {
    "message": "Editar texto alternativo para esta instancia de ícono"
  },
  "edit_c5fbea07": { "message": "Editar" },
  "edit_course_link_5a5c3c59": { "message": "Editar enlace del curso" },
  "edit_existing_icon_maker_icon_5d0ebb3f": {
    "message": "Editar ícono de creación de íconos actual"
  },
  "edit_icon_2c6b0e91": { "message": "Editar ícono" },
  "edit_link_7f53bebb": { "message": "Editar enlace" },
  "editor_statusbar_26ac81fc": { "message": "Barra de estado del editor" },
  "embed_828fac4a": { "message": "Incrustar" },
  "embed_code_314f1bd5": { "message": "Código de incrustación" },
  "embed_image_1080badc": { "message": "Incorporar imagen" },
  "embed_video_a97a64af": { "message": "Incrustar video" },
  "embedded_content_aaeb4d3d": { "message": "contenido insertado" },
  "empty_set_91a92df4": { "message": "Conjunto vacío" },
  "encircled_dot_8f5e51c": { "message": "Punto en un círculo" },
  "encircled_minus_72745096": { "message": "Signo menos en un círculo" },
  "encircled_plus_36d8d104": { "message": "Signo más en un círculo" },
  "encircled_times_5700096d": { "message": "Veces en un círculo" },
  "engineering_icon_f8f3cf43": { "message": "Ícono de ingeniería" },
  "english_icon_25bfe845": { "message": "Ícono de ingles" },
  "enter_at_least_3_characters_to_search_4f037ee0": {
    "message": "Ingresar al menos 3 caracteres para buscar"
  },
  "epsilon_54bb8afa": { "message": "Épsilon" },
  "epsilon_variant_d31f1e77": { "message": "Épsilon (variante)" },
  "equals_sign_c51bdc58": { "message": "Signo igual" },
  "equation_editor_39fbc3f1": { "message": "Editor de ecuaciones" },
  "equivalence_class_7b0f11c0": { "message": "Clase de equivalencia" },
  "equivalent_identity_654b3ce5": { "message": "Equivalente (identidad)" },
  "eta_b8828f99": { "message": "Eta" },
  "exists_2e62bdaa": { "message": "Existe" },
  "exit_fullscreen_b7eb0aa4": { "message": "Salir de la pantalla completa" },
  "expand_preview_by_default_2abbf9f8": {
    "message": "Expandir vista previa de forma predeterminada"
  },
  "expand_to_see_types_f5d29352": { "message": "Expandir para ver { types }" },
  "external_tools_6e77821": { "message": "Herramientas externas" },
  "extra_large_b6cdf1ff": { "message": "Extra grande" },
  "extra_small_9ae33252": { "message": "Extra pequeño" },
  "extracurricular_icon_67c8ca42": { "message": "Ícono extracurricular" },
  "f_function_fe422d65": { "message": "F (función)" },
  "failed_getting_file_contents_e9ea19f4": {
    "message": "Error al obtener el contenido del archivo"
  },
  "file_name_8fd421ff": { "message": "Nombre del archivo" },
  "file_storage_quota_exceeded_b7846cd1": {
    "message": "Capacidad de almacenamiento de archivos excedida"
  },
  "file_url_c12b64be": { "message": "URL del archivo" },
  "filename_file_icon_602eb5de": {
    "message": "Icono del archivo { filename }"
  },
  "filename_image_preview_6cef8f26": {
    "message": "Vista previa de la imagen { filename }"
  },
  "filename_text_preview_e41ca2d8": {
    "message": "Vista previa del texto { filename }"
  },
  "files_c300e900": { "message": "Archivos" },
  "files_index_af7c662b": { "message": "Índice de archivos" },
  "flat_music_76d5a5c3": { "message": "Bemol (música)" },
  "focus_element_options_toolbar_18d993e": {
    "message": "Barra de herramientas de opciones para enfocarse en un elemento"
  },
  "folder_tree_fbab0726": { "message": "Árbol de carpetas" },
  "for_all_b919f972": { "message": "Para todos" },
  "format_4247a9c5": { "message": "Formato" },
  "formatting_5b143aa8": { "message": "Formato" },
  "forward_slash_3f90f35e": { "message": "Barra inclinada" },
  "found_auto_saved_content_3f6e4ca5": {
    "message": "Se encontró contenido guardado automáticamente"
  },
  "found_count_plural_0_results_one_result_other_resu_46aeaa01": {
    "message": "Se encontraron { count, plural,\n     =0 {# resultados}\n    one {# resultado}\n  other {# resultados}\n}"
  },
  "fraction_41bac7af": { "message": "Fracción" },
  "fullscreen_873bf53f": { "message": "Pantalla completa" },
  "gamma_1767928": { "message": "Gamma" },
  "generating_preview_45b53be0": { "message": "Generando la vista previa..." },
  "gif_png_format_images_larger_than_size_kb_are_not__7af3bdbd": {
    "message": "Actualmente no se admiten imágenes en formato GIF/PNG de más de { size } KB."
  },
  "go_to_the_editor_s_menubar_e6674c81": {
    "message": "Ir a la barra de menú del editor"
  },
  "go_to_the_editor_s_toolbar_a5cb875f": {
    "message": "Ir a la barra de herramientas del editor"
  },
  "grades_a61eba0a": { "message": "Calificaciones" },
  "greater_than_e98af662": { "message": "Mayor a" },
  "greater_than_or_equal_b911949a": { "message": "Mayor o igual a" },
  "greek_65c5b3f7": { "message": "Griego" },
  "green_15af4778": { "message": "Verde" },
  "grey_a55dceff": { "message": "Gris" },
  "group_documents_8bfd6ae6": { "message": "Documentos del grupo" },
  "group_files_4324f3df": { "message": "Archivos grupales" },
  "group_files_82e5dcdb": { "message": "Archivos del grupo" },
  "group_images_98e0ac17": { "message": "Imágenes del grupo" },
  "group_isomorphism_45b1458c": { "message": "Isomorfismo de grupos" },
  "group_links_9493129e": { "message": "Enlaces del grupo" },
  "group_media_2f3d128a": { "message": "Elementos multimedia del grupo" },
  "group_navigation_99f191a": { "message": "Navegación del grupo" },
  "h_bar_bb94deae": { "message": "Barra H" },
  "hat_ea321e35": { "message": "Sombrero" },
  "heading_2_5b84eed2": { "message": "Encabezado 2" },
  "heading_3_2c83de44": { "message": "Encabezado 3" },
  "heading_4_b2e74be7": { "message": "Encabezado 4" },
  "health_icon_8d292eb5": { "message": "Ícono de salud" },
  "hearts_suit_e50e04ca": { "message": "Corazones (palo)" },
  "height_69b03e15": { "message": "Altura" },
  "hexagon_d8468e0d": { "message": "Hexágono" },
  "hide_description_bfb5502e": { "message": "Ocultar descripción" },
  "hide_title_description_caf092ef": {
    "message": "Ocultar descripción { title }"
  },
  "home_351838cd": { "message": "Página de inicio" },
  "html_code_editor_fd967a44": { "message": "editor de código html" },
  "i_have_obtained_permission_to_use_this_file_6386f087": {
    "message": "He obtenido permiso para utilizar este archivo."
  },
  "i_hold_the_copyright_71ee91b1": {
    "message": "Soy el titular de los derechos de autor"
  },
  "icon_215a1dc6": { "message": "Ícono" },
  "icon_8168b2f8": { "message": "ícono" },
  "icon_color_b86dd6d6": { "message": "Ícono de color" },
  "icon_maker_icons_cc560f7e": { "message": "Íconos de Icon Maker" },
  "icon_options_7e32746e": { "message": "Opciones de ícono" },
  "icon_options_tray_2b407977": { "message": "Bandeja de opciones de íconos" },
  "icon_preview_1782a1d9": { "message": "Vista preliminar del ícono" },
  "icon_shape_30b61e7": { "message": "Forma del ícono" },
  "icon_size_9353edea": { "message": "Tamaño del ícono" },
  "if_left_empty_link_text_will_display_as_course_lin_61087540": {
    "message": "Si se deja el enlace vacío, el texto se mostrará como nombre del enlace del curso"
  },
  "if_you_do_not_select_usage_rights_now_this_file_wi_14e07ab5": {
    "message": "Si no selecciona los derechos de uso en este momento, se cancelará la publicación de este archivo después de cargarlo."
  },
  "image_8ad06": { "message": "Imagen" },
  "image_c1c98202": { "message": "imagen" },
  "image_options_5412d02c": { "message": "Opciones de imagen" },
  "image_options_tray_90a46006": { "message": "Bandeja de opciones de imagen" },
  "image_to_crop_3a34487d": { "message": "Imagen para recortar" },
  "images_7ce26570": { "message": "Imágenes" },
  "imaginary_portion_of_complex_number_2c733ffa": {
    "message": "Parte imaginaria (de números complejos)"
  },
  "in_element_of_19ca2f33": { "message": "En (elemento de)" },
  "indefinite_integral_6623307e": { "message": "Integral indefinida" },
  "indigo_2035fc55": { "message": "Índigo" },
  "inference_fed5c960": { "message": "Inferencia" },
  "infinity_7a10f206": { "message": "Infinito" },
  "insert_593145ef": { "message": "Insertar" },
  "insert_link_6dc23cae": { "message": "Insertar enlace" },
  "integers_336344e1": { "message": "Enteros" },
  "intersection_cd4590e4": { "message": "Intersección" },
  "invalid_entry_f7d2a0f5": { "message": "Ingreso no válido." },
  "invalid_file_c11ba11": { "message": "Archivo inválido" },
  "invalid_file_type_881cc9b2": { "message": "Tipo de archivo inválido" },
  "invalid_url_cbde79f": { "message": "URL inválida" },
  "iota_11c932a9": { "message": "Iota" },
  "kappa_2f14c816": { "message": "Kappa" },
  "kappa_variant_eb64574b": { "message": "Kappa (variante)" },
  "keyboard_shortcuts_ed1844bd": { "message": "Acceso rápido de teclado" },
  "lambda_4f602498": { "message": "Lambda" },
  "language_arts_icon_a798b0f8": { "message": "Ícono de artes del lenguaje" },
  "languages_icon_9d20539": { "message": "Ícono de idiomas" },
  "large_9c5e80e7": { "message": "Grande" },
  "left_angle_bracket_c87a6d07": { "message": "Símbolo de mayor" },
  "left_arrow_4fde1a64": { "message": "Flecha izquierda" },
  "left_arrow_with_hook_5bfcad93": { "message": "Flecha izquierda con gancho" },
  "left_ceiling_ee9dd88a": { "message": "Techo izquierdo" },
  "left_curly_brace_1726fb4": { "message": "Llave izquierda" },
  "left_downard_harpoon_arrow_1d7b3d2e": {
    "message": "Flecha de arpón hacia abajo y a la izquierda"
  },
  "left_floor_29ac2274": { "message": "Piso izquierdo" },
  "left_to_right_e9b4fd06": { "message": "Izquierda a derecha" },
  "left_upward_harpoon_arrow_3a562a96": {
    "message": "Flecha de arpón hacia arriba y a la izquierda"
  },
  "leftward_arrow_1e4765de": { "message": "Flecha hacia la izquierda" },
  "leftward_pointing_triangle_d14532ce": {
    "message": "Triángulo apuntando hacia la izquierda"
  },
  "less_than_a26c0641": { "message": "Menor a" },
  "less_than_or_equal_be5216cb": { "message": "Menor o igual a" },
  "library_icon_ae1e54cf": { "message": "Ícono de biblioteca" },
  "light_blue_5374f600": { "message": "Azul claro" },
  "link_7262adec": { "message": "Enlace" },
  "link_options_a16b758b": { "message": "Opciones de enlace" },
  "links_14b70841": { "message": "Enlaces" },
  "links_to_an_external_site_de74145d": {
    "message": "Enlaces a un sitio externo."
  },
  "load_more_35d33c7": { "message": "Cargar más" },
  "loading_25990131": { "message": "Cargando..." },
  "loading_bde52856": { "message": "Cargando" },
  "loading_closed_captions_subtitles_failed_95ceef47": {
    "message": "Error al cargar subtítulos."
  },
  "loading_failed_b3524381": { "message": "La carga falló..." },
  "loading_failed_e6a9d8ef": { "message": "Falló la carga." },
  "loading_folders_d8b5869e": { "message": "Cargando carpetas" },
  "loading_please_wait_d276220a": { "message": "Cargando, espere" },
  "loading_preview_9f077aa1": { "message": "Carga de la vista previa" },
  "locked_762f138b": { "message": "Bloqueado" },
  "logical_equivalence_76fca396": { "message": "Equivalencia lógica" },
  "logical_equivalence_short_8efd7b4f": {
    "message": "Equivalencia lógica (corta)"
  },
  "logical_equivalence_short_and_thick_1e1f654d": {
    "message": "Equivalencia lógica (corta y gruesa)"
  },
  "logical_equivalence_thick_662dd3f2": {
    "message": "Equivalencia lógica (gruesa)"
  },
  "low_horizontal_dots_cc08498e": { "message": "Puntos horizontales bajos" },
  "magenta_4a65993c": { "message": "Magenta" },
  "maps_to_e5ef7382": { "message": "Mapas a" },
  "math_icon_ad4e9d03": { "message": "Ícono de matemáticas" },
  "media_af190855": { "message": "Multimedia" },
  "media_file_is_processing_please_try_again_later_58a6d49": {
    "message": "El archivo multimedia se está procesando. Inténtelo de nuevo más tarde."
  },
  "medium_5a8e9ead": { "message": "Regular" },
  "middle_27dc1d5": { "message": "El medio" },
  "minimize_file_preview_da911944": {
    "message": "Minimice la vista previa del archivo"
  },
  "minimize_video_20aa554b": { "message": "Minimice el video" },
  "minus_fd961e2e": { "message": "Menos" },
  "minus_plus_3461f637": { "message": "Menos/más" },
  "misc_3b692ea7": { "message": "Varios" },
  "miscellaneous_e9818229": { "message": "Misceláneo" },
  "modules_c4325335": { "message": "Módulos" },
  "mu_37223b8b": { "message": "Mu" },
  "multi_color_image_63d7372f": { "message": "Imagen multicolor" },
  "multiplication_sign_15f95c22": { "message": "Signo de multiplicación" },
  "music_icon_4db5c972": { "message": "Ícono de música" },
  "must_be_at_least_percentage_22e373b6": {
    "message": "Debe ser al menos { percentage }%"
  },
  "must_be_at_least_width_x_height_px_41dc825e": {
    "message": "Debe ser al menos { width } x { height } px"
  },
  "my_files_2f621040": { "message": "Mis archivos" },
  "n_th_root_9991a6e4": { "message": "Raíz n-ésima" },
  "nabla_1e216d25": { "message": "Nabla" },
  "name_1aed4a1b": { "message": "Nombre" },
  "name_color_ceec76ff": { "message": "{ name } ({ color })" },
  "natural_music_54a70258": { "message": "Nota natural (música)" },
  "natural_numbers_3da07060": { "message": "Números naturales" },
  "navigate_through_the_menu_or_toolbar_415a4e50": {
    "message": "Navegar por el menú o la barra de herramientas"
  },
  "nested_greater_than_d852e60d": { "message": "Anidado mayor a" },
  "nested_less_than_27d17e58": { "message": "Anidado menor a" },
  "no_changes_to_save_d29f6e91": { "message": "No hay cambios para guardar." },
  "no_e16d9132": { "message": "No" },
  "no_file_chosen_9a880793": { "message": "No se seleccionó ningún archivo" },
  "no_preview_is_available_for_this_file_f940114a": {
    "message": "La vista previa de este archivo no está disponible."
  },
  "no_results_940393cf": { "message": "No hay resultados." },
  "no_results_found_for_filterterm_ad1b04c8": {
    "message": "No se encontraron resultados para { filterTerm }"
  },
  "none_3b5e34d2": { "message": "Ninguno" },
  "none_selected_b93d56d2": { "message": "Nada seleccionado" },
  "not_equal_6e2980e6": { "message": "No igual" },
  "not_in_not_an_element_of_fb1ffb54": {
    "message": "No en (no es un elemento de)"
  },
  "not_negation_1418ebb8": { "message": "No (negación)" },
  "not_subset_dc2b5e84": { "message": "No es un subconjunto" },
  "not_subset_strict_23d282bf": {
    "message": "No es un subconjunto (estricto)"
  },
  "not_superset_5556b913": { "message": "No es un superconjunto" },
  "not_superset_strict_24e06f36": {
    "message": "No es un superconjunto (estricto)"
  },
  "nu_1c0f6848": { "message": "Nu" },
  "octagon_e48be9f": { "message": "Octágono" },
  "olive_6a3e4d6b": { "message": "Verde oliva" },
  "omega_8f2c3463": { "message": "Omega" },
  "one_of_the_following_styles_must_be_added_to_save__1de769aa": {
    "message": "Se debe agregar uno de los siguientes estilos para guardar un ícono: Color del ícono, tamaño del contorno, texto del ícono o imagen"
  },
  "open_circle_e9bd069": { "message": "Círculo abierto" },
  "open_this_keyboard_shortcuts_dialog_9658b83a": {
    "message": "Abrir esta ventana de diálogo de atajos de teclado"
  },
  "open_title_application_fd624fc5": {
    "message": "Abrir aplicación { title }"
  },
  "operators_a2ef9a93": { "message": "Operadores" },
  "or_9b70ccaa": { "message": "O" },
  "orange_81386a62": { "message": "Anaranjado" },
  "other_editor_shortcuts_may_be_found_at_404aba4a": {
    "message": "Puede encontrar otros atajos de editor en"
  },
  "outline_color_3ef2cea7": { "message": "Color de contorno" },
  "outline_size_a6059a21": { "message": "Tamaño de contorno" },
  "p_is_not_a_valid_protocol_which_must_be_ftp_http_h_adf13fc2": {
    "message": "{ p } no es un protocolo válido, que debe ser ftp, http, https, mailto, skype, tel, o puede omitirse"
  },
  "pages_e5414c2c": { "message": "Páginas" },
  "paragraph_5e5ad8eb": { "message": "Párrafo" },
  "parallel_d55d6e38": { "message": "Paralelo" },
  "partial_derivative_4a9159df": { "message": "Parcial (derivada)" },
  "paste_5963d1c1": { "message": "Pegar" },
  "pentagon_17d82ea3": { "message": "Pentágono" },
  "people_b4ebb13c": { "message": "Personas" },
  "percentage_34ab7c2c": { "message": "Porcentaje" },
  "percentage_must_be_a_number_8033c341": {
    "message": "El porcentaje debe ser un número"
  },
  "performing_arts_icon_f3497486": { "message": "Ícono de artes escénicas" },
  "perpendicular_7c48ede4": { "message": "Perpendicular" },
  "phi_4ac33b6d": { "message": "Phi" },
  "phi_variant_c9bb3ac5": { "message": "Phi (variante)" },
  "physical_education_icon_d7dffd3e": {
    "message": "Ícono de educación física"
  },
  "pi_dc4f0bd8": { "message": "Pi" },
  "pi_variant_10f5f520": { "message": "Pi (variante)" },
  "pink_68ad45cb": { "message": "Rosado" },
  "pixels_52ece7d1": { "message": "Pixeles" },
  "play_media_comment_35257210": {
    "message": "Reproducir comentario de multimedia."
  },
  "play_media_comment_by_name_from_createdat_c230123d": {
    "message": "Reproducir comentario multimedia de { name } desde { createdAt }."
  },
  "plus_d43cd4ec": { "message": "Más" },
  "plus_minus_f8be2e83": { "message": "Más/menos" },
  "posted_when_a578f5ab": { "message": "Publicado: { when }" },
  "power_set_4f26f316": { "message": "Conjunto potencia" },
  "precedes_196b9aef": { "message": "Precede" },
  "precedes_equal_20701e84": { "message": "Precede al igual" },
  "preformatted_d0670862": { "message": "Previamente formateado" },
  "preview_53003fd2": { "message": "Vista previa" },
  "preview_in_overlay_ed772c46": { "message": "Vista previa en superposición" },
  "preview_inline_9787330": { "message": "Vista previa en línea" },
  "prime_917ea60e": { "message": "Primo" },
  "prime_numbers_13464f61": { "message": "Números primos" },
  "product_39cf144f": { "message": "Producto" },
  "proportional_f02800cc": { "message": "Proporcional" },
  "protocol_must_be_ftp_http_https_mailto_skype_tel_o_73beb4f8": {
    "message": "El protocolo debe ser ftp, http, https, mailto, skype, tel, o puede omitirse"
  },
  "psi_e3f5f0f7": { "message": "Psi" },
  "published_c944a23d": { "message": "publicado" },
  "published_when_302d8e23": { "message": "Publicado: { when }" },
  "pumpkin_904428d5": { "message": "Calabaza" },
  "purple_7678a9fc": { "message": "Morado" },
  "quaternions_877024e0": { "message": "Cuaterniones" },
  "quizzes_7e598f57": { "message": "Exámenes" },
  "rational_numbers_80ddaa4a": { "message": "Números racionales" },
  "real_numbers_7c99df94": { "message": "Números reales" },
  "real_portion_of_complex_number_7dad33b5": {
    "message": "Parte real (de números complejos)"
  },
  "record_7c9448b": { "message": "Grabar" },
  "red_8258edf3": { "message": "Rojo" },
  "relationships_6602af70": { "message": "Relaciones" },
  "religion_icon_246e0be1": { "message": "Ícono de religión" },
  "replace_e61834a7": { "message": "Reemplazar" },
  "reset_95a81614": { "message": "Restablecer" },
  "resize_ec83d538": { "message": "Redimensionar" },
  "restore_auto_save_deccd84b": {
    "message": "¿Desea restablecer el guardado automático?"
  },
  "reverse_turnstile_does_not_yield_7558be06": {
    "message": "Trinquete invertido (no da resultados)"
  },
  "rho_a0244a36": { "message": "Rho" },
  "rho_variant_415245cd": { "message": "Rho (variante)" },
  "rich_content_editor_2708ef21": {
    "message": "Editor de Contenido Enriquecido"
  },
  "rich_text_area_press_alt_0_for_rich_content_editor_9d23437f": {
    "message": "Área del texto enriquecido. Presione ALT+0 para acceder a los atajos del Editor de contenido enriquecido."
  },
  "right_angle_bracket_d704e2d6": { "message": "Símbolo de menor" },
  "right_arrow_35e0eddf": { "message": "Flecha a la derecha" },
  "right_arrow_with_hook_29d92d31": {
    "message": "Flecha a la izquierda con gancho"
  },
  "right_ceiling_839dc744": { "message": "Techo derecho" },
  "right_curly_brace_5159d5cd": { "message": "Llave derecha" },
  "right_downward_harpoon_arrow_d71b114f": {
    "message": "Flecha de arpón hacia abajo y a la derecha"
  },
  "right_floor_5392d5cf": { "message": "Piso derecho" },
  "right_to_left_9cfb092a": { "message": "Derecha a izquierda" },
  "right_upward_harpoon_arrow_f5a34c73": {
    "message": "Flecha de arpón hacia arriba y a la derecha"
  },
  "rightward_arrow_32932107": { "message": "Flecha hacia la derecha" },
  "rightward_pointing_triangle_60330f5c": {
    "message": "Triángulo apuntando hacia la derecha"
  },
  "rotate_image_90_degrees_2ab77c05": { "message": "Rotar imagen -90 grados" },
  "rotate_image_90_degrees_6c92cd42": { "message": "Rotar imagen 90 grados" },
  "rotation_9699c538": { "message": "Rotación" },
  "sadly_the_pretty_html_editor_is_not_keyboard_acces_50da7665": {
    "message": "Lamentablemente, no se puede acceder al Editor HTML agradable desde el teclado. Acceda al Editor de HTML sin formato aquí."
  },
  "save_11a80ec3": { "message": "Guardar" },
  "script_l_42a7b254": { "message": "Script L" },
  "search_280d00bd": { "message": "Buscar" },
  "select_crop_shape_d441feeb": { "message": "Seleccionar forma de corte" },
  "select_language_7c93a900": { "message": "Seleccionar idioma" },
  "selected_linkfilename_c093b1f2": {
    "message": "{ linkFileName } seleccionado"
  },
  "set_minus_b46e9b88": { "message": "Fijar menor" },
  "sharp_music_ab956814": { "message": "Sostenido (música)" },
  "shift_o_to_open_the_pretty_html_editor_55ff5a31": {
    "message": "Mayúsc-O para abrir el editor html agradable."
  },
  "sigma_5c35e553": { "message": "Sigma" },
  "sigma_variant_8155625": { "message": "Sigma (variante)" },
  "single_color_image_4e5d4dbc": { "message": "Imagen de un solo color" },
  "single_color_image_color_95fa9a87": { "message": "Imagen de un solo color" },
  "size_b30e1077": { "message": "Tamaño" },
  "size_of_caption_file_is_greater_than_the_maximum_m_bff5f86e": {
    "message": "El tamaño del archivo de subtítulos es superior al tamaño del archivo permitido de { max } kB."
  },
  "small_b070434a": { "message": "Pequeño" },
  "solid_circle_9f061dfc": { "message": "Círculo continuo" },
  "something_went_wrong_89195131": { "message": "Algo salió mal." },
  "something_went_wrong_and_i_don_t_know_what_to_show_e0c54ec8": {
    "message": "Algo salió mal y no sé qué mostrarle."
  },
  "something_went_wrong_check_your_connection_reload__c7868286": {
    "message": "Algo salió mal. Verifique su conexión, vuelva a cargar la página y vuelva a intentarlo."
  },
  "something_went_wrong_d238c551": { "message": "Se produjo un error." },
  "sort_by_e75f9e3e": { "message": "Organizar según" },
  "spades_suit_b37020c2": { "message": "Espadas (palo)" },
  "square_511eb3b3": { "message": "Cuadrado" },
  "square_cap_9ec88646": { "message": "Extremo cuadrado" },
  "square_cup_b0665113": { "message": "Copa cuadrada" },
  "square_root_e8bcbc60": { "message": "Raíz cuadrada" },
  "square_root_symbol_d0898a53": { "message": "Símbolo de raíz cuadrada" },
  "square_subset_17be67cb": { "message": "Subconjunto cuadrado" },
  "square_subset_strict_7044e84f": {
    "message": "Subconjunto cuadrado (estricto)"
  },
  "square_superset_3be8dae1": { "message": "Superconjunto cuadrado" },
  "square_superset_strict_fa4262e4": {
    "message": "Superconjunto cuadrado (estricto)"
  },
  "star_8d156e09": { "message": "Estrella" },
  "steel_blue_14296f08": { "message": "Azul acero" },
  "styles_2aa721ef": { "message": "Estilos" },
  "submit_a3cc6859": { "message": "Entregar" },
  "subscript_59744f96": { "message": "Subíndice" },
  "subset_19c1a92f": { "message": "Subconjunto" },
  "subset_strict_8d8948d6": { "message": "Subconjunto (estricto)" },
  "succeeds_9cc31be9": { "message": "Sigue" },
  "succeeds_equal_158e8c3a": { "message": "Sigue al igual" },
  "sum_b0842d31": { "message": "Suma" },
  "superscript_8cb349a2": { "message": "Superíndice" },
  "superset_c4db8a7a": { "message": "Superconjunto" },
  "superset_strict_c77dd6d2": { "message": "Superconjunto (estricto)" },
  "supported_file_types_srt_or_webvtt_7d827ed": {
    "message": "Tipos de archivos admitidos: SRT o WebVTT"
  },
  "switch_to_pretty_html_editor_a3cee15f": {
    "message": "Cambiar al Editor de HTML acondicionado"
  },
  "switch_to_raw_html_editor_f970ae1a": {
    "message": "Cambiar al Editor de HTML en crudo"
  },
  "switch_to_the_html_editor_146dfffd": { "message": "Cambiar al editor html" },
  "switch_to_the_rich_text_editor_63c1ecf6": {
    "message": "Cambiar al editor de texto enriquecido"
  },
  "syllabus_f191f65b": { "message": "Programa" },
  "tab_arrows_4cf5abfc": { "message": "Tabulador/flechas" },
  "tau_880974b7": { "message": "Tau" },
  "teal_f729a294": { "message": "Verde azulado" },
  "text_7f4593da": { "message": "Texto" },
  "text_background_color_16e61c3f": { "message": "Color del fondo del texto" },
  "text_color_acf75eb6": { "message": "Color del texto" },
  "text_optional_384f94f7": { "message": "Texto (opcional)" },
  "text_position_8df8c162": { "message": "Posición del texto" },
  "text_size_887c2f6": { "message": "Tamaño del texto" },
  "the_document_preview_is_currently_being_processed__7d9ea135": {
    "message": "Todavía se está procesando la vista previa del documento. Inténtelo de nuevo más tarde."
  },
  "the_material_is_in_the_public_domain_279c39a3": {
    "message": "El material es de dominio público"
  },
  "the_material_is_licensed_under_creative_commons_3242cb5e": {
    "message": "El material tiene licencia Creative Commons"
  },
  "the_material_is_subject_to_an_exception_e_g_fair_u_a39c8ca2": {
    "message": "El material está sujeto a una excepción, como el uso legítimo, el derecho de cita u otros en virtud de las leyes aplicables de derechos de autor."
  },
  "the_pretty_html_editor_is_not_keyboard_accessible__d6d5d2b": {
    "message": "No se puede acceder al editor html agradable desde el teclado. Presione Mayúsc O para abrir el editor HTML sin formato."
  },
  "therefore_d860e024": { "message": "Entonces" },
  "theta_ce2d2350": { "message": "Theta" },
  "theta_variant_fff6da6f": { "message": "Theta (variante)" },
  "thick_downward_arrow_b85add4c": { "message": "Flecha gruesa hacia abajo" },
  "thick_left_arrow_d5f3e925": { "message": "Flecha gruesa izquierda" },
  "thick_leftward_arrow_6ab89880": {
    "message": "Flecha gruesa hacia la izquierda"
  },
  "thick_right_arrow_3ed5e8f7": { "message": "Flecha gruesa derecha" },
  "thick_rightward_arrow_a2e1839e": {
    "message": "Flecha gruesa hacia la derecha"
  },
  "thick_upward_arrow_acd20328": { "message": "Flecha gruesa hacia arriba" },
  "this_document_cannot_be_displayed_within_canvas_7aba77be": {
    "message": "Este documento no se puede mostrar en Canvas."
  },
  "this_equation_cannot_be_rendered_in_basic_view_9b6c07ae": {
    "message": "Esta ecuación no se puede representar en vista básica."
  },
  "this_image_is_currently_unavailable_25c68857": {
    "message": "Esta imagen no está disponible actualmente"
  },
  "though_your_video_will_have_the_correct_title_in_t_90e427f3": {
    "message": "Aunque su video tendrá el título correcto en el navegador, no pudimos actualizarlo en la base de datos."
  },
  "title_ee03d132": { "message": "Título" },
  "to_be_posted_when_d24bf7dc": { "message": "A publicarse: { when }" },
  "to_do_when_2783d78f": { "message": "Por hacer: { when }" },
  "toggle_summary_group_413df9ac": { "message": "Alternar { summary } grupo" },
  "toggle_tooltip_d3b7cb86": {
    "message": "Activar/desactivar descripción emergente"
  },
  "tools_2fcf772e": { "message": "Herramientas" },
  "top_66e0adb6": { "message": "Arriba" },
  "tray_839df38a": { "message": "Bandeja" },
  "triangle_6072304e": { "message": "Triángulo" },
  "turnstile_yields_f9e76df1": { "message": "Trinquete (da resultados)" },
  "type_control_f9_to_access_image_options_text_a47e319f": {
    "message": "presione Control F9 para acceder a las opciones de imagen. { text }"
  },
  "type_control_f9_to_access_link_options_text_4ead9682": {
    "message": "presione Control F9 para acceder a las opciones de enlace. { text }"
  },
  "type_control_f9_to_access_table_options_text_92141329": {
    "message": "presione Control F9 para acceder a las opciones de tabla. { text }"
  },
  "union_e6b57a53": { "message": "Unión" },
  "unpublished_dfd8801": { "message": "no publicado" },
  "untitled_efdc2d7d": { "message": "sin título" },
  "up_and_left_diagonal_arrow_e4a74a23": {
    "message": "Flecha diagonal hacia arriba y a la izquierda"
  },
  "up_and_right_diagonal_arrow_935b902e": {
    "message": "Flecha diagonal hacia arriba y a la derecha"
  },
  "upload_file_fd2361b8": { "message": "Cargar archivo" },
  "upload_image_6120b609": { "message": "Cargar imagen" },
  "upload_media_ce31135a": { "message": "Cargar multimedia" },
  "uploading_19e8a4e7": { "message": "Cargando" },
  "uppercase_delta_d4f4bc41": { "message": "Delta en mayúsculas" },
  "uppercase_gamma_86f492e9": { "message": "Gamma en mayúsculas" },
  "uppercase_lambda_c78d8ed4": { "message": "Lambda en mayúsculas" },
  "uppercase_omega_8aedfa2": { "message": "Omega en mayúsculas" },
  "uppercase_phi_caa36724": { "message": "Phi en mayúsculas" },
  "uppercase_pi_fcc70f5e": { "message": "Pi en mayúsculas" },
  "uppercase_psi_6395acbe": { "message": "Psi en mayúsculas" },
  "uppercase_sigma_dbb70e92": { "message": "Sigma en mayúsculas" },
  "uppercase_theta_49afc891": { "message": "Theta en mayúsculas" },
  "uppercase_upsilon_8c1e623e": { "message": "Ípsilon en mayúsculas" },
  "uppercase_xi_341e8556": { "message": "Xi en mayúsculas" },
  "upsilon_33651634": { "message": "Ípsilon" },
  "upward_and_downward_pointing_arrow_fa90a918": {
    "message": "Flecha apuntando hacia arriba y hacia abajo"
  },
  "upward_and_downward_pointing_arrow_thick_d420fdef": {
    "message": "Flecha (gruesa) apuntando hacia arriba y hacia abajo"
  },
  "upward_arrow_9992cb2d": { "message": "Flecha hacia arriba" },
  "upward_pointing_triangle_d078d7cb": {
    "message": "Triángulo apuntando hacia arriba"
  },
  "url_22a5f3b8": { "message": "URL" },
  "usage_right_ff96f3e2": { "message": "Derecho de uso:" },
  "usage_rights_required_5fe4dd68": {
    "message": "Derechos de uso (obligatorio)"
  },
  "use_arrow_keys_to_navigate_options_2021cc50": {
    "message": "Use las teclas de flecha para navegar entre las opciones."
  },
  "use_arrow_keys_to_select_a_shape_c8eb57ed": {
    "message": "Utilice las teclas de flecha para seleccionar una forma."
  },
  "use_arrow_keys_to_select_a_size_699a19f4": {
    "message": "Utilice las teclas de flecha para seleccionar un tamaño."
  },
  "use_arrow_keys_to_select_a_text_position_72f9137c": {
    "message": "Usar las teclas de flechas para seleccionar la posición del texto."
  },
  "use_arrow_keys_to_select_a_text_size_65e89336": {
    "message": "Usar las teclas de flechas para seleccionar el tamaño del texto."
  },
  "use_arrow_keys_to_select_an_outline_size_e009d6b0": {
    "message": "Utilice las teclas de flecha para seleccionar un tamaño de contorno."
  },
  "used_by_screen_readers_to_describe_the_content_of__4f14b4e4": {
    "message": "Utilizado por lectores de pantalla para describir el contenido de un { TYPE }"
  },
  "used_by_screen_readers_to_describe_the_content_of__b1e76d9e": {
    "message": "Utilizado por los lectores de pantalla para describir el contenido de una imagen"
  },
  "used_by_screen_readers_to_describe_the_video_37ebad25": {
    "message": "Usado por lectores de pantalla para describir el video"
  },
  "user_documents_c206e61f": { "message": "Documentos del usuario" },
  "user_files_78e21703": { "message": "Archivos del usuario" },
  "user_images_b6490852": { "message": "Imágenes del usuario" },
  "user_media_14fbf656": { "message": "multimedia del usuario" },
  "vector_notation_cf6086ab": { "message": "Vector (notación)" },
  "vertical_bar_set_builder_notation_4300495f": {
    "message": "Barra vertical (notación de conjuntos)"
  },
  "vertical_dots_bfb21f14": { "message": "Puntos verticales" },
  "video_options_24ef6e5d": { "message": "Opciones de video" },
  "video_options_tray_3b9809a5": { "message": "Bandeja de opciones de video" },
  "video_player_for_9e7d373b": { "message": "Reproductor de video para " },
  "video_player_for_title_ffd9fbc4": {
    "message": "Reproductor de video para { title }"
  },
  "view_ba339f93": { "message": "Ver" },
  "view_description_30446afc": { "message": "Ver descripción" },
  "view_keyboard_shortcuts_34d1be0b": {
    "message": "Ver los accesos directos de teclado"
  },
  "view_title_description_67940918": { "message": "Ver descripción { title }" },
  "view_word_and_character_counts_a743dd0c": {
    "message": "Ver recuento de palabras y caracteres"
  },
  "white_87fa64fd": { "message": "Blanco" },
  "width_492fec76": { "message": "Ancho" },
  "width_and_height_must_be_numbers_110ab2e3": {
    "message": "El ancho y la altura deben ser números"
  },
  "width_x_height_px_ff3ccb93": { "message": "{ width } x { height } px" },
  "wiki_home_9cd54d0": { "message": "Página de Inicio de Wiki" },
  "wreath_product_200b38ef": { "message": "Producto en corona" },
  "xi_149681d0": { "message": "Xi" },
  "yes_dde87d5": { "message": "Sí" },
  "you_have_unsaved_changes_in_the_icon_maker_tray_do_e8cf5f1b": {
    "message": "Tiene cambios sin guardar en la bandeja de Icon Maker. ¿Desea continuar sin guardar esos cambios?"
  },
  "you_may_not_upload_an_empty_file_11c31eb2": {
    "message": "No puede cargar un archivo vacío."
  },
  "your_image_has_been_compressed_for_icon_maker_imag_2e45cd91": {
    "message": "La imagen se ha comprimido para Icon Maker. Las imágenes inferiores a { size } KB no se comprimirán."
  },
  "zeta_5ef24f0e": { "message": "Zeta" },
  "zoom_f3e54d69": { "message": "Zoom" },
  "zoom_in_image_bb97d4f": { "message": "Ampliar imagen" },
  "zoom_out_image_d0a0a2ec": { "message": "Alejar imagen" }
}


formatMessage.addLocale({es: locale})
