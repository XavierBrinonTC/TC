<script id='GTM-58WJXK_cattdlAccom'>
(function gtm_cattdlAccom(jQ, dl, cdl) {
    'use strict'
    if (jQ && jQ.extend && cdl) try {
        var cdpm = cdl.CATTParams
        var newPM = {}
        var keeps = {}
        cdpm.errors = {}
        var errorPM = {}

        var wgD = window.getPageData && window.getPageData(cdpm.urlparams && cdpm.urlparams.pathname || "") || {};
        var errParams = wgD.searchParams || {};
        cdpm.lob = "generic";
        cdpm.holidaytype = "generic";
        cdpm.pagecontext = "angular";
        var params = JSON.parse(CATTDL.ckget('gtm_params') || '{}');
        newPM['initialholidaytype'] = params && params.initialholidaytype || '';        
        
        if (wgD && wgD.details && wgD.matrix) {
            var wgdMatrix = wgD.matrix && wgD.matrix.data || {};
            var wgdAccom = wgdMatrix && wgdMatrix.links && wgdMatrix.links && wgdMatrix.links.self && wgdMatrix.links.self.context || {}
            var wgdParams = wgdMatrix && wgdMatrix.links && wgdMatrix.links && wgdMatrix.links.matrixSearch && wgdMatrix.links.matrixSearch.params
            var wgdPrice = wgdMatrix && wgdMatrix.priceList && wgD.matrix.data.priceList[0] || !1
            var wgdPath = wgdAccom.geoPath && wgdAccom.geoPath.split("/") || []

            newPM['accomcountry'] = wgdPath.length > 0 && wgdPath[0] || "";
            newPM['accomregion'] = wgdPath.length > 1 && wgdPath[1] || "";
            newPM['accomresort'] = wgdPath.length > 2 && wgdPath[2] || "";
            newPM['resort'] = newPM.accomresort;
            var wgdDetails = wgD.details || {}
            newPM['duration'] = +(wgdParams && wgdParams.duration && wgdParams.duration[0] && wgdParams.duration[0].value) || +(wgdPrice.duration) || 0;
            newPM['seasoncode'] = (wgdAccom && wgdAccom.season) || (wgdPrice && wgdPrice.seasonCode) || 'N/A';

            newPM['accomcode'] = wgdPrice.hotelCode || wgdMatrix.bookingContext && wgdMatrix.bookingContext.context && wgdMatrix.bookingContext.context.field && wgdMatrix.bookingContext.context.field[0] && wgdMatrix.bookingContext.context.field[0].value || "";
            newPM['accomguid'] = wgdAccom.id || wgdAccom.hotelId || wgdDetails.productId || "";
            newPM['accomtype'] = newPM.accomguid && newPM.accomguid.split('-')[3] || '';
            newPM['deptairport'] = wgdAccom.depAirport || "";
            newPM['destination'] = wgdAccom.geoPath && wgdAccom.geoPath || "";

            if (wgdPrice) {
                newPM['brochure'] = wgdPrice.brochureName || "";
                cdpm['holidaytype'] = ({
                    'blank'             : 'package',
                    'AANB'              : 'package',
                    'BUNG'              : 'carholidays',
                    'AZAU'              : 'carholidays',
                    'NEAR'              : 'carholidays',
                    'TENT'              : 'carholidays',
                    'CAMP'              : 'carholidays',                    
                    'CITY'              : 'citytrips',
                    'ACIT'              : 'citytrips',
                    'AUTO'              : 'ski',     
                    'AAUT'              : 'ski',                    
                    'VER'               : 'flights',
                    'AVER'              : 'flights',                                        
                    ''                  : 'package'
                })[(/.*/i.exec(newPM.brochure) || ['']).pop()];
                cdpm['lob'] =  (cdpm.holidaytype && cdpm.holidaytype!=='package')?'hotel':'package';                

                newPM['includedinpackage'] = []; for (var i = 0; i < (wgdPrice.whatsIncluded && wgdPrice.whatsIncluded.length || 0); newPM.includedinpackage.push(wgdPrice.whatsIncluded[i++].description));
                newPM['touroperator'] = wgdPrice.brandCode || "";
                newPM['totalprice'] = wgdPrice.priceSummary && wgdPrice.priceSummary.totalAmount || 0;
                newPM['pricepp'] = wgdPrice.priceSummary && wgdPrice.priceSummary.priceFrom || 0;
                newPM['discountvalue'] = wgdPrice.priceSummary && wgdPrice.priceSummary.reductionAmount || 0;
                newPM['discountperc'] = wgdPrice.priceSummary && wgdPrice.priceSummary.reductionPercentage || 0;
                newPM['boardbasis'] = wgdPrice.boardTypeDesc || "";

                var flout = wgdPrice && wgdPrice.flights && wgdPrice.flights[0] && wgdPrice.flights[0].outbound && wgdPrice.flights[0].outbound.legs || ''
                newPM['flightdetails'] = {};
                if (flout) {
                    newPM['flightdetails'].outbound = [];
                    var fltout = [];
                    for (var i = 0; i < (flout.length || 0); i++) {
                        fltout = flout[i]
                        newPM['flightdetails'].outbound.push({
                            depart  : {
                                date            : fltout.departure && fltout.departure.time && +new Date(fltout.departure.time) || 0,
                                time            : fltout.departure && fltout.departure.time && +new Date(fltout.departure.time) || 0,
                                airportcode     : fltout.departure && fltout.departure.airportCode || "",
                                airport         : fltout.departure && fltout.departure.title
                            },
                            arrive  : {
                                date            : fltout.arrival && fltout.arrival.time && +new Date(fltout.arrival.time) || 0,
                                time            : fltout.arrival && fltout.arrival.time && +new Date(fltout.arrival.time) || 0,
                                airportcode     : fltout.arrival && fltout.arrival.airportCode || "",
                                airport         : fltout.arrival && fltout.arrival.title
                            },
                            carrier : {
                                code            :   fltout.airline && fltout.airlineCode || "",
                                name            :   fltout.airline || ""
                            },
                            flightno : fltout.flightCode || '',
                            premium  : fltout.premium || false
                        })
                    };
                    var newPMflout = newPM.flightdetails && newPM.flightdetails.outbound[0];
                    newPM['carrier'] = []; 
                    newPM['carrier'].code = newPMflout.carrier.code
                    newPM['carrier'].name = newPMflout.carrier.name
                    newPM['destairport'] = newPMflout.arrive.airportcode
                    newPM['arrivaltime'] = newPMflout.arrive.time
                    newPM['depttime'] = newPMflout.depart.time
                    newPM['flightno'] = newPMflout.depart.flightno
                    newPM['premiumcabin'] = newPMflout.premium
                }

                var flin = wgdPrice && wgdPrice.flights && wgdPrice.flights[0] && wgdPrice.flights[0].inbound && wgdPrice.flights[0].inbound.legs || ''
                if (flin) {
                newPM['flightdetails'].inbound = []
                    var fltin = [];
                    for (var i = 0; i < (flin.length || 0); i++) {
                        fltin = flin[i]
                        newPM['flightdetails'].inbound.push({
                            depart  : {
                                date                : fltin.departure && fltin.departure.time && +new Date(fltin.departure.time) || 0,
                                time                : fltin.departure && fltin.departure.time && +new Date(fltin.departure.time) || 0,
                                airportcode         : fltin.departure && fltin.departure.airportCode || "",
                                airport             : fltin.departure && fltin.departure.title
                            },
                            arrive  : {
                                date                : fltin.arrival && fltin.arrival.time && +new Date(fltin.arrival.time) || 0,
                                time                : fltin.arrival && fltin.arrival.time && +new Date(fltin.arrival.time) || 0,
                                airportcode         : fltin.arrival && fltin.arrival.airportCode || "",
                                airport             : fltin.arrival && fltin.arrival.title
                            },
                            carrier  : {
                                code                :   fltin.airline && fltin.airlineCode || "",
                                name                :   fltin.airline || ""
                            },
                            flightno : fltin.flightCode || '',
                            premium  : fltin.premium || false
                        })
                };

                    newPM['returndate'] = newPM.flightdetails.inbound[0].depart.time
                                        || +new Date(newPM.deptdate + (newPM.duration)*1000*60*60*24) 
                                        || 0
                    newPM['returntime'] = newPM.flightdetails.inbound[0].depart.time            
                }
            }

            var strdeptdate = wgdAccom.selectedDate || wgdAccom.startDate || 0;
            newPM['deptdate'] = strdeptdate && +(new Date(strdeptdate.substring(4,0), strdeptdate.substring(5,7)-1, strdeptdate.substring(8,10))) 
                                || flightout && flightout.departure && flightout.departure.time && +new Date(flightout.departure.time) 
                                || 0;

            if (wgdDetails) {
                if (wgdDetails.reviews) {
                    newPM['ratings'] = {
                        bazaarvoice : { 
                                        id          : wgdDetails.reviews.bazaarvoice && wgdDetails.reviews.bazaarvoice.id || '',
                                        avgrating   : wgdDetails.reviews.bazaarvoice && wgdDetails.reviews.bazaarvoice.averageRating || "",
                                        count       : wgdDetails.reviews.bazaarvoice && wgdDetails.reviews.bazaarvoice.reviewCount || ""
                                      },
                        zoover : { 
                                        id          : wgdDetails.reviews.zoover && wgdDetails.reviews.zoover.id || '',
                                        avgrating   : wgdDetails.reviews.zoover && wgdDetails.reviews.zoover.averageRating || "",
                                        count       : wgdDetails.reviews.zoover && wgdDetails.reviews.zoover.reviewCount || ""
                                      }
                    };
                }               
                newPM['accomlongitude'] = wgdDetails.geoLocation && wgdDetails.geoLocation.longitude || "";
                newPM['accomlatitude'] = wgdDetails.geoLocation && wgdDetails.geoLocation.latitude || "";
                newPM['accomname'] = wgdDetails.hotelName && wgdDetails.hotelName.value || wgdPrice.hotelName || "";
            } 

            var arrpax = wgdAccom.room || ""
            if (typeof arrpax == "string"){
                newPM['paxadultperroom'] = []; newPM['paxadultperroom'].push(+arrpax.split(",")[1] || 0);
                newPM['paxchildperroom'] = []; newPM['paxchildperroom'].push((arrpax.split(",")).slice(2).map(Number).filter(function(e){return e>1}).length || 0);
                newPM['paxinfantperroom'] = []; newPM['paxinfantperroom'].push((arrpax.split(",")).slice(2).map(Number).filter(function(e){return e<2}).length || 0);
                newPM['roomcodes'] = []; newPM['roomcodes'].push(arrpax.split(",")[0]);
            } else {    
                newPM['paxadultperroom'] = []; for (var i = 0; i < arrpax.length; newPM['paxadultperroom'].push(+((arrpax[i++].split(",") || []).slice(1)[0]) || 0));
                newPM['paxchildperroom'] = []; for (var i = 0; i < arrpax.length; newPM['paxchildperroom'].push((arrpax[i++].split(",") || []).slice(2).map(Number).filter(function(e){return e>1}).length));
                newPM['paxinfantperroom'] = []; for (var i = 0; i < arrpax.length; newPM['paxinfantperroom'].push((arrpax[i++].split(",") || []).slice(2).map(Number).filter(function(e){return e<2}).length));
                newPM['roomcodes'] = []; for (var i = 0; i < arrpax.length; newPM['roomcodes'].push((arrpax[i++].split(",")[0]) || ""));
            }
            newPM['paxadult'] = (function (){var total = 0; jQ.each(newPM['paxadultperroom'],function() {total += this;}); return total}()) || 0;
            newPM['paxchild'] = (function (){var total = 0; jQ.each(newPM['paxchildperroom'],function() {total += this;}); return total}()) || 0;
            newPM['paxinfant'] = (function (){var total = 0; jQ.each(newPM['paxinfantperroom'],function() {total += this;}); return total}()) || 0;
            newPM['paxtotal'] = newPM['paxadult']+newPM['paxchild']+newPM['paxinfant'];
            newPM['rooms'] = newPM['paxadultperroom'].length;

            newPM['starrating'] = wgdPrice && wgdPrice.starRating || wgdDetails && wgdDetails.ratings && wgdDetails.ratings.starRating || "";
            newPM['searchapp'] = (wgdAccom.connectorCode == 1?"solr":"multicom");
            newPM['sessionid'] = window.sessionToken || ""
        }
        jQ.extend(cdpm, newPM, keeps);        

        errorPM['errorcode'] = wgD.errorCode || "";
        errorPM['errormsg'] = (wgD.message || []).join(' ');
        jQ.extend(cdpm.errors, errorPM);

        window.CATTDL.CATTParams = cdpm;
    } catch(e) {
        cdl.error('GTM CATTDL Accom: '+e)
    } finally {
        dataLayer.push({'event': 'pid_'+cdl.CATTParams.pageid});
        dataLayer.push({'event': (window.getPageData?'CATTDL Accom':'CATTDL LP')})
        window.dataLayer_N5GRGC && dataLayer_N5GRGC.push({'event': (window.getPageData?'CATTDL Accom':'CATTDL LP')})
    }
    return cdl
}(window.jQuery, window.dataLayer, window.CATTDL))
</script>