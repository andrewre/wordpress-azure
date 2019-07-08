<?php
/**
 * Share
 *
 * @author 		WooThemes
 * @package 	WooCommerce/Templates
 * @version     3.5.0
 */

$social_networks = array(
	"fb" => "Facebook",
	"tw" => "Twitter",
	"li" => "LinkedIN",
);
$social_icons = array(
	"tw" => "soc_icon-twitter-3",
	"fb" => "soc_icon-facebook",
	"li" => "soc_icon-linkedin",
);

$social_class = array(
	"tw" => "twitter",
	"fb" => "facebook",
	"li" => "linkedin",
);

$social_share_link = array(
	"tw" => "https://twitter.com/intent/tweet?text",
	"fb" => "https://www.facebook.com/sharer/sharer.php?u",
	"li" => "http://www.linkedin.com/shareArticle?mini=true&amp;url",
);

$data_link = get_the_permalink();
$data_title = get_the_title();
?>
<div class="share-wrap">
	<div class="box-name"><?php esc_html_e('Share','dfd'); ?></div>
	<div class="entry-share-no-popup" data-directory="<?php echo get_template_directory_uri(); ?>">
		<?php
		foreach ($social_networks as $short => $original):
			$icon = (isset($social_icons[$short])) ? $social_icons[$short] : '';
		?>
			<a href="<?php echo esc_attr($social_share_link[$short]); ?>=<?php echo esc_attr($data_link); ?>" class="<?php echo esc_attr($icon); ?> entry-share-link-<?php echo esc_attr($social_class[$short]); ?>" data-url="<?php echo esc_url($data_link); ?>" title="<?php echo esc_attr($data_title); ?>"></a>
		<?php
		endforeach;
		?>
	</div>
</div>
