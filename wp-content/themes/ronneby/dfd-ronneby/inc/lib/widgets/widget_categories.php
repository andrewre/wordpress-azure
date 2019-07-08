<?php
/**
 * Duplicated and tweaked WP core Categories widget class
 */
if ( ! defined( 'ABSPATH' ) ) { exit; }
class Crum_Cat_And_Archives extends WP_Widget {

    function __construct() {
        $widget_ops = array('description' => esc_html__('In one widget', 'dfd'));
        parent::__construct('crum_cat_arch', esc_html__('Widget: Categories + Archives', 'dfd'), $widget_ops);
    }

    function widget( $args, $instance ) {
        extract( $args );
        $title_cat = apply_filters('widget_title', empty( $instance['title_cat'] ) ? esc_html__( 'Categories', 'dfd' ) : $instance['title_cat'], $instance, $this->id_base);

        $title_arch = apply_filters('widget_title', empty($instance['title_arch']) ? esc_html__('Archives', 'dfd') : $instance['title_arch'], $instance, $this->id_base);

        $c = ! empty( $instance['count'] ) ? '1' : '0';
        $h = ! empty( $instance['hierarchical'] ) ? '1' : '0';
        $d = ! empty( $instance['dropdown'] ) ? '1' : '0';
		$cols = ! empty( $instance['columns'] ) ? 'twelve' : 'six';

        echo wp_kses_post($before_widget);

		?>
		<div class="row">
			<?php $before_container_cat_html = $before_container_arc_html = $after_container_html = $container_scroll_class = '';
			if ( $d ) {
				$before_container_cat_html = '<div class="dk_container" style="display: block;"><a class="dk_toggle"><span class="dk_label">'. __('Category', 'dfd') .'</span></a><div class="dk_options">';
				$before_container_arc_html = '<div class="dk_container" style="display: block;"><a class="dk_toggle"><span class="dk_label">'. __('Month', 'dfd') .'</span></a><div class="dk_options">';
				$after_container_html = '</div></div>';
				$container_scroll_class = 'dk_options_inner';
				echo $script = '<script type="text/javascript">
									(function($) {
										$(document).ready(function() {
											$(".widget_crum_cat_arch").each(function() {
												var $self = $(this),
													clickEl = $self.find(".dk_toggle");

												clickEl.on("click touchend", function() {
													$self.find(".dk_container").removeClass("dk_open");
													$(this).parent(".dk_container").toggleClass("dk_open");
												});
												$(document).mouseup(function (e) {
													if (!clickEl.is(e.target) && clickEl.has(e.target).length === 0) {
														$self.find(".dk_container").removeClass("dk_open");
													}
												});
											});
										});
									})(jQuery);
								</script>';
			} ?>
			<div class="<?php echo esc_attr($cols); ?> columns mobile-four widget">

				<?php if ( $title_cat ) {
					echo wp_kses_post($before_title . $title_cat . $after_title);
				}

				$cat_args = array('orderby' => 'name', 'show_count' => $c, 'hierarchical' => $h); ?>

				<?php echo wp_kses_post($before_container_cat_html) ;?>
					<ul class="post-categories <?php echo esc_attr($container_scroll_class) ;?>">
						<?php
						$categories = get_categories();
						foreach($categories as $category) :
							$t_id = $category->term_id;
							$icon = get_option("taxonomy_$t_id");
						?>
							<li>
								<div class="icon-wrap"><i class="<?php echo !empty($icon['custom_term_meta']) ? esc_attr($icon['custom_term_meta']) : 'dfd-uncategoriesed'; ?>"></i></div>
								<a href="<?php echo esc_url(get_category_link($category->term_id)); ?>"><?php echo esc_html($category->name); ?></a>
							</li>

						<?php endforeach; ?>
					</ul>
				<?php echo wp_kses_post($after_container_html);?>
			</div>
			<div class="<?php echo esc_attr($cols); ?> columns mobile-four widget">
				<?php if ( $title_arch ) {
					echo wp_kses_post($before_title . $title_arch . $after_title);
				}
				
				echo wp_kses_post($before_container_arc_html);?>
					<ul class="widget-archive <?php echo esc_attr($container_scroll_class);?>">
						<?php wp_get_archives(apply_filters('widget_archives_args', array('type' => 'monthly', 'show_post_count' => $c))); ?>
					</ul>
				<?php echo wp_kses_post($after_container_html) ;?>
			</div>
		</div>

    <?php
        echo wp_kses_post($after_widget);
    }

