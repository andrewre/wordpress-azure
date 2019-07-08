<?php
if(!defined('ABSPATH')) {
	exit;
}

if(!class_exists('Dfd_Theme_Actions')) {
	class Dfd_Theme_Actions {
		/**
		 * Constructor
		 */
		function __construct() {
			$this-> actions();
			if(is_admin()) {
				$this->adminActions();
			} else {
				$this->frontActions();
			}
		}
		/**
		 * Cloning disabled
		 */
		public function __clone() {
		}

		/**
		 * Serialization disabled
		 */
		public function __sleep() {
		}

		/**
		 * De-serialization disabled
		 */
		public function __wakeup() {
		}

		/**
		 * Actions and filters to be enqueued for both frontend and backend
		 */
		public function actions() {
			require_once get_template_directory().'/inc/lib/actions/mixed.php';
		}

		/**
		 * Admin actions and filters
		 */
		public function adminActions() {
			require_once get_template_directory().'/inc/lib/actions/admin.php';
		}

		/**
		 * Frontend actions and filters
		 */
		public function frontActions() {
			require_once get_template_directory().'/inc/lib/actions/front.php';
		}
	}
	
	$Dfd_Theme_Actions = new Dfd_Theme_Actions();
}