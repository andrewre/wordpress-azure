<?php
if ( ! defined( 'ABSPATH' ) ) { exit; }
	$data_title = get_the_title();
	$data_link = get_permalink();
?>
<div class="share-cover">
    <div class="entry-share">
		<ul class="rrssb-buttons entry-share-popup">
			<li class="rrssb-facebook">
				<!--  Replace with your URL. For best results, make sure you page has the proper FB Open Graph tags in header: -->
				<a href="https://www.facebook.com/sharer/sharer.php?u=<?php echo esc_attr($data_link) ?>" class="popup entry-share-link-facebook">
					<i class="soc_icon-facebook"></i>
				</a>
			</li>
			<li class="rrssb-twitter">
				<!-- Replace href with your Meta and URL information  -->
				<a href="https://twitter.com/intent/tweet?text=<?php echo esc_attr($data_link) ?>" class="popup entry-share-link-twitter">
					<i class="soc_icon-twitter-2"></i>
				</a>
			</li>
			<li class="rrssb-linkedin">
				<!-- Replace href with your meta and URL information -->
				<a href="http://www.linkedin.com/shareArticle?mini=true&amp;url=<?php echo esc_attr($data_link) ?>" class="popup entry-share-link-linkedin">
					<i class="soc_icon-linkedin"></i>
				</a>
			</li>
		</ul>
    </div>
</div>
