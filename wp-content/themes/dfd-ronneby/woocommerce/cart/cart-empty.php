<?php
/**
 * Empty cart page
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/cart/cart-empty.php.
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

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

wc_print_notices();

?>

<div class="cart-empty-page row cart-empty">
	<?php do_action( 'woocommerce_cart_is_empty' ); ?>
	<div class="info-wrap-empty">
		<h1 class="info-background-empty"><?php esc_html_e('Oops', 'dfd'); ?></h1>
		<div class="info-content-empty">
			<div class="icon-empty">
				<i class="dfd-icon-trolley_close"></i>
			</div>
			<div class="info-empty">
				<p class="cart-empty-text"><?php echo wp_kses_post( apply_filters( 'wc_empty_cart_message', __( 'Your cart is currently empty.', 'dfd' ) ) ) ?></p>
				<p class="cart-empty-subtext"><?php esc_html_e( 'You may check out all the available products and buy some in the shop.', 'dfd' ) ?></p>
				<?php if ( wc_get_page_id( 'shop' ) > 0 ) : ?>
					<p class="button-on-page"><a class="wc-backward" href="<?php echo esc_url( apply_filters( 'woocommerce_return_to_shop_redirect', wc_get_page_permalink( 'shop' ) ) ); ?>"><?php esc_html_e( 'Return to shop', 'dfd' ); ?></a></p>
				<?php endif; ?>
			</div>
		</div>
	</div>
	<div class="container-shortcodes">
		<?php echo do_shortcode('[top_rated_products per_page="4" columns="4"]') ?>
	</div>
</div>