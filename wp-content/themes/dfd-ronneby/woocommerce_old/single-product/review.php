<?php
/**
 * Review Comments Template
 *
 * Closing li is left out on purpose!
 *
 * @author 		WooThemes
 * @package 	WooCommerce/Templates
 * @version     2.6.0
 */

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

global $post;
$rating = esc_attr( get_comment_meta( $GLOBALS['comment']->comment_ID, 'rating', true ) );
?>
<li itemprop="reviews" itemscope itemtype="http://schema.org/Review" <?php comment_class(); ?> id="li-comment-<?php comment_ID() ?>">
	<div id="comment-<?php comment_ID(); ?>" class="comment_container">

		<?php /*echo get_avatar( $GLOBALS['comment'], $size='48' );*/ ?>

		<div class="comment-text">

			<?php if ($GLOBALS['comment']->comment_approved == '0') : ?>
				<p class="meta"><em><?php esc_html_e( 'Your comment is awaiting approval', 'dfd' ); ?></em></p>
			<?php else : ?>
				<div class="box-name author" itemprop="author"><?php comment_author(); ?></div><div class="clear"></div> <?php

					if ( get_option('woocommerce_review_rating_verification_label') == 'yes' ) {
						if(function_exists('wc_customer_bought_product')) {
							if ( wc_customer_bought_product( $GLOBALS['comment']->comment_author_email, $GLOBALS['comment']->user_id, $post->ID ) )
								echo '<em class="verified">(' . esc_html__( 'verified owner', 'dfd' ) . ')</em> ';
						} else {
							if ( woocommerce_customer_bought_product( $GLOBALS['comment']->comment_author_email, $GLOBALS['comment']->user_id, $post->ID ) )
								echo '<em class="verified">(' . esc_html__( 'verified owner', 'dfd' ) . ')</em> ';
						}
					}

				?><time itemprop="datePublished" time datetime="<?php echo get_comment_date('c'); ?>" class="subtitle left"><?php echo get_comment_date(get_option('date_format')); ?></time>
				<?php do_action( 'woocommerce_review_before_comment_meta', $comment ); ?>
			<?php endif; ?>

			<div class="clear"></div>
			<div itemprop="description" class="comment-description"><?php comment_text(); ?></div>
			<div class="clear"></div>
		</div>
		<div class="clear"></div>
	</div>