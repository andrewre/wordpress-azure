<?php
/**
 * The Template for displaying product archives, including the main shop page which is a post type archive
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/archive-product.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce/Templates
 * @version 3.4.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

get_header();

?>

<?php get_template_part('templates/header/top', 'woocommerce'); ?>

<section id="layout">
    <div class="row module dfd-woo-archive">
        <div class="nine columns">
			
			<h2 class="widget-title  text-left woo-page-title">
				<span><?php esc_html_e('The best offers', 'dfd'); ?></span>
			</h2>
			
			<div class="clear"></div>
			
			<?php
			/**
			 * woocommerce_before_main_content hook.
			 *
			 * @hooked woocommerce_output_content_wrapper - 10 (outputs opening divs for the content)
			 * @hooked woocommerce_breadcrumb - 20
			 */

			//do_action( 'woocommerce_before_main_content' );

			/**
			 * woocommerce_archive_description hook.
			 *
			 * @hooked woocommerce_taxonomy_archive_description - 10
			 * @hooked woocommerce_product_archive_description - 10
			 */
			do_action( 'woocommerce_archive_description' );
			
            if (have_posts()) : ?>

				<?php
				/**
				 * woocommerce_before_shop_loop hook
				 *
				 * @hooked woocommerce_result_count - 20
				 * @hooked woocommerce_catalog_ordering - 30
				 */

				remove_action( 'woocommerce_before_shop_loop', 'woocommerce_result_count', 20 );

				do_action('woocommerce_before_shop_loop');

				?>

				<?php woocommerce_product_loop_start(); ?>

				<?php
					global $woocommerce_loop;
					if(empty($woocommerce_loop['columns'])) {
						$woocommerce_loop['columns'] = 3;
					}
				?>
				<?php 
					while (have_posts()) : the_post();

						/**
						 * Hook: woocommerce_shop_loop.
						 *
						 * @hooked WC_Structured_Data::generate_product_data() - 10
						 */
						do_action( 'woocommerce_shop_loop' );

						wc_get_template_part( 'content', 'product' );

					endwhile;
					?>

				<?php woocommerce_product_loop_end(); ?>

				<?php
				/**
				 * woocommerce_after_shop_loop hook
				 *
				 * @hooked woocommerce_pagination - 10
				 */
				do_action('woocommerce_after_shop_loop');
				?>

            <?php else : ?>

				<?php do_action( 'woocommerce_no_products_found' ); ?>

            <?php endif; ?>
			
			<?php
			/**
			 * woocommerce_after_main_content hook.
			 *
			 * @hooked woocommerce_output_content_wrapper_end - 10 (outputs closing divs for the content)
			 */
			//do_action( 'woocommerce_after_main_content' );
			?>

        </div>

        <div class="three columns">
            <?php dynamic_sidebar('shop-sidebar-product-list'); ?>
        </div>

    </div>
</section>

<?php get_footer();