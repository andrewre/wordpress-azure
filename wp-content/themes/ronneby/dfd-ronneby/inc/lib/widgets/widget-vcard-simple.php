<?php
if ( ! defined( 'ABSPATH' ) ) { exit; }
require_once(dirname(__FILE__).'/widget.php');

class dfd_vcard_simple extends SB_WP_Widget {
	protected $widget_base_id = 'dfd_vcard_simple';
	protected $widget_name = 'Widget: vCard Simple';
	
	protected $options;
	
    public function __construct() {
		$this->widget_params = array(
			'description' => esc_html__('Use this widget to add a simple vCard', 'dfd'),
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
				'address', 'text', '',
				'label' => esc_html__('Address', 'dfd'),
			),
			array(
				'phones', 'text', '',
				'label' => esc_html__('Phones', 'dfd'),
			),
			array(
				'display_email_as_link', 'text', '',
				'label' => esc_html__('Display Email as link', 'dfd'),
				'input' => 'checkbox',
			),
			array(
				'email', 'text', '',
				'label' => esc_html__('Email', 'dfd'),
			),
			array(
				'additional_info', 'text', '',
				'label' => esc_html__('Website', 'dfd'),
			),
			array(
				'show_titles', 'text', '',
				'label' => esc_html__('Show titles', 'dfd'),
				'input' => 'checkbox',
			),
			array(
				'background', 'text', '',
				'label' => esc_html__('Background', 'dfd'),
				'input' => 'colorpicker',
			),
			array(
				'titles_color', 'text', '',
				'label' => esc_html__('Titles color', 'dfd'),
				'input' => 'colorpicker',
			),
			array(
				'text_color', 'text', '',
				'label' => esc_html__('Text color', 'dfd'),
				'input' => 'colorpicker',
			),
			array(
				'border_width', 'int', 0, 
				'label' => esc_html__('Border width', 'dfd'), 
				'input'=>'text', 
				'on_update'=>'esc_attr',
			),
			array(
				'border_style', 'text', '', 
				'label'		=>	esc_html__('Border style', 'dfd'), 
				'input'		=>	'custom_select',
				'values'	=>	array(
					'none' => esc_html__('None', 'dfd'),
					'solid' => esc_html__('Solid', 'dfd'),
					'dotted' => esc_html__('Dotted', 'dfd'),
					'dashed' => esc_html__('Dashed', 'dfd'),
				),
			),
			array(
				'border_color', 'text', '',
				'label' => esc_html__('Text color', 'dfd'),
				'input' => 'colorpicker',
			),
			array(
				'border_radius', 'int', 2, 
				'label' => esc_html__('Border radius', 'dfd'), 
				'input'=>'text', 
				'on_update'=>'esc_attr',
			),
		);
		
