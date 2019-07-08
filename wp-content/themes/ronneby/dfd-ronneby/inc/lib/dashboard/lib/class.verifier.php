<?php
if (!defined('ABSPATH')) {
	exit;
}

if(!class_exists('Dfd_Envato_Api')) {
	class Dfd_Envato_Api {
		// Bearer, no need for OAUTH token, change this to your bearer string
		// https://build.envato.com/api/#token

		public static function getPurchaseData( $code, $bearer ) {

			//setting the header for the rest of the api
			$header   = array();
			$header[] = 'Content-length: 0';
			$header[] = 'Content-type: application/json; charset=utf-8';
			$header[] = 'Authorization: Bearer ' . $bearer;

			$verify_url = 'https://api.envato.com/v3/market/author/sale?code=' . $code;
			$ch_verify = curl_init( $verify_url );

			curl_setopt( $ch_verify, CURLOPT_HTTPHEADER, $header );
			curl_setopt( $ch_verify, CURLOPT_SSL_VERIFYPEER, false );
			curl_setopt( $ch_verify, CURLOPT_RETURNTRANSFER, 1 );
			curl_setopt( $ch_verify, CURLOPT_CONNECTTIMEOUT, 5 );
			curl_setopt( $ch_verify, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.13) Gecko/20080311 Firefox/2.0.0.13');

			$cinit_verify_data = curl_exec( $ch_verify );
			curl_close( $ch_verify );

			if ($cinit_verify_data != "") {
				return json_decode($cinit_verify_data, true);  
			} else {
				return false;
			}
		}

		public static function verifyPurchase( $code, $item_id, $bearer ) {
			$verify_obj = self::getPurchaseData($code, $bearer); 

			if(
				$verify_obj &&
				is_array($verify_obj) &&
				isset($verify_obj['item']) &&
				isset($verify_obj['item']['id']) &&
				$verify_obj['item']['id'] == $item_id
			) {
				unset($verify_obj['item']);
				return $verify_obj;
			}

			// Null or something non-string value, thus support period over
			return false;

		}
	}
}