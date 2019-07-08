<?php
if ( ! defined( 'ABSPATH' ) ) { exit; }
require_once(dirname(__FILE__).'/widget.php');

class dfd_logo extends SB_WP_Widget {
	protected $widget_base_id = 'dfd_logo';
	protected $widget_name = 'Widget: Logo';
	
	protected $options;
	
	public function __construct() {
		# Stup description
		$this->widget_params = array(
			'description' => esc_html__('Display site logo.', 'dfd'),
		);
		
		$this->options = array(
	//		array(
	//			'title', 'text', '', 
	//			'label' => 'Title', 
	//			'input'=>'text', 
	//			'filters'=>'widget_title', 
	//			'on_update'=>'esc_attr',
	//		),
		);
		
        parent::__construct();
    }
	
	function widget( $args, $instance ) {
        extract( $args );
		$this->setInstances($instance, 'filter');
		
        echo wp_kses_post($before_widget);

		global $dfd_ronneby;
		if (isset($dfd_ronneby['custom_logo_image_third']['url']) && $dfd_ronneby['custom_logo_image_third']['url']) {
		?>
			<div class="logo">
				<a href="<?php echo home_url(); ?>/">
					<img src="<?php echo esc_url($dfd_ronneby['custom_logo_image_third']['url']); ?>" alt="<?php echo esc_attr(get_bloginfo('name')); ?>">
				</a>
			</div>
		<?php
		}
		
		echo wp_kses_post($after_widget);
	}
}
