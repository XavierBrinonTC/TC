<script>
(function gtm_uatcAccom(jQ, cdl, uadl, w, d, dl){
    'use strict';
    if (cdl && uadl) try {
        var trackerName = (uadl.name+".") || "";
        var cdpm = cdl.CATTParams;
        var uawa = uadl.webanalytics || {};
        var cdurl = cdpm.urlparams || {};
        var locpathname = cdurl && cdurl.pathname || location.pathname || '';
        var locsearch = cdurl && cdurl.paramstring || location.search || '';
        var lochref = cdurl && cdurl.fullurl || location.href || '';
        var lochost = location.hostname || location.host || '';        
        var searchseo = ''; Object.getOwnPropertyNames(window.getPageData() || {}).forEach(function(val, idx, array) {if(/\/holidays\/.+\/.+/i.test(val) && window.getPageData(val)) {searchseo = val}});
        var wgdSrch = window.getPageData && window.getPageData('/search') || window.getPageData('searchresults-map') || window.getPageData(searchseo) || {};

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
            uawa && uawa.dimensions && (uawa.dimensions.dimension51 = {'gaguid' : cdl.CATTParams.gaguid || 'empty'}) || console.info('err', uawa)

            var sendSet = {};
            var ux = window.ECEOP || '';
            if (ux){
                jQ.each(ux && ux.pageview || [], function ux_keyDimension(kDim, vDim){
                    jQ.each(vDim, function uxvalDimension(_, val){val && (sendSet['dimension'+vDim.dimension]=val)})
                })
            };            
            if (jQ){
                jQ.each(uawa && uawa.dimensions || [], function gtm_keyDimension(kDim, vDim){
                    jQ.each(vDim, function valDimension(_, val){val && (sendSet[kDim]=val)})
                })
                jQ.each(uawa && uawa.metrics || [], function gtm_keyMetrics(kMet, vMet){
                    jQ.each(vMet, function valMetrics(_, val){val && (sendSet[kMet]=val)})
                })  
            };
            
            var params = JSON.parse(CATTDL.ckget('gtm_params') || '{}');

            var uaprod = uadl.webanalytics.addproductlist || {};
            if (wgdSrch && params && params.previouspageid && (params.previouspageid === 'search' || params.previouspageid === 'searchmap' || params.previouspageid === 'searchseo')) { 
                /*w.sessionStorage.getItem('gtm_previouspageid') === 'search' && wgdSrch*/    
                w.ga(trackerName+'ec:addProduct', {
                    'id'        : uaprod.id,
                    'name'      : uaprod.name,
                    'category'  : uaprod.category,
                    'brand'     : uaprod.brand,
                    'variant'   : uaprod.variant,
                    'list'      : uaprod.list,
                    'position'  : uaprod.position
                });

                w.ga(trackerName+'ec:setAction', 'click', {'list': uaprod.list});
                trc.send('event', 'ECProductListClick', uaprod.id
                            ,  ''+uaprod.position
                            , 1
                            , {'page': uawa.page || ((cdurl.pathname || '/')+(cdurl.paramstring || '')) || ''
                                ,'dimension51': cdpm.gaguid || 'empty'
                                ,'dimension65': cdl.gadate && cdl.gatime && window.Date && cdl.gadate(window.Date.now())+' '+cdl.gatime(window.Date.now()) || ''
                                ,'dimension75': ''+(window.Date && window.Date.now() || 0)
                                ,'dimension118': (locpathname || '')
                                ,'dimension119': (locsearch || '')
                            }
                            , {'nonInteraction': true});
                dl.push({'event': 'UATCDL Accom EC'})
            };

            sendSet['page'] = uawa.page;
            sendSet['dimension52'] = window.userId || '';
            sendSet['hitCallback'] = function gtm_uatcAccomAddProductListView(){
                w.ga(trackerName+'ec:addProduct', {
                    'id'        : uaprod.id || '',
                    'name'      : uaprod.name || '',
                    'category'  : uaprod.category || '',
                    'brand'     : uaprod.brand || '',
                    'variant'   : uaprod.variant || ''
                });

                w.ga(trackerName+'ec:setAction', 'detail');
                trc.send('event', 'ECProductView', uaprod.id
                        ,  ''+uaprod.position
                        , 1
                        , {'page': uawa.page || ((cdurl.pathname || '/')+(cdurl.paramstring || '')) || ''
                                ,'dimension51': cdpm.gaguid || 'empty'
                                ,'dimension65': cdl.gadate && cdl.gatime && window.Date && cdl.gadate(window.Date.now())+' '+cdl.gatime(window.Date.now()) || ''
                                ,'dimension75': ''+(window.Date && window.Date.now() || 0)
                                ,'dimension118': (locpathname || '')
                                ,'dimension119': (locsearch || '')
                            }
                        , {'nonInteraction': true});
                dl.push({'event': 'UATCECaddProduct'});
            };
            trc.send('pageview', sendSet);
            
            for (evt in uawa.events) {
                var gevt = uawa.events[evt]
                if (gevt.action) (trc.send('event', gevt.category, gevt.action,  gevt.label, gevt.value
                    , {'page': gevt.page || ((cdurl.pathname || '/')+(cdurl.paramstring || '')) || ''
                        ,'dimension51': cdpm.gaguid || 'empty'
                        ,'dimension65': cdl.gadate && cdl.gatime && window.Date && cdl.gadate(window.Date.now())+' '+cdl.gatime(window.Date.now()) || ''
                        ,'dimension75': ''+(window.Date && window.Date.now() || 0)
                        ,'dimension118': (locpathname || '')
                        ,'dimension119': (locsearch || '') 
                    }
                    , {'nonInteraction': gevt.noninteraction}));
            };
            //console.info('ECEOP object: ', window.ECEOP.pageview);
            if (ux) {window.ECEOP.pageview = []};

            jQ('button.close').on('click',function(){
            var cdl = window.CATTDL || {};
            var cdpm = cdl && cdl.CATTParams || {};
            var trc = window.ga.getByName(cdl && cdl.DL_uatc && cdl.DL_uatc.name);
            trc.send('event'
                , 'Videoclosed'
                , 'Hotelvideo'
                , (cdpm.lob || '')+'|'+(cdpm.holidaytype || '')+'|'+(cdpm.pageid || '')+'|'+(cdpm.accomguid || 'accomguid')
                , 1
                , {'page': uawa.page || ((cdurl.pathname || '/')+(cdurl.paramstring || '')) || ''
                    ,'dimension51': cdpm.gaguid || 'empty'
                    ,'dimension65': cdl.gadate && cdl.gatime && window.Date && cdl.gadate(window.Date.now())+' '+cdl.gatime(window.Date.now()) || ''
                    ,'dimension75': ''+(window.Date && window.Date.now() || 0)
                    ,'dimension118': (locpathname || '')
                    ,'dimension119': (locsearch || '')                    
                }
                , {'noninteraction': true});
            });

        });
        dataLayer.push({'event': 'UATC Accom'});

    } catch(e) {
        cdl.error('GTM UK TC UATC Accom: '+e);
    } finally {     
        window.externalLayer && externalLayer.push({'event' : 'uapageview'+'|'+(cdl.CATTParams && cdl.CATTParams.pageid || 'home')+'|'+(cdl.CATTParams && cdl.CATTParams.urlparams && cdl.CATTParams.urlparams.pathname || '/')})
    }
    return cdl && uadl
}(window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_uatc, window, document, window.dataLayer || []))
</script>