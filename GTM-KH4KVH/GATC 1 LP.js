<script id='GTM-KH4KVH_GATCLP'>
  (function gtm_gatcLP(dl, jQ, cdl, gadl, w, d) {
    'use strict';
    var timeStart = cdl.CATTParams?cdl.CATTParams.timestart:0;
    var cdpm;
    if (cdl && gadl && !dl.some(function(a){return /GATC LP/i.test(a && a.event || '');}) ) try {
      var tn = gadl.trackername+'.' || '';
      cdpm = cdl.CATTParams || '';
      var gawa = gadl.webanalytics || {};
      w._gaq = w._gaq || [];
      var wgp = function gtm_wgp(arr){return w._gaq.push(arr); };

      wgp([tn+'_setAccount', gadl.profileid]);
      wgp([tn+'_setDomainName', gadl.cookiedomain]);
      wgp([tn+'_setAllowLinker', gadl.allowlinker]);
      if (jQ && gadl.organicsearch) jQ.each(gadl.organicsearch, function gtm_organicSearch(domain, term){wgp([tn+'_addOrganic', domain, term]);});
      if (jQ && gawa.customvars) jQ.each(gawa.customvars, function gtm_customvars(_, custVar){if (custVar.value !== '') wgp([tn+'_setCustomVar', custVar.index, custVar.name, custVar.value, custVar.scope]);});

      if (cdpm.pageid === 'home') wgp([tn+'_trackPageview']); else wgp([tn+'_trackPageview', gawa.vp]);

      for (var evt in gawa.events) {
        var gevt = gawa.events[evt];
        if (gevt.action) wgp([tn+'_trackEvent', gevt.category, gevt.action, gevt.label, gevt.value, gevt.noninteraction]);
      }

      (function gtm_callGAscript() {var ga = d.createElement('script'); ga.src = 'https://stats.g.doubleclick.net/dc.js'; var s = d.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);}());

      var as=d.getElementsByTagName("a");
      var inBound=new RegExp("^#$|^javascript:|"+d.location.host.match(/\w+\.\w+$|\w+\.co\.uk$/gi)[0].replace(".","\\.")+"|thomascook\\.com|google-analytics\\.com|mailto:","gi");
      for(var i=0;i<as.length;i++){
        var aHref=as[i].href;
        if(!aHref||aHref.match(inBound))continue;
        var aOnClick=as[i].onclick;
        as[i].onclick=function extClick(){wgp([tn+"_trackEvent","outbound link","click",this.href.split("//")[1],1,true]);aOnClick();};
      }
    } catch(e) {
      cdl.error('GTM UK TC Multicom GATC LP: '+e);
    } finally {
      var stampEpoch = +new Date();
      dl.push({'event': 'GATC LP', 'pid': cdl.CATTParams.pageid, 'timestamp': stampEpoch, 'since gtm.start': stampEpoch - timeStart});
    }
    return cdl && gadl;
  }(window.dataLayer, window.jQuery, window.CATTDL, !window.CATTDL?!1:window.CATTDL.DL_gatc, window, document));
</script>
