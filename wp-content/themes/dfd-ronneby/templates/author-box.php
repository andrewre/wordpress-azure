<?php
if ( ! defined( 'ABSPATH' ) ) { exit; }
/**
 * Author Box
 *
 * Displays author box with author description and thumbnail on single posts
 *
 * @package WordPress
 * @subpackage Dynamic theme, for WordPress
 */
?>

<?php
$author_info = get_the_author_meta('dfd_author_info');
?>

<?php
$author_name = '';
global $authordata;
if ( is_object( $authordata ) ) {
	$author_name =  ($authordata->display_name) ? $authordata->display_name : $authordata->user_nicename;
}
?>

<div class="about-author">
	<figure class="author-photo">
		<?php echo get_avatar( get_the_author_meta('ID') , 80 ); ?>
	</figure>
	<div class="author-content">
		<div class="author-top-inner">
			<div class="box-name"><?php echo esc_html($author_name) ?></div>
				<?php
				$options = Dfd_Theme_Helpers::authorContactMethods();

				$social_icons = array(
					"cr_facebook" => "soc_icon-facebook",
					"twitter" => "soc_icon-twitter-3",
					"instagram" => "soc_icon-instagram",
					"vimeo" => "soc_icon-vimeo",
					"lastfm" => "soc_icon-last_fm",
					"vkontakte" => "soc_icon-rus-vk-01",
					"youtube" => "soc_icon-youtube",
					"deviantart" => "soc_icon-deviantart",
					"linkedin" => "soc_icon-linkedin",
					"picasa" => "soc_icon-picasa",
					"pinterest" => "soc_icon-pinterest",
					"wordpress" => "soc_icon-wordpress",
					"dropbox" => "soc_icon-dropbox",
					"rss" => "soc_icon-rss",
				);

				echo '<div class="widget soc-icons dfd-soc-icons-hover-style-26">';

				foreach($social_icons as $option=>$class) {
					$title = $options[$option];
					$link = get_the_author_meta($option);

					if (empty($link)) {
						continue;
					}

					echo '<a href="'.esc_url($link) .'" class="'.esc_attr($class).'" title="'.esc_attr($title).'"><span class="line-top-left '.esc_attr($class).'"></span><span class="line-top-center '.esc_attr($class).'"></span><span class="line-top-right '.esc_attr($class).'"></span><span class="line-bottom-left '.esc_attr($class).'"></span><span class="line-bottom-center '.esc_attr($class).'"></span><span class="line-bottom-right '.esc_attr($class).'"></span><i class="'.esc_attr($class).'"></i></a>';
				}

				echo '</div>';
				?>
		</div>
		<div class="author-description">
			<p><?php the_author_meta('description'); ?></p>

		</div>
	</div>
</div>