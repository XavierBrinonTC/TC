<script id='GTM-58WJXK_cattdlLP'>
(function gtm_cattdlLP(jQ, dl, cdl) {
    'use strict'
    if (jQ && jQ.extend && cdl) try {
        var cdpm = cdl.CATTParams
        var newPM = {}
        var locpathname = cdpm.urlparams && cdpm.urlparams.pathname || location.pathname || '';
        var wgetData = window.getPageData && window.getPageData(locpathname) || {}

        cdpm.errors = {}
        var errorPM = {};
        errorPM['errorcode'] = wgetData.errorCode || "";
        errorPM['errormsg'] = (wgetData.message || []).join(' ');

        var params = JSON.parse(CATTDL.ckget('gtm_params') || '{}');
        params.initialholidaytype = (({
                'vliegvakanties'    : 'package',
                'autovakanties'     : 'carholidays',
                'stedentrips'       : 'citytrips',
                'wintersport'       : 'ski',
                'lastminute'        : 'lastminute',
                'kortevakanties'    : 'shortholidays',
                ''                  : 'home'
        })[(/\/([^\/]*)/i.exec(locpathname) || ['']).pop()]) || cdpm.initialholidaytype;
        CATTDL.ckset('gtm_params', JSON.stringify(params), '', '/', '.neckermann.be');
        cdpm.initialholidaytype = params.initialholidaytype || '';

        jQ.extend(cdl.CATTParams.errors, errorPM);
        window.CATTDL.CATTParams = cdpm;
    } catch(e) {
        cdl.error('GTM CATTDL LP: '+e)
    } finally {
        dl.push({'event': 'pid_'+cdl.CATTParams.pageid});
        window.dataLayer_N5GRGC && dataLayer_N5GRGC.push({'event': 'CATTDL LP'})
    }
    return jQ && jQ.extend && cdl
}(window.jQuery, window.dataLayer, window.CATTDL))
</script>