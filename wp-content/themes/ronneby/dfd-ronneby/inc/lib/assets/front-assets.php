<?php
if(!defined('ABSPATH')) {
	exit;
}

if(!class_exists('Dfd_Front_Assets')) {
	class Dfd_Front_Assets {
		function __construct() {
			add_action('wp_enqueue_scripts', array($this, 'enqueue'));
		}
		function enqueue() {
			global $dfd_ronneby;
			
			$assets_path = get_template_directory_uri();
			if(isset($dfd_ronneby['custom_cdn_url_prefix']) && !empty($dfd_ronneby['custom_cdn_url_prefix'])) {
				$assets_path = $dfd_ronneby['custom_cdn_url_prefix'];
			}
			/*
			 * Css styles
			 */
			wp_register_script('dfd_queryloader2', $assets_path . '/assets/js/jquery.queryloader2.min.js', array('jquery'), null, false);

			wp_register_style('dfd_site_style', $assets_path . '/assets/css/app.css', false, null);

			if(class_exists('Vc_Manager', false)) {
				wp_register_style('dfd_vc_custom_style', $assets_path . '/assets/css/visual-composer.css', false, null);			
				wp_enqueue_style('dfd_vc_custom_style');
			}

			wp_register_style('dfd_mobile_responsive', $assets_path . '/assets/css/mobile-responsive.css', false, null);
			wp_register_style('dfd-multislider-css', $assets_path . '/assets/css/multislider.css', false, null);

			wp_enqueue_style('dfd_site_style');

			/**
			 * Check if WooCommerce is active
			 * */
			if (class_exists('WooCommerce')) {
				global $woocommerce;
				$woocommerce_css_file = $assets_path . '/assets/css/woocommerce.css';

				if(isset($dfd_ronneby['dfd_woocommerce_templates_path']) && $dfd_ronneby['dfd_woocommerce_templates_path'] == '_old') {
					$woocommerce_css_file = $assets_path . '/assets/css/woocommerce_old.css';
					wp_register_script('woo-hack-old-style', $assets_path . '/assets/js/woo_hack_old_style.js', array( 'jquery' ), $woocommerce->version, true, true);
					wp_enqueue_script('woo-hack-old-style');
				} else {
					wp_register_script('woo-hack-new-style', $assets_path . '/assets/js/woo_hack_new_style.js', array( 'jquery' ), $woocommerce->version, true, true);
					wp_enqueue_script('woo-hack-new-style');
				}

				wp_register_style('dfd_wocommerce_style', $woocommerce_css_file, false, null);
				wp_enqueue_style('dfd_wocommerce_style');
				
				wp_register_script('woocommerce_hack', $assets_path . '/assets/js/woocommerce_hack.js', false, null, true);
				wp_enqueue_script('woocommerce_hack');
			}

			/**
			 * mobile responsive
			 */
			if (
				isset($dfd_ronneby['mobile_responsive'])
				&&
				strcmp($dfd_ronneby['mobile_responsive'],'1') === 0
				&&
				(
					!isset($dfd_ronneby['header_responsive_breakpoint'])
					||
					$dfd_ronneby['header_responsive_breakpoint'] == '1100'
					||
					!isset($dfd_ronneby['x_large_responsive_breakpoint'])
					||
					$dfd_ronneby['x_large_responsive_breakpoint'] == '1280'
					||
					!isset($dfd_ronneby['large_responsive_breakpoint'])
					||
					$dfd_ronneby['large_responsive_breakpoint'] == '1180'
					||
					!isset($dfd_ronneby['normal_responsive_breakpoint'])
					||
					$dfd_ronneby['normal_responsive_breakpoint'] == '1024'
					||
					!isset($dfd_ronneby['medium_responsive_breakpoint'])
					||
					$dfd_ronneby['medium_responsive_breakpoint'] == '800'
					||
					!isset($dfd_ronneby['small_responsive_breakpoint'])
					||
					$dfd_ronneby['small_responsive_breakpoint'] == '480'
				)
			) {
				wp_enqueue_style('dfd_mobile_responsive');
			}

			if(class_exists('ReduxFramework') && isset(ReduxFramework::$_upload_url) && isset(ReduxFramework::$_upload_dir) && file_exists(ReduxFramework::$_upload_dir . 'options.css') && isset($dfd_ronneby['enqueue_styles_file']) && $dfd_ronneby['enqueue_styles_file'] == 'on') {
				wp_enqueue_style('dfd_theme_options', ReduxFramework::$_upload_url . 'options.css', false, null);
			}
			
			if(!class_exists('Dfd_Ronneby_Core_Plugin')) {
				$font_url = add_query_arg('family', urlencode('Raleway:100,200,300,400,500,600,700,800,900,100italic,200italic,300italic,400italic,500italic,600italic,700italic,800italic,900italic|Droid+Serif:400,700,400italic,700italic&subset=latin'), "//fonts.googleapis.com/css");
				wp_enqueue_style('dfd_default_fonts', $font_url, false, null);
				wp_enqueue_style('dfd_default_icons', $assets_path . '/assets/fonts/dfd_icon_set/dfd_icon_set.css', false, null);
			}

			/* Bbpress styles */
			if(class_exists('bbPress')) {
				wp_enqueue_style('crum_bbpress', $assets_path . '/assets/css/bbpress.css', false, null);
			}
			if(class_exists('BuddyPress')) {
				wp_enqueue_style('dfd_buddypress', $assets_path . '/assets/css/bbpress.css', false, null);
			}
			wp_deregister_style('prettyphoto');
			wp_deregister_style('woocommerce_prettyPhoto_css');

			wp_enqueue_style( 'main-style', get_stylesheet_uri(), false, null );

			/* RTL support */
			if(is_rtl()) {
				wp_enqueue_style('dfd_rtl', $assets_path . '/assets/css/rtl.css', false, null);
			}

			/*
			 * JS register
			 */
			wp_register_script('dfd_slide_parallax', $assets_path . '/assets/js/jquery.slide_parallax.js', false, null, true);

			wp_deregister_script('isotope');
			
			/* old portfolio module */
			wp_register_script('isotope_recenworks', $assets_path . '/assets/js/jquery.isotope.recentworks.js', false, null, true);
			/* old default ultimate addons */
			wp_register_script('masonry', $assets_path . '/assets/js/jquery.masonry.min.js', true, null, true);
			/* Old gallery module */
			wp_register_script('dfd-gallery-module-isotope', $assets_path . '/assets/js/jquery.isotope.gallery-module.js', false, null, true);
			/* old facts shortcode */
			wp_register_script('jquery.knob', $assets_path.'/assets/js/jquery.knob.js', array('jquery'), null, true);
			/* Old blog module */
			wp_register_script('dfd-isotope-news-carousel', $assets_path . '/assets/js/jquery.carousel.news-module.js', true, null, true);
			
			/*Timeline shortcode*/
			wp_register_script('dfd-timeline', $assets_path . '/assets/js/timeline.min.js', true, null, true);
			
			/*Gallery post type scripts*/
			/* Single gallery item */
			wp_register_script('dfd-isotope-gallery', $assets_path . '/assets/js/jquery.isotope.gallery.js', false, null, true);
			wp_register_script('dfd-carousel-gallery', $assets_path . '/assets/js/jquery.carousel.gallery.js', false, null, true);

			if(isset($dfd_ronneby['custom_google_api_key']) && !empty($dfd_ronneby['custom_google_api_key'])) {
				$google_api_key = $dfd_ronneby['custom_google_api_key'];
			} else {
				$google_api_key = 'AIzaSyBXPfPyo-rxdH-qPP1oxnsABtLAtEYSTF0';
			}
			wp_register_script('gmaps', '//maps.googleapis.com/maps/api/js?key='.$google_api_key, false, null, false, true);
			wp_register_script('gmap3', $assets_path . '/assets/js/gmap3.min.js', false, null, true, true);
			wp_deregister_script('prettyphoto');
			wp_deregister_script('prettyPhoto');
			
			if(class_exists('woocommerce_wpml')) {
				wp_deregister_style('woocommerce_admin_styles');
			}

			// Video Player
			wp_register_style('dfd_zencdn_video_css', '//vjs.zencdn.net/c/video-js.css', false, null);
			wp_register_script('dfd_zencdn_video_js', '//vjs.zencdn.net/c/video.js', false, null);

			// ajax pagination
			wp_register_script('ajax-pagination', $assets_path.'/assets/js/ajax-pagination.js', array('jquery'), null, true);
			wp_register_script('dfd-lazy-load', $assets_path.'/assets/js/ajax-lazy-load.js', array('jquery'), null, true);

			//slick slider
			wp_deregister_script('ult-slick');
			
			wp_register_script('dfd-canvas-bg-first', $assets_path.'/assets/js/canvas-bg-first.js', array('jquery'), null, true);
			
			wp_register_script('dfd-particleground', $assets_path.'/assets/js/jquery.particleground.min.js', array('jquery'), null, true);
			wp_register_script('dfd-particleground-old', $assets_path.'/assets/js/jquery.particleground.old.min.js', array('jquery'), null, true);
			
			wp_register_script('dfd-canvas-bg-third', $assets_path.'/assets/js/canvas-bg-third.js', array('jquery'), null, true);
			
			wp_register_script('dfd-multislider', $assets_path.'/assets/js/jquery.multiscroll.min.js', array('jquery'), null, false);
			wp_register_script('dfd-sly', $assets_path.'/assets/js/sly.min.js', array('jquery'), null, false);
			wp_register_script('dfd-jparallax', $assets_path.'/assets/js/jquery.parallax.js', array('jquery'), null, false);

			/*
			 * JS enquene
			 */
			$preloader_enable = DfdMetaboxSettings::get('site_preloader_enabled');
			if (isset($dfd_ronneby['site_preloader_enabled']) && strcmp($dfd_ronneby['site_preloader_enabled'],'1')===0 || $preloader_enable === 'on') {
				wp_enqueue_style( 'dfd_preloader_indicator', $assets_path . '/assets/css/site-preloader.css', false, null);
				wp_enqueue_script('dfd_queryloader2', array('jquery'));
			}
			if(!isset($dfd_ronneby['dev_mode']) || $dfd_ronneby['dev_mode'] != 'on') {
				wp_register_script('dfd_js_plugins', $assets_path . '/assets/js_pub/compresed.min.js', array('jquery'), null, true);
				wp_localize_script('dfd_js_plugins', 'ajax_var', array(
					'url' => admin_url('admin-ajax.php'),
					'nonce' => wp_create_nonce('ajax-nonce')
				));
				wp_enqueue_script('dfd_js_plugins');
			} else {
				wp_register_script('dfd_main_uncompressed', $assets_path.'/assets/js_pub/uncompresed.js', array('jquery'), null, true );
				wp_localize_script('dfd_main_uncompressed', 'ajax_var', array(
					'url' => admin_url('admin-ajax.php'),
					'nonce' => wp_create_nonce('ajax-nonce')
				));
				wp_enqueue_script('dfd_main_uncompressed');
			}
			
			/* Portfolio inside */
			wp_register_script('dfd-isotope-porfolio-inside', $assets_path . '/assets/js/jquery.isotope.porfolio-inside.js', true, null, true);

			if (is_singular('my-product')) {
				wp_enqueue_script('dfd-isotope-porfolio-inside');
			}
			
			$this->enqueuePageTemplatesAssets($assets_path);

			$this->inline_css();

			$this->inline_js();
		}
		function enqueuePageTemplatesAssets($assets_path) {
			global $dfd_ronneby;
			/* Old page templates */
			wp_register_script('dfd-masonry-2cols-run', $assets_path . '/assets/js/jquery.masonry.2cols.run.js', true, null, true);
			wp_register_script('dfd-grid-2cols-run', $assets_path . '/assets/js/jquery.grid.2cols.run.js', true, null, true);
			wp_register_script('dfd-masonry-3cols-run', $assets_path . '/assets/js/jquery.masonry.3cols.run.js', true, null, true);
			wp_register_script('dfd-grid-3cols-run', $assets_path . '/assets/js/jquery.grid.3cols.run.js', true, null, true);
			wp_register_script('dfd-masonry-4cols-run', $assets_path . '/assets/js/jquery.masonry.4cols.run.js', true, null, true);
			wp_register_script('dfd-grid-4cols-run', $assets_path . '/assets/js/jquery.grid.4cols.run.js', true, null, true);
			wp_register_script('dfd-isotope-enable', $assets_path . '/assets/js/jquery.isotope.enable.js', true, null, true);
			wp_register_script('dfd-isotope-1col-enable', $assets_path . '/assets/js/jquery.isotope.1col.enable.js', true, null, true);
			wp_register_script('dfd-isotope-4cols-enable', $assets_path . '/assets/js/jquery.isotope-4cols.enable.js', true, null, true);
			wp_register_script('isotope-run-2col', $assets_path . '/assets/js/jquery.isotope.2col.run.js', false, null, true);
			wp_register_script('isotope-run-3col', $assets_path . '/assets/js/jquery.isotope.3col.run.js', false, null, true);
			wp_register_script('isotope-run-4col', $assets_path . '/assets/js/jquery.isotope.4col.run.js', false, null, true);
			wp_register_script('dfd-masonry-mini-3cols-run', $assets_path . '/assets/js/jquery.masonry.mini.3cols.run.js', true, null, true);
			wp_register_script('dfd-masonry-mini-4cols-run', $assets_path . '/assets/js/jquery.masonry.mini.4cols.run.js', true, null, true);
			if(!isset($dfd_ronneby['dev_mode']) || $dfd_ronneby['dev_mode'] != 'on') {
				wp_register_script('dfd.onepagescroll', $assets_path.'/assets/js/jquery.onepagescroll.min.js', array('jquery'), null, true);
			} else {
				wp_register_script('dfd.onepagescroll', $assets_path.'/assets/js/jquery.onepagescroll.js', array('jquery'), null, true);
			}
			
			# Load script/styles for page templates
			if (is_page()) {
				$curr_page_template = basename(get_page_template());

				switch($curr_page_template) {
					
					case 'tmp-posts-masonry-2.php':
					case 'tmp-posts-masonry-2-left-side.php':
					case 'tmp-posts-masonry-2-side.php':
						wp_enqueue_script('dfd-masonry-2cols-run');
						break;

					case 'tmp-posts-grid-2.php':
					case 'tmp-posts-grid-2-left-side.php':
					case 'tmp-posts-grid-2-right-sidebar.php':
						wp_enqueue_script('dfd-grid-2cols-run');
						break;

					case 'tmp-posts-masonry-3-left-sidebar.php':
					case 'tmp-posts-masonry-3-left-sidebar-fullwidth.php':
					case 'tmp-posts-masonry-3-right-sidebar.php':
					case 'tmp-posts-masonry-3-right-sidebar-fullwidth.php':
					case 'tmp-posts-masonry-3.php':
						wp_enqueue_script('dfd-masonry-3cols-run');
						break;

					case 'tmp-posts-grid-3.php':
					case 'tmp-posts-grid-3-left-sidebar.php':
					case 'tmp-posts-grid-3-right-sidebar.php':
					case 'tmp-posts-grid-3-left-sidebar-fullwidth.php':
					case 'tmp-posts-grid-3-right-sidebar-fullwidth.php':
						wp_enqueue_script('dfd-grid-3cols-run');
						break;

					case 'tmp-posts-masonry-4.php':
					case 'tmp-posts-masonry-4-fullwidth.php':
						wp_enqueue_script('dfd-masonry-4cols-run');
						break;

					case 'tmp-posts-grid-4.php':
					case 'tmp-posts-grid-4-fullwidth.php':
						wp_enqueue_script('dfd-grid-4cols-run');
						break;

					case 'tmp-portfolio-masonry-full-width-bordered-title.php':
					case 'tmp-portfolio-masonry-full-width.php':
					case 'tmp-portfolio-masonry-full-width-bordered.php':
					case 'tmp-portfolio-masonry-1.php':
					case 'tmp-portfolio-masonry-1-bordered.php':
						wp_enqueue_script('dfd-isotope-enable');
						break;

					case 'tmp-portfolio-template-1-sorting.php':
						wp_enqueue_script('dfd-isotope-1col-enable');
						break;

					case 'tmp-portfolio-masonry-full-width-4-cols.php':
					case 'tmp-portfolio-masonry-full-width-bordered-4-cols.php':
					case 'tmp-portfolio-masonry-full-width-bordered-4-cols-title.php':
						wp_enqueue_script('dfd-isotope-4cols-enable');
						break;

					case 'tmp-portfolio-template-2mini-left-sidebar.php':
					case 'tmp-portfolio-template-2mini.php':
					case 'tmp-portfolio-template-2excerpt.php':
					case 'tmp-portfolio-template-2.php':
					case 'tmp-portfolio-grid-2-mini.php':
					case 'tmp-portfolio-template-2-left-sidebar.php':
					case 'tmp-portfolio-template-2-right-sidebar.php':
					case 'tmp-portfolio-masonry-template-2.php':
					case 'tmp-portfolio-masonry-template-2-left-sidebar.php':
					case 'tmp-portfolio-masonry-template-2-right-sidebar.php':
						wp_enqueue_script('isotope-run-2col');
						break;
					case 'tmp-portfolio-template-3excerpt.php':
					case 'tmp-portfolio-template-3.php':
					case 'tmp-portfolio-template-3-left-sidebar.php':
					case 'tmp-portfolio-template-3-right-sidebar.php':
					case 'tmp-portfolio-template-3mini-left-sidebar.php':
					case 'tmp-portfolio-template-3mini.php':
						wp_enqueue_script('isotope-run-3col');
						break;
					case 'tmp-portfolio-template-4mini.php':
					case 'tmp-portfolio-template-4excerpt.php':
					case 'tmp-portfolio-template-4.php':
						wp_enqueue_script('isotope-run-4col');
						break;

					case 'tmp-portfolio-masonry_mini.php':
					case 'tmp-portfolio-masonry_excerpt.php':
					case 'tmp-portfolio-masonry.php':
					case 'tmp-portfolio-masonry-sidebar_mini.php':
					case 'tmp-portfolio-masonry-left-sidebar_mini.php':
					case 'tmp-portfolio-masonry-sidebar_excerpt.php':
					case 'tmp-portfolio-masonry-left-sidebar_excerpt.php':
					case 'tmp-portfolio-masonry-sidebar.php':
					case 'tmp-portfolio-masonry-left-sidebar.php':
						wp_enqueue_script('dfd-masonry-mini-3cols-run');
						break;

					case 'tmp-portfolio-masonry-4mini.php':
					case 'tmp-portfolio-masonry-4excerpt.php':
					case 'tmp-portfolio-masonry-4.php':
						wp_enqueue_script('dfd-masonry-mini-4cols-run');
						break;
					case 'tmp-one-page-scroll.php':
						wp_enqueue_script('dfd.onepagescroll');
						break;
				}
			}
		}
		function inline_css() {
			global $dfd_ronneby;
			$css_rules = '';

			$p_bg_color = DfdMetaboxSettings::get('crum_page_custom_bg_color');
			$p_bg_image = DfdMetaboxSettings::get('crum_page_custom_bg_image');
			$p_bg_fixed = DfdMetaboxSettings::get('crum_page_custom_bg_fixed');
			$p_bg_repeat = DfdMetaboxSettings::get('crum_page_custom_bg_repeat');
			$p_bg_size = DfdMetaboxSettings::get('crum_page_custom_bg_size');

			if ((strcmp($p_bg_color,'#')!==0) && !empty($p_bg_color)) {
				$css_rules .= 'background-color: '. esc_attr($p_bg_color) .' !important;';
			}

			if(!empty($p_bg_image)) {
				$css_rules .= 'background-image: url('. esc_url($p_bg_image) .') !important;';
				$css_rules .= 'background-position: center 0 !important;';
			}
			if(!empty($p_bg_repeat)) {
				$css_rules .= 'background-repeat: '. esc_attr($p_bg_repeat) .' !important;';
			}
			if ($p_bg_size) {
				$css_rules .= 'background-size: '. esc_attr($p_bg_size) .' !important;';
			}

			ob_start();
			if((function_exists('is_customize_preview') && is_customize_preview()) || !class_exists('ReduxFramework') || !isset(ReduxFramework::$_upload_url) || !isset(ReduxFramework::$_upload_dir) || !file_exists(ReduxFramework::$_upload_dir . 'options.css') || !isset($dfd_ronneby['enqueue_styles_file']) || $dfd_ronneby['enqueue_styles_file'] == 'off') {
				require get_template_directory().'/inc/lib/dynamic_styles_config.php';
			}
			if($css_rules != '') {
				if($p_bg_fixed) {
					echo 'body:before {'
							. 'content: "";'
							. 'display: block;'
							. 'position: fixed;'
							. 'top: 0;'
							. 'bottom: 0;'
							. 'left: 0;'
							. 'right: 0;'
							. $css_rules
							. '-webkit-transform:translate3d(0, 0, 0);'
						. '}';
				} else {
					echo 'body {'.$css_rules.'}';
				}
			}
			$output = ob_get_clean();
			if(function_exists('wp_add_inline_style')) {
				wp_add_inline_style('main-style', $output);
			}
		}
		function inline_js() {
			global $dfd_ronneby;
			$output = '';
			
			if(isset($dfd_ronneby['head_custom_js']) && !empty($dfd_ronneby['head_custom_js'])) {
				$output .= $dfd_ronneby['head_custom_js'];
			}
			
			if(function_exists('wp_add_inline_script') && !empty($output)) {
				wp_add_inline_script('jquery-migrate', $output);
			}
		}
	}
	
	$Dfd_Front_Assets = new Dfd_Front_Assets();
}