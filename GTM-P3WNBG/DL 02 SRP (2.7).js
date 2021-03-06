<script id='gtm_cattdlSRP'>
(function gtm_cattdlSRP(jQ, dl, cdl) {
    'use strict'
    if (jQ && jQ.extend && cdl) try {
        var cdpm = cdl.CATTParams
        var newPM = {}
        var keeps = {}
        var locpathname = cdpm.urlparams && cdpm.urlparams.pathname || ""

        if (window.getPageData && window.getPageData(locpathname)) {
            var wgD = window.getPageData && window.getPageData(locpathname) || {}
            var wgdItems = wgD.items || {}
            var wgdStats = wgD.stats || {}
            var wgdCurrent = (!/500|502|404/.test(wgD.status) && (!wgD.errorCode || wgD.errorCode !== null))?(wgD.links && wgD.links.search && wgD.links.search.context || {}):(wgD.searchParams || {})

            //Page Info
            cdpm.lob = "package";
            cdpm.holidaytype = wgdCurrent && (wgdCurrent.connectorCode == 1)?"package-angular":(wgdCurrent.connectorCode == 2)?"multi-angular":"generic-angular";
            cdpm.pagecontext = "angular"
            cdpm.tc_basket_id = JSON.parse(cdl.ckget('tc_basket_id')) || '';
            var strdeptdate = ''
            var strdeptdatewhen = (strdeptdate = wgdCurrent.when && wgdCurrent.when._i || wgdCurrent.when || "19700101") && +new Date(strdeptdate.substring(0,4), strdeptdate.substring(4,6)-1, strdeptdate.substring(6,8)) || 0;
            var rngdeptdate = wgdCurrent && wgdCurrent.departureDate || '';
            newPM['deptdatestart'] = +new Date(((rngdeptdate || '').split(',')[0]).replace(/(\d\d\d\d)(\d\d)(\d\d)/, '$1-$2-$3') || strdeptdatewhen || 0);
            newPM['deptdateend'] = +new Date(((rngdeptdate  || '').split(',')[1] || (rngdeptdate  || '').split(',')[0]).replace(/(\d\d\d\d)(\d\d)(\d\d)/, '$1-$2-$3') || strdeptdatewhen || 0);
            newPM['deptdate'] = strdeptdatewhen || newPM.deptdatestart || 0;
            if ((rngdeptdate  || '').split(',')[1]) {newPM['deptdaterange'] = true} else {newPM['deptdaterange'] = false};

            newPM['deptairportsearched'] = wgdCurrent.origin || "";
            newPM['destinationsearched'] = wgdCurrent.goingTo || "";
            newPM['resortsearched'] = wgdCurrent.resortCode || "";
            newPM['accomnamesearched'] = wgD.hotelName && wgD.hotelName.options && wgD.hotelName.options[0] && (wgD.hotelName.options[0].title || wgD.hotelName.options[0].value) || "";
            newPM['searchwidened'] = ''+(wgD.widened || false);
            newPM['searchwidenedselected'] = ''+(wgdCurrent.flexible || false);
            newPM['sortoption'] = wgdCurrent.sort || "";
            newPM['duration'] = wgdCurrent.duration || "I dont mind";
            newPM['searchapp'] = (wgdCurrent.connectorCode && wgdCurrent.connectorCode == 1)?"solr":"multicom";
            newPM['searchresultstop3'] = wgdItems && ((wgdItems[0] && wgdItems[0].id || "")+"-"+(wgdItems[1] && wgdItems[1].id || "")+"-"+(wgdItems[2] && wgdItems[2].id || ""))|| '';
            newPM['searchresultstotal'] = wgdStats && wgdStats.total || 0;      
            newPM['searchresultsperpage'] = wgdItems && Math.ceil(wgdItems.length/10)*10 || 1;
            newPM['searchresultspages'] = jQ('div.paginationSearchResults:eq(0) span#lastPage').text() || wgdStats && wgdStats.total && Math.ceil(wgdStats.total / newPM['searchresultsperpage']) || 0;
            newPM['searchresultspagenbr'] = parseInt(jQ('div.paginationSearchResults:eq(0) span.active').attr('analytics-data') || Math.ceil(newPM['searchresultstotal'] / newPM['searchresultsperpage']) || 0)
            newPM['sessionid'] = window.sessionToken || "";
            newPM['searchlist'] = wgdItems && wgdItems.length || 0;

            //window.sessionStorage.setItem('gtm_srpsortoption',newPM['sortoption']);
            //window.sessionStorage.setItem('gtm_srplist',(locpathname).replace(/^\/|\/$/g, ''));
            var params = JSON.parse(CATTDL.ckget('gtm_params') || '{}');
            params.sortoption = newPM['sortoption'] || '';
            params.srplist = (locpathname).replace(/^\/|\/$/g, '') || '';
            CATTDL.ckset('gtm_params', JSON.stringify(params), '', '/', '.'+(cdl.DL_uatc && cdl.DL_uatc.cookiedomain || 'thomascook.com'));

            cdpm.srpfacets = {}
            var facetPM = {}
            facetPM['destination'] = ''; wgD.commercialDestination && (wgD.commercialDestination.options || []).filter(function(e){return e && e.selected}).forEach(function(e){facetPM['destination']=(e.title)});
            facetPM['resort'] = ''; wgD.resortCategory && (wgD.resortCategory.options || []).filter(function(e){return e && e.selected}).forEach(function(e){facetPM['resort']=(e.title)});
            facetPM['deptairport'] = ''; wgD.depAirport && (wgD.depAirport.options || []).filter(function(e){return e && e.selected}).forEach(function(e){facetPM['deptairport']=(e.title)});
            facetPM['boardbasis'] = []; wgD.boardType && (wgD.boardType.options || []).filter(function(e){return e.selected}).forEach(function(e){facetPM['boardbasis'].push(e.title)});
            facetPM['concepts'] = []; wgD.concept && (wgD.concept.options || []).filter(function(e){return e.selected}).forEach(function(e){facetPM['concepts'].push(e.title)})
            facetPM['discountperc'] = []; wgD.discount && (wgD.discount.options || []).filter(function(e){return e.selected}).forEach(function(e){facetPM['discountperc'].push(e.title)})
            facetPM['discountvalue'] = []; wgD.savings && (wgD.savings.options || []).filter(function(e){return e.selected}).forEach(function(e){facetPM['discountvalue'].push(e.title)})
            facetPM['pricerange'] = []; wgD.priceRange && (wgD.priceRange.options || []).filter(function(e){return e.selected}).forEach(function(e){facetPM['pricerange'].push(e.title)})
            facetPM['starrating'] = []; wgD.stars && (wgD.stars.options || []).filter(function(e){return e.selected}).forEach(function(e){facetPM['starrating'].push(e.title)})
            facetPM['touroperator'] = []; wgD.brand && (wgD.brand.options || []).filter(function(e){return e.selected}).forEach(function(e){facetPM['touroperator'].push(e.title)})
            facetPM['freechild'] = wgD.freeChildFlag && wgD.freeChildFlag.options && wgD.freeChildFlag.options[0]&& wgD.freeChildFlag.options[0].selected == true

            var arrpax = wgdCurrent && wgdCurrent.occupation || ""; //'2' or [2]  or ['2, 3'] or ["2,1,2", "1,6"] 
            newPM['paxadultperroom'] = []
            newPM['paxchildperroom'] = []
            newPM['paxinfantperroom'] = []
            if (typeof arrpax == "string") {
                newPM['paxadultperroom'].push(+arrpax[0] || 0);
                newPM['paxchildperroom'].push((arrpax.split(",")).slice(1).map(Number).filter(function(e){return e>1}).length || 0);
                newPM['paxinfantperroom'].push((arrpax.split(",")).slice(1).map(Number).filter(function(e){return e<2}).length || 0);
            } else {
                arrpax = arrpax.map(String)
                for (var i = 0; i < arrpax.length; i++) {
                    newPM['paxadultperroom'].push(+(arrpax[i][0] || arrpax[i] || 0))
                    newPM['paxchildperroom'].push(((arrpax[i] || "").split(",") || []).slice(1).map(Number).filter(function(e){return e>1}).length)
                    newPM['paxinfantperroom'].push(((arrpax[i] || "").split(",") || []).slice(1).map(Number).filter(function(e){return e<2}).length)
                }
            }
            newPM['paxadult'] = newPM.paxadultperroom.reduce(function gtm_reduceAdd(x, y){ return x+y }) || 0
            newPM['paxchild'] = newPM.paxchildperroom.reduce(function gtm_reduceAdd(x, y){ return x+y }) || 0
            newPM['paxinfant'] = newPM.paxinfantperroom.reduce(function gtm_reduceAdd(x, y){ return x+y }) || 0
            newPM['paxtotal'] = newPM['paxadult']+newPM['paxchild']+newPM['paxinfant'];
            newPM['rooms'] = newPM['paxadultperroom'].length;
            newPM['destination'] = ''; if (!facetPM['destination']){newPM['destination']=newPM['destinationsearched']} else {newPM['destination']=facetPM['destination']};
            newPM['resort'] = ''; if (!facetPM['resort']){newPM['resort']=newPM['resortsearched']} else {newPM['resort']=facetPM['resort']};
            newPM['deptairport'] = ''; if (!facetPM['deptairport']){newPM['deptairport']=newPM['deptairportsearched']} else {newPM['deptairport']=facetPM['deptairport']};

            cdpm.errors = {}
            var errorPM = {};
            errorPM['errorcode'] = wgD.errorCode || "";
            errorPM['errormsg'] = (wgD.message || []).join(' ');

            jQ.extend(cdl.CATTParams, newPM ,keeps);
            jQ.extend(cdl.CATTParams.srpfacets, facetPM);
            jQ.extend(cdl.CATTParams.errors, errorPM);
        }   
        window.CATTDL.CATTParams = cdpm;

    } catch(e) {
        cdl.error('GTM CATTDL SRP: '+e)
    } finally {
        var cntTZ9GH9 = 0; window.dataLayer_TZ9GH9.forEach(function(e){if(e.event === 'CATTDL LP'){cntTZ9GH9 = cntTZ9GH9 + 1}});
        dl.push({'event': 'pid_'+cdl.CATTParams.pageid});
        dl.push({'event': (window.getPageData && window.getPageData(cdpm.urlparams && cdpm.urlparams.pathname)?'CATTDL SRP':'CATTDL LP'), 'counter': cntTZ9GH9});
        window.dataLayer_TZ9GH9 && window.dataLayer_TZ9GH9.push({'event': (window.getPageData && window.getPageData(cdpm.urlparams && cdpm.urlparams.pathname)?'CATTDL SRP':'CATTDL LP'), 'counter': cntTZ9GH9});
    }
    return jQ && jQ.extend && cdl
}(window.jQuery, window.dataLayer, window.CATTDL))
</script>