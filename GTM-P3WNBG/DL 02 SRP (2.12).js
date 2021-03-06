<script id='GTM-P3WNBG_cattdlSRP'>
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

            newPM['deptairportsearchedarray'] = (!wgdCurrent.origin || typeof wgdCurrent.origin == 'string')?[(wgdCurrent.origin && wgdCurrent.origin.replace(/\&amp;/g, '-').replace(/\&/g, '-') || '')]:(wgdCurrent.origin.map && wgdCurrent.origin.map(function(e){return e.replace(/\&amp;/g, '-').replace(/\&/g, '-')}) || ['']);
            newPM['deptairportsearched'] = newPM.deptairportsearchedarray && newPM.deptairportsearchedarray.join(';') || '';
            newPM['destinationsearchedarray'] = (!wgdCurrent.goingTo || typeof wgdCurrent.goingTo == 'string')?[(wgdCurrent.goingTo && wgdCurrent.goingTo.replace(/\&amp;/g, '-').replace(/\&/g, '-') || 'Any destination')]:(wgdCurrent.goingTo.map && wgdCurrent.goingTo.map(function(e){return e.replace(/\&amp;/g, '-').replace(/\&/g, '-')}) || ['Any destination']);
            if(!newPM.destinationsearchedarray.toString()){newPM.destinationsearchedarray = ['Any destination']};
            newPM['destinationsearched'] = newPM.destinationsearchedarray && newPM.destinationsearchedarray.join(';') || '';
            newPM['resortsearchedarray'] = (!wgdCurrent.resortCode || typeof wgdCurrent.resortCode == 'string')?[(wgdCurrent.resortCode && wgdCurrent.resortCode.replace(/\&amp;/g, '-').replace(/\&/g, '-') || '')]:(wgdCurrent.resortCode.map && wgdCurrent.resortCode.map(function(e){return e.replace(/\&amp;/g, '-').replace(/\&/g, '-')}) || ['']);
            newPM['resortsearched'] = newPM.resortsearchedarray && newPM.resortsearchedarray.join(';') || '';

            newPM['accomcodesearched'] = wgdCurrent.hotelId.toString() || "";
            newPM['accomnamesearched'] = wgdCurrent.hotelName || "";
            newPM['searchwidened'] = (''+wgdCurrent.flexible == 'true')?'true':((''+wgD.widened == 'true')?'true':'false');
            newPM['searchwidenedselected'] = (''+wgdCurrent.flexible == 'true')?'true':'false';
            newPM['sortoption'] = wgdCurrent.sort || "";
            newPM['durationsearched'] = wgdCurrent.duration || "I dont mind";
            newPM['searchapp'] = (wgdCurrent.connectorCode && wgdCurrent.connectorCode == 1)?"solr":"multicom";
            newPM['searchresultstop3'] = wgdItems && ((wgdItems[0] && wgdItems[0].id || "")+"-"+(wgdItems[1] && wgdItems[1].id || "")+"-"+(wgdItems[2] && wgdItems[2].id || ""))|| '';
            newPM['searchresultstotal'] = wgdStats && wgdStats.total || 0;      
            newPM['searchresultsperpage'] = wgdItems && Math.ceil(wgdItems.length/10)*10 || 1;
            newPM['searchresultspages'] = jQ('div.paginationSearchResults:eq(0) span#lastPage').text() || wgdStats && wgdStats.total && Math.ceil(wgdStats.total / newPM['searchresultsperpage']) || 0;
            newPM['searchresultspagenbr'] = parseInt(jQ('div.paginationSearchResults:eq(0) span.active').attr('analytics-data') || Math.ceil(newPM['searchresultstotal'] / newPM['searchresultsperpage']) || 0)
            newPM['sessionid'] = window.sessionToken || "";
            newPM['searchlist'] = wgdItems && wgdItems.length || 0;

            newPM['searchtype'] = (newPM.accomnamesearched && newPM.accomnamesearched === newPM.destinationsearched)?'accom':'destination';
            var params = JSON.parse(CATTDL.ckget('gtm_params') || '{}');
            params.sortoption = newPM['sortoption'] || '';
            params.srplist = (locpathname).replace(/^\/|\/$/g, '') || '';
            CATTDL.ckset('gtm_params', JSON.stringify(params), '', '/', '.'+(cdpm.cookiedomain || 'thomascook.com'));

            cdpm.srpfacets = {};
            var facetPM = {};

            facetPM['destination'] = jQ('[analytics-id="srp-facet-commercialDestination"] :selected') && jQ('[analytics-id="srp-facet-commercialDestination"] :selected').attr('label') && jQ('[analytics-id="srp-facet-commercialDestination"] :selected').attr('label').replace(/(.*)\s\(\d+\)/,'$1') || '';
            facetPM['deptairport'] = jQ('[analytics-id="srp-facet-depAirport"] :selected') && jQ('[analytics-id="srp-facet-depAirport"] :selected').attr('label') && jQ('[analytics-id="srp-facet-depAirport"] :selected').attr('label').replace(/(.*)\s\(\d+\)/,'$1') || '';
            facetPM['resort'] = jQ('[analytics-id="srp-facet-resortCategory"] :selected') && jQ('[analytics-id="srp-facet-resortCategory"] :selected').attr('label') && jQ('[analytics-id="srp-facet-resortCategory"] :selected').attr('label').replace(/(.*)\s\(\d+\)/,'$1') 
                || wgdCurrent.resortCategory && wgdCurrent.resortCategory[0]
                || '';
            facetPM['duration'] = "I don't mind"; (wgD && wgD.durationFacet && wgD.durationFacet.options || []).forEach(function(e){if(e.selected == true) {facetPM.duration = e.value}});

            facetPM['boardbasis'] = []; (wgD && wgD.boardType && wgD.boardType.options || []).forEach(function(e){if(e.selected == true) {facetPM.boardbasis.push(e.title)}});
            facetPM['concepts'] = []; (wgD && wgD.concept && wgD.concept.options || []).forEach(function(e){if(e.selected == true) {facetPM.concepts.push(e.title)}});
            facetPM['discountperc'] = []; (wgD && wgD.discount && wgD.discount.options || []).forEach(function(e){if(e.selected == true) {facetPM.discountperc.push(e.title)}});
            facetPM['discountvalue'] = []; (wgD && wgD.savings && wgD.savings.options || []).forEach(function(e){if(e.selected == true) {facetPM.discountvalue.push(e.title)}});
            facetPM['pricerange'] = []; (wgD && wgD.priceRange && wgD.priceRange.options || []).forEach(function(e){if(e.selected == true) {facetPM.pricerange.push(e.title)}});
            facetPM['starrating'] = []; (wgD && wgD.stars && wgD.stars.options || []).forEach(function(e){if(e.selected == true) {facetPM.starrating.push(e.title)}});
            facetPM['tripadvisorrating'] = []; (wgD && wgD.tripAdvisor && wgD.tripAdvisor.options || []).forEach(function(e){if(e.selected == true) {facetPM.tripadvisorrating.push(e.title)}});
            facetPM['touroperator'] = []; (wgD && wgD.brand && wgD.brand.options || []).forEach(function(e){if(e.selected == true) {facetPM.touroperator.push(e.title)}});
            facetPM['touroperator'] = []; (wgD && wgD.brand && wgD.brand.options || []).forEach(function(e){if(e.selected == true) {facetPM.touroperator.push(e.title)}});
            //facetPM['hotelfacilities'] = []; (wgD && wgD.hotelFacilities && wgD.hotelFacilities.options || []).forEach(function(e){if(e.selected == true) {facetPM.hotelfacilities.push(e.title)}});
            //facetPM['roomfacilities'] = []; (wgD && wgD.roomFacilities && wgD.roomFacilities.options || []).forEach(function(e){if(e.selected == true) {facetPM.roomfacilities.push(e.title)}});
            facetPM['hotelfacilities'] = [];
            if(jQ('[analytics-id="srp-facet-hotelFacilities"]')) {
            jQ('[analytics-id="srp-facet-hotelFacilities"]').each(function(e,d){ 
                if(jQ(this) && jQ(this).is(':checked') && jQ(this).next() && jQ(this).next().find('[class="optionLabel"]').text()){ facetPM['hotelfacilities'].push(jQ(this).next().find('[class="optionLabel"]').text() || '') }
            })};
            facetPM['roomfacilities'] = [];
            if(jQ('[analytics-id="srp-facet-roomFacilities"]')) {
            jQ('[analytics-id="srp-facet-roomFacilities"]').each(function(e,d){ 
                if(jQ(this) && jQ(this).is(':checked') && jQ(this).next() && jQ(this).next().find('[class="optionLabel"]').text()){ facetPM['roomfacilities'].push(jQ(this).next().find('[class="optionLabel"]').text() || '') }
            })}
            facetPM['departuretime'] = []; (wgD && wgD.incomingDepartureTime && wgD.incomingDepartureTime.options || []).forEach(function(e){if(e.selected == true) {facetPM.departuretime.push(jQ(e.title).text())}});
            facetPM['returntime'] = []; (wgD && wgD.outgoingDepartureTime && wgD.outgoingDepartureTime.options || []).forEach(function(e){if(e.selected == true) {facetPM.returntime.push(jQ(e.title).text())}});

            facetPM['freechild'] = false;
            if(jQ('[analytics-id="srp-facet-freeChildFlag"]')) {
            jQ('[analytics-id="srp-facet-freeChildFlag"]').each(function(e,d){ 
                if(jQ(this) && jQ(this).is(':checked') && jQ(this).attr('type') === 'checkbox') { facetPM['freechild'] = true || false }
            })};

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
            newPM['destination'] = ''; if (!facetPM.destination || newPM.destinationsearched.replace(/,/g,' -').toLowerCase().match(facetPM.destination.toLowerCase())){
                newPM['destination']=newPM['destinationsearched']} else {newPM['destination']=facetPM['destination']
            };
            newPM['resort'] = ''; if (!facetPM['resort']){newPM['resort']=newPM['resortsearched']} else {newPM['resort']=facetPM['resort']};
            newPM['deptairport'] = ''; if (!facetPM.deptairport || facetPM.deptairport === 'Any Airport' || newPM.deptairportsearched.replace(/,/g,' -').toLowerCase().match(facetPM.deptairport.toLowerCase())){
                newPM['deptairport']=newPM['deptairportsearched']} else {newPM['deptairport']=facetPM['deptairport']
            };
            newPM['duration'] = ''; if (!facetPM['duration']){newPM['duration']=newPM['durationsearched']} else {newPM['duration']=facetPM['duration']};

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
        var cntTZ9GH9 = 0; if(window.dataLayer_TZ9GH9) {window.dataLayer_TZ9GH9.forEach(function(e){if(e.event === 'CATTDL LP'){cntTZ9GH9 = cntTZ9GH9 + 1}})};
        dl.push({'event': 'pid_'+cdl.CATTParams.pageid});
        dl.push({'event': (window.getPageData && window.getPageData(cdpm.urlparams && cdpm.urlparams.pathname)?'CATTDL SRP':'CATTDL LP'), 'counter': cntTZ9GH9});
        window.dataLayer_TZ9GH9 && window.dataLayer_TZ9GH9.push({'event': (window.getPageData && window.getPageData(cdpm.urlparams && cdpm.urlparams.pathname)?'CATTDL SRP':'CATTDL LP'), 'counter': cntTZ9GH9});
    }
    return jQ && jQ.extend && cdl
}(window.jQuery, window.dataLayer, window.CATTDL))
</script>