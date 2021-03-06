<script id='gtm_Attribution'>
(function gtm_attribtionLP(jQ, cdl) {
    'use strict'
    if (jQ && cdl) try {
        var cdsr = cdl.CATTParams.searches
        var attrs = JSON.parse(cdl.ckget('gtm_attr') || '[]')
        for (var i = 4; attrs.length > i; attrs.shift());

        if (cdsr.utm_medium || cdsr.gclid){
            var attribution = [
                cdsr.gclid || '',
                cdsr.utm_medium || '',
                cdsr.utm_campaign || '',
                cdsr.utm_content || '',
                cdsr.utm_source || '',
                Date.now() || ''
            ]
            attrs.push(attribution)
        }

         cdl.ckset('gtm_attr', JSON.stringify(attrs), Infinity, '/', '.co-operativetravel.co.uk')
    } catch(e) {
        cdl.error('GTM Attribution LP: '+e)
    }
    return cdl
}(window.jQuery, window.CATTDL))
</script>

<script id='gtm_Attribution'>
(function gtm_attribution(cdl) {
    'use strict';
    if (cdl) try {
        var lands = JSON.parse(cdl.ckget('gtm_attr') || '[]')
        var paidChannels = /afflong|affdirect|agg|ban|criteo|dis|email|newsletter|cp|ppc|gclid/i
        var validLand = lands.filter(function validMedium(e){return paidChannels.test(e[1])}).filter(function validTime(e){return new Date().setMonth(new Date(Date.now()).getMonth() - 1) < e[5]})

        if (validLand.length) {
            var vL = validLand.pop() || [];
            cdl.CATTParams['attribution'] = {
                gclid             : vL[0] || '',
                utm_medium         : vL[1] || '',
                utm_campaign     : vL[2] || '',
                utm_content     : vL[3] || '',
                utm_source         : vL[4] || '',
                landing         : new Date(vL[5] || '') || '',
                date              : vL[5] || ''
            }
            var winningCampaign = ''
            var m = vL[1]
            if ((/afflong/i).test(m)) winningCampaign = 'affiliates';
            else if ((/affdirect/i).test(m)) winningCampaign = 'partners';
            else if ((/agg/i).test(m)) winningCampaign =  vL[4] || 'aggregator';
            else if ((/ban|criteo|dis/i).test(m)) winningCampaign = 'display';
            else if ((/email|newsletter/i).test(m)) winningCampaign = 'eCRM';
            else if ((/cp|ppc|gclid/i).test(m)) winningCampaign = 'PPC';
            else if ((/soc|twitter/i).test(m)) winningCampaign = 'social';

            window.dataLayer && dataLayer.push({'event': 'Attribution '+winningCampaign});
            cdl.ckset('gtm_attr', JSON.stringify([]), Infinity, '/', '.co-operativetravel.co.uk')
        }
    } catch (e) {
        cdl.error('GTM Attr: '+e)
    }
    return cdl && cdl.CATTParams &&  cdl.CATTParams.attribution
}(window.CATTDL))
</script>


