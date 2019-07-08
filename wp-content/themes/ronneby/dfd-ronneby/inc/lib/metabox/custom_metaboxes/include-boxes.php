<?php
if ( ! defined( 'ABSPATH' ) ) { exit; }

add_action( 'init', 'cmb_initialize_cmb_meta_boxes', 9999 );
/**
 * Initialize the metabox class.
 */
function cmb_initialize_cmb_meta_boxes() {
	if ( ! class_exists( 'cmb_Meta_Box' ) ){
        require_once get_template_directory().'/inc/lib/metabox/init.php';
	}
}

require_once get_template_directory() . '/inc/lib/metabox/custom_metaboxes/one-page.php';
require_once get_template_directory() . '/inc/lib/metabox/custom_metaboxes/post-boxes.php';
require_once get_template_directory() . '/inc/lib/metabox/custom_metaboxes/portfolio-boxes.php'; 
require_once get_template_directory() . '/inc/lib/metabox/custom_metaboxes/product-boxes.php'; 
require_once get_template_directory() . '/inc/lib/metabox/custom_metaboxes/gallery-boxes.php'; 
require_once get_template_directory() . '/inc/lib/metabox/custom_metaboxes/headers-boxes.php';
require_once get_template_directory() . '/inc/lib/metabox/custom_metaboxes/custom-headers.php'; 
require_once get_template_directory() . '/inc/lib/metabox/custom_metaboxes/custom-sidebar.php'; 
require_once get_template_directory() . '/inc/lib/metabox/custom_metaboxes/page-boxes.php';
require_once get_template_directory() . '/inc/lib/metabox/custom_metaboxes/preloader-options.php';
require_once get_template_directory() . '/inc/lib/metabox/custom_metaboxes/author-boxes.php';