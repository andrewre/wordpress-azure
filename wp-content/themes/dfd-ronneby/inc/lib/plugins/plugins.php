<?php
/**
 * This file represents an example of the code that themes would use to register
 * the required plugins.
 *
 * It is expected that theme authors would copy and paste this code into their
 * functions.php file, and amend to suit.
 *
 * @package    TGM-Plugin-Activation
 * @subpackage Example
 * @version    2.4.1
 * @author     Thomas Griffin <thomasgriffinmedia.com>
 * @author     Gary Jones <gamajo.com>
 * @copyright  Copyright (c) 2014, Thomas Griffin
 * @license    http://opensource.org/licenses/gpl-2.0.php GPL v2 or later
 * @link       https://github.com/thomasgriffin/TGM-Plugin-Activation
 */
if ( ! defined( 'ABSPATH' ) ) { exit; }
/**
 * Include the TGM_Plugin_Activation class.
 */
require_once dirname( __FILE__ ) . '/plugin-activation.php';

add_action('tgmpa_register', 'dfd_register_required_plugins');
/**
 * Register the required plugins for this theme.
 *
 * In this example, we register two plugins - one included with the TGMPA library
 * and one from the .org repo.
 *
 * The variable passed to tgmpa_register_plugins() should be an array of plugin
 * arrays.
 *
 * This function is hooked into tgmpa_init, which is fired within the
 * TGM_Plugin_Activation class constructor.
 */
