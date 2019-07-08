<?php
if(!defined('ABSPATH')) {
	exit;
}
?>
<div class="dfd-manual-deactivate-popup-button-wrapper">
	<a class="button" id="dfd-manual-deactivate-popup-button" href="#" title="<?php esc_attr_e('Solve activation issue', 'dfd') ?>">?</a>
</div>
<div id="dfd-manual-deactivate-popup">
	<div class="content">
		<h3><?php esc_html_e('Theme deactivation', 'dfd') ?></h3>
		<p>
			<input type="text" value="" class="dfd-deactivate-puchase-code" placeholder="<?php esc_attr_e('Purchase code', 'dfd') ?>" />
			<a href="#" class="dfd-deactivate-theme-manually button button-primary"><?php esc_html_e('Deactivate theme', 'dfd') ?></a>
		</p>
		<p><?php esc_html_e('This dialog window allows you to deactivate theme by purchase code. This feature can be useful if you deleted database by accident and did not deactivate theme before that. Use with caution.', 'dfd') ?></p>
	</div>
	<a href="#" class="dfd-menual-deactivate-close"></a>
	<span class="dfd-menual-deactivate-close"></span>
</div>