<script id='GTM-NB3GH9_cattdlCore'>
  (function gtm_lodashCore(w, d, dl) {
    'use strict';
    var cdpm;
    if ( w && dl && !dl.some(function(a){return /lodash/i.test(a && a.event || '');}) ) try {
      w.CATTDL = w.CATTDL || {};
      var s = d.createElement('script'); s.async = true; s.src = 'https://cdnjs.cloudflare.com/ajax/libs/lodash-compat/3.10.0/lodash.min.js';
      var e = d.getElementsByTagName('script')[0]; e.parentNode.insertBefore(s, e);
      s.onload = s.onreadystatechange = function gtm_lodashOnLoad(){
        var rdyState = s.readyState;
        if (!rdyState || /complete|loaded/i.test(s.readyState)) {
          w.CATTDL._ = w._.noConflict();
          var stampEpoch = +new Date();
          dl.push({'event': 'lodash', 'timestamp': stampEpoch, 'since gtm.start': stampEpoch - dl[0]['gtm.start']});
          s.onload = null;
          s.onreadystatechange = null;
          (function gtm_cattdlCore(jQ, d, w, dl, cdl) {
            if (!window.jQuery) {console.log('JQUERY NOT THERE')}
            if ( window.jQuery ) try {
              console.log('TEST')
              cdpm = cdl.CATTParams || {};
              var ld = cdl._;
              var transpose = function transpose(s, d){for (var p in d) s = s.replace(new RegExp('{'+p+'}', 'g'), d[p]);return s;};
              var tst = function tst(r, u){return RegExp.prototype.test.call(r, u); };
              var exc = function exc(r, u){return RegExp.prototype.exec.call(r, u); };

              ld && ld.assign && ld.assign (cdl, {
                  twlh    : ld.partialRight(tst, w.location.host)
                , twdc    : ld.partialRight(tst, d.cookie)
                , twls    : ld.partialRight(tst, w.location.search)
                , ewdc    : ld.partialRight(exc, d.cookie)
                , ewls    : ld.partialRight(exc, w.location.search)
                , gadate  : function gadate(dt){var pd = new Date(dt); return (window.toLocaleDateString)?pd.toLocaleDateString():((''+pd.getDate()).replace(/^(\d)$/i, '0$1')+'/'+(''+(1+pd.getMonth())).replace(/^(\d)$/i, '0$1')+'/'+pd.getFullYear());}
                , gatime  : function gatime(ts){var pt = new Date(ts); return (window.toLocaletimeString)?ts.toLocaletimeString():((''+pt.getHours()).replace(/^(\d)$/i, '0$1')+':'+(''+pt.getMinutes()).replace(/^(\d)$/i, '0$1')+':'+(''+pt.getSeconds()).replace(/^(\d)$/i, '0$1'));}
                , ckget   : function ckget(sKey) {return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;}
                , ckset   : function ckset(e,r,t,n,a,c){if(!e||/^(?:expires|max\-age|path|domain|secure)$/i.test(e))return!1;var i="";if(t)switch(t.constructor){case Number:i=1/0===t?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+t;break;case String:i="; expires="+t;break;case Date:i="; expires="+t.toUTCString()}return document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(r)+i+(a?"; domain="+a:"")+(n?"; path="+n:"")+(c?"; secure":""),!0}
                , info    : function info(msg) {console && ((console.info)?console.info(msg):console.log(msg)); return msg;}
                , error   : function error(msg) {console && ((console.error)?console.error(msg):console.log(msg)); return msg;}
                , insertJS : function(a){if(ld.defaults(a,{name:void 0,src:void 0,params:void 0,options:void 0,callback:void 0,dataLayer:window.dataLayer}),a.name&&a.src){var t=a.params?transpose(a.src,a.params):a.src,e="DL_"+a.name.toLowerCase(),r=+new Date,n=r-dl[0]["gtm.start"],s=function(){/object/i.test(typeof a.dataLayer)&&a.dataLayer.push({event:e,timestamp:r,"since gtm.start":n}),a.callback&&a.callback()};if(cdl[e]={start:r,script:t},jQ.getScript){var o=jQ.ajaxSettings;a.options&&jQ.ajaxSetup(a.options),jQ.getScript(t,function(){s()}),jQ.ajaxSetup(o)}else{var c=document.createElement("script");c.src=t,c.async=1,c.onload=c.onreadystatechange=function(){var a=this.readyState;a&&"loaded"!==a&&"complete"!==a||(s(),c.onload=c.onreadystatechange=null)};var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(c,i)}}return cdl[e];}
                , insertIFrame : function insertIFrame(e,r,t){return e&&r&&function(e,r,t,a,n,i){if(r[t]){var d=transpose(n,i)||"";r[t]["DL_"+a]={start:(new Date).getTime(),iFrame:d},e().append&&e("body").append(e("<iframe>",{src:d,style:"display:none;",alt:"",frameborder:0,id:a+"iFrame",width:1,height:1}))}return r[t]}(jQ,w,"CATTDL",e,r,t)}
                , insertImg : function insertImg(e,r,t){return e&&r&&function(e,r,t,a,n,i){if(r[t]){var d=transpose(n,i)||"";r[t]["DL_"+a]={start:(new Date).getTime(),img:d},e().append&&e("body").append(e("<img>",{src:d,id:a+"img",width:1,height:1}))}return r[t]}(jQ,w,"CATTDL",e,r,t)}
                , transpose : transpose
              });

              if (w.CATTParams) {
                var key = '';
                ld.assign(cdpm, ld.transform(w.CATTParams, function gtm_lowerCaseCATTParams(r, n, k){
                  key = k.toLowerCase();
                  if (/lob|holidaytype|pageid/i.test(key)) {n = n.toLowerCase() || 'generic';}
                  else if (/lob|holidaytype|pageid|errrocode/i.test(key)) n = ld.trunc(n, 267);
                  else if (/destination|boardbasis|searchresultstop3/i.test(key)) {n.replace(/\&amp;/g, '-').replace(/\&/g, '-') || "";}
                  r[key] = typeof n === 'string'?ld.trim(n):n;
                })
                         );
              }

              cdpm.cookies = {}; (d.cookie.split(/;\s?/g)).forEach(function cookies(coo, _){ var cur = /([^=]+)=(.*)/i.exec(coo); if (cur && cur.length > 1) cdpm.cookies[cur[1]]=cur[2];});
              cdpm.searches = {}; (d.location.href.split(/\?|&|#/g).slice(1)).forEach(function searches(prm, _){ var cur = /([^=]+)=(.*)/i.exec(prm); if (cur && cur.length > 1) cdpm.searches[cur[1]]=cur[2];});

              if (ld && ld.assign) {
                ld.assign(cdpm, {
                    utmaguid          : cdpm.utmaguid || (/^[^;\.%=]*\.([^;\.%=]*)\./i.exec(cdpm.cookies.__utma || ['']) || ['']).pop() || cdl.twdc(/_utma=/i) && cdl.ewdc(/_utma=[^;\.%=]*\.([^;\.%=]*)\./i) && cdl.ewdc(/_utma=[^;\.%=]*\.([^;\.%=]*)\./i).pop() || ""
                  , utmbguid          : cdpm.utmbguid || cdpm.cookies.__utmb || cdl.twdc(/_utmb=/i) && cdl.ewdc(/_utmb=([^;%=]*)/i) && cdl.ewdc(/_utmb=([^;%=]*)/i).pop() || ""
                  , gaguid            : cdpm.gaguid || cdpm.cookies && (/\.([^\.]*)\.\d*$/i.exec(cdpm.cookies._ga || '') || []).pop() || cdl.twdc(/_ga=/i) && (cdl.ewdc(/_ga=[^\.]*\.\d+\.([^\.]*)\.\d+/i) || []).pop() || ""
                  , errors            : cdpm.errorcode || ''
                  , device            : (function(t){var n="desktop";var r=/mobile/i.test(t);var i=/android/i.test(t);var s=/phone/i.test(t);var o=i&&!/mobile/i.test(t);var u=/ipad/i.test(t);var a=/tablet/i.test(t);if(a||o||u)n="tablet";else if(r||i||s)n="mobile";return n;})(navigator.userAgent||"") || ''
                  , pagetimestamp     : Date.now()
                  , holidaytype       : cdpm.holidaytype || 'epackage'
                  , lob               : (function gtm_cdpmlob(locpath){return cdpm.lob || (/\/flight-hotel\//i.test(locpath)?'epackage':/\/holidays\//i.test(locpath)?'holidays':/flights/i.test(locpath)?'flights':/city-breaks/i.test(locpath)?'city-breaks':/ski-holidays/i.test(locpath)?'ski-holidays':/\/cruise\//i.test(locpath)?'cruise':/\/hotels/i.test(locpath)?'hotels':'epackage');}(w.location.pathname || ''))
                  , pageid            : (function gtm_cdpmpid(locpath){return cdpm.pageid || (/\/results/i.test(locpath)?'search':/\/checkout\/extras/i.test(locpath)?'quote':/\/checkout\/payment/i.test(locpath)?'pay':/booking/i.test(locpath)?'booking':'home');}(w.location.pathname || ''))
                  , optimostcreative  : w.opCreative || ""
                });
                if (cdpm.searches) {
                  var cdsr = cdpm.searches;
                  ld.assign(cdpm, {
                      internalcampaignid  : cdsr.intcmp || ""
                    , emailguid           : cdsr.user_id || ""
                    , ecircleid           : cdsr.user_id || ""
                    , dreamcaptureid      : cdsr.dc_id || ""
                    , abtanumber          : cdsr.abtaNumber || ""
                    , consultantref       : cdsr.consultantRef || ""
                    , qsearchedkeyword    : cdsr.q || ""
                  });
                }
              }

              cdpm.poolcontrol = !Boolean((cdpm.utmaguid || 1)%20);

              if (!cdpm.pageid && /srv-search\/accom|destinations/i.test(window.location.pathname)) cdpm.pageid = 'accom';
              else if (location.pathname === '/' || !cdpm.pageid) cdpm.pageid = 'home';

              (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

              window.CATTDL.CATTParams = cdpm;
            } catch(e) {
              var msg = 'GTM CATTDL Core: '+e;
              window.console && ((window.console.error)?window.console.error(msg):window.console.log(msg));
            } finally {
              stampEpoch = +new Date();
              dl.push({'event': 'core_'+(cdpm.pageid || ''), 'timestamp': stampEpoch, 'since gtm.start': stampEpoch - window.dataLayer[0]['gtm.start']});
            }
            return w.CATTDL;
          }(window.jQuery, d, w, dl, w.CATTDL));
        }
      };
    } catch(e) {
      var msg = 'GTM CATTDL lodash: '+e; window.console && ((window.console.error)?window.console.error(msg):window.console.log(msg));
    }
    return dl && w.CATTDL;
  }(window, window.document, window.dataLayer));
</script>