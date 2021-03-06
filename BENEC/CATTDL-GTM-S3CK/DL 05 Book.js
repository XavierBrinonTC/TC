<script>
(function gtm_cattdlBook(jQ, dl, cdl) {
    'use strict'
    if (jQ && jQ.extend && cdl) try {
        var cdpm = cdl.CATTParams || {};
        var ctpm = window.CATTParams || {};
        var newPM = {}

        cdpm.errors = {}
        var errorPM = {};
        errorPM['errorcode'] = (/(^\d+)/.exec(ctpm.ErrorCode) || '') || [].pop() || '';
        errorPM['errormsg'] = ctpm.ErrorCode || '';
        jQ.extend(cdl.CATTParams.errors, errorPM);
        
        var refreshparams = [
            "AccomCode"
            , "AccomName"
            , "AccomGEOLocation"
            , "AccomResort"
            , "AppServer"
            , "BasketContent"
            , "BoardBasis"
            , "BookingRef"
            , "BookingValue"
            , "Brochure"
            , "Carrier"
            , "DeptDate"
            , "DepositSelection"
            , "DepositValue"
            , "Destination"
            , "DestinationISOCode"
            , "Duration"
            , "FlightType"
            , "Insurance"
            , "InsuranceSpec"
            , "PaxAdult"
            , "PaxChild"
            , "PaxInfant"
            , "PaxTotal"
            , "Region"
            , "RegionGEOLocation"
            , "RetDate"
            , "Rooms"
            , "SearchApp"
            , "SessId"
            , "TourOperator"
            , "PageContext"
            , "PageType"
            , "PaymentOption"
            , "SiteLanguage"
            , "StarRating"          
            , "siteType"
        ];

        var ctpmkeys = Object.keys(ctpm);
        for (var i in ctpmkeys){
                    var ctpmval = ctpmkeys[i] || ''
                    var reg = new RegExp(ctpmval, 'i');
                    if (ctpmval && reg.test(refreshparams.join('|'))) { 
                        cdpm[ctpmval.toLowerCase()] = ctpm[ctpmval]
                    }
        };      
        

        cdpm['accomcountry'] = ctpm.Destination || '';
        cdpm['accomregion'] = ctpm.Region || '';
        cdpm['accomresort'] = ctpm.AccomResort || '';
        cdpm['deptdate'] = +(new Date(ctpm.DeptDate && ctpm.DeptDate.replace(/(\d+)\/(\d+)\/(\d+)/,'$3-$2-$1')) || '0');
        cdpm['destairport'] = (ctpm.DestinationAirportSelected || '').toUpperCase();      
        cdpm['deptairport'] = (ctpm.DepartureAirportSelected || '').toUpperCase();
        cdpm['retdate'] = +(new Date(ctpm.RetDate && ctpm.RetDate.replace(/(\d+)\/(\d+)\/(\d+)/,'$3-$2-$1')) || '0');
        cdpm['duration'] = +(ctpm.Duration || '0');
        cdpm['roomcodes'] = ctpm.RoomType && ctpm.RoomType.split('|') || [];
        cdpm['sessionid'] = ctpm.SessId || '';
        cdpm['starrating'] = ctpm.StarRating && ctpm.StarRating.replace(',','.')
        cdpm['pricetotal'] = ctpm.BookingValue || '';
        //cdpm['pricepp'] = (/\d+/.exec((jQuery('p.price.big-font') && jQuery('p.price.big-font').eq(1)).text() || '') || []).pop()

        window.CATTDL.CATTParams = cdpm;
    } catch(e) {
        cdl.error('GTM CATTDL Book: '+e)
    } finally {
        dl.push({'event': 'pid_'+cdl.CATTParams.pageid});
        dl.push({'event': 'CATTDL Book'})
        window.gatcDL && gatcDL.push({'event': 'CATTDL Book'})
    }
    return jQ && jQ.extend && cdl
}(window.jQuery, window.dataLayer, window.CATTDL))
</script>
