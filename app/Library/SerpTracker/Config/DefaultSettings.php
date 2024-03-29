<?php
namespace CsSeoMegaBundlePack\Library\SerpTracker\Config;

/**
 * Configuration constants for the CsSeoMegaBundlePack\Library\CsSerp library.
 *
 * @package    CsSeoMegaBundlePack\Library\CsSerp
 * @author CodeSolz <customer-service@codesolz.net>
 * 
 * 
 * 
 */

/**
 * Default client settings
 * @package    CsSeoMegaBundlePack\Library\CsSerp
 */
interface DefaultSettings
{
    // The default value returned by all CsSeoMegaBundlePack\Library\CsSerp methods if no result available.
    // Can be either of type String, Int, Bool or NULL.
    const DEFAULT_RETURN_NO_DATA = 'n.a.';

    // The default top level domain ending to use to query Google.
    const GOOGLE_TLD = 'com';

    // The HTTP header value for the 'Accept-Language' attribute.
    //
    // Note: Google search results, doesn't matter which tld you request, vary depending on
    // the value sent for the HTTP header attribute 'Accept-Language'! Eg: I am from Germany.
    // Even if I use the "ncr" (no country redirect) request parameter, all search results
    // that I get in response to a query on google.com will be localized to German, because
    // my browser sends an Accept-Language header value of 'de-de,de;q=0.8,en-us;q=0.5,en;q=0.3'.
    // On the other side, if I change my browser settings to send a value of 'en-us;q=0.8,en;q=0.3',
    // all my searches on google.de (the german Google page) will be localized English.
    // Thus, if you want to get the same results that you see when you search Google from
    // your browser, you must not only set the @const GOOGLE_TLD to your country specifiy TLD,
    // but also set the value below to be the same used by your browser!
    const HTTP_HEADER_ACCEPT_LANGUAGE = 'en-us;q=0.8,en;q=0.3';

    // For curl instances: Whether to allow Google to store cookies, or not.
    const ALLOW_GOOGLE_COOKIES = 0;

    // Choose the local SEMRush database to use.
    // Valid values are:
    //   au - Google.com.au (Australia)
    //   br - Google.com.br (Brazil)
    //   ca - Google.ca (Canada)
    //   de - Google.de (Germany)
    //   es - Google.es (Spain)
    //   fr - Google.fr (France)
    //   it - Google.it (Italy)
    //   ru - Google.ru (Russia)
    //   uk - Google.co.uk (United Kingdom)
    //   us - Google.com (United States)
    const SEMRUSH_DB = 'us';

    // Choose the local SISTRIX database to use.
    // Valid values are:
    //   de – Germany
    //   at – Austria
    //   ch – Switzerland
    //   us – USA
    //   uk – England
    //   es – Spain
    //   fr – France
    //   it – Italy
    const SISTRIX_DB = 'de';

    // Enter proxy to use with curl
    // leave empty to disable proxy
    // can be overwritten by dynamic configuration
    const CURLOPT_PROXY = '';

    // Enter proxy username and password (seperated by :) if necessary
    // leave empty to disable
    // can be overwritten by dynamic configuration
    const CURLOPT_PROXYUSERPWD = '';

    // Enter own useragent
    // leave empty to use default
    // can be overwritten by dynamic configuration
    const UA = '';
}
