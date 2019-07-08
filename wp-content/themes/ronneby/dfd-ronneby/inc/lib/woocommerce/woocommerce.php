<?php
if ( ! defined( 'ABSPATH' ) ) { exit; }
/**
 * Woocommerce support
 */

if(!class_exists('Dfd_WooCommerce_Init')) {
	class Dfd_WooCommerce_Init {
		public $pagenow;
		function __construct() {
			require_once get_template_directory() .'/inc/lib/woocommerce/helpers.php';
			global $pagenow;
			$this->pagenow = $pagenow;
			$this->actions();
			$this->filters();
			if(is_admin()) {
				$this->adminActions();
				$this->adminFilters();
			} else {
				$this->frontActions();
				$this->frontFilters();
			}
		}
		function actions() {
			
		}
		function filters() {
			add_filter('woocommerce_template_path', array($this, 'templatePath'));
		}
		function adminActions() {
			if (isset($_GET['activated'] ) && $this->pagenow == 'themes.php') {
				add_action('init', array($this, 'woocommerceImageDimensions'), 1);
			}
		}
		function adminFilters() {
			
		}
		function frontActions() {
			add_action('after_setup_theme', array($this, 'afterSetupTheme'));
		}
		function frontFilters() {
			add_filter('woocommerce_add_to_cart_fragments', array($this, 'headerAddToCartFragment'));
			add_filter('woocommerce_page_title', array($this, 'woocommercePageTitle'));
			add_filter('woocommerce_sale_flash', array($this, 'customSalesPrice'), 10, 3);
			add_filter('loop_shop_per_page', array($this, 'customProductsNumber'), 20);
			add_filter('woocommerce_breadcrumb_defaults', array($this, 'breadcrumbs'));
			add_filter('woocommerce_gallery_thumbnail_size', array($this, 'singleProductThumbSize'));
		}
		function afterSetupTheme() {
			$this->templatePath();
			$this->disableStyles();
			$this->shopLoopFilters();
			$this->singleProductFilters();
			$this->checkoutFilters();
			$this->cartInnerFilters();
		}
		function templatePath() {
			global $dfd_ronneby;
			
			if(isset($dfd_ronneby['dfd_woocommerce_templates_path']) && !empty($dfd_ronneby['dfd_woocommerce_templates_path'])) {
				return 'woocommerce'.$dfd_ronneby['dfd_woocommerce_templates_path'].'/';
			}

			return 'woocommerce/';
		}
		function disableStyles() {
			add_filter('woocommerce_enqueue_styles', array($this, 'disableStylesFilter'), 11);
		}
		function disableStylesFilter($in) {
			return array();
		}
		function headerAddToCartFragment($fragments) {
			global $woocommerce;

			$fragments['a.woo-cart-contents'] = Dfd_Ronneby_Woo_Helpers::wooCartContents();

			return $fragments;
		}
		function singleProductThumbSize() {
			return array(140, 140);
		}
		function woocommerceImageDimensions() {
			if(!get_option('shop_catalog_image_size')) {
				$image_dimentions = Dfd_Ronneby_Woo_Helpers::woocommerceImageSizeOptions();

				update_option('shop_catalog_image_size', $image_dimentions['catalog']); 		// Product category thumbs
				update_option('shop_single_image_size', $image_dimentions['single']);			// Single product image
				update_option('shop_thumbnail_image_size', $image_dimentions['thumbnail']); 	// Image gallery thumbs
			}
		}
		function shopLoopFilters() {
			remove_action('woocommerce_after_shop_loop_item_title', 'woocommerce_template_loop_price', 10);
			remove_action('woocommerce_after_shop_loop_item_title', 'woocommerce_template_loop_rating', 5);
			remove_action( 'woocommerce_before_shop_loop_item', 'woocommerce_template_loop_product_link_open', 10 );
			remove_action( 'woocommerce_after_shop_loop_item', 'woocommerce_template_loop_product_link_close', 5 );
			add_action( 'woocommerce_after_shop_loop_item_title', 'woocommerce_template_loop_price', 11 );
		}
		function singleProductFilters() {
			add_action('init', array($this, 'singleProductActionsOrder'));

			remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_title', 5 );
			remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_rating', 10 );
			remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_price', 10 );
			remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_excerpt', 20 );
			remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_add_to_cart', 30 );
			remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_meta', 40 );
			remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_sharing', 50 );

			add_action( 'woocommerce_before_single_product_summary', array($this, 'beforeSingleProductImage'), 15 );
			add_action( 'woocommerce_before_single_product_summary', array($this, 'afterSingleProductImage'), 25 );
			
			add_action( 'woocommerce_before_single_product_summary', array($this, 'beforeSingleSummary'), 30 );
			add_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_title', 5 );
			add_action( 'woocommerce_single_product_summary', array($this, 'dfd_single_subtitle'), 7 );
			add_action( 'woocommerce_single_product_summary', array($this, 'beforeSinglePriceRating'), 10 );
			add_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_price', 15 );
			add_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_rating', 20 );
			add_action( 'woocommerce_single_product_summary', array($this, 'afterSinglePriceRating'), 25 );
			add_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_excerpt', 30 );
			add_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_add_to_cart', 30 );
			add_action( 'woocommerce_after_add_to_cart_button', array($this, 'addWishlistButton'));
			add_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_meta', 60 );
			add_action( 'woocommerce_after_single_product_summary', array($this, 'afterSingleSummary'), 5 );
			add_action( 'woocommerce_share', array($this, 'singleProductShare'), 10 );
		}
		function checkoutFilters() {
			remove_action( 'woocommerce_before_checkout_form', 'woocommerce_checkout_login_form', 10 );
			remove_action( 'woocommerce_before_checkout_form', 'woocommerce_checkout_coupon_form', 10 );

			add_action( 'woocommerce_before_checkout_form', array($this, 'beforeFormLogin'), 5 );
			add_action( 'woocommerce_before_checkout_form', 'woocommerce_checkout_login_form', 10 );
			add_action( 'woocommerce_before_checkout_form', array($this, 'afterFormLogin'), 15 );

			add_action( 'woocommerce_before_checkout_form', array($this, 'beforeFormCoupon'), 20 );
			add_action( 'woocommerce_before_checkout_form', 'woocommerce_checkout_coupon_form', 25 );
			add_action( 'woocommerce_before_checkout_form', array($this, 'afterFormCoupon'), 30 );
		}
		function cartInnerFilters() {
			add_action('init', array($this, 'cartInnerActions'));
		}
		function cartInnerActions() {
			global $dfd_ronneby;
			
			remove_action( 'woocommerce_cart_is_empty', 'wc_empty_cart_message', 10 );

			if(isset($dfd_ronneby['dfd_woocommerce_templates_path']) && $dfd_ronneby['dfd_woocommerce_templates_path'] == '_old') {
				add_action( 'woocommerce_before_shipping_calculator', array($this, 'dfdBeforeWrap'));
				add_action( 'woocommerce_after_shipping_calculator', array($this, 'dfdAfterWrap'));
			}
		}
		function singleProductActionsOrder() {
			global $dfd_ronneby;

			if(isset($dfd_ronneby['dfd_woocommerce_templates_path']) && $dfd_ronneby['dfd_woocommerce_templates_path'] == '_old') {
				add_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_sharing', 50 );
			} else {
				add_action( 'woocommerce_single_product_summary', array($this, 'singleSharingBottom'), 63 );
				add_action( 'woocommerce_after_single_product_summary', 'woocommerce_template_single_sharing', 16 );
			}
			
			if(isset($dfd_ronneby['woocommerce_hide_single_thumb']) && $dfd_ronneby['woocommerce_hide_single_thumb'] == '1') {
				remove_action( 'woocommerce_product_thumbnails', 'woocommerce_show_product_thumbnails', 20);
			} else {
				add_action( 'woocommerce_product_thumbnails', array($this, 'beforeSingleProductThums'), 10);
				add_action( 'woocommerce_product_thumbnails', array($this, 'afterSingleProductThums'), 30);
			}
		}
		function addWishlistButton() {
			if(method_exists('Dfd_Ronneby_Woo_Helpers', 'wishlistSizeGuide')) {
				Dfd_Ronneby_Woo_Helpers::wishlistSizeGuide();
			}
		}
		function beforeSingleProductImage() {
			global $dfd_ronneby;
			$columns = '';
			$columns_var = (isset($dfd_ronneby['woo_single_columns_config']) && !empty($dfd_ronneby['woo_single_columns_config'])) ? $dfd_ronneby['woo_single_columns_config'] : 7 ;
			$columns .= Dfd_Ronneby_Front_Helpers::numToStringFull($columns_var, false);
			
			$columns .= (isset($dfd_ronneby['woo_single_thumb_position']) && !empty($dfd_ronneby['woo_single_thumb_position'])) ? ' '.$dfd_ronneby['woo_single_thumb_position'] : '';
			
			echo '<div class="'.esc_attr($columns).' dfd-single-product-media-wrap columns equalize-me">';
		}
		function afterSingleProductImage() {
			echo '</div>';
		}
		function beforeSingleProductThums() {
			global $product;
		
			$post_thumbnail_id = $product->get_image_id();

			echo '<div class="dfd-single-product-thumbnails-wrap">';
				echo '<div class="single-product-thumbnails">';

					if ( has_post_thumbnail() && function_exists('wc_get_gallery_image_html') ) {
						$html  = wc_get_gallery_image_html( $post_thumbnail_id, false );
						echo apply_filters( 'woocommerce_single_product_image_thumbnail_html', $html, $post_thumbnail_id );
					}
		}
		function afterSingleProductThums() {
				echo '</div>';
			echo '</div>';
		}
		function beforeSingleSummary() {
			global $dfd_ronneby;
			$columns_var = (isset($dfd_ronneby['woo_single_columns_config']) && !empty($dfd_ronneby['woo_single_columns_config'])) ? $dfd_ronneby['woo_single_columns_config'] : 7 ;

			$columns = Dfd_Ronneby_Front_Helpers::numToStringFull($columns_var, true);
			echo '<div class="'.esc_attr($columns).' columns dfd-single-product-desc-wrap equalize-me">';
		}
		function dfd_single_subtitle() {
			$subtitle = get_post_meta(get_the_ID(), 'dfd_product_product_subtitle', true);
			if (!empty($subtitle)) {
				echo '<div class="subtitle product-main-subtitle text-left">'.$subtitle.'</div>';
			}
		}
		function beforeSinglePriceRating() {
			echo '<div class="dfd-price-rating-wrap clearfix">';
		}
		function afterSinglePriceRating() {
			echo '</div>';
		}
		function afterSingleSummary() {
			echo '</div>';
			echo '<div class="clear"></div>';
		}
		function singleProductShare() {
			get_template_part('templates/entry-meta/mini','share-single');
		}
		function singleSharingBottom() {
			echo '<div class="dfd-share-cover dfd-woo-single-share-bottom">';
				get_template_part('templates/entry-meta/mini','share-blog');
			echo '</div>';
		}
		function beforeFormLogin() {
			echo '<div class="dfd-login-wrap left">';
		}
		function afterFormLogin() {
			echo '</div>';
		}
		function beforeFormCoupon() {
			echo '<div class="dfd-coupon-wrap right">';
		}
		function afterFormCoupon() {
			echo '</div>';
			echo '<div class="clear"></div>';
		}
		function dfdBeforeWrap() {
			echo '<div class="shipping-calculator-wrap">';
		}
		function dfdAfterWrap() {
			echo '</div>';
		}
		function woocommercePageTitle($page_title) {
			global $dfd_ronneby;
			if (isset($dfd_ronneby['shop_title']) && $dfd_ronneby['shop_title']) {
				$page_title = $dfd_ronneby['shop_title'];
			}

			return $page_title;
		}
		function customSalesPrice($text, $post, $product ) {
			$percentage = '';
			if(!is_null($product->get_regular_price()) && $product->get_regular_price() != 0) {
				$percentage = '-'.round( ( ( abs($product->get_regular_price()) - abs($product->get_sale_price()) ) / abs($product->get_regular_price()) ) * 100 ) . '%';
			}
			return sprintf( '<span class="onsale">' . esc_html__( '%s Sale!', 'dfd' ) . '</span>', $percentage );
		}
		function customProductsNumber() {
			global $dfd_ronneby;
			$products_number = 10;
			if(isset($dfd_ronneby['woo_category_products_number']) && !empty($dfd_ronneby['woo_category_products_number'])) {
				$products_number = $dfd_ronneby['woo_category_products_number'];
			}
			return $products_number;
		}
		function breadcrumbs($args=array()) {
			$args['delimiter'] = '<span class="del"></span>';
			$args['wrap_before'] = '<nav id="crumbs">';
			$args['wrap_after'] = '</nav>';
			$args['before'] = '<span>';
			$args['after'] = '</span>';

			return $args;
		}
	}
	$Dfd_WooCommerce_Init = new Dfd_WooCommerce_Init();
}

