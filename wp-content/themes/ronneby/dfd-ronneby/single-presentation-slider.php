<?php if ( ! defined( 'ABSPATH' ) ) { exit; } ?>
<?php get_header(); ?>
<?php get_template_part('templates/header/top', 'page'); ?>

<section id="layout" class="presentation-page">
    <div class="row">

        <?php
			Dfd_Ronneby_Front_Helpers::setLayout('single', true);
		?>

		<?php
		$args = array( 'post_type' => 'presentation-slider' );
		$loop = new WP_Query( $args );
		while ( $loop->have_posts() ) : $loop->the_post();
			?>
			<div class="entry-content">
				<?php the_content(); ?>
			</div>
		<?php endwhile; ?>
		
        <?php
			Dfd_Ronneby_Front_Helpers::setLayout('single', false);
		?>
	</div>
</section>
<?php get_footer();