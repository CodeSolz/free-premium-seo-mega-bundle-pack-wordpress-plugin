<?php namespace CsSeoMegaBundlePack\Controllers\AdminPageBuilder\BacklinkManager\Tabs\redirection_301\models;
/**
 * Aios_Flusher Models
 * 
 * @package Backlink Manager
 * @since 1.0.0
 * @author CodeSolz <customer-service@codesolz.net>
 */

use CsSeoMegaBundlePack\Controllers\AdminPageBuilder\BacklinkManager\Tabs\redirection_301\Helpers\Redirection_Helper as Redirection_Helper;

class Aios_Flusher {
	const DELETE_HOOK = 'redirection_log_delete';
	const DELETE_FREQ = 'daily';
	const DELETE_MAX = 1000;
	const DELETE_KEEP_ON = 15;  // 15 minutes

	public function flush() {
		$options = Redirection_Helper::aios_get_options();

		$total  = $this->expire_logs( 'redirection_logs', $options['expire_redirect'] );
		$total += $this->expire_logs( 'redirection_404', $options['expire_404'] );

		if ( $total >= self::DELETE_MAX ) {
			$next = time() + ( self::DELETE_KEEP_ON * 60 );

			// There are still more logs to clear - keep on doing until we're clean or until the next normal event
			if ( $next < wp_next_scheduled( self::DELETE_HOOK ) ) {
				wp_schedule_single_event( $next, self::DELETE_HOOK );
			}
		}

		$this->optimize_logs();
	}

	private function optimize_logs() {
		global $wpdb;

		$rand = mt_rand( 1, 5000 );

		if ( $rand === 11 )
			$wpdb->query( "OPTIMIZE TABLE {$wpdb->prefix}aios_redirection_logs" );
		elseif ( $rand === 12 )
			$wpdb->query( "OPTIMIZE TABLE {$wpdb->prefix}aios_redirection_404" );
	}

	private function expire_logs( $table, $expiry_time ) {
		global $wpdb;

		if ( $expiry_time > 0 ) {
			$logs = $wpdb->get_var( $wpdb->prepare( "SELECT COUNT(*) FROM {$wpdb->prefix}{$table} WHERE created < DATE_SUB(NOW(), INTERVAL %d DAY)", $expiry_time ) );

			if ( $logs > 0 ) {
				$wpdb->query( $wpdb->prepare( "DELETE FROM {$wpdb->prefix}{$table} WHERE created < DATE_SUB(NOW(), INTERVAL %d DAY) LIMIT %d", $expiry_time, self::DELETE_MAX ) );
				return min( self::DELETE_MAX, $logs );
			}
		}

		return 0;
	}

	public static function schedule() {
		$options = Redirection_Helper::aios_get_options();

		if ( $options['expire_redirect'] > 0 || $options['expire_404'] > 0 ) {
			if ( ! wp_next_scheduled( self::DELETE_HOOK ) ) {
				wp_schedule_event( time(), self::DELETE_FREQ, self::DELETE_HOOK );
			}
		}
		else {
			Aios_Flusher::clear();
		}
	}

	public static function clear() {
		wp_clear_scheduled_hook( self::DELETE_HOOK );
	}
}
