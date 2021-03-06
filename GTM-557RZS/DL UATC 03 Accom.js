<script id='GTM-557RZS_uatcdlAccom'>
(function gtm_uatcdlAccom(jQ, dl, cdl, loc) {
    'use strict';
    if (jQ && cdl && cdl.CATTParams) try {
        var twlh = cdl.twlh
        var twls = cdl.twls
        var ewls = cdl.ewls
        var cdpm = cdl.CATTParams;
        var cdurl = cdpm.urlparams;
        var searchseo = ''; Object.getOwnPropertyNames(window.getPageData() || {}).forEach(function(val, idx, array) {if(/\/holidays\/.+\/.+/i.test(val) && window.getPageData(val)) {searchseo = val}});
        var wgdSrch = window.getPageData && window.getPageData('/search') || window.getPageData('searchresults-map') || window.getPageData(searchseo) || {};
        var locpathname = cdurl && cdurl.pathanme || '';
        var locsearch = cdurl && cdurl.paramstring || '';
        var lochref = cdurl && cdurl.fullurl || '';
        var lochost = loc.hostname || loc.host || '';
        var cdpr = cdpm.srpparams || {};

        var vpagepath = '/vp/en/'+(cdpm.lob || 'angular')+'/'+(cdpm.holidaytype || 'angular')+'/'+(cdpm.pageid || 'angular');
        var vpqsp_cat   = ('ss_cat='+ 
                            (cdpm.lob || '')+'_'+
                            (cdpm.pageid || '')
                        ).toLowerCase();        
        var vpqsp_st  = ('ss_st='+ 
                            (cdpm.destination || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+'_'+
                            (cdpm.accomname || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+'_'+
                            (cdpm.accomcode || '')
                        ).toLowerCase();
        var vpqsp_p     = ( 
                            'deptdate='+(cdl.gadate(cdpm.deptdate) || '')+
                            '&depairport='+(cdpm.deptairport || '')+
                            '&destairport='+(cdpm.destairport || '')+                         
                            '&paxadult='+(cdpm.paxadult || '0')+
                            '&paxchild='+(cdpm.paxchild || '0')+
                            '&paxinfant='+(cdpm.paxinfant || '0')+
                            '&boardbasis='+(cdpm.boardbasis || '')+
                            '&destination='+(cdpm.destination || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+
                            '&accomcode='+(cdpm.accomcode || '')+
                            '&accomguid='+(cdpm.accomguid || '')+             
                            '&accomname='+(cdpm.accomname || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+
                            '&duration='+(cdpm.duration || '')+
                            '&rooms='+(cdpm.rooms || '')+
                            '&sessionid='+(cdpm.sessionid || '')                                                     
                        ).toLowerCase();        
        var vppage = (vpagepath || '') + '?' + (vpqsp_cat || '') +'&'+ (vpqsp_st || '') +'&'+ (vpqsp_p || '');

        cdl.DL_uatc = {
            profileid       : 'UA-27847231-2',
            cookiedomain    : cdpm.cookiedomain || 'neckermann.nl',
            name            : 'CATTUATC',
            set             : {
                anonymizeIp : true,
                location    : lochref,
                referrer    : cdurl.referrer  || '',
                hostname    : loc && loc.hostname || ''
            },
            webanalytics    : {
                page            : vppage,
                qsp_st          : vpqsp_st,
                qsp_cat         : vpqsp_cat,
                qsp_p           : vpqsp_p, 
                location        : lochref,
                metrics         : {
                    metric1         : {'paxadult'               : parseInt(cdpm.paxadult) || 0},
                    metric2         : {'paxchild'               : parseInt(cdpm.paxchild) || 0},
                    metric3         : {'paxinfant'              : parseInt(cdpm.paxinfant) || 0},
                    metric4         : {'paxtotal'               : parseInt(cdpm.paxtotal) || 0},
                    metric5         : {'rooms'                  : parseInt(cdpm.rooms) || 0},
                    metric6         : {'searchresultspagenbr'   : parseInt(cdpr.searchresultspagenbr) || ''},
                    metric7         : {'searchresultspages'     : parseInt(cdpr.searchresultspages) || ''},
                    metric8         : {'searchresultsperpage'   : parseInt(cdpr.searchresultsperpage) || ''},
                    metric9         : {'searchresultstotal'     : parseInt(cdpr.searchresultstotal) || ''},
                    metric10        : {'bookingvalue'           : +(cdpm.totalprice || 0)},
                    metric11        : {'depositvalue'           : parseInt(cdpm.depositvalue) || 0},
                    metric12        : {'discountvalue'          : parseInt(cdpm.discountvalue) || 0},
                    metric26        : {'hitcount'               : 1}
                },
                dimensions      : {
                    dimension1      : {'deptairport'                : cdpm.deptairport || 'empty'},
                    dimension2      : {'destination'                : cdpm.destination || 'empty'},
                    dimension3      : {'brochure'                   : cdpm.brochure || 'empty'},
                    dimension4      : {'searchresultstop3'          : cdpr.searchresultstop3 || ''},
                    dimension5      : {'deptdate'                   : cdl.gadate && cdl.gadate(cdpm.deptdate || 0) || ''},
                    dimension6      : {'appserver'                  : cdpm.appserver || 'empty'},
                    dimension7      : {'boardbasis'                 : cdpm.boardbasis || 'empty'},
                    dimension8      : {'budget'                     : cdpr.budget || ''},
                    dimension9      : {'duration'                   : ''+(cdpm.duration || 'empty')},
                    dimension10     : {'lob'                        : cdpm.lob || ''},
                    dimension11     : {'holidaytype'                : cdpm.holidaytype || ''},
                    dimension12     : {'pageid'                     : cdpm.pageid || ''},
                    dimension13     : {'resortsearched'             : cdpr.resort || ''},
                    dimension14     : {'sessid'                     : cdpm.sessionid || 'empty'},
                    dimension15     : {'starrating'                 : cdpm.starrating || 'empty'},
                    dimension16     : {'accomcode'                  : cdpm.accomcode || 'empty'},
                    dimension17     : {'accomname'                  : cdpm.accomname || 'empty'},
                    dimension18     : {'accomresort'                : cdpm.accomresort || 'empty'},
                    dimension19     : {'errorcode'                  : cdpm.errors && cdpm.errors.errormsg && cdpm.errors.errormsg.length > 0 && (cdpm.errors.errorcode || "unknown") || ""},
                    dimension20     : {'touroperator'               : cdpm.touroperator || 'empty'},
                    dimension21     : {'destination'                : cdpm.destination || 'empty'},
                    dimension22     : {'destairport'                : cdpm.destairport || 'empty'},
                    dimension23     : {'searchresultspagenbr'       : ''+(cdpr.searchresultspagenbr || '')},
                    dimension24     : {'searchresultspages'         : ''+(cdpr.srpparams.searchresultspages || '')},
                    dimension25     : {'searchresultsperpage'       : ''+(cdpr.srpparams.searchresultsperpage || '')},
                    dimension26     : {'searchresultstotal'         : ''+(cdpr.srpparams.searchresultstotal || '')},
                    dimension28     : {'sortoption'                 : cdpr.sortoption || ''},
                    dimension29     : {'sortoptionsearched'         : cdpr.sortoption || ''},
                    dimension30     : {'gaguid'                     : cdpm.gaguid || ''},
                    dimension32     : {'emailguid'                  : cdpm.emailguid || ''},
                    dimension33     : {'carrier'                    : cdpm.carrier && cdpm.carrier.code || ''},
                    dimension34     : {'paxadult'                   : ''+(cdpm.paxadult || '0')},
                    dimension35     : {'paxchild'                   : ''+(cdpm.paxchild || '0')},
                    dimension36     : {'paxinfant'                  : ''+(cdpm.paxinfant || '0')},
                    dimension37     : {'paxtotal'                   : ''+(cdpm.paxtotal || '0')},
                    dimension56     : {'seasoncode'                 : cdpm.seasoncode || ''},
                    dimension63     : {'roomcode1'                  : cdpm.roomcodes && cdpm.roomcodes[0] || 'empty'},
                    dimension64     : {'roomcode2'                  : cdpm.roomcodes && cdpm.roomcodes[1] || ''},
                    dimension100    : {'hittype'                    : 'page'},
                    dimension102    : {'pagecontext'                : cdpm.pagecontext || ''},
                    dimension103    : {'rooms'                      : ''+(cdpm.rooms || '0')},
                    dimension105    : {'initialholidaytype'         : cdpm.initialholidaytype || ''},
                    dimension106    : {'arrivaltimeoutbound'        : cdl.gatime && cdpm.flightdetails && cdpm.flightdetails.outbound && cdpm.flightdetails.outbound[0] && cdpm.flightdetails.outbound[0].arrive && cdl.gatime(cdpm.flightdetails && cdpm.flightdetails.outbound[0].arrive.date) || ''},
                    dimension107    : {'departuretimeoutbound'      : cdl.gatime && cdpm.flightdetails && cdpm.flightdetails.outbound && cdpm.flightdetails.outbound[0] && cdpm.flightdetails.outbound[0].depart && cdl.gatime(cdpm.flightdetails && cdpm.flightdetails.outbound[0].depart.date) || ''},
                    dimension115    : {'realurl'                    : locpathname+locsearch || ''},
                    dimension119    : {'pagetimestamp'              : cdl.gadate(cdpm.pagetimestamp || 0)+' '+cdl.gatime(cdpm.pagetimestamp || 0) || ''},
                    dimension122    : {'totalprice'                 : ''+(cdpm.totalprice || '0')},
                    dimension123    : {'discountperc'               : ''+(cdpm.discountperc || '0')},
                    dimension124    : {'discountvalue'              : ''+(cdpm.discountvalue || '0')},
                    dimension126    : {'searchtype'                 : cdpr.searchtype || ''},
                    dimension132    : {'errormessage'               : cdpm.errors && cdpm.errors.errormsg && cdpm.errors.errormsg.length > 0 && (cdpm.errors.errorcode+' '+cdpm.errors.errormsg || cdpm.errorcode || "unknown") || ""},
                    dimension133    : {'zooverrating'               : cdpm.ratings && cdpm.ratings.zoover && cdpm.ratings.zoover.avgrating || ''},
                    dimension134    : {'zoovercount'                : cdpm.ratings && cdpm.ratings.zoover && cdpm.ratings.zoover.count || ''}                    
                },
                events : {
                internalcampaignid  : {'category': 'InternalCampaign', 'action': cdpm.internalcampaignid || '', 'label': lochost+locpathname, 'value': 1, 'noninteraction': true, 'page': vppage},
                errorcode           : {'category': 'Errors', 'action': cdpm.errors && Object.keys(cdpm.errors) && (cdpm.errors.errorcode || '')+(cdpm.errors.errorcode && cdpm.errors.errormsg && ' ' || '')+(cdpm.errors.errormsg || '') || '', 'label': lochost+locpathname+'?destination='+(cdpm.destination || '').replace(/\&amp;/g, '-').replace(/\&/g, '-')+'&deptairport='+(cdpm.deptairport || '')+'&deptdate='+(cdpm.deptdate && cdl.gadate(cdpm.deptdate) || '')+'&duration='+(cdpm.duration || '')+'&destairport='+(cdpm.destairport || '')+'&accomcode='+(cdpm.accomcode || '')+'&accomguid='+(cdpm.accomguid || '')+(((/[\?].+/.exec(lochref)) || '').toString()).replace(/\?/, '&'), 'value': 1, 'noninteraction': true, 'page':vppage}
                }
            }
        };

        var accId = cdpm.accomcode || "";
        var accSort = wgdSrch && wgdSrch.links && wgdSrch.links.search && wgdSrch.links.search.context && wgdSrch.links.search.context.sort || "";
        var accPage = cdpr.searchresultspagenbr || 0;
        var accPosition = 0
        if (wgdSrch && wgdSrch.items) {
            for (i = 0; i < wgdSrch.items.length; i++) {
                if (wgdSrch.items[i] && wgdSrch.items[i].hotel && wgdSrch.items[i].hotel.code === accId) {
                    accPosition = (accPage*1000)+(i+1);
                    break;
                } else {continue}
            }
        };

        var params = JSON.parse(CATTDL.ckget('gtm_params') || '{}');
        var srpsortlist = params.srplist || 'search';
        params.accomposition = {};
        params.accomposition[accId || 'na'] =  accPosition;
        CATTDL.ckset('gtm_params', JSON.stringify(params), '', '/', '.'+(cdpm.cookiedomain || 'neckermann.nl'));

        cdl.DL_uatc.webanalytics.addproductlist = {
            id          : accId,
            name        : ((cdpm.accomname || "")+'|'+(cdpm.destairport || "")+'|'+(cdpm.accomcountry || "")+'|'+(cdpm.accomregion || "")+'|'+(cdpm.accomresort || "")).toLowerCase(),
            category    : ("en|"+(cdpm.lob || "")+'|'+(cdpm.holidaytype || "")).toLowerCase(),
            brand       : (cdpm.touroperator || "").toLowerCase(),
            variant     : ((cdpm.boardbasis || "")+'|'+(cdpm.deptairport || "")+'|'+(cdl.gadate && cdl.gadate(cdpm.deptdate || 0) || "")+'|'+(cdl.gadate && cdl.gadate(cdpm.returndate || 0) || "")+'|'+(cdpm.paxtotal || "0")+'|'+(cdpm.paxadult || "0")+'|'+(cdpm.paxchild || "0")+'|'+(cdpm.paxinfant || "0")+'|'+(cdpm.pricepp || "0")).toLowerCase(),
            list        :(srpsortlist+'|'+(accSort || "")).toLowerCase(),
            position    : accPosition || 0
        };
    } catch(e) {
        cdl.error('GTM NL NEC UATCDL Accom: '+e)
    } finally {
        dl.push({'event': 'UATCDL Accom'})
        window.dataLayer_557RZS && dataLayer_557RZS.push({'event': 'UATCDL Accom'})
    }
    return jQ && cdl && cdl.CATTParams && cdl.DL_uatc
}(window.jQuery, window.dataLayer || [], window.CATTDL, window.location))
</script>