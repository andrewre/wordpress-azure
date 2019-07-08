<?php
if ( ! defined( 'ABSPATH' ) ) { exit; }
class crum_text_subtitle extends WP_Widget {

    function __construct() {
        parent::__construct(
            'crum-text-widget',
            esc_html__( 'Widget: Text block', 'dfd' ), // Name
            array( 'description' =>  esc_html__( 'Text block', 'dfd'), 'width' => 300, 'height' => 350,
            )
        );
    }

    /**
     * @param array $args
     * @param array $instance
     */
    function widget( $args, $instance ) {
        extract( $args );
        $title = $instance['title'];
        $text = $instance['text'];
        echo wp_kses_post($before_widget);



		if(!empty($title)) {
			echo wp_kses_post($before_title . $title . $after_title);
		}
		if(!empty($text)) {
			echo wp_kses_post($text);
		}

        echo wp_kses_post($after_widget);
    }


    function update($new, $old){
        $new = wp_parse_args($new, array(
            'title' => '',
            'text' => '',
        ));
        return $new;
    }

    function form( $instance ) {
        $instance = wp_parse_args($instance, array(
            'title' => '',
            'text' => '',
        ));
?>
    <p>
        <label for="<?php echo esc_attr($this->get_field_id('title')); ?>"><?php esc_html_e('Title:', 'dfd'); ?></label>
        <input class="widefat" id="<?php echo esc_attr($this->get_field_id('title')); ?>" name="<?php echo esc_attr($this->get_field_name('title')); ?>" type="text" value="<?php echo esc_attr($instance['title']); ?>"/>
    </p>
    <p>
        <textarea class="widefat" rows="20" cols="40" id="<?php echo esc_attr($this->get_field_id('text')); ?>" name="<?php echo esc_attr($this->get_field_name('text')); ?>"><?php echo wp_kses_post($text); ?></textarea>
    </p>

    <?php
    }
}


