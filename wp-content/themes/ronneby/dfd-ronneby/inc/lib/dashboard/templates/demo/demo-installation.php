<?php
if(!defined('ABSPATH')) {
	exit;
}
$tab = '62';
if(class_exists('WooCommerce')) {
	$tab = '67';
}
$active = (isset($this->isActive) && 'active' === $this->isActive);
$url = '#';
if($active) {
	$url = get_admin_url() .'admin.php?page=Ronneby&tab='. $tab;
}
?>
<div class="dfd-dashboard-section demo-installation">
	<div class="inner">
		<h3 class="header">
			<?php esc_html_e('Demo installation', 'dfd') ?>
			<?php if($active) : ?>
				<span class="badge"><?php esc_html_e('Activated', 'dfd') ?></span>
			<?php else: ?>
				<span class="badge inactive"><?php esc_html_e('Not activated', 'dfd') ?></span>
			<?php endif; ?>
		</h3>
		<div class="content">
			<p><?php esc_html_e('More than 60 amazing demos are available', 'dfd') ?></p>
			<ul>
				<li>
					<p><?php esc_html_e('Nishe demos for any business', 'dfd') ?></p>
					<p><span><?php esc_html_e('Automatically delivery of a fresh version', 'dfd') ?></span></p>
				</li>
				<li>
					<p><?php esc_html_e('80+ google speed test', 'dfd') ?></p>
					<p><span><?php esc_html_e('Qualified help of our team', 'dfd') ?></span></p>
				</li>
				<li>
					<p><?php esc_html_e('Multi page demos for your business', 'dfd') ?></p>
					<p><span><?php esc_html_e('Super puper demos in two clicks', 'dfd') ?></span></p>
				</li>
			</ul>
			<p>
				<a href="<?php echo esc_url($url) ?>" title="<?php esc_attr_e('Button', 'dfd') ?>" target="_blank" class="button button-primary <?php echo esc_attr($active) ? '' : 'dfd-activation-required' ?>"><?php esc_html_e('Start install demos', 'dfd') ?></a>
			</p>
		</div>
	</div>
</div>