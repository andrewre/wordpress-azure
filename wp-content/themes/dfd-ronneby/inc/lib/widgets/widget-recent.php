<?php
if ( ! defined( 'ABSPATH' ) ) { exit; }
require_once(dirname(__FILE__).'/widget.php');

class dfd_recent_posts extends SB_WP_Widget {
	protected $widget_base_id = 'dfd_recent_posts';
	protected $widget_name = 'Widget: Recent Posts';
	
	protected $options;
	
    /**
     * Register widget with WordPress.
     */
    public function __construct() {
		$this->widget_params = array(
			'description' => esc_html__('Advanced recent posts widget.', 'dfd')
		);
		
		$this->options = array(
			array(
				'title', 'text', '', 
				'label' => esc_html__('Title', 'dfd'), 
				'input'=>'text', 
				'filters'=>'widget_title', 
				'on_update'=>'esc_attr',
			),
			array(
				'limit', 'int', 5, 
				'label' => esc_html__('Limit', 'dfd'), 
				'input'=>'select', 
				'values' => array('range', 'from'=>1, 'to'=>20),
			),
			array(
				'date', 'text', '', 
				'label' => esc_html__('Display date', 'dfd'), 
				'input'=>'checkbox',
			),
			array(
				'comments', 'text', '', 
				'label' => esc_html__('Display comments', 'dfd'), 
				'input'=>'checkbox',
			),
			array(
				'comments_style', 'text', '', 
				'label'		=>	esc_html__('Comments style', 'dfd'), 
				'input'		=>	'custom_select',
				'values'	=>	array(
					'comment_on_thumb' => esc_html__('Comment on thumb', 'dfd'),
					'comment_with_meta' => esc_html__('Comment with meta', 'dfd'),
				),
			),
			array(
				'author', 'text','', 
				'label' => esc_html__('Display author', 'dfd'), 
				'input'=>'checkbox',
			),
			array(
				'radius', 'text', '', 
				'label' => esc_html__('Border radius in px', 'dfd'), 
				'input'	=>'text', 
			),
			array(
				'thumb_size', 'text', '', 
				'label' => esc_html__('Thumb size in px', 'dfd'), 
				'input'	=>'number', 
			),
			array(
				'cat', 'text', '', 
				'label' => esc_html__('Limit to category', 'dfd'), 
				'input'=>'wp_dropdown_categories',
			),
			array(
				'disable_delimeter', 'text', '', 
				'label' => esc_html__('Disable delimeter', 'dfd'), 
				'input' => 'checkbox',
			),
			array(
				'space_from_thumb', 'text', '', 
				'label' => esc_html__('Indent from the thumb in px', 'dfd'), 
				'input' => 'number',
			),
			array(
				'title_text_transform', 'text', '', 
				'label'		=>	esc_html__('Title text transform', 'dfd'), 
				'input'		=>	'custom_select',
				'values'	=>	array(
					'' => esc_html__('Box name typography', 'dfd'),
					'none' => esc_html__('None', 'dfd'),
					'capitalize' => esc_html__('Capitalize', 'dfd'),
					'lowercase' => esc_html__('Lowercase', 'dfd'),
					'uppercase' => esc_html__('Uppercase', 'dfd'),
				),
			),
			array(
				'title_font_size', 'text', '', 
				'label' => esc_html__('Title font size', 'dfd'), 
				'input' => 'number',
			),
		);
		
        parent::__construct();
    }

