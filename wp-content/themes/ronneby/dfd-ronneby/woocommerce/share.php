<?php
/**
 * Share template
 *
 * @author Your Inspiration Themes
 * @package YITH WooCommerce Wishlist
 * @version 1.1.5
 */
?>

<div class="yith-wcwl-share">
    <h4 class="yith-wcwl-share-title"><?php echo esc_html($share_title) ?></h4>
    <ul>
        <?php if( $share_facebook_enabled ): ?>
            <li style="list-style-type: none; display: inline-block;">
                <a target="_blank" class="facebook chaffle" data-lang="en" href="https://www.facebook.com/sharer.php?s=100&amp;p[title]=<?php echo esc_attr($share_link_title) ?>&amp;p[url]=<?php echo esc_url($share_link_url) ?>&amp;p[summary]=<?php echo esc_attr($share_summary) ?>&amp;p[images][0]=<?php echo esc_url($share_image_url) ?>" title="<?php esc_attr_e( 'Facebook', 'dfd' ) ?>"><?php esc_html_e( 'Facebook', 'dfd' ) ?></a>
            </li>
        <?php endif; ?>

        <?php if( $share_twitter_enabled ): ?>
            <li style="list-style-type: none; display: inline-block;">
                <a target="_blank" class="twitter chaffle" data-lang="en" href="https://twitter.com/share?url=<?php echo esc_url($share_link_url) ?>&amp;text=<?php echo esc_attr($share_twitter_summary) ?>" title="<?php esc_attr_e( 'Twitter', 'dfd' ) ?>"><?php esc_html_e( 'Twitter', 'dfd' ) ?></a>
            </li>
        <?php endif; ?>

        <?php if( $share_pinterest_enabled ): ?>
            <li style="list-style-type: none; display: inline-block;">
                <a target="_blank" class="pinterest chaffle" data-lang="en" href="http://pinterest.com/pin/create/button/?url=<?php echo esc_url($share_link_url) ?>&amp;description=<?php echo esc_attr($share_summary) ?>&media=<?php echo esc_url($share_image_url) ?>" title="<?php esc_attr_e( 'Pinterest', 'dfd' ) ?>" onclick="window.open(this.href); return false;"><?php esc_html_e('Pinterest', 'dfd') ?></a>
            </li>
        <?php endif; ?>

        <?php if( $share_email_enabled ): ?>
            <li style="list-style-type: none; display: inline-block;">
                <a class="email chaffle" data-lang="en" href="mailto:?subject=I wanted you to see this site&amp;body=<?php echo esc_url($share_link_url) ?>&amp;title=<?php echo esc_attr($share_link_title) ?>" title="<?php esc_attr_e( 'Email', 'dfd' ) ?>"><?php esc_html_e('Email', 'dfd'); ?></a>
            </li>
        <?php endif; ?>
    </ul>
</div>