<?php
/*
Template Name: For page builder
*/
if ( ! defined( 'ABSPATH' ) ) { exit; }
?>
<?php get_header(); ?>

<section id="layout" class="no-title">


        <?php get_template_part('templates/content', 'page'); ?>


</section>
<?php get_footer();