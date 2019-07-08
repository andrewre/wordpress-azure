<?php
if(!defined('ABSPATH')) {
	exit;
}

if(!class_exists('Dfd_Mixed_Actions')) {
	class Dfd_Mixed_Actions {
		public $pagenow;
		
		public function __construct() {
			global $pagenow;
			$this->pagenow = $pagenow;
			
			$this->init();
		}
		public function init() {
			$this->actions();
			$this->filters();
		}
		public function actions() {
			add_action('switch_theme', array($this, 'switchTheme'));
			add_action('after_setup_theme', array($this, 'initMenu'));
			add_action('widgets_init', array($this, 'widgetsInit'));
		}
		public function filters() {
			add_filter('use_default_gallery_style' , array($this, 'useDefaultGalleryStyleFilter'));
		}
		public function switchTheme() {
			update_option('image_default_link_type', 'none' );
			update_option('image_default_size', 'large' );
			update_option('yith_wcwl_button_position', 'shortcode');
			$custom_row_class = get_option('ultimate_custom_vc_row');
			if(!$custom_row_class) {
				update_option('ultimate_custom_vc_row', 'vc-row-wrapper');
			}
		}
		public function initMenu() {
			require_once get_template_directory().'/inc/lib/menu/mega_menu.php';
			if(is_admin()) {
				require_once get_template_directory().'/inc/lib/menu/edit_mega_menu_walker.php';
			} else {
				require_once get_template_directory().'/inc/lib/menu/front_mega_menu_walker.php';
			}

			$class = DFD_MEGA_MENU_CLASS;
			$mega_menu = new $class();
		}
		public function useDefaultGalleryStyleFilter($existing_code) {
			return false;
		}
		public function widgetsInit() {
			register_sidebar(array(
				'name' => esc_attr__('Left Sidebar', 'dfd'),
				'id' => 'sidebar-left',
				'before_widget' => '<section id="%1$s" class="widget %2$s">',
				'after_widget' => '</section>',
				'before_title' => '<h3 class="widget-title">',
				'after_title' => '</h3>',
			));
			register_sidebar(array(
				'name' => esc_attr__('Right Sidebar', 'dfd'),
				'id' => 'sidebar-right',
				'before_widget' => '<section id="%1$s" class="widget %2$s">',
				'after_widget' => '</section>',
				'before_title' => '<h3 class="widget-title">',
				'after_title' => '</h3>',
			));
			register_sidebar(array(
				'name' => esc_attr__('Footer column 1', 'dfd'),
				'id' => 'sidebar-footer-col1',
				'before_widget' => '<section id="%1$s" class="widget %2$s">',
				'after_widget' => '</section>',
				'before_title' => '<h3 class="widget-title">',
				'after_title' => '</h3>',
			));
			register_sidebar(array(
				'name' => esc_attr__('Footer column 2', 'dfd'),
				'id' => 'sidebar-footer-col2',
				'before_widget' => '<section id="%1$s" class="widget %2$s">',
				'after_widget' => '</section>',
				'before_title' => '<h3 class="widget-title">',
				'after_title' => '</h3>',
			));
			register_sidebar(array(
				'name' => esc_attr__('Footer column 3', 'dfd'),
				'id' => 'sidebar-footer-col3',
				'before_widget' => '<section id="%1$s" class="widget %2$s">',
				'after_widget' => '</section>',
				'before_title' => '<h3 class="widget-title">',
				'after_title' => '</h3>',
			));
			register_sidebar(array(
				'name' => esc_attr__('Footer column 4', 'dfd'),
				'id' => 'sidebar-footer-col4',
				'before_widget' => '<section id="%1$s" class="widget %2$s">',
				'after_widget' => '</section>',
				'before_title' => '<h3 class="widget-title">',
				'after_title' => '</h3>',
			));
			register_sidebar(array(
				'name' => esc_attr__('Sidebar for shop. Product page', 'dfd'),
				'id' => 'shop-sidebar',
				'before_widget' => '<section id="%1$s" class="widget %2$s">',
				'after_widget' => '</section>',
				'before_title' => '<h3 class="widget-title">',
				'after_title' => '</h3>',
			));
			register_sidebar(array(
				'name' => esc_attr__('Sidebar for shop left. Product list', 'dfd'),
				'id' => 'shop-sidebar-product-list-left',
				'before_widget' => '<section id="%1$s" class="widget %2$s">',
				'after_widget' => '</section>',
				'before_title' => '<h3 class="widget-title">',
				'after_title' => '</h3>',
			));
			register_sidebar(array(
				'name' => esc_attr__('Sidebar for shop right. Product list', 'dfd'),
				'id' => 'shop-sidebar-product-list',
				'before_widget' => '<section id="%1$s" class="widget %2$s">',
				'after_widget' => '</section>',
				'before_title' => '<h3 class="widget-title">',
				'after_title' => '</h3>',
			));
			register_sidebar(array(
				'name' => esc_attr__('BBPress right', 'dfd'),
				'id' => 'sidebar-bbres-right',
				'before_widget' => '<section id="%1$s" class="widget %2$s">',
				'after_widget' => '</section>',
				'before_title' => '<h3 class="widget-title">',
				'after_title' => '</h3>',
			));
			register_sidebar(array(
				'name' => esc_attr__('Side Area', 'dfd'),
				'id' => 'sidebar-sidearea',
				'before_widget' => '<div id="%1$s" class="widget %2$s">',
				'after_widget' => '</div>',
				'before_title' => '<h3 class="widget-title">',
				'after_title' => '</h3>',
			));
		}
	}
	
	$Dfd_Mixed_Actions = new Dfd_Mixed_Actions();
}