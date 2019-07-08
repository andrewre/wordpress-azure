<?php
if(!defined('ABSPATH')) {
	exit;
}

if(!isset($content_width)) {
	$content_width = 1200;
}

if(!class_exists('Dfd_Ronneby_Includes')) {
	class Dfd_Ronneby_Includes {
		public $pagenow;
		function __construct() {
			global $pagenow;
			
			$this->pagenow = $pagenow;
			$this->constants();
			add_action('after_setup_theme', array($this, 'themeSupport'));
			$this->mixedInclude();
			if(is_admin()) {
				$this->adminInclude();
			} else {
				$this->frontInclude();
			}
			if(!empty($this->pagenow) && $this->pagenow == 'admin-ajax.php') {
				$this->ajaxActions();
			}
		}
		function constants() {
			define('DFD_THEME_SETTINGS_NAME', 'ronneby');
			if(!defined('DFD_MEGA_MENU_CLASS')) {
				define('DFD_MEGA_MENU_CLASS', 'DFD_Mega_menu');
			}
			if(!defined('DFD_EDIT_MENU_WALKER_CLASS')) {
				define('DFD_EDIT_MENU_WALKER_CLASS', 'DFD_Edit_Menu_Walker');
			}
			if(!defined('DFD_NAV_MENU_WALKER_CLASS')) {
				define('DFD_NAV_MENU_WALKER_CLASS', 'DFD_Nav_Menu_Walker');
			}
		}
		function themeSupport() {
			// Add post thumbnails (http://codex.wordpress.org/Post_Thumbnails)
			add_theme_support('post-thumbnails');

			// Add post formats (http://codex.wordpress.org/Post_Formats)
			add_theme_support('post-formats', array('gallery','video','quote','audio'));

			add_theme_support('automatic-feed-links');
			
			add_theme_support('woocommerce');

			add_post_type_support('page', 'excerpt');
			
			add_theme_support('title-tag');
		}
		function adminInclude() {
			require_once get_template_directory().'/inc/lib/assets/admin-assets.php';
			
			if(!is_customize_preview()) {
				require_once get_template_directory().'/inc/lib/plugins/plugins.php';
				require_once get_template_directory().'/inc/lib/metabox/custom_metaboxes/include-boxes.php';
				# Setup wizard by dtbaker https://github.com/dtbaker/envato-wp-theme-setup-wizard/tree/master/envato_setup
				require_once get_template_directory().'/inc/lib/envato_setup/envato_setup.php';

				if(isset($this->pagenow) && in_array($this->pagenow, array('widgets.php', 'admin-ajax.php'))) {
					require_once get_template_directory().'/inc/lib/widgets/widgets.php';
				}
			}
			
			$this->addVcExtensions();
			
			require_once get_template_directory().'/inc/lib/icon/icons.php';
		}
		function frontInclude() {
			require_once get_template_directory().'/inc/lib/widgets/widgets.php';
			
			require_once get_template_directory().'/inc/lib/assets/front-assets.php';
		}
		function mixedInclude() {
			require_once get_template_directory().'/inc/helpers.php';

			if(!isset($redux_demo)) {
				require_once get_template_directory().'/inc/redux-config.php';
			}
			
			require_once get_template_directory().'/inc/lib/aq_resizer.php';
			
			require_once get_template_directory().'/inc/lib/actions/init.php';
			
			if(class_exists('WooCommerce')) {
				require_once get_template_directory().'/inc/lib/woocommerce/woocommerce.php';
			}
			
			if(defined('YITH_WCWL') && YITH_WCWL) {
				require_once get_template_directory().'/inc/lib/woocommerce/wishlist.php';
			}
			
			$this->loadTextDomain();
			
		}
		public function addVcExtensions() {
			if(class_exists('Vc_Manager', false)) {
				if(function_exists('vc_set_as_theme')) {
					add_action('after_setup_theme', 'vc_set_as_theme');
				}

				if(function_exists('vc_set_default_editor_post_types')) {
					vc_set_default_editor_post_types(array('page', 'post', 'my-product', 'timeline'));
				}
			}
		}
		public function loadTextDomain() {
			load_theme_textdomain('dfd', get_template_directory() . '/lang');
		}
		public function ajaxActions() {
			require_once get_template_directory().'/inc/lib/social/share-counter.php';
			add_action('wp_ajax_nopriv_dfd_post_like', array($this, 'postLike'));
			add_action('wp_ajax_dfd_post_like', array($this, 'postLike'));
		}
		public function postLike() {
			// Check for nonce security
			$nonce = $_POST['nonce'];

			if(!wp_verify_nonce($nonce, 'ajax-nonce')) {
				die('Busted!');
			}

			if(isset($_POST['post_like'])) {
				// Retrieve user IP address
				$ip = $_SERVER['REMOTE_ADDR'];
				$post_id = $_POST['post_id'];

				// Get voters'IPs for the current post
				$meta_IP = get_post_meta($post_id, "_voted_IP");
				$voted_IP = (isset($meta_IP[0])) ? $meta_IP[0] : false;

				if(!is_array($voted_IP)) {
					$voted_IP = array();
				}

				// Get votes count for the current post
				$meta_count = intval(get_post_meta($post_id, "_votes_count", true));

				// Use has already voted ?
				if(!Dfd_Theme_Helpers::hasAlreadyVoted($post_id)) {
					$voted_IP[$ip] = time();

					// Save IP and increase votes count
					update_post_meta($post_id, "_voted_IP", $voted_IP);
					update_post_meta($post_id, "_votes_count", ++$meta_count);

					// Display count (ie jQuery return value)
					echo esc_html($meta_count);
				} else {
					echo "already";
				}
			}
			wp_die();
		}
	}
	
	$Dfd_Ronneby_Includes = new Dfd_Ronneby_Includes();
}