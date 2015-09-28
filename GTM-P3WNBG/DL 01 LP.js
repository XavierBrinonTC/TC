<script id='GTM-P3WNBG_cattdlLP'>
(function gtm_cattdlLP(jQ, dl, cdl) {
    'use strict'
    if (jQ && jQ.extend && cdl) try {
        var cdpm = cdl.CATTParams
        var newPM = {}
        var wgetData = window.getPageData && window.getPageData(cdpm.urlparams && cdpm.urlparams.pathname) || {}

        cdpm.errors = {}
        var errorPM = {};
        errorPM['errorcode'] = wgetData.errorCode || "";
        errorPM['errormsg'] = (wgetData.message || []).join(' ');

        var userId = cdpm.user && cdpm.user.id || '';
        if (!userId) {
            if(location.host === 'www.thomascook.com') { 
                $.ajax('https://www.thomascook.com/api/users/session').success(function(data, textStatus, jqXHR){
                    if (data && data.id && jqXHR.status === 200) {
                        cdpm['user'] = {};
                        cdpm.user.id = data.id || '';
                    }
                })
            }
        };

        jQ.extend(cdl.CATTParams.errors, errorPM);
        window.CATTDL.CATTParams = cdpm;
    } catch(e) {
        cdl.error('GTM CATTDL LP: '+e)
    } finally {
        dl.push({'event': 'pid_'+cdl.CATTParams.pageid});
        window.dataLayer_TZ9GH9 && window.dataLayer_TZ9GH9.push({'event': 'CATTDL LP'});
    }
    return jQ && jQ.extend && cdl
}(window.jQuery, window.dataLayer, window.CATTDL))
</script>