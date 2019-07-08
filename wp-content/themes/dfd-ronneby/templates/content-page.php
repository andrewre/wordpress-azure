<?php if ( ! defined( 'ABSPATH' ) ) { exit; } ?>
<?php while (have_posts()) : the_post(); ?>
	<?php the_content(); ?>
	<?php wp_link_pages(array('before' => '<nav class="post-pagination">', 'after' => '</nav>')); ?>
<?php endwhile; ?>