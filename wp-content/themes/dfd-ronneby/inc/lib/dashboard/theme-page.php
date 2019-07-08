<?php
if(!defined('ABSPATH')) {
	exit;
}

if(!class_exists('Dfd_Ronneby_Admin_theme_Page')) {
	class Dfd_Ronneby_Admin_theme_Page {
		/**
		 * The single class instance.
		 *
		 * @since 3.0
		 * @access private
		 *
		 * @var object
		 */
		private static $_instance = null;
		
		public $prefix = '';
		
		public $min = '.min';
		
		protected $isActive = null;
		
		protected $purchaseCode = null;
		
		/**
		 * A dummy constructor to prevent this class from being loaded more than once.
		 *
		 * @see Dfd_Ronneby_Admin_theme_Page::instance()
		 *
		 * @since 3.0
		 * @access private
		 * @dfd
		 */
		private function __construct() {
			/* We do nothing here! */
		}

		/**
		 * You cannot clone this class.
		 *
		 * @since 3.0
		 * @dfd
		 */
		public function __clone() {
			_doing_it_wrong( __FUNCTION__, esc_html__( 'Cheatin&#8217; huh?', 'dfd' ), '3.0' );
		}

		/**
		 * You cannot unserialize instances of this class.
		 *
		 * @since 3.0
		 * @dfd
		 */
		public function __wakeup() {
			_doing_it_wrong( __FUNCTION__, esc_html__( 'Cheatin&#8217; huh?', 'dfd' ), '3.0' );
		}
		
		/**
		 * The Dfd_Ronneby_Admin_theme_Page Instance
		 *
		 * @since 3.0
		 * @static
		 * @return object The one true Dfd_Ronneby_Admin_theme_Page.
		 * @dfd
		 */
		public static function instance() {
			if ( is_null( self::$_instance ) ) {
				self::$_instance = new self();
				self::$_instance->init();
			}
			return self::$_instance;
		}
		public function init() {
			$this->prefix = 'dfd-ronneby';
			if(defined('DFD_DEBUG_MODE') && DFD_DEBUG_MODE) {
				$this->min = '';
			}
			$this->addActions();
//			if(isset($_GET['page']) && $_GET['page'] == $this->prefix) {
				$this->checkStatus();
//			}
		}
		public function addActions() {
			add_action('admin_menu', array($this, 'addMenuItems'));
			add_action('wp_ajax_dfd_register_theme', array($this, 'registerTheme'));
			add_action('wp_ajax_dfd_registration_alert', array($this, 'showPopupAlert'));
			add_action('wp_ajax_dfd_deactivate_theme', array($this, 'deactivateThemeAction'));
			add_action('wp_ajax_dfd_deactivate_theme_manually', array($this, 'deactivateThemeManuallyAction'));
			add_action('admin_enqueue_scripts', array($this, 'loadAssets'));
			if(!defined('DFD_DEBUG_MODE') || !DFD_DEBUG_MODE) {
				add_filter('pre_set_site_transient_update_themes', array($this, 'themeUpdate'));
			}
		}
		public function addMenuItems() {
			add_menu_page(
				esc_html__('Ronneby', 'dfd'),
				esc_html__('Ronneby', 'dfd'),
				'edit_theme_options',
				$this->prefix,
				array($this, 'adminPageContent'),
				'',
				3
			);
		}
		public function loadAssets($hook) {
			if($hook == 'toplevel_page_'.$this->prefix) {
				wp_register_script('dfd-dashboard-script', get_template_directory_uri(). '/assets/admin/js/dashboard-js'.$this->min.'.js', array('jquery'), null, true);
				wp_localize_script('dfd-dashboard-script', 'ajax_var', array(
					'url' => admin_url('admin-ajax.php'),
					'nonce' => wp_create_nonce('ajax-nonce')
				));
				wp_enqueue_script('dfd-dashboard-script');
			}
		}
		public function checkStatus() {
			if(!is_null($this->isActive)) {
				return $this->isActive;
			}
			$this->isActive = get_site_option('dfd_ronneby_theme_activated');
		}
		public function activateTheme($value = '') {
			update_site_option('dfd_ronneby_theme_activated', 'active');
			update_site_option('dfd_ronneby_purchase_code', $value);
		}
		public function deactivateTheme() {
			delete_site_option('dfd_ronneby_theme_activated');
			delete_site_option('dfd_ronneby_purchase_code');
		}
		public function registerTheme() {
			$nonce = isset($_POST['nonce']) ? $_POST['nonce'] : false;
			
			$code = isset($_POST['code']) ? $_POST['code'] : false;
			
			if(!$nonce || !wp_verify_nonce($nonce, 'ajax-nonce') || !$code) {
				die();
			}
			
			$activated = false;
			
			require_once get_template_directory() .'/inc/lib/dashboard/lib/class.remote.php';
			
			if(method_exists('Dfd_Remote_Actions_Class', 'instance')) {
				$remote_instance = Dfd_Remote_Actions_Class::instance();
				$activated = $remote_instance->registerPurchaseCode($code);
			}
			if($activated) {
				$this->activateTheme($code);
				die('0');
			}
			die('invalid-code');
		}
		public function deactivateThemeAction() {
			$dergistered = false;
			$nonce = isset($_POST['nonce']) ? $_POST['nonce'] : false;
			
			if(!$nonce || !wp_verify_nonce($nonce, 'ajax-nonce')) {
				die();
			}
			
			$code = get_site_option('dfd_ronneby_purchase_code');
			
			require_once get_template_directory() .'/inc/lib/dashboard/lib/class.remote.php';
			
			if(method_exists('Dfd_Remote_Actions_Class', 'instance') && $code) {
				$remote_instance = Dfd_Remote_Actions_Class::instance();
				$dergistered = $remote_instance->deRegisterPurchaseCode($code);
			}
			
			if($dergistered) {
				$this->deactivateTheme();
			}
			
			die('0');
		}
		public function deactivateThemeManuallyAction() {
			$dergistered = false;
			$nonce = isset($_POST['nonce']) ? $_POST['nonce'] : false;
			
			if(!$nonce || !wp_verify_nonce($nonce, 'ajax-nonce')) {
				die();
			}
			
			$code = !empty($_POST['code']) ? $_POST['code'] : '';
			
			if(empty($code)) {
				die('-1');
			}
			
			require_once get_template_directory() .'/inc/lib/dashboard/lib/class.remote.php';
			
			if(method_exists('Dfd_Remote_Actions_Class', 'instance') && $code) {
				$remote_instance = Dfd_Remote_Actions_Class::instance();
				$dergistered = $remote_instance->deRegisterPurchaseCode($code);
			}
			
			if($dergistered) {
				$this->deactivateTheme();
			}
			
			die('0');
		}
		public function themeUpdate($transient) {
			if($this->isActive != 'active') {
				return $transient;
			}
			
			require_once get_template_directory() .'/inc/lib/dashboard/lib/class.remote.php';
			
			$code = get_site_option('dfd_ronneby_purchase_code');
			
			if(method_exists('Dfd_Remote_Actions_Class', 'instance') && $code) {
				$remote_instance = Dfd_Remote_Actions_Class::instance();
				$response = $remote_instance->getLatestVersion();
				if(is_wp_error($response) || !isset($response['version']) || $response['theme'] != 'Ronneby') {
					return $transient;
				}
				$version = $response['version'];
				$themeData = get_template();
				if(version_compare(wp_get_theme($themeData)->get('Version'), $version, '<')) {
					$transient->response[$themeData] = array(
						'theme' => $themeData,
						'new_version' => $version,
						'url' => 'https://themeforest.net/item/ronneby-highperformance-wordpress-theme/11776839',
						'package' => $remote_instance->getThemeDownloadUrl($code)
					);
				}
			}
			
			return $transient;
		}
		public function showPopupAlert() {
			$nonce = isset($_POST['nonce']) ? $_POST['nonce'] : false;
			
			if(!$nonce || !wp_verify_nonce($nonce, 'ajax-nonce')) {
				die();
			}
			
			require_once get_template_directory() .'/inc/lib/dashboard/templates/popup-alert.php';
			
			die();
		}
		public function adminPageContent() {
			echo '<div class="dfd-ronneby-theme-base-page">';
				$this->headerSection();
				echo '<div class="dfd-main-elements">';
					$this->themeActivationSection();
					$this->themeUpdateSection();
					$this->themeCheckSection();
					$this->themeDemosSection();
					$this->themeSupportSection();
					$this->themeCustomizationSection();
				echo '</div>';
				echo '<div class="dfd-changelog-section">';
					$this->changeLogSection();
				echo '</div>';
				if($this->isActive !== 'active') {
					$this->deactivateSection();
				}
			echo '</div>';
		}
		public function headerSection() {
			require_once get_template_directory().'/inc/lib/dashboard/templates/header-section.php';
		}
		public function themeActivationSection() {
			if('active' === $this->isActive) {
				require_once get_template_directory().'/inc/lib/dashboard/templates/activation/activation-section.php';
			} else {
				require_once get_template_directory().'/inc/lib/dashboard/templates/activation/activation-inactive.php';
			}
		}
		public function themeUpdateSection() {
			require_once get_template_directory().'/inc/lib/dashboard/templates/update/theme-update.php';
		}
		public function themeCheckSection() {
			require_once get_template_directory().'/inc/lib/dashboard/templates/system-status.php';
		}
		public function themeDemosSection() {
			require_once get_template_directory().'/inc/lib/dashboard/templates/demo/demo-installation.php';
		}
		public function themeSupportSection() {
			require_once get_template_directory().'/inc/lib/dashboard/templates/theme-support.php';
		}
		public function themeCustomizationSection() {
			require_once get_template_directory().'/inc/lib/dashboard/templates/customization-service.php';
		}
		public function changeLogSection() {
			require_once get_template_directory().'/inc/lib/dashboard/templates/change-log.php';
		}
		public function deactivateSection() {
			require_once get_template_directory().'/inc/lib/dashboard/templates/deactivate-popup.php';
		}
	}
	
	$Dfd_Ronneby_Admin_theme_Page = Dfd_Ronneby_Admin_theme_Page::instance();
}