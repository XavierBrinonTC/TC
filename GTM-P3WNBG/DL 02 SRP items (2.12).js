<script id='GTM-P3WNBG_cattdlSRPitems'>
(function gtm_cattdlSRPitems(jQ, dl, cdl) {
    'use strict'
    if (jQ && jQ.extend && cdl) try {
        var cdpm = cdl.CATTParams
        var keeps = {}
        var locpathname = cdpm.urlparams && cdpm.urlparams.pathname || ''
        var wgD = window.getPageData && window.getPageData(locpathname) || {}

        var wgetDataSrch = window.getPageData && (window.getPageData('/search') || window.getPageData('/searchresults-map') || (/\/holidays\/.+\/.+/i.test(locpathname) && window.getPageData(locpathname))) || {}
        if (Object.keys(wgetDataSrch).length !== 0) {
            var srpPM = {};
            var wgdSrch = wgetDataSrch.links && wgetDataSrch.links.search && wgetDataSrch.links.search.context || wgetDataSrch.searchParams || {};

            srpPM['deptairportsearchedarray'] = (!wgdSrch.origin || typeof wgdSrch.origin == 'string')?[(wgdSrch.origin && wgdSrch.origin.replace(/\&amp;/g, '-').replace(/\&/g, '-') || '')]:(wgdSrch.origin.map && wgdSrch.origin.map(function(e){return e.replace(/\&amp;/g, '-').replace(/\&/g, '-')}) || ['']);
            srpPM['deptairportsearched'] = srpPM.deptairportsearchedarray && srpPM.deptairportsearchedarray.join(';') || '';
            srpPM['destinationsearchedarray'] = (!wgdSrch.goingTo || typeof wgdSrch.goingTo == 'string')?[(wgdSrch.goingTo && wgdSrch.goingTo.replace(/\&amp;/g, '-').replace(/\&/g, '-') || 'Any destination')]:(wgdSrch.goingTo.map && wgdSrch.goingTo.map(function(e){return e.replace(/\&amp;/g, '-').replace(/\&/g, '-')}) || ['Any destination']);
            if(!srpPM.destinationsearchedarray.toString()){srpPM.destinationsearchedarray = ['Any destination']};
            srpPM['destinationsearched'] = srpPM.destinationsearchedarray && srpPM.destinationsearchedarray.join(';') || '';
            srpPM['resortsearchedarray'] = (!wgdSrch.resortCode || typeof wgdSrch.resortCode == 'string')?[(wgdSrch.resortCode && wgdSrch.resortCode.replace(/\&amp;/g, '-').replace(/\&/g, '-') || '')]:(wgdSrch.resortCode.map && wgdSrch.resortCode.map(function(e){return e.replace(/\&amp;/g, '-').replace(/\&/g, '-')}) || ['']);
            srpPM['resortsearched'] = srpPM.resortsearchedarray && srpPM.resortsearchedarray.join(';') || '';

            srpPM['accomcodesearched'] = wgdSrch.hotelId.toString() || "";
            srpPM['accomnamesearched'] = wgdSrch.hotelName || "";
            srpPM['searchwidened'] = (''+wgdSrch.flexible == 'true')?'true':((''+wgD.widened == 'true')?'true':'false');
            srpPM['searchwidenedselected'] = (''+wgdSrch.flexible == 'true')?'true':'false';
            srpPM['durationsearched'] = wgdSrch.duration || "I dont mind";            
            srpPM['sortoption'] = wgdSrch.sort || "";
            srpPM['searchtype'] = (srpPM.accomnamesearched && srpPM.accomnamesearched === srpPM.destinationsearched)?'accom':'destination';

            var destination = ''; wgetDataSrch.commercialDestination && (wgetDataSrch.commercialDestination.options || []).filter(function(e){return e && e.selected}).forEach(function(e){destination=(e.title)});
            var resort = ''; wgetDataSrch.resortCategory && (wgetDataSrch.resortCategory.options || []).filter(function(e){return e && e.selected}).forEach(function(e){resort=(e.title)});
            var deptairport = ''; wgetDataSrch.depAirport && (wgetDataSrch.depAirport.options || []).filter(function(e){return e && e.selected}).forEach(function(e){deptairport=(e.title)});
            var accom = wgetDataSrch.hotelName && wgetDataSrch.hotelName.options && wgetDataSrch.hotelName.options[0] && (wgetDataSrch.hotelName.options[0].title || wgetDataSrch.hotelName.options[0].value) || "";
            var duration = ''; (wgetDataSrch && wgetDataSrch.durationFacet && wgetDataSrch.durationFacet.options || []).forEach(function(e){if(e.selected == true) {duration = e.value}});

            srpPM['destination'] = ''; if (!destination || srpPM.destinationsearched.replace(/,/g,' -').toLowerCase().match(destination.toLowerCase())){
                srpPM['destination']=srpPM['destinationsearched']} else {srpPM['destination']=destination
            };
            srpPM['deptairport'] = ''; if (!deptairport || deptairport === 'Any Airport' || srpPM.deptairportsearched.replace(/,/g,' -').toLowerCase().match(deptairport.toLowerCase())){
                srpPM['deptairport']=srpPM['deptairportsearched']} else {srpPM['deptairport']=deptairport
            };
            srpPM['resort'] = ''; if (!resort){srpPM['resort']=srpPM['resortsearched']} else {srpPM['resort']=resort};
            srpPM['accomname'] = accom || '';
            srpPM['duration'] = ''; if (!duration){srpPM['duration']=srpPM['durationsearched']} else {srpPM['duration']=duration};

            var strdeptdate = ''
            if  (wgdSrch.when && wgdSrch.when._d) {
                srpPM['deptdate'] = wgdSrch.when._d || '0';
            } else {
                srpPM['deptdate'] = (strdeptdate = wgdSrch.when || wgdSrch.when || "19700101") && +new Date(strdeptdate.substring(0,4), strdeptdate.substring(4,6)-1, strdeptdate.substring(6,8)) || 0;                
            }
            var wgdItems = wgetDataSrch.items || {}
            srpPM['searchresultstop3'] = wgdItems && ((wgdItems[0] && wgdItems[0].id || "")+"-"+(wgdItems[1] && wgdItems[1].id || "")+"-"+(wgdItems[2] && wgdItems[2].id || ""))|| '';
            srpPM['searchlist'] = wgdItems.length || 0;     

            var wgdStats = wgetDataSrch.stats || {}
            srpPM['searchresultstotal'] = wgdStats.total || 0;
            srpPM['searchresultsperpage'] = (parseInt((wgdStats.end - wgdStats.start + 1)/10) == 0)?(Math.ceil(6/10)*10):((wgdStats.end - wgdStats.start + 1))
            srpPM['searchresultspages'] = Math.ceil(wgdStats.total / srpPM['searchresultsperpage']) || 0;
            srpPM['searchresultspagenbr'] = parseInt(jQ('div.paginationSearchResults:eq(0) span.active').attr('analytics-data') || Math.ceil((wgdStats.end + 1)/srpPM['searchresultsperpage']) || 0)
            srpPM['sessionid'] = window.sessionToken || "";

            cdpm.srpparams = {};
            jQ.extend(cdl.CATTParams.srpparams, srpPM);

            var curItem = {};
            var curpath = [];
            var curflightout = {};
            var curflightin = {};
            var srpItems = [];

            for (var i = 0; i < wgdItems.length; i++) {
                curItem = wgdItems[i];
                curpath = curItem.geoPath && curItem.geoPath.value && curItem.geoPath.value.split("/") || [];
                curflightout = curItem.flights && curItem.flights[0] && curItem.flights[0].outbound && curItem.flights[0].outbound.legs || {};
                curflightin = curItem.flights && curItem.flights[0] && curItem.flights[0].inbound && curItem.flights[0].inbound.legs || {};
                var curflightoutlen = curflightout.length;
                var curflightinlen = curflightin.length;
                srpItems[i] = {
                    accomcode           :   (curItem.hotel && curItem.hotel.code || "").replace('|','-'),
                    accomguid           :   curItem.id || "",
                    accomlatitude       :   curItem.geoLocation && curItem.geoLocation.latitude || "",
                    accomlongitude      :   curItem.geoLocation && curItem.geoLocation.longitude || "",
                    accomname           :   curItem.hotel && curItem.hotel.value || "",
                    accomcountry        :   curpath.length > 0 && curpath[0] || "",
                    accomregion         :   curpath.length > 1 && curpath[1] || "",
                    accomresort         :   curpath.length > 2 && curpath[2] || "",
                    accomconcept        :   curItem.concepts && curItem.concepts[0] && curItem.concepts[0].type || "",
                    arrivalairportcode  :   curflightout && curflightout[curflightoutlen-1] && curflightout[curflightoutlen-1].arrival  && curflightout[curflightoutlen-1].arrival.airportCode
                                                || "",
                    arrivalairport      :   curflightout && curflightout[curflightoutlen-1] && curflightout[curflightoutlen-1].arrival  && curflightout[curflightoutlen-1].arrival.title
                                                || "",
                    arrivaltime         :   curflightout && curflightout[curflightoutlen-1] && curflightout[curflightoutlen-1].arrival  && curflightout[curflightoutlen-1].arrival.time
                                                || 0,
                    boardbasis          :   curItem.priceDetail && curItem.priceDetail.boardTypeDesc || "",
                    carrier             :   curflightout && curflightout[0] && curflightout[0].airlineCode
                                                || "",
                    deptairportcode     :   curflightout && curflightout[0] && curflightout[0].departure && curflightout[0].departure.airportCode
                                                || "",
                    deptairport         :   curflightout && curflightout[0] && curflightout[0].departure && curflightout[0].departure.title
                                                || "",
                    deptdate            :   curflightout && curflightout[0] && curflightout[0].departure && curflightout[0].departure.time
                                                || 0,
                    depttime            :   curflightout && curflightout[0] && curflightout[0].departure && curflightout[0].departure.time
                                                || 0,
                    discountvalue       :   curItem.priceDetail && curItem.priceDetail.totalDiscount || "",
                    duration            :   curItem.duration  || "0",
                    pricepp             :   curItem.priceDetail && curItem.priceDetail.priceFrom || "",
                    pricetotal          :   curItem.priceDetail && curItem.priceDetail.amount || "",
                    returndate          :   curflightin && curflightin[curflightinlen-1] && curflightin[curflightinlen-1].departure && curflightin[curflightinlen-1].departure.time
                                                || 0,
                    returntime          :   curflightin && curflightin[curflightinlen-1] && curflightin[curflightinlen-1].departure && curflightin[curflightinlen-1].departure.time
                                                || 0,
                    starrating          :   curItem.ratings && curItem.ratings.starRating || "",
                    touroperator        :   curItem.tourOperator && curItem.tourOperator.name || ""
                };
            
                srpItems[i].flightdetails = {};
                srpItems[i].flightdetails.outbound = [];
                var curflightoutJ = {}
                for (var j = 0; j < curflightoutlen; j++) {
                    curflightoutJ = curflightout && curflightout[j] || {};
                    srpItems[i].flightdetails.outbound.push({
                        depart  : {
                            date                : curflightoutJ.departure && curflightoutJ.departure.time && +(new Date(curflightoutJ.departure.time) || 0),
                            time                : curflightoutJ.departure && curflightoutJ.departure.time && +(new Date(curflightoutJ.departure.time) || 0),
                            airportcode         : curflightoutJ.departure && curflightoutJ.departure.airportCode || "",
                            airport             : curflightoutJ.departure && curflightoutJ.departure.title,
                            carrier             : {
                                                    code :  curflightoutJ.airline && curflightoutJ.airlineCode || "",
                                                    name :  curflightoutJ.airline || ""
                                                  },
                            flightno            : curflightoutJ.flightCode || ''
                        },
                        arrive  : {
                            date                : curflightoutJ.arrival && curflightoutJ.arrival.time && +(new Date(curflightoutJ.arrival.time) || 0),
                            time                : curflightoutJ.arrival && curflightoutJ.arrival.time && +(new Date(curflightoutJ.arrival.time) || 0),
                            airportcode         : curflightoutJ.arrival && curflightoutJ.arrival.airportCode || "",
                            airport             : curflightoutJ.arrival && curflightoutJ.arrival.title,
                            carrier             : {
                                                    code :  curflightoutJ.airline && curflightoutJ.airlineCode || "",
                                                    name :  curflightoutJ.airline || ""
                                                  },
                            flightno            : curflightoutJ.flightCode || ''
                        }
                    })
                };

                srpItems[i].flightdetails.inbound = [];             
                var curflightinK = {}
                for (var k = 0; k < curflightinlen; k++) {
                    curflightinK = curflightin && curflightin.legs && curflightin.legs[k] || {}
                    srpItems[i].flightdetails.inbound.push({
                        depart  : {
                            date                : curflightinK.departure && curflightinK.departure.time && +(new Date(curflightinK.departure.time) || 0),
                            time                : curflightinK.departure && curflightinK.departure.time && +(new Date(curflightinK.departure.time) || 0),
                            airportcode         : curflightinK.departure && curflightinK.departure.airportCode || "",
                            airport             : curflightinK.departure && curflightinK.departure.title,
                            carrier             : {
                                                    code :  curflightinK.airline && curflightinK.airlineCode || "",
                                                    name :  curflightinK.airline || ""
                                                  },
                            flightno            : curflightinK.flightCode || ''
                        },
                        arrive  : {
                            date                : curflightinK.arrival && curflightinK.arrival.time && +(new Date(curflightinK.arrival.time) || 0),
                            time                : curflightinK.arrival && curflightinK.arrival.time && +(new Date(curflightinK.arrival.time) || 0),
                            airportcode         : curflightinK.arrival && curflightinK.arrival.airportCode || "",
                            airport             : curflightinK.arrival && curflightinK.arrival.title,
                            carrier             : {
                                                    code :  curflightinK.airline && curflightinK.airlineCode || "",
                                                    name :  curflightinK.airline || ""
                                                  },
                            flightno            : curflightinK.flightCode || ''
                        }
                    })
                };
            }
            cdpm.srpresults = srpItems;
        }
        window.CATTDL.CATTParams = cdpm
    } catch(e) {
        cdl.error('GTM CATTDL SRP items: '+e)
    } finally {
        dl.push({'event': 'CATTDL SRP items'+'|'+(cdl.CATTParams && cdl.CATTParams.pageid)});
        window.dataLayer_TZ9GH9 && window.dataLayer_TZ9GH9.push({'event': 'CATTDL SRP items'+'|'+(cdl.CATTParams && cdl.CATTParams.pageid || '')});
    }
    return jQ && jQ.extend && cdl
}(window.jQuery, window.dataLayer, window.CATTDL))
</script>