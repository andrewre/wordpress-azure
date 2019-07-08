<?php
if(!defined('ABSPATH')) {
	exit;
}

if(!class_exists('Dfd_Ronneby_Wishlist_Init')) {
	class Dfd_Ronneby_Wishlist_Init {
		function __construct() {
			$this->init();
		}
		function init() {
			add_filter('yith_wcwl_add_to_cart_label', array($this, 'wishlistAddToCart'), 10);
			add_filter('variable_add_to_cart_text', array($this, 'wishlistAddToCart'), 10);
		}
		function wishlistAddToCart($label) {
			return '<i class="dfd-icon-shopping_bag_1"></i><span>'.$label.'</span>';
		}
	}
	$Dfd_Ronneby_Wishlist_Init = new Dfd_Ronneby_Wishlist_Init();
}
if(!class_exists('Dfd_Ronneby_Wishlist_Helpers')) {
	class Dfd_Ronneby_Wishlist_Helpers {
		public static function wishlistLink() {
			if (!defined('YITH_WCWL') || !YITH_WCWL) {
				return;
			}
			global $yith_wcwl;
			$href = $yith_wcwl->get_wishlist_url();

			ob_start();
			?>
			<div class="header-wishlist-link-wrap">
				<a class="header-wishlist-link" href="<?php echo esc_url($href); ?>" title="<?php esc_attr_e('My wishlist', 'dfd') ?>"><?php esc_html_e('My wishlist', 'dfd'); ?></a>
			</div>
			<?php
			return ob_get_clean();
		}
		public static function wishlistButton() {
			if (!defined('YITH_WCWL') || !YITH_WCWL) {
				return;
			}

			global $yith_wcwl;

			if(is_object($yith_wcwl)) {
				$items_in_wishlist = $yith_wcwl->count_products();

				$href = $yith_wcwl->get_wishlist_url();
				$title = esc_html__('View your wishlist', 'dfd');

				ob_start();
				?>
					<a class="header-wishlist-button dfd-tablet-hide" href="<?php echo esc_url($href); ?>" title="<?php echo esc_attr($title); ?>">
						<i class="dfd-icon-heart2"></i>
						<span class="wishlist-details"><?php echo esc_html($items_in_wishlist); ?></span>
					</a>
				<?php
				return ob_get_clean();
			}
		}
		public static function dfd_wishlist_total() {
			if (!defined('YITH_WCWL') || !YITH_WCWL) {
				return;
			}

			global $wpdb, $yith_wcwl;


			ob_start();
			?>
			<div class="total_wishlist_header">
				<?php
				if(method_exists('Dfd_Ronneby_Wishlist_Helpers', 'wishlistButton')) {
					echo Dfd_Ronneby_Wishlist_Helpers::wishlistButton();
				}
				?>
				<?php 
					if( isset( $_GET['user_id'] ) && !empty( $_GET['user_id'] ) ) {
						$user_id = $_GET['user_id'];
					} elseif( is_user_logged_in() ) {
						$user_id = get_current_user_id();
					}
					if( is_user_logged_in() || ( isset( $user_id ) && !empty( $user_id ) ) ) {
						$wishlist_items = $wpdb->get_results( $wpdb->prepare( "SELECT * FROM `" . YITH_WCWL_TABLE . "` WHERE `user_id` = %s", $user_id ), ARRAY_A );
					} elseif( yith_usecookies() ) {
						$wishlist_items = yith_getcookie( 'yith_wcwl_products' ); 
					} else {
						$wishlist_items = isset( $_SESSION['yith_wcwl_products'] ) ? $_SESSION['yith_wcwl_products'] : array();
					} ?>
					<div class="header-wishlist-details">
					<?php if(count($wishlist_items) > 0) { ?>
						<ul>
							<?php foreach($wishlist_items as $item) {
								if( !is_user_logged_in() && !isset( $_GET['user_id'] ) ) {
									if( isset( $item['add-to-wishlist'] ) && is_numeric( $item['add-to-wishlist'] ) ) {
										$item['prod_id'] = $item['add-to-wishlist'];
										$item['ID'] = $item['add-to-wishlist'];
									} else {
										$item['prod_id'] = $item['product_id'];
										$item['ID'] = $item['product_id'];
									}
								}
								$product = get_product($item['prod_id']);
								if($product != false && $product->exists()) { ?>
									<li class="header-wishlist-item">
										<div class="image-thumb">
											<a href="<?php echo esc_url( get_permalink( apply_filters( 'woocommerce_in_cart_product', $item['prod_id'] ) ) ) ?>">
												<?php echo wp_kses_post($product->get_image()) ?>
											</a>
										</div>
										<div class="box-name">
											<a href="<?php echo esc_url( get_permalink( apply_filters( 'woocommerce_in_cart_product', $item['prod_id'] ) ) ) ?>"><?php echo apply_filters( 'woocommerce_in_cartproduct_obj_title', $product->get_title(), $product ) ?></a>
										</div>
										<?php echo !empty($item['quantity']) ? '<div class="header-wishlist-items-quantity">'.$item['quantity'].'</div>' : ''; ?>
									</li>
								<?php } ?>
							<?php } ?>
						</ul>
					<?php } else { ?>
						<div class="wishlist-empty">No products in the wishlist</div>
					<?php } ?>
						<p class="wishlist-button">
							<a href="<?php echo esc_url($yith_wcwl->get_wishlist_url()); ?>" title="<?php esc_attr_e('Wishlist button', 'dfd'); ?>" class="button">
								<i class="infinityicon-shop_cart"></i>
								<?php esc_html_e('View wishlist', 'dfd') ?>
							</a>
						</p>
						<p class="total">
							<strong><?php esc_html_e('Total:', 'dfd') ?></strong>
							<span class="amount"><?php echo (count($wishlist_items) > 0) ? $yith_wcwl->count_products() : '0'; ?></span><span> items</span>
						</p>
					</div>
			</div>
			<?php
			return ob_get_clean();
		}
	}
}