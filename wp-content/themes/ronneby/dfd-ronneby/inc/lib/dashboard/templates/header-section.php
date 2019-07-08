<?php
if(!defined('ABSPATH')) {
	exit;
}
$curentTheme = wp_get_theme();
$themeName = $curentTheme->get('Name');
$themeVersion = $curentTheme->get('Version');
?>
<div class="dfd-dashboard-header">
	<div class="banner">
		<div class="logo">
			<span class="logo-title"><?php echo esc_html($themeName) ?></span>
			<span class="logo-version">V. <?php echo esc_html($themeVersion) ?></span>
		</div>
		<div class="title">
			<?php esc_html_e('Dashboard', 'dfd') ?>
		</div>
	</div>
	<h3><?php esc_html_e('Welcome to Ronneby home page', 'dfd') ?></h3>
	<div><?php esc_html_e('Here you can copy/download your current option settings. Keep this safe as you can use it as a backup should anything go wrong, or you can use it to restore your settings on this site (or any other site).', 'dfd') ?></div>
</div>