<?php namespace CsSeoMegaBundlePack\Controllers\AdminPageBuilder\BacklinkManager\Tabs\redirection_301\actions;
/**
 * Random Actions
 * 
 * @package Backlink Manager
 * @since 1.0.0
 * @author CodeSolz <customer-service@codesolz.net>
 */

use CsSeoMegaBundlePack\Controllers\AdminPageBuilder\BacklinkManager\Tabs\redirection_301\models\Aios_Action as Aios_Action;

class Random_Action extends Aios_Action {
	function can_change_code() {
		return true;
	}

	function can_perform_action() {
		return false;
	}

	function action_codes() {
		return array(
			301 => get_status_header_desc( 301 ),
			302 => get_status_header_desc( 302 ),
			307 => get_status_header_desc( 307 ),
                        308 => get_status_header_desc( 308 ),
		);
	}

	function process_before( $code, $target ) {
		// Pick a random WordPress page
		global $wpdb;

		$id = $wpdb->get_var( "SELECT ID FROM {$wpdb->prefix}posts WHERE post_status='publish' AND post_password='' AND post_type='post' ORDER BY RAND() LIMIT 0,1" );

		$target = str_replace( get_bloginfo( 'url' ), '', get_permalink( $id ) );

		wp_redirect( $target, $code );
		exit();
	}
}
