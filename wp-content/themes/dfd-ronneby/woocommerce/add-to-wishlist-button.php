<?php
/**
 * Add to wishlist button template
 *
 * @author Your Inspiration Themes
 * @package YITH WooCommerce Wishlist
 * @version 2.0.0
 */
if(class_exists('YITH_WCWL')) {
	global $product;
?>
<a href="<?php echo esc_url( add_query_arg( 'add_to_wishlist', $product->get_id() ) )?>" rel="nofollow" data-product-id="<?php echo esc_attr($product->get_id()) ?>" data-product-type="<?php echo esc_attr($product->get_type()) ?>" class="add_to_wishlist" >
	<i class="dfd-icon-heart"></i>
	<span><?php esc_html_e('Add to wishlist','dfd') ?></span>
</a>
	<?php
}