<?php
namespace CsSeoMegaBundlePack\Library\SerpTracker\Services;

/**
 * CsSeoMegaBundlePack\Library\CsSerp extension for SEOmoz' OpenSiteExplorer data.
 *
 * @package    CsSeoMegaBundlePack\Library\CsSerp
 * @author CodeSolz <customer-service@codesolz.net>
 * 
 * 
 * @updated    2013/12/08
 */

use CsSeoMegaBundlePack\Library\SerpTracker\CsSerp;
use CsSeoMegaBundlePack\Library\SerpTracker\Config;

class OpenSiteExplorer extends CsSerp
{
    public static function getPageMetrics($url = false)
    {
        $url     = parent::getUrl($url);
        $dataUrl = sprintf(Config\Services::OPENSITEEXPLORER_URL, 'links', '1', urlencode($url));

        $html  = static::_getPage($dataUrl);
        $doc   = parent::_getDOMDocument($html);
        $xpath = parent::_getDOMXPath(@$doc);

        $tooltipNodes = @$xpath->query('//*[@class="tooltip"]');
        $resultNodes  = @$xpath->query('//*[@class="has-tooltip"]');
        $resultNodes2 = @$xpath->query('//*[@class="has-tooltip"]/span[1]');
        $unitNodes    = @$xpath->query('//*[@class="has-tooltip"]/span[2]');

        if (0 < $resultNodes->length) {
            return (object) array(
                'domainAuthority' => (object) array(
                    'result' => intval($resultNodes2->item(0)->nodeValue),
                    'unit'   => trim(strip_tags($unitNodes->item(0)->nodeValue)),
                    'descr'  => trim(strip_tags($tooltipNodes->item(0)->nodeValue)),
                ),
                'pageAuthority' => (object) array(
                    'result' => intval($resultNodes2->item(1)->nodeValue),
                    'unit'   => trim(strip_tags($unitNodes->item(1)->nodeValue)),
                    'descr'  => trim(strip_tags($tooltipNodes->item(1)->nodeValue)),
                ),
                'justDiscovered' => (object) array(
                    'result' => intval(str_replace(',', '', strip_tags($resultNodes->item(2)->nodeValue))),
                    'unit'   => trim(strip_tags($resultNodes2->item(2)->nodeValue)),
                    'descr'  => trim(strip_tags($tooltipNodes->item(2)->nodeValue)),
                ),
                'linkingRootDomains' => (object) array(
                    'result' => intval(str_replace(',', '', $resultNodes->item(3)->nodeValue)),
                    'unit'   => trim(strip_tags($resultNodes2->item(3)->nodeValue)),
                    'descr'  => trim(strip_tags($tooltipNodes->item(3)->nodeValue)),
                ),
                'totalLinks' => (object) array(
                    'result' => intval(str_replace(',', '', $resultNodes->item(4)->nodeValue)),
                    'unit'   => trim(strip_tags($resultNodes2->item(4)->nodeValue)),
                    'descr'  => trim(strip_tags($tooltipNodes->item(4)->nodeValue)),
                ),
            );
        }
        else {
            return parent::noDataDefaultValue();
        }
    }
}
