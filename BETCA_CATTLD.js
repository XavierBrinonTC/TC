//<script id='gtm_core'>
(function gtm_cattdlCore(jQ, d, w, dl) {
    'use strict';
    var cdpm = '';
    if (jQ) try {
        w.CATTDL = w.CATTDL || {};
        cdpm = w.CATTDL.CATTParams || {};
        if(!String.prototype.trim){String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}}

        w.CATTDL = {
            twlh     : function twlh(rg) {return RegExp.prototype.test.call(rg, w.location.host)},
            twdc     : function twdc(rg) {return RegExp.prototype.test.call(rg, document.cookie)},
            ewdc     : function ewdc(rg) {return RegExp.prototype.exec.call(rg, document.cookie)},
            twls     : function twls(rg) {return RegExp.prototype.test.call(rg, w.location.search)},
            ewls     : function ewls(rg) {return RegExp.prototype.exec.call(rg, w.location.search)},
            ckget     : function ckget(sKey) {return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null},
            ckset     : function ckset(sKey, sValue, vEnd, sPath, sDomain, bSecure) {
                if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return false; }
                var sExpires = "";
                if (vEnd) {
                    switch (vEnd.constructor) {
                        case Number:
                            sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd; break;
                        case String:
                            sExpires = "; expires=" + vEnd; break;
                        case Date:
                            sExpires = "; expires=" + vEnd.toUTCString(); break;
                    }
                }
                document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
                return true;
            },
            post     : function post(key, value) {document.cookie = key+"="+value+"; path=/; domain=.thomascookairlines.be;"},
            get     : function get(key) {
                var regKey = new RegExp(key+'=([^;]*)', 'i');
                return regKey.test(document.cookie) && (regKey.exec(document.cookie) || []).pop() || false;
            },
            info     : function info(msg) {console && ((console.info)?console.info(msg):console.log(msg)); return msg},
            error     : function error(msg) {console && ((console.error)?console.error(msg):console.log(msg)); return msg}
        };

        w.CATTParams && jQ.each(w.CATTParams, function gtm_eachCATTParam(pP){
            var pp = pP.toLowerCase();
            var checked = "";
            if (!cdpm[pp] || cdpm[pp] !== w.CATTParams[pP]){
                checked = w.CATTParams[pP];
                if (/string/i.test(typeof checked)) checked = checked.trim();
                if (/lob|holidaytype/i.test(pp)) checked = checked.toLowerCase() || "generic";
                else if (/pageid/i.test(pp)) checked = checked.toLowerCase() || "generic";
                else if (/errorcode/i.test(pp)) checked = checked && checked.replace(/-/, '').substr(0, 270) || "";
                else if (/destination|boardbasis|searchresultstop3/i.test(pp)) checked = checked && checked.replace(/\&amp;/g, '-').replace(/\&/g, '-') || "";

                if (checked) cdpm[pp] = checked;
            }
        });
        cdpm.cookies = {}; (document.cookie.split(/;\s?/g)).forEach(function(coo, _){ var cur = /([^=]+)=(.*)/i.exec(coo); if (cur && cur.length > 1) cdpm.cookies[cur[1]]=cur[2]});
        cdpm.searches = {}; (d.location.search.split(/\?|&/g).slice(1)).forEach(function(prm, _){ var cur = /([^=]+)=(.*)/i.exec(prm); if (cur && cur.length > 1) cdpm.searches[cur[1]]=cur[2]});

        cdpm['internalcampaignid'] = cdpm.searches && cdpm.searches.intcmp
            || w.CATTDL.twls(/intcmp=/i) && (w.CATTDL.ewls(/intcmp=([^&|\s|\?]*)/i) || []).pop()
            || "";
        cdpm['emailguid'] = cdpm.searches && cdpm.searches.user_id
            || w.CATTDL.twls(/user_id=/i) && (w.CATTDL.ewls(/user_id=([^&]*)/i) || []).pop()
            || "";
        cdpm['ecircleid'] =  cdpm.searches && cdpm.searches.user_id
            || w.CATTDL.twls(/user_id=/i) && (w.CATTDL.ewls(/user_id=([^&|\s|\?]*)/i) || []).pop()
            || "";
        cdpm['dreamcaptureid'] =  cdpm.searches && cdpm.searches.dc_id
            || w.CATTDL.twls(/dc_id=/i) && (w.CATTDL.ewls(/dc_id=([^&|\s|\?]*)/i) || []).pop()
            || "";
        cdpm['abtanumber'] = cdpm.searches && cdpm.searches.abtaNumber
            || w.CATTDL.twls(/abtaNumber=/i) && (w.CATTDL.ewls(/abtaNumber=([^&|\s|\?]*)/i) || []).pop()
            || "";
        cdpm['consultantref'] =  cdpm.searches && cdpm.searches.consultantRef
            || w.CATTDL.twls(/consultantRef=/i) && (w.CATTDL.ewls(/consultantRef=([^&|\s|\?]*)/i) || []).pop()
            || "";
        cdpm['qsearchedkeyword'] = cdpm.searches && cdpm.searches.q
            || w.CATTDL.ewls(/[&\?]q=([^&|\s|\?]*)/i) && w.CATTDL.ewls(/[&\?]q=([^&|\s|\?]*)/i).pop()
            || "";

        cdpm['utmaguid'] = cdpm.utmaguid
            || cdpm.cookies.__utma && /^[^;\.%=]*\.([^;\.%=]*)\./i.exec(cdpm.cookies.__utma) && /^[^;\.%=]*\.([^;\.%=]*)\./i.exec(cdpm.cookies.__utma).pop()
            || w.CATTDL.twdc(/_utma=/i) && w.CATTDL.ewdc(/_utma=[^;\.%=]*\.([^;\.%=]*)\./i) && w.CATTDL.ewdc(/_utma=[^;\.%=]*\.([^;\.%=]*)\./i).pop()
            || "";
        cdpm['utmbguid'] = cdpm.utmbguid
            || cdpm.cookies.__utmb
            || w.CATTDL.twdc(/_utmb=/i) && w.CATTDL.ewdc(/_utmb=([^;%=]*)/i) && w.CATTDL.ewdc(/_utmb=([^;%=]*)/i).pop()
            || "";
        cdpm['gaguid'] = cdpm.gaguid
            || cdpm.cookies && (/\.([^\.]*)\.\d*$/i.exec(cdpm.cookies._ga || '') || []).pop()
            || w.CATTDL.twdc(/_ga=/i) && (w.CATTDL.ewdc(/_ga=[^\.]*\.\d+\.([^\.]*)\.\d+/i) || []).pop()
            || "";
        cdpm['optimostcreative'] = window.opCreative
            || "";

        cdpm['language'] = cdpm.language
            || (/\/(\w\w)\//i.exec(location.pathname || '') || ['']).pop()
            || '';
        cdpm['bookingvaluevat'] = cdpm.bookingvaluevat
            || (jQ('p.price-big').text() || '').replace(/(\d+),(\d+)\.(\d+).*\n*.*/g, '$1$2.$3')
            || '';

        if (typeof w.CATTParams === 'undefined' && location.pathname === '/' || !cdpm.pageid ) {
            if (/404/i.test($('div.bloc_text h2').text())) cdpm.pageid = '404';
            else cdpm.pageid = 'home';
        }
        if (/generic/i.test(cdpm.pageid)) {
            if (location.pathname === '/') cdpm.pageid = 'home';
        }
         cdpm['errors'] = cdpm.errorcode
             || '';

         window.CATTDL.CATTParams = cdpm;
    } catch(e) {
        var msg = 'GTM CATTDL Core: '+e;
        console && ((console.error)?console.error(msg):console.log(msg));
    } finally {
        dl.push({'event': 'core_'+cdpm.pageid});
    }
    return w.CATTDL;
}(window.jQuery, window.document, window, window.dataLayer))
</script>