class DFD_WC_Product_Categories_Carousel_Walker extends Walker {
	
	var $tree_type = 'product_cat';
	var $db_fields = array ( 'parent' => 'parent', 'id' => 'term_id', 'slug' => 'slug' );
	
	public function start_lvl( &$output, $depth = 0, $args = array() ) {}
	
	public function end_lvl( &$output, $depth = 0, $args = array() ) {}
	
	public function start_el(&$output, $cat, $depth = 0, $args = array(), $current_object_id = 0) {
		if(function_exists('get_term_meta')) {
			$thumbnail_id = get_term_meta($cat->term_id, 'thumbnail_id', true);
		} else {
			$thumbnail_id = get_woocommerce_term_meta($cat->term_id, 'thumbnail_id', true);
		}
		
		if ( $thumbnail_id ) {
			$image_buf = wp_get_attachment_image_src($thumbnail_id, 'full');
			if (!empty($image_buf)) {
				$image_url = $image_buf[0];
			}
		}
		
		$output .= '<div class="cat-item cat-item-' . $cat->term_id;
		if ($cat->term_id == $args['current_category']) {
			$output .= ' cat-item-current';
		}
		$output .= '"><div class="cover">';
		$output .= '<div class="img-wrap"><a href="' . get_term_link( (int) $cat->term_id, 'product_cat' ) . '">';
		if (!empty($image_url)) {
			$image = dfd_aq_resize($image_url, 300, 230, true, true, true);
			if(!$image) {
				$image = $image_url;
			}
		} else {
			$image = false;
		}
		if ( $image ) {
			$output .= '<img src="' . esc_url( $image ) . '" alt="' . esc_attr( $cat->name ) . '" />';
		} else {
			$output .= wc_placeholder_img(array(300, 230));
		}
		
		$output .= '</a></div>';
		$output .= '<div class="cat-meta">';
		$output .= '<div class="box-name"><a href="' . get_term_link( (int) $cat->term_id, 'product_cat' ) . '">' . $cat->name . '</a></div>';
		$output .= '<div class="dopinfo">'.$cat->count.' '.esc_html__('items', 'dfd').'</div>';
		$output .= '</div>';
		$output .= '</div>';
	}
	
	public function end_el(&$output, $cat, $depth = 0, $args = array()) {
		$output .= "</div>\n";
	}
	
	public function display_element( $element, &$children_elements, $max_depth, $depth = 0, $args, &$output ) {
		if ( ! $element || 0 === $element->count ) {
			return;
		}
		parent::display_element( $element, $children_elements, $max_depth, $depth, $args, $output );
	}
}