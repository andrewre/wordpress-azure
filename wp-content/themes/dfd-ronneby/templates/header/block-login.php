<?php if ( ! defined( 'ABSPATH' ) ) { exit; } ?>
<div class="login-header">
	<?php if (!is_user_logged_in()): ?>
		<div id="loginModal" class="reveal-modal">
			<?php
			$args = array(
				//'redirect' => $redirect, //Your url here
				'form_id' => 'loginform-custom',
				'label_username' => '',
				'label_password' => '',
			);

			echo '<h3 class="login_form_title">'.esc_html__('Login on site', 'dfd').'</h3>';

			if (class_exists('crum_login_widget')) {
				$args = array(
					'label_log_in' => __('Login on site', 'dfd'),
					'label_lost_password' => __('Remind the password', 'dfd'),
				);

				$crum_login_widget = new crum_login_widget();

				$crum_login_widget->wp_login_form($args);
			} else {
				wp_login_form($args);
			}
			?>
			<a class="close-reveal-modal">&#215;</a>
		</div>
		<div class="reveal-modal-bg"></div>
		<div class="links">
			<a href="<?php echo esc_url( wp_login_url( get_permalink() ) ); ?>" class="drop-login" data-reveal-id="loginModal">
				<i class="dfd-icon-lock"></i>
				<span><?php echo esc_html__('Login on site','dfd'); ?></span>
			</a>
		</div>
	<?php else: ?>

		<div class="links">
			<a href="<?php echo esc_url( wp_logout_url( get_permalink() ) ); ?>">
				<i class="dfd-icon-lock_open"></i>
				<span><?php echo esc_html__('Logout','dfd'); ?></span>
			</a>
		</div>

	<?php endif; ?>
</div>