    /**
     * Display widget
     */
    function widget( $args, $instance ) {
        
		$link_css = '';
		
		extract( $args );
		$this->setInstances($instance, 'filter');
		
		if ( ! isset( $args['widget_id'] ) ) {
			$args['widget_id'] = $this->id;
		}
		
		if(isset($args['widget_id']) && !empty($args['widget_id'])) {
			$id = $args['widget_id'];
		}else{
			$id = 'widget_'.$this->widget_base_id;
		}
		
        echo wp_kses_post($before_widget);

		$title = $this->getInstance('title');
        if ( ! empty( $title ) ) {
            echo wp_kses_post($before_title . $title . $after_title);
		}

		$query = new WP_Query(array(
			'posts_per_page' => $this->getInstance('limit'),
			'category_name' => $this->getInstance('cat'),
		));
		
		$author = $this->getInstance('author');
		$date = $this->getInstance('date');
		$comments = $this->getInstance('comments');
		$comments_style = $this->getInstance('comments_style');
		$border_radius_thumb = $this->getInstance('radius');
		$thumb_size = $this->getInstance('thumb_size');
		$disable_delimeter = $this->getInstance('disable_delimeter');
		$space_from_thumb = $this->getInstance('space_from_thumb');
		$title_text_transform = $this->getInstance('title_text_transform');
		$title_font_size = $this->getInstance('title_font_size');

		$border_radius_thumb_style = $thumb_content_offset = '';
		if($border_radius_thumb != '' || $thumb_size != '') {
			$border_radius_thumb_style = 'style="';
			if($border_radius_thumb != '') {
				$border_radius_thumb_style .= 'border-radius: '.esc_attr($border_radius_thumb).'px;';
			}
			if(isset($thumb_size) && $thumb_size != '') {
				$border_radius_thumb_style .= 'width: '.esc_attr($thumb_size).'px;';
				$thumb_content_offset = 'style="margin-left: '.esc_attr($thumb_size).'px;"';
			}
			$border_radius_thumb_style .= '"';
		}
		
		if(isset($disable_delimeter) && $disable_delimeter != '') {
			$link_css .= '#'.$id.' .recent-posts-list .post-list-item .entry-content-wrap div.entry-meta {border-width: 0;}';
		}
		if(isset($space_from_thumb) && $space_from_thumb != '') {
			$link_css .= '#'.$id.' .recent-posts-list .post-list-item .entry-content-wrap div.entry-meta, #'.$id.' .recent-posts-list.comments-enabled .post-list-item .entry-content-wrap div.box-name {padding-left: '.esc_js($space_from_thumb).'px;}';
		}
		if(isset($title_text_transform) && !empty($title_text_transform)) {
			$link_css .= '#'.$id.' .box-name {text-transform: '.esc_js($title_text_transform).';}';
		}
		if(isset($title_font_size) && !empty($title_font_size)) {
			$link_css .= '#'.$id.' .box-name {font-size: '.esc_js($title_font_size).'px;}';
		}
		?>

        <div class="recent-posts-list <?php echo ($comments) ? 'comments-enabled' : '' ?>">
		<?php
		
	    if ($query->have_posts()) {
			while($query->have_posts()) :
				$query->the_post();
			?>
            <div class="post-list-item clearfix">

				<div class="entry-thumb entry-thumb-hover" <?php echo wp_kses_data($border_radius_thumb_style); ?>>
					<?php get_template_part('templates/thumbnail/post', 'widget'); ?>
					<?php if ($comments && $comments_style == 'comment_on_thumb' || $comments && $comments_style == '') { ?>
						<div class="post-comments-wrap">
							<?php get_template_part('templates/entry-meta/mini', 'comments-number'); ?>
						</div>
					<?php } ?>
				</div>

				<div class="entry-content-wrap" <?php echo wp_kses_data($thumb_content_offset); ?>>
					<div class="box-name">
						<a href="<?php the_permalink(); ?>" title="<?php printf( esc_attr__( 'Permalink to %s', 'dfd' ), the_title_attribute( 'echo=0' ) ); ?>" rel="bookmark"><?php the_title(); ?></a>
					</div>

					<?php if ($author || $date) { ?>
						<div class="entry-meta dopinfo">
							<?php
							if ($author) {
								get_template_part('templates/entry-meta/mini', 'author');
								get_template_part('templates/entry-meta/mini', 'delim-blank');
							}

							if ($date) {
								get_template_part('templates/entry-meta/mini', 'date');
							}
							if($comments && $comments_style == 'comment_with_meta') {
								get_template_part('templates/entry-meta/mini', 'comments');
							}
							?>
						</div>
					<?php } ?>
					
				</div>
            </div>

            <?php
			endwhile; wp_reset_postdata();
		}
		if(!empty($link_css)) { ?>
			<script>
				(function($) {
					$('head').append('<style><?php echo esc_js($link_css); ?></style>');
				})(jQuery);
			</script>
		<?php } ?>
        </div>

    <?php

        echo wp_kses_post($after_widget);
    }

}
