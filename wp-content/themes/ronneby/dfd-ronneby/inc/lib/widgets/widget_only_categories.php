<?php
/**
 * Duplicated and tweaked WP core Categories widget class
 */
if ( ! defined( 'ABSPATH' ) ) { exit; }

require_once(dirname(__FILE__).'/widget.php');

class Dfd_Category_Widged extends SB_WP_Widget {
	
	protected $widget_base_id = 'dfd_category';
	protected $widget_name = 'Custom: Wiget categories';
	
	protected $options;

    public function __construct() {
		$this->widget_args = array(
			'description' => esc_html__('Post category', 'dfd'),
		);
		
		$this->options = array(
			array(
				'title', 'text', '', 
				'label' => esc_html__('Title', 'dfd'), 
				'input'	=> 'text', 
				'filters' => 'widget_title', 
				'on_update' => 'esc_attr',
			),
		);
		
        parent::__construct();
    }

    function widget( $args, $instance ) {
        extract( $args );
		
		$before_container_cat_html = $after_container_html = $container_scroll_class = '';
		
		$this->setInstances($instance, 'filter');
		
		$title = $this->getInstance('title');

        echo wp_kses_post($before_widget);

		if(!empty($title)) {
			echo wp_kses_post($before_title . $title . $after_title);
		}
		?>
			<ul class="<?php echo esc_attr($container_scroll_class) ;?>">
			<?php
				$categories = get_categories();
				foreach($categories as $category) :
			?>
					<li>
						<a href="<?php echo esc_url(get_category_link($category->term_id)); ?>"><?php echo esc_html($category->name); ?></a>
					</li>

				<?php endforeach; ?>
			</ul>
		<?php
        echo wp_kses_post($after_widget);
    }
}