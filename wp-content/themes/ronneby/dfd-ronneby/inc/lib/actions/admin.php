<?php
if(!defined('ABSPATH')) {
	exit;
}

if(!class_exists('Dfd_Admin_Actions')) {
	class Dfd_Admin_Actions {
		public $pagenow;
		
		public function __construct() {
			global $pagenow;
			$this->pagenow = $pagenow;
			
			$this->init();
		}
		public function init() {
			$this->actions();
			$this->filters();
		}
		public function actions() {
			add_action('after_setup_theme', array($this, 'enqueueExtras'), 0);
			add_action('admin_init', array($this, 'adminInitAction'));
			add_action('admin_head', array($this, 'adminHeadAction'));
			add_action('admin_notices', array($this, 'adminNotice'));
			if(current_user_can('manage_options')) {
				add_action('switch_theme', array($this, 'switchThemeAction'));
				add_action('after_switch_theme', array($this, 'afterSwitchTheme'));
			}
			if(isset($this->pagenow) && (($this->pagenow == 'admin.php' && isset($_GET['page']) && $_GET['page'] == ucfirst(DFD_THEME_SETTINGS_NAME)) || $this->pagenow == 'admin-ajax.php')) {
				add_action('wbc_importer_after_content_import', array($this, 'wbcExtended'), 10, 2);
			}
		}
		public function filters() {
			add_filter('vc_google_fonts_get_fonts_filter', array($this, 'vcGoogleFontsExtend'));
			add_filter('theme_page_templates', array($this, 'removePageTemplates'));
			add_filter('user_contactmethods', array($this, 'addRemoveContactmethods'), 10, 1);
			add_filter('mce_buttons', array($this, 'nextPageButton'));
			if(isset($this->pagenow) && $this->pagenow == 'admin.php' && isset($_GET['page']) && $_GET['page'] == ucfirst(DFD_THEME_SETTINGS_NAME)) {
				add_filter('wbc_importer_description', array($this, 'wbcImporterDescriptionText'), 10);
			}
		}
		public function vcGoogleFontsExtend() {
			$google_fonts = new Vc_Google_Fonts();
			
			$new_fonts = '"font_family":"Open Sans","font_styles":"300,300italic,regular,italic,600,600italic,700,700italic,800,800italic","font_types":"300 light regular:300:normal,300 light italic:300:italic,400 regular:400:normal,400 italic:400:italic,600 bold regular:600:normal,600 bold italic:600:italic,700 bold regular:700:normal,700 bold italic:700:italic,800 bold regular:800:normal,800 bold italic:800:italic"},{"font_family":"Roboto","font_styles":"100,100italic,300,300italic,regular,italic,500,500italic,700,700italic,900,900italic","font_types":"100 light regular:100:normal,100 light italic:100:italic,300 light regular:300:normal,300 light italic:300:italic,400 regular:400:normal,400 italic:400:italic,500 bold regular:500:normal,500 bold italic:500:italic,700 bold regular:700:normal,700 bold italic:700:italic,900 bold regular:900:normal,900 bold italic:900:italic"},{"font_family":"Oswald","font_styles":"300,regular,700","font_types":"300 light regular:300:normal,400 regular:400:normal,700 bold regular:700:normal"},{"font_family":"Lato","font_styles":"100,100italic,300,300italic,regular,italic,700,700italic,900,900italic","font_types":"100 light regular:100:normal,100 light italic:100:italic,300 light regular:300:normal,300 light italic:300:italic,400 regular:400:normal,400 italic:400:italic,700 bold regular:700:normal,700 bold italic:700:italic,900 bold regular:900:normal,900 bold italic:900:italic"},{"font_family":"Droid Sans","font_styles":"regular,700","font_types":"400 regular:400:normal,700 bold regular:700:normal"},{"font_family":"PT Sans","font_styles":"regular,italic,700,700italic","font_types":"400 regular:400:normal,400 italic:400:italic,700 bold regular:700:normal,700 bold italic:700:italic"},{"font_family":"Source Sans Pro","font_styles":"200,200italic,300,300italic,regular,italic,600,600italic,700,700italic,900,900italic","font_types":"200 light regular:200:normal,200 light italic:200:italic,300 light regular:300:normal,300 light italic:300:italic,400 regular:400:normal,400 italic:400:italic,600 bold regular:600:normal,600 bold italic:600:italic,700 bold regular:700:normal,700 bold italic:700:italic,900 bold regular:900:normal,900 bold italic:900:italic"},{"font_family":"Roboto Condensed","font_styles":"300,300italic,regular,italic,700,700italic","font_types":"300 light regular:300:normal,300 light italic:300:italic,400 regular:400:normal,400 italic:400:italic,700 bold regular:700:normal,700 bold italic:700:italic"},{"font_family":"Open Sans Condensed","font_styles":"300,300italic,700","font_types":"300 light regular:300:normal,300 light italic:300:italic,700 bold regular:700:normal"},{"font_family":"Droid Serif","font_styles":"regular,italic,700,700italic","font_types":"400 regular:400:normal,400 italic:400:italic,700 bold regular:700:normal,700 bold italic:700:italic"},{"font_family":"Ubuntu","font_styles":"300,300italic,regular,italic,500,500italic,700,700italic","font_types":"300 light regular:300:normal,300 light italic:300:italic,400 regular:400:normal,400 italic:400:italic,500 bold regular:500:normal,500 bold italic:500:italic,700 bold regular:700:normal,700 bold italic:700:italic"},{"font_family":"Raleway","font_styles":"100,200,300,regular,500,600,700,800,900","font_types":"100 light regular:100:normal,200 light regular:200:normal,300 light regular:300:normal,400 regular:400:normal,500 bold regular:500:normal,600 bold regular:600:normal,700 bold regular:700:normal,800 bold regular:800:normal,900 bold regular:900:normal"},{"font_family":"Montserrat","font_styles":"regular,700","font_types":"400 regular:400:normal,700 bold regular:700:normal"},{"font_family":"PT Sans Narrow","font_styles":"regular,700","font_types":"400 regular:400:normal,700 bold regular:700:normal"},{"font_family":"Roboto Slab","font_styles":"100,300,regular,700","font_types":"100 light regular:100:normal,300 light regular:300:normal,400 regular:400:normal,700 bold regular:700:normal"},{"font_family":"Arimo","font_styles":"regular,italic,700,700italic","font_types":"400 regular:400:normal,400 italic:400:italic,700 bold regular:700:normal,700 bold italic:700:italic"},{"font_family":"Yanone Kaffeesatz","font_styles":"200,300,regular,700","font_types":"200 light regular:200:normal,300 light regular:300:normal,400 regular:400:normal,700 bold regular:700:normal"},{"font_family":"Lobster","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Bitter","font_styles":"regular,italic,700","font_types":"400 regular:400:normal,400 italic:400:italic,700 bold regular:700:normal"},{"font_family":"Lora","font_styles":"regular,italic,700,700italic","font_types":"400 regular:400:normal,400 italic:400:italic,700 bold regular:700:normal,700 bold italic:700:italic"},{"font_family":"Dosis","font_styles":"200,300,regular,500,600,700,800","font_types":"200 light regular:200:normal,300 light regular:300:normal,400 regular:400:normal,500 bold regular:500:normal,600 bold regular:600:normal,700 bold regular:700:normal,800 bold regular:800:normal"},{"font_family":"Oxygen","font_styles":"300,regular,700","font_types":"300 light regular:300:normal,400 regular:400:normal,700 bold regular:700:normal"},{"font_family":"Arvo","font_styles":"regular,italic,700,700italic","font_types":"400 regular:400:normal,400 italic:400:italic,700 bold regular:700:normal,700 bold italic:700:italic"},{"font_family":"Merriweather","font_styles":"300,300italic,regular,italic,700,700italic,900,900italic","font_types":"300 light regular:300:normal,300 light italic:300:italic,400 regular:400:normal,400 italic:400:italic,700 bold regular:700:normal,700 bold italic:700:italic,900 bold regular:900:normal,900 bold italic:900:italic"},{"font_family":"Titillium Web","font_styles":"200,200italic,300,300italic,regular,italic,600,600italic,700,700italic,900","font_types":"200 light regular:200:normal,200 light italic:200:italic,300 light regular:300:normal,300 light italic:300:italic,400 regular:400:normal,400 italic:400:italic,600 bold regular:600:normal,600 bold italic:600:italic,700 bold regular:700:normal,700 bold italic:700:italic,900 bold regular:900:normal"},{"font_family":"Noto Sans","font_styles":"regular,italic,700,700italic","font_types":"400 regular:400:normal,400 italic:400:italic,700 bold regular:700:normal,700 bold italic:700:italic"},{"font_family":"PT Serif","font_styles":"regular,italic,700,700italic","font_types":"400 regular:400:normal,400 italic:400:italic,700 bold regular:700:normal,700 bold italic:700:italic"},{"font_family":"Francois One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Indie Flower","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Shadows Into Light","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Cabin","font_styles":"regular,italic,500,500italic,600,600italic,700,700italic","font_types":"400 regular:400:normal,400 italic:400:italic,500 bold regular:500:normal,500 bold italic:500:italic,600 bold regular:600:normal,600 bold italic:600:italic,700 bold regular:700:normal,700 bold italic:700:italic"},{"font_family":"Fjalla One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Abel","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Play","font_styles":"regular,700","font_types":"400 regular:400:normal,700 bold regular:700:normal"},{"font_family":"Nunito","font_styles":"300,regular,700","font_types":"300 light regular:300:normal,400 regular:400:normal,700 bold regular:700:normal"},{"font_family":"Inconsolata","font_styles":"regular,700","font_types":"400 regular:400:normal,700 bold regular:700:normal"},{"font_family":"Playfair Display","font_styles":"regular,italic,700,700italic,900,900italic","font_types":"400 regular:400:normal,400 italic:400:italic,700 bold regular:700:normal,700 bold italic:700:italic,900 bold regular:900:normal,900 bold italic:900:italic"},{"font_family":"Ubuntu Condensed","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Signika","font_styles":"300,regular,600,700","font_types":"300 light regular:300:normal,400 regular:400:normal,600 bold regular:600:normal,700 bold regular:700:normal"},{"font_family":"Libre Baskerville","font_styles":"regular,italic,700","font_types":"400 regular:400:normal,400 italic:400:italic,700 bold regular:700:normal"},{"font_family":"Gloria Hallelujah","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Poiret One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Muli","font_styles":"300,300italic,regular,italic","font_types":"300 light regular:300:normal,300 light italic:300:italic,400 regular:400:normal,400 italic:400:italic"},{"font_family":"Rokkitt","font_styles":"regular,700","font_types":"400 regular:400:normal,700 bold regular:700:normal"},{"font_family":"Anton","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Cuprum","font_styles":"regular,italic,700,700italic","font_types":"400 regular:400:normal,400 italic:400:italic,700 bold regular:700:normal,700 bold italic:700:italic"},{"font_family":"Varela Round","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Archivo Narrow","font_styles":"regular,italic,700,700italic","font_types":"400 regular:400:normal,400 italic:400:italic,700 bold regular:700:normal,700 bold italic:700:italic"},{"font_family":"Maven Pro","font_styles":"regular,500,700,900","font_types":"400 regular:400:normal,500 bold regular:500:normal,700 bold regular:700:normal,900 bold regular:900:normal"},{"font_family":"Josefin Sans","font_styles":"100,100italic,300,300italic,regular,italic,600,600italic,700,700italic","font_types":"100 light regular:100:normal,100 light italic:100:italic,300 light regular:300:normal,300 light italic:300:italic,400 regular:400:normal,400 italic:400:italic,600 bold regular:600:normal,600 bold italic:600:italic,700 bold regular:700:normal,700 bold italic:700:italic"},{"font_family":"Pacifico","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Bree Serif","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Merriweather Sans","font_styles":"300,300italic,regular,italic,700,700italic,800,800italic","font_types":"300 light regular:300:normal,300 light italic:300:italic,400 regular:400:normal,400 italic:400:italic,700 bold regular:700:normal,700 bold italic:700:italic,800 bold regular:800:normal,800 bold italic:800:italic"},{"font_family":"Asap","font_styles":"regular,italic,700,700italic","font_types":"400 regular:400:normal,400 italic:400:italic,700 bold regular:700:normal,700 bold italic:700:italic"},{"font_family":"Vollkorn","font_styles":"regular,italic,700,700italic","font_types":"400 regular:400:normal,400 italic:400:italic,700 bold regular:700:normal,700 bold italic:700:italic"},{"font_family":"Karla","font_styles":"regular,italic,700,700italic","font_types":"400 regular:400:normal,400 italic:400:italic,700 bold regular:700:normal,700 bold italic:700:italic"},{"font_family":"Droid Sans Mono","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Dancing Script","font_styles":"regular,700","font_types":"400 regular:400:normal,700 bold regular:700:normal"},{"font_family":"Quicksand","font_styles":"300,regular,700","font_types":"300 light regular:300:normal,400 regular:400:normal,700 bold regular:700:normal"},{"font_family":"Crafty Girls","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Hammersmith One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Ubuntu Mono","font_styles":"regular,italic,700,700italic","font_types":"400 regular:400:normal,400 italic:400:italic,700 bold regular:700:normal,700 bold italic:700:italic"},{"font_family":"News Cycle","font_styles":"regular,700","font_types":"400 regular:400:normal,700 bold regular:700:normal"},{"font_family":"Cabin Condensed","font_styles":"regular,500,600,700","font_types":"400 regular:400:normal,500 bold regular:500:normal,600 bold regular:600:normal,700 bold regular:700:normal"},{"font_family":"Pathway Gothic One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"PT Sans Caption","font_styles":"regular,700","font_types":"400 regular:400:normal,700 bold regular:700:normal"},{"font_family":"Noto Serif","font_styles":"regular,italic,700,700italic","font_types":"400 regular:400:normal,400 italic:400:italic,700 bold regular:700:normal,700 bold italic:700:italic"},{"font_family":"Exo","font_styles":"100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic","font_types":"100 light regular:100:normal,100 light italic:100:italic,200 light regular:200:normal,200 light italic:200:italic,300 light regular:300:normal,300 light italic:300:italic,400 regular:400:normal,400 italic:400:italic,500 bold regular:500:normal,500 bold italic:500:italic,600 bold regular:600:normal,600 bold italic:600:italic,700 bold regular:700:normal,700 bold italic:700:italic,800 bold regular:800:normal,800 bold italic:800:italic,900 bold regular:900:normal,900 bold italic:900:italic"},{"font_family":"Alegreya","font_styles":"regular,italic,700,700italic,900,900italic","font_types":"400 regular:400:normal,400 italic:400:italic,700 bold regular:700:normal,700 bold italic:700:italic,900 bold regular:900:normal,900 bold italic:900:italic"},{"font_family":"Questrial","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Coming Soon","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Quattrocento Sans","font_styles":"regular,italic,700,700italic","font_types":"400 regular:400:normal,400 italic:400:italic,700 bold regular:700:normal,700 bold italic:700:italic"},{"font_family":"Special Elite","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Nobile","font_styles":"regular,italic,700,700italic","font_types":"400 regular:400:normal,400 italic:400:italic,700 bold regular:700:normal,700 bold italic:700:italic"},{"font_family":"Monda","font_styles":"regular,700","font_types":"400 regular:400:normal,700 bold regular:700:normal"},{"font_family":"Pontano Sans","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Ropa Sans","font_styles":"regular,italic","font_types":"400 regular:400:normal,400 italic:400:italic"},{"font_family":"Gudea","font_styles":"regular,italic,700","font_types":"400 regular:400:normal,400 italic:400:italic,700 bold regular:700:normal"},{"font_family":"Changa One","font_styles":"regular,italic","font_types":"400 regular:400:normal,400 italic:400:italic"},{"font_family":"Armata","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Noticia Text","font_styles":"regular,italic,700,700italic","font_types":"400 regular:400:normal,400 italic:400:italic,700 bold regular:700:normal,700 bold italic:700:italic"},{"font_family":"Istok Web","font_styles":"regular,italic,700,700italic","font_types":"400 regular:400:normal,400 italic:400:italic,700 bold regular:700:normal,700 bold italic:700:italic"},{"font_family":"Kreon","font_styles":"300,regular,700","font_types":"300 light regular:300:normal,400 regular:400:normal,700 bold regular:700:normal"},{"font_family":"Old Standard TT","font_styles":"regular,italic,700","font_types":"400 regular:400:normal,400 italic:400:italic,700 bold regular:700:normal"},{"font_family":"Courgette","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Paytone One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Philosopher","font_styles":"regular,italic,700,700italic","font_types":"400 regular:400:normal,400 italic:400:italic,700 bold regular:700:normal,700 bold italic:700:italic"},{"font_family":"Orbitron","font_styles":"regular,500,700,900","font_types":"400 regular:400:normal,500 bold regular:500:normal,700 bold regular:700:normal,900 bold regular:900:normal"},{"font_family":"Bubblegum Sans","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Rambla","font_styles":"regular,italic,700,700italic","font_types":"400 regular:400:normal,400 italic:400:italic,700 bold regular:700:normal,700 bold italic:700:italic"},{"font_family":"Crete Round","font_styles":"regular,italic","font_types":"400 regular:400:normal,400 italic:400:italic"},{"font_family":"Josefin Slab","font_styles":"100,100italic,300,300italic,regular,italic,600,600italic,700,700italic","font_types":"100 light regular:100:normal,100 light italic:100:italic,300 light regular:300:normal,300 light italic:300:italic,400 regular:400:normal,400 italic:400:italic,600 bold regular:600:normal,600 bold italic:600:italic,700 bold regular:700:normal,700 bold italic:700:italic"},{"font_family":"Playball","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Chewy","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Exo 2","font_styles":"100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic","font_types":"100 light regular:100:normal,100 light italic:100:italic,200 light regular:200:normal,200 light italic:200:italic,300 light regular:300:normal,300 light italic:300:italic,400 regular:400:normal,400 italic:400:italic,500 bold regular:500:normal,500 bold italic:500:italic,600 bold regular:600:normal,600 bold italic:600:italic,700 bold regular:700:normal,700 bold italic:700:italic,800 bold regular:800:normal,800 bold italic:800:italic,900 bold regular:900:normal,900 bold italic:900:italic"},{"font_family":"Crimson Text","font_styles":"regular,italic,600,600italic,700,700italic","font_types":"400 regular:400:normal,400 italic:400:italic,600 bold regular:600:normal,600 bold italic:600:italic,700 bold regular:700:normal,700 bold italic:700:italic"},{"font_family":"Squada One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Permanent Marker","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Voltaire","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Montserrat Alternates","font_styles":"regular,700","font_types":"400 regular:400:normal,700 bold regular:700:normal"},{"font_family":"Cinzel","font_styles":"regular,700,900","font_types":"400 regular:400:normal,700 bold regular:700:normal,900 bold regular:900:normal"},{"font_family":"Rock Salt","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Sanchez","font_styles":"regular,italic","font_types":"400 regular:400:normal,400 italic:400:italic"},{"font_family":"Lobster Two","font_styles":"regular,italic,700,700italic","font_types":"400 regular:400:normal,400 italic:400:italic,700 bold regular:700:normal,700 bold italic:700:italic"},{"font_family":"Bangers","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Patua One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Source Code Pro","font_styles":"200,300,regular,500,600,700,900","font_types":"200 light regular:200:normal,300 light regular:300:normal,400 regular:400:normal,500 bold regular:500:normal,600 bold regular:600:normal,700 bold regular:700:normal,900 bold regular:900:normal"},{"font_family":"Cantarell","font_styles":"regular,italic,700,700italic","font_types":"400 regular:400:normal,400 italic:400:italic,700 bold regular:700:normal,700 bold italic:700:italic"},{"font_family":"Luckiest Guy","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Shadows Into Light Two","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Lusitana","font_styles":"regular,700","font_types":"400 regular:400:normal,700 bold regular:700:normal"},{"font_family":"Righteous","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Limelight","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Varela","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Passion One","font_styles":"regular,700,900","font_types":"400 regular:400:normal,700 bold regular:700:normal,900 bold regular:900:normal"},{"font_family":"Audiowide","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Economica","font_styles":"regular,italic,700,700italic","font_types":"400 regular:400:normal,400 italic:400:italic,700 bold regular:700:normal,700 bold italic:700:italic"},{"font_family":"Amatic SC","font_styles":"regular,700","font_types":"400 regular:400:normal,700 bold regular:700:normal"},{"font_family":"Lemon","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Sintony","font_styles":"regular,700","font_types":"400 regular:400:normal,700 bold regular:700:normal"},{"font_family":"Tinos","font_styles":"regular,italic,700,700italic","font_types":"400 regular:400:normal,400 italic:400:italic,700 bold regular:700:normal,700 bold italic:700:italic"},{"font_family":"Marck Script","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"BenchNine","font_styles":"300,regular,700","font_types":"300 light regular:300:normal,400 regular:400:normal,700 bold regular:700:normal"},{"font_family":"Amaranth","font_styles":"regular,italic,700,700italic","font_types":"400 regular:400:normal,400 italic:400:italic,700 bold regular:700:normal,700 bold italic:700:italic"},{"font_family":"Architects Daughter","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Black Ops One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Fredoka One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Reenie Beanie","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Comfortaa","font_styles":"300,regular,700","font_types":"300 light regular:300:normal,400 regular:400:normal,700 bold regular:700:normal"},{"font_family":"EB Garamond","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Yellowtail","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Carrois Gothic","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Unkempt","font_styles":"regular,700","font_types":"400 regular:400:normal,700 bold regular:700:normal"},{"font_family":"Antic Slab","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Calligraffitti","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Satisfy","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Bevan","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Glegoo","font_styles":"regular,700","font_types":"400 regular:400:normal,700 bold regular:700:normal"},{"font_family":"Marvel","font_styles":"regular,italic,700,700italic","font_types":"400 regular:400:normal,400 italic:400:italic,700 bold regular:700:normal,700 bold italic:700:italic"},{"font_family":"Cardo","font_styles":"regular,italic,700","font_types":"400 regular:400:normal,400 italic:400:italic,700 bold regular:700:normal"},{"font_family":"Quattrocento","font_styles":"regular,700","font_types":"400 regular:400:normal,700 bold regular:700:normal"},{"font_family":"Handlee","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Molengo","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Vidaloka","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Didact Gothic","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Pinyon Script","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Niconne","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Waiting for the Sunrise","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Enriqueta","font_styles":"regular,700","font_types":"400 regular:400:normal,700 bold regular:700:normal"},{"font_family":"Sorts Mill Goudy","font_styles":"regular,italic","font_types":"400 regular:400:normal,400 italic:400:italic"},{"font_family":"Actor","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Cherry Cream Soda","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Allerta","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Oleo Script","font_styles":"regular,700","font_types":"400 regular:400:normal,700 bold regular:700:normal"},{"font_family":"Patrick Hand","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Playfair Display SC","font_styles":"regular,italic,700,700italic,900,900italic","font_types":"400 regular:400:normal,400 italic:400:italic,700 bold regular:700:normal,700 bold italic:700:italic,900 bold regular:900:normal,900 bold italic:900:italic"},{"font_family":"Covered By Your Grace","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Contrail One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Gentium Book Basic","font_styles":"regular,italic,700,700italic","font_types":"400 regular:400:normal,400 italic:400:italic,700 bold regular:700:normal,700 bold italic:700:italic"},{"font_family":"Fugaz One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Coda","font_styles":"regular,800","font_types":"400 regular:400:normal,800 bold regular:800:normal"},{"font_family":"Archivo Black","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Alfa Slab One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Carme","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Jockey One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Domine","font_styles":"regular,700","font_types":"400 regular:400:normal,700 bold regular:700:normal"},{"font_family":"Viga","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Tangerine","font_styles":"regular,700","font_types":"400 regular:400:normal,700 bold regular:700:normal"},{"font_family":"Doppio One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Syncopate","font_styles":"regular,700","font_types":"400 regular:400:normal,700 bold regular:700:normal"},{"font_family":"Sansita One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Signika Negative","font_styles":"300,regular,600,700","font_types":"300 light regular:300:normal,400 regular:400:normal,600 bold regular:600:normal,700 bold regular:700:normal"},{"font_family":"Kaushan Script","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Jura","font_styles":"300,regular,500,600","font_types":"300 light regular:300:normal,400 regular:400:normal,500 bold regular:500:normal,600 bold regular:600:normal"},{"font_family":"Chivo","font_styles":"regular,italic,900,900italic","font_types":"400 regular:400:normal,400 italic:400:italic,900 bold regular:900:normal,900 bold italic:900:italic"},{"font_family":"Rancho","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Berkshire Swash","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Candal","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Michroma","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Marmelad","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Fauna One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Copse","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Kameron","font_styles":"regular,700","font_types":"400 regular:400:normal,700 bold regular:700:normal"},{"font_family":"Goudy Bookletter 1911","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Scada","font_styles":"regular,italic,700,700italic","font_types":"400 regular:400:normal,400 italic:400:italic,700 bold regular:700:normal,700 bold italic:700:italic"},{"font_family":"Sigmar One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Gochi Hand","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Neuton","font_styles":"200,300,regular,italic,700,800","font_types":"200 light regular:200:normal,300 light regular:300:normal,400 regular:400:normal,400 italic:400:italic,700 bold regular:700:normal,800 bold regular:800:normal"},{"font_family":"Aldrich","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Lily Script One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Walter Turncoat","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"ABeeZee","font_styles":"regular,italic","font_types":"400 regular:400:normal,400 italic:400:italic"},{"font_family":"Damion","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Just Another Hand","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Nova Square","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Abril Fatface","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Great Vibes","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Nixie One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Cutive","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Schoolbell","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Electrolize","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Neucha","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Strait","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Alegreya Sans","font_styles":"100,100italic,300,300italic,regular,italic,500,500italic,700,700italic,800,800italic,900,900italic","font_types":"100 light regular:100:normal,100 light italic:100:italic,300 light regular:300:normal,300 light italic:300:italic,400 regular:400:normal,400 italic:400:italic,500 bold regular:500:normal,500 bold italic:500:italic,700 bold regular:700:normal,700 bold italic:700:italic,800 bold regular:800:normal,800 bold italic:800:italic,900 bold regular:900:normal,900 bold italic:900:italic"},{"font_family":"Just Me Again Down Here","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Telex","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Belleza","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Russo One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Nothing You Could Do","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Bad Script","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Spinnaker","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Ruda","font_styles":"regular,700,900","font_types":"400 regular:400:normal,700 bold regular:700:normal,900 bold regular:900:normal"},{"font_family":"Julius Sans One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Judson","font_styles":"regular,italic,700","font_types":"400 regular:400:normal,400 italic:400:italic,700 bold regular:700:normal"},{"font_family":"Rochester","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Tienne","font_styles":"regular,700,900","font_types":"400 regular:400:normal,700 bold regular:700:normal,900 bold regular:900:normal"},{"font_family":"Aclonica","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Coustard","font_styles":"regular,900","font_types":"400 regular:400:normal,900 bold regular:900:normal"},{"font_family":"Rosario","font_styles":"regular,italic,700,700italic","font_types":"400 regular:400:normal,400 italic:400:italic,700 bold regular:700:normal,700 bold italic:700:italic"},{"font_family":"Poller One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Allerta Stencil","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Racing Sans One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Prata","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Mako","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Cantata One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Homemade Apple","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Overlock","font_styles":"regular,italic,700,700italic,900,900italic","font_types":"400 regular:400:normal,400 italic:400:italic,700 bold regular:700:normal,700 bold italic:700:italic,900 bold regular:900:normal,900 bold italic:900:italic"},{"font_family":"Share","font_styles":"regular,italic,700,700italic","font_types":"400 regular:400:normal,400 italic:400:italic,700 bold regular:700:normal,700 bold italic:700:italic"},{"font_family":"Gentium Basic","font_styles":"regular,italic,700,700italic","font_types":"400 regular:400:normal,400 italic:400:italic,700 bold regular:700:normal,700 bold italic:700:italic"},{"font_family":"Volkhov","font_styles":"regular,italic,700,700italic","font_types":"400 regular:400:normal,400 italic:400:italic,700 bold regular:700:normal,700 bold italic:700:italic"},{"font_family":"PT Serif Caption","font_styles":"regular,italic","font_types":"400 regular:400:normal,400 italic:400:italic"},{"font_family":"Duru Sans","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Sacramento","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Boogaloo","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Six Caps","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Cookie","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Arapey","font_styles":"regular,italic","font_types":"400 regular:400:normal,400 italic:400:italic"},{"font_family":"Orienta","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Days One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Radley","font_styles":"regular,italic","font_types":"400 regular:400:normal,400 italic:400:italic"},{"font_family":"Spirax","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Fontdiner Swanky","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Iceland","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Frijole","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Denk One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Alegreya Sans SC","font_styles":"100,100italic,300,300italic,regular,italic,500,500italic,700,700italic,800,800italic,900,900italic","font_types":"100 light regular:100:normal,100 light italic:100:italic,300 light regular:300:normal,300 light italic:300:italic,400 regular:400:normal,400 italic:400:italic,500 bold regular:500:normal,500 bold italic:500:italic,700 bold regular:700:normal,700 bold italic:700:italic,800 bold regular:800:normal,800 bold italic:800:italic,900 bold regular:900:normal,900 bold italic:900:italic"},{"font_family":"Inder","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Arbutus Slab","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Advent Pro","font_styles":"100,200,300,regular,500,600,700","font_types":"100 light regular:100:normal,200 light regular:200:normal,300 light regular:300:normal,400 regular:400:normal,500 bold regular:500:normal,600 bold regular:600:normal,700 bold regular:700:normal"},{"font_family":"Caudex","font_styles":"regular,italic,700,700italic","font_types":"400 regular:400:normal,400 italic:400:italic,700 bold regular:700:normal,700 bold italic:700:italic"},{"font_family":"Alice","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Puritan","font_styles":"regular,italic,700,700italic","font_types":"400 regular:400:normal,400 italic:400:italic,700 bold regular:700:normal,700 bold italic:700:italic"},{"font_family":"Tauri","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Alex Brush","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Griffy","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Alef","font_styles":"regular,700","font_types":"400 regular:400:normal,700 bold regular:700:normal"},{"font_family":"Love Ya Like A Sister","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Trocchi","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Convergence","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Fredericka the Great","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"The Girl Next Door","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Cabin Sketch","font_styles":"regular,700","font_types":"400 regular:400:normal,700 bold regular:700:normal"},{"font_family":"Merienda One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Homenaje","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Leckerli One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Parisienne","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Anaheim","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Quantico","font_styles":"regular,italic,700,700italic","font_types":"400 regular:400:normal,400 italic:400:italic,700 bold regular:700:normal,700 bold italic:700:italic"},{"font_family":"Alike","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Crushed","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Slackey","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Average Sans","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Petit Formal Script","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Lekton","font_styles":"regular,italic,700","font_types":"400 regular:400:normal,400 italic:400:italic,700 bold regular:700:normal"},{"font_family":"Kavoon","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Basic","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Gruppo","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Give You Glory","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Fanwood Text","font_styles":"regular,italic","font_types":"400 regular:400:normal,400 italic:400:italic"},{"font_family":"Yesteryear","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Metrophobic","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Anonymous Pro","font_styles":"regular,italic,700,700italic","font_types":"400 regular:400:normal,400 italic:400:italic,700 bold regular:700:normal,700 bold italic:700:italic"},{"font_family":"Cousine","font_styles":"regular,italic,700,700italic","font_types":"400 regular:400:normal,400 italic:400:italic,700 bold regular:700:normal,700 bold italic:700:italic"},{"font_family":"Ultra","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Tenor Sans","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Pompiere","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Adamina","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Lustria","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Forum","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Kranky","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Gafata","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Allura","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Brawler","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Delius","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Magra","font_styles":"regular,700","font_types":"400 regular:400:normal,700 bold regular:700:normal"},{"font_family":"Acme","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"IM Fell English","font_styles":"regular,italic","font_types":"400 regular:400:normal,400 italic:400:italic"},{"font_family":"Loved by the King","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Chau Philomene One","font_styles":"regular,italic","font_types":"400 regular:400:normal,400 italic:400:italic"},{"font_family":"Metamorphous","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Kotta One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Bentham","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Coda Caption","font_styles":"800","font_types":"800 bold regular:800:normal"},{"font_family":"Cinzel Decorative","font_styles":"regular,700,900","font_types":"400 regular:400:normal,700 bold regular:700:normal,900 bold regular:900:normal"},{"font_family":"Short Stack","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Lilita One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Ovo","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"La Belle Aurore","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Podkova","font_styles":"regular,700","font_types":"400 regular:400:normal,700 bold regular:700:normal"},{"font_family":"Oranienbaum","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Grand Hotel","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Shanti","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Imprima","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Codystar","font_styles":"300,regular","font_types":"300 light regular:300:normal,400 regular:400:normal"},{"font_family":"Corben","font_styles":"regular,700","font_types":"400 regular:400:normal,700 bold regular:700:normal"},{"font_family":"Allan","font_styles":"regular,700","font_types":"400 regular:400:normal,700 bold regular:700:normal"},{"font_family":"Sancreek","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Headland One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Carrois Gothic SC","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Andika","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Kristi","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Marcellus SC","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Englebert","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Montez","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Averia Sans Libre","font_styles":"300,300italic,regular,italic,700,700italic","font_types":"300 light regular:300:normal,300 light italic:300:italic,400 regular:400:normal,400 italic:400:italic,700 bold regular:700:normal,700 bold italic:700:italic"},{"font_family":"Quando","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Wendy One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Sue Ellen Francisco","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"IM Fell DW Pica","font_styles":"regular,italic","font_types":"400 regular:400:normal,400 italic:400:italic"},{"font_family":"Annie Use Your Telescope","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Alegreya SC","font_styles":"regular,italic,700,700italic,900,900italic","font_types":"400 regular:400:normal,400 italic:400:italic,700 bold regular:700:normal,700 bold italic:700:italic,900 bold regular:900:normal,900 bold italic:900:italic"},{"font_family":"Prosto One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Carter One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Patrick Hand SC","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Cantora One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Wire One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Capriola","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Mountains of Christmas","font_styles":"regular,700","font_types":"400 regular:400:normal,700 bold regular:700:normal"},{"font_family":"Kelly Slab","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Federo","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Mouse Memoirs","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Salsa","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Over the Rainbow","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Antic","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Andada","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Merienda","font_styles":"regular,700","font_types":"400 regular:400:normal,700 bold regular:700:normal"},{"font_family":"Rammetto One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Dawning of a New Day","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Delius Swash Caps","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Megrim","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Stardos Stencil","font_styles":"regular,700","font_types":"400 regular:400:normal,700 bold regular:700:normal"},{"font_family":"Skranji","font_styles":"regular,700","font_types":"400 regular:400:normal,700 bold regular:700:normal"},{"font_family":"Maiden Orange","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"GFS Didot","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Baumans","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Gilda Display","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Monoton","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"UnifrakturMaguntia","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Tulpen One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Happy Monkey","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Shojumaru","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Yeseva One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Press Start 2P","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Port Lligat Slab","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Kite One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"VT323","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Bowlby One SC","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Rufina","font_styles":"regular,700","font_types":"400 regular:400:normal,700 bold regular:700:normal"},{"font_family":"Cedarville Cursive","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Poly","font_styles":"regular,italic","font_types":"400 regular:400:normal,400 italic:400:italic"},{"font_family":"Freckle Face","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Share Tech","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Geo","font_styles":"regular,italic","font_types":"400 regular:400:normal,400 italic:400:italic"},{"font_family":"Italianno","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Marcellus","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Chelsea Market","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Wallpoet","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Expletus Sans","font_styles":"regular,italic,500,500italic,600,600italic,700,700italic","font_types":"400 regular:400:normal,400 italic:400:italic,500 bold regular:500:normal,500 bold italic:500:italic,600 bold regular:600:normal,600 bold italic:600:italic,700 bold regular:700:normal,700 bold italic:700:italic"},{"font_family":"Revalia","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Oregano","font_styles":"regular,italic","font_types":"400 regular:400:normal,400 italic:400:italic"},{"font_family":"Graduate","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Rationale","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Arizonia","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"IM Fell English SC","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Finger Paint","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"IM Fell DW Pica SC","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Vibur","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Norican","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Nova Mono","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Ceviche One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Meddon","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Bowlby One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Miltonian Tattoo","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Average","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Galindo","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Sunshiney","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"IM Fell Double Pica","font_styles":"regular,italic","font_types":"400 regular:400:normal,400 italic:400:italic"},{"font_family":"Simonetta","font_styles":"regular,italic,900,900italic","font_types":"400 regular:400:normal,400 italic:400:italic,900 bold regular:900:normal,900 bold italic:900:italic"},{"font_family":"Sniglet","font_styles":"regular,800","font_types":"400 regular:400:normal,800 bold regular:800:normal"},{"font_family":"Mate SC","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Redressed","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"PT Mono","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"IM Fell French Canon","font_styles":"regular,italic","font_types":"400 regular:400:normal,400 italic:400:italic"},{"font_family":"Vast Shadow","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Clicker Script","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Voces","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Delius Unicase","font_styles":"regular,700","font_types":"400 regular:400:normal,700 bold regular:700:normal"},{"font_family":"Unna","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Holtwood One SC","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Hanuman","font_styles":"regular,700","font_types":"400 regular:400:normal,700 bold regular:700:normal"},{"font_family":"Concert One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Dorsa","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Sofia","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Zeyada","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Nova Round","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Numans","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Fenix","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Sofadi One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Inika","font_styles":"regular,700","font_types":"400 regular:400:normal,700 bold regular:700:normal"},{"font_family":"UnifrakturCook","font_styles":"700","font_types":"700 bold regular:700:normal"},{"font_family":"Londrina Solid","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Mr De Haviland","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"IM Fell Great Primer SC","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Quintessential","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"IM Fell French Canon SC","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Ruslan Display","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Cutive Mono","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Gabriela","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Snippet","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Fjord One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"MedievalSharp","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Buda","font_styles":"300","font_types":"300 light regular:300:normal"},{"font_family":"Euphoria Script","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Henny Penny","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Linden Hill","font_styles":"regular,italic","font_types":"400 regular:400:normal,400 italic:400:italic"},{"font_family":"IM Fell Great Primer","font_styles":"regular,italic","font_types":"400 regular:400:normal,400 italic:400:italic"},{"font_family":"Belgrano","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Amethysta","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Artifika","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Oleo Script Swash Caps","font_styles":"regular,700","font_types":"400 regular:400:normal,700 bold regular:700:normal"},{"font_family":"Julee","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Qwigley","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Swanky and Moo Moo","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Gravitas One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Donegal One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Unica One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Flamenco","font_styles":"300,regular","font_types":"300 light regular:300:normal,400 regular:400:normal"},{"font_family":"Petrona","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Engagement","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Life Savers","font_styles":"regular,700","font_types":"400 regular:400:normal,700 bold regular:700:normal"},{"font_family":"Knewave","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Balthazar","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Goblin One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Monofett","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Mystery Quest","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Habibi","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Irish Grover","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"League Script","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Overlock SC","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Astloch","font_styles":"regular,700","font_types":"400 regular:400:normal,700 bold regular:700:normal"},{"font_family":"Aladin","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Sail","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Nova Slim","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Paprika","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Junge","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Cambo","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Oldenburg","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Buenard","font_styles":"regular,700","font_types":"400 regular:400:normal,700 bold regular:700:normal"},{"font_family":"Mate","font_styles":"regular,italic","font_types":"400 regular:400:normal,400 italic:400:italic"},{"font_family":"Kenia","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Bilbo Swash Caps","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Prociono","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Geostar Fill","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Alike Angular","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Trade Winds","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Dynalight","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Nova Script","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"IM Fell Double Pica SC","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Nova Flat","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Smythe","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Bigshot One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Ledger","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Rouge Script","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Medula One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Iceberg","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Mr Dafoe","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Modern Antiqua","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Cagliostro","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Seaweed Script","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Khmer","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Jacques Francois","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Lancelot","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Nova Oval","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Suwannaphum","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Asset","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Smokum","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Passero One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Esteban","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Amarante","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Creepster","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Rye","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Milonga","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Keania One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Geostar","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Port Lligat Sans","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Atomic Age","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Stoke","font_styles":"300,regular","font_types":"300 light regular:300:normal,400 regular:400:normal"},{"font_family":"Federant","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Rosarivo","font_styles":"regular,italic","font_types":"400 regular:400:normal,400 italic:400:italic"},{"font_family":"Aubrey","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Miltonian","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Nova Cut","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Offside","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Condiment","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Lovers Quarrel","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Hind","font_styles":"300,regular,500,600,700","font_types":"300 light regular:300:normal,400 regular:400:normal,500 bold regular:500:normal,600 bold regular:600:normal,700 bold regular:700:normal"},{"font_family":"Cherry Swash","font_styles":"regular,700","font_types":"400 regular:400:normal,700 bold regular:700:normal"},{"font_family":"Trochut","font_styles":"regular,italic,700","font_types":"400 regular:400:normal,400 italic:400:italic,700 bold regular:700:normal"},{"font_family":"Supermercado One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Ek Mukta","font_styles":"200,300,regular,500,600,700,800","font_types":"200 light regular:200:normal,300 light regular:300:normal,400 regular:400:normal,500 bold regular:500:normal,600 bold regular:600:normal,700 bold regular:700:normal,800 bold regular:800:normal"},{"font_family":"Stint Ultra Condensed","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Galdeano","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Molle","font_styles":"italic","font_types":"400 italic:400:italic"},{"font_family":"Sonsie One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Ruluko","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Raleway Dots","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Text Me One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Caesar Dressing","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Share Tech Mono","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Chango","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Rum Raisin","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Fondamento","font_styles":"regular,italic","font_types":"400 regular:400:normal,400 italic:400:italic"},{"font_family":"Bilbo","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Monsieur La Doulaise","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Della Respira","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"GFS Neohellenic","font_styles":"regular,italic,700,700italic","font_types":"400 regular:400:normal,400 italic:400:italic,700 bold regular:700:normal,700 bold italic:700:italic"},{"font_family":"Seymour One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Aguafina Script","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Pirata One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Miniver","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Fira Sans","font_styles":"300,300italic,regular,italic,500,500italic,700,700italic","font_types":"300 light regular:300:normal,300 light italic:300:italic,400 regular:400:normal,400 italic:400:italic,500 bold regular:500:normal,500 bold italic:500:italic,700 bold regular:700:normal,700 bold italic:700:italic"},{"font_family":"Ruthie","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Ranchers","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Averia Libre","font_styles":"300,300italic,regular,italic,700,700italic","font_types":"300 light regular:300:normal,300 light italic:300:italic,400 regular:400:normal,400 italic:400:italic,700 bold regular:700:normal,700 bold italic:700:italic"},{"font_family":"Stint Ultra Expanded","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Titan One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"McLaren","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Jolly Lodger","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Krona One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Snowburst One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Londrina Outline","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Oxygen Mono","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Devonshire","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Montaga","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Montserrat Subrayada","font_styles":"regular,700","font_types":"400 regular:400:normal,700 bold regular:700:normal"},{"font_family":"Ribeye Marrow","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Akronim","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Fresca","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Nokora","font_styles":"regular,700","font_types":"400 regular:400:normal,700 bold regular:700:normal"},{"font_family":"Trykker","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Jacques Francois Shadow","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Averia Serif Libre","font_styles":"300,300italic,regular,italic,700,700italic","font_types":"300 light regular:300:normal,300 light italic:300:italic,400 regular:400:normal,400 italic:400:italic,700 bold regular:700:normal,700 bold italic:700:italic"},{"font_family":"Joti One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Original Surfer","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Mrs Saint Delafield","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Autour One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Londrina Shadow","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Nosifer","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Asul","font_styles":"regular,700","font_types":"400 regular:400:normal,700 bold regular:700:normal"},{"font_family":"Freehand","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Teko","font_styles":"300,regular,500,600,700","font_types":"300 light regular:300:normal,400 regular:400:normal,500 bold regular:500:normal,600 bold regular:600:normal,700 bold regular:700:normal"},{"font_family":"Italiana","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Wellfleet","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Marko One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Antic Didone","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Kalam","font_styles":"300,regular,700","font_types":"300 light regular:300:normal,400 regular:400:normal,700 bold regular:700:normal"},{"font_family":"Elsie Swash Caps","font_styles":"regular,900","font_types":"400 regular:400:normal,900 bold regular:900:normal"},{"font_family":"Piedra","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Germania One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Chela One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Eagle Lake","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Gorditas","font_styles":"regular,700","font_types":"400 regular:400:normal,700 bold regular:700:normal"},{"font_family":"Glass Antiqua","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Emblema One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Stalemate","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Spicy Rice","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Romanesco","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Dangrek","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Odor Mean Chey","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Croissant One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Ewert","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Almendra","font_styles":"regular,italic,700,700italic","font_types":"400 regular:400:normal,400 italic:400:italic,700 bold regular:700:normal,700 bold italic:700:italic"},{"font_family":"Sarina","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Kdam Thmor","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Elsie","font_styles":"regular,900","font_types":"400 regular:400:normal,900 bold regular:900:normal"},{"font_family":"Butterfly Kids","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Princess Sofia","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Battambang","font_styles":"regular,700","font_types":"400 regular:400:normal,700 bold regular:700:normal"},{"font_family":"Mrs Sheppards","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Moulpali","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Angkor","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Peralta","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Emilys Candy","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Diplomata","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Kantumruy","font_styles":"300,regular,700","font_types":"300 light regular:300:normal,400 regular:400:normal,700 bold regular:700:normal"},{"font_family":"Londrina Sketch","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Herr Von Muellerhoff","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Bubbler One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Bigelow Rules","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Sevillana","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Eater","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Combo","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Margarine","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Ribeye","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Faster One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Purple Purse","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Chicle","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Felipa","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Sirin Stencil","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"New Rocker","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Source Serif Pro","font_styles":"regular,600,700","font_types":"400 regular:400:normal,600 bold regular:600:normal,700 bold regular:700:normal"},{"font_family":"Risque","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Mr Bedfort","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Miss Fajardose","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Dr Sugiyama","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Underdog","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Meie Script","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Rajdhani","font_styles":"300,regular,500,600,700","font_types":"300 light regular:300:normal,400 regular:400:normal,500 bold regular:500:normal,600 bold regular:600:normal,700 bold regular:700:normal"},{"font_family":"Macondo Swash Caps","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Vampiro One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Content","font_styles":"regular,700","font_types":"400 regular:400:normal,700 bold regular:700:normal"},{"font_family":"Rubik One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Bokor","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Fascinate","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Metal Mania","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Moul","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Taprom","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Koulen","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Uncial Antiqua","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Diplomata SC","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Butcherman","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Averia Gruesa Libre","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Unlock","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Stalinist One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Arbutus","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Ruge Boogie","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Jim Nightshade","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Flavors","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Macondo","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Preahvihear","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Fira Mono","font_styles":"regular,700","font_types":"400 regular:400:normal,700 bold regular:700:normal"},{"font_family":"Almendra SC","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Erica One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Metal","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Fasthand","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Bayon","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Karma","font_styles":"300,regular,500,600,700","font_types":"300 light regular:300:normal,400 regular:400:normal,500 bold regular:500:normal,600 bold regular:600:normal,700 bold regular:700:normal"},{"font_family":"Vesper Libre","font_styles":"regular,500,700,900","font_types":"400 regular:400:normal,500 bold regular:500:normal,700 bold regular:700:normal,900 bold regular:900:normal"},{"font_family":"Khand","font_styles":"300,regular,500,600,700","font_types":"300 light regular:300:normal,400 regular:400:normal,500 bold regular:500:normal,600 bold regular:600:normal,700 bold regular:700:normal"},{"font_family":"Siemreap","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Bonbon","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Hanalei","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Fascinate Inline","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Fruktur","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Almendra Display","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Chenla","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Hanalei Fill","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Plaster","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Rubik Mono One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Slabo 27px","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Slabo 13px","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Halant","font_styles":"300,regular,500,600,700","font_types":"300 light regular:300:normal,400 regular:400:normal,500 bold regular:500:normal,600 bold regular:600:normal,700 bold regular:700:normal"},{"font_family":"Warnes","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Laila","font_styles":"300,regular,500,600,700","font_types":"300 light regular:300:normal,400 regular:400:normal,500 bold regular:500:normal,600 bold regular:600:normal,700 bold regular:700:normal"},{"font_family":"Sarpanch","font_styles":"regular,500,600,700,800,900","font_types":"400 regular:400:normal,500 bold regular:500:normal,600 bold regular:600:normal,700 bold regular:700:normal,800 bold regular:800:normal,900 bold regular:900:normal"},{"font_family":"Rozha One","font_styles":"regular","font_types":"400 regular:400:normal"},{"font_family":"Poppins","font_styles":"100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic","font_types":"100 light:100:normal,100 italic:100:italic,200:200:normal,200 italic:200:italic,300:300:normal,300 italic:300:italic,400:400:normal,400 italic:400:italic,500:500:normal,500 italic:500:italic,600:600:normal,600 italic:600:italic,700:700:normal,700 italic:700:italic,800:800:normal,800 italic:800:italic,900:900:normal,900 italic:900:italic"}]';
			
			return json_decode( str_replace( '}]', ',', $google_fonts->fonts_list ) . $new_fonts );
		}
		public function removePageTemplates( $pages_templates ) {
			global $dfd_ronneby;
			
			if(isset($dfd_ronneby['enable_deprecated_page_templates']) && $dfd_ronneby['enable_deprecated_page_templates'] == 'off') {
				unset($pages_templates['page-templates/posts-sidebar-sel.php']);
				unset($pages_templates['page-templates/tmp-portfolio-grid-2-mini.php']);
				unset($pages_templates['page-templates/tmp-portfolio-masonry-1-bordered.php']);
				unset($pages_templates['page-templates/tmp-portfolio-masonry-1.php']);
				unset($pages_templates['page-templates/tmp-portfolio-masonry-4.php']);
				unset($pages_templates['page-templates/tmp-portfolio-masonry-4excerpt.php']);
				unset($pages_templates['page-templates/tmp-portfolio-masonry-4mini.php']);
				unset($pages_templates['page-templates/tmp-portfolio-masonry-full-width-4-cols.php']);
				unset($pages_templates['page-templates/tmp-portfolio-masonry-full-width-bordered-4-cols-title.php']);
				unset($pages_templates['page-templates/tmp-portfolio-masonry-full-width-bordered-4-cols.php']);
				unset($pages_templates['page-templates/tmp-portfolio-masonry-full-width-bordered-title.php']);
				unset($pages_templates['page-templates/tmp-portfolio-masonry-full-width-bordered.php']);
				unset($pages_templates['page-templates/tmp-portfolio-masonry-full-width.php']);
				unset($pages_templates['page-templates/tmp-portfolio-masonry-left-sidebar.php']);
				unset($pages_templates['page-templates/tmp-portfolio-masonry-left-sidebar_excerpt.php']);
				unset($pages_templates['page-templates/tmp-portfolio-masonry-left-sidebar_mini.php']);
				unset($pages_templates['page-templates/tmp-portfolio-masonry-sidebar.php']);
				unset($pages_templates['page-templates/tmp-portfolio-masonry-sidebar_excerpt.php']);
				unset($pages_templates['page-templates/tmp-portfolio-masonry-sidebar_mini.php']);
				unset($pages_templates['page-templates/tmp-portfolio-masonry-template-2-left-sidebar.php']);
				unset($pages_templates['page-templates/tmp-portfolio-masonry-template-2-right-sidebar.php']);
				unset($pages_templates['page-templates/tmp-portfolio-masonry-template-2.php']);
				unset($pages_templates['page-templates/tmp-portfolio-masonry.php']);
				unset($pages_templates['page-templates/tmp-portfolio-masonry_excerpt.php']);
				unset($pages_templates['page-templates/tmp-portfolio-masonry_mini.php']);
				unset($pages_templates['page-templates/tmp-portfolio-template-1-left-sidebar.php']);
				unset($pages_templates['page-templates/tmp-portfolio-template-1-right-sidebar.php']);
				unset($pages_templates['page-templates/tmp-portfolio-template-1-sorting.php']);
				unset($pages_templates['page-templates/tmp-portfolio-template-1.php']);
				unset($pages_templates['page-templates/tmp-portfolio-template-2-left-sidebar.php']);
				unset($pages_templates['page-templates/tmp-portfolio-template-2-right-sidebar.php']);
				unset($pages_templates['page-templates/tmp-portfolio-template-2.php']);
				unset($pages_templates['page-templates/tmp-portfolio-template-2excerpt.php']);
				unset($pages_templates['page-templates/tmp-portfolio-template-2mini-left-sidebar.php']);
				unset($pages_templates['page-templates/tmp-portfolio-template-2mini.php']);
				unset($pages_templates['page-templates/tmp-portfolio-template-3-left-sidebar.php']);
				unset($pages_templates['page-templates/tmp-portfolio-template-3-right-sidebar.php']);
				unset($pages_templates['page-templates/tmp-portfolio-template-3.php']);
				unset($pages_templates['page-templates/tmp-portfolio-template-3excerpt.php']);
				unset($pages_templates['page-templates/tmp-portfolio-template-3mini-left-sidebar.php']);
				unset($pages_templates['page-templates/tmp-portfolio-template-3mini.php']);
				unset($pages_templates['page-templates/tmp-portfolio-template-4.php']);
				unset($pages_templates['page-templates/tmp-portfolio-template-4excerpt.php']);
				unset($pages_templates['page-templates/tmp-portfolio-template-4mini.php']);
				unset($pages_templates['page-templates/tmp-posts-grid-2-left-side.php']);
				unset($pages_templates['page-templates/tmp-posts-grid-2-right-sidebar.php']);
				unset($pages_templates['page-templates/tmp-posts-grid-2.php']);
				unset($pages_templates['page-templates/tmp-posts-grid-3-left-sidebar-fullwidth.php']);
				unset($pages_templates['page-templates/tmp-posts-grid-3-left-sidebar.php']);
				unset($pages_templates['page-templates/tmp-posts-grid-3-right-sidebar-fullwidth.php']);
				unset($pages_templates['page-templates/tmp-posts-grid-3-right-sidebar.php']);
				unset($pages_templates['page-templates/tmp-posts-grid-3.php']);
				unset($pages_templates['page-templates/tmp-posts-grid-4-fullwidth.php']);
				unset($pages_templates['page-templates/tmp-posts-grid-4.php']);
				unset($pages_templates['page-templates/tmp-posts-left-img.php']);
				unset($pages_templates['page-templates/tmp-posts-masonry-2-left-side.php']);
				unset($pages_templates['page-templates/tmp-posts-masonry-2-side.php']);
				unset($pages_templates['page-templates/tmp-posts-masonry-2.php']);
				unset($pages_templates['page-templates/tmp-posts-masonry-3-left-sidebar-fullwidth.php']);
				unset($pages_templates['page-templates/tmp-posts-masonry-3-left-sidebar.php']);
				unset($pages_templates['page-templates/tmp-posts-masonry-3-right-sidebar-fullwidth.php']);
				unset($pages_templates['page-templates/tmp-posts-masonry-3-right-sidebar.php']);
				unset($pages_templates['page-templates/tmp-posts-masonry-3.php']);
				unset($pages_templates['page-templates/tmp-posts-masonry-4-fullwidth.php']);
				unset($pages_templates['page-templates/tmp-posts-masonry-4.php']);
				unset($pages_templates['page-templates/tmp-posts-right-img.php']);
			}
			
			return $pages_templates;
		}
		public function enqueueExtras() {
			# Envato updater init
			if(!defined('ENVATO_HOSTED_SITE') || !ENVATO_HOSTED_SITE) {
				require_once get_template_directory().'/inc/lib/dashboard/theme-page.php';
			}
			if(isset($this->pagenow) && in_array($this->pagenow, array('nav-menus.php'))) {
				$this->registerMenus();
			}
		}
		/**
		 * Filter for changing importer description info in options panel
		 * when not setting in Redux config file.
		 *
		 * @param [string] $description description above demos
		 *
		 * @return [string] return.
		 */
		public function wbcImporterDescriptionText($description) {

			$description .= '<p>'. esc_html__( 'Note! In a case of installing any of the layouts, the layout page will be installed only. To get all the demo pages, including, blog, portfolio, etc, select "Main" layout which can be found in the list. The pages such as "About us", "Our team" etc are included in the "Pages" layout.', 'dfd' ) .'</p>';
			$description .= '<p>'. esc_html__( 'Images are for demo purpose only.', 'dfd' ) .'</p>';
			$description .= '<p>'.esc_html__('Please pay attention that demo installation will install the theme options for the demo you want to install. Please backup all of your customizations before running demo importer.','dfd').'</p>';

			return $description;
		}
		/* 
		 *  WBC demo installer extender
		 */
		public function wbcExtended($demo_active_import , $demo_directory_path) {

			reset($demo_active_import);
			$current_key = key($demo_active_import);

			/************************************************************************
			* Import slider(s) for the current demo being imported
			*************************************************************************/

			if(class_exists('RevSlider')) {

				$wbc_sliders_array = array(
					'01_main'				=> 'slider_main.zip',
					'02_corporate_one'		=> 'corporate_first-slider.zip',
					'06_one'				=> 'first.zip',
					'07_two'				=> 'second.zip',
					'08_three'				=> 'third.zip',
					'09_four'				=> 'fourth.zip',
					'10_five'				=> 'fifth.zip',
					'11_six'				=> 'sixth.zip',
					'17_twelve'				=> 'twelfth.zip',
					'18_thirteen'			=> 'thirteenth.zip',
					'20_fifteen'			=> 'fifteenth.zip',
					'25_twenty'				=> 'Minimalism.zip',
					'27_twenty_two'			=> 'Twenty_two.zip',
					'28_twenty_three'		=> 'Building.zip',
					'29_twenty_four'		=> '24_slider.zip',
					'30_twenty_five'		=> 'slider3.zip',
					'32_twenty_seven'		=> 'twenty-seven.zip',
					'33_twenty_eight'		=> 'twenty-eight.zip',
					'34_twenty_nine'		=> 'twenty-nine.zip',
					'35_thirty'				=> 'Mainslider_28.zip',
					'36_thirty_one'			=> 'thirty-one.zip',
					'37_thirty_two'			=> 'thirty-two.zip',
					'38_thirty_three'		=> 'thirty_third.zip',
					'41_thirty_six'			=> 'Restaurant.zip',
					'42_thirty_seven'		=> 'Medicine.zip',
					'43_thirty_eight'		=> 'Thirty_eight.zip',
					'44_thirty_nine'		=> 'thirty_nine.zip',
					'45_forty'				=> 'forty.zip',
					'46_shop_one'			=> 'shop-first.zip',
					'47_shop_two'			=> 'shop-two.zip',
					'48_shop_three'			=> 'shop_three.zip',
					'49_shop_four'			=> 'shop-four.zip',
					'51_forty_one'			=> 'forty-one.zip',
					'52_forty_two'			=> 'forty-two.zip',
					'53_forty_three'		=> 'forty_three.zip',
					'54_forty_four'			=> 'forty-four.zip',
					'57_forty_seven'		=> 'forty-seven.zip',//forty-seven-menu-page.zip
					'58_forty_eight'		=> 'forty_eight.zip',
					'59_forty_nine'			=> 'forty_nine.zip',
					'60_fifty'				=> 'fifty.zip',
					'61_fifty_one'			=> 'Fifty-one.zip',
					'62_fifty_two'			=> 'fifty_two.zip',
					'63_fifty_three'		=> 'nice-and-clean-header.zip',
					'65_fifty_five'			=> 'Fifty five.zip',
					'66_fifty_six'			=> 'fifty_six_home.zip',
					'69_fifty_nine'			=> 'Slider_Fifty_Nine.zip',
					'70_sixty'				=> 'sixty_layout.zip',
				);

				if(isset($demo_active_import[$current_key]['directory']) && !empty($demo_active_import[$current_key]['directory']) && array_key_exists($demo_active_import[$current_key]['directory'], $wbc_sliders_array)) {
					$wbc_slider_import = $wbc_sliders_array[$demo_active_import[$current_key]['directory']];
					if(is_array($wbc_slider_import)) {
						foreach($wbc_slider_import as $name) {
							$data_file = $demo_directory_path.$name;

							if(!file_exists($data_file)) {
								$data_file = download_url('http://dfd.name/check/files/rnb/'. $demo_active_import[$current_key]['directory'] .'/'.$name);
							}

							if(is_file($data_file)) {
								$slider = new RevSlider();
								$slider->importSliderFromPost(true, true, $data_file);
							}
						}
					} else {
						$data_file = $demo_directory_path.$wbc_slider_import;

						if(!file_exists($data_file)) {
							$data_file = download_url('http://dfd.name/check/files/rnb/'. $demo_active_import[$current_key]['directory'] .'/'.$wbc_slider_import);
						}

						if(is_file($data_file)) {
							$slider = new RevSlider();
							$slider->importSliderFromPost(true, true, $data_file);
						}
					}
				}
			}

			/************************************************************************
			* Setting Menus
			*************************************************************************/

			// If it's demo1 - demo6
			$wbc_menu_array = array(
				'01_main',
				'02_corporate_one',
				'03_new_shortcodes',
				'04_pages',
				'05_blogger',
				'06_one',
				'07_two',
				'08_three',
				'09_four',
				'10_five',
				'11_six',
				'12_seven',
				'13_eight',
				'14_nine',
				'15_ten',
				'16_eleven',
				'17_twelve',
				'18_thirteen',
				'19_fourteen',
				'20_fifteen',
				'21_sixteen',
				'22_seventeen',
				'23_eighteen',
				'24_nineteen',
				'25_twenty',
				'26_twenty_one',
				'27_twenty_two',
				'28_twenty_three',
				'29_twenty_four',
				'30_twenty_five',
				'31_twenty_six',
				'32_twenty_seven',
				'33_twenty_eight',
				'34_twenty_nine',
				'35_thirty',
				'36_thirty_one',
				'37_thirty_two',
				'38_thirty_three',
				'39_thirty_four',
				'40_thirty_five',
				'41_thirty_six',
				'42_thirty_seven',
				'43_thirty_eight',
				'44_thirty_nine',
				'45_forty',
				'46_shop_one',
				'47_shop_two',
				'48_shop_three',
				'49_shop_four',
				'50_promo',
				'51_forty_one',
				'52_forty_two',
				'53_forty_three',
				'54_forty_four',
				'55_forty_five',
				'56_forty_six',
				'57_forty_seven',
				'58_forty_eight',
				'59_forty_nine',
				'60_fifty',
				'61_fifty_one',
				'62_fifty_two',
				'63_fifty_three',
				'64_fifty_four',
				'65_fifty_five',
				'66_fifty_six',
				'67_fifty_seven',
				'68_fifty_eight',
				'69_fifty_nine',
				'70_sixty',
			);

			if(isset($demo_active_import[$current_key]['directory']) && !empty($demo_active_import[$current_key]['directory']) && in_array($demo_active_import[$current_key]['directory'], $wbc_menu_array)) {
				$top_menu = get_term_by('name', 'Primary navigation', 'nav_menu');

				if(isset($top_menu->term_id)) {
					set_theme_mod( 'nav_menu_locations', array(
							'theme-primary' => $top_menu->term_id,
							'theme-footer'  => $top_menu->term_id
						)
					);
				}

			}

			/************************************************************************
			* Set HomePage
			*************************************************************************/

			// array of demos/homepages to check/select from
			$wbc_home_pages = array(
				'01_main'				=> 'New master demo',
				'02_corporate_one'		=> 'Creative agency',
				'03_new_shortcodes'		=> 'Portfolio modules',
				'04_pages'				=> 'About us 03',
				'05_blogger'			=> 'Blogging around the world',
				'06_one'				=> 'One layout',
				'07_two'				=> 'Two layout',
				'08_three'				=> 'Three layout',
				'09_four'				=> 'Four layout',
				'10_five'				=> 'Five layout',
				'11_six'				=> 'Six layout',
				'12_seven'				=> 'Seven layout',
				'13_eight'				=> 'Eight layout',
				'14_nine'				=> 'Nine layout',
				'15_ten'				=> 'Ten layout',
				'16_eleven'				=> 'Eleven layout',
				'17_twelve'				=> 'Twelve layout',
				'18_thirteen'			=> 'Thirteen',
				'19_fourteen'			=> 'Fourteen',
				'20_fifteen'			=> 'Fifteen',
				'21_sixteen'			=> 'Sixteen',
				'22_seventeen'			=> 'Seventeen',
				'23_eighteen'			=> 'Eighteen',
				'24_nineteen'			=> 'Nineteen',
				'25_twenty'				=> 'Twenty',
				'26_twenty_one'			=> 'Twenty one',
				'27_twenty_two'			=> 'Twenty two',
				'28_twenty_three'		=> 'Twenty three',
				'29_twenty_four'		=> 'Twenty four',
				'30_twenty_five'		=> 'Twenty five',
				'31_twenty_six'			=> 'Twenty six',
				'32_twenty_seven'		=> 'Twenty seven',
				'33_twenty_eight'		=> 'Twenty eight',
				'34_twenty_nine'		=> 'Twenty nine',
				'35_thirty'				=> 'Thirty layout',
				'36_thirty_one'			=> 'Thirty one',
				'37_thirty_two'			=> 'Thirty two',
				'38_thirty_three'		=> 'Thirty three',
				'39_thirty_four'		=> 'Thirty four',
				'40_thirty_five'		=> 'Thirty five',
				'41_thirty_six'			=> 'Thirty six',
				'42_thirty_seven'		=> 'Thirty seven',
				'43_thirty_eight'		=> 'Thirty eight',
				'44_thirty_nine'		=> 'Thirty nine',
				'45_forty'				=> 'Forty layout',
				'46_shop_one'			=> 'Shop one',
				'47_shop_two'			=> 'Shop two',
				'48_shop_three'			=> 'Shop three',
				'49_shop_four'			=> 'Shop four',
				'50_promo',
				'51_forty_one'			=> 'Forty one',
				'52_forty_two'			=> 'Forty two',
				'53_forty_three'		=> 'Forty three',
				'54_forty_four'			=> 'Forty four',
				'55_forty_five'			=> 'Forty five',
				'56_forty_six'			=> 'Forty six',
				'57_forty_seven'		=> 'Forty seven',
				'58_forty_eight'		=> 'Forty eight',
				'59_forty_nine'			=> 'Forty nine layout',
				'60_fifty'				=> 'Fifty layout',
				'61_fifty_one'			=> 'Fifty one',
				'62_fifty_two'			=> 'Fifty two',
				'63_fifty_three'		=> 'Fifty three',
				'64_fifty_four'			=> 'Fifty four',
				'65_fifty_five'			=> 'Fifty five',
				'66_fifty_six'			=> 'Fifty six',
				'67_fifty_seven'		=> 'Fifty seven layout',
				'68_fifty_eight'		=> 'Fifty eight layout',
				'69_fifty_nine'			=> 'Fifty nine layout',
				'70_sixty'				=> 'Sixty layout',
			);

			if(isset($demo_active_import[$current_key]['directory']) && !empty($demo_active_import[$current_key]['directory']) && array_key_exists($demo_active_import[$current_key]['directory'], $wbc_home_pages)) {
				$page = get_page_by_title( $wbc_home_pages[$demo_active_import[$current_key]['directory']] );
				if(isset($page->ID)) {
					update_option('page_on_front', $page->ID);
					update_option('show_on_front', 'page');
				}
			}
		}
		public function addRemoveContactmethods($contactmethods) {
			$contacts = Dfd_Theme_Helpers::authorContactMethods();

			foreach($contacts as $k=>$v) {
				$contactmethods[$k] = $v;
			}

			// Remove Contact Methods
			unset($contactmethods['aim']);
			unset($contactmethods['yim']);
			unset($contactmethods['jabber']);

			return $contactmethods;
		}
		public function nextPageButton($buttons) {
			if (in_array('wp_page', $buttons)) {
				return $buttons;
			}

			$pos = array_search('wp_more',$buttons,true);
			if ($pos !== false) {
				$tmp_buttons = array_slice($buttons, 0, $pos+1);
				$tmp_buttons[] = 'wp_page';
				$buttons = array_merge($tmp_buttons, array_slice($buttons, $pos+1));
			}
			return $buttons;
		}
		public function registerMenus() {
			register_nav_menus(array(
				'primary_navigation' => esc_html__('Primary Navigation', 'dfd'),
				'top_left_navigation' => esc_html__('Top Left Navigation for header style 3 and 4', 'dfd'),
				'top_right_navigation' => esc_html__('Top Right Navigation for header style 3 and 4', 'dfd'),
				'additional_header_menu' => esc_html__('Additional header navigation', 'dfd'),
				'side_header_menu' => esc_html__('Side header style 11 navigation', 'dfd'),
				'side_area_menu' => esc_html__('Side area navigation', 'dfd'),
				'footer_menu' => esc_html__('Footer navigation', 'dfd'),
			));
		}
		/**
		 * Remove unnecessary dashboard widgets
		 *
		 * @link http://www.deluxeblogtips.com/2011/01/remove-dashboard-widgets-in-wordpress.html
		 */
		public function switchThemeAction() {
			delete_metadata('user', null, 'ronneby_beta_version_dismiss', null, true);
		}
		public function adminInitAction() {
			$this->afterSwitchThemeRedirect();
			remove_meta_box('dashboard_incoming_links', 'dashboard', 'normal');
			remove_meta_box('dashboard_plugins', 'dashboard', 'normal');
			remove_meta_box('dashboard_primary', 'dashboard', 'normal');
			remove_meta_box('dashboard_secondary', 'dashboard', 'normal');
			if(function_exists('set_revslider_as_theme')) {
				set_revslider_as_theme();
			}
		}
		public function afterSwitchTheme() {
			set_transient('_' . DFD_THEME_SETTINGS_NAME . '_activation_redirect', 1);
		}
		public function afterSwitchThemeRedirect() {
			ob_start();
			if(!get_transient('_' . DFD_THEME_SETTINGS_NAME . '_activation_redirect')) {
				return;
			}
			delete_transient('_' . DFD_THEME_SETTINGS_NAME . '_activation_redirect');
			wp_safe_redirect(admin_url('admin.php?page=dfd-'.DFD_THEME_SETTINGS_NAME));
			exit;
		}
		public function adminHeadAction() {
			if(isset($_GET['beta_version_dismiss'] ) && check_admin_referer('beta_version_dismiss-' . get_current_user_id())) {
				update_user_meta(get_current_user_id(), 'ronneby_beta_version_dismiss', 1);
			}
		}
		public function adminNotice() {
			if(get_user_meta( get_current_user_id(), 'ronneby_beta_version_dismiss', true )) {
				return;
			}

			echo '<div class="notice notice-success">';
				echo '<p>';
					echo '<strong>';
						echo esc_html__('Dear customer! Thanks for downloading and installing our Ronneby 3.0 beta version. Hope you enjoy it.', 'dfd');
					echo '</strong>';
				echo '</p>';
				echo '<p>';
					echo '<strong>';
						echo esc_html__('See the code instead of modules from ronneby 1.0 tab, please, check', 'dfd') .' <a href="http://rnbtheme.com/documentation/knowledge-base/codes-instead-of-old-ronneby-modules/" title="'. esc_attr__('Support center','dfd') .'" target="_blank">'. esc_html__('this article', 'dfd') .'</a>';
					echo '</strong>';
				echo '</p>';
				echo '<p>';
					echo '<strong>';
						echo esc_html__('Got questions? Feel free to contact our support team:', 'dfd') .' <a href="http://rnbtheme.com/documentation/" title="'. esc_attr__('Support center','dfd') .'" target="_blank">'. esc_html__('Support center', 'dfd') .'</a>';
						echo '&nbsp;|&nbsp;';
						echo '<a href="'. esc_url( wp_nonce_url( add_query_arg( 'beta_version_dismiss', 'dismiss_admin_notices' ), 'beta_version_dismiss-' . get_current_user_id() ) ) .'" title="'. esc_attr__('Dismiss this notice','dfd') .'" target="_parent">'. esc_html__('Dismiss this notice', 'dfd') .'</a>';
					echo '</strong>';
				echo '</p>';
			echo '</div>';
		}
	}
	
	$Dfd_Admin_Actions = new Dfd_Admin_Actions();
}
