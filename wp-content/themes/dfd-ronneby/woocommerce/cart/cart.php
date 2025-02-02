<?php
/**
 * Cart Page
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/cart/cart.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce/Templates
 * @version 3.5.0
 */

defined( 'ABSPATH' ) || exit;

do_action( 'woocommerce_before_cart' ); ?>

<div class="cart-wrap">
	<form class="woocommerce-cart-form" action="<?php echo esc_url( wc_get_cart_url() ); ?>" method="post">
		<div class="row">

			<div class="seven columns">
				<?php do_action( 'woocommerce_before_cart_table' ); ?>
				
				<table class="shop_table shop_table_responsive cart woocommerce-cart-form__contents" cellspacing="0">
					<thead>
						<tr>
							<th class="product-thumbnail">&nbsp;</th>
							<th class="product-name box-name"><?php esc_html_e( 'Product', 'dfd' ); ?></th>
							<th class="product-price box-name"><?php esc_html_e( 'Price', 'dfd' ); ?></th>
							<th class="product-quantity box-name"><?php esc_html_e( 'Quantity', 'dfd' ); ?></th>
							<th class="product-subtotal box-name"><?php esc_html_e( 'Total', 'dfd' ); ?></th>
							<th class="product-remove">&nbsp;</th>
						</tr>
					</thead>
					<tbody>
						<?php do_action( 'woocommerce_before_cart_contents' ); ?>

						<?php
						foreach ( WC()->cart->get_cart() as $cart_item_key => $cart_item ) {
							
							$_product   = apply_filters( 'woocommerce_cart_item_product', $cart_item['data'], $cart_item, $cart_item_key );
							$product_id = apply_filters( 'woocommerce_cart_item_product_id', $cart_item['product_id'], $cart_item, $cart_item_key );

							if ( $_product && $_product->exists() && $cart_item['quantity'] > 0 && apply_filters( 'woocommerce_cart_item_visible', true, $cart_item, $cart_item_key ) ) {
								$product_permalink = apply_filters( 'woocommerce_cart_item_permalink', $_product->is_visible() ? $_product->get_permalink( $cart_item ) : '', $cart_item, $cart_item_key );
								?>
								<tr class="woocommerce-cart-form__cart-item <?php echo esc_attr( apply_filters( 'woocommerce_cart_item_class', 'cart_item', $cart_item, $cart_item_key ) ); ?>">

									<td class="product-thumbnail">
										<div class="image-cover">
											<?php
												$thumbnail = apply_filters( 'woocommerce_cart_item_thumbnail', $_product->get_image(), $cart_item, $cart_item_key );

												if ( ! $product_permalink ) {
													echo $thumbnail; // PHPCS: XSS ok.
												} else {
													printf( '<a href="%s">%s</a>', esc_url( $product_permalink ), $thumbnail ); // PHPCS: XSS ok.
												}
												?>
										</div>
									</td>

									<td class="product-name" data-title="<?php esc_attr_e( 'Product', 'dfd' ); ?>">
									<?php
									if ( ! $product_permalink ) {
										echo wp_kses_post( apply_filters( 'woocommerce_cart_item_name', $_product->get_name(), $cart_item, $cart_item_key ) . '&nbsp;' );
									} else {
										echo wp_kses_post( apply_filters( 'woocommerce_cart_item_name', sprintf( '<a href="%s">%s</a>', esc_url( $product_permalink ), $_product->get_name() ), $cart_item, $cart_item_key ) );
									}

									do_action( 'woocommerce_after_cart_item_name', $cart_item, $cart_item_key );

									// Meta data
														/*compatibility 3.3.0*/
														if(function_exists('wc_get_formatted_cart_item_data')) {
															echo wc_get_formatted_cart_item_data( $cart_item );
														} else {
															echo WC()->cart->get_item_data( $cart_item );
														}

									// Backorder notification.
									if ( $_product->backorders_require_notification() && $_product->is_on_backorder( $cart_item['quantity'] ) ) {
										echo wp_kses_post( apply_filters( 'woocommerce_cart_item_backorder_notification', '<p class="backorder_notification">' . esc_html__( 'Available on backorder', 'dfd' ) . '</p>', $product_id ) );
									}
									?>
									</td>

									<td class="product-price" data-title="<?php esc_attr_e( 'Price', 'dfd' ); ?>">
										<?php
											echo apply_filters( 'woocommerce_cart_item_price', WC()->cart->get_product_price( $_product ), $cart_item, $cart_item_key ); // PHPCS: XSS ok.
										?>
									</td>

									<td class="product-quantity" data-title="<?php esc_attr_e( 'Quantity', 'dfd' ); ?>">
									<?php
									if ( $_product->is_sold_individually() ) {
										$product_quantity = sprintf( '1 <input type="hidden" name="cart[%s][qty]" value="1" />', $cart_item_key );
									} else {
										$product_quantity = woocommerce_quantity_input( array(
											'input_name'   => "cart[{$cart_item_key}][qty]",
											'input_value'  => $cart_item['quantity'],
											'max_value'    => $_product->get_max_purchase_quantity(),
											'min_value'    => '0',
											'product_name' => $_product->get_name(),
										), $_product, false );
									}

									echo apply_filters( 'woocommerce_cart_item_quantity', $product_quantity, $cart_item_key, $cart_item ); // PHPCS: XSS ok.
									?>
									</td>

									<td class="product-subtotal" data-title="<?php esc_attr_e( 'Total', 'dfd' ); ?>">
										<?php
											echo apply_filters( 'woocommerce_cart_item_subtotal', WC()->cart->get_product_subtotal( $_product, $cart_item['quantity'] ), $cart_item, $cart_item_key ); // PHPCS: XSS ok.
										?>
									</td>

									<td class="product-remove">
										<?php
											echo apply_filters( 'woocommerce_cart_item_remove_link', sprintf(
												'<a href="%s" class="remove" aria-label="%s" data-product_id="%s" data-product_sku="%s">&times;</a>',
												esc_url( wc_get_cart_remove_url( $cart_item_key ) ),
												__( 'Remove this item', 'dfd' ),
												esc_attr( $product_id ),
												esc_attr( $_product->get_sku() )
											), $cart_item_key );
										?>
									</td>
								</tr>
								<?php
							}
						}
						
						do_action( 'woocommerce_cart_contents' );
						?>
								
						<?php do_action( 'woocommerce_after_cart_contents' ); ?>	
					</tbody>
				</table>
				
				<?php do_action( 'woocommerce_after_cart_table' ); ?>
				
				<div class="coupon">
					<?php if ( wc_coupons_enabled() ) { ?>
						<div class="dfd-coupon-heading box-name"><?php _e( 'Coupon discount', 'dfd' ); ?>:</div>
						
						<div class="dfd-coupon-wrap coupon">
							<input type="text" name="coupon_code" class="input-text" id="coupon_code" value="" placeholder="<?php esc_attr_e( 'Coupon code', 'dfd' ); ?>" />
							<span><button type="submit" class="button" name="apply_coupon" value="<?php esc_attr_e( 'Apply coupon', 'dfd' ); ?>"><?php esc_attr_e( 'Apply coupon', 'dfd' ); ?></button></span>
						</div>
						
						<?php do_action( 'woocommerce_cart_coupon' ); ?>
					<?php } ?>
					<div class="dfd-submit-wrap">
						<button type="submit" class="button button-grey" name="update_cart" value="<?php esc_attr_e( 'Update cart', 'dfd' ); ?>"><?php esc_html_e( 'Update Cart', 'dfd' ); ?></button>
					</div>
						
				</div>
				
			</div>

			<div class=" five columns cart-collaterals">
				<div class="cover">

					<?php do_action( 'woocommerce_cart_actions' ); ?>

					<?php wp_nonce_field( 'woocommerce-cart', 'woocommerce-cart-nonce' ); ?>

					<?php do_action( 'woocommerce_cart_collaterals' ); ?>

					<div class="clear"></div>
				</div>
			</div>

		</div>
	</form>

	<div class="container-shortcodes">
		<div class="block-title"><?php esc_html_e('Top rated products','dfd'); ?></div>
		<?php echo do_shortcode('[top_rated_products per_page="4" columns="4"]') ?>
	</div>
</div>

<?php do_action( 'woocommerce_after_cart' ); ?>
