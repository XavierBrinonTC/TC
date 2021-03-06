<script id='gtm_uatcBook'>
(function gtm_uatcBook(jQ, cdl, uadl, w, d, dl) {
    'use strict';
    if (cdl && uadl) try {
        var cdpm = cdl.CATTParams;
        var trackerName = (uadl.name+".") || "";
        var uawa = uadl.webanalytics || {};
        var uaprod = uadl.webanalytics.addproduct || {};
        var uapurch = uadl.webanalytics.purchase || {};

        if(!w.ga) w = (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m); return window})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

        window.ga && window.ga(function gtm_useTracker() {
            var trc = ga.getByName(uadl.name)
            if (trc) {
                console.info('trc', trc)
                trc.plugins_ && console.info('plugins', trc.plugins_.keys) || console.info('no plugins') 
                console.info('clientID', trc.get('clientId'))
            } else {
                console.info('no trc')
                w.ga('create', uadl.profileid, uadl.cookiedomain, {'name': uadl.name})
                trc = ga.getByName(uadl.name)
                console.info('trc', trc)
                console.info('clientID', trc.get('clientId'))
            }
            for (var setOption in uadl.set) trc.set(setOption, uadl.set[setOption]);
            trc.set('location', uawa.location);
            if (typeof trc.plugins_ === 'undefined' || !/displayfeatures/i.test(trc.plugins_ && trc.plugins_.keys || '')) trc.require && trc.require('displayfeatures') || w.ga(trackerName+'require', 'displayfeatures');
            if (typeof trc.plugins_ === 'undefined' || !/ec/i.test(trc.plugins_ && trc.plugins_.keys || '')) trc.require && trc.require('ec', 'ec.js') || w.ga(trackerName+'require', 'ec', 'ec.js');
            cdl.CATTParams.gaguid =  /(.+)\./i.exec(trc.get('clientId') || '.').pop() || cdl.CATTParams.gaguid || ''
            uawa && uawa.dimensions && (uawa.dimensions.dimension30 = {'gaguid' : cdl.CATTParams.gaguid || 'empty'}) || console.info('err', uawa)

            var sendSet = {};
            if (jQ){
                jQ.each(uawa && uawa.dimensions || [], function gtm_keyDimension(kDim, vDim){
                    jQ.each(vDim, function valDimension(_, val){val && (sendSet[kDim]=val)})
                })
                jQ.each(uawa && uawa.metrics || [], function gtm_keyMetrics(kMet, vMet){
                    jQ.each(vMet, function valMetrics(_, val){val && (sendSet[kMet]=val)})
                })  
            };
            var prodDimMet = {
                    'id'        : uaprod.id,
                    'name'      : uaprod.name,
                    'category'  : uaprod.category,
                    'brand'     : uaprod.brand,
                    'variant'   : uaprod.variant,
                    'price'     : uaprod.price,
                    'quantity'  : uaprod.quantity
            };      
            if (jQ){
                jQ.each(uawa && uawa.proddimensions || [], function gtm_prodDimension(pkDim, pvDim){
                    jQ.each(pvDim, function pvalDimension(_, val){val && (prodDimMet[pkDim]=val)})
                })
                jQ.each(uawa && uawa.prodmetrics || [], function gtm_prodMetrics(pkMet, pvMet){
                    jQ.each(pvMet, function pvalMetrics(_, val){val && (prodDimMet[pkMet]=val)})
                })  
            };

            sendSet['page'] = uawa.page;
            w.ga(trackerName+'send','pageview', sendSet);

            var eventsendSet = {};
            jQ.extend(eventsendSet, sendSet);
            delete eventsendSet.dimension12;
            eventsendSet.dimension57 = 'event';
            eventsendSet.nonInteraction = true;

            if(cdpm.pageid === 'booking') {
                var sendSetPurchase = {};
                jQ.extend(sendSetPurchase, sendSet);
                sendSetPurchase.dimension12 = 'purchase';
                sendSetPurchase.dimension57 = 'event';
                sendSetPurchase.nonInteraction = true;
                
                (function gtm_uatcBookAddProduct(){
                    w.ga(trackerName+'ec:addProduct', prodDimMet);
                    w.ga(trackerName+'ec:setAction','purchase', {
                        'id'            : uapurch.id,
                        'affiliation'   : uapurch.affiliation,
                        'revenue'       : uapurch.revenue,
                        'tax'           : uapurch.tax,
                        'shipping'      : uapurch.shipping,
                        'coupon'        : uapurch.coupon
                    });
                    w.ga(trackerName+'send','event', 'ECPurchase', uaprod.id
                            ,  ''+uaprod.position
                            , 1
                            , sendSetPurchase
                        );
                }());
            };

            for (var evt in uawa.events) {
                var gevt = uawa.events[evt]
                if (gevt.action) {w.ga(trackerName+'send','event', gevt.category, gevt.action,  gevt.label, gevt.value
                    , eventsendSet
                )};
            };
            dl.push({'event': 'UATC Book'});
            window.gatcDL && gatcDL.push({'event': 'UATC Book'}); 
        })
    } catch(e) {
        cdl.error('GTM BE PEG UATC Book: '+e);
    } finally {     
        window.externalLayer && externalLayer.push({'event' : 'uapageview'+'|'+(cdl.CATTParams && cdl.CATTParams.pageid || 'home')+'|'+(cdl.CATTParams && cdl.CATTParams.urlparams && cdl.CATTParams.urlparams.pathname || '/')})
    }
    return cdl && uadl
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_uatc, window, document, window.dataLayer || []))
</script>