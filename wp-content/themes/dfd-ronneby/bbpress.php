<?php if ( ! defined( 'ABSPATH' ) ) { exit; } ?>

<?php get_header(); ?>

<?php get_template_part('templates/header/top','forum'); ?>

<section id="layout" class="blog-page dfd-equal-height-children">
    <div class="row">
		<div class="nine columns dfd-equ-height">
        <?php
        Dfd_Ronneby_Front_Helpers::setLayout('pages');

        get_template_part('templates/content', 'page');

        Dfd_Ronneby_Front_Helpers::setLayout('pages', false);

        ?>
		</div>
		<?php //</div> @TODO: непонятный баг с лишним открытым дивом !!! ?>
		<div class="three columns dfd-eq-height">
			<?php dynamic_sidebar('sidebar-bbres-right');?>
		</div>
    </div>
</section>
<?php get_footer();