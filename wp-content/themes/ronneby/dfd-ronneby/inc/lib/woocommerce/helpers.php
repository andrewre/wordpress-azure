<?php
if(!defined('ABSPATH')) {
	exit;
}

if(!class_exists('Dfd_Ronneby_Woo_Helpers')) {
	class Dfd_Ronneby_Woo_Helpers {
		public static function wooCartContents() {
			global $woocommerce;
			if(function_exists('wc_get_cart_url')) {
				$href = wc_get_cart_url();
			} else {
				$href = $woocommerce->cart->get_cart_url();
			}
			
			$title = '';

			$items_count = $woocommerce->cart->cart_contents_count;

			ob_start();
			?>
			<a class="woo-cart-contents" href="<?php echo esc_url($href); ?>" title="<?php echo esc_attr($title); ?>">
				<span class="woo-cart-items">
					<i class="dfd-icon-shopping_bag_2"></i>
					<!-- <span class="dfd-header-cart-handle"></span> -->
				</span>
				<span class="woo-cart-details">
					<?php echo esc_html($items_count); ?>
				</span>
			</a>
			<?php
			return ob_get_clean();
		}
		public static function woocommerceTotalCart() {
			global $dfd_ronneby;
			if (!class_exists('WooCommerce')) {
				return;
			}

			if(isset($dfd_ronneby['show_header_cart']) && $dfd_ronneby['show_header_cart'] == 'off') {
				return;
			}

			$cart_style = (isset($dfd_ronneby['header_cart_style']) && $dfd_ronneby['header_cart_style'] != '') ? $dfd_ronneby['header_cart_style'] : 'simple';

			ob_start();
			?>
			<div class="total_cart_header <?php echo esc_attr($cart_style) ?>">
				<?php echo Dfd_Ronneby_Woo_Helpers::wooCartContents(); ?>

				<div class="shopping-cart-box">
					<div class="shopping-cart-box-content">
						<div class="widget_shopping_cart_content"></div>
					</div>
				</div>
			</div>
			<?php
			return ob_get_clean();
		}
		public static function woocommerceImageSizeOptions() {
			$image_dimenions = array();
			$image_dimenions['catalog'] = array(
				'width' 	=> '400',	// px
				'height'	=> '480',	// px
				'crop'		=> 1 		// true
			);

			$image_dimenions['single'] = array(
				'width' 	=> '590',	// px
				'height'	=> '600',	// px
				'crop'		=> 1 		// true
			);

			$image_dimenions['thumbnail'] = array(
				'width' 	=> '140',	// px
				'height'	=> '140',	// px
				'crop'		=> 1 		// true
			);
			return $image_dimenions;
		}
		public static function wishlistSizeGuide() {
			if (!defined('YITH_WCWL') || !YITH_WCWL) {
				return;
			}
			$position = get_option( 'yith_wcwl_button_position' );
			if($position == 'shortcode') {
				echo '<div class="single-product-wishlist-wrap">';
					wc_get_template_part('add-to-wishlist-button');
				echo '</div>';
			}
		}
	}
}

// Redefine woocommerce_output_related_products()
function woocommerce_output_related_products() {
	$args = array(
		'posts_per_page' => 4,
		'columns'        => 4,
	);
	woocommerce_related_products($args); // Display 4 products in rows of 4
}

if ( ! function_exists( 'wc_product_rating_overview' ) ) {
	function wc_product_rating_overview() {
		global $product;
		echo '<span class="show">' . $product->get_rating_html() . '</span>';
	}
}