<script>
try{
    var pubID = ""; try {pubID = (/xbAFFPublisherID=([^;]*)/gi).exec(document.cookie)[1]} catch (e){}
    var cAttr = ""; try {cAttr = (/xbcattr=([^;]*)/gi).exec(document.cookie)[1]} catch (e){}
    var paidChannels = /aff|met|part|agg|ban|criteo|dis|email|newsletter|cp|ppc|gclid/i;

    var winningCampaign = "default";
    if ((paidChannels).test(cAttr)){
        var camps = cAttr.split('|');
        for (var camp = camps.pop(); !(paidChannels).test(camp); camp = camps.pop()){}
        if ((/aff/i).test(camp)) {
            winningCampaign = 'affiliates';

            var articles = "";
            var execCategory = /_gaq.push\(\[\"_addItem\",\s*.*,\s*"([^"]*)"/i.exec(document.head.innerHTML) || "notFound";
/*
    HO:Accommodation                hotel only
    FO:Flight                         flight only
    ES&H:Eurostar,Accommodation
    AP:Parking
    DP:Flight,Accommodation
    TP:                             holidays
    TO:Transfer
*/
            var jQBookingRef = $('.REFERENCE > .CheckoutItemContentHeader > span').text() || "na"
            var jQFlightNameFO = $('.basketPriceLine > .Header:eq(0)').text() || "na"
            var jQHotelNameHO = $('.basketPriceLine > .Header:eq(0)').text() || "na"
            var jQPrice = $('.price').first().text().replace(/^./, '') || "0"
            var jQDepartureAirport = $('.flightDetail:eq(0) > span:eq(0)').text() || "na"
            var jQDestinationAirport = $('.flightDetail:eq(1) > span:eq(0)').text() || "na"
            var jQDepartureDate = $('.flightDetail:eq(0) > span:eq(1)').text() || "na"
            var jQDepartureDateHO = $('.CheckoutBasketTable th:eq(0) > span:eq(0)').text() || "na"
            var jQTourOperator = $('.airlineReferenceValue').text() || "na"
            var jQBoardBasis = $('.CheckoutBasketTable tr:eq(3) span:eq(0)').text() || "na"
            var jQCarrier = $('.SupplierLogo').attr('alt') || "na"

            if ((/Accommodation/gi).test(execCategory && execCategory[1])){
                articles += "ArticleNb="+jQHotelNameHO+"&ProductName=Hotel Booking&Category=Hotels&Quantity=1&SinglePrice="+jQPrice+"&Brand=TourOperator&Property1="+jQHotelNameHO.replace('&', ' and ')+"&Property2=Destination&Property3=Duration&Property4="+jQDepartureDateHO+"&Property5=StarRating"+unescape("%0D%0A");
            } else if ((/Flight/gi).test(execCategory && execCategory[1])){
                articles += "ArticleNb="+jQFlightNameFO+"&ProductName=Flights&Category=Flights&Quantity=1&SinglePrice="+jQPrice+"&Brand="+jQTourOperator+"&Property1="+jQDepartureAirport+"&Property2="+jQDestinationAirport+"&Property3=Duration&Property4="+jQDepartureDate+"&Property5="+jQCarrier+unescape("%0D%0A");
            } else if ((/$^/gi).test(execCategory && execCategory[1])){
                articles += "ArticleNb="+jQHotelNameHO+"&ProductName=Package booking for 2 Adults and 0 Children&Category=Package > "+jQDestinationAirport+"&Quantity=1&SinglePrice="+jQPrice+"&Brand=TourOperator&Property1="+jQDepartureAirport+"&Property2="+jQDestinationAirport+"&Property3=Duration&Property4="+jQDepartureDate+"&Property5="+jQBoardBasis+unescape("%0D%0A");
            }

            $('body').append('<IMG SRC="https://being.successfultogether.co.uk/registersale.asp?site=12397&ref=236725&order='+jQBookingRef+'&basket='+escape(articles)+'%0D%0A" WIDTH="1" HEIGHT="1" />')
        }
        else if ((/met|part/i).test(camp)) winningCampaign = 'partners';
        else if ((/agg/i).test(camp)) winningCampaign = 'aggregator';
        else if ((/ban|criteo|dis/i).test(camp)) winningCampaign = 'display';
        else if ((/email|newsletter/i).test(camp)) {
            winningCampaign = 'eCRM';
            dataLayer.push({'event': 'EmailAttribution'});
        }
        else if ((/cp|ppc|gclid/i).test(camp)) winningCampaign = 'PPC';
        else if ((/soc|twitter/i).test(camp)) winningCampaign = 'social';
    }
} catch (e){console && console.log && console.log("Coop Conf Cookie Attr: "+e)}
</script>


<script id='gtm_attrAffiliatesDirect'>
(function gtm_affilinateAffdirectDL(cdl, jQ) {
    'use strict';
    if (cdl && jQ) try {
        var cdpm = cdl.CATTParams

        var articles = "";
        var execCategory = /_gaq.push\(\[\"_addItem\",\s*.*,\s*"([^"]*)"/i.exec(document.head.innerHTML) || "notFound";
/*
    HO:Accommodation                hotel only
    FO:Flight                         flight only
    ES&H:Eurostar,Accommodation
    AP:Parking
    DP:Flight,Accommodation
    TP:                             holidays
    TO:Transfer
*/
        var jQBookingRef = $('.REFERENCE > .CheckoutItemContentHeader > span').text() || "na"
        var jQFlightNameFO = $('.basketPriceLine > .Header:eq(0)').text() || "na"
        var jQHotelNameHO = $('.basketPriceLine > .Header:eq(0)').text() || "na"
        var jQPrice = $('.price').first().text().replace(/^./, '') || "0"
        var jQDepartureAirport = $('.flightDetail:eq(0) > span:eq(0)').text() || "na"
        var jQDestinationAirport = $('.flightDetail:eq(1) > span:eq(0)').text() || "na"
        var jQDepartureDate = $('.flightDetail:eq(0) > span:eq(1)').text() || "na"
        var jQDepartureDateHO = $('.CheckoutBasketTable th:eq(0) > span:eq(0)').text() || "na"
        var jQTourOperator = $('.airlineReferenceValue').text() || "na"
        var jQBoardBasis = $('.CheckoutBasketTable tr:eq(3) span:eq(0)').text() || "na"
        var jQCarrier = $('.SupplierLogo').attr('alt') || "na"

        if ((/Accommodation/gi).test(execCategory && execCategory[1])){
            cdl.DL_attr_affdirect = {
                articlenb     : jQHotelNameHO || "1",
                productname : "Hotel Booking",
                category     : 'Hotels',
                quantity     : 1,
                singlePrice : jQPrice || '',
                brand         : 'TourOperator',
                property1     : (jQHotelNameHO || '').replace('&', ' and ') || '',
                property2     : 'Destination',
                property3     : 'Duration',
                property4     : jQDepartureDateHO || '',
                property5     : 'StarRating',
                order         : jQBookingRef || '0',
                voucher     : '',
                season         : '',
                site         : 12397,
                ref         : cdpm.attribution && cdpm.attribution.utm_source || ''
            }
        } else if ((/Flight/gi).test(execCategory && execCategory[1])){
            cdl.DL_attr_affdirect = {
                articlenb     : jQFlightNameFO || "1",
                productname : "Flights",
                category     : 'Flights',
                quantity     : 1,
                singlePrice : jQPrice || '',
                brand         : jQTourOperator || 'TourOperator',
                property1     : (jQDepartureAirport || '').replace('&', ' and ') || '',
                property2     : jQDestinationAirport || '',
                property3     : 'Duration',
                property4     : jQDepartureDate || '',
                property5     : jQCarrier || '',
                order         : jQBookingRef || '0',
                voucher     : '',
                season         : '',
                site         : 12397,
                ref         : cdpm.attribution && cdpm.attribution.utm_source || ''
            }
        } else if (/$^/gi.test(execCategory && execCategory[1])) {
            cdl.DL_attr_affdirect = {
                articlenb     : jQHotelNameHO || "1",
                productname : "Package booking for 2 Adults and 0 Childre",
                category     : "Package > "+(jQDestinationAirport || ''),
                quantity     : 1,
                singlePrice : jQPrice || '',
                brand         : 'TourOperator',
                property1     : jQDepartureAirport || '',
                property2     : jQDestinationAirport || '',
                property3     : 'Duration',
                property4     : jQDepartureDate || '',
                property5     : jQBoardBasis || '',
                order         : jQBookingRef || '0',
                voucher     : '',
                season         : '',
                site         : 12397,
                ref         : cdpm.attribution && cdpm.attribution.utm_source || ''
            }
        }
    } catch(e){
        cdl.error('GTM Attr: '+e)
    }
    return cdl && jQ && cdl.DL_attr_affdirect
}(window.CATTDL, window.jQuery));

(function gtm_attrAffiliatesAffDirect(cdl, jQ, afdl) {
    'use strict';
    if (cdl && jQ && afdl) try {
        var article = "ArticleNb="+(afdl.articlenb || '')+
            "&ProductName="+(afdl.productname || '')+
            "&Category="+(afdl.category || '')+
            "&Quantity="+(afdl.quantity || '')+
            "&SinglePrice="+(afdl.singlePrice || '')+
            "&Brand="+(afdl.brand || '')+
            "&Property1="+(afdl.property1 || '')+
            "&Property2="+(afdl.property2 || '')+
            "&Property3="+(afdl.property3 || '')+
            "&Property4="+(afdl.property4 || '')+
            "&Property5="+(afdl.property5 || '')+
            unescape("%0D%0A")
        var src = 'https://being.successfultogether.co.uk/registersale.asp?site='+(afdl.site || '')+((afdl.ref)?'&ref='+afdl.ref:'')+'&order='+(afdl.order || '')+((afdl.voucher)?'&vcode='+afdl.voucher:'')+'&basket='+escape(article)
        var img = jQ('<img width="1" height=1" style="border-style:none;" alt="" id="affilinet_pixel">').attr('src', src);
        img.appendTo('body');

        afdl.pixel = {
            article: article,
            src: src
        }
    } catch(e) {
        cdl.error('GTM Attr: '+e)
    }
    return cdl && jQ && afdl
}(window.CATTDL, window.jQuery, !window.CATTDL?!1:window.CATTDL.DL_attr_affdirect))
</script>
