<?php
if(!defined('ABSPATH')) {
	exit;
}

if(!class_exists('Dfd_Admin_Assets')) {
	class Dfd_Admin_Assets {
		function __construct() {
			add_action('admin_enqueue_scripts', array($this, 'enqueue'));
		}
		function enqueue($hook) {
			global $dfd_ronneby;

			wp_enqueue_style('dfd_font_open_sans', "//fonts.googleapis.com/css?family=Roboto:400,500,700");
			wp_register_style('dfd-admin-style', get_template_directory_uri() . '/assets/css/admin-panel.css');
			wp_enqueue_style('dfd-admin-style');

			wp_enqueue_script('dfd_admin_script', get_template_directory_uri().'/assets/admin/js/admin-scripts.js', array('jquery'), false, true);

			if(class_exists( 'Vc_Manager', false )) {
				$min = '.min';

				if(isset($dfd_ronneby['dev_mode']) && $dfd_ronneby['dev_mode'] == 'on' && defined('DFD_DEBUG_MODE') && DFD_DEBUG_MODE) {
					$min = '';
				}

				if(wp_script_is('vc-frontend-editor-min-js', 'enqueued')) {
					wp_enqueue_script('vc-inline-editor',get_template_directory_uri().'/assets/admin/js/vc-inline-editor'.$min.'.js',array('vc-frontend-editor-min-js'),'1.5',true);
				} elseif(wp_script_is('vc_inline_custom_view_js', 'enqueued')) {
					wp_enqueue_script('vc-inline-editor',get_template_directory_uri().'/assets/admin/js/vc-inline-editor.min.js',array('vc_inline_custom_view_js'),'1.5',true);
				}

				if($hook == "post.php" || $hook == "post-new.php" || $hook == "edit.php") {
					wp_enqueue_script('dfd_vc_admin_scripts', get_template_directory_uri().'/assets/admin/js/vc_admin_scripts.js', array('jquery'), false, true);
				}

				if(function_exists('dfd_admin_custom_css')) {
					dfd_admin_custom_css();
				}
			}
			
			if(isset($dfd_ronneby['enable_wordpress_heartbeat']) && $dfd_ronneby['enable_wordpress_heartbeat'] == 'off') {
				wp_deregister_script('heartbeat');
			}
		}
	}
	
	$Dfd_Admin_Assets = new Dfd_Admin_Assets();
}