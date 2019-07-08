<?php
if ( ! defined( 'ABSPATH' ) ) { exit; }
if (!class_exists('DFD_Mega_menu')) {
	class DFD_Mega_menu {
		var $_options;

		public function __construct() {
			$this->_options = self::options();
			$this->_add_filters();
		}
		
		public static function options() {
			return array(
				'_dfd_mega_menu_icon'		=> array(
						'type' => 'text',
						'label' => esc_attr__( 'Icon', 'dfd' ),
						'default' => '',
						'size' => 'wide',
					),
				'_dfd_mega_menu_subtitle'	=> array(
						'type' => 'text',
						'label' => esc_attr__('Subtitle', 'dfd'),
						'default' => '',
						'size' => 'wide',
						'depth' => '1',
						'class' => 'dfd-hide-only-depth-0',
					),
				'_dfd_mega_menu_image'	=> array(
						'type' => 'upload',
						'label' => esc_attr__('Image', 'dfd'),
						'default' => '',
						'size' => 'wide',
						'depth' => '0',
						'class' => 'dfd-show-only-depth-0',
					),
				
				'_dfd_mega_menu_bg_position'	=> array(
						'type' => 'select',
						'label' => esc_attr__( 'Background position', 'dfd' ),
						'default' => 0,
						'options' => array(
								'left top' => esc_attr__('Left top', 'dfd'),
								'left center' => esc_attr__('Left center', 'dfd'),
								'left bottom' => esc_attr__('Left bottom', 'dfd'),
								'right top' => esc_attr__('Right top', 'dfd'),
								'right center' => esc_attr__('Right center', 'dfd'),
								'right bottom' => esc_attr__('Right bottom', 'dfd'),
								'center top' => esc_attr__('Center top', 'dfd'),
								'center center' => esc_attr__('Center center', 'dfd'),
								'center bottom' => esc_attr__('Center bottom', 'dfd')
							),
						'size' => 'thin',
						'depth' => '0',
						'class' => 'dfd-show-only-depth-0',
					),
				'_dfd_mega_menu_bg_repeat'	=> array(
						'type' => 'select',
						'label' => esc_attr__( 'Background repeat', 'dfd' ),
						'default' => 'no-repeat',
						'options' => array(
								'no-repeat' =>esc_attr__( 'No-repeat', 'dfd' ),
								'repeat' =>esc_attr__( 'Repeat', 'dfd' ),
								'repeat-x' =>esc_attr__( 'Repeat-x', 'dfd' ),
								'repeat-y' =>esc_attr__( 'Repeat-y', 'dfd' ),
							),
						'size' => 'thin',
						'depth' => '0',
						'class' => 'dfd-show-only-depth-0',
					),
				'_dfd_mega_menu_enabled'	=> array(
						'type' => 'select',
						'label' => esc_attr__( 'Enable mega menu', 'dfd' ),
						'default' => 0,
						'options' => array(1=>esc_attr__( 'Yes', 'dfd' ), 0=>esc_attr__( 'No', 'dfd' )),
						'size' => 'thin',
						'depth' => '0',
						'class' => 'dfd-show-only-depth-0 dfd-mega-menu',
					),
				'_dfd_full_width_menu_enabled'	=> array(
						'type' => 'select',
						'label' => esc_attr__( 'Enable full-width menu', 'dfd' ),
						'default' => 0,
						'options' => array(1=>esc_attr__( 'Yes', 'dfd' ), 0=>esc_attr__( 'No', 'dfd' )),
						'size' => 'thin',
						'depth' => '0',
						'class' => 'dfd-show-only-depth-0',
					),
				'_dfd_mega_menu_limit_columns'	=> array(
						'type' => 'select',
						'label' => esc_attr__( 'Limit Max columns number', 'dfd' ),
						'default' => 0,
						'options' => array(
								''	=>	esc_attr__( 'None', 'dfd' ),
								1	=>	esc_attr__( 'One', 'dfd' ),
								2	=>	esc_attr__( 'Two', 'dfd' ),
								3	=>	esc_attr__( 'Three', 'dfd' ),
								4	=>	esc_attr__( 'Four', 'dfd' ),
								5	=>	esc_attr__( 'Five', 'dfd' ),
								6	=>	esc_attr__( 'Six', 'dfd' ),
							),
						'size' => 'thin',
						'depth' => '0',
						'class' => 'dfd-show-only-depth-0 dfd-columns-limit',
					),
			);
		}

		private function _add_filters() {
			# Add custom options to menu
			add_filter('wp_setup_nav_menu_item', array($this, 'add_custom_options'));

			# Update custom menu options
			add_action('wp_update_nav_menu_item', array($this, 'update_custom_options'), 10, 3);

			# Set edit menu walker
			add_filter('wp_edit_nav_menu_walker', array($this, 'apply_edit_walker_class'), 10, 2);
			
			# Mega menu javascript
			add_action('admin_enqueue_scripts', array( $this, 'dfd_mega_menu_admin_scripts' ), 80);
		}
		
		
 
		function dfd_mega_menu_admin_scripts() {
			wp_enqueue_media();
		}
		

		/**
		 * Register custom options and load options values
		 * 
		 * @param obj $item Menu Item
		 * @return obj Menu Item
		 */
		public function add_custom_options($item) {

			foreach($this->_options as $option => $params) {
				$item->$option = get_post_meta($item->ID, $option, true);
				if ($item->$option===false) {
					$item->$option = $params['default'];
				}
			}

			return $item;
		}

		public function update_custom_options($menu_id, $menu_item_id, $args) {
			foreach($this->_options as $option => $params) {
				$key = 'menu-item-'. $option;
				
				//$option_value = $params['default']; // ???
				$option_value = '';
				
				if (isset($_REQUEST[$key], $_REQUEST[$key][$menu_item_id])) {
					$option_value = $_REQUEST[$key][$menu_item_id];
				}
				
				update_post_meta($menu_item_id, $option, $option_value );
			}
		}

		public function apply_edit_walker_class( $walker, $menu_id ) {
			return DFD_EDIT_MENU_WALKER_CLASS;
		}
	}
}