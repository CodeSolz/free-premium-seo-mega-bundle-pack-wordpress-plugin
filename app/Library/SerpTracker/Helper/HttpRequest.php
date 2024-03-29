<?php namespace CsSeoMegaBundlePack\Library\SerpTracker\Helper;

use CsSeoMegaBundlePack\Library\SerpTracker\Config\DefaultSettings;

/**
 * HTTP Request Helper Class
 *
 * @package    CsSeoMegaBundlePack\Library\CsSerp
 * @author CodeSolz <customer-service@codesolz.net>
 */

class HttpRequest
{
    /**
     *  HTTP GET/POST request with curl.
     *  @access    public
     *  @param     String      $url        The Request URL
     *  @param     Array       $postData   Optional: POST data array to be send.
     *  @return    Mixed                   On success, returns the response string.
     *                                     Else, the the HTTP status code received
     *                                     in reponse to the request.
     */
    public static function sendRequest($url, $postData = false, $postJson = false)
    {
        $ua = self::getUserAgent();
        $curlopt_proxy = self::getProxy();
        $curlopt_proxyuserpwd = self::getProxyUserPwd();

        $ch = curl_init($url);
        curl_setopt_array($ch, array(
            CURLOPT_USERAGENT       => $ua,
            CURLOPT_RETURNTRANSFER  => 1,
            CURLOPT_CONNECTTIMEOUT  => 30,
            CURLOPT_FOLLOWLOCATION  => 1,
            CURLOPT_MAXREDIRS       => 2,
            CURLOPT_SSL_VERIFYPEER  => 0,
        ));
        if($curlopt_proxy) {
            curl_setopt($ch, CURLOPT_PROXY, $curlopt_proxy);
        }
        if($curlopt_proxyuserpwd) {
            curl_setopt($ch, CURLOPT_PROXYUSERPWD, $curlopt_proxyuserpwd);
        }

        if (false !== $postData) {
            if (false !== $postJson) {
                curl_setopt($ch, CURLOPT_HTTPHEADER,
                    array('Content-type: application/json'));
                $data = json_encode($postData);
            } else {
                $data = http_build_query($postData);
            }
            curl_setopt($ch, CURLOPT_POST, 1);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
        }

        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);

        return (200 == (int)$httpCode) ? $response : false;
    }

    /**
     * HTTP HEAD request with curl.
     *
     * @access        private
     * @param         String        $a        The request URL
     * @return        Integer                 Returns the HTTP status code received in
     *                                        response to a GET request of the input URL.
     */
    public static function getHttpCode($url)
    {
        $ua = self::getUserAgent();
        $curlopt_proxy = self::getProxy();
        $curlopt_proxyuserpwd = self::getProxyUserPwd();

        $ch = curl_init($url);
        curl_setopt_array($ch, array(
            CURLOPT_USERAGENT       => $ua,
            CURLOPT_RETURNTRANSFER  => 1,
            CURLOPT_CONNECTTIMEOUT  => 10,
            CURLOPT_FOLLOWLOCATION  => 1,
            CURLOPT_MAXREDIRS       => 2,
            CURLOPT_SSL_VERIFYPEER  => 0,
            CURLOPT_NOBODY          => 1,
        ));
        if($curlopt_proxy) {
            curl_setopt($ch, CURLOPT_PROXY, $curlopt_proxy);
        }
        if($curlopt_proxyuserpwd) {
            curl_setopt($ch, CURLOPT_PROXYUSERPWD, $curlopt_proxyuserpwd);
        }

        curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);

        return (int)$httpCode;
    }

    public function getFile($url, $file)
    {
        $ua = self::getUserAgent();
        $curlopt_proxy = self::getProxy();
        $curlopt_proxyuserpwd = self::getProxyUserPwd();

        $fp = fopen("$file", 'w');

        $ch = curl_init($url);
        curl_setopt_array($ch, array(
            CURLOPT_USERAGENT       => $ua,
            CURLOPT_RETURNTRANSFER  => 1,
            CURLOPT_CONNECTTIMEOUT  => 30,
            CURLOPT_FOLLOWLOCATION  => 1,
            CURLOPT_MAXREDIRS       => 2,
            CURLOPT_SSL_VERIFYPEER  => 0,
            CURLOPT_FILE            => $fp,
        ));
        if($curlopt_proxy) {
            curl_setopt($ch, CURLOPT_PROXY, $curlopt_proxy);
        }
        if($curlopt_proxyuserpwd) {
            curl_setopt($ch, CURLOPT_PROXYUSERPWD, $curlopt_proxyuserpwd);
        }

        curl_exec($ch);
        curl_close($ch);
        fclose($fp);

        clearstatcache();
        return (bool)(false !== stat($file));
    }

    public static function getUserAgent() {
        $ua = sprintf('CsSeoMegaBundlePack\Library\CsSerp %s https://github.com/eyecatchup/CsSeoMegaBundlePack\Library\CsSerp', \CsSeoMegaBundlePack\Library\SerpTracker\CsSeoMegaBundlePack\Library\CsSerp::BUILD_NO);
        if(\CsSeoMegaBundlePack\Library\SerpTracker\Config\DefaultSettings::UA !== '') {
            $ua = \CsSeoMegaBundlePack\Library\SerpTracker\Config\DefaultSettings::UA;
        }
        if(\CsSeoMegaBundlePack\Library\SerpTracker\CsSeoMegaBundlePack\Library\CsSerp::getUserAgent()) {
            $ua = \CsSeoMegaBundlePack\Library\SerpTracker\CsSeoMegaBundlePack\Library\CsSerp::getUserAgent();
        }
        return $ua;
    }

    public static function getProxy() {
        $curlopt_proxy = false;
        if(\CsSeoMegaBundlePack\Library\SerpTracker\Config\DefaultSettings::CURLOPT_PROXY !== '') {
            $curlopt_proxy = \CsSeoMegaBundlePack\Library\SerpTracker\Config\DefaultSettings::CURLOPT_PROXY;
        }
        if(\CsSeoMegaBundlePack\Library\SerpTracker\CsSeoMegaBundlePack\Library\CsSerp::getCurloptProxy()) {
            $curlopt_proxy = \CsSeoMegaBundlePack\Library\SerpTracker\CsSeoMegaBundlePack\Library\CsSerp::getCurloptProxy();
        }
        return $curlopt_proxy;
    }

    public static function getProxyUserPwd() {
        $curlopt_proxyuserpwd = false;
        if(\CsSeoMegaBundlePack\Library\SerpTracker\Config\DefaultSettings::CURLOPT_PROXYUSERPWD !== '') {
            $curlopt_proxyuserpwd = \CsSeoMegaBundlePack\Library\SerpTracker\Config\DefaultSettings::CURLOPT_PROXYUSERPWD;
        }
        if(\CsSeoMegaBundlePack\Library\SerpTracker\CsSeoMegaBundlePack\Library\CsSerp::getCurloptProxyuserpwd()) {
            $curlopt_proxyuserpwd = \CsSeoMegaBundlePack\Library\SerpTracker\CsSeoMegaBundlePack\Library\CsSerp::getCurloptProxyuserpwd();
        }
        return $curlopt_proxyuserpwd;
    }
}
