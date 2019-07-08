<?php
if ( ! defined( 'ABSPATH' ) ) { exit; }
global $dfd_ronneby;
$header_style_option = Dfd_Theme_Helpers::getHeaderStyleOption();
if((isset($dfd_ronneby['show_search_form_header_'.$header_style_option]) && strcmp($dfd_ronneby['show_search_form_header_'.$header_style_option],'1') === 0) || !class_exists('Dfd_Ronneby_Core_Plugin')) : ?>
	<div class="form-search-wrap">
		<a href="#" class="header-search-switcher dfd-icon-zoom"></a>
	</div>
<?php endif; ?>
