<?php
if(!defined('ABSPATH')) {
	exit;
}
?>
<div class="dfd-dashboard-section activation">
	<div class="inner">
		<h3 class="header">
			<?php esc_html_e('Theme activation', 'dfd') ?>
			<span class="badge"><?php esc_html_e('Activated', 'dfd') ?></span>
		</h3>
		<div class="content">
			<p><?php esc_html_e('Activated theme allows you to get:', 'dfd') ?></p>
			<?php require_once get_template_directory() .'/inc/lib/dashboard/templates/activation/active-features.php' ?>
			<p>
				<?php esc_html_e('Congratulations!', 'dfd') ?>
				<span><?php esc_html_e('You successfully activated your theme version.', 'dfd') ?></span>
				<a href="#" class="dfd-deactivate-theme"><?php esc_html_e('Deactivate theme', 'dfd') ?></a>
			</p>
		</div>
	</div>
</div>