function woocommerce_template_loop_product_thumbnail($color = '', $align = '') {
	
	global $post, $product, $dfd_ronneby;
	
	$buttons_class = '';
	
	$options = array(
		'woo_products_buttons_color_scheme' => $color,
		'woo_category_content_alignment' => $align,
	);
	
	foreach($options as $k => $v) {
		if($v == '' && isset($dfd_ronneby[$k]) && !empty($dfd_ronneby[$k])) {
			$buttons_class .= ' '.$dfd_ronneby[$k];
		} else {
			$buttons_class .= ' '.$v;
		}
	}
	

	$attachment_ids = array();
	if(method_exists($product, 'get_gallery_image_ids')) {
		$attachment_ids = $product->get_gallery_image_ids();
	} elseif(method_exists($product, 'get_gallery_attachment_ids')) {
		$attachment_ids = $product->get_gallery_attachment_ids();
	}
	/* Thumb */
	if ( has_post_thumbnail() ) {
		$thumbnail_id = get_post_thumbnail_id( $post->ID );
		array_unshift($attachment_ids, $thumbnail_id);
		array_unique($attachment_ids);
	}
	
	$catalogue_mode = (isset($dfd_ronneby['woocommerce_catalogue_mode']) && $dfd_ronneby['woocommerce_catalogue_mode']);
	$slideshow_speed = (isset($dfd_ronneby['woocommerce_archive_slideshow_speed']) && $dfd_ronneby['woocommerce_archive_slideshow_speed']) ? $dfd_ronneby['woocommerce_archive_slideshow_speed'] : 2000;
	
	ob_start();
	$unique_id = uniqid('product_slider_');
	if(function_exists('wc_get_image_size')) {
		$image_size = wc_get_image_size('shop_catalog');
	} else {
		$image_dimentions = Dfd_Ronneby_Woo_Helpers::woocommerceImageSizeOptions();
		$image_size = $image_dimentions['catalog'];
	}
	?>

	<div id="<?php echo esc_attr($unique_id); ?>" class="woo-entry-thumb" data-speed="<?php echo esc_attr($slideshow_speed) ?>">
		
		<div class="woo-entry-thumb-carousel">

		<?php 
		foreach ( $attachment_ids as $attachment_id ) {
			$image_url = wp_get_attachment_image_src( $attachment_id, 'large' );
			$image_src = dfd_aq_resize($image_url[0], $image_size['width'], $image_size['height'], $image_size['crop'], true, true);
			if(!$image_src) {
				$image_src = $image_url[0];
			}
			$image = '<img src="'.esc_url($image_src).'" alt="'.esc_attr__('Image', 'dfd').'" />';
			/* Should be used to enable pretty-photo lightbox */
			
			$image_link = wp_get_attachment_url( $attachment_id );
			if ( ! $image_link ) { continue; }
			$classes = array();
			$image_class = esc_attr( implode( ' ', $classes ) );
			//$image_title = esc_attr( get_the_title( $attachment_id ) );

			$tmpl = '<div class="%s">%s</div>';
			echo apply_filters(
				'woocommerce_single_product_image_thumbnail_html', 
				sprintf( $tmpl, 
					$image_class,
					//$image_link,
					//'',//$image_title,
					//$post->ID,
					$image
				),
				$attachment_id,
				$post->ID,
				$image_class
			);
		}
		?>

		</div>
		<?php
			$preview_thumb_url = wp_get_attachment_image_src($attachment_ids[0], 'large');
			$preview_thumb_src = dfd_aq_resize($preview_thumb_url[0], $image_size['width'], $image_size['height'], $image_size['crop'], true, true);
			if(!$preview_thumb_src) {
				$preview_thumb_src = $preview_thumb_url[0];
			}
		?>
		<div class="preview-thumb">
			<img src="<?php echo esc_url($preview_thumb_src); ?>" alt="<?php esc_attr_e('Image', 'dfd') ?>" />
		</div>
	</div>
	<div class="buttons-wrap <?php echo esc_attr($buttons_class) ?>">
		<div>
			<?php if(!$catalogue_mode): ?>
				<?php
				if(function_exists('woocommerce_template_loop_add_to_cart')) {
					woocommerce_template_loop_add_to_cart();
				}
				?>
				<?php wc_get_template('loop/share.php'); ?>
			<?php endif ?>
			<a href="<?php echo wp_get_attachment_url( $attachment_ids[0] ); ?>" title="<?php esc_attr_e('Product images', 'dfd') ?>" class="dfd-prod-lightbox" data-rel="prettyPhoto[product-gallery-<?php echo esc_attr($post->ID); ?>]">
				<?php if(isset($dfd_ronneby['dfd_woocommerce_templates_path']) && !empty($dfd_ronneby['dfd_woocommerce_templates_path'])) { ?>
					<span class="cover">
						<i class="dfd-icon-zoom_in front"></i>
						<i class="dfd-icon-zoom_in back"></i>
					</span>
				<?php } else { ?>
					<i class="dfd-icon-zoom"></i>
				<?php } ?>
			</a>
		</div>
	</div>

	<?php
	echo ob_get_clean();
}