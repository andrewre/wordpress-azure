<?php
if(!defined('ABSPATH')) {
	exit;
}
$data = 'data-redirect="'. esc_attr(apply_filters('dfd_activation_redirect', true)) .'"';
if(get_option('envato_setup_complete', false)) {
	$data = '';
}
?>
<div class="dfd-dashboard-section activation inactive">
	<div class="inner">
		<h3 class="header">
			<?php esc_html_e('Theme activation', 'dfd') ?>
			<span class="badge"><?php esc_html_e('Not activated', 'dfd') ?></span>
		</h3>
		<div class="content">
			<div class="front">
				<p><?php esc_html_e('Activated theme allows you to get:', 'dfd') ?></p>
				<?php require_once get_template_directory() .'/inc/lib/dashboard/templates/activation/active-features.php' ?>
			</div>
			<div class="back">
				<p><?php esc_html_e('Enter your purchase code', 'dfd') ?></p>
				<p><span><?php esc_html_e('Where can I get my purchase code', 'dfd') ?></span> <a href="" title="<?php esc_attr_e('instruction', 'dfd')?>"><?php esc_html_e('instruction', 'dfd')?></a></p>
				<p class="input-wrapper">
					<input type="text" class="animated" id="dfd-ronneby-purchase-code" />
					<span class="alert empty-field"><?php esc_html_e('Please enter the purchase code', 'dfd') ?></span>
					<span class="alert wrong-code"><?php esc_html_e('Please enter a valid code', 'dfd') ?></span>
				</p>
				<p><?php esc_html_e('Reminder!', 'dfd') ?> <span><?php esc_html_e('One registration per Website. If registered elsewhere please deactivate that registration first.', 'dfd') ?></span></p>
			</div>
			<p>
				<a href="#" class="dfd-get-activation-form button button-primary" title="<?php esc_attr_e('Activate theme', 'dfd') ?>" <?php echo !empty($data) ? $data : $data ?>><?php esc_html_e('Activate theme', 'dfd') ?></a>
			</p>
		</div>
	</div>
</div>