<?php
if(!defined('ABSPATH')) {
	exit;
}

if(!class_exists('Dfd_Ronneby_Breadcrumbs')) {
	class Dfd_Ronneby_Breadcrumbs {
		public static function portfolioBreadcrumbs() {
			global $dfd_ronneby;
			$delimiter   = ' <span class="del"></span> ';

			$html = '';
			$html .= '<nav id="crumbs">';
			$html .= '<span><a href="' . esc_url(home_url()) . '">' . esc_html__('Home', 'dfd') . '</a></span>';
			$html .= $delimiter;

			if(isset($dfd_ronneby['folio_top_page_select']) && !empty($dfd_ronneby['folio_top_page_select'])) {
				$page = $dfd_ronneby['folio_top_page_select'];

				if(isset($dfd_ronneby['folio_top_page_title']) && !empty($dfd_ronneby['folio_top_page_title'])) {
					$title = $dfd_ronneby['folio_top_page_title'];
				} else {
					$title = get_the_title($page);
				}
				$slug = get_permalink($page);

				if (!empty($title) && !empty($slug)) {
					$html .= '<span><a href="' . esc_url($slug) . '">' . esc_html($title) . '</a></span>';
					$html .= $delimiter;
				}
			}

			$html .= '<span>'.esc_html(get_the_title()).'</span>';
			$html .= '</nav>';

			echo wp_kses_post($html);
		}
		public static function breadcrumbs() {

			/* === OPTIONS === */
			$text['home']     = __('Home', 'dfd'); // text for the 'Home' link
			$text['category'] = __('Archive by Category "%s"', 'dfd'); // text for a category page
			$text['search']   = __('Search Results for "%s" Query', 'dfd'); // text for a search results page
			$text['tag']      = __('Posts Tagged "%s"', 'dfd'); // text for a tag page
			$text['author']   = __('Articles Posted by %s', 'dfd'); // text for an author page
			$text['404']      = __('Error 404', 'dfd'); // text for the 404 page

			$showCurrent = 1; // 1 - show current post/page title in breadcrumbs, 0 - don't show
			$showOnHome  = 0; // 1 - show breadcrumbs on the homepage, 0 - don't show
			$delimiter   = ' <span class="del"></span> '; // delimiter between crumbs
			$before      = '<span class="current">'; // tag before the current crumb
			$after       = '</span>'; // tag after the current crumb
			/* === END OF OPTIONS === */

			global $post;
			$homeLink = home_url() . '/';
			$linkBefore = '<span>';
			$linkAfter = '</span>';
			$link = $linkBefore . '<a href="%1$s">%2$s</a>' . $linkAfter;

			if (is_home() || is_front_page()) {

				if ($showOnHome == 1) echo '<nav id="crumbs"><a href="' . esc_url($homeLink) . '">' . $text['home'] . '</a></nav>';

			} else {

				echo '<nav id="crumbs">' . sprintf($link, $homeLink, $text['home']) . $delimiter;

				if ( is_category() ) {
					$thisCat = get_category(get_query_var('cat'), false);
					if ($thisCat->parent != 0) {
						$cats = get_category_parents($thisCat->parent, TRUE, $delimiter);
						$cats = str_replace('<a', $linkBefore . '<a', $cats);
						$cats = str_replace('</a>', '</a>' . $linkAfter, $cats);
						echo wp_kses_post($cats);
					}
					echo wp_kses_post($before . sprintf($text['category'], single_cat_title('', false)) . $after);

				} elseif ( is_search() ) {
					echo wp_kses_post($before . sprintf($text['search'], get_search_query()) . $after);


				}
				elseif (is_singular('topic') ){
					$post_type = get_post_type_object(get_post_type());
					printf($link, $homeLink . '/forums/', $post_type->labels->singular_name);
				}
				/* in forum, add link to support forum page template */
				elseif (is_singular('forum')){
					$post_type = get_post_type_object(get_post_type());
					printf($link, $homeLink . '/forums/', $post_type->labels->singular_name);
				}
				elseif (is_tax('topic-tag')){
					$post_type = get_post_type_object(get_post_type());
					printf($link, $homeLink . '/forums/', $post_type->labels->singular_name);
				}
				elseif ( is_day() ) {
					echo sprintf($link, get_year_link(get_the_time('Y')), get_the_time('Y')) . $delimiter;
					echo sprintf($link, get_month_link(get_the_time('Y'),get_the_time('m')), get_the_time('F')) . $delimiter;
					echo wp_kses_post($before . get_the_time('d') . $after);

				} elseif ( is_month() ) {
					echo sprintf($link, get_year_link(get_the_time('Y')), get_the_time('Y')) . $delimiter;
					echo wp_kses_post($before . get_the_time('F') . $after);

				} elseif ( is_year() ) {
					echo wp_kses_post($before . get_the_time('Y') . $after);

				} elseif ( is_single() && !is_attachment() ) {
					if ( get_post_type() != 'post' ) {
						$post_type = get_post_type_object(get_post_type());
						$slug = $post_type->rewrite;
						printf($link, $homeLink . '/' . $slug['slug'] . '/', $post_type->labels->singular_name);
						if ($showCurrent == 1) echo wp_kses_post($delimiter . $before . get_the_title() . $after);
					} else {
						$cat = get_the_category();
						if(isset($cat[0])) {
							$cat =  $cat[0];
							$cats = get_category_parents($cat, TRUE, $delimiter);
							if ($showCurrent == 0) $cats = preg_replace("#^(.+)$delimiter$#", "$1", $cats);
							$cats = str_replace('<a', $linkBefore . '<a', $cats);
							$cats = str_replace('</a>', '</a>' . $linkAfter, $cats);
							echo wp_kses_post($cats);
							if ($showCurrent == 1) echo wp_kses_post($before . get_the_title() . $after);
						}
					}

				} elseif ( !is_single() && !is_page() && get_post_type() != 'post' && !is_404() ) {
					$post_type = get_post_type_object(get_post_type());
					echo wp_kses_post($before . $post_type->labels->singular_name . $after);

				} elseif ( is_attachment() ) {
					$parent = get_post($post->post_parent);
					$cat = get_the_category($parent->ID);
					if($cat) {
						$cat = $cat[0];
						$cats = get_category_parents($cat, TRUE, $delimiter);
						$cats = str_replace('<a', $linkBefore . '<a', $cats);
						$cats = str_replace('</a>', '</a>' . $linkAfter, $cats);
						echo wp_kses_post($cats);
						printf($link, get_permalink($parent), $parent->post_title);
						if ($showCurrent == 1) echo wp_kses_post($delimiter . $before . get_the_title() . $after);
					}
				} elseif ( is_page() && !$post->post_parent ) {
					if ($showCurrent == 1) echo wp_kses_post($before . get_the_title() . $after);

				} elseif ( is_page() && $post->post_parent ) {
					$parent_id  = $post->post_parent;
					$breadcrumbs = array();
					while ($parent_id) {
						$page = get_page($parent_id);
						$breadcrumbs[] = sprintf($link, get_permalink($page->ID), get_the_title($page->ID));
						$parent_id  = $page->post_parent;
					}
					$breadcrumbs = array_reverse($breadcrumbs);
					for ($i = 0; $i < count($breadcrumbs); $i++) {
						echo wp_kses_post($breadcrumbs[$i]);
						if ($i != count($breadcrumbs)-1) echo wp_kses_post($delimiter);
					}
					if ($showCurrent == 1) echo wp_kses_post($delimiter . $before . get_the_title() . $after);

				} elseif ( is_tag() ) {
					echo wp_kses_post($before . sprintf($text['tag'], single_tag_title('', false)) . $after);

				} elseif ( is_author() ) {
					global $author;
					$userdata = get_userdata($author);
					echo wp_kses_post($before . sprintf($text['author'], $userdata->display_name) . $after);

				} elseif ( is_404() ) {
					echo wp_kses_post($before . $text['404'] . $after);
				}

				if ( get_query_var('paged') ) {
					if ( is_category() || is_day() || is_month() || is_year() || is_search() || is_tag() || is_author() ) echo ' (';
					echo __('Page', 'dfd') . ' ' . get_query_var('paged');
					if ( is_category() || is_day() || is_month() || is_year() || is_search() || is_tag() || is_author() ) echo ')';
				}

				echo '</nav>';

			}
		}
	}
}