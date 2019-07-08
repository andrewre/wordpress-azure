<?php
if(!defined('ABSPATH')) {
	exit;
}

if(!class_exists('Dfd_Theme_Helpers')) {
	class Dfd_Theme_Helpers {
		public static function page_layout() {
			return array(
				'1col-fixed' => array(
					'title' => esc_attr__('No sidebars','dfd'),
					'img' => get_template_directory_uri().'/assets/img/1col.png'
				),
				'2c-l-fixed' => array(
					'title' => esc_attr__('Sidebar on left','dfd'),
					'img' => get_template_directory_uri().'/assets/img/2cl.png'
				),
				'2c-r-fixed' => array(
					'title' => esc_attr__('Sidebar on right','dfd'),
					'img' => get_template_directory_uri().'/assets/img/2cr.png'
				),
				'3c-fixed' => array(
					'title' => esc_attr__('Both sidebars','dfd'),
					'img' => get_template_directory_uri().'/assets/img/3cc.png'
				),
				'3c-l-fixed' => array(
					'title' => esc_attr__('2 left sidebars','dfd'),
					'img' => get_template_directory_uri().'/assets/img/3cl.png'
				),
				'3c-r-fixed' => array(
					'title' => esc_attr__('2 right sidebars','dfd'),
					'img' => get_template_directory_uri().'/assets/img/3cr.png'
				),
			);
		}
		public static function headers_type() {
			return array(
				'1'			=> esc_attr__('Header 1' , 'dfd'),
				'2'			=> esc_attr__('Header 2' , 'dfd'),
				'3'			=> esc_attr__('Header 3' , 'dfd'),
				'4'			=> esc_attr__('Header 4' , 'dfd'),
				'5'			=> esc_attr__('Header 5' , 'dfd'),
				'6'			=> esc_attr__('Header 6' , 'dfd'),
				'7'			=> esc_attr__('Header 7' , 'dfd'),
				'8'			=> esc_attr__('Header 8' , 'dfd'),
				'9'			=> esc_attr__('Header 9' , 'dfd'),
				'10'		=> esc_attr__('Header 10' , 'dfd'),
				'11'		=> esc_attr__('Header 11' , 'dfd'),
				'12'		=> esc_attr__('Header 12' , 'dfd'),
				'13'		=> esc_attr__('Header 13' , 'dfd'),
				'14'		=> esc_attr__('Header 14' , 'dfd'),
				'none'		=> esc_attr__('Disable header' , 'dfd'),
			);
		}
		public static function logo_position() {
			return array(
				'left' => esc_attr__('Left', 'dfd'),
				'right' => esc_attr__('Right', 'dfd'),
				'top-left' => esc_attr__('Top left', 'dfd'),
				'top-center' => esc_attr__('Top center', 'dfd'),
				'top-right' => esc_attr__('Top right', 'dfd'),
				'bottom-left' => esc_attr__('Bottom left', 'dfd'),
				'bottom-center' => esc_attr__('Bottom center', 'dfd'),
				'bottom-right' => esc_attr__('Bottom right', 'dfd'),
				'middle' => esc_attr__('Middle of the screen', 'dfd'),
			);
		}
		public static function menu_position() {
			return array(
				'top' => esc_attr__('Top', 'dfd'),
				'bottom' => esc_attr__('Bottom', 'dfd'),
			);
		}
		public static function alignment_options() {
			return array(
				'text-left' => esc_attr__('Left', 'dfd'),
				'text-right' => esc_attr__('Right', 'dfd'),
				'text-center' => esc_attr__('Center', 'dfd'),
			);
		}
		public static function header_layouts() {
			return array(
				'boxed' => esc_attr__('On', 'dfd'),
				'fullwidth' => esc_attr__('Off', 'dfd'),
			);
		}
		public static function header_cart_style() {
			return array(
				'simple' => esc_attr__('Simple', 'dfd'),
				'advanced' => esc_attr__('Advanced', 'dfd'),
				'progressive' => esc_attr__('Progressive', 'dfd'),
			);
		}
		public static function sticky_header_animations() {
			return array(
				'simple' => esc_attr__('Simple', 'dfd'),
				'slide-up' => esc_attr__('Slide up', 'dfd'),
				'fade' => esc_attr__('Fade', 'dfd'),
			);
		}
		public static function footer_values() {
			return array(
				'1' => esc_attr__('Compact footer', 'dfd'),
				'2' => esc_attr__('Standard footer with widgets inside', 'dfd'),
				'3' => esc_attr__('Standard footer with WPBackery modules inside', 'dfd'),
				'4' => esc_attr__('Disable footer', 'dfd'),
			);
		}
		public static function soc_icons_hover_style() {
			return array(
				'1' => esc_attr__('Square top to bottom', 'dfd'),
				'2' => esc_attr__('Circle colored style', 'dfd'),
				'3' => esc_attr__('Square colored style', 'dfd'),
				'4' => esc_attr__('Flying line', 'dfd'),
				'5' => esc_attr__('Square black and white', 'dfd'),
				'6' => esc_attr__('Circle black and white', 'dfd'),
				'7' => esc_attr__('Circle icons with border 3px', 'dfd'),
				'8' => esc_attr__('Square icons with border 3px', 'dfd'),
				'9' => esc_attr__('Square icon on a dark background', 'dfd'),
				'10' => esc_attr__('Circle icon on a light background', 'dfd'),
				'11' => esc_attr__('Square icon on a light background', 'dfd'),
				'12' => esc_attr__('Circle icons with border', 'dfd'),
				'13' => esc_attr__('Square icons with border', 'dfd'),
				'14' => esc_attr__('Change color', 'dfd'),
				'15' => esc_attr__('In general border', 'dfd'),
				'16' => esc_attr__('Retro Disco Style', 'dfd'),
				'17' => esc_attr__('Circle from the center', 'dfd'),
				'18' => esc_attr__('The circle in the center', 'dfd'),
				'19' => esc_attr__('Round icons on gray background', 'dfd'),
				'20' => esc_attr__('Square icon on a gray background', 'dfd'),
				'21' => esc_attr__('Circle fade', 'dfd'),
				'22' => esc_attr__('Square background from left to right', 'dfd'),
				'23' => esc_attr__('Circle icon on a dark background', 'dfd'),
				'24' => esc_attr__('Square icon scale background', 'dfd'),
				'25' => esc_attr__('Circle icon scale background', 'dfd'),
				'26' => esc_attr__('Square icon on a light background', 'dfd'),
			);
		}
		public static function get_bgposition() {
			return array(
				'' => esc_attr__('Default', 'dfd'),
				'left top' => esc_attr__('left top', 'dfd'),
				'left center' => esc_attr__('left center','dfd'),
				'left bottom' => esc_attr__('left bottom','dfd'),
				'right top' => esc_attr__('right top','dfd'),
				'right center' => esc_attr__('right center','dfd'),
				'right bottom' => esc_attr__('right bottom','dfd'),
				'center top' => esc_attr__('center top','dfd'),
				'center center' => esc_attr__('center center','dfd'),
				'center bottom' => esc_attr__('center bottom','dfd')
			);
		}
		public static function get_bgposition_redux() {
			$a = self::get_bgposition();
			$o = array();

			foreach($a as $value => $name) {
				$o[] = array(
					'name' => $name,
					'value' => $value,
				);
			}

			return $o;
		}
		public static function preloader_animation_style() {
			return  array(
				'1' => esc_attr__('CSS animation 1', 'dfd'),
				'2' => esc_attr__('CSS animation 2', 'dfd'),
				'3' => esc_attr__('CSS animation 3', 'dfd'),
				'4' => esc_attr__('CSS animation 4', 'dfd'),
				'5' => esc_attr__('CSS animation 5', 'dfd'),
				'6' => esc_attr__('CSS animation 6', 'dfd'),
				'7' => esc_attr__('CSS animation 7', 'dfd'),
				'8' => esc_attr__('CSS animation 8', 'dfd'),
				'9' => esc_attr__('CSS animation 9', 'dfd'),
				'10' => esc_attr__('CSS animation 10', 'dfd'),
				'11' => esc_attr__('CSS animation 11', 'dfd'),
				'12' => esc_attr__('CSS animation 12', 'dfd'),
				'13' => esc_attr__('CSS animation 13', 'dfd'),
				'14' => esc_attr__('CSS animation 14', 'dfd'),
				'15' => esc_attr__('CSS animation 15', 'dfd'),
				'16' => esc_attr__('CSS animation 16', 'dfd'),
			);
		}
		public static function preloader_animation_style_cmb() {
			$a = self::preloader_animation_style();
			$o = array();

			foreach($a as $value => $name) {
				$o[] = array(
					'name' => $name,
					'value' => $value,
				);
			}

			return $o;
		}
		public static function portfolio_hover_variants() {
			return array(
				esc_attr__('Style 1', 'dfd') => 'portfolio-hover-style-1',
				esc_attr__('Style 2', 'dfd') => 'portfolio-hover-style-2',
				esc_attr__('Style 3', 'dfd') => 'portfolio-hover-style-3',
				esc_attr__('Style 4', 'dfd') => 'portfolio-hover-style-4',
				esc_attr__('Style 5', 'dfd') => 'portfolio-hover-style-5',
				esc_attr__('Style 6', 'dfd') => 'portfolio-hover-style-6',
				esc_attr__('Style 7', 'dfd') => 'portfolio-hover-style-7',
				esc_attr__('Style 8', 'dfd') => 'portfolio-hover-style-8',
				esc_attr__('Style 9', 'dfd') => 'portfolio-hover-style-9',
				esc_attr__('Style 10', 'dfd') => 'portfolio-hover-style-10',
				esc_attr__('Style 11', 'dfd') => 'portfolio-hover-style-11',
				esc_attr__('Style 12', 'dfd') => 'portfolio-hover-style-12',
				esc_attr__('Style 13', 'dfd') => 'portfolio-hover-style-13',
				esc_attr__('Style 14', 'dfd') => 'portfolio-hover-style-14',
				esc_attr__('Style 15', 'dfd') => 'portfolio-hover-style-15',
				esc_attr__('Style 16', 'dfd') => 'portfolio-hover-style-16',
				esc_attr__('Style 17', 'dfd') => 'portfolio-hover-style-17',
				esc_attr__('Style 18', 'dfd') => 'portfolio-hover-style-18',
				esc_attr__('Style 19', 'dfd') => 'portfolio-hover-style-19',
				esc_attr__('Style 20', 'dfd') => 'portfolio-hover-style-20',
				esc_attr__('Style 21', 'dfd') => 'portfolio-hover-style-21',
				esc_attr__('Style 22', 'dfd') => 'portfolio-hover-style-22',
				esc_attr__('Style 23', 'dfd') => 'portfolio-hover-style-23',
				esc_attr__('Style 24', 'dfd') => 'portfolio-hover-style-24',
			);
		}
		public static function module_animation_styles($return_value = 'shortcodes') {
			$animations = array(
			   esc_attr__( 'No Animation', 'dfd' )       => '',
			   esc_attr__( 'FadeIn', 'dfd' )             => 'transition.fadeIn',
			   esc_attr__( 'FlipXIn', 'dfd' )            => 'transition.flipXIn',
			   esc_attr__( 'FlipYIn', 'dfd' )            => 'transition.flipYIn',
			   esc_attr__( 'FlipBounceXIn', 'dfd' )      => 'transition.flipBounceXIn',
			   esc_attr__( 'FlipBounceYIn', 'dfd' )      => 'transition.flipBounceYIn',
			   esc_attr__( 'SwoopIn', 'dfd' )            => 'transition.swoopIn',
			   esc_attr__( 'WhirlIn', 'dfd' )            => 'transition.whirlIn',
			   esc_attr__( 'ShrinkIn', 'dfd' )           => 'transition.shrinkIn',
			   esc_attr__( 'ExpandIn', 'dfd' )           => 'transition.expandIn',
			   esc_attr__( 'BounceIn', 'dfd' )           => 'transition.bounceIn',
			   esc_attr__( 'BounceUpIn', 'dfd' )         => 'transition.bounceUpIn',
			   esc_attr__( 'BounceDownIn', 'dfd' )       => 'transition.bounceDownIn',
			   esc_attr__( 'BounceLeftIn', 'dfd' )       => 'transition.bounceLeftIn',
			   esc_attr__( 'BounceRightIn', 'dfd' )      => 'transition.bounceRightIn',
			   esc_attr__( 'SlideUpIn', 'dfd' )          => 'transition.slideUpIn',
			   esc_attr__( 'SlideDownIn', 'dfd' )        => 'transition.slideDownIn',
			   esc_attr__( 'SlideLeftIn', 'dfd' )        => 'transition.slideLeftIn',
			   esc_attr__( 'SlideRightIn', 'dfd' )       => 'transition.slideRightIn',
			   esc_attr__( 'SlideUpBigIn', 'dfd' )       => 'transition.slideUpBigIn',
			   esc_attr__( 'SlideDownBigIn', 'dfd' )     => 'transition.slideDownBigIn',
			   esc_attr__( 'SlideLeftBigIn', 'dfd' )     => 'transition.slideLeftBigIn',
			   esc_attr__( 'SlideRightBigIn', 'dfd' )    => 'transition.slideRightBigIn',
			   esc_attr__( 'PerspectiveUpIn', 'dfd' )    => 'transition.perspectiveUpIn',
			   esc_attr__( 'PerspectiveDownIn', 'dfd' )  => 'transition.perspectiveDownIn',
			   esc_attr__( 'PerspectiveLeftIn', 'dfd' )  => 'transition.perspectiveLeftIn',
			   esc_attr__( 'PerspectiveRightIn', 'dfd' ) => 'transition.perspectiveRightIn',
			);
			$animations_options = $animations_metaboxes = array();
			foreach($animations as $k => $v) {
				$metabox_array = array();
				$metabox_array['name'] = $k;
				$metabox_array['value'] = $v;
				$animations_metaboxes[] = $metabox_array;
				$animations_options[$v] = $k;
			}
			switch($return_value) {
				case 'options':
					return $animations_options;
					break;
				case 'metaboxes':
					return $animations_metaboxes;
					break;
				case 'shortcodes':
				default:
					return $animations;
			}
		}
		public static function get_bgsize($return_value = 'options') {
			$animations = array(
			   esc_attr__( 'Initial', 'dfd' )           => 'initial',
			   esc_attr__( 'Inherit', 'dfd' )			=> 'inherit',
			   esc_attr__( 'Contain', 'dfd' )           => 'contain',
			   esc_attr__( 'Cover', 'dfd' )				=> 'cover',
			);
			$animations_options = $animations_metaboxes = array();
			$animations_metaboxes[] = array(
				'name' => esc_attr__('Inherit from theme options', 'dfd'),
				'value' => 'theme-default',
			);
			foreach($animations as $k => $v) {
				$metabox_array = array();
				$metabox_array['name'] = $k;
				$metabox_array['value'] = $v;
				$animations_metaboxes[] = $metabox_array;
				$animations_options[$v] = $k;
			}
			switch($return_value) {
				case 'metaboxes':
					return $animations_metaboxes;
					break;
				case 'shortcodes':
					return $animations;
					break;
				case 'options':
				default:
					return $animations_options;
			}
		}
		/**
		 * Returns delimiter VC param options array
		 *
		 * @return array
		 */
		public static function vc_delimiter_get_params() {
			return array(
				'delimiter_style' => '',
				'delimiter_width' => '',
				'delimiter_height' => '',
				'delimiter_color' => '',
			);
		}
		/**
		 * Returns margin VC param options array
		 *
		 * @return array
		 */
		public static function vc_margin_get_params() {
			return array(
				'margin-top' => '',
				'margin-bottom' => '',
				'margin-left' => '',
				'margin-right' => '',
			);
		}
		/**
		 * Returns border VC param options array
		 *
		 * @return array
		 */
		public static function vc_border_get_params() {
			return array(
				'border_style' => '',
				'border_width' => '',
				'border_top_width' => '',
				'border_bottom_width' => '',
				'border_left_width' => '',
				'border_right_width' => '',
				'border_radius' => '',
				'border_color' => '',
			);
		}
		/**
		 * Returns box-shadow VC param options array
		 *
		 * @return array
		 */
		public static function vc_box_shadow_get_params() {
			return array(
				'box_shadow_enable' => 'disable',
				'shadow_horizontal' => '0',
				'shadow_vertical' => '15',
				'shadow_blur' => '50',
				'shadow_spread' => '0',
				'box_shadow_color' => 'rgba(0,0,0,.35)',
			);
		}
		/**
		 * Returns gradient VC param options array
		 *
		 * @return array
		 */
		public static function vc_gradient_get_params() {
			return array(
				'gradient_style' => '',
				'gradient_custom_direction' => '',
				'gradient_value' => '',
				'gradient_css' => '',
			);
		}
		/**
		 * Returns responsive VC param options array
		 *
		 * @return array
		 */
		public static function vc_responsive_get_params() {
			return array(
				'margin_top_desktop' => '',
				'margin_bottom_desktop' => '',
				'margin_left_desktop' => '',
				'margin_right_desktop' => '',
				'padding_top_desktop' => '',
				'padding_bottom_desktop' => '',
				'padding_left_desktop' => '',
				'padding_right_desktop' => '',
				'border_top_desktop' => '',
				'border_bottom_desktop' => '',
				'border_left_desktop' => '',
				'border_right_desktop' => '',
				'margin_top_tablet' => '',
				'margin_bottom_tablet' => '',
				'margin_left_tablet' => '',
				'margin_right_tablet' => '',
				'padding_top_tablet' => '',
				'padding_bottom_tablet' => '',
				'padding_left_tablet' => '',
				'padding_right_tablet' => '',
				'border_top_tablet' => '',
				'border_bottom_tablet' => '',
				'border_left_tablet' => '',
				'border_right_tablet' => '',
				'margin_top_mobile' => '',
				'margin_bottom_mobile' => '',
				'margin_left_mobile' => '',
				'margin_right_mobile' => '',
				'padding_top_mobile' => '',
				'padding_bottom_mobile' => '',
				'padding_left_mobile' => '',
				'padding_right_mobile' => '',
				'border_top_mobile' => '',
				'border_bottom_mobile' => '',
				'border_left_mobile' => '',
				'border_right_mobile' => '',
			);
		}
		/**
		 * Returns responsive typography VC param options array
		 *
		 * @return array
		 */
		public static function vc_responsive_text_get_params() {
			return array(
				'font_size_desktop' => '',
				'line_height_desktop' => '',
				'letter_spacing_desktop' => '',
				'font_size_tablet' => '',
				'line_height_tablet' => '',
				'letter_spacing_tablet' => '',
				'font_size_mobile' => '',
				'line_height_mobile' => '',
				'letter_spacing_mobile' => '',
			);
		}
		/**
		 * Parses custom VC params values
		 *
		 * @param mixed $value
		 * @param string $method
		 *
		 * @return string
		 */
		public static function vc_param_parse_value($value, $method = '') {
			if($method != '' && method_exists('Dfd_Theme_Helpers', $method)) {
				$params = self::$method();
			
				$values = vc_parse_multi_attribute($value, $params);
			}
			
			return $values;
		}
		/**
		 * Converts color to rgb(a).
		 *
		 * @param $hex
		 * @param float $opacity
		 *
		 * @return string
		 */
		public static function dfd_hex2rgb($hex,$opacity=1) {
			$hex = str_replace("#", "", $hex);
			if(strlen($hex) == 3) {
				$r = hexdec(substr($hex,0,1).substr($hex,0,1));
				$g = hexdec(substr($hex,1,1).substr($hex,1,1));
				$b = hexdec(substr($hex,2,1).substr($hex,2,1));
			} else {
				$r = hexdec(substr($hex,0,2));
				$g = hexdec(substr($hex,2,2));
				$b = hexdec(substr($hex,4,2));
			}
			$rgba = 'rgba('.$r.','.$g.','.$b.','.$opacity.')';

			return $rgba;
		}
		/**
		 * Lightens or darkens HEX color. Values from -100 to 100 are accepted
		 *
		 * @param $hex
		 * @param $steps
		 *
		 * @return string
		 */
		public static function adjustBrightness($hex, $steps) {
			// Steps should be between -255 and 255. Negative = darker, positive = lighter
			$steps = $steps * 2.55;
			$steps = max(-255, min(255, $steps));

			// Normalize into a six character long hex string
			$hex = str_replace('#', '', $hex);
			if (strlen($hex) == 3) {
				$hex = str_repeat(substr($hex,0,1), 2).str_repeat(substr($hex,1,1), 2).str_repeat(substr($hex,2,1), 2);
			}

			// Split into three parts: R, G and B
			$color_parts = str_split($hex, 2);
			$return = '#';

			foreach ($color_parts as $color) {
				$color   = hexdec($color); // Convert to decimal
				$color   = max(0,min(255,$color + $steps)); // Adjust color
				$return .= str_pad(dechex($color), 2, '0', STR_PAD_LEFT); // Make two char hex code
			}

			return $return;
		}
		/**
		 * Generates image attributes from metadata by attachment ID.
		 *
		 * @param string $src
		 * @param string $id
		 * @param string $w
		 * @param string $h
		 * @param string $default_alt
		 *
		 * @return string
		 */
		public static function get_image_attrs($src = '', $id = '', $w = '', $h = '', $default_alt = '') {
			if(empty($default_alt)) {
				$default_alt = esc_attr__('Image', 'dfd');
			}

			$image_meta = wp_get_attachment_metadata( $id );
			$attr = array();
			$atts_str = '';
			
//			if(!empty($w) && !empty($h)) {
//				$size_array = array( absint( $w ), absint( $h ) );
//				$srcset = wp_calculate_image_srcset( $size_array, $src, $image_meta, $id );
//				$sizes = wp_calculate_image_sizes( $size_array, $src, $image_meta, $id );
//
//				if ( $srcset && ( $sizes || ! empty( $attr['sizes'] ) ) ) {
//					$attr['srcset'] = $srcset;
//
//					if ( empty( $attr['sizes'] ) ) {
//						$attr['sizes'] = $sizes;
//					}
//				} else {
//					$attr['srcset'] = $src.' '.absint($w).'w';
//					$attr['sizes'] = '(max-width: '.$w.'px) 100vw, '.$w.'px';
//				}
//			}
			
			$alt = trim( strip_tags( get_post_meta( $id, '_wp_attachment_image_alt', true ) ) );
			
			if(empty($alt)) {
				$alt = $default_alt;
			}
			
			$attr['alt'] = $alt;
			
			foreach($attr as $name => $val) {
				$atts_str .= $name.'="'.$val.'" ';
			}
			
			return $atts_str;
		}
		/**
		 * Runs the WP_Filesystem get_contents method
		 * 
		 * @param string $url Name of the file to read.
		 * @return string|bool The function returns the read data or false on failure.
		 */
		public static function fileGetContents($url, $use_include_path = false, $context = '') {
			global $wp_filesystem;
			
			$data = '';
			
			if (empty($wp_filesystem)) {
				require_once (ABSPATH . '/wp-admin/includes/file.php');
				WP_Filesystem();
			}
			if(
				!empty($wp_filesystem) && !(is_wp_error($wp_filesystem->errors) && $wp_filesystem->errors->get_error_code())
				||
				(isset($context) && !empty($context))
			) {
				$data = $wp_filesystem->get_contents($url);
			}

			return $data;
		}
		/**
		 * Portfolio Sort panel
		 * @param array $categories
		 */
		public static function folioSortPanel($categories) {
		?>
		<div class="sort-panel twelve columns">
			<ul class="filter filter-buttons">
				<li class="active">
					<a data-filter=".project" href="#"><?php echo esc_html__('All', 'dfd'); ?></a>
				</li>
				<?php foreach ($categories as $category): ?>
					<li>
						<a href="#" data-filter=".project[data-category~='<?php echo strtolower(preg_replace('/\s+/', '-', $category->slug)); ?>']">
							<?php echo esc_html($category->name); ?>
						<span class="anim-bg"></span></a>
					</li>
				<?php endforeach; ?>

			</ul>
		</div>
		<?php
		}
		public static function headerSeventhAppearEffects() {
			return array(
				'default' => esc_attr__('Scale', 'dfd'),
				'fade-out' => esc_attr__('Fade out', 'dfd'),
				'scale-slide-up' => esc_attr__('Scale and slide up', 'dfd'),
				'scale-slide-down' => esc_attr__('Scale and slide down', 'dfd'),
				'scale-slide-left' => esc_attr__('Scale and slide left', 'dfd'),
				'scale-slide-right' => esc_attr__('Scale and slide right', 'dfd'),
				'scale-rotate' => esc_attr__('Scale with rotation', 'dfd'),
			);
		}
		public static function postThumbSize($columns = 1, $sidebars = '1col-fixed') {
			
			$sidebars_int = (int) substr($sidebars, 0, 1) - 1;

			$columns = $sidebars_int + (int)$columns;
			if($columns < 1) $columns = 1;

			$image_sizes = array(
				1 => array(
					'width' => 900,
					'height' => 600
				),
				2 => array(
					'width' => 640,
					'height' => 460
				),
				3 => array(
					'width' => 480,
					'height' => 320
				),
				4 => array(
					'width' => 360,
					'height' => 260
				),
				5 => array(
					'width' => 300,
					'height' => 200
				),
				6 => array(
					'width' => 240,
					'height' => 180
				),
				7 => array(
					'width' => 200,
					'height' => 160
				),
				8 => array(
					'width' => 180,
					'height' => 140
				),
			);

			if($sidebars_int == 0) {
				$image_sizes['1'] = array(
										'width' => 1180,
										'height' => 790
									);
			} elseif ($sidebars_int == 1) {
				$image_sizes['2'] = array(
										'width' => 850,
										'height' => 570
									);
			} else {
				$image_sizes['3'] = array(
										'width' => 520,
										'height' => 350
									);
			}

			return $image_sizes[$columns];
		}
		public static function getHeaderStyleOption() {
			if(!class_exists('Dfd_Ronneby_Core_Plugin')) {
				return '1';
			}
			global $post, $dfd_ronneby;

			$headers_avail = array_keys(self::headers_type());

			if (isset($_POST['header_type']) && !empty($_POST['header_type'])) {
				if ( in_array($_POST['header_type'], $headers_avail) ) {
					return $_POST['header_type'];
				}
			}

			if (!empty($post) && is_object($post) && !is_archive()) {
				$page_id = $post->ID;
				$selected_header = get_post_meta($page_id, 'dfd_headers_header_style', true);

				if ($selected_header && in_array($selected_header, $headers_avail)) {
					return $selected_header;
				}
			}

			$layouts = array('pages', 'archive', 'single', 'search', '404',);

			switch (true) {
				case is_404(): $layout = '404';
					break;
				case is_search(): $layout = 'search';
					break;
				case is_single(): $layout = 'single';
					break;
				case is_archive(): $layout = 'archive';
					break;
				case is_page(): $layout = 'pages';
					break;
				default:
					$layout = false;
			}

			if (!$layout || !in_array($layout, $layouts)) {
				$layout = $layouts[0];
			}

			if (!isset($dfd_ronneby["{$layout}_head_type"]) || !$dfd_ronneby["{$layout}_head_type"] || !in_array($dfd_ronneby["{$layout}_head_type"], $headers_avail)) {
				return false;
			}
			return $dfd_ronneby["{$layout}_head_type"];
		}
		public static function getHeaderLogoPosition() {
			global $post;

			$logo_pos_avail = array_keys(self::logo_position());

			$selected_logo_position = '';

			if (isset($_POST['header_logo_position']) && !empty($_POST['header_logo_position'])) {
				if ( in_array($_POST['header_logo_position'], $logo_pos_avail) ) {
					return $_POST['header_logo_position'];
				}
			}

			if (!empty($post) && is_object($post)) {
				$page_id = $post->ID;

				$logo_position = get_post_meta($page_id, 'dfd_headers_logo_position', true);
				if(!empty($logo_position)) {
					$selected_logo_position = $logo_position;
				}
			}
			if(empty($selected_logo_position)) {
				$selected_logo_position = 'left';
			}

			return $selected_logo_position;
		}

		public static function getHeaderMenuPosition() {
			global $post;

			$menu_pos_avail = array_keys(self::menu_position());

			$selected_menu_position = '';

			if (isset($_POST['header_menu_position']) && !empty($_POST['header_menu_position'])) {
				if ( in_array($_POST['header_menu_position'], $menu_pos_avail) ) {
					return $_POST['header_menu_position'];
				}
			}

			if (!empty($post) && is_object($post)) {
				$page_id = $post->ID;

				$menu_position = get_post_meta($page_id, 'dfd_headers_menu_position', true);
				if(!empty($menu_position)) {
					$selected_menu_position = $menu_position;
				}
			}
			if(empty($selected_menu_position)) {
				$selected_menu_position = 'top';
			}

			return $selected_menu_position;
		}

		public static function getHeaderLayout() {
			global $dfd_ronneby;
			$available = self::header_layouts();

			$header_layout = isset($dfd_ronneby['header_layout']) ? $dfd_ronneby['header_layout'] : '';

			if(!class_exists('Dfd_Ronneby_Core_Plugin')) {
				$header_layout = 'fullwidth';
			}
			
			if (empty($header_layout) || !isset($available[$header_layout])) {
				$available_keys = array_keys($available);
				$header_layout = array_shift($available_keys);
			}

			return $header_layout;
		}

		public static function stickyHeaderAnimation() {
			global $dfd_ronneby;
			$available = self::sticky_header_animations();

			$enable_sticky_header = (!isset($dfd_ronneby['enable_sticky_header']) || strcmp($dfd_ronneby['enable_sticky_header'], 'off') !== 0);

			if(!$enable_sticky_header) return 'sticky-header-disabled';

			$sticky_header_classes = 'sticky-header-enabled';

			$sticky_header_animation = isset($dfd_ronneby['sticky_header_animation']) ? $dfd_ronneby['sticky_header_animation'] : 'simple';

			if (empty($sticky_header_animation) || !isset($available[$sticky_header_animation])) {
				$available_keys = array_keys($available);
				$sticky_header_animation = array_shift($available_keys);
			}

			$sticky_header_classes .= ' '.$sticky_header_animation;

			return $sticky_header_classes;
		}

		public static function getHeaderStyle() {
			global $dfd_ronneby;

			$advanced_styles = '';

			$head_type = self::getHeaderStyleOption();
			$header_layout = self::getHeaderLayout();
			$header_logo_position = self::getHeaderLogoPosition();
			$header_menu_position = self::getHeaderMenuPosition();
			$sticky_header_animation = '';
			if($head_type != '5' && $head_type != '8' && $head_type != '11')
				$sticky_header_animation = self::stickyHeaderAnimation();

			if(isset($dfd_ronneby['extra_header_options']) && $dfd_ronneby['extra_header_options'] == 'on')
				$advanced_styles .= ' dfd-new-headers';

			if(isset($dfd_ronneby['highlight_has_submenu']) && $dfd_ronneby['highlight_has_submenu'] == 'on')
				$advanced_styles .= ' dfd-highlight-has-submenu';

			$customizable_headers = array('1', '2');

			if(in_array($head_type, $customizable_headers)) {
				return "header-style-{$head_type} header-layout-{$header_layout} {$sticky_header_animation} logo-position-{$header_logo_position} menu-position-{$header_menu_position} {$advanced_styles}"; //top-header-{$show_top_header}
			} else {
				return "header-style-{$head_type} header-layout-{$header_layout} {$sticky_header_animation} {$advanced_styles}"; //top-header-{$show_top_header}
			}
		}
		public static function postsViewCounter($post_ID) {

			if(!$post_ID) return false;

			$meta_id = 'dfd_views_counter';

			$reset = get_post_meta($post_ID, 'blog_single_reset_counter', true);

			if(!$reset) {
				$count = get_post_meta($post_ID, $meta_id, true);
			} else {
				$count = '';
				update_post_meta($post_ID, 'blog_single_reset_counter', false);
			}

			if($count == ''){

				$count = 0;

				delete_post_meta($post_ID, $meta_id);

				add_post_meta($post_ID, $meta_id, '0');

				return $count . ' '.esc_html__('View','dfd');

			} else {

				$count++;

				update_post_meta($post_ID, $meta_id, $count);

				if($count == '1'){
					return $count . ' '.esc_html__('View','dfd');
				} else {
					return $count . ' '.esc_html__('Views','dfd');
				}
			}
		}
		/**
		 * Post Like. Social Share
		 * @param integer $post_id Post ID
		 * @return string Post like code
		 */
		public static function getPostLikeLink($post_id = null) {
			if (!$post_id) {
				global $post;

				$post_id = $post->ID;
			}

			$reset = get_post_meta($post_id, 'blog_single_reset_counter', true);

			if($reset) {
				update_post_meta($post_id, '_votes_count', 0);
				update_post_meta($post_id, 'blog_single_reset_counter', false);
			}

			$vote_count = intval(get_post_meta($post_id, "_votes_count", true));

			if(self::hasAlreadyVoted($post_id)) {
				$output = '<i class="dfd-icon-heart2"></i><span title="'.esc_html__('I like this article', 'dfd').'" class="like alreadyvoted"><span class="count">'.esc_html($vote_count).'</span></span>';
			} else {
				$output = '<a class="post-like" href="#" data-post_id="'.esc_attr($post_id).'">
							<i class="dfd-icon-heart2"></i>
							<span class="count">'.esc_html($vote_count).'</span>
							<span class="like-hover-title">'.esc_html__('Like!','dfd').'</span>
						</a>';
			}

			return $output;
		}
		/**
		 * Post Like old style. Social Share
		 * @param integer $post_id Post ID
		 * @return string Post like code
		 */
		public static function getPostLikeLinkOld($post_id = null) {
			if (!$post_id) {
				global $post;
				
				$post_id = $post->ID;
			}
			
			$reset = get_post_meta($post_id, 'blog_single_reset_counter', true);
		
			if($reset) {
				update_post_meta($post_id, '_votes_count', 0);
				update_post_meta($post_id, 'blog_single_reset_counter', false);
			}
			
		    $vote_count = intval(get_post_meta($post_id, "_votes_count", true));
		
		    $output = '';
		
		    if(self::hasAlreadyVoted($post_id)) {
		        $output .= '<i class="dfd-icon-heart2"></i><span title="'.esc_html__('I like this article', 'dfd').'" class="like alreadyvoted"><span class="count">'.esc_html($vote_count).'</span></span>';
			} else {
		        $output .= '<a class="post-like" href="#" data-post_id="'.esc_attr($post_id).'">
							<i class="dfd-icon-heart"></i>
							<span class="count">'.esc_html($vote_count).'</span>
		                </a>';
			}
		
		    return $output;
		}
		public static function hasAlreadyVoted($post_id) {
			$timebeforerevote = 60*60;

			// Retrieve post votes IPs
			$meta_IP = get_post_meta($post_id, "_voted_IP");
			$voted_IP = (isset($meta_IP[0])) ? $meta_IP[0] : '';

			if(!is_array($voted_IP))
				$voted_IP = array();

			// Retrieve current user IP
			$ip = $_SERVER['REMOTE_ADDR'];

			// If user has already voted
			if(in_array($ip, array_keys($voted_IP)))
			{
				$time = $voted_IP[$ip];
				$now = time();

				// Compare between current time and vote time
				if(round(($now - $time) / 60) > $timebeforerevote)
					return false;

				return true;
			}

			return false;
		}
		public static function authorContactMethods() {
			$contactmethods = array();
			$contactmethods['dfd_author_info'] = 'Author Info';
			$contactmethods['twitter'] = 'Twitter';
			$contactmethods['linkedin'] = 'Linked In';
			$contactmethods['youtube'] = 'YouTube';
			$contactmethods['vimeo'] = 'Vimeo';
			$contactmethods['lastfm'] = 'LastFM';
			$contactmethods['tumblr'] = 'Tumblr';
			$contactmethods['skype'] = 'Skype';
			$contactmethods['cr_facebook'] = 'Facebook';
			$contactmethods['deviantart'] = 'Deviantart';
			$contactmethods['vkontakte'] = 'Vkontakte';
			$contactmethods['picasa'] = 'Picasa';
			$contactmethods['pinterest'] = 'Pinterest';
			$contactmethods['wordpress'] = 'Wordpress';
			$contactmethods['instagram'] = 'Instagram';
			$contactmethods['dropbox'] = 'Dropbox';
			$contactmethods['rss'] = 'RSS';

			return $contactmethods;
		}
		public static function socialNetworks($only_show_in_header = false){
			global $dfd_ronneby;
			$social_networks = array(
				"de"=>"Devianart",
				"dg"=>"Digg",
				"dr"=>"Dribbble",
				"db"=>"Dropbox",
				"en"=>"Evernote",
				"fb"=>"Facebook",
				"flk"=>"Flickr",
				"fs"=>"Foursquare",
				"gp"=>"Google +",
				"in"=>"Instagram",
				"lf"=>"Last FM",
				"li"=>"LinkedIN",
				"lj"=>"Livejournal",
				"pi"=>"Picasa",
				"pt"=>"Pinterest",
				"rss"=>"RSS",
				"tu"=>"Tumblr",
				"tw"=>"Twitter",
				"vi"=>"Vimeo",
				//"vk"=>"Vkontakte",
				"wp"=>"Wordpress",
				"yt"=>"YouTube",
				"500px"=>"500px",
				"vb"=>"viewbug",
				"ml"=>"mail",
				"vk2"=>"vkontacte2",
				"xn"=>"xing",
				"sp"=>"spotify",
				"hz"=>"houzz",
				"sk"=>"skype",
				"ss"=>"slideshare",
				"bd"=>"bandcamp",
				"sd"=>"soundcloud",
				"mk"=>"meerkat",
				"ps"=>"periscope",
				"sc"=>"snapchat",
				"tc"=>"thechurch",
				"bh"=>"behance",
				"pp"=>"pinpoint",
				"vd"=>"viadeo",
				"ta"=>"tripadvisor",
			);
			$social_icons = array(
				"de" => "soc_icon-deviantart",
				"dg" => "soc_icon-digg",
				"dr" => "soc_icon-dribbble",
				"db" => "soc_icon-dropbox",
				"en" => "soc_icon-evernote",
				"fb" => "soc_icon-facebook",
				"flk" => "soc_icon-flickr",
				"fs" => "soc_icon-foursquare_2",
				"gp" => "soc_icon-google__x2B_",
				"in" => "soc_icon-instagram",
				"lf" => "soc_icon-last_fm",
				"li" => "soc_icon-linkedin",
				"lj" => "soc_icon-livejournal",
				"pi" => "soc_icon-picasa",
				"pt" => "soc_icon-pinterest",
				"rss" => "soc_icon-rss",
				"tu" => "soc_icon-tumblr",
				"tw" => "soc_icon-twitter-3",
				"vi" => "soc_icon-vimeo",
				//"vk" => "soc_icon-rus-vk-01",
				"wp" => "soc_icon-wordpress",
				"yt" => "soc_icon-youtube",
				"500px" => "dfd-added-font-icon-px-icon",
				"vb" => "dfd-added-font-icon-vb",
				"ml" => "soc_icon-mail",
				"vk2" => "soc_icon-rus-vk-02",
				"xn" => "dfd-added-font-icon-b_Xing-icon_bl",
				"sp" => "dfd-added-font-icon-c_spotify-512-black",
				"hz" => "dfd-added-font-icon-houzz-dark-icon",
				"sk" => "dfd-added-font-icon-skype",
				"ss" => "dfd-added-font-icon-slideshare",
				"bd" => "dfd-added-font-icon-bandcamp-logo",
				"sd" => "dfd-added-font-icon-soundcloud-logo",
				"mk" => "dfd-added-font-icon-Meerkat-color",
				"ps" => "dfd-added-font-icon-periscope-logo",
				"sc" => "dfd-added-font-icon-Snapchat-logo",
				"tc" => "dfd-added-font-icon-the-city",
				"bh" => "soc_icon-behance",
				"pp" => "dfd-added-font-icon-pinpoint",
				"vd" => "dfd-added-font-icon-viadeo",
				"ta" => "dfd-added-font-icon-tripadvisor",
			);

			if ($only_show_in_header){
				foreach($social_networks as $short=>$original) {

					$icon = $social_icons[$short];

					if (isset($dfd_ronneby[$short.'_link']) && $dfd_ronneby[$short.'_link']) {
						$link = $dfd_ronneby[$short.'_link'];
					} else {
						$link = false;
					}
					
					if($link && $link!='http://') {
						echo '<a href="'.esc_url($link) .'" class="'.esc_attr($short) . ' ' . esc_attr($icon) . '" title="'.esc_attr($original).'" target="_blank"><span class="line-top-left '.esc_attr($icon).'"></span><span class="line-top-center '.esc_attr($icon).'"></span><span class="line-top-right '.esc_attr($icon).'"></span><span class="line-bottom-left '.esc_attr($icon).'"></span><span class="line-bottom-center '.esc_attr($icon).'"></span><span class="line-bottom-right '.esc_attr($icon).'"></span><i class="'.esc_attr($icon).'"></i></a>';
					}
				}

			} else {
				foreach($social_networks as $short=>$original){
					$link = $dfd_ronneby[$short.'_link'];
					$icon = $social_icons[$short];
					if( $link  !='' && $link  !='http://' )
						echo '<a href="'.esc_url($link) .'" class="'.esc_attr($icon).'" title="'.esc_attr($original).'" target="_blank"><span class="line-top-left '.esc_attr($icon).'"></span><span class="line-top-center '.esc_attr($icon).'"></span><span class="line-top-right '.esc_attr($icon).'"></span><span class="line-bottom-left '.esc_attr($icon).'"></span><span class="line-bottom-center '.esc_attr($icon).'"></span><span class="line-bottom-right '.esc_attr($icon).'"></span><i class="'.esc_attr($icon).'"></i></a>';
				}
			}
		}
		public static function prevNextPostFormatIcon($post_id) {
			$post_type_icon = '';
			if (has_post_format('video', $post_id)) {
				$post_type_icon = '<i class="dfd-icon-play_film"></i>';
			} elseif (has_post_format('audio', $post_id)) {
				$post_type_icon = '<i class="dfd-icon-play2"></i>';
			} elseif (has_post_format('gallery', $post_id)) {
				$post_type_icon = '<i class="dfd-icon-photos"></i>';	
			} elseif (has_post_format('quote', $post_id)) {
				$post_type_icon = '<i class="navicon-quote-left"></i>';	
			} else {
				$post_type_icon = '<i class="dfd-icon-document2"></i>';
			}
			return $post_type_icon;
		}
		/**
		 * Returns array of pre-defined Visual Composer icon packages
		 *
		 * @return array
		 */
		public static function vc_icon_fonts() {
			return array(
				'fontawesome'	=> esc_html__('Awesome','dfd'),
				'openiconic'	=> esc_html__('Open Iconic','dfd'),
				'typicons'		=> esc_html__('Typicons','dfd'),
				'entypo'		=> esc_html__('Entypo','dfd'),
				'linecons'		=> esc_html__('Linecons','dfd'),
			);
		}
		/**
		 * Returns array which generates icon manager options section
		 *
		 * @return array
		 */
		public static function build_icon_manager_options_section() {
			$_icon_manager_fields = array();
	
			$_icon_manager_fields[] = array (
				'type' => 'icon_manager',
				'id' => 'icon_param',
				'class'	=> 'dfd-full-width-options-field',
				'validate'=>'icon_load',
				'title' => '<div id="'.esc_attr('dfd-icon-font-managet-title').'" class="redux-field-info"><p class="redux-info-desc">'.esc_html__('Icon Fonts Manager', 'dfd').'</p></div>',
				'subtitle' => esc_html__('Upload .zip archive with font-icon files.','dfd').' (<a target="_blank" href="https://icomoon.io/app/#/select">'.esc_html__('Create you font-icon package', 'dfd').'</a>)',
				'desc' => '<span style="color:#585a5e">'.esc_html__('Note:','dfd').'</span> '.esc_html__('Supports zip archives generated on','dfd').' <a href="https://icomoon.io/app/" title="Icomoon">https://icomoon.io</a> '.esc_html__('website only', 'dfd'),
				'placeholder' => array (
						'title' => esc_html__('This is a title', 'dfd'),
						'description' => esc_html__('Description Here', 'dfd'),
						'url' => esc_html__('Give us a link!', 'dfd'),
				),
			);

//			if(method_exists('Dfd_Theme_Helpers','vc_icon_fonts')) {
//				$default_vc_icons = self::vc_icon_fonts();
//				if(!empty($default_vc_icons) && is_array($default_vc_icons)) {
//						$_icon_manager_fields[] = array(
//							'id' => 'info_msc',
//							'type' => 'info',
//							'desc' => esc_html__('Default icon packages for Visual Composer', 'dfd')
//						);
//					foreach($default_vc_icons as $name => $title) {
//						$_icon_manager_fields[] = array(
//								'id' => $name,
//								'type' => 'button_set',
//								'title' => $title,
//								'options' => array('on' => esc_html__('On', 'dfd'), 'off' => esc_html__('Off', 'dfd')),
//								'default' => 'off'
//							);
//					}
//				}
//			}
			
			return $_icon_manager_fields;
		}
		/**
		 * Returns list of Visual Composer icon packages
		 *
		 * @param bool $none
		 *
		 * @return array
		 */
		public static function build_vc_icons_fonts_list($none = true) {
			global $dfd_ronneby;
			
			$default_vc_icons = self::vc_icon_fonts();
			$font_values = array();
			
			if($none) {
				$title = esc_html__('None', 'dfd');
				$font_values[$title] = '';
			}
			
			$prebuilt = esc_html__('Standard', 'dfd');
			$font_values[$prebuilt] = 'dfd_icons';
			
			if(!empty($default_vc_icons) && is_array($default_vc_icons)) {
				foreach($default_vc_icons as $name => $title) {
					if(!isset($dfd_ronneby[$name]) || $dfd_ronneby[$name] == 'on') {
						$font_values[$title] = $name;
					}
				}
			}
			
			return $font_values;
		}
		/**
		 * Generates Visual Composer icon manager param section
		 *
		 * @param string $font
		 * @param string $group
		 * @param array $params
		 * @param string $prefix
		 * @param string $dep_param
		 *
		 * @return array
		 */
		public static function build_vc_icons_param($font = '', $group = '', $params = array(), $prefix = 'ic_', $dep_param = 'select_icon') {
			global $dfd_ronneby;
			
			$param_fields = false;
			
			if(!isset($dfd_ronneby[$font]) || $dfd_ronneby[$font] == 'on') {
			
				$icons_for_fonts = array(
					'fontawesome'	=> 'fa fa-adjust',
					'openiconic'	=> 'vc-oi vc-oi-dial',
					'typicons'		=> 'typcn typcn-adjust-brightness',
					'entypo'		=> 'entypo-icon entypo-icon-note',
					'linecons'		=> 'vc_li vc_li-heart',
				);

				$param_fields = array(
					'type'				=> 'iconpicker',
					'heading'			=> esc_html__('Select Icon ', 'dfd'),
					'param_name'		=> $prefix.$font,
					'value'				=> $icons_for_fonts[$font],
					'settings'			=> array(
						'emptyIcon'			=> false,
						'type'				=> $font,
						'iconsPerPage'		=> 4000,
					),
					'dependency'		=> array('element' => $dep_param, 'value' => $font),
				);

				if($group != '') {
					$param_fields['group'] = $group;
				}
			
				$param_fields = array_merge($param_fields, $params);
			}
			
			return $param_fields;
		}
		public static function demoImporterHelper() {
			$plugins = array();
			
			$plugins['vc'] = class_exists('Vc_Manager', false);
			$plugins['rs'] = class_exists('RevSliderFront', false);
			$plugins['acf'] = class_exists('acf', false);
			$plugins['sg'] = class_exists('Smk_Sidebar_Generator_Register_Condition', false);
			$plugins['wc'] = class_exists('WooCommerce', false);
			$plugins['wcwl'] = defined('YITH_WCWL') && YITH_WCWL;
			
			return array(
				'01_main' => array(
					'title' => esc_html__('Main demo content', 'dfd'),
					'url' => 'http://rnbtheme.com/home/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"rs":{'
										. '"title":"'. esc_html__('Slider Revolution', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['rs'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['rs'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"acf":{'
										. '"title":"'. esc_html__('Advanced custom fields', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['acf'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['acf'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"sg":{'
										. '"title":"'. esc_html__('SMK Sidebar Generator', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['sg'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['sg'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"wc":{'
										. '"title":"'. esc_html__('WooCommerce', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['wc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['wc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
				'02_corporate_one' => array(
					'title' => esc_html__('Corporate agency', 'dfd'),
					'url' => 'http://rnbtheme.com/corporate_one/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"rs":{'
										. '"title":"'. esc_html__('Slider Revolution', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['rs'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['rs'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"acf":{'
										. '"title":"'. esc_html__('Advanced custom fields', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['acf'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['acf'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
				'03_new_shortcodes' => array(
					'title' => esc_html__('Shortcodes', 'dfd'),
					'url' => 'http://rnbtheme.com/shortcodes/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"acf":{'
										. '"title":"'. esc_html__('Advanced custom fields', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['acf'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['acf'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"wc":{'
										. '"title":"'. esc_html__('WooCommerce', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['wc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['wc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"wcwl":{'
										. '"title":"'. esc_html__('YITH WooCommerce Wishlist', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['wcwl'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['wcwl'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
				'04_pages' => array(
					'title' => esc_html__('Additional pages', 'dfd'),
					'url' => 'http://rnbtheme.com/pages/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"rs":{'
										. '"title":"'. esc_html__('Slider Revolution', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['rs'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['rs'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"acf":{'
										. '"title":"'. esc_html__('Advanced custom fields', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['acf'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['acf'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"sg":{'
										. '"title":"'. esc_html__('SMK Sidebar Generator', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['sg'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['sg'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
				'05_blogger' => array(
					'title' => esc_html__('Blogger', 'dfd'),
					'url' => 'http://rnbtheme.com/blogger/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"acf":{'
										. '"title":"'. esc_html__('Advanced custom fields', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['acf'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['acf'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
				'06_one' => array(
					'title' => esc_html__('Traditional', 'dfd'),
					'url' => 'http://rnbtheme.com/one/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"rs":{'
										. '"title":"'. esc_html__('Slider Revolution', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['rs'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['rs'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"acf":{'
										. '"title":"'. esc_html__('Advanced custom fields', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['acf'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['acf'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
				'07_two' => array(
					'title' => esc_html__('Barber shop', 'dfd'),
					'url' => 'http://rnbtheme.com/two/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"rs":{'
										. '"title":"'. esc_html__('Slider Revolution', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['rs'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['rs'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"acf":{'
										. '"title":"'. esc_html__('Advanced custom fields', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['acf'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['acf'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
				'08_three' => array(
					'title' => esc_html__('Scrolling content', 'dfd'),
					'url' => 'http://rnbtheme.com/three/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"rs":{'
										. '"title":"'. esc_html__('Slider Revolution', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['rs'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['rs'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"acf":{'
										. '"title":"'. esc_html__('Advanced custom fields', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['acf'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['acf'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
				'09_four' => array(
					'title' => esc_html__('Pricing agency', 'dfd'),
					'url' => 'http://rnbtheme.com/four/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"rs":{'
										. '"title":"'. esc_html__('Slider Revolution', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['rs'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['rs'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"acf":{'
										. '"title":"'. esc_html__('Advanced custom fields', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['acf'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['acf'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
				'10_five' => array(
					'title' => esc_html__('Slider scroll', 'dfd'),
					'url' => 'http://rnbtheme.com/five/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"rs":{'
										. '"title":"'. esc_html__('Slider Revolution', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['rs'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['rs'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"acf":{'
										. '"title":"'. esc_html__('Advanced custom fields', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['acf'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['acf'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
				'11_six' => array(
					'title' => esc_html__('Portfolio full screen', 'dfd'),
					'url' => 'http://rnbtheme.com/six/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"rs":{'
										. '"title":"'. esc_html__('Slider Revolution', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['rs'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['rs'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"acf":{'
										. '"title":"'. esc_html__('Advanced custom fields', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['acf'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['acf'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
				'12_seven' => array(
					'title' => esc_html__('Portfolio parallax', 'dfd'),
					'url' => 'http://rnbtheme.com/seven/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"acf":{'
										. '"title":"'. esc_html__('Advanced custom fields', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['acf'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['acf'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
				'13_eight' => array(
					'title' => esc_html__('Portfolio boxed', 'dfd'),
					'url' => 'http://rnbtheme.com/eight/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"acf":{'
										. '"title":"'. esc_html__('Advanced custom fields', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['acf'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['acf'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
				'14_nine' => array(
					'title' => esc_html__('Portfolio side menu', 'dfd'),
					'url' => 'http://rnbtheme.com/nine/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"acf":{'
										. '"title":"'. esc_html__('Advanced custom fields', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['acf'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['acf'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
				'15_ten' => array(
					'title' => esc_html__('One page traditional', 'dfd'),
					'url' => 'http://rnbtheme.com/ten/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
				'16_eleven' => array(
					'title' => esc_html__('One page corporate', 'dfd'),
					'url' => 'http://rnbtheme.com/eleven/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"acf":{'
										. '"title":"'. esc_html__('Advanced custom fields', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['acf'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['acf'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
				'17_twelve' => array(
					'title' => esc_html__('Side menu corporate', 'dfd'),
					'url' => 'http://rnbtheme.com/twelve/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"rs":{'
										. '"title":"'. esc_html__('Slider Revolution', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['rs'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['rs'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"acf":{'
										. '"title":"'. esc_html__('Advanced custom fields', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['acf'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['acf'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
				'18_thirteen' => array(
					'title' => esc_html__('Boxed corporate', 'dfd'),
					'url' => 'http://rnbtheme.com/thirteen/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"rs":{'
										. '"title":"'. esc_html__('Slider Revolution', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['rs'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['rs'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
				'19_fourteen' => array(
					'title' => esc_html__('Scrolling effect', 'dfd'),
					'url' => 'http://rnbtheme.com/fourteen/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"acf":{'
										. '"title":"'. esc_html__('Advanced custom fields', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['acf'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['acf'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
				'20_fifteen' => array(
					'title' => esc_html__('Traditional', 'dfd'),
					'url' => 'http://rnbtheme.com/fifteen/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"rs":{'
										. '"title":"'. esc_html__('Slider Revolution', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['rs'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['rs'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"acf":{'
										. '"title":"'. esc_html__('Advanced custom fields', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['acf'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['acf'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
				'21_sixteen' => array(
					'title' => esc_html__('Vertical scroll', 'dfd'),
					'url' => 'http://rnbtheme.com/sixteen/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
				'22_seventeen' => array(
					'title' => esc_html__('Model agency', 'dfd'),
					'url' => 'http://rnbtheme.com/seventeen/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
				'23_eighteen' => array(
					'title' => esc_html__('Coming soon', 'dfd'),
					'url' => 'http://rnbtheme.com/eighteen/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
				'24_nineteen' => array(
					'title' => esc_html__('Coming soon', 'dfd'),
					'url' => 'http://rnbtheme.com/nineteen/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
				'25_twenty' => array(
					'title' => esc_html__('Minimalist', 'dfd'),
					'url' => 'http://rnbtheme.com/twenty/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"rs":{'
										. '"title":"'. esc_html__('Slider Revolution', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['rs'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['rs'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"acf":{'
										. '"title":"'. esc_html__('Advanced custom fields', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['acf'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['acf'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
				'26_twenty_one' => array(
					'title' => esc_html__('Monochrome', 'dfd'),
					'url' => 'http://rnbtheme.com/twenty_one/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"acf":{'
										. '"title":"'. esc_html__('Advanced custom fields', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['acf'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['acf'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
				'27_twenty_two' => array(
					'title' => esc_html__('Lawyer\'s agency', 'dfd'),
					'url' => 'http://rnbtheme.com/twenty_two/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"rs":{'
										. '"title":"'. esc_html__('Slider Revolution', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['rs'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['rs'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
				'28_twenty_three' => array(
					'title' => esc_html__('Building company', 'dfd'),
					'url' => 'http://rnbtheme.com/twenty_three/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"rs":{'
										. '"title":"'. esc_html__('Slider Revolution', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['rs'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['rs'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"acf":{'
										. '"title":"'. esc_html__('Advanced custom fields', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['acf'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['acf'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
				'29_twenty_four' => array(
					'title' => esc_html__('Portfolio slider', 'dfd'),
					'url' => 'http://rnbtheme.com/twenty_four/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"rs":{'
										. '"title":"'. esc_html__('Slider Revolution', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['rs'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['rs'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"acf":{'
										. '"title":"'. esc_html__('Advanced custom fields', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['acf'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['acf'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
				'30_twenty_five' => array(
					'title' => esc_html__('APPS presentation', 'dfd'),
					'url' => 'http://rnbtheme.com/twenty_five/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"rs":{'
										. '"title":"'. esc_html__('Slider Revolution', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['rs'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['rs'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"acf":{'
										. '"title":"'. esc_html__('Advanced custom fields', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['acf'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['acf'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
				'31_twenty_six' => array(
					'title' => esc_html__('Portfolio horizontal', 'dfd'),
					'url' => 'http://rnbtheme.com/twenty_six/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"acf":{'
										. '"title":"'. esc_html__('Advanced custom fields', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['acf'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['acf'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
				'32_twenty_seven' => array(
					'title' => esc_html__('One page creative', 'dfd'),
					'url' => 'http://rnbtheme.com/twenty_seven/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"rs":{'
										. '"title":"'. esc_html__('Slider Revolution', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['rs'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['rs'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"acf":{'
										. '"title":"'. esc_html__('Advanced custom fields', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['acf'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['acf'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
				'33_twenty_eight' => array(
					'title' => esc_html__('Vintage Web', 'dfd'),
					'url' => 'http://rnbtheme.com/twenty_eight/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"rs":{'
										. '"title":"'. esc_html__('Slider Revolution', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['rs'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['rs'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"acf":{'
										. '"title":"'. esc_html__('Advanced custom fields', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['acf'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['acf'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
				'34_twenty_nine' => array(
					'title' => esc_html__('Vintage Creative Agency', 'dfd'),
					'url' => 'http://rnbtheme.com/twenty_nine/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"rs":{'
										. '"title":"'. esc_html__('Slider Revolution', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['rs'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['rs'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"acf":{'
										. '"title":"'. esc_html__('Advanced custom fields', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['acf'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['acf'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
				'35_thirty' => array(
					'title' => esc_html__('Contrast Portfolio', 'dfd'),
					'url' => 'http://rnbtheme.com/thirty/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"rs":{'
										. '"title":"'. esc_html__('Slider Revolution', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['rs'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['rs'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"acf":{'
										. '"title":"'. esc_html__('Advanced custom fields', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['acf'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['acf'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
				'36_thirty_one' => array(
					'title' => esc_html__('One Page Vintage', 'dfd'),
					'url' => 'http://rnbtheme.com/thirty_one/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"rs":{'
										. '"title":"'. esc_html__('Slider Revolution', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['rs'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['rs'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"acf":{'
										. '"title":"'. esc_html__('Advanced custom fields', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['acf'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['acf'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
				'37_thirty_two' => array(
					'title' => esc_html__('3D One Page', 'dfd'),
					'url' => 'http://rnbtheme.com/thirty_two/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"rs":{'
										. '"title":"'. esc_html__('Slider Revolution', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['rs'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['rs'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"acf":{'
										. '"title":"'. esc_html__('Advanced custom fields', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['acf'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['acf'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
				'38_thirty_three' => array(
					'title' => esc_html__('Fitness Gym', 'dfd'),
					'url' => 'http://rnbtheme.com/thirty_three/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"rs":{'
										. '"title":"'. esc_html__('Slider Revolution', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['rs'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['rs'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"acf":{'
										. '"title":"'. esc_html__('Advanced custom fields', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['acf'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['acf'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
				'39_thirty_four' => array(
					'title' => esc_html__('3D Scrolling One Page', 'dfd'),
					'url' => 'http://rnbtheme.com/thirty_four/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"acf":{'
										. '"title":"'. esc_html__('Advanced custom fields', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['acf'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['acf'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
				'40_thirty_five' => array(
					'title' => esc_html__('Bright Creative', 'dfd'),
					'url' => 'http://rnbtheme.com/thirty_five/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"acf":{'
										. '"title":"'. esc_html__('Advanced custom fields', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['acf'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['acf'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
				'41_thirty_six' => array(
					'title' => esc_html__('Restaurant', 'dfd'),
					'url' => 'http://rnbtheme.com/thirty_six/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"rs":{'
										. '"title":"'. esc_html__('Slider Revolution', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['rs'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['rs'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"wc":{'
										. '"title":"'. esc_html__('WooCommerce', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['wc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['wc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"wcwl":{'
										. '"title":"'. esc_html__('YITH WooCommerce Wishlist', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['wcwl'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['wcwl'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
				'42_thirty_seven' => array(
					'title' => esc_html__('Health Center', 'dfd'),
					'url' => 'http://rnbtheme.com/thirty_seven/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"rs":{'
										. '"title":"'. esc_html__('Slider Revolution', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['rs'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['rs'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"wc":{'
										. '"title":"'. esc_html__('WooCommerce', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['wc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['wc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"wcwl":{'
										. '"title":"'. esc_html__('YITH WooCommerce Wishlist', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['wcwl'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['wcwl'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
				'43_thirty_eight' => array(
					'title' => esc_html__('Italian Restaurant', 'dfd'),
					'url' => 'http://rnbtheme.com/thirty_eight/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"rs":{'
										. '"title":"'. esc_html__('Slider Revolution', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['rs'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['rs'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
				'44_thirty_nine' => array(
					'title' => esc_html__('Lawyer\'s agency', 'dfd'),
					'url' => 'http://rnbtheme.com/thirty_nine/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"rs":{'
										. '"title":"'. esc_html__('Slider Revolution', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['rs'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['rs'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
				'45_forty' => array(
					'title' => esc_html__('Bright Restaurant', 'dfd'),
					'url' => 'http://rnbtheme.com/forty/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"rs":{'
										. '"title":"'. esc_html__('Slider Revolution', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['rs'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['rs'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
				'46_shop_one' => array(
					'title' => esc_html__('Shop with more info', 'dfd'),
					'url' => 'http://rnbtheme.com/shop_one/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"rs":{'
										. '"title":"'. esc_html__('Slider Revolution', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['rs'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['rs'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"wc":{'
										. '"title":"'. esc_html__('WooCommerce', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['wc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['wc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"wcwl":{'
										. '"title":"'. esc_html__('YITH WooCommerce Wishlist', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['wcwl'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['wcwl'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
				'47_shop_two' => array(
					'title' => esc_html__('Shop with caregories slider', 'dfd'),
					'url' => 'http://rnbtheme.com/shop_two/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"rs":{'
										. '"title":"'. esc_html__('Slider Revolution', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['rs'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['rs'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"wc":{'
										. '"title":"'. esc_html__('WooCommerce', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['wc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['wc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"wcwl":{'
										. '"title":"'. esc_html__('YITH WooCommerce Wishlist', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['wcwl'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['wcwl'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
				'48_shop_three' => array(
					'title' => esc_html__('Shop with side navigation', 'dfd'),
					'url' => 'http://rnbtheme.com/shop_three/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"rs":{'
										. '"title":"'. esc_html__('Slider Revolution', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['rs'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['rs'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"wc":{'
										. '"title":"'. esc_html__('WooCommerce', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['wc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['wc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"wcwl":{'
										. '"title":"'. esc_html__('YITH WooCommerce Wishlist', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['wcwl'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['wcwl'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
				'49_shop_four' => array(
					'title' => esc_html__('Shop with large thumbs', 'dfd'),
					'url' => 'http://rnbtheme.com/shop_four/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"rs":{'
										. '"title":"'. esc_html__('Slider Revolution', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['rs'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['rs'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"wc":{'
										. '"title":"'. esc_html__('WooCommerce', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['wc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['wc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"wcwl":{'
										. '"title":"'. esc_html__('YITH WooCommerce Wishlist', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['wcwl'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['wcwl'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
				'50_promo' => array(
					'title' => esc_html__('Promo', 'dfd'),
					'url' => 'http://themes.dfd.name/ronneby/promo/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"rs":{'
										. '"title":"'. esc_html__('Slider Revolution', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['rs'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['rs'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
				'51_forty_one' => array(
					'title' => esc_html__('Fitness App', 'dfd'),
					'url' => 'http://rnbtheme.com/forty_one/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"rs":{'
										. '"title":"'. esc_html__('Slider Revolution', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['rs'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['rs'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
				'52_forty_two' => array(
					'title' => esc_html__('Furniture shop', 'dfd'),
					'url' => 'http://rnbtheme.com/forty_two/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"rs":{'
										. '"title":"'. esc_html__('Slider Revolution', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['rs'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['rs'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"wc":{'
										. '"title":"'. esc_html__('WooCommerce', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['wc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['wc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"wcwl":{'
										. '"title":"'. esc_html__('YITH WooCommerce Wishlist', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['wcwl'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['wcwl'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
				'53_forty_three' => array(
					'title' => esc_html__('Coffee House', 'dfd'),
					'url' => 'http://rnbtheme.com/forty_three/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"rs":{'
										. '"title":"'. esc_html__('Slider Revolution', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['rs'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['rs'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
				'54_forty_four' => array(
					'title' => esc_html__('Steak House', 'dfd'),
					'url' => 'http://rnbtheme.com/forty_four/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"rs":{'
										. '"title":"'. esc_html__('Slider Revolution', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['rs'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['rs'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
				'55_forty_five' => array(
					'title' => esc_html__('Recipes', 'dfd'),
					'url' => 'http://rnbtheme.com/forty_five/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
				'56_forty_six' => array(
					'title' => esc_html__('Creative Recipes', 'dfd'),
					'url' => 'http://rnbtheme.com/forty_six/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
				'57_forty_seven' => array(
					'title' => esc_html__('Sea Food Restaurant', 'dfd'),
					'url' => 'http://rnbtheme.com/forty_seven/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"rs":{'
										. '"title":"'. esc_html__('Slider Revolution', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['rs'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['rs'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
				'58_forty_eight' => array(
					'title' => esc_html__('Restaurant', 'dfd'),
					'url' => 'http://rnbtheme.com/forty_eight/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"rs":{'
										. '"title":"'. esc_html__('Slider Revolution', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['rs'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['rs'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
				'59_forty_nine' => array(
					'title' => esc_html__('Star', 'dfd'),
					'url' => 'http://rnbtheme.com/forty_nine/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"rs":{'
										. '"title":"'. esc_html__('Slider Revolution', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['rs'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['rs'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
				'60_fifty' => array(
					'title' => esc_html__('Lions Lawyers', 'dfd'),
					'url' => 'http://rnbtheme.com/fifty/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"rs":{'
										. '"title":"'. esc_html__('Slider Revolution', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['rs'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['rs'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
				'61_fifty_one' => array(
					'title' => esc_html__('Architeco - architectural studio', 'dfd'),
					'url' => 'http://rnbtheme.com/fifty_one/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"rs":{'
										. '"title":"'. esc_html__('Slider Revolution', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['rs'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['rs'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
				'62_fifty_two' => array(
					'title' => esc_html__('Building and architecture', 'dfd'),
					'url' => 'http://rnbtheme.com/fifty_two/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"rs":{'
										. '"title":"'. esc_html__('Slider Revolution', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['rs'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['rs'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
				'63_fifty_three' => array(
					'title' => esc_html__('Barbershop layout', 'dfd'),
					'url' => 'http://rnbtheme.com/fifty_three/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"rs":{'
										. '"title":"'. esc_html__('Slider Revolution', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['rs'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['rs'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
				'64_fifty_four' => array(
					'title' => esc_html__('Crypto trade', 'dfd'),
					'url' => 'http://rnbtheme.com/fifty_four/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
				'65_fifty_five' => array(
					'title' => esc_html__('Dentalica', 'dfd'),
					'url' => 'http://rnbtheme.com/fifty_five/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"rs":{'
										. '"title":"'. esc_html__('Slider Revolution', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['rs'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['rs'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
				'66_fifty_six' => array(
					'title' => esc_html__('Secret models agency', 'dfd'),
					'url' => 'http://rnbtheme.com/fifty_six/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"rs":{'
										. '"title":"'. esc_html__('Slider Revolution', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['rs'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['rs'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
				'67_fifty_seven' => array(
					'title' => esc_html__('Cryptocurrency', 'dfd'),
					'url' => 'http://rnbtheme.com/fifty_seven/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
				'68_fifty_eight' => array(
					'title' => esc_html__('Floristic studio', 'dfd'),
					'url' => 'http://rnbtheme.com/fifty_eight/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
				'69_fifty_nine' => array(
					'title' => esc_html__('Chocolate workshop', 'dfd'),
					'url' => 'http://rnbtheme.com/fifty_nine/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"rs":{'
										. '"title":"'. esc_html__('Slider Revolution', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['rs'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['rs'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
				'70_sixty' => array(
					'title' => esc_html__('Travel agency', 'dfd'),
					'url' => 'http://rnbtheme.com/sixty/',
					'plugins' => '{'
									. '"vc":{'
										. '"title":"'. esc_html__('Visual Composer', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['vc'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['vc'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"rs":{'
										. '"title":"'. esc_html__('Slider Revolution', 'dfd') .'",'
										. '"status":{'
											. '"text":"'. ($plugins['rs'] ? esc_html__('Active', 'dfd') : esc_html__('Not active', 'dfd')) .'",'
											. '"stat":"'. ($plugins['rs'] ? '1' : '0') .'"'
										. '}'
									. '},'
									. '"install":{'
										. '"text":"'. esc_html__('Start Installing Plugins', 'dfd') .'",'
										. '"link":"'. esc_url(admin_url()) .'plugins.php"'
									. '}'
							. '}'
				),
			);
		}
		/**
		 * Returns system status information.
		 *
		 * @use ini_get
		 * @param $name
		 *
		 * @return array|bool
		 */
		public static function getSystemStatus() {
			$status = array(
				'memory_limit' => array(
					'name' => esc_html__('Memory limit', 'dfd'),
					'value' => esc_html__('No info', 'dfd'),
					'passed' => false
				),
				'upload_max_filesize' => array(
					'name' => esc_html__('Upload max file size', 'dfd'),
					'value' => esc_html__('No info', 'dfd'),
					'passed' => false
				),
				'post_max_size' => array(
					'name' => esc_html__('Post max size', 'dfd'),
					'value' => esc_html__('No info', 'dfd'),
					'passed' => false
				),
				'max_execution_time' => array(
					'name' => esc_html__('Time limit', 'dfd'),
					'value' => esc_html__('No info', 'dfd'),
					'passed' => false
				),
				'max_input_vars' => array(
					'name' => esc_html__('Max input vars', 'dfd'),
					'value' => esc_html__('No info', 'dfd'),
					'passed' => false
				),
			);
			
			if(!function_exists('ini_get')) {
				$status['failed'] = 100;
				return $status;
			}
			
			$i = 0;
			
			$required = array(
				'memory_limit' => 128,
				'upload_max_filesize' => 30,
				'post_max_size' => 20,
				'max_execution_time' => 120,
				'max_input_vars' => 3000,
			);
			
			foreach($status as $k => $v) {
				$val = intval(@ini_get($k));
				$pass = ($val >= $required[$k]);
				if(!$pass) {
					$i++;
				}
				$status[$k]['value'] = $val;
				$status[$k]['passed'] = $pass;
			}
			
			$phpVersion = phpversion();
			$phpVersionPass = version_compare($phpVersion, '5.6.0', '>');
			if(!$phpVersionPass) {
				$i++;
			}
			
			$status['phpVersion'] = array(
				'name' => esc_html__('PHP version', 'dfd'),
				'value' => $phpVersion,
				'passed' => $phpVersionPass
			);
			
			$status['failed'] = $i;
			
			return $status;
		}
	}
}


if(!class_exists('DfdMetaBoxSettings')) {
	/**
	 * Metaboxes and options values
	 *
	 *
	 * @class 		DfdMetaBoxSettings
	 * @version		1.0
	 * @category	Class
	 * @author 		DFD
	 */
	class DfdMetaBoxSettings {
		/**
		 * Returns metabox option.
		 *
		 * @param $name
		 *
		 * @return string|bool
		 */
		public static function get($name) {
			global $post;

			if (isset($post) && !empty($post->ID) && !is_archive() && !is_search() && !is_404()) {
				return get_post_meta($post->ID, $name, true);
			}

			return false;
		}
		/**
		 * Checks if metabox value is defined then checks if param value is defined from theme options.
		 *
		 * @param $name
		 * @param $default
		 *
		 * @return string|bool
		 */
		public static function compared($name, $default = '') {
			global $dfd_ronneby;

			$value = self::get($name);
			if($value || $value != '') {
				return $value;
			} elseif(isset($dfd_ronneby[$name]) && !empty($dfd_ronneby[$name])) {
				return $dfd_ronneby[$name];
			} else {
				return $default;
			}
		}
	}
}

if(!class_exists('Dfd_Wrap_Shortcode')) {
	class Dfd_Wrap_Shortcode {
		public static $_shortcode_tags;
		public static function dfd_override_shortcodes($disabled_tags = array()) {
			global $shortcode_tags;

			self::$_shortcode_tags = $shortcode_tags;

			foreach ( $shortcode_tags as $tag => $cb ) {
				if ( in_array( $tag, $disabled_tags ) ) {
					continue;
				}

				$shortcode_tags[ $tag ] = 'dfd_wrap_shortcode_in_div';
			}
		}
		
		public static function dfd_restore_shortcodes() {
			global $shortcode_tags;

			if ( isset( self::$_shortcode_tags ) ) {
				$shortcode_tags = self::$_shortcode_tags;
			}
		}
	}
	function dfd_wrap_shortcode_in_div( $attr, $content = null, $tag ) {
		$_shortcode_tags = Dfd_Wrap_Shortcode::$_shortcode_tags;
		
		return '<div class="dfd-item-wrap"><div class="cover">' . call_user_func( $_shortcode_tags[ $tag ], $attr, $content, $tag ) . '</div></div>';
	}
}

if (!class_exists("dfd_hide_unsuport_module_frontend")) {
	class dfd_hide_unsuport_module_frontend {

		private $name;

		/**
		 * @param string $name css class to hide element
		 */
		function __construct($name) {
			if (vc_is_inline()) {
				$this->name = $name;
				add_action("admin_enqueue_scripts", array ($this, "addScript"));
			}
		}

		public function addScript() {
			echo '<style type="text/css">
						.' . $this->name . '_o{display:none !important;}
				  </style>';
		}
	}
}

if(!function_exists('dfd_show_unsuport_nested_module_frontend')) {
	/**
	 * @param string $name Name of shortcode
	 */
	function dfd_show_unsuport_nested_module_frontend($name=""){
		if(vc_is_inline()){
			$text = sprintf(esc_html__('Module %s is not supported by frontend editor','dfd'), $name);
			echo '<div class="dfd_unsuport_frontend_module"><div class="cell">'.esc_html($text).'</div></div>';
			return true;
		}else{
			return false;
		}
	}
}

class DFD_Wrapping {
	/**
     * Stores the full path to the main template file
     */
	static $main_template;

	/**
     * Stores the base name of the template file; e.g. 'page' for 'page.php' etc.
     */
	static $base;

	static function wrap( $template ) {
		self::$main_template = $template;

		self::$base = substr( basename( self::$main_template ), 0, -4 );

		if ( 'index' == self::$base )
			self::$base = false;

		$templates = array( 'base.php' );

		if ( self::$base )
		array_unshift( $templates, sprintf( 'base-%s.php', self::$base ) );

		return locate_template( $templates );
	}
}

if(!function_exists('dfd_template_path')) {
	function dfd_template_path() {
		return DFD_Wrapping::$main_template;
	}
}

if(!function_exists('dfd_template_base')) {
	function dfd_template_base() {
		return DFD_Wrapping::$base;
	}
}

class DFD_HTML {
	public static function read_more($url, $icon=null, $text=null, $class=null) {
		if (is_null($class)) {
			$class = 'read-more';
		}
		if (is_null($text)) {
			$text = esc_html__('Read more', 'dfd');
		}
		if (is_null($icon)) {
			$icon = 'infinityicon-next';
		}
		return sprintf('<a href="%s" class="%s"><span>%s</span><i class="%s"></i></a>', $url, $class, $text, $icon);
	}
}

class DFD_Carousel {
	public static function controls() {
		$prev = '<a href="#" class="slider-control prev"><span class="count"></span></a>';
		$next = '<a href="#" class="slider-control next"><span class="count"></span></a>';
		
		echo '<div class="slider-controls mobile-hide">' . $prev . $next . '</div>';
	}
}

if(!function_exists('top_menu_fallback')) {
	function top_menu_fallback() {
		echo '<div class="no-menu-box">';
		// Translators 1: Link to Menus, 2: Link to Customize
		printf( esc_html__( 'Please assign a menu to the primary menu location under %1$s.', 'dfd' ),
			sprintf(  '<a href="%s">'.esc_html__( 'Menus', 'dfd' ).'</a>',
				get_admin_url( get_current_blog_id(), 'nav-menus.php' )
			)
		);
		echo '</div>';
	}
}