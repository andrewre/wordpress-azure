<?php if ( ! defined( 'ABSPATH' ) ) { exit; } ?>
<?php get_header(); ?>
<?php get_template_part('templates/header/top','page'); ?>

<section id="layout" class="blog-page dfd-equal-height-children">
    <div class="row">

        <?php
        Dfd_Ronneby_Front_Helpers::setLayout('pages');

        get_template_part('templates/content', 'page');

        Dfd_Ronneby_Front_Helpers::setLayout('pages', false);

        ?>

    </div>
</section>
<?php get_footer();