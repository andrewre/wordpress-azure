<?php
if(!defined('ABSPATH')) {
	exit;
}

if(!class_exists('Dfd_Remote_Actions_Class')) {
	class Dfd_Remote_Actions_Class {
		protected $validatePurchaseUrl = 'http://dfd.name/check/index.php';
		
		protected $updateThemeUrl = 'http://dfd.name/check/update.php';
		
		protected $themeVersion = 'http://dfd.name/check/version.json';
		
		protected $themeDemoData = 'http://dfd.name/check/demo.php';
		/**
		 * The single class instance.
		 *
		 * @since 3.0
		 * @access private
		 *
		 * @var object
		 */
		private static $_instance = null;
		/**
		 * A dummy constructor to prevent this class from being loaded more than once.
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
			die('Cheatin&#8217; huh?');
		}

		/**
		 * You cannot unserialize instances of this class.
		 *
		 * @since 3.0
		 * @dfd
		 */
		public function __wakeup() {
			die('Cheatin&#8217; huh?');
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
			}
			return self::$_instance;
		}
		public function registerPurchaseCode($code) {
			$response = wp_remote_post($this->validatePurchaseUrl, array(
				'user-agent' => 'WordPress/' . get_bloginfo('version') . '; ' . network_site_url(),
				'timeout' => 300,
				'body' => array(
					'action' => 'register',
					'code' => urlencode($code),
					'url' => network_site_url()
				),
			));
			
			if(is_wp_error($response)) {
				die('-1');
			}

			$response_code = wp_remote_retrieve_response_code($response);
			if($response_code != 200) {
				die('-1');
			}
			
			$responce_text = wp_remote_retrieve_body($response);
			if(!empty($responce_text)) {
				$responce_text = json_decode(wp_remote_retrieve_body($response), true);
				if(isset($responce_text['verified']) && $responce_text['verified'] == '1') {
					return true;
				} elseif(!empty($responce_text['error'])) {
					$this->printLog($responce_text['error'], 'activation-log.txt');
				}
			}
			
			return false;
		}
		public function deRegisterPurchaseCode($code) {
			$response = wp_remote_post($this->validatePurchaseUrl, array(
				'user-agent' => 'WordPress/' . get_bloginfo( 'version' ) . '; ' . network_site_url(),
				'timeout' => 30,
				'body' => array(
					'action' => 'deregister',
					'code' => urlencode($code),
					'url' => network_site_url()
				),
			));
			
			if(is_wp_error($response)) {
				die('-1');
			}

			$response_code = wp_remote_retrieve_response_code($response);
			if($response_code != 200) {
				die('-1');
			}
			
			$responce_text = wp_remote_retrieve_body($response);
			if(!empty($responce_text)) {
				$responce_text = json_decode(wp_remote_retrieve_body($response), true);
				if(isset($responce_text['verified']) && $responce_text['verified'] == '-1') {
					return true;
				} elseif(!empty($responce_text['error'])) {
					$this->printLog($responce_text['error'], 'activation-log.txt');
				}
			}
			
			return false;
		}
		public function getDemoData($code = '') {
			$response = wp_remote_get($this->themeDemoData, array(
				'user-agent' => 'WordPress/' . get_bloginfo('version') . '; ' . network_site_url(),
				'timeout' => 300,
				'body' => array(
					'code' => urlencode($code),
				),
			));
			
			if(is_wp_error($response)) {
				return $response;
			}

			if('200' != wp_remote_retrieve_response_code($response)) {
				$this->printLog('Bad request', 'demo-log.txt');
				return new WP_Error('bad_request', esc_attr__('Bad request', 'dfd'));
			}

			$json = json_decode(wp_remote_retrieve_body($response), true);

			if (empty($json) || !is_array($json)) {
				$this->printLog('Invalid response', 'demo-log.txt');
				return new WP_Error('invalid_response', esc_attr__('Invalid response', 'dfd'));
			}

			return $json;
		}
		public function getLatestVersion() {
			$response = wp_remote_get($this->themeVersion, array('timeout' => 30));

			if(is_wp_error($response)) {
				return $response;
			}

			if('200' != wp_remote_retrieve_response_code($response)) {
				$this->printLog('Bad request', 'update-log.txt');
				return new WP_Error('bad_request', esc_attr__('Bad request', 'dfd'));
			}

			$json = json_decode(wp_remote_retrieve_body($response), true);

			if (empty($json) || !is_array($json)) {
				$this->printLog('Invalid response', 'update-log.txt');
				return new WP_Error('invalid_response', esc_attr__('Invalid response', 'dfd'));
			}

			return $json;
		}
		public function getThemeDownloadUrl($code) {
			return add_query_arg('code', $code, $this->updateThemeUrl);
		}
		public function printLog($text, $file) {
			if(class_exists('ReduxFramework')) {
				$uploadsDir = ReduxFramework::$_upload_dir;

				if(empty($uploadsDir)) {
					return false;
				}

				global $wp_filesystem;
				if(empty($wp_filesystem)) {
					require_once (ABSPATH . '/wp-admin/includes/file.php');
					WP_Filesystem();
				}
				if(!empty($wp_filesystem) && !(is_wp_error($wp_filesystem->errors) && $wp_filesystem->errors->get_error_code())) {
					$wp_filesystem->put_contents(
						$uploadsDir . 'activation-log.txt',
						$text,
						FS_CHMOD_FILE
					);
				} else {
					file_put_contents($uploadsDir . $file, $text);
				}
			}
		}
	}
}