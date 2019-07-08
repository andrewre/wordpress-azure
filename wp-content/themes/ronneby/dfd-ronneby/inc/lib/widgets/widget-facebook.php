<?php
if ( ! defined( 'ABSPATH' ) ) { exit; }
class crum_widget_facebook extends WP_Widget {

	public function __construct() {

		parent::__construct(
				'facebook_widget', // Base ID
				'Widget: Facebook widget', // Name
				array('description' => esc_html__('Facebook Social Network widget', 'dfd'),) // Args
		);
		add_action('admin_enqueue_scripts', array($this, 'dfd_reqister_scripts'));
	}

	public function dfd_reqister_scripts() {
		wp_register_script('dfd-facebook-admin-js', get_template_directory_uri().'/assets/js/widget-facebook-backkend.js', array('jquery'));
	}

	public function form($instance) {

		if (isset($instance['title'])) {
			$title = $instance['title'];
		} else {
			$title = esc_html__('Facebook widget', 'dfd');
		}

		if (isset($instance['width'])) {
			$width = $instance['width'];
		} else {
			$width = 300;
		}
		
		if (isset($instance['height'])) {
			$height = $instance['height'];
		} else {
			$height = 450;
		}

		if (isset($instance['faces'])) {
			$faces = $instance['faces'];
		} else {
			$faces = 'true';
		}

		if (isset($instance['url'])) {
			$url = $instance['url'];
		} else {
			$url = 'platform';
		}

		if (isset($instance['header'])) {
			$header = $instance['header'];
		} else {
			$header = 'false';
		}
		
		if (isset($instance['adapt_width'])) {
			$adapt_width = $instance['adapt_width'];
		} else {
			$adapt_width = 'no';
		}
		if (isset($instance['hide_cover_photo'])) {
			$hide_cover_photo = $instance['hide_cover_photo'];
		} else {
			$hide_cover_photo = 'no';
		}
		
		if (isset($instance['tabs'])) {
			$tabs = $instance['tabs'];
		} else {
			$tabs = esc_html__('timeline', 'dfd');
		}
		
		if (isset($instance['locale_lang'])) {
			$locale_lang = $instance['locale_lang'];
		} else {
			$locale_lang = esc_html__('en_US', 'dfd');
		}
		
		if (isset($instance['mask'])) {
			$mask = $instance['mask'];
		} else {
			$mask = 'true';
		}
		
		if (isset($instance['titleMask'])) {
			$titleMask = $instance['titleMask'];
		} else {
			$titleMask = '';
		}
		
		if (isset($instance['subtitleMask'])) {
			$subtitleMask = $instance['subtitleMask'];
		} else {
			$subtitleMask = '';
		}
		
		if (isset($instance['imageUpload'])) {
			$imageUpload = $instance['imageUpload'];
		} else {
			$imageUpload = '';
		}
		?>

		<p>
			<label for="<?php echo esc_attr($this->get_field_id('title')); ?>"><?php esc_html_e('Title:', 'dfd'); ?></label>
			<input class="widefat" id="<?php echo esc_attr($this->get_field_id('title')); ?>" name="<?php echo esc_attr($this->get_field_name('title')); ?>" type="text" value="<?php echo esc_attr($title); ?>" />
		</p>
		<p>
			<label for="<?php echo esc_attr($this->get_field_id('url')); ?>"><?php esc_html_e('Facebook Name: ( facebook.com/ * Type into field * )', 'dfd'); ?></label>
			<input class="widefat" id="<?php echo esc_attr($this->get_field_id('url')); ?>" name="<?php echo esc_attr($this->get_field_name('url')); ?>" type="text" value="<?php echo esc_attr($url); ?>" />
		</p>
		<p>
			<label for="<?php echo esc_attr($this->get_field_id('width')); ?>"><?php esc_html_e('Width(px):', 'dfd'); ?></label>
			<input class="widefat" id="<?php echo esc_attr($this->get_field_id('width')); ?>" name="<?php echo esc_attr($this->get_field_name('width')); ?>" type="text" value="<?php echo esc_attr($width); ?>" />
		</p>
		<p>
			<label for="<?php echo esc_attr($this->get_field_id('height')); ?>"><?php esc_html_e('Height(px):', 'dfd'); ?></label>
			<input class="widefat" id="<?php echo esc_attr($this->get_field_id('height')); ?>" name="<?php echo esc_attr($this->get_field_name('height')); ?>" type="text" value="<?php echo esc_attr($height); ?>" />
		</p>
		<p>
			<label for="<?php echo esc_attr($this->get_field_id('faces')); ?>"><?php esc_html_e('Show faces:', 'dfd'); ?></label>
			<select id="<?php echo esc_attr($this->get_field_id('faces')); ?>" name="<?php echo esc_attr($this->get_field_name('faces')); ?>"  value="<?php echo esc_attr($faces); ?>" >
				<option value ='true' <?php if (esc_attr($faces) == 'true') echo 'selected'; ?>>Yes</option>
				<option value = 'false' <?php if (esc_attr($faces) == 'false') echo 'selected'; ?>>No</option>
			</select>
		</p>
		<p>
			<label for="<?php echo esc_attr($this->get_field_id('header')); ?>"><?php esc_html_e('Use Small Header:', 'dfd'); ?></label>
			<select id="<?php echo esc_attr($this->get_field_id('header')); ?>" name="<?php echo esc_attr($this->get_field_name('header')); ?>"  value="<?php echo esc_attr($header); ?>" >
				<option value ='true' <?php if (esc_attr($header) == 'true') echo 'selected'; ?>>Yes</option>
				<option value = 'false' <?php if (esc_attr($header) == 'false') echo 'selected'; ?>>No</option>
			</select>
		</p>
		<p>
			<label for="<?php echo esc_attr($this->get_field_id('adapt_width')); ?>"><?php esc_html_e('Adapt width:', 'dfd'); ?></label>
			<select id="<?php echo esc_attr($this->get_field_id('adapt_width')); ?>" name="<?php echo esc_attr($this->get_field_name('adapt_width')); ?>"  value="<?php echo esc_attr($adapt_width); ?>" >
				<option value ='yes' <?php if (esc_attr($adapt_width) == 'yes') echo 'selected'; ?>>Yes</option>
				<option value = 'no' <?php if (esc_attr($adapt_width) == 'no') echo 'selected'; ?>>No</option>
			</select>
		</p>
		<p>
			<label for="<?php echo esc_attr($this->get_field_id('hide_cover_photo')); ?>"><?php esc_html_e('Hide cover photo:', 'dfd'); ?></label>
			<select id="<?php echo esc_attr($this->get_field_id('hide_cover_photo')); ?>" name="<?php echo esc_attr($this->get_field_name('hide_cover_photo')); ?>"  value="<?php echo esc_attr($hide_cover_photo); ?>" >
				<option value ='yes' <?php if (esc_attr($hide_cover_photo) == 'yes') echo 'selected'; ?>>Yes</option>
				<option value = 'no' <?php if (esc_attr($hide_cover_photo) == 'no') echo 'selected'; ?>>No</option>
			</select>
		</p>
		
		<p>
			<label for="<?php echo esc_attr($this->get_field_id('tabs')); ?>"><?php esc_html_e('Tabs', 'dfd'); ?>:</label>
			<select id="<?php echo esc_attr($this->get_field_id('tabs')); ?>" name="<?php echo esc_attr($this->get_field_name('tabs')); ?>" >
				<option value="" <?php if(esc_attr($tabs) == '') echo 'selected'; ?>><?php esc_html_e('Hide Posts', 'dfd'); ?></option>
				<option value="timeline" <?php if(esc_attr($tabs) == 'timeline') echo 'selected'; ?>><?php esc_html_e('Timeline', 'dfd'); ?></option>
				<option value="events" <?php if(esc_attr($tabs) == 'events') echo 'selected'; ?>><?php esc_html_e('Events', 'dfd'); ?></option>
				<option value="messages" <?php if(esc_attr($tabs) == 'messages') echo 'selected'; ?>><?php esc_html_e('Messages', 'dfd'); ?></option>           
			</select>
		</p>
		
		<p>
			<label for="<?php echo esc_attr($this->get_field_id('locale_lang')); ?>"><?php esc_html_e('Language', 'dfd'); ?>:</label>
			<input id="<?php echo esc_attr($this->get_field_id('locale_lang')); ?>" name="<?php echo esc_attr($this->get_field_name('locale_lang')); ?>" type="text" value="<?php echo esc_attr($locale_lang); ?>">
			<small>(en_US, de_DE...)</small>
		</p>
		<p>
			<label for="<?php echo esc_attr($this->get_field_id('mask')); ?>"><?php esc_html_e('Show mask:', 'dfd'); ?></label>
			<select id="<?php echo esc_attr($this->get_field_id('mask')); ?>" name="<?php echo esc_attr($this->get_field_name('mask')); ?>"  value="<?php echo esc_attr($mask); ?>" >
				<option value ='true' <?php if (esc_attr($mask) == 'true') echo 'selected'; ?>>Yes</option>
				<option value = 'false' <?php if (esc_attr($mask) == 'false') echo 'selected'; ?>>No</option>
			</select>
		</p>
		<p>
			<label for="<?php echo esc_attr($this->get_field_id('titleMask')); ?>"><?php esc_html_e('Title on the mask:', 'dfd'); ?></label>
			<input class="widefat" id="<?php echo esc_attr($this->get_field_id('titleMask')); ?>" name="<?php echo esc_attr($this->get_field_name('titleMask')); ?>" type="titleMask" value="<?php echo esc_attr($titleMask); ?>" />
		</p>
		<p>
			<label for="<?php echo esc_attr($this->get_field_id('subtitleMask')); ?>"><?php esc_html_e('Subtitle on the mask:', 'dfd'); ?></label>
			<input class="widefat" id="<?php echo esc_attr($this->get_field_id('subtitleMask')); ?>" name="<?php echo esc_attr($this->get_field_name('subtitleMask')); ?>" type="subtitleMask" value="<?php echo esc_attr($subtitleMask); ?>" />
		</p>
		<p>
			<label for="<?php echo esc_attr($this->get_field_id('imageUpload')); ?>"><?php esc_html_e('Mask image:', 'dfd'); ?></label>
			<img src="<?php echo (substr_count(esc_attr( $imageUpload ), 'http://') > 0) ? esc_url( $imageUpload ) : ''; ?>" alt="<?php esc_attr_e('Image', 'dfd') ?>" class="image_uploaded" style="<?php echo (substr_count(esc_attr( $imageUpload ), 'http://') > 0) ? '' : 'display: none;'; ?> padding: 20px 0; max-width: 100%;" />
			<input id="<?php echo esc_attr($this->get_field_id('imageUpload')); ?>" class="upload_image" type="hidden" name="<?php echo esc_attr($this->get_field_name('imageUpload')); ?>" value="<?php echo esc_url($imageUpload); ?>" /> 
			<input class="upload_image_button button" type="button" value="<?php esc_html_e('Upload Image','dfd'); ?>" />
			<?php if(substr_count(esc_attr( $imageUpload ), 'http://') > 0) : ?>
				<input class="remove_image_button button" type="button" value="<?php esc_html_e('Remove Image','dfd'); ?>" />
			<?php endif; ?>
		</p>

		<?php
	}