        parent::__construct();
    }
	
	/**
     * Display widget
     */
    function widget( $args, $instance ) {
        extract( $args );
		$this->setInstances($instance, 'filter');
		
        echo wp_kses_post($before_widget);

		$title = $this->getInstance('title');
		
        if ( !empty( $title ) ) {
            echo wp_kses_post($before_title . $title . $after_title);
		}
		
		$style_line = '';
		$uniq_id = uniqid('dfd-vcard-widget-');
		$address = $this->getInstance('address');
		$phones = $this->getInstance('phones');
		$display_email_as_link = $this->getInstance('display_email_as_link');
		$email = $this->getInstance('email');
		$addition = $this->getInstance('additional_info');
		$show_titles = $this->getInstance('show_titles');
		$background = $this->getInstance('background');
		$titles_color = $this->getInstance('titles_color');
		$text_color = $this->getInstance('text_color');
		$border_width = $this->getInstance('border_width');
		$border_style = $this->getInstance('border_style');
		$border_color = $this->getInstance('border_color');
		$border_radius = $this->getInstance('border_radius');
		
		if($background) {
			$style_line .= '#'.esc_attr($uniq_id).' .dfd-vcard-wrap {background: '.esc_attr($background).';}';
		}
		if($titles_color) {
			$style_line .= '#'.esc_attr($uniq_id).' .dfd-vcard-wrap .vcard-field i, #'.esc_attr($uniq_id).' .dfd-vcard-wrap .vcard-field .vcard-field-name {color: '.esc_attr($titles_color).';}';
		}
		if($text_color) {
			$style_line .= '#'.esc_attr($uniq_id).' .dfd-vcard-wrap .vcard-field p {color: '.esc_attr($text_color).';}';
		}
		if($border_width) {
			$style_line .= '#'.esc_attr($uniq_id).' .dfd-vcard-wrap {border-width: '.esc_attr($border_width).'px;}';
		}
		if($border_style) {
			$style_line .= '#'.esc_attr($uniq_id).' .dfd-vcard-wrap {border-style: '.esc_attr($border_style).';}';
		}
		if($border_color) {
			$style_line .= '#'.esc_attr($uniq_id).' .dfd-vcard-wrap {border-color: '.esc_attr($border_color).';}';
		}
		if($border_radius) {
			$style_line .= '#'.esc_attr($uniq_id).' .dfd-vcard-wrap {-webkit-border-radius: '.esc_attr($border_radius).'px;-moz-border-radius: '.esc_attr($border_radius).'px;-o-border-radius: '.esc_attr($border_radius).'px;border-radius: '.esc_attr($border_radius).'px;}';
		}
		?>

		<div id="<?php echo esc_attr($uniq_id) ?>" class="row">
			<div class="twelve columns">
				<div class="dfd-vcard-wrap">
					<?php if (!empty($phones)): ?>
						<div class="vcard-field">
							<i class="dfd-icon-tablet2"></i>
							<?php if(!empty($show_titles)) : ?>
								<div class="vcard-field-name"><?php esc_html_e('Phone:', 'dfd'); ?></div>
							<?php endif; ?>
							<p><?php echo wp_kses_post($phones); ?></p>
						</div>
					<?php endif; ?>
					<?php if (!empty($email)): ?>
						<div class="vcard-field">
							<i class="dfd-icon-email_1"></i>
							<?php if(!empty($show_titles)) : ?>
								<div class="vcard-field-name"><?php esc_html_e('Email:', 'dfd'); ?></div>
							<?php endif; ?>
							<p>
							<?php if (!empty($display_email_as_link)): ?>
								<a href="mailto:<?php echo esc_attr(trim($email)); ?>" title="<?php esc_attr_e('Mail to:', 'dfd') ?>" ><?php echo esc_html($email); ?></a>
							<?php else: ?>
								<span class="vcard-field-value"><?php echo esc_html($email); ?></span>
							</p>
							<?php endif; ?>
						</div>
					<?php endif; ?>
					<?php if (!empty($address)): ?>
						<div class="vcard-field">
							<i class="dfd-icon-navigation"></i>
							<?php if(!empty($show_titles)) : ?>
								<div class="vcard-field-name"><?php esc_html_e('Address:', 'dfd'); ?></div>
							<?php endif; ?>
							<p><?php echo wp_kses_post($address); ?></p>
						</div>
					<?php endif; ?>
					<?php if (!empty($addition)): ?>
						<div class="vcard-field-add-info vcard-field">
							<i class="dfd-icon-earth"></i>
							<?php if(!empty($show_titles)) : ?>
								<div class="vcard-field-name"><?php esc_html_e('Website:', 'dfd'); ?></div>
							<?php endif; ?>
							<p>
								<a href="<?php echo esc_url($addition) ?>" title="<?php esc_html_e('site url','dfd') ?>"><?php echo wp_kses_post($addition); ?></a>
							</p>
						</div>
					<?php endif; ?>
				</div>
			</div>
		</div>
		<?php if(!empty($style_line)) : ?>
			<script type="text/javascript">
				(function($) {
					$('head').append('<style><?php echo esc_js($style_line) ?></style>');
				})(jQuery);
			</script>
		<?php endif; ?>
		
		<?php
		
		echo wp_kses_post($after_widget);
    }
	
}