function dfd_register_required_plugins() {
	$remote_path = 'http://dfd.name/check/';
	
	$code = get_site_option('dfd_ronneby_purchase_code');
	/**
	 * Array of plugin arrays. Required keys are name and slug.
	 * If the source is NOT from the .org repo, then source is also required.
	 */
	$plugins = array(

        array(
			'name'     				=> 'Ronneby Core', // The plugin name
			'slug'     				=> 'ronneby-core', // The plugin slug (typically the folder name)
			'source'   				=> $remote_path.'plugins.php?plugin=ronneby-core&code='.$code, // The plugin source
//			'source'   				=> locate_template('/plugins/smk-sidebar-generator.zip'), // The plugin source
			'required' 				=> true, // If false, the plugin is only 'recommended' instead of required
			'version' 				=> '1.1.2', // E.g. 1.0.0. If set, the active plugin must be this version or higher, otherwise a notice is presented
			'force_activation' 		=> false, // If true, plugin is activated upon theme activation and cannot be deactivated until theme switch
			'force_deactivation' 	=> false, // If true, plugin is deactivated upon theme switch, useful for theme-specific plugins
			'external_url' 			=> '', // If set, overrides default API URL and points to an external URL
        ),
//        array(
//            'name'     				=> 'SMK Sidebar Generator', // The plugin name
//            'slug'     				=> 'smk-sidebar-generator', // The plugin slug (typically the folder name)
//			'source'   				=> $remote_path.'plugins.php?plugin=smk-sidebar-generator&code='.$code, // The plugin source
////			'source'   				=> locate_template('/plugins/smk-sidebar-generator.zip'), // The plugin source
//            'required' 				=> false, // If false, the plugin is only 'recommended' instead of required
//            'version' 				=> '2.3.2', // E.g. 1.0.0. If set, the active plugin must be this version or higher, otherwise a notice is presented
//            'force_activation' 		=> false, // If true, plugin is activated upon theme activation and cannot be deactivated until theme switch
//            'force_deactivation' 	=> false, // If true, plugin is deactivated upon theme switch, useful for theme-specific plugins
//            'external_url' 			=> '', // If set, overrides default API URL and points to an external URL
//        ),
        array(
            'name'     				=> 'Visual Composer', // The plugin name
            'slug'     				=> 'js_composer', // The plugin slug (typically the folder name)
            'source'   				=> $remote_path.'plugins.php?plugin=js_composer&code='.$code, // The plugin source
//			'source'   				=> locate_template('/plugins/js_composer.zip'), // The plugin source
            'required' 				=> true, // If false, the plugin is only 'recommended' instead of required
            'version' 				=> '6.0.3', // E.g. 1.0.0. If set, the active plugin must be this version or higher, otherwise a notice is presented
            'force_activation' 		=> false, // If true, plugin is activated upon theme activation and cannot be deactivated until theme switch
            'force_deactivation' 	=> false, // If true, plugin is deactivated upon theme switch, useful for theme-specific plugins
            'external_url' 			=> '', // If set, overrides default API URL and points to an external URL
        ),
        array(
            'name'     				=> 'Revolution slider', // The plugin name
			'slug'     				=> 'revslider', // The plugin slug (typically the folder name)
			'source'   				=> $remote_path.'plugins.php?plugin=revslider&code='.$code, // The plugin source
//			'source'   				=> locate_template('/plugins/revslider.zip'), // The plugin source
            'required' 				=> false, // If false, the plugin is only 'recommended' instead of required
            'version' 				=> '5.4.8.3', // E.g. 1.0.0. If set, the active plugin must be this version or higher, otherwise a notice is presented
            'force_activation' 		=> false, // If true, plugin is activated upon theme activation and cannot be deactivated until theme switch
            'force_deactivation' 	=> false, // If true, plugin is deactivated upon theme switch, useful for theme-specific plugins
            'external_url' 			=> '', // If set, overrides default API URL and points to an external URL
        ),
//		array(
//            'name'     				=> 'Advanced Custom Fields', // The plugin name
//            'slug'     				=> 'advanced-custom-fields', // The plugin slug (typically the folder name)
//			'source'   				=> $remote_path.'plugins.php?plugin=advanced-custom-fields&code='.$code, // The plugin source
////			'source'   				=> locate_template('/plugins/advanced-custom-fields.zip'), // The plugin source
//            'required' 				=> false, // If false, the plugin is only 'recommended' instead of required
//            'version' 				=> '5.7.12', // E.g. 1.0.0. If set, the active plugin must be this version or higher, otherwise a notice is presented
//            'force_activation' 		=> false, // If true, plugin is activated upon theme activation and cannot be deactivated until theme switch
//            'force_deactivation' 	=> false, // If true, plugin is deactivated upon theme switch, useful for theme-specific plugins
//            'external_url' 			=> '', // If set, overrides default API URL and points to an external URL
//        ),

	);

	/**
	 * Array of configuration settings. Amend each line as needed.
	 * If you want the default strings to be available under your own theme domain,
	 * leave the strings uncommented.
	 * Some of the strings are added into a sprintf, so see the comments at the
	 * end of each line for what each argument will be.
	 */
	$config = array(
		'id'				=> 'dfd',         	// Text domain - likely want to be the same as your theme.
		'domain'       		=> 'dfd',         	// Text domain - likely want to be the same as your theme.
		'default_path' 		=> '',                         	// Default absolute path to pre-packaged plugins
		'parent_slug'		=> (defined('ENVATO_HOSTED_SITE') && ENVATO_HOSTED_SITE) ? 'themes.php' : 'dfd-'. DFD_THEME_SETTINGS_NAME, 				// Default parent URL slug
		'menu'         		=> 'install-required-plugins', 	// Menu slug
		'has_notices'      	=> true,                       	// Show admin notices or not
		'dismissable'		=> true,                       	// If false, a user cannot dismiss the nag message.
		'is_automatic'    	=> true,					   	// Automatically activate plugins after installation or not
		'message' 			=> '',							// Message to output right before the plugins table
		'strings'      		=> array(
			'page_title'                       			=> esc_html__( 'Install Required Plugins', 'dfd' ),
			'menu_title'                       			=> esc_html__( 'Install Plugins', 'dfd' ),
			'installing'                       			=> esc_html__( 'Installing Plugin: %s', 'dfd' ), // %1$s = plugin name
			'oops'                             			=> esc_html__( 'Something went wrong with the plugin API.', 'dfd' ),
			'notice_can_install_required'     			=> _n_noop( 'This theme requires the following plugin: %1$s.', 'This theme requires the following plugins: %1$s.', 'dfd' ), // %1$s = plugin name(s)
			'notice_can_install_recommended'			=> _n_noop( 'This theme recommends the following plugin: %1$s.', 'This theme recommends the following plugins: %1$s.', 'dfd' ), // %1$s = plugin name(s)
			'notice_cannot_install'  					=> _n_noop( 'Sorry, but you do not have the correct permissions to install the %s plugin. Contact the administrator of this site for help on getting the plugin installed.', 'Sorry, but you do not have the correct permissions to install the %s plugins. Contact the administrator of this site for help on getting the plugins installed.', 'dfd' ), // %1$s = plugin name(s)
			'notice_can_activate_required'    			=> _n_noop( 'The following required plugin is currently inactive: %1$s.', 'The following required plugins are currently inactive: %1$s.', 'dfd' ), // %1$s = plugin name(s)
			'notice_can_activate_recommended'			=> _n_noop( 'The following recommended plugin is currently inactive: %1$s.', 'The following recommended plugins are currently inactive: %1$s.','dfd' ), // %1$s = plugin name(s)
			'notice_cannot_activate' 					=> _n_noop( 'Sorry, but you do not have the correct permissions to activate the %s plugin. Contact the administrator of this site for help on getting the plugin activated.', 'Sorry, but you do not have the correct permissions to activate the %s plugins. Contact the administrator of this site for help on getting the plugins activated.','dfd' ), // %1$s = plugin name(s)
			'notice_ask_to_update' 						=> _n_noop( 'The following plugin needs to be updated to its latest version to ensure maximum compatibility with this theme: %1$s.', 'The following plugins need to be updated to their latest version to ensure maximum compatibility with this theme: %1$s.','dfd' ), // %1$s = plugin name(s)
			'notice_cannot_update' 						=> _n_noop( 'Sorry, but you do not have the correct permissions to update the %s plugin. Contact the administrator of this site for help on getting the plugin updated.', 'Sorry, but you do not have the correct permissions to update the %s plugins. Contact the administrator of this site for help on getting the plugins updated.','dfd' ), // %1$s = plugin name(s)
			'install_link' 					  			=> _n_noop( 'Begin installing plugin', 'Begin installing plugins', 'dfd' ),
			'activate_link' 				  			=> _n_noop( 'Activate installed plugin', 'Activate installed plugins', 'dfd' ),
			'return'                           			=> esc_html__( 'Return to Required Plugins Installer', 'dfd' ),
			'plugin_activated'                 			=> esc_html__( 'Plugin activated successfully.', 'dfd' ),
			'complete' 									=> esc_html__( 'All plugins installed and activated successfully. %s', 'dfd' ), // %1$s = dashboard link
			'nag_type'									=> 'updated' // Determines admin notice type - can only be 'updated' or 'error'
		)
	);

	tgmpa( $plugins, $config );

}