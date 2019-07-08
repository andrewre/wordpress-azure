<?php if ( ! defined( 'ABSPATH' ) ) { exit; } ?>
<?php
global $dfd_ronneby;
$body_class = $main_wrap_class = $data_atts = '';
if(DfdMetaboxSettings::get('dfd_enable_page_spacer')) {
	$body_class .=  ' dfd-custom-padding-html';
}
if(!class_exists('Dfd_Ronneby_Core_Plugin')) {
	$body_class .= ' dfd-ronneby-theme-only';
}
if(DfdMetaboxSettings::get('crum_page_custom_footer_parallax')) {
	$main_wrap_class .= ' dfd-parallax-footer';
}
$header_data_width = 1101;
if(isset($dfd_ronneby['header_responsive_breakpoint']) && $dfd_ronneby['header_responsive_breakpoint'] != '') {
	$header_data_width = $dfd_ronneby['header_responsive_breakpoint'];
}
$data_atts .=  ' data-header-responsive-width="'.esc_attr($header_data_width).'"';

if(isset($dfd_ronneby['enable_images_lazy_load']) && $dfd_ronneby['enable_images_lazy_load'] == 'on' && isset($dfd_ronneby['lazy_load_offset']) && $dfd_ronneby['lazy_load_offset'] != '') {
	$data_atts .= ' data-lazy-load-offset="'.$dfd_ronneby['lazy_load_offset'].'%"';
}
$data_atts .= ' data-share-pretty="'.esc_attr__('Share', 'dfd').'" data-next-pretty="'.esc_attr__('next', 'dfd').'" data-prev-pretty="'.esc_attr__('prev', 'dfd').'"';
?>
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js ie lt-ie9 lt-ie8 lt-ie7" <?php language_attributes(); ?>> <![endif]-->
<!--[if IE 7]>         <html class="no-js ie lt-ie9 lt-ie8" <?php language_attributes(); ?>> <![endif]-->
<!--[if IE 8]>         <html class="no-js ie lt-ie9" <?php language_attributes(); ?>> <![endif]-->
<!--[if gt IE 8]>      <html class="no-js ie lt-ie10" <?php language_attributes(); ?>> <![endif]-->
<!--[if gt IE 9]><!--> <html class="no-ie" <?php language_attributes(); ?>> <!--<![endif]-->
<head>
    <meta charset="utf-8">
    <?php
	global $dfd_ronneby;
	if(isset($dfd_ronneby['custom_favicon']['url']) && $dfd_ronneby['custom_favicon']['url']) : ?>
		<link rel="icon" type="image/png" href="<?php echo esc_url($dfd_ronneby['custom_favicon']['url']) ?>" />
	<?php endif; ?>
	<?php if(isset($dfd_ronneby['custom_favicon_iphone']['url']) && $dfd_ronneby['custom_favicon_iphone']['url']) : ?>
		<link rel="apple-touch-icon" href="<?php echo esc_url($dfd_ronneby['custom_favicon_iphone']['url']) ?>">
	<?php endif; ?>
	<?php if(isset($dfd_ronneby['custom_favicon_ipad']['url']) && $dfd_ronneby['custom_favicon_ipad']['url']) : ?>
		<link rel="apple-touch-icon" sizes="76x76" href="<?php echo esc_url($dfd_ronneby['custom_favicon_ipad']['url']) ?>">
	<?php endif; ?>
	<?php if(isset($dfd_ronneby['custom_favicon_iphone_retina']['url']) && $dfd_ronneby['custom_favicon_iphone_retina']['url']) : ?>
		<link rel="apple-touch-icon" sizes="120x120" href="<?php echo esc_url($dfd_ronneby['custom_favicon_iphone_retina']['url']) ?>">
	<?php endif; ?>
	<?php if(isset($dfd_ronneby['custom_favicon_ipad_retina']['url']) && $dfd_ronneby['custom_favicon_ipad_retina']['url']) : ?>
		<link rel="apple-touch-icon" sizes="152x152" href="<?php echo esc_url($dfd_ronneby['custom_favicon_ipad_retina']['url']) ?>">
	<?php endif; ?>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!--[if lte IE 9]>
        <script src="<?php echo get_template_directory_uri(); ?>/assets/js/html5shiv.js"></script>
    <![endif]-->
    <!--[if lte IE 8]>
        <script src="<?php echo get_template_directory_uri(); ?>/assets/js/excanvas.compiled.js"></script>
    <![endif]-->
    <?php wp_head(); ?>
</head>
<body <?php body_class($body_class); ?> data-directory="<?php echo get_template_directory_uri() ?>" <?php echo wp_kses_data($data_atts) ?>>
	<?php
	$preloader_enable = DfdMetaboxSettings::get('site_preloader_enabled');
	if ((isset($dfd_ronneby['site_preloader_enabled']) && strcmp($dfd_ronneby['site_preloader_enabled'],'1')===0) || $preloader_enable === 'on') {
		require_once get_template_directory().'/templates/preloader.php';
	}
	?>
	<?php if(!empty($body_class) && $body_class != '') : ?>
		<span class="dfd-frame-line line-top"></span>
		<span class="dfd-frame-line line-bottom"></span>
		<span class="dfd-frame-line line-left"></span>
		<span class="dfd-frame-line line-right"></span>
	<?php endif; ?>
	<?php get_template_part('templates/side-area'); ?>

	<?php if(isset($dfd_ronneby['site_boxed']) && $dfd_ronneby['site_boxed']) { ?>
		<div class="boxed_layout">
	<?php } ?>
			<?php get_template_part('templates/section', 'header'); ?>
			<div id="main-wrap" class="<?php echo esc_attr($main_wrap_class); ?>">
				<div id="change_wrap_div">