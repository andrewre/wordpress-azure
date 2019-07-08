<?php
if ( ! defined( 'ABSPATH' ) ) { exit; }
class Counter_Mail_Subscribe extends WP_Widget {


    public function __construct() {
        parent::__construct(
            'counter_mail_subscribe', // Base ID
            'Widget: Social Counter', // Name
            array( 'description' => esc_html__( 'Subscribe to social and rss', 'dfd' ), ) // Args
        );
    }

    function widget( $args, $instance ) {
        extract($args);
		$title = apply_filters('widget_title', $instance['title']);
		$subscribe_title = $instance['subscribe_title'];
		$subscribe_description = $instance['subscribe_description'];
		$view = (isset($instance['view'])) ? $instance['view'] : false;
		$feedburner = (isset($instance['feedburner'])) ? $instance['feedburner'] : false;
		$label = (isset($instance['label'])) ? $instance['label'] : false;
		$facebook_page = (isset($instance['facebook'])) ? $instance['facebook'] : false;
		$facebook_access_token = (isset($instance['facebook_access_token'])) ? $instance['facebook_access_token'] : false;
		$twitter_id = (isset($instance['twitter'])) ? $instance['twitter'] : 0;
		$youtube_url = (isset($instance['youtube'])) ? $instance['youtube'] : false;
		$youtube_api_key = (isset($instance['youtube_api_key'])) ? $instance['youtube_api_key'] : false;
		$new_window = (isset($instance['new_window'])) ? $instance['new_window'] : 0;
		$enable_rss = (isset($instance['enable_rss'])) ? $instance['enable_rss'] : 0;
		$rss_only = (isset($instance['rss_only'])) ? $instance['rss_only'] : 0;

		if( $new_window ) $new_window =' target="_blank" ';
        else $new_window = '';

        echo wp_kses_post($before_widget);
		
		$unique_id = uniqid('subscr_widget_');

        if ( ! empty( $title ) )
            echo wp_kses_post($before_title . $title . $after_title); ?>

	<?php if(!$rss_only) : ?>
		<div class="follow-widget <?php echo ($view == 'simple')?'simple':'extended'; ?>">

			<?php if( $twitter_id || $facebook_page || $facebook_access_token || $youtube_url ) : ?>
				<?php if( $twitter_id ):
					$twitter = Dfd_Ronneby_Front_Helpers::twitterCounter(); ?>
					<div class="follow-widget-item twitter">
						<div class="icon-wrap">
							<div>
								<i class="soc_icon-twitter-3"></i>
								<span class="number"><?php echo @number_format($twitter['followers_count']) . __(' followers', 'dfd'); ?></span>
							</div>
						</div>
						<a href="<?php echo esc_url($twitter['page_url']); ?>"<?php echo wp_kses_data($new_window) ?> class="tw"><?php esc_html_e('Follow','dfd') ?></a>
					</div>
				<?php endif; ?>

				<?php if( $youtube_url && $youtube_api_key ):
					$youtube = Dfd_Ronneby_Front_Helpers::youtubeCounter( $youtube_url, $youtube_api_key ); ?>
					<?php //var_dump($youtube); ?>
					<div class="follow-widget-item youtube">
						<div class="icon-wrap">
							<div>
								<i class="soc_icon-youtube"></i>
								<span class="number"><?php echo @number_format( $youtube ) . esc_html__(' subscr.', 'dfd'); ?></span>
							</div>
						</div>
						<a href="<?php echo esc_url($youtube_url); ?>"<?php echo wp_kses_data($new_window) ?> class="yt"><?php esc_html_e('Subscribe','dfd') ?></a>
					</div>
				<?php endif; ?>

				<?php if( $facebook_page || $facebook_access_token ):
					$facebook = Dfd_Ronneby_Front_Helpers::facebookCounter( $facebook_page, $facebook_access_token ); ?>
					<div class="follow-widget-item facebook">
						<div class="icon-wrap">
							<div>
								<i class="soc_icon-facebook"></i>
								<span class="number"><?php echo /*@number_format(*/ esc_html($facebook) . esc_html__(' fans', 'dfd'); /*)*/ ?></span>
							</div>
						</div>
						<a href="https://facebook.com/<?php echo esc_attr($facebook_page); ?>"<?php echo wp_kses_data($new_window) ?> class="fb"><?php esc_html_e('Like','dfd') ?></a>
					</div>
				<?php endif; ?>
			<?php endif; ?>

		</div>
	<?php endif; ?>
	<?php if($enable_rss): ?>
		<div class="subscribe-widget <?php if ($view == 'simple') echo 'simple'; ?>">

			<?php if ($subscribe_title != '') : ?>
			<div class="box-name"><?php echo esc_html($subscribe_title); ?></div>
			<?php endif; ?>

			<?php if ($subscribe_description != '') : ?>
				<p><?php echo wp_kses_post($subscribe_description); ?></p>
			<?php endif; ?>

			<form id="<?php echo uniqid('feedburner_subscribe_') ?>" action="http://feedburner.google.com/fb/a/mailverify" method="post" target="popupwindow" onsubmit="window.open('http://feedburner.google.com/fb/a/mailverify?uri=<?php echo esc_attr($feedburner); ?>', 'popupwindow', 'scrollbars=yes,width=550,height=520');return true">
				<input class="text" type="text" name="email" id="<?php echo uniqid('subsmail_'); ?>" placeholder="<?php echo esc_attr($label); ?>" />
				<button type="submit"><?php esc_html_e('Subscribe', 'dfd'); ?></button>
				<div class="text-left">
				</div>
				<input type="hidden" value="<?php echo esc_attr($feedburner); ?>" name="uri"/>
				<input type="hidden" name="loc" value="en_US"/>
			</form>
		</div>
	<?php endif; ?>

   <?php

        echo wp_kses_post($after_widget);
    }

