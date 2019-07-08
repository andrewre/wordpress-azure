<?php
if ( ! defined( 'ABSPATH' ) ) { exit; }

/*
 * Include widgets
 */
require( get_template_directory() . '/inc/lib/widgets/widget-menu.php' );
require( get_template_directory() . '/inc/lib/widgets/widget-tweets.php' );
require( get_template_directory() . '/inc/lib/widgets/widget-tabs.php' );
require( get_template_directory() . '/inc/lib/widgets/widget-tags.php' );
require( get_template_directory() . '/inc/lib/widgets/widget-gallery.php' );
require( get_template_directory() . '/inc/lib/widgets/widget-category-news.php' );
require( get_template_directory() . '/inc/lib/widgets/widget_categories.php' );
require( get_template_directory() . '/inc/lib/widgets/widget-facebook.php' );
require( get_template_directory() . '/inc/lib/widgets/widget-video.php' );
require( get_template_directory() . '/inc/lib/widgets/widget-audio.php' );
require( get_template_directory() . '/inc/lib/widgets/widget-flickr.php' );
//require( get_template_directory() . '/inc/lib/widgets/widget-vcard.php' );
require( get_template_directory() . '/inc/lib/widgets/widget-vcard-simple.php' );
require( get_template_directory() . '/inc/lib/widgets/widget-logo.php' );
//require( get_template_directory() . '/inc/lib/widgets/widget-styled-list.php' );
require( get_template_directory() . '/inc/lib/widgets/widget-count.php' );
require( get_template_directory() . '/inc/lib/widgets/widget-recent.php' );
require( get_template_directory() . '/inc/lib/widgets/widget-contacts.php' );
require( get_template_directory() . '/inc/lib/widgets/widget-login.php' );
require( get_template_directory() . '/inc/lib/widgets/widget-cat-tabs.php' );
require( get_template_directory() . '/inc/lib/widgets/widget-news-categories-list.php' );
require( get_template_directory() . '/inc/lib/widgets/widget-wc-best-sellers.php' );
require( get_template_directory() . '/inc/lib/widgets/widget-author-words.php' );
require( get_template_directory() . '/inc/lib/widgets/widget-recent-comments.php' );
require( get_template_directory() . '/inc/lib/widgets/widget-search.php' );
require( get_template_directory() . '/inc/lib/widgets/widget-recent-posts.php' );
require( get_template_directory() . '/inc/lib/widgets/widget_only_categories.php' );

/*
 * Register widgets
 */
register_widget( 'crum_latest_tweets' );
register_widget( 'crum_gallery_widget' );
register_widget( 'crum_widget_facebook' );
register_widget( 'crum_video_widget' );
register_widget( 'crum_widgets_audio' );
register_widget( 'crum_widget_flickr' );
//register_widget( 'roots_vcard_widget' );
register_widget( 'dfd_recent_posts' );
register_widget( 'dfd_vcard_simple' );
register_widget( 'dfd_logo' );
register_widget( 'crum_tags_widget' );
register_widget( 'crum_contacts_widget' );
register_widget( 'crum_login_widget' );
register_widget( 'crum_cat_tabs_widget' );
register_widget( 'crum_news_categories_list' );
register_widget( 'crum_login_widget_best_sellers' );
register_widget( 'dfd_author_words' );
register_widget( 'dfd_recent_comments' );
register_widget( 'crum_search_widget' );
register_widget( 'dfd_recent_posts_widget' );
register_widget( 'dfd_category_widged' );
register_widget( 'Counter_Mail_Subscribe' );
register_widget( 'DFDMenuWidget' );
register_widget( 'Crum_Widget_Tabs' );
register_widget( 'Crum_Cat_And_Archives' );