    function update( $new_instance, $old_instance ) {
        $instance = $old_instance;
        $instance['title_cat'] = strip_tags($new_instance['title_cat']);
        $instance['title_arch'] = strip_tags($new_instance['title_arch']);
        $instance['count'] = !empty($new_instance['count']) ? 1 : 0;
        $instance['hierarchical'] = !empty($new_instance['hierarchical']) ? 1 : 0;
        $instance['dropdown'] = !empty($new_instance['dropdown']) ? 1 : 0;
        $instance['columns'] = !empty($new_instance['columns']) ? 1 : 0;

        return $instance;
    }

    function form( $instance ) {
        $defaults = array(
			'title_cat' => '',
			'title_arch' => '',
			'dropdown' => 0,
			'count' => 0,
			'hierarchical' => 0,
			'columns' => 0
		);
		$instance = wp_parse_args((array)$instance, $defaults);

        ?>
        <p><label for="<?php echo esc_attr($this->get_field_id('title_cat')); ?>"><?php esc_html_e( 'Categories', 'dfd' ); esc_html_e( 'Title:', 'dfd' ); ?></label>
            <input class="widefat" id="<?php echo esc_attr($this->get_field_id('title_cat')); ?>" name="<?php echo esc_attr($this->get_field_name('title_cat')); ?>" type="text" value="<?php echo esc_attr( $instance['title_cat'] ); ?>" /></p>

        <p><label for="<?php echo esc_attr($this->get_field_id('title_arch')); ?>"><?php esc_html_e( 'Archives', 'dfd' ); esc_html_e( 'Title:', 'dfd' ); ?></label>
            <input class="widefat" id="<?php echo esc_attr($this->get_field_id('title_arch')); ?>" name="<?php echo esc_attr($this->get_field_name('title_arch')); ?>" type="text" value="<?php echo esc_attr( $instance['title_arch'] ); ?>" /></p>


        <p><input type="checkbox" class="checkbox" id="<?php echo esc_attr($this->get_field_id('dropdown')); ?>" name="<?php echo esc_attr($this->get_field_name('dropdown')); ?>" <?php if ($instance['dropdown']) echo 'checked="checked"'; ?> />
            <label for="<?php echo esc_attr($this->get_field_id('dropdown')); ?>"><?php esc_html_e( 'Display as dropdown', 'dfd' ); ?></label><br />

            <input type="checkbox" class="checkbox" id="<?php echo esc_attr($this->get_field_id('count')); ?>" name="<?php echo esc_attr($this->get_field_name('count')); ?>" <?php if ($instance['count']) echo 'checked="checked"'; ?> />
            <label for="<?php echo esc_attr($this->get_field_id('count')); ?>"><?php esc_html_e( 'Show post counts', 'dfd' ); ?></label><br />

            <input type="checkbox" class="checkbox" id="<?php echo esc_attr($this->get_field_id('hierarchical')); ?>" name="<?php echo esc_attr($this->get_field_name('hierarchical')); ?>" <?php if ($instance['hierarchical']) echo 'checked="checked"'; ?> />
            <label for="<?php echo esc_attr($this->get_field_id('hierarchical')); ?>"><?php esc_html_e( 'Show hierarchy', 'dfd' ); ?></label><br />
		
            <input type="checkbox" class="checkbox" id="<?php echo esc_attr($this->get_field_id('columns')); ?>" name="<?php echo esc_attr($this->get_field_name('columns')); ?>" <?php if ($instance['columns']) echo 'checked="checked"'; ?>  />
            <label for="<?php echo esc_attr($this->get_field_id('columns')); ?>"><?php esc_html_e( 'Full width', 'dfd' ); ?></label></p>
    <?php
    }
}