    function update( $new_instance, $old_instance ) {
        $instance = $old_instance;
        $instance['title'] = strip_tags( $new_instance['title'] );
		$instance['view'] = strip_tags( $new_instance['view'] );
		$instance['subscribe_title'] = strip_tags( $new_instance['subscribe_title'] );
		$instance['subscribe_description'] = strip_tags( $new_instance['subscribe_description'] );
        $instance['feedburner'] = strip_tags( $new_instance['feedburner'] );
        $instance['label'] = strip_tags( $new_instance['label'] );
        $instance['new_window'] = !empty($new_instance['twitter']) ? 1 : 0;
        $instance['facebook'] = $new_instance['facebook'] ;
        $instance['facebook_access_token'] = $new_instance['facebook_access_token'] ;
        $instance['twitter'] = !empty($new_instance['twitter']) ? 1 : 0;
        $instance['youtube'] = $new_instance['youtube'] ;
        $instance['youtube_api_key'] = $new_instance['youtube_api_key'] ;
        $instance['enable_rss'] = !empty($new_instance['enable_rss']) ? 1 : 0;
        $instance['rss_only'] = !empty($new_instance['rss_only']) ? 1 : 0;
        return $instance;
    }

    function form($instance) {
		
		$defaults = array(
			'title' => '',
			'subscribe_title' => '',
			'subscribe_description' => '',
			'view' => false,
			'feedburner' => false,
			'label' => false,
			'facebook' => false,
			'facebook_access_token' => false,
			'twitter' => 0,
			'youtube' => false,
			'youtube_api_key' => false,
			'new_window' => 0,
			'enable_rss' => 0,
			'rss_only' => 0
		);
		
		$instance = wp_parse_args((array) $instance, $defaults);
		
        ?>

        <p>
            <label for="<?php echo esc_attr($this->get_field_id('title')); ?>"><?php esc_html_e('Title:', 'dfd'); ?></label>
            <input class="widefat" id="<?php echo esc_attr($this->get_field_id('title')); ?>" name="<?php echo esc_attr($this->get_field_name('title')); ?>" type="text" value="<?php echo esc_attr($instance['title']); ?>"/>
        </p>
		<p>
            <label for="<?php echo esc_attr($this->get_field_id('view')); ?>"><?php esc_html_e('View:', 'dfd'); ?></label>
			<select class="widefat" id="<?php echo esc_attr($this->get_field_id('view')); ?>" name="<?php echo esc_attr($this->get_field_name('view')); ?>">
				<option value="extended" <?php if ($instance['view'] == 'extended' || $instance['view'] == '') echo 'selected="selected"' ?>><?php esc_html_e('Extended', 'dfd'); ?></option>
				<option value="simple" <?php if ($instance['view'] == 'simple') echo 'selected="selected"' ?>><?php esc_html_e('Simple', 'dfd'); ?></option>
			</select>            
        </p>
		<p>
            <label for="<?php echo esc_attr($this->get_field_id('subscribe_title')); ?>"><?php esc_html_e('Subscribe widget title:', 'dfd'); ?></label>
            <input class="widefat" id="<?php echo esc_attr($this->get_field_id('subscribe_title')); ?>" name="<?php echo esc_attr($this->get_field_name('subscribe_title')); ?>" type="text" value="<?php echo esc_attr($instance['subscribe_title']); ?>"/>
        </p>
		<p>
            <label for="<?php echo esc_attr($this->get_field_id('subscribe_description')); ?>"><?php esc_html_e('Subscribe widget description:', 'dfd'); ?></label>
			<textarea class="widefat" id="<?php echo esc_attr($this->get_field_id('subscribe_description')); ?>" name="<?php echo esc_attr($this->get_field_name('subscribe_description')); ?>"><?php echo wp_kses_post($instance['subscribe_description']); ?></textarea>
        </p>
        <p>
            <label for="<?php echo esc_attr($this->get_field_id('feedburner')); ?>"><?php esc_html_e('Feedburner Feed Name:', 'dfd'); ?></label>
            <input class="widefat" id="<?php echo esc_attr($this->get_field_id('feedburner')); ?>" name="<?php echo esc_attr($this->get_field_name('feedburner')); ?>" type="text" value="<?php echo esc_attr($instance['feedburner']); ?>"/>
        </p>
        <p>
            <label for="<?php echo esc_attr($this->get_field_id('label')); ?>"><?php esc_html_e('Textbox Label:', 'dfd'); ?></label>
            <input class="widefat" id="<?php echo esc_attr($this->get_field_id('label')); ?>" name="<?php echo esc_attr($this->get_field_name('label')); ?>" type="text" value="<?php echo esc_attr($instance['label']); ?>"/>
        </p>

        <p>
            <label for="<?php echo esc_attr($this->get_field_id('new_window')); ?>"><?php esc_html_e('Open links in a new window', 'dfd'); ?></label>
            <input id="<?php echo esc_attr($this->get_field_id('new_window')); ?>" name="<?php echo esc_attr($this->get_field_name('new_window')); ?>" value="true" <?php if ($instance['new_window']) echo 'checked="checked"'; ?> type="checkbox"/>
        </p>
        <p>
            <label for="<?php echo esc_attr($this->get_field_id('facebook')); ?>"><?php esc_html_e('Facebook Page ID', 'dfd'); ?></label>
            <input id="<?php echo esc_attr($this->get_field_id('facebook')); ?>" name="<?php echo esc_attr($this->get_field_name('facebook')); ?>" value="<?php echo esc_attr($instance['facebook']); ?>" class="widefat" type="text"/>
            <small>Please follow this <a href="https://findmyfbid.com/" target="_blank">link</a> to find our your facebook page ID.</small>
        </p>
        <p>
            <label for="<?php echo esc_attr($this->get_field_id('facebook_access_token')); ?>"><?php _e('Facebook Access token', 'dfd'); ?></label>
            <input id="<?php echo esc_attr($this->get_field_id('facebook_access_token')); ?>" name="<?php echo esc_attr($this->get_field_name('facebook_access_token')); ?>" value="<?php echo esc_attr($instance['facebook_access_token']); ?>" class="widefat" type="text"/>
            <small>Please follow this <a href="https://developers.facebook.com/tools/explorer/" target="_blank">link</a> to find our your facebook access token.</small>
        </p>
        <p>
            <label for="<?php echo esc_attr($this->get_field_id('twitter')); ?>"><?php _e('Enable Twitter', 'dfd'); ?></label>
            <input id="<?php echo esc_attr($this->get_field_id('twitter')); ?>" name="<?php echo esc_attr($this->get_field_name('twitter')); ?>" value="true" <?php if ($instance['twitter']) echo 'checked="checked"'; ?> type="checkbox"/>
            <small><em style="color:red;">Make sure you Setup Twitter API OAuth settings under Theme options > Twitter
                    panel </em></small>
        </p>
        <p>
            <label for="<?php echo esc_attr($this->get_field_id('youtube')); ?>"><?php esc_html_e('Youtube Channel URL', 'dfd'); ?></label>
            <input id="<?php echo esc_attr($this->get_field_id('youtube')); ?>" name="<?php echo esc_attr($this->get_field_name('youtube')); ?>" value="<?php echo esc_url($instance['youtube']); ?>" class="widefat" type="text"/>
            <small>Link must be like http://www.youtube.com/user/username</small>
        </p>
        <p>
            <label for="<?php echo esc_attr($this->get_field_id('youtube_api-key')); ?>"><?php esc_html_e('Youtube API key', 'dfd'); ?></label>
            <input id="<?php echo esc_attr($this->get_field_id('youtube_api_key')); ?>" name="<?php echo esc_attr($this->get_field_name('youtube_api_key')); ?>" value="<?php echo esc_attr($instance['youtube_api_key']); ?>" class="widefat" type="text"/>
            <small>Please check <a href="https://www.youtube.com/watch?v=zOYW7FO9rzA">this link</a> for video tutorial on Youtube API generation</small>
        </p>
        <p>
            <label for="<?php echo esc_attr($this->get_field_id('enable_rss')); ?>"><?php esc_html_e('Enable RSS', 'dfd'); ?></label>
            <input id="<?php echo esc_attr($this->get_field_id('enable_rss')); ?>" name="<?php echo esc_attr($this->get_field_name('enable_rss')); ?>" value="true" <?php if ($instance['enable_rss']) echo 'checked="checked"'; ?> type="checkbox"/>
        </p>
        <p>
            <label for="<?php echo esc_attr($this->get_field_id('rss_only')); ?>"><?php esc_html_e('RSS only', 'dfd'); ?></label>
            <input id="<?php echo esc_attr($this->get_field_id('rss_only')); ?>" name="<?php echo esc_attr($this->get_field_name('rss_only')); ?>" value="true" <?php if ($instance['rss_only']) echo 'checked="checked"'; ?> type="checkbox"/>
        </p>

    <?php
    }
}