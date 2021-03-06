<script id='GTM-557RZS_uatcdlLP'>
(function gtm_uatcdlLP(cdl, dl, loc) {
    'use strict'
    if (cdl && cdl.CATTParams) try {
        var twlh = cdl.twlh
        var cdpm = cdl.CATTParams;
        var cdurl = cdpm.urlparams || {};
        var locpathname = cdurl.pathname
        var locsearch = cdurl.paramstring
        var lochref = cdurl.fullurl
        
        cdl.DL_uatc = {
            profileid       : 'UA-27847231-2',
            cookiedomain    : twlh(/neckermann.io/i)?"neckermann.io":"neckermann.nl",
            name            : 'CATTUATC',
            set             : {
                anonymizeIp : true             
            },
            webanalytics    : {
                page            : loc && ((locpathname || '/')+(locsearch || '')) || '',
                location        : lochref,
                metrics         : {
                    metric26        : {'hitcount'       : 1}
                },
                dimensions      : {
                    dimension6      : {'appserver'      : cdpm.appserver || ''},
                    dimension12     : {'pageid'         : cdpm.pageid || ''},
                    dimension14     : {'sessionid'      : cdpm.sessionid || 'empty'},
                    dimension19     : {'errorcode'      : cdpm.errors && cdpm.errors.errormsg && cdpm.errors.errormsg.length > 0 && (cdpm.errors.errorcode || "unknown") || cdpm.errorcode || ""},
                    dimension30     : {'gaguid'         : cdpm.gaguid || ''},
                    dimension32     : {'emailguid'      : cdpm.emailguid || ''},
                    dimension100    : {'hittype'        : 'page'},
                    dimension102    : {'pagecontext'    : cdpm.pagecontext || ''},
                    dimension119    : {'pagetimestamp'  : cdl.gadate(cdpm.pagetimestamp || 0)+' '+cdl.gatime(cdpm.pagetimestamp || 0) || ''},
                    dimension132    : {'errormessage'   : cdpm.errors && cdpm.errors.errormsg && cdpm.errors.errormsg.length > 0 && (cdpm.errors.errorcode+' '+cdpm.errors.errormsg || cdpm.errorcode || "unknown") || ""}
                },
                events : {
                internalcampaignid  : {'category': 'InternalCampaign', 'action': cdpm.internalcampaignid || '', 'label': lochref, 'value': 1, 'noninteraction': true},
                errorcode           : {'category': 'Errors', 'action': cdpm.errors && Object.keys(cdpm.errors) && (cdpm.errors.errorcode || '')+(cdpm.errors.errorcode && cdpm.errors.errormsg && ' ' || '')+(cdpm.errors.errormsg || '') || '', 'label': loc.hostname+locpathname+'?destination='+(cdpm.destination || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+'&deptairport='+(cdpm.deptairport || '')+'&deptdate='+(cdpm.deptdate && cdl.gadate(cdpm.deptdate) || '')+'&duration='+(cdpm.duration || '')+(((/[\?].+/.exec(lochref)) || '').toString()).replace(/\?/, '&'), 'value': 1, 'noninteraction': true, 'page': locpathname+locsearch}
                }
            }
        };
    } catch(e) {
        cdl.error('GTM NL NEC UATCDL LP: '+e)
    } finally {
        dl.push({'event': 'UATCDL LP'})
        window.dataLayer_557RZS && window.dataLayer_557RZS.push({'event': 'UATCDL LP'})
    }
    return cdl.DL_uatc
}(window.CATTDL, window.dataLayer || [], window.location))
</script>