	public function update($new_instance, $old_instance) {

		$instance = array();
		$instance['title'] = strip_tags($new_instance['title']);
		$instance['width'] = strip_tags($new_instance['width']);
		$instance['height'] = strip_tags($new_instance['height']);
		$instance['faces'] = strip_tags($new_instance['faces']);
		$instance['url'] = strip_tags($new_instance['url']);
		$instance['header'] = strip_tags($new_instance['header']);
		$instance['adapt_width'] = strip_tags($new_instance['adapt_width']);
		$instance['hide_cover_photo'] = strip_tags($new_instance['hide_cover_photo']);
		$instance['tabs'] = strip_tags($new_instance['tabs']);
		$instance['locale_lang'] = strip_tags($new_instance['locale_lang']);
		$instance['mask'] = strip_tags($new_instance['mask']);
		$instance['titleMask'] = strip_tags($new_instance['titleMask']);
		$instance['subtitleMask'] = strip_tags($new_instance['subtitleMask']);
		$instance['imageUpload'] = esc_url($new_instance['imageUpload']);
		return $instance;
	}

	public function widget($args, $instance) {
		wp_enqueue_script('dfd_facebook_widget_script');
		extract($args);

		$title = apply_filters('widget_title', $instance['title']);
		$width = isset($instance['width']) && !empty($instance['width']) ? $instance['width'] : '';
		$height = isset($instance['height']) && !empty($instance['height']) ? $instance['height'] : '';
		$faces = isset($instance['faces']) && !empty($instance['faces']) ? $instance['faces'] : '';
		$url = isset($instance['url']) && !empty($instance['url']) ? $instance['url'] : '';
		$header = isset($instance['header']) && !empty($instance['header']) ? $instance['header'] : '';
		$adapt_width = isset($instance['adapt_width']) && !empty($instance['adapt_width']) ? $instance['adapt_width'] : '';
		$hide_cover_photo = isset($instance['hide_cover_photo']) && !empty($instance['hide_cover_photo']) ? $instance['hide_cover_photo'] : '';
		$tabs = isset($instance['tabs']) && !empty($instance['tabs']) ? $instance['tabs'] : '';
		$locale_lang = isset($instance['locale_lang']) && !empty($instance['locale_lang']) ? $instance['locale_lang'] : '';
		$mask = isset($instance['mask']) && !empty($instance['mask']) ? $instance['mask'] : '';
		$titleMask = isset($instance['titleMask']) && !empty($instance['titleMask']) ? $instance['titleMask'] : '';
		$subtitleMask = isset($instance['subtitleMask']) && !empty($instance['subtitleMask']) ? $instance['subtitleMask'] : '';
		$imageUpload = isset($instance['imageUpload']) && !empty($instance['imageUpload']) ? $instance['imageUpload'] : '';
		echo wp_kses_post($before_widget);
		if ($title) {
			echo wp_kses_post($before_title . $title . $after_title);
		}
		
		$small_header = $header == 'true' ? 'yes' : 'no';
		$show_faces = $faces == 'true' ? 'yes' : 'no';
		?>
		
		<div class="facebookOuter">
			<?php if (esc_attr($mask) == 'true') : ?>
				<div class="widget-mask text-center background--dark" <?php if(!empty($imageUpload)) : ?> style="background-image: url(<?php echo esc_url($imageUpload) ?>);" <?php endif; ?>>
					<h3 class="title-mask widget-title"><?php echo esc_html($titleMask); ?></h3>
					<div class="subtitle-mask subtitle"><?php echo esc_html($subtitleMask); ?></div>
				</div>
			<?php endif; ?>
			<div class="facebookInner">
				<div class="fb-page ws-fb-like-box fb_loader" data-href="https://www.facebook.com/<?php echo esc_attr($url); ?>"
					data-tabs="<?php echo esc_attr($tabs); ?>"
					data-width="<?php echo esc_attr($width); ?>"
					data-height="<?php echo esc_attr($height); ?>"
					data-small-header="<?php echo esc_attr($small_header); ?>"
					data-adapt-container-width="<?php echo esc_attr($adapt_width); ?>"
					data-hide-cover="<?php echo esc_attr($hide_cover_photo); ?>"
					data-show-facepile="<?php echo esc_attr($show_faces); ?>">
				</div>
			</div>
		</div>
		
		<div id="fb-root"></div>
		<script>(function(d, s, id) {
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) return;
				js = d.createElement(s); js.id = id;
				js.src = "//connect.facebook.net/'. $locale_lang .'/sdk.js#xfbml=1&version=v2.6";
				fjs.parentNode.insertBefore(js, fjs);
			}(document, 'script', 'facebook-jssdk'));
		</script>
		
		<?php
		echo wp_kses_post($after_widget);
	}
}
