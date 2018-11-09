!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){"use strict";/**
 * RiotI18n utilities, node.js version.
 */
function d(){
// Calculate the reverse language map to make language queries faster.
this._calculateReverseLanguageMap(),
// Calculate the two letter language codes.
this._calculateTwoLetterCodes(),
// Calculate the region/language map to find the language in ISO format
this._calculateLanguageIsoMap(),
// Calculate the posix -> bcp47
this._calculateBCP47()}d.prototype.regionMap={},d.prototype.twoLetterCodes=[],d.prototype.languages={cs_CZ:"Czech (Czech)",de_DE:"German (Germany)",el_GR:"Greek (Greece)",en_AU:"English (OCE)",en_GB:"English (United Kingdom)",en_PL:"English (EUNE)",en_US:"English (United States)",en_BE:"English (PBE)",es_AR:"Spanish (Argentina)",es_ES:"Spanish (Spain)",es_MX:"Spanish (Mexico)",fr_FR:"French (France)",hu_HU:"Hungarian (Hungary)",it_IT:"Italian (Italy)",pl_PL:"Polish (Poland)",pt_BR:"Portuguese (Brazil)",ro_RO:"Romanian (Romania)",ru_RU:"Russian (Russia)",tr_TR:"Turkey (Turkish)",ko_KR:"Korean",ja_JP:"Japanese"},d.prototype.regions={na:["en_US"],euw:["de_DE","en_GB","es_ES","fr_FR","it_IT"],eune:["cs_CZ","el_GR","en_PL","hu_HU","pl_PL","ro_RO"],tr:["tr_TR"],br:["pt_BR"],ru:["ru_RU"],lan:["es_MX"],las:["es_AR"],oce:["en_AU"],pbe:["en_BE"],kr:["ko_KR"],jp:["ja_JP"]},d.prototype.characterMap={us:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ",eu:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyzàâÇçèÉéÊêëîïÔôœùûĄąĘęÓóĆćŁłŃńŚśŹźŻżÄäÉéÖöÜüßÁáÉéÍíÑñÓóÚúÜüΑαΒβΓγΔδΕεΖζΗηΘθΙιΚκΛλΜμΝνΞξΟοΠπΡρΣσςΤτΥυΦφΧχΨψΩωΆΈΉΊΌΎΏάέήόίύώΪΫϊϋΰΐĂăÂâÎîȘșŞşȚțŢţÀàÈèÉéÌìÍíÒòÓóÙùÚúÁáĄąÄäÉéĘęĚěÍíÓóÔôÚúŮůÝýČčďťĹĺŇňŔŕŘřŠšŽž",br:"0123456789 ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzÀÁÂÃÇÉÊÍÓÔÕÚàáâãçéêíóôõú",ru:" .0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyzАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэю",tr:". 0123456789ABCÇDEFGHIİJKLMNOÖPQRSŞTUÜVWXYZ_abcçdefghıijklmnoöpqrsştuüvwxyz",la:"0123456789ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜ abcdefghijklmnñopqrstuvwxyzáéíóúü",kr:"0123456789 ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz악안알암압앙앞애액앵야얀약양얘어억언얼엄업엉에여역연열염엽영예오옥온올옴옹와완왈왕왜외왼요욕용우욱운울움웅워원월위유육윤율융윷으은을음읍응의이익인일임입잉잎",jp:"0123456789 ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"},d.prototype.regionCharacterMap={euw:"eu",eune:"eu",tr:"tr",br:"br",ru:"ru",lan:"la",las:"la",kr:"kr",jp:"jp"},d.prototype.languageIsoCodeMap={},d.prototype.bcp47toPosixMap={cs:["cs_CZ"],de:["de_DE"],el:["el_GR"],en:["en_US","en_AU","en_GB","en_PL","en_BE"],"es-419":["es_MX","es_AR"],es:["es_ES"],fr:["fr_FR"],hu:["hu_HU"],it:["it_IT"],pl:["pl_PL"],"pt-br":["pt_BR"],ro:["ro_RO"],ru:["ru_RU"],tr:["tr_TR"],ko:["ko_KR"],ja:["ja_JP"]},d.prototype.posixToBCP47Map={},/**
 * Pre calculates the two letter language map to make querying faster.g
 */
d.prototype._calculateReverseLanguageMap=function(){for(var a in this.regions)if(this.regions.hasOwnProperty(a)){var b=this.regions[a];for(var c in b)b.hasOwnProperty(c)&&(this.regionMap[b[c]]=a)}},/**
 * Pre calculates the two letter language codes array.
 */
d.prototype._calculateTwoLetterCodes=function(){for(var a in this.languages)if(this.languages.hasOwnProperty(a)){var b=a.substring(0,2);this.twoLetterCodes.indexOf(b)===-1&&this.twoLetterCodes.push(b)}},/**
 * Populage the languageIsoMap that allows to retrieve the language in iso format for
 * a specific region and language (two letter code).
 *
 * The result is an object like:
 *  {
 *    'na': {
 *      'en': 'en_US'
 *    },
 *    'euw': {
 *      'en': 'en_GB',
 *      'es': 'es_ES'
 *    }
 *  }
 */
d.prototype._calculateLanguageIsoMap=function(){var a,b,c,d,e,f;
// Iterate over all the regions
for(a in this.regions)if(this.regions.hasOwnProperty(a))
// Iterate over all language i18n codes for that region (region is an array)
for(this.languageIsoCodeMap[a]={},d=this.regions[a],e=0,f=d.length;e<f;e++)c=d[e],b=c.slice(0,2),this.languageIsoCodeMap[a][b]=c},/**
 * Pre-calcluates the list of POSIX -> BCP47 language mappings
 */
d.prototype._calculateBCP47=function(){var a,b,c,d,e,f;b=this.posixToBCP47Map,c=this.bcp47toPosixMap;for(a in c)if(c.hasOwnProperty(a))for(d=c[a],e=0,f=d.length;e<f;e++)b[d[e]]=a},/**
 * Retrieves the language in iso format for a specific region and language
 *
 * @param region {@string} A string that represents the region
 * @param language {@string} A string that represents the language (in two letter format)
 * @return {@string} A string that represents the language in Iso format. Ex. 'en_US', 'es_AR'
 */
d.prototype.getLanguageInIsoFormat=function(a,b){return this.languageIsoCodeMap.hasOwnProperty(a)&&this.languageIsoCodeMap[a].hasOwnProperty(b)?this.languageIsoCodeMap[a][b]:null},/**
 * Returns an object with the language map.
 * @returns {Object}
 *   an object with language codes as keys, and language names as values.
 */
d.prototype.getLanguageMap=function(){return this.languages},/**
 * Returns an array of valid languages.
 *
 * @returns {Array}
 */
d.prototype.getLanguageCodes=function(){return Object.keys(this.languages)},/**
 * Returns an array of valid languages.
 *
 * @returns {Array}
 */
d.prototype.getTwoLetterLanguageCodes=function(){return this.twoLetterCodes},/**
 * Returns an array of valid regions.
 *
 * @returns {Array}
 */
d.prototype.getRegionCodes=function(){return Object.keys(this.regions)},/**
 * Determine if a region is valid.
 * @param region String
 *   The region code (na, euw, etc).
 * @returns {boolean}
 *   True if the region is valid.
 */
d.prototype.isValidRegion=function(a){return this.regions.hasOwnProperty(a)},/**
 * Returns the valid languages for a region.
 * @param region String
 *   The region code (na, euw, etc).
 * @returns {Array}
 *   An array containing all the valid languages for a region.
 */
d.prototype.getLanguagesForRegion=function(a){return this.isValidRegion(a)?this.regions[a]:[]},/**
 * Returns the region for a language.
 * @param lang {string}
 *   The language code (en_US, es_ES, etc).
 * @returns {string}
 *   A string with the region name.
 */
d.prototype.getRegionForLanguage=function(a){return this.isValidLanguage(a)?this.regionMap[a]:""},/**
 * Checks for validity of a language, either in general or for a region.
 *
 * @param language String
 *   The language code (en_US, es_ES, etc).
 * @param region String optional
 *   Optional. A region code (na, euw, etc) to filter valid languages. If this
 *   parameter is not specified, the language will be considered valid if it's
 *   valid for any region.
 * @returns {boolean}
 *  True if the language is a valid language.
 */
d.prototype.isValidLanguage=function(a,b){return void 0===b?this.languages.hasOwnProperty(a):this.getLanguagesForRegion(b).indexOf(a)>-1},/**
 * Checks the validity of a summoner name for a specific region, based on
 * https://support.leagueoflegends.com/entries/20349601-Summoner-Name-FAQ#h4
 *
 * @param name String
 *   The summoner name to test
 * @param region String
 *   The region code
 * @returns {boolean}
 *   Whether or not the summoner name is valid
 */
d.prototype.isValidSummonerName=function(a,b){var c,d,e,f,g;for(c=this.regionCharacterMap.hasOwnProperty(b)?this.regionCharacterMap[b]:"us",d=this.characterMap[c],e=0,f=a.length;e<f;e+=1)if(g=a.charAt(e),d.indexOf(g)===-1)return!1;return!0},/**
 * Converts POSIX locale codes (used by LoL, web) to [BCP47][] standard codes
 * used by OAuth, Zendesk, etc.
 *
 * [BCP47]: https://tools.ietf.org/html/bcp47
 *
 * @param  posix String
 *   The five-character POSIX language code
 * @return {String}
 *   The BCP47 language code that matches, or null
 */
d.prototype.posixToBCP47=function(a){var b=this.posixToBCP47Map;return b.hasOwnProperty(a)?b[a]:null},/**
 * Converts BCP47 locale codes (used by LoL, web) to [BCP47][] standard codes
 * used by OAuth, Zendesk, etc.
 *
 * [BCP47]: https://tools.ietf.org/html/bcp47
 *
 * @param  bcp47 String
 *   The bcp47 language code
 * @param  region String
 *   Optional web region code
 * @return {String}
 *   The BCP47 language code that matches, or null
 */
d.prototype.bcp47ToPosix=function(a,b){var c,d,e,f,g;if(c=this.bcp47toPosixMap,!c.hasOwnProperty(a))return null;if(d=c[a],!b)return d[0];for(e=0,f=d.length;e<f;e++)if(g=d[e],this.isValidLanguage(g,b))return g;return null},b.exports=new d},{}],2:[function(a,b,c){!function(){"use strict";function a(a){l.push(a),1==l.length&&k()}function b(){for(;l.length;)l[0](),l.shift()}function c(a){this.a=m,this.b=void 0,this.f=[];var b=this;try{a(function(a){f(b,a)},function(a){g(b,a)})}catch(c){g(b,c)}}function d(a){return new c(function(b,c){c(a)})}function e(a){return new c(function(b){b(a)})}function f(a,b){if(a.a==m){if(b==a)throw new TypeError;var c=!1;try{var d=b&&b.then;if(null!=b&&"object"==typeof b&&"function"==typeof d)return void d.call(b,function(b){c||f(a,b),c=!0},function(b){c||g(a,b),c=!0})}catch(e){return void(c||g(a,e))}a.a=0,a.b=b,h(a)}}function g(a,b){if(a.a==m){if(b==a)throw new TypeError;a.a=1,a.b=b,h(a)}}function h(b){a(function(){if(b.a!=m)for(;b.f.length;){var a=b.f.shift(),c=a[0],d=a[1],e=a[2],a=a[3];try{0==b.a?e("function"==typeof c?c.call(void 0,b.b):b.b):1==b.a&&("function"==typeof d?e(d.call(void 0,b.b)):a(b.b))}catch(f){a(f)}}})}function i(a){return new c(function(b,c){function d(c){return function(d){g[c]=d,f+=1,f==a.length&&b(g)}}var f=0,g=[];0==a.length&&b(g);for(var h=0;h<a.length;h+=1)e(a[h]).c(d(h),c)})}function j(a){return new c(function(b,c){for(var d=0;d<a.length;d+=1)e(a[d]).c(b,c)})}var k,l=[];k=function(){setTimeout(b)};var m=2;c.prototype.g=function(a){return this.c(void 0,a)},c.prototype.c=function(a,b){var d=this;return new c(function(c,e){d.f.push([a,b,c,e]),h(d)})},window.Promise||(window.Promise=c,window.Promise.resolve=e,window.Promise.reject=d,window.Promise.race=j,window.Promise.all=i,window.Promise.prototype.then=c.prototype.c,window.Promise.prototype["catch"]=c.prototype.g)}(),function(){function a(a,b){document.addEventListener?a.addEventListener("scroll",b,!1):a.attachEvent("scroll",b)}function c(a){document.body?a():document.addEventListener?document.addEventListener("DOMContentLoaded",function b(){document.removeEventListener("DOMContentLoaded",b),a()}):document.attachEvent("onreadystatechange",function c(){"interactive"!=document.readyState&&"complete"!=document.readyState||(document.detachEvent("onreadystatechange",c),a())})}function d(a){this.a=document.createElement("div"),this.a.setAttribute("aria-hidden","true"),this.a.appendChild(document.createTextNode(a)),this.b=document.createElement("span"),this.c=document.createElement("span"),this.h=document.createElement("span"),this.f=document.createElement("span"),this.g=-1,this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;",this.b.appendChild(this.h),this.c.appendChild(this.f),this.a.appendChild(this.b),this.a.appendChild(this.c)}function e(a,b){a.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;left:-999px;white-space:nowrap;font:"+b+";"}function f(a){var b=a.a.offsetWidth,c=b+100;return a.f.style.width=c+"px",a.c.scrollLeft=c,a.b.scrollLeft=a.b.scrollWidth+100,a.g!==b&&(a.g=b,!0)}function g(b,c){function d(){var a=e;f(a)&&null!==a.a.parentNode&&c(a.g)}var e=b;a(b.b,d),a(b.c,d),f(b)}function h(a,b){var c=b||{};this.family=a,this.style=c.style||"normal",this.weight=c.weight||"normal",this.stretch=c.stretch||"normal"}function i(){if(null===l){var a=document.createElement("div");try{a.style.font="condensed 100px sans-serif"}catch(b){}l=""!==a.style.font}return l}function j(a,b){return[a.style,a.weight,i()?a.stretch:"","100px",b].join(" ")}var k=null,l=null,m=!!window.FontFace;h.prototype.load=function(a,b){var f=this,h=a||"BESbswy",i=b||3e3,l=(new Date).getTime();return new Promise(function(a,b){if(m){var n=new Promise(function(a,b){function c(){(new Date).getTime()-l>=i?b():document.fonts.load(j(f,f.family),h).then(function(b){1<=b.length?a():setTimeout(c,25)},function(){b()})}c()}),o=new Promise(function(a,b){setTimeout(b,i)});Promise.race([o,n]).then(function(){a(f)},function(){b(f)})}else c(function(){function c(){var b;(b=-1!=q&&-1!=r||-1!=q&&-1!=s||-1!=r&&-1!=s)&&((b=q!=r&&q!=s&&r!=s)||(null===k&&(b=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),k=!!b&&(536>parseInt(b[1],10)||536===parseInt(b[1],10)&&11>=parseInt(b[2],10))),b=k&&(q==t&&r==t&&s==t||q==u&&r==u&&s==u||q==v&&r==v&&s==v)),b=!b),b&&(null!==w.parentNode&&w.parentNode.removeChild(w),clearTimeout(x),a(f))}function m(){if((new Date).getTime()-l>=i)null!==w.parentNode&&w.parentNode.removeChild(w),b(f);else{var a=document.hidden;!0!==a&&void 0!==a||(q=n.a.offsetWidth,r=o.a.offsetWidth,s=p.a.offsetWidth,c()),x=setTimeout(m,50)}}var n=new d(h),o=new d(h),p=new d(h),q=-1,r=-1,s=-1,t=-1,u=-1,v=-1,w=document.createElement("div"),x=0;w.dir="ltr",e(n,j(f,"sans-serif")),e(o,j(f,"serif")),e(p,j(f,"monospace")),w.appendChild(n.a),w.appendChild(o.a),w.appendChild(p.a),document.body.appendChild(w),t=n.a.offsetWidth,u=o.a.offsetWidth,v=p.a.offsetWidth,m(),g(n,function(a){q=a,c()}),e(n,j(f,'"'+f.family+'",sans-serif')),g(o,function(a){r=a,c()}),e(o,j(f,'"'+f.family+'",serif')),g(p,function(a){s=a,c()}),e(p,j(f,'"'+f.family+'",monospace'))})})},window.FontFaceObserver=h,window.FontFaceObserver.prototype.check=window.FontFaceObserver.prototype.load=h.prototype.load,"undefined"!=typeof b&&(b.exports=window.FontFaceObserver)}()},{}],3:[function(a,b,c){function d(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}function e(a,b,c){if(a&&j(a)&&a instanceof d)return a;var e=new d;return e.parse(a,b,c),e}
// format a parsed object into a url string
function f(a){
// ensure it's an object, and not a string url.
// If it's an obj, this is a no-op.
// this way, you can call url_format() on strings
// to clean up potentially wonky urls.
return i(a)&&(a=e(a)),a instanceof d?a.format():d.prototype.format.call(a)}function g(a,b){return e(a,!1,!0).resolve(b)}function h(a,b){return a?e(a,!1,!0).resolveObject(b):b}function i(a){return"string"==typeof a}function j(a){return"object"==typeof a&&null!==a}function k(a){return null===a}function l(a){return null==a}
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var m=a("punycode");c.parse=e,c.resolve=g,c.resolveObject=h,c.format=f,c.Url=d;
// Reference: RFC 3986, RFC 1808, RFC 2396
// define these here so at least they only have to be
// compiled once on the first module load.
var n=/^([a-z0-9.+-]+:)/i,o=/:[0-9]*$/,
// RFC 2396: characters reserved for delimiting URLs.
// We actually just auto-escape these.
p=["<",">",'"',"`"," ","\r","\n","\t"],
// RFC 2396: characters not allowed for various reasons.
q=["{","}","|","\\","^","`"].concat(p),
// Allowed by RFCs, but cause of XSS attacks.  Always escape these.
r=["'"].concat(q),
// Characters that are never ever allowed in a hostname.
// Note that any invalid chars are also handled, but these
// are the ones that are *expected* to be seen, so we fast-path
// them.
s=["%","/","?",";","#"].concat(r),t=["/","?","#"],u=255,v=/^[a-z0-9A-Z_-]{0,63}$/,w=/^([a-z0-9A-Z_-]{0,63})(.*)$/,
// protocols that can allow "unsafe" and "unwise" chars.
x={javascript:!0,"javascript:":!0},
// protocols that never have a hostname.
y={javascript:!0,"javascript:":!0},
// protocols that always contain a // bit.
z={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},A=a("querystring");d.prototype.parse=function(a,b,c){if(!i(a))throw new TypeError("Parameter 'url' must be a string, not "+typeof a);var d=a;
// trim before proceeding.
// This is to support parse stuff like "  http://foo.com  \n"
d=d.trim();var e=n.exec(d);if(e){e=e[0];var f=e.toLowerCase();this.protocol=f,d=d.substr(e.length)}
// figure out if it's got a host
// user@server is *always* interpreted as a hostname, and url
// resolution will treat //foo/bar as host=foo,path=bar because that's
// how the browser resolves relative URLs.
if(c||e||d.match(/^\/\/[^@\/]+@[^@\/]+/)){var g="//"===d.substr(0,2);!g||e&&y[e]||(d=d.substr(2),this.slashes=!0)}if(!y[e]&&(g||e&&!z[e])){for(var h=-1,j=0;j<t.length;j++){var k=d.indexOf(t[j]);k!==-1&&(h===-1||k<h)&&(h=k)}
// at this point, either we have an explicit point where the
// auth portion cannot go past, or the last @ char is the decider.
var l,o;
// atSign can be anywhere.
o=h===-1?d.lastIndexOf("@"):d.lastIndexOf("@",h),
// Now we have a portion which is definitely the auth.
// Pull that off.
o!==-1&&(l=d.slice(0,o),d=d.slice(o+1),this.auth=decodeURIComponent(l)),
// the host is the remaining to the left of the first non-host char
h=-1;for(var j=0;j<s.length;j++){var k=d.indexOf(s[j]);k!==-1&&(h===-1||k<h)&&(h=k)}
// if we still have not hit it, then the entire thing is a host.
h===-1&&(h=d.length),this.host=d.slice(0,h),d=d.slice(h),
// pull out port.
this.parseHost(),
// we've indicated that there is a hostname,
// so even if it's empty, it has to be present.
this.hostname=this.hostname||"";
// if hostname begins with [ and ends with ]
// assume that it's an IPv6 address.
var p="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];
// validate a little.
if(!p)for(var q=this.hostname.split(/\./),j=0,B=q.length;j<B;j++){var C=q[j];if(C&&!C.match(v)){for(var D="",E=0,F=C.length;E<F;E++)
// we replace non-ASCII char with a temporary placeholder
// we need this to make sure size of hostname is not
// broken by replacing non-ASCII by nothing
D+=C.charCodeAt(E)>127?"x":C[E];
// we test again with ASCII char only
if(!D.match(v)){var G=q.slice(0,j),H=q.slice(j+1),I=C.match(w);I&&(G.push(I[1]),H.unshift(I[2])),H.length&&(d="/"+H.join(".")+d),this.hostname=G.join(".");break}}}if(this.hostname.length>u?this.hostname="":
// hostnames are always lower case.
this.hostname=this.hostname.toLowerCase(),!p){for(var J=this.hostname.split("."),K=[],j=0;j<J.length;++j){var L=J[j];K.push(L.match(/[^A-Za-z0-9_-]/)?"xn--"+m.encode(L):L)}this.hostname=K.join(".")}var M=this.port?":"+this.port:"",N=this.hostname||"";this.host=N+M,this.href+=this.host,
// strip [ and ] from the hostname
// the host field still retains them, though
p&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==d[0]&&(d="/"+d))}
// now rest is set to the post-host stuff.
// chop off any delim chars.
if(!x[f])
// First, make 100% sure that any "autoEscape" chars get
// escaped, even if encodeURIComponent doesn't think they
// need to be.
for(var j=0,B=r.length;j<B;j++){var O=r[j],P=encodeURIComponent(O);P===O&&(P=escape(O)),d=d.split(O).join(P)}
// chop off from the tail first.
var Q=d.indexOf("#");Q!==-1&&(
// got a fragment string.
this.hash=d.substr(Q),d=d.slice(0,Q));var R=d.indexOf("?");
//to support http.request
if(R!==-1?(this.search=d.substr(R),this.query=d.substr(R+1),b&&(this.query=A.parse(this.query)),d=d.slice(0,R)):b&&(
// no query string, but parseQueryString still requested
this.search="",this.query={}),d&&(this.pathname=d),z[f]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var M=this.pathname||"",L=this.search||"";this.path=M+L}
// finally, reconstruct the href based on what has been validated.
return this.href=this.format(),this},d.prototype.format=function(){var a=this.auth||"";a&&(a=encodeURIComponent(a),a=a.replace(/%3A/i,":"),a+="@");var b=this.protocol||"",c=this.pathname||"",d=this.hash||"",e=!1,f="";this.host?e=a+this.host:this.hostname&&(e=a+(this.hostname.indexOf(":")===-1?this.hostname:"["+this.hostname+"]"),this.port&&(e+=":"+this.port)),this.query&&j(this.query)&&Object.keys(this.query).length&&(f=A.stringify(this.query));var g=this.search||f&&"?"+f||"";
// only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
// unless they had them to begin with.
return b&&":"!==b.substr(-1)&&(b+=":"),this.slashes||(!b||z[b])&&e!==!1?(e="//"+(e||""),c&&"/"!==c.charAt(0)&&(c="/"+c)):e||(e=""),d&&"#"!==d.charAt(0)&&(d="#"+d),g&&"?"!==g.charAt(0)&&(g="?"+g),c=c.replace(/[?#]/g,function(a){return encodeURIComponent(a)}),g=g.replace("#","%23"),b+e+c+g+d},d.prototype.resolve=function(a){return this.resolveObject(e(a,!1,!0)).format()},d.prototype.resolveObject=function(a){if(i(a)){var b=new d;b.parse(a,!1,!0),a=b}var c=new d;
// if the relative url is empty, then there's nothing left to do here.
if(Object.keys(this).forEach(function(a){c[a]=this[a]},this),
// hash is always overridden, no matter what.
// even href="" will remove it.
c.hash=a.hash,""===a.href)return c.href=c.format(),c;
// hrefs like //foo/bar always cut to the protocol.
if(a.slashes&&!a.protocol)
// take everything except the protocol from relative
//urlParse appends trailing / to urls like http://www.example.com
return Object.keys(a).forEach(function(b){"protocol"!==b&&(c[b]=a[b])}),z[c.protocol]&&c.hostname&&!c.pathname&&(c.path=c.pathname="/"),c.href=c.format(),c;if(a.protocol&&a.protocol!==c.protocol){
// if it's a known url protocol, then changing
// the protocol does weird things
// first, if it's not file:, then we MUST have a host,
// and if there was a path
// to begin with, then we MUST have a path.
// if it is file:, then the host is dropped,
// because that's known to be hostless.
// anything else is assumed to be absolute.
if(!z[a.protocol])return Object.keys(a).forEach(function(b){c[b]=a[b]}),c.href=c.format(),c;if(c.protocol=a.protocol,a.host||y[a.protocol])c.pathname=a.pathname;else{for(var e=(a.pathname||"").split("/");e.length&&!(a.host=e.shift()););a.host||(a.host=""),a.hostname||(a.hostname=""),""!==e[0]&&e.unshift(""),e.length<2&&e.unshift(""),c.pathname=e.join("/")}
// to support http.request
if(c.search=a.search,c.query=a.query,c.host=a.host||"",c.auth=a.auth,c.hostname=a.hostname||a.host,c.port=a.port,c.pathname||c.search){var f=c.pathname||"",g=c.search||"";c.path=f+g}return c.slashes=c.slashes||a.slashes,c.href=c.format(),c}var h=c.pathname&&"/"===c.pathname.charAt(0),j=a.host||a.pathname&&"/"===a.pathname.charAt(0),m=j||h||c.host&&a.pathname,n=m,o=c.pathname&&c.pathname.split("/")||[],e=a.pathname&&a.pathname.split("/")||[],p=c.protocol&&!z[c.protocol];if(
// if the url is a non-slashed url, then relative
// links like ../.. should be able
// to crawl up to the hostname, as well.  This is strange.
// result.protocol has already been set by now.
// Later on, put the first path part into the host field.
p&&(c.hostname="",c.port=null,c.host&&(""===o[0]?o[0]=c.host:o.unshift(c.host)),c.host="",a.protocol&&(a.hostname=null,a.port=null,a.host&&(""===e[0]?e[0]=a.host:e.unshift(a.host)),a.host=null),m=m&&(""===e[0]||""===o[0])),j)
// it's absolute.
c.host=a.host||""===a.host?a.host:c.host,c.hostname=a.hostname||""===a.hostname?a.hostname:c.hostname,c.search=a.search,c.query=a.query,o=e;else if(e.length)
// it's relative
// throw away the existing file, and take the new path instead.
o||(o=[]),o.pop(),o=o.concat(e),c.search=a.search,c.query=a.query;else if(!l(a.search)){
// just pull out the search.
// like href='?foo'.
// Put this after the other two cases because it simplifies the booleans
if(p){c.hostname=c.host=o.shift();
//occationaly the auth can get stuck only in host
//this especialy happens in cases like
//url.resolveObject('mailto:local1@domain1', 'local2@domain2')
var q=!!(c.host&&c.host.indexOf("@")>0)&&c.host.split("@");q&&(c.auth=q.shift(),c.host=c.hostname=q.shift())}
//to support http.request
return c.search=a.search,c.query=a.query,k(c.pathname)&&k(c.search)||(c.path=(c.pathname?c.pathname:"")+(c.search?c.search:"")),c.href=c.format(),c}if(!o.length)
// no path at all.  easy.
// we've already handled the other stuff above.
//to support http.request
return c.pathname=null,c.search?c.path="/"+c.search:c.path=null,c.href=c.format(),c;for(var r=o.slice(-1)[0],s=(c.host||a.host)&&("."===r||".."===r)||""===r,t=0,u=o.length;u>=0;u--)r=o[u],"."==r?o.splice(u,1):".."===r?(o.splice(u,1),t++):t&&(o.splice(u,1),t--);
// if the path is allowed to go above the root, restore leading ..s
if(!m&&!n)for(;t--;t)o.unshift("..");!m||""===o[0]||o[0]&&"/"===o[0].charAt(0)||o.unshift(""),s&&"/"!==o.join("/").substr(-1)&&o.push("");var v=""===o[0]||o[0]&&"/"===o[0].charAt(0);
// put the host back
if(p){c.hostname=c.host=v?"":o.length?o.shift():"";
//occationaly the auth can get stuck only in host
//this especialy happens in cases like
//url.resolveObject('mailto:local1@domain1', 'local2@domain2')
var q=!!(c.host&&c.host.indexOf("@")>0)&&c.host.split("@");q&&(c.auth=q.shift(),c.host=c.hostname=q.shift())}
//to support request.http
return m=m||c.host&&o.length,m&&!v&&o.unshift(""),o.length?c.pathname=o.join("/"):(c.pathname=null,c.path=null),k(c.pathname)&&k(c.search)||(c.path=(c.pathname?c.pathname:"")+(c.search?c.search:"")),c.auth=a.auth||c.auth,c.slashes=c.slashes||a.slashes,c.href=c.format(),c},d.prototype.parseHost=function(){var a=this.host,b=o.exec(a);b&&(b=b[0],":"!==b&&(this.port=b.substr(1)),a=a.substr(0,a.length-b.length)),a&&(this.hostname=a)}},{punycode:26,querystring:29}],4:[function(a,b,c){"use strict";
// istanbul ignore next
function d(a){return a&&a.__esModule?a:{"default":a}}
// istanbul ignore next
function e(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}
// For compatibility and usage outside of module systems, make the Handlebars object a namespace
function f(){var a=new h.HandlebarsEnvironment;return n.extend(a,h),a.SafeString=j["default"],a.Exception=l["default"],a.Utils=n,a.escapeExpression=n.escapeExpression,a.VM=p,a.template=function(b){return p.template(b,a)},a}c.__esModule=!0;var g=a("./handlebars/base"),h=e(g),i=a("./handlebars/safe-string"),j=d(i),k=a("./handlebars/exception"),l=d(k),m=a("./handlebars/utils"),n=e(m),o=a("./handlebars/runtime"),p=e(o),q=a("./handlebars/no-conflict"),r=d(q),s=f();s.create=f,r["default"](s),s["default"]=s,c["default"]=s,b.exports=c["default"]},{"./handlebars/base":5,"./handlebars/exception":8,"./handlebars/no-conflict":18,"./handlebars/runtime":19,"./handlebars/safe-string":20,"./handlebars/utils":21}],5:[function(a,b,c){"use strict";
// istanbul ignore next
function d(a){return a&&a.__esModule?a:{"default":a}}function e(a,b,c){this.helpers=a||{},this.partials=b||{},this.decorators=c||{},i.registerDefaultHelpers(this),j.registerDefaultDecorators(this)}c.__esModule=!0,c.HandlebarsEnvironment=e;var f=a("./utils"),g=a("./exception"),h=d(g),i=a("./helpers"),j=a("./decorators"),k=a("./logger"),l=d(k),m="4.0.11";c.VERSION=m;var n=7;c.COMPILER_REVISION=n;var o={1:"<= 1.0.rc.2",// 1.0.rc.2 is actually rev2 but doesn't report it
2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0"};c.REVISION_CHANGES=o;var p="[object Object]";e.prototype={constructor:e,logger:l["default"],log:l["default"].log,registerHelper:function(a,b){if(f.toString.call(a)===p){if(b)throw new h["default"]("Arg not supported with multiple helpers");f.extend(this.helpers,a)}else this.helpers[a]=b},unregisterHelper:function(a){delete this.helpers[a]},registerPartial:function(a,b){if(f.toString.call(a)===p)f.extend(this.partials,a);else{if("undefined"==typeof b)throw new h["default"]('Attempting to register a partial called "'+a+'" as undefined');this.partials[a]=b}},unregisterPartial:function(a){delete this.partials[a]},registerDecorator:function(a,b){if(f.toString.call(a)===p){if(b)throw new h["default"]("Arg not supported with multiple decorators");f.extend(this.decorators,a)}else this.decorators[a]=b},unregisterDecorator:function(a){delete this.decorators[a]}};var q=l["default"].log;c.log=q,c.createFrame=f.createFrame,c.logger=l["default"]},{"./decorators":6,"./exception":8,"./helpers":9,"./logger":17,"./utils":21}],6:[function(a,b,c){"use strict";
// istanbul ignore next
function d(a){return a&&a.__esModule?a:{"default":a}}function e(a){g["default"](a)}c.__esModule=!0,c.registerDefaultDecorators=e;var f=a("./decorators/inline"),g=d(f)},{"./decorators/inline":7}],7:[function(a,b,c){"use strict";c.__esModule=!0;var d=a("../utils");c["default"]=function(a){a.registerDecorator("inline",function(a,b,c,e){var f=a;return b.partials||(b.partials={},f=function(e,f){
// Create a new partials stack frame prior to exec.
var g=c.partials;c.partials=d.extend({},g,b.partials);var h=a(e,f);return c.partials=g,h}),b.partials[e.args[0]]=e.fn,f})},b.exports=c["default"]},{"../utils":21}],8:[function(a,b,c){"use strict";function d(a,b){var c=b&&b.loc,f=void 0,g=void 0;c&&(f=c.start.line,g=c.start.column,a+=" - "+f+":"+g);
// Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
for(var h=Error.prototype.constructor.call(this,a),i=0;i<e.length;i++)this[e[i]]=h[e[i]];/* istanbul ignore else */
Error.captureStackTrace&&Error.captureStackTrace(this,d);try{c&&(this.lineNumber=f,
// Work around issue under safari where we can't directly set the column value
/* istanbul ignore next */
Object.defineProperty?Object.defineProperty(this,"column",{value:g,enumerable:!0}):this.column=g)}catch(j){}}c.__esModule=!0;var e=["description","fileName","lineNumber","message","name","number","stack"];d.prototype=new Error,c["default"]=d,b.exports=c["default"]},{}],9:[function(a,b,c){"use strict";
// istanbul ignore next
function d(a){return a&&a.__esModule?a:{"default":a}}function e(a){g["default"](a),i["default"](a),k["default"](a),m["default"](a),o["default"](a),q["default"](a),s["default"](a)}c.__esModule=!0,c.registerDefaultHelpers=e;var f=a("./helpers/block-helper-missing"),g=d(f),h=a("./helpers/each"),i=d(h),j=a("./helpers/helper-missing"),k=d(j),l=a("./helpers/if"),m=d(l),n=a("./helpers/log"),o=d(n),p=a("./helpers/lookup"),q=d(p),r=a("./helpers/with"),s=d(r)},{"./helpers/block-helper-missing":10,"./helpers/each":11,"./helpers/helper-missing":12,"./helpers/if":13,"./helpers/log":14,"./helpers/lookup":15,"./helpers/with":16}],10:[function(a,b,c){"use strict";c.__esModule=!0;var d=a("../utils");c["default"]=function(a){a.registerHelper("blockHelperMissing",function(b,c){var e=c.inverse,f=c.fn;if(b===!0)return f(this);if(b===!1||null==b)return e(this);if(d.isArray(b))return b.length>0?(c.ids&&(c.ids=[c.name]),a.helpers.each(b,c)):e(this);if(c.data&&c.ids){var g=d.createFrame(c.data);g.contextPath=d.appendContextPath(c.data.contextPath,c.name),c={data:g}}return f(b,c)})},b.exports=c["default"]},{"../utils":21}],11:[function(a,b,c){"use strict";
// istanbul ignore next
function d(a){return a&&a.__esModule?a:{"default":a}}c.__esModule=!0;var e=a("../utils"),f=a("../exception"),g=d(f);c["default"]=function(a){a.registerHelper("each",function(a,b){function c(b,c,f){j&&(j.key=b,j.index=c,j.first=0===c,j.last=!!f,k&&(j.contextPath=k+b)),i+=d(a[b],{data:j,blockParams:e.blockParams([a[b],b],[k+b,null])})}if(!b)throw new g["default"]("Must pass iterator to #each");var d=b.fn,f=b.inverse,h=0,i="",j=void 0,k=void 0;if(b.data&&b.ids&&(k=e.appendContextPath(b.data.contextPath,b.ids[0])+"."),e.isFunction(a)&&(a=a.call(this)),b.data&&(j=e.createFrame(b.data)),a&&"object"==typeof a)if(e.isArray(a))for(var l=a.length;h<l;h++)h in a&&c(h,h,h===a.length-1);else{var m=void 0;for(var n in a)a.hasOwnProperty(n)&&(
// We're running the iterations one step out of sync so we can detect
// the last iteration without have to scan the object twice and create
// an itermediate keys array.
void 0!==m&&c(m,h-1),m=n,h++);void 0!==m&&c(m,h-1,!0)}return 0===h&&(i=f(this)),i})},b.exports=c["default"]},{"../exception":8,"../utils":21}],12:[function(a,b,c){"use strict";
// istanbul ignore next
function d(a){return a&&a.__esModule?a:{"default":a}}c.__esModule=!0;var e=a("../exception"),f=d(e);c["default"]=function(a){a.registerHelper("helperMissing",function(){if(1!==arguments.length)
// Someone is actually trying to call something, blow up.
throw new f["default"]('Missing helper: "'+arguments[arguments.length-1].name+'"')})},b.exports=c["default"]},{"../exception":8}],13:[function(a,b,c){"use strict";c.__esModule=!0;var d=a("../utils");c["default"]=function(a){a.registerHelper("if",function(a,b){
// Default behavior is to render the positive path if the value is truthy and not empty.
// The `includeZero` option may be set to treat the condtional as purely not empty based on the
// behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
// Default behavior is to render the positive path if the value is truthy and not empty.
// The `includeZero` option may be set to treat the condtional as purely not empty based on the
// behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
return d.isFunction(a)&&(a=a.call(this)),!b.hash.includeZero&&!a||d.isEmpty(a)?b.inverse(this):b.fn(this)}),a.registerHelper("unless",function(b,c){return a.helpers["if"].call(this,b,{fn:c.inverse,inverse:c.fn,hash:c.hash})})},b.exports=c["default"]},{"../utils":21}],14:[function(a,b,c){"use strict";c.__esModule=!0,c["default"]=function(a){a.registerHelper("log",function(){for(var b=[void 0],c=arguments[arguments.length-1],d=0;d<arguments.length-1;d++)b.push(arguments[d]);var e=1;null!=c.hash.level?e=c.hash.level:c.data&&null!=c.data.level&&(e=c.data.level),b[0]=e,a.log.apply(a,b)})},b.exports=c["default"]},{}],15:[function(a,b,c){"use strict";c.__esModule=!0,c["default"]=function(a){a.registerHelper("lookup",function(a,b){return a&&a[b]})},b.exports=c["default"]},{}],16:[function(a,b,c){"use strict";c.__esModule=!0;var d=a("../utils");c["default"]=function(a){a.registerHelper("with",function(a,b){d.isFunction(a)&&(a=a.call(this));var c=b.fn;if(d.isEmpty(a))return b.inverse(this);var e=b.data;return b.data&&b.ids&&(e=d.createFrame(b.data),e.contextPath=d.appendContextPath(b.data.contextPath,b.ids[0])),c(a,{data:e,blockParams:d.blockParams([a],[e&&e.contextPath])})})},b.exports=c["default"]},{"../utils":21}],17:[function(a,b,c){"use strict";c.__esModule=!0;var d=a("./utils"),e={methodMap:["debug","info","warn","error"],level:"info",
// Maps a given level value to the `methodMap` indexes above.
lookupLevel:function(a){if("string"==typeof a){var b=d.indexOf(e.methodMap,a.toLowerCase());a=b>=0?b:parseInt(a,10)}return a},
// Can be overridden in the host environment
log:function(a){if(a=e.lookupLevel(a),"undefined"!=typeof console&&e.lookupLevel(e.level)<=a){var b=e.methodMap[a];console[b]||(
// eslint-disable-line no-console
b="log");for(var c=arguments.length,d=Array(c>1?c-1:0),f=1;f<c;f++)d[f-1]=arguments[f];console[b].apply(console,d)}}};c["default"]=e,b.exports=c["default"]},{"./utils":21}],18:[function(a,b,c){(function(a){/* global window */
"use strict";c.__esModule=!0,c["default"]=function(b){/* istanbul ignore next */
var c="undefined"!=typeof a?a:window,d=c.Handlebars;/* istanbul ignore next */
b.noConflict=function(){return c.Handlebars===b&&(c.Handlebars=d),b}},b.exports=c["default"]}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],19:[function(a,b,c){"use strict";
// istanbul ignore next
function d(a){return a&&a.__esModule?a:{"default":a}}
// istanbul ignore next
function e(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function f(a){var b=a&&a[0]||1,c=r.COMPILER_REVISION;if(b!==c){if(b<c){var d=r.REVISION_CHANGES[c],e=r.REVISION_CHANGES[b];throw new q["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+d+") or downgrade your runtime to an older version ("+e+").")}
// Use the embedded version info since the runtime doesn't know about this revision yet
throw new q["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+a[1]+").")}}function g(a,b){function c(c,d,e){e.hash&&(d=o.extend({},d,e.hash),e.ids&&(e.ids[0]=!0)),c=b.VM.resolvePartial.call(this,c,d,e);var f=b.VM.invokePartial.call(this,c,d,e);if(null==f&&b.compile&&(e.partials[e.name]=b.compile(c,a.compilerOptions,b),f=e.partials[e.name](d,e)),null!=f){if(e.indent){for(var g=f.split("\n"),h=0,i=g.length;h<i&&(g[h]||h+1!==i);h++)g[h]=e.indent+g[h];f=g.join("\n")}return f}throw new q["default"]("The partial "+e.name+" could not be compiled when running in runtime-only mode")}function d(b){function c(b){return""+a.main(e,b,e.helpers,e.partials,g,i,h)}var f=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],g=f.data;d._setup(f),!f.partial&&a.useData&&(g=l(b,g));var h=void 0,i=a.useBlockParams?[]:void 0;return a.useDepths&&(h=f.depths?b!=f.depths[0]?[b].concat(f.depths):f.depths:[b]),(c=m(a.main,c,e,f.depths||[],g,i))(b,f)}/* istanbul ignore next */
if(!b)throw new q["default"]("No environment passed to template");if(!a||!a.main)throw new q["default"]("Unknown template object: "+typeof a);a.main.decorator=a.main_d,
// Note: Using env.VM references rather than local var references throughout this section to allow
// for external users to override these as psuedo-supported APIs.
b.VM.checkRevision(a.compiler);
// Just add water
var e={strict:function(a,b){if(!(b in a))throw new q["default"]('"'+b+'" not defined in '+a);return a[b]},lookup:function(a,b){for(var c=a.length,d=0;d<c;d++)if(a[d]&&null!=a[d][b])return a[d][b]},lambda:function(a,b){return"function"==typeof a?a.call(b):a},escapeExpression:o.escapeExpression,invokePartial:c,fn:function(b){var c=a[b];return c.decorator=a[b+"_d"],c},programs:[],program:function(a,b,c,d,e){var f=this.programs[a],g=this.fn(a);return b||e||d||c?f=h(this,a,g,b,c,d,e):f||(f=this.programs[a]=h(this,a,g)),f},data:function(a,b){for(;a&&b--;)a=a._parent;return a},merge:function(a,b){var c=a||b;return a&&b&&a!==b&&(c=o.extend({},b,a)),c},
// An empty object to use as replacement for null-contexts
nullContext:Object.seal({}),noop:b.VM.noop,compilerInfo:a.compiler};return d.isTop=!0,d._setup=function(c){c.partial?(e.helpers=c.helpers,e.partials=c.partials,e.decorators=c.decorators):(e.helpers=e.merge(c.helpers,b.helpers),a.usePartial&&(e.partials=e.merge(c.partials,b.partials)),(a.usePartial||a.useDecorators)&&(e.decorators=e.merge(c.decorators,b.decorators)))},d._child=function(b,c,d,f){if(a.useBlockParams&&!d)throw new q["default"]("must pass block params");if(a.useDepths&&!f)throw new q["default"]("must pass parent depths");return h(e,b,a[b],c,0,d,f)},d}function h(a,b,c,d,e,f,g){function h(b){var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],h=g;return!g||b==g[0]||b===a.nullContext&&null===g[0]||(h=[b].concat(g)),c(a,b,a.helpers,a.partials,e.data||d,f&&[e.blockParams].concat(f),h)}return h=m(c,h,a,g,d,f),h.program=b,h.depth=g?g.length:0,h.blockParams=e||0,h}function i(a,b,c){
// This is a dynamic partial that returned a string
return a?a.call||c.name||(c.name=a,a=c.partials[a]):a="@partial-block"===c.name?c.data["partial-block"]:c.partials[c.name],a}function j(a,b,c){
// Use the current closure context to save the partial-block if this partial
var d=c.data&&c.data["partial-block"];c.partial=!0,c.ids&&(c.data.contextPath=c.ids[0]||c.data.contextPath);var e=void 0;if(c.fn&&c.fn!==k&&!function(){c.data=r.createFrame(c.data);
// Wrapper function to get access to currentPartialBlock from the closure
var a=c.fn;e=c.data["partial-block"]=function(b){var c=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];
// Restore the partial-block from the closure for the execution of the block
// i.e. the part inside the block of the partial call.
return c.data=r.createFrame(c.data),c.data["partial-block"]=d,a(b,c)},a.partials&&(c.partials=o.extend({},c.partials,a.partials))}(),void 0===a&&e&&(a=e),void 0===a)throw new q["default"]("The partial "+c.name+" could not be found");if(a instanceof Function)return a(b,c)}function k(){return""}function l(a,b){return b&&"root"in b||(b=b?r.createFrame(b):{},b.root=a),b}function m(a,b,c,d,e,f){if(a.decorator){var g={};b=a.decorator(b,g,c,d&&d[0],e,f,d),o.extend(b,g)}return b}c.__esModule=!0,c.checkRevision=f,c.template=g,c.wrapProgram=h,c.resolvePartial=i,c.invokePartial=j,c.noop=k;var n=a("./utils"),o=e(n),p=a("./exception"),q=d(p),r=a("./base")},{"./base":5,"./exception":8,"./utils":21}],20:[function(a,b,c){
// Build out our basic SafeString type
"use strict";function d(a){this.string=a}c.__esModule=!0,d.prototype.toString=d.prototype.toHTML=function(){return""+this.string},c["default"]=d,b.exports=c["default"]},{}],21:[function(a,b,c){"use strict";function d(a){return l[a]}function e(a){for(var b=1;b<arguments.length;b++)for(var c in arguments[b])Object.prototype.hasOwnProperty.call(arguments[b],c)&&(a[c]=arguments[b][c]);return a}
// Older IE versions do not directly support indexOf so we must implement our own, sadly.
function f(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1}function g(a){if("string"!=typeof a){
// don't escape SafeStrings, since they're already safe
if(a&&a.toHTML)return a.toHTML();if(null==a)return"";if(!a)return a+"";
// Force a string conversion as this will be done by the append regardless and
// the regex test will do this transparently behind the scenes, causing issues if
// an object's to string has escaped characters in it.
a=""+a}return n.test(a)?a.replace(m,d):a}function h(a){return!a&&0!==a||!(!q(a)||0!==a.length)}function i(a){var b=e({},a);return b._parent=a,b}function j(a,b){return a.path=b,a}function k(a,b){return(a?a+".":"")+b}c.__esModule=!0,c.extend=e,c.indexOf=f,c.escapeExpression=g,c.isEmpty=h,c.createFrame=i,c.blockParams=j,c.appendContextPath=k;var l={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},m=/[&<>"'`=]/g,n=/[&<>"'`=]/,o=Object.prototype.toString;c.toString=o;
// Sourced from lodash
// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
/* eslint-disable func-style */
var p=function(a){return"function"==typeof a};
// fallback for older versions of Chrome and Safari
/* istanbul ignore next */
p(/x/)&&(c.isFunction=p=function(a){return"function"==typeof a&&"[object Function]"===o.call(a)}),c.isFunction=p;/* eslint-enable func-style */
/* istanbul ignore next */
var q=Array.isArray||function(a){return!(!a||"object"!=typeof a)&&"[object Array]"===o.call(a)};c.isArray=q},{}],22:[function(a,b,c){
// Create a simple path alias to allow browserify to resolve
// the runtime on a supported path.
b.exports=a("./dist/cjs/handlebars.runtime")["default"]},{"./dist/cjs/handlebars.runtime":4}],23:[function(a,b,c){b.exports=a("handlebars/runtime")["default"]},{"handlebars/runtime":22}],24:[function(a,b,c){
// i18next, v1.11.2
// Copyright (c)2015 Jan Mühlemann (jamuhl).
// Distributed under MIT license
// http://i18next.com
!function(d,e){if("object"==typeof c){var f=a("jquery");b.exports=e(f)}else"function"==typeof define&&define.amd&&define(["jquery"],e)}(this,function(a){function b(a,b){if(!b||"function"==typeof b)return a;for(var c in b)a[c]=b[c];return a}function c(a,b,d){for(var e in b)e in a?
// If we reached a leaf string in target or source then replace with source or skip depending on the 'overwrite' switch
"string"==typeof a[e]||a[e]instanceof String||"string"==typeof b[e]||b[e]instanceof String?d&&(a[e]=b[e]):c(a[e],b[e],d):a[e]=b[e];return a}function d(a,b,c){var d,e=0,f=a.length,g=void 0===f||"[object Array]"!==Object.prototype.toString.apply(a)||"function"==typeof a;if(c)if(g){for(d in a)if(b.apply(a[d],c)===!1)break}else for(;e<f&&b.apply(a[e++],c)!==!1;);else if(g){for(d in a)if(b.call(a[d],d,a[d])===!1)break}else for(;e<f&&b.call(a[e],e,a[e++])!==!1;);return a}function e(a){return"string"==typeof a?a.replace(/[&<>"'\/]/g,function(a){return T[a]}):a}function f(a){
// v0.5.0 of https://github.com/goloroden/http.js
var b=function(a){
// Use the native XHR object if the browser supports it.
if(window.XMLHttpRequest)return a(null,new XMLHttpRequest);if(window.ActiveXObject)
// In Internet Explorer check for ActiveX versions of the XHR object.
try{return a(null,new ActiveXObject("Msxml2.XMLHTTP"))}catch(b){return a(null,new ActiveXObject("Microsoft.XMLHTTP"))}
// If no XHR support was found, throw an error.
return a(new Error)},c=function(a){if("string"==typeof a)return a;var b=[];for(var c in a)a.hasOwnProperty(c)&&b.push(encodeURIComponent(c)+"="+encodeURIComponent(a[c]));return b.join("&")},d=function(a){a=a.replace(/\r\n/g,"\n");for(var b="",c=0;c<a.length;c++){var d=a.charCodeAt(c);d<128?b+=String.fromCharCode(d):d>127&&d<2048?(b+=String.fromCharCode(d>>6|192),b+=String.fromCharCode(63&d|128)):(b+=String.fromCharCode(d>>12|224),b+=String.fromCharCode(d>>6&63|128),b+=String.fromCharCode(63&d|128))}return b},e=function(a){var b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";a=d(a);var c,e,f,g,h,i,j,k="",l=0;do c=a.charCodeAt(l++),e=a.charCodeAt(l++),f=a.charCodeAt(l++),g=c>>2,h=(3&c)<<4|e>>4,i=(15&e)<<2|f>>6,j=63&f,isNaN(e)?i=j=64:isNaN(f)&&(j=64),k+=b.charAt(g)+b.charAt(h)+b.charAt(i)+b.charAt(j),c=e=f="",g=h=i=j="";while(l<a.length);return k},f=function(){
// Iterate through the remaining header objects and add them.
for(var a=arguments[0],b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)c.hasOwnProperty(d)&&(a[d]=c[d])}
// Return the merged headers.
return a},g=function(a,d,e,h){
// Adjust parameters.
"function"==typeof e&&(h=e,e={}),
// Set default parameter values.
e.cache=e.cache||!1,e.data=e.data||{},e.headers=e.headers||{},e.jsonp=e.jsonp||!1,e.async=void 0===e.async||e.async;
// Merge the various header objects.
var i,j=f({accept:"*/*","content-type":"application/x-www-form-urlencoded;charset=UTF-8"},g.headers,e.headers);
// Specially prepare GET requests: Setup the query string, handle caching and make a JSONP call
// if neccessary.
if(i="application/json"===j["content-type"]?JSON.stringify(e.data):c(e.data),"GET"===a){
// Setup the query string.
var k=[];
// Make a JSONP call if neccessary.
if(i&&(k.push(i),i=null),
// Handle caching.
e.cache||k.push("_="+(new Date).getTime()),
// If neccessary prepare the query string for a JSONP call.
e.jsonp&&(k.push("callback="+e.jsonp),k.push("jsonp="+e.jsonp)),
// Merge the query string and attach it to the url.
k=k.join("&"),k.length>1&&(d+=d.indexOf("?")>-1?"&"+k:"?"+k),e.jsonp){var l=document.getElementsByTagName("head")[0],m=document.createElement("script");return m.type="text/javascript",m.src=d,void l.appendChild(m)}}
// Since we got here, it is no JSONP request, so make a normal XHR request.
b(function(b,c){if(b)return h(b);
// Open the request.
c.open(a,d,e.async);
// Set the request headers.
for(var f in j)j.hasOwnProperty(f)&&c.setRequestHeader(f,j[f]);
// Handle the request events.
c.onreadystatechange=function(){if(4===c.readyState){var a=c.responseText||"";
// If no callback is given, return.
if(!h)return;
// Return an object that provides access to the data as text and JSON.
h(c.status,{text:function(){return a},json:function(){try{return JSON.parse(a)}catch(b){return W.error("Can not parse JSON. URL: "+d),{}}}})}},
// Actually send the XHR request.
c.send(i)})},h={authBasic:function(a,b){g.headers.Authorization="Basic "+e(a+":"+b)},connect:function(a,b,c){return g("CONNECT",a,b,c)},del:function(a,b,c){return g("DELETE",a,b,c)},get:function(a,b,c){return g("GET",a,b,c)},head:function(a,b,c){return g("HEAD",a,b,c)},headers:function(a){g.headers=a||{}},isAllowed:function(a,b,c){this.options(a,function(a,d){c(d.text().indexOf(b)!==-1)})},options:function(a,b,c){return g("OPTIONS",a,b,c)},patch:function(a,b,c){return g("PATCH",a,b,c)},post:function(a,b,c){return g("POST",a,b,c)},put:function(a,b,c){return g("PUT",a,b,c)},trace:function(a,b,c){return g("TRACE",a,b,c)}},i=a.type?a.type.toLowerCase():"get";h[i](a.url,a,function(b,c){
// file: protocol always gives status code 0, so check for data
200===b||0===b&&c.text()?a.success(c.json(),b,null):a.error(c.text(),b,null)})}function g(b,c){"function"==typeof b&&(c=b,b={}),b=b||{},
// override defaults with passed in options
W.extend(S,b),delete S.fixLng,/* passed in each time */
// override functions: .log(), .detectLanguage(), etc
S.functions&&(delete S.functions,W.extend(W,b.functions)),
// create namespace object if namespace is passed in as string
"string"==typeof S.ns&&(S.ns={namespaces:[S.ns],defaultNs:S.ns}),
// fallback namespaces
"string"==typeof S.fallbackNS&&(S.fallbackNS=[S.fallbackNS]),
// fallback languages
"string"!=typeof S.fallbackLng&&"boolean"!=typeof S.fallbackLng||(S.fallbackLng=[S.fallbackLng]),
// escape prefix/suffix
S.interpolationPrefixEscaped=W.regexEscape(S.interpolationPrefix),S.interpolationSuffixEscaped=W.regexEscape(S.interpolationSuffix),S.lng||(S.lng=W.detectLanguage()),P=W.toLanguages(S.lng),L=P[0],W.log("currentLng set to: "+L),S.useCookie&&W.cookie.read(S.cookieName)!==L&&//cookie is unset or invalid
W.cookie.create(S.cookieName,L,S.cookieExpirationTime,S.cookieDomain),S.detectLngFromLocalStorage&&"undefined"!=typeof document&&window.localStorage&&W.localStorage.setItem("i18next_lng",L);var d=F;b.fixLng&&(d=function(a,b){return b=b||{},b.lng=b.lng||d.lng,F(a,b)},d.lng=L),Z.setCurrentLng(L),
// add JQuery extensions
a&&S.setJqueryExt?x&&x():y&&y();
// jQuery deferred
var e;
// return immidiatly if res are passed in
if(a&&a.Deferred&&(e=a.Deferred()),S.resStore){if(N=S.resStore,Q=!0,c&&c(null,d),e&&e.resolve(d),e)return e.promise()}else{
// languages to load
var f=W.toLanguages(S.lng);"string"==typeof S.preload&&(S.preload=[S.preload]);for(var g=0,h=S.preload.length;g<h;g++)for(var i=W.toLanguages(S.preload[g]),j=0,k=i.length;j<k;j++)f.indexOf(i[j])<0&&f.push(i[j]);if(
// else load them
M.sync.load(f,S,function(a,b){N=b,Q=!0,c&&c(a,d),e&&(a?e.reject:e.resolve)(a||d)}),e)return e.promise()}}function h(){return Q}function i(a,b){"string"==typeof a&&(a=[a]);for(var c=0,d=a.length;c<d;c++)S.preload.indexOf(a[c])<0&&S.preload.push(a[c]);return g(b)}function j(a,b,c,d,e){"string"!=typeof b?(c=b,b=S.ns.defaultNs):S.ns.namespaces.indexOf(b)<0&&S.ns.namespaces.push(b),N[a]=N[a]||{},N[a][b]=N[a][b]||{},d?W.deepExtend(N[a][b],c,e):W.extend(N[a][b],c),S.useLocalStorage&&R._storeLocal(N)}function k(a,b){"string"!=typeof b&&(b=S.ns.defaultNs),N[a]=N[a]||{};var c=N[a][b]||{},d=!1;for(var e in c)c.hasOwnProperty(e)&&(d=!0);return d}function l(a,b){return"string"!=typeof b&&(b=S.ns.defaultNs),N[a]=N[a]||{},W.extend({},N[a][b])}function m(a,b){"string"!=typeof b&&(b=S.ns.defaultNs),N[a]=N[a]||{},N[a][b]={},S.useLocalStorage&&R._storeLocal(N)}function n(a,b,c,d){"string"!=typeof b?(resource=b,b=S.ns.defaultNs):S.ns.namespaces.indexOf(b)<0&&S.ns.namespaces.push(b),N[a]=N[a]||{},N[a][b]=N[a][b]||{};for(var e=c.split(S.keyseparator),f=0,g=N[a][b];e[f];)f==e.length-1?g[e[f]]=d:(null==g[e[f]]&&(g[e[f]]={}),g=g[e[f]]),f++;S.useLocalStorage&&R._storeLocal(N)}function o(a,b,c){"string"!=typeof b?(c=b,b=S.ns.defaultNs):S.ns.namespaces.indexOf(b)<0&&S.ns.namespaces.push(b);for(var d in c)"string"==typeof c[d]&&n(a,b,d,c[d])}function p(a){S.ns.defaultNs=a}function q(a,b){r([a],b)}function r(a,b){var c={dynamicLoad:S.dynamicLoad,resGetPath:S.resGetPath,getAsync:S.getAsync,customLoad:S.customLoad,ns:{namespaces:a,defaultNs:""}},d=W.toLanguages(S.lng);"string"==typeof S.preload&&(S.preload=[S.preload]);for(var e=0,f=S.preload.length;e<f;e++)for(var g=W.toLanguages(S.preload[e]),h=0,i=g.length;h<i;h++)d.indexOf(g[h])<0&&d.push(g[h]);for(var j=[],k=0,l=d.length;k<l;k++){var m=!1,n=N[d[k]];if(n)for(var o=0,p=a.length;o<p;o++)n[a[o]]||(m=!0);else m=!0;m&&j.push(d[k])}j.length?M.sync._fetch(j,c,function(c,d){var e=a.length*j.length;
// load each file individual
W.each(a,function(a,c){
// append namespace to namespace array
S.ns.namespaces.indexOf(c)<0&&S.ns.namespaces.push(c),W.each(j,function(a,f){N[f]=N[f]||{},N[f][c]=d[f][c],e--,// wait for all done befor callback
0===e&&b&&(S.useLocalStorage&&M.sync._storeLocal(N),b())})})}):b&&b()}function s(a,b,c){return"function"==typeof b?(c=b,b={}):b||(b={}),b.lng=a,g(b,c)}function t(){return L}function u(){var a=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam"];return a.some(function(a){return new RegExp("^"+a).test(L)})?"rtl":"ltr"}function v(a){N={},s(L,a)}function w(){window.i18next=window.i18n,conflictReference?window.i18n=conflictReference:delete window.i18n}function x(){function b(b,c,d){if(0!==c.length){var e="text";if(0===c.indexOf("[")){var f=c.split("]");c=f[1],e=f[0].substr(1,f[0].length-1)}c.indexOf(";")===c.length-1&&(c=c.substr(0,c.length-2));var g;if("html"===e)g=S.defaultValueFromContent?a.extend({defaultValue:b.html()},d):d,b.html(a.t(c,g));else if("text"===e)g=S.defaultValueFromContent?a.extend({defaultValue:b.text()},d):d,b.text(a.t(c,g));else if("prepend"===e)g=S.defaultValueFromContent?a.extend({defaultValue:b.html()},d):d,b.prepend(a.t(c,g));else if("append"===e)g=S.defaultValueFromContent?a.extend({defaultValue:b.html()},d):d,b.append(a.t(c,g));else if(0===e.indexOf("data-")){var h=e.substr("data-".length);g=S.defaultValueFromContent?a.extend({defaultValue:b.data(h)},d):d;var i=a.t(c,g);
//we change into the data cache
b.data(h,i),
//we change into the dom
b.attr(e,i)}else g=S.defaultValueFromContent?a.extend({defaultValue:b.attr(e)},d):d,b.attr(e,a.t(c,g))}}function c(c,d){var e=c.attr(S.selectorAttr);if(e||"undefined"==typeof e||e===!1||(e=c.text()||c.val()),e){var f=c,g=c.data("i18n-target");if(g&&(f=c.find(g)||c),d||S.useDataAttrOptions!==!0||(d=c.data("i18n-options")),d=d||{},e.indexOf(";")>=0){var h=e.split(";");a.each(h,function(a,c){""!==c&&b(f,c,d)})}else b(f,e,d);if(S.useDataAttrOptions===!0){var i=a.extend({lng:"non",lngs:[],_origLng:"non"},d);delete i.lng,delete i.lngs,delete i._origLng,c.data("i18n-options",i)}}}
// $.t shortcut
a.t=a.t||F,
// fn
a.fn.i18n=function(b){return this.each(function(){
// localize element itself
c(a(this),b);
// localize childs
var d=a(this).find("["+S.selectorAttr+"]");d.each(function(){c(a(this),b)})})}}function y(){function a(a,b,c){if(0!==b.length){var d="text";if(0===b.indexOf("[")){var e=b.split("]");b=e[1],d=e[0].substr(1,e[0].length-1)}b.indexOf(";")===b.length-1&&(b=b.substr(0,b.length-2)),"html"===d?a.innerHTML=F(b,c):"text"===d?a.textContent=F(b,c):"prepend"===d?a.insertAdjacentHTML(F(b,c),"afterbegin"):"append"===d?a.insertAdjacentHTML(F(b,c),"beforeend"):a.setAttribute(d,F(b,c))}}function b(b,c){var d=b.getAttribute(S.selectorAttr);if(d||"undefined"==typeof d||d===!1||(d=b.textContent||b.value),d){var e=b,f=b.getAttribute("i18n-target");if(f&&(e=b.querySelector(f)||b),d.indexOf(";")>=0)for(var g=d.split(";"),h=0,i=g.length;h<i;h++)""!==g[h]&&a(e,g[h],c);else a(e,d,c)}}
// fn
M.translateObject=function(a,c){for(
// localize childs
var d=a.querySelectorAll("["+S.selectorAttr+"]"),e=0,f=d.length;e<f;e++)b(d[e],c)}}function z(a,b,c,d){if(!a)return a;// first call uses replacement hash combined with options
if(d=d||b,a.indexOf(d.interpolationPrefix||S.interpolationPrefix)<0)return a;var e=d.interpolationPrefix?W.regexEscape(d.interpolationPrefix):S.interpolationPrefixEscaped,f=d.interpolationSuffix?W.regexEscape(d.interpolationSuffix):S.interpolationSuffixEscaped,g=d.keyseparator||S.keyseparator,h=b.replace&&"object"==typeof b.replace?b.replace:b,i=new RegExp([e,"(.+?)","(HTML)?",f].join(""),"g"),j=d.escapeInterpolation||S.escapeInterpolation;return a.replace(i,function(a,b,c){for(
// Check for recursive matches of object
var d=h,e=b;e.indexOf(g)>=0&&"object"==typeof d&&d;){var f=e.slice(0,e.indexOf(g));e=e.slice(e.indexOf(g)+1),d=d[f]}if(d&&"object"==typeof d&&d.hasOwnProperty(e)){d[e];return j&&!c?W.escape(d[e]):d[e]}return a})}function A(a,b){var c=",",d="{",e="}",f=W.extend({},b);for(delete f.postProcess,delete f.isFallbackLookup;a.indexOf(S.reusePrefix)!=-1&&(O++,!(O>S.maxRecursion));){// safety net for too much recursion
var g=a.lastIndexOf(S.reusePrefix),h=a.indexOf(S.reuseSuffix,g)+S.reuseSuffix.length,i=a.substring(g,h),j=i.replace(S.reusePrefix,"").replace(S.reuseSuffix,"");if(h<=g)return W.error("there is an missing closing in following translation value",a),"";if(j.indexOf(c)!=-1){var k=j.indexOf(c);if(j.indexOf(d,k)!=-1&&j.indexOf(e,k)!=-1){var l=j.indexOf(d,k),m=j.indexOf(e,l)+e.length;try{f=W.extend(f,JSON.parse(j.substring(l,m))),j=j.substring(0,k)}catch(n){}}}var o=I(j,f);a=a.replace(i,W.regexReplacementEscape(o))}return a}function B(a){return a.context&&("string"==typeof a.context||"number"==typeof a.context)}function C(a,b){return void 0!==a.count&&"string"!=typeof a.count}function D(a){return void 0!==a.indefinite_article&&"string"!=typeof a.indefinite_article&&a.indefinite_article}function E(a,b){b=b||{};var c=G(a,b),d=J(a,b);return void 0!==d||d===c}function F(a,b){return Q?(O=0,I.apply(null,arguments)):(W.log("i18next not finished initialization. you might have called t function before loading resources finished."),b&&b.defaultValue?b.detaultValue:"")}function G(a,b){return void 0!==b.defaultValue?b.defaultValue:a}function H(){
// mh: build array from second argument onwards
for(var a=[],b=1;b<arguments.length;b++)a.push(arguments[b]);return{postProcess:"sprintf",sprintf:a}}function I(a,b){if("undefined"!=typeof b&&"object"!=typeof b?"sprintf"===S.shortcutFunction?
// mh: gettext like sprintf syntax found, automatically create sprintf processor
b=H.apply(null,arguments):"defaultValue"===S.shortcutFunction&&(b={defaultValue:b}):b=b||{},"object"==typeof S.defaultVariables&&(b=W.extend({},S.defaultVariables,b)),void 0===a||null===a||""===a)return"";"number"==typeof a&&(a=String(a)),"string"==typeof a&&(a=[a]);var c=a[0];if(a.length>1)for(var d=0;d<a.length&&(c=a[d],!E(c,b));d++);var e,f=G(c,b),g=J(c,b),h=b.nsseparator||S.nsseparator,i=b.lng?W.toLanguages(b.lng,b.fallbackLng):P,j=b.ns||S.ns.defaultNs;
// split ns and key
c.indexOf(h)>-1&&(e=c.split(h),j=e[0],c=e[1]),void 0===g&&S.sendMissing&&"function"==typeof S.missingKeyHandler&&(b.lng?S.missingKeyHandler(i[0],j,c,f,i):S.missingKeyHandler(S.lng,j,c,f,i));var k,l,m;if(k="string"==typeof S.postProcess&&""!==S.postProcess?[S.postProcess]:"array"==typeof S.postProcess||"object"==typeof S.postProcess?S.postProcess:[],"string"==typeof b.postProcess&&""!==b.postProcess?k=k.concat([b.postProcess]):"array"!=typeof b.postProcess&&"object"!=typeof b.postProcess||(k=k.concat(b.postProcess)),void 0!==g&&k.length)for(m=0;m<k.length;m+=1)l=k[m],$[l]&&(g=$[l](g,c,b));
// process notFound if function exists
var n=f;if(f.indexOf(h)>-1&&(e=f.split(h),n=e[1]),n===c&&S.parseMissingKey&&(f=S.parseMissingKey(f)),void 0===g&&(f=z(f,b),f=A(f,b),k.length))for(g=G(c,b),m=0;m<k.length;m+=1)l=k[m],$[l]&&(g=$[l](g,c,b));return void 0!==g?g:f}function J(a,b){b=b||{};var c,d,e=G(a,b),f=P;if(!N)return e;// no resStore to translate from
// CI mode
if("cimode"===f[0].toLowerCase())return e;if(
// passed in lng
b.lngs&&(f=b.lngs),b.lng&&(f=W.toLanguages(b.lng,b.fallbackLng),!N[f[0]])){var g=S.getAsync;S.getAsync=!1,M.sync.load(f,S,function(a,b){W.extend(N,b),S.getAsync=g})}var h=b.ns||S.ns.defaultNs,i=b.nsseparator||S.nsseparator;if(a.indexOf(i)>-1){var j=a.split(i);h=j[0],a=j[1]}if(B(b)){c=W.extend({},b),delete c.context,c.defaultValue=S.contextNotFound;var k=h+i+a+"_"+b.context;if(d=F(k,c),d!=S.contextNotFound)return z(d,{context:b.context})}if(C(b,f[0])){c=W.extend({lngs:[f[0]]},b),delete c.count,c._origLng=c._origLng||c.lng||f[0],delete c.lng,c.defaultValue=S.pluralNotFound;var l;if(Z.needsPlural(f[0],b.count)){l=h+i+a+S.pluralSuffix;var m=Z.get(f[0],b.count);m>=0?l=l+"_"+m:1===m&&(l=h+i+a)}else l=h+i+a;if(d=F(l,c),d!=S.pluralNotFound)return z(d,{count:b.count,interpolationPrefix:b.interpolationPrefix,interpolationSuffix:b.interpolationSuffix});if(!(f.length>1))return c.lng=c._origLng,delete c._origLng,d=F(h+i+a,c),z(d,{count:b.count,interpolationPrefix:b.interpolationPrefix,interpolationSuffix:b.interpolationSuffix});
// remove failed lng
var n=f.slice();if(n.shift(),b=W.extend(b,{lngs:n}),b._origLng=c._origLng,delete b.lng,
// retry with fallbacks
d=F(h+i+a,b),d!=S.pluralNotFound)return d}if(D(b)){var o=W.extend({},b);delete o.indefinite_article,o.defaultValue=S.indefiniteNotFound;
// If we don't have a count, we want the indefinite, if we do have a count, and needsPlural is false
var p=h+i+a+(b.count&&!C(b,f[0])||!b.count?S.indefiniteSuffix:"");if(d=F(p,o),d!=S.indefiniteNotFound)return d}for(var q,r=b.keyseparator||S.keyseparator,s=a.split(r),t=0,u=f.length;t<u&&void 0===q;t++){for(var v=f[t],w=0,x=N[v]&&N[v][h];s[w];)x=x&&x[s[w]],w++;if(void 0!==x&&(!S.showKeyIfEmpty||""!==x)){var y=Object.prototype.toString.apply(x);if("string"==typeof x)x=z(x,b),x=A(x,b);else if("[object Array]"!==y||S.returnObjectTrees||b.returnObjectTrees){if(null===x&&S.fallbackOnNull===!0)x=void 0;else if(null!==x)if(S.returnObjectTrees||b.returnObjectTrees){if("[object Number]"!==y&&"[object Function]"!==y&&"[object RegExp]"!==y){var E="[object Array]"===y?[]:{};// apply child translation on a copy
W.each(x,function(c){E[c]=I(h+i+a+r+c,b)}),x=E}}else S.objectTreeKeyHandler&&"function"==typeof S.objectTreeKeyHandler?x=S.objectTreeKeyHandler(a,x,v,h,b):(x="key '"+h+":"+a+" ("+v+")' returned an object instead of string.",W.log(x))}else x=x.join("\n"),x=z(x,b),x=A(x,b);"string"==typeof x&&""===x.trim()&&S.fallbackOnEmpty===!0&&(x=void 0),q=x}}if(void 0===q&&!b.isFallbackLookup&&(S.fallbackToDefaultNS===!0||S.fallbackNS&&S.fallbackNS.length>0)){if(
// set flag for fallback lookup - avoid recursion
b.isFallbackLookup=!0,S.fallbackNS.length){for(var H=0,K=S.fallbackNS.length;H<K;H++)if(q=J(S.fallbackNS[H]+i+a,b),q||""===q&&S.fallbackOnEmpty===!1){/* compare value without namespace */
var L=q.indexOf(i)>-1?q.split(i)[1]:q,O=e.indexOf(i)>-1?e.split(i)[1]:e;if(L!==O)break}}else b.ns=S.ns.defaultNs,q=J(a,b);b.isFallbackLookup=!1}return q}function K(){var a,b=S.lngWhitelist||[],c=[];
// get from cookie
if("undefined"!=typeof window&&!function(){for(var a=window.location.search.substring(1),b=a.split("&"),d=0;d<b.length;d++){var e=b[d].indexOf("=");if(e>0){var f=b[d].substring(0,e);f==S.detectLngQS&&c.push(b[d].substring(e+1))}}}(),S.useCookie&&"undefined"!=typeof document){var d=W.cookie.read(S.cookieName);d&&c.push(d)}
// get from localStorage
if(S.detectLngFromLocalStorage&&"undefined"!=typeof window&&window.localStorage){var e=W.localStorage.getItem("i18next_lng");e&&c.push(e)}
// get from navigator
if("undefined"!=typeof navigator){if(navigator.languages)// chrome only; not an array, so can't use .push.apply instead of iterating
for(var f=0;f<navigator.languages.length;f++)c.push(navigator.languages[f]);navigator.userLanguage&&c.push(navigator.userLanguage),navigator.language&&c.push(navigator.language)}
//fallback
return function(){for(var d=0;d<c.length;d++){var e=c[d];if(e.indexOf("-")>-1){var f=e.split("-");e=S.lowerCaseLng?f[0].toLowerCase()+"-"+f[1].toLowerCase():f[0].toLowerCase()+"-"+f[1].toUpperCase()}if(0===b.length||b.indexOf(e)>-1){a=e;break}}}(),a||(a=S.fallbackLng[0]),a}
// add indexOf to non ECMA-262 standard compliant browsers
Array.prototype.indexOf||(Array.prototype.indexOf=function(a){"use strict";if(null==this)throw new TypeError;var b=Object(this),c=b.length>>>0;if(0===c)return-1;var d=0;if(arguments.length>0&&(d=Number(arguments[1]),d!=d?// shortcut for verifying if it's NaN
d=0:0!=d&&d!=1/0&&d!=-(1/0)&&(d=(d>0||-1)*Math.floor(Math.abs(d)))),d>=c)return-1;for(var e=d>=0?d:Math.max(c-Math.abs(d),0);e<c;e++)if(e in b&&b[e]===a)return e;return-1}),
// add lastIndexOf to non ECMA-262 standard compliant browsers
Array.prototype.lastIndexOf||(Array.prototype.lastIndexOf=function(a){"use strict";if(null==this)throw new TypeError;var b=Object(this),c=b.length>>>0;if(0===c)return-1;var d=c;arguments.length>1&&(d=Number(arguments[1]),d!=d?d=0:0!=d&&d!=1/0&&d!=-(1/0)&&(d=(d>0||-1)*Math.floor(Math.abs(d))));for(var e=d>=0?Math.min(d,c-1):c-Math.abs(d);e>=0;e--)if(e in b&&b[e]===a)return e;return-1}),
// Add string trim for IE8.
"function"!=typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});var L,M={},N={},O=0,P=[],Q=!1,R={};R={load:function(a,b,c){b.useLocalStorage?R._loadLocal(a,b,function(d,e){for(var f=[],g=0,h=a.length;g<h;g++)e[a[g]]||f.push(a[g]);f.length>0?R._fetch(f,b,function(a,b){W.extend(e,b),R._storeLocal(b),c(a,e)}):c(d,e)}):R._fetch(a,b,function(a,b){c(a,b)})},_loadLocal:function(a,b,c){var d={},e=(new Date).getTime();if(window.localStorage){var f=a.length;W.each(a,function(a,g){var h=W.localStorage.getItem("res_"+g);h&&(h=JSON.parse(h),h.i18nStamp&&h.i18nStamp+b.localStorageExpirationTime>e&&(d[g]=h)),f--,// wait for all done befor callback
0===f&&c(null,d)})}},_storeLocal:function(a){if(window.localStorage)for(var b in a)a[b].i18nStamp=(new Date).getTime(),W.localStorage.setItem("res_"+b,JSON.stringify(a[b]))},_fetch:function(a,b,c){var d=b.ns,e={};if(b.dynamicLoad){
// Call this once our translation has returned.
var f=function(a,b){c(a,b)};if("function"==typeof b.customLoad)
// Use the specified custom callback.
b.customLoad(a,d.namespaces,b,f);else{var g=z(b.resGetPath,{lng:a.join("+"),ns:d.namespaces.join("+")});
// load all needed stuff once
W.ajax({url:g,cache:b.cache,success:function(a,b,c){W.log("loaded: "+g),f(null,a)},error:function(a,b,c){W.log("failed loading: "+g),f("failed loading resource.json error: "+c)},dataType:"json",async:b.getAsync,timeout:b.ajaxTimeout})}}else{var h,i=d.namespaces.length*a.length;
// load each file individual
W.each(d.namespaces,function(d,f){W.each(a,function(a,d){
// Call this once our translation has returned.
var g=function(a,b){a&&(h=h||[],h.push(a)),e[d]=e[d]||{},e[d][f]=b,i--,// wait for all done befor callback
0===i&&c(h,e)};"function"==typeof b.customLoad?
// Use the specified custom callback.
b.customLoad(d,f,b,g):
//~ // Use our inbuilt sync.
R._fetchOne(d,f,b,g)})})}},_fetchOne:function(a,b,c,d){var e=z(c.resGetPath,{lng:a,ns:b});W.ajax({url:e,cache:c.cache,success:function(a,b,c){W.log("loaded: "+e),d(null,a)},error:function(a,b,c){if(b&&200==b||a&&a.status&&200==a.status)
// file loaded but invalid json, stop waste time !
W.error("There is a typo in: "+e);else if(b&&404==b||a&&a.status&&404==a.status)W.log("Does not exist: "+e);else{var f=b?b:a&&a.status?a.status:null;W.log(f+" when loading "+e)}d(c,{})},dataType:"json",async:c.getAsync,timeout:c.ajaxTimeout,headers:c.headers})},postMissing:function(a,b,c,d,e){var f={};f[c]=d;var g=[];if("fallback"===S.sendMissingTo&&S.fallbackLng[0]!==!1)for(var h=0;h<S.fallbackLng.length;h++)g.push({lng:S.fallbackLng[h],url:z(S.resPostPath,{lng:S.fallbackLng[h],ns:b})});else if("current"===S.sendMissingTo||"fallback"===S.sendMissingTo&&S.fallbackLng[0]===!1)g.push({lng:a,url:z(S.resPostPath,{lng:a,ns:b})});else if("all"===S.sendMissingTo)for(var h=0,i=e.length;h<i;h++)g.push({lng:e[h],url:z(S.resPostPath,{lng:e[h],ns:b})});for(var j=0,k=g.length;j<k;j++){var l=g[j];W.ajax({url:l.url,type:S.sendType,data:f,success:function(a,e,f){W.log("posted missing key '"+c+"' to: "+l.url);for(
// add key to resStore
var g=c.split("."),h=0,i=N[l.lng][b];g[h];)i=h===g.length-1?i[g[h]]=d:i[g[h]]=i[g[h]]||{},h++},error:function(a,b,d){W.log("failed posting missing key '"+c+"' to: "+l.url)},dataType:"json",async:S.postAsync,timeout:S.ajaxTimeout})}},reload:v};
// defaults
var S={lng:void 0,load:"all",preload:[],lowerCaseLng:!1,returnObjectTrees:!1,fallbackLng:["dev"],fallbackNS:[],detectLngQS:"setLng",detectLngFromLocalStorage:!1,ns:{namespaces:["translation"],defaultNs:"translation"},fallbackOnNull:!0,fallbackOnEmpty:!1,fallbackToDefaultNS:!1,showKeyIfEmpty:!1,nsseparator:":",keyseparator:".",selectorAttr:"data-i18n",debug:!1,resGetPath:"locales/__lng__/__ns__.json",resPostPath:"locales/add/__lng__/__ns__",getAsync:!0,postAsync:!0,resStore:void 0,useLocalStorage:!1,localStorageExpirationTime:6048e5,dynamicLoad:!1,sendMissing:!1,sendMissingTo:"fallback",// current | all
sendType:"POST",interpolationPrefix:"__",interpolationSuffix:"__",defaultVariables:!1,reusePrefix:"$t(",reuseSuffix:")",pluralSuffix:"_plural",pluralNotFound:["plural_not_found",Math.random()].join(""),contextNotFound:["context_not_found",Math.random()].join(""),escapeInterpolation:!1,indefiniteSuffix:"_indefinite",indefiniteNotFound:["indefinite_not_found",Math.random()].join(""),setJqueryExt:!0,defaultValueFromContent:!0,useDataAttrOptions:!1,cookieExpirationTime:void 0,useCookie:!0,cookieName:"i18next",cookieDomain:void 0,objectTreeKeyHandler:void 0,postProcess:void 0,parseMissingKey:void 0,missingKeyHandler:R.postMissing,ajaxTimeout:0,shortcutFunction:"sprintf"},T={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"},U={create:function(a,b,c,d){var e;if(c){var f=new Date;f.setTime(f.getTime()+60*c*1e3),e="; expires="+f.toGMTString()}else e="";d=d?"domain="+d+";":"",document.cookie=a+"="+b+e+";"+d+"path=/"},read:function(a){for(var b=a+"=",c=document.cookie.split(";"),d=0;d<c.length;d++){for(var e=c[d];" "==e.charAt(0);)e=e.substring(1,e.length);if(0===e.indexOf(b))return e.substring(b.length,e.length)}return null},remove:function(a){this.create(a,"",-1)}},V={create:function(a,b,c,d){},read:function(a){return null},remove:function(a){}},W={extend:a?a.extend:b,deepExtend:c,each:a?a.each:d,ajax:a?a.ajax:"undefined"!=typeof document?f:function(){},cookie:"undefined"!=typeof document?U:V,detectLanguage:K,escape:e,log:function(a){S.debug&&"undefined"!=typeof console&&console.log(a)},error:function(a){"undefined"!=typeof console&&console.error(a)},getCountyIndexOfLng:function(a){var b=0;return"nb-NO"!==a&&"nn-NO"!==a&&"nb-no"!==a&&"nn-no"!==a||(b=1),b},toLanguages:function(a,b){function c(a){var b=a;if("string"==typeof a&&a.indexOf("-")>-1){var c=a.split("-");b=S.lowerCaseLng?c[0].toLowerCase()+"-"+c[1].toLowerCase():c[0].toLowerCase()+"-"+c[1].toUpperCase()}else b=S.lowerCaseLng?a.toLowerCase():a;return b}var d=this.log;b=b||S.fallbackLng,"string"==typeof b&&(b=[b]);var e=[],f=S.lngWhitelist||!1,g=function(a){
//reject langs not whitelisted
!f||f.indexOf(a)>-1?e.push(a):d("rejecting non-whitelisted language: "+a)};if("string"==typeof a&&a.indexOf("-")>-1){var h=a.split("-");"unspecific"!==S.load&&g(c(a)),"current"!==S.load&&g(c(h[this.getCountyIndexOfLng(a)]))}else g(c(a));for(var i=0;i<b.length;i++)e.indexOf(b[i])===-1&&b[i]&&e.push(c(b[i]));return e},regexEscape:function(a){return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},regexReplacementEscape:function(a){return"string"==typeof a?a.replace(/\$/g,"$$$$"):a},localStorage:{setItem:function(a,b){if(window.localStorage)try{window.localStorage.setItem(a,b)}catch(c){W.log('failed to set value for key "'+a+'" to localStorage.')}},getItem:function(a,b){if(window.localStorage)try{return window.localStorage.getItem(a,b)}catch(c){return void W.log('failed to get value for key "'+a+'" from localStorage.')}}}};
// append it to functions
W.applyReplacement=z;
// definition http://translate.sourceforge.net/wiki/l10n/pluralforms
/* [code, name, numbers, pluralsType] */
var X=[["ach","Acholi",[1,2],1],["af","Afrikaans",[1,2],2],["ak","Akan",[1,2],1],["am","Amharic",[1,2],1],["an","Aragonese",[1,2],2],["ar","Arabic",[0,1,2,3,11,100],5],["arn","Mapudungun",[1,2],1],["ast","Asturian",[1,2],2],["ay","Aymará",[1],3],["az","Azerbaijani",[1,2],2],["be","Belarusian",[1,2,5],4],["bg","Bulgarian",[1,2],2],["bn","Bengali",[1,2],2],["bo","Tibetan",[1],3],["br","Breton",[1,2],1],["bs","Bosnian",[1,2,5],4],["ca","Catalan",[1,2],2],["cgg","Chiga",[1],3],["cs","Czech",[1,2,5],6],["csb","Kashubian",[1,2,5],7],["cy","Welsh",[1,2,3,8],8],["da","Danish",[1,2],2],["de","German",[1,2],2],["dev","Development Fallback",[1,2],2],["dz","Dzongkha",[1],3],["el","Greek",[1,2],2],["en","English",[1,2],2],["eo","Esperanto",[1,2],2],["es","Spanish",[1,2],2],["es_ar","Argentinean Spanish",[1,2],2],["et","Estonian",[1,2],2],["eu","Basque",[1,2],2],["fa","Persian",[1],3],["fi","Finnish",[1,2],2],["fil","Filipino",[1,2],1],["fo","Faroese",[1,2],2],["fr","French",[1,2],9],["fur","Friulian",[1,2],2],["fy","Frisian",[1,2],2],["ga","Irish",[1,2,3,7,11],10],["gd","Scottish Gaelic",[1,2,3,20],11],["gl","Galician",[1,2],2],["gu","Gujarati",[1,2],2],["gun","Gun",[1,2],1],["ha","Hausa",[1,2],2],["he","Hebrew",[1,2],2],["hi","Hindi",[1,2],2],["hr","Croatian",[1,2,5],4],["hu","Hungarian",[1,2],2],["hy","Armenian",[1,2],2],["ia","Interlingua",[1,2],2],["id","Indonesian",[1],3],["is","Icelandic",[1,2],12],["it","Italian",[1,2],2],["ja","Japanese",[1],3],["jbo","Lojban",[1],3],["jv","Javanese",[0,1],13],["ka","Georgian",[1],3],["kk","Kazakh",[1],3],["km","Khmer",[1],3],["kn","Kannada",[1,2],2],["ko","Korean",[1],3],["ku","Kurdish",[1,2],2],["kw","Cornish",[1,2,3,4],14],["ky","Kyrgyz",[1],3],["lb","Letzeburgesch",[1,2],2],["ln","Lingala",[1,2],1],["lo","Lao",[1],3],["lt","Lithuanian",[1,2,10],15],["lv","Latvian",[1,2,0],16],["mai","Maithili",[1,2],2],["mfe","Mauritian Creole",[1,2],1],["mg","Malagasy",[1,2],1],["mi","Maori",[1,2],1],["mk","Macedonian",[1,2],17],["ml","Malayalam",[1,2],2],["mn","Mongolian",[1,2],2],["mnk","Mandinka",[0,1,2],18],["mr","Marathi",[1,2],2],["ms","Malay",[1],3],["mt","Maltese",[1,2,11,20],19],["nah","Nahuatl",[1,2],2],["nap","Neapolitan",[1,2],2],["nb","Norwegian Bokmal",[1,2],2],["ne","Nepali",[1,2],2],["nl","Dutch",[1,2],2],["nn","Norwegian Nynorsk",[1,2],2],["no","Norwegian",[1,2],2],["nso","Northern Sotho",[1,2],2],["oc","Occitan",[1,2],1],["or","Oriya",[2,1],2],["pa","Punjabi",[1,2],2],["pap","Papiamento",[1,2],2],["pl","Polish",[1,2,5],7],["pms","Piemontese",[1,2],2],["ps","Pashto",[1,2],2],["pt","Portuguese",[1,2],2],["pt_br","Brazilian Portuguese",[1,2],2],["rm","Romansh",[1,2],2],["ro","Romanian",[1,2,20],20],["ru","Russian",[1,2,5],4],["sah","Yakut",[1],3],["sco","Scots",[1,2],2],["se","Northern Sami",[1,2],2],["si","Sinhala",[1,2],2],["sk","Slovak",[1,2,5],6],["sl","Slovenian",[5,1,2,3],21],["so","Somali",[1,2],2],["son","Songhay",[1,2],2],["sq","Albanian",[1,2],2],["sr","Serbian",[1,2,5],4],["su","Sundanese",[1],3],["sv","Swedish",[1,2],2],["sw","Swahili",[1,2],2],["ta","Tamil",[1,2],2],["te","Telugu",[1,2],2],["tg","Tajik",[1,2],1],["th","Thai",[1],3],["ti","Tigrinya",[1,2],1],["tk","Turkmen",[1,2],2],["tr","Turkish",[1,2],1],["tt","Tatar",[1],3],["ug","Uyghur",[1],3],["uk","Ukrainian",[1,2,5],4],["ur","Urdu",[1,2],2],["uz","Uzbek",[1,2],1],["vi","Vietnamese",[1],3],["wa","Walloon",[1,2],1],["wo","Wolof",[1],3],["yo","Yoruba",[1,2],2],["zh","Chinese",[1],3]],Y={1:function(a){return Number(a>1)},2:function(a){return Number(1!=a)},3:function(a){return 0},4:function(a){return Number(a%10==1&&a%100!=11?0:a%10>=2&&a%10<=4&&(a%100<10||a%100>=20)?1:2)},5:function(a){return Number(0===a?0:1==a?1:2==a?2:a%100>=3&&a%100<=10?3:a%100>=11?4:5)},6:function(a){return Number(1==a?0:a>=2&&a<=4?1:2)},7:function(a){return Number(1==a?0:a%10>=2&&a%10<=4&&(a%100<10||a%100>=20)?1:2)},8:function(a){return Number(1==a?0:2==a?1:8!=a&&11!=a?2:3)},9:function(a){return Number(a>=2)},10:function(a){return Number(1==a?0:2==a?1:a<7?2:a<11?3:4)},11:function(a){return Number(1==a||11==a?0:2==a||12==a?1:a>2&&a<20?2:3)},12:function(a){return Number(a%10!=1||a%100==11)},13:function(a){return Number(0!==a)},14:function(a){return Number(1==a?0:2==a?1:3==a?2:3)},15:function(a){return Number(a%10==1&&a%100!=11?0:a%10>=2&&(a%100<10||a%100>=20)?1:2)},16:function(a){return Number(a%10==1&&a%100!=11?0:0!==a?1:2)},17:function(a){return Number(1==a||a%10==1?0:1)},18:function(a){return Number(0==a?0:1==a?1:2)},19:function(a){return Number(1==a?0:0===a||a%100>1&&a%100<11?1:a%100>10&&a%100<20?2:3)},20:function(a){return Number(1==a?0:0===a||a%100>0&&a%100<20?1:2)},21:function(a){return Number(a%100==1?1:a%100==2?2:a%100==3||a%100==4?3:0)}},Z={rules:function(){var a,b={};for(a=X.length;a--;)b[X[a][0]]={name:X[a][1],numbers:X[a][2],plurals:Y[X[a][3]]};return b}(),
// you can add your own pluralExtensions
addRule:function(a,b){Z.rules[a]=b},setCurrentLng:function(a){if(!Z.currentRule||Z.currentRule.lng!==a){var b=a.split("-");Z.currentRule={lng:a,rule:Z.rules[b[0]]}}},needsPlural:function(a,b){var c,d=a.split("-");return c=Z.currentRule&&Z.currentRule.lng===a?Z.currentRule.rule:Z.rules[d[W.getCountyIndexOfLng(a)]],!(c&&c.numbers.length<=1)&&1!==this.get(a,b)},get:function(a,b){function c(b,c){var d;if(d=Z.currentRule&&Z.currentRule.lng===a?Z.currentRule.rule:Z.rules[b]){var e;e=d.noAbs?d.plurals(c):d.plurals(Math.abs(c));var f=d.numbers[e];//console.log(count + '-' + number);
return 2===d.numbers.length&&1===d.numbers[0]&&(2===f?f=-1:1===f&&(f=1)),f}return 1===c?"1":"-1"}var d=a.split("-");return c(d[W.getCountyIndexOfLng(a)],b)}},$={},_=function(a,b){$[a]=b},aa=function(){function a(a){return Object.prototype.toString.call(a).slice(8,-1).toLowerCase()}function b(a,b){for(var c=[];b>0;c[--b]=a);return c.join("")}var c=function(){return c.cache.hasOwnProperty(arguments[0])||(c.cache[arguments[0]]=c.parse(arguments[0])),c.format.call(null,c.cache[arguments[0]],arguments)};return c.format=function(c,d){var e,f,g,h,i,j,k,l=1,m=c.length,n="",o=[];for(f=0;f<m;f++)if(n=a(c[f]),"string"===n)o.push(c[f]);else if("array"===n){// convenience purposes only
if(h=c[f],h[2])for(// keyword argument
e=d[l],g=0;g<h[2].length;g++){if(!e.hasOwnProperty(h[2][g]))throw aa('[sprintf] property "%s" does not exist',h[2][g]);e=e[h[2][g]]}else// positional argument (explicit)
e=h[1]?d[h[1]]:d[l++];if(/[^s]/.test(h[8])&&"number"!=a(e))throw aa("[sprintf] expecting number but found %s",a(e));switch(h[8]){case"b":e=e.toString(2);break;case"c":e=String.fromCharCode(e);break;case"d":e=parseInt(e,10);break;case"e":e=h[7]?e.toExponential(h[7]):e.toExponential();break;case"f":e=h[7]?parseFloat(e).toFixed(h[7]):parseFloat(e);break;case"o":e=e.toString(8);break;case"s":e=(e=String(e))&&h[7]?e.substring(0,h[7]):e;break;case"u":e=Math.abs(e);break;case"x":e=e.toString(16);break;case"X":e=e.toString(16).toUpperCase()}e=/[def]/.test(h[8])&&h[3]&&e>=0?"+"+e:e,j=h[4]?"0"==h[4]?"0":h[4].charAt(1):" ",k=h[6]-String(e).length,i=h[6]?b(j,k):"",o.push(h[5]?e+i:i+e)}return o.join("")},c.cache={},c.parse=function(a){for(var b=a,c=[],d=[],e=0;b;){if(null!==(c=/^[^\x25]+/.exec(b)))d.push(c[0]);else if(null!==(c=/^\x25{2}/.exec(b)))d.push("%");else{if(null===(c=/^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(b)))throw"[sprintf] huh?";if(c[2]){e|=1;var f=[],g=c[2],h=[];if(null===(h=/^([a-z_][a-z_\d]*)/i.exec(g)))throw"[sprintf] huh?";for(f.push(h[1]);""!==(g=g.substring(h[0].length));)if(null!==(h=/^\.([a-z_][a-z_\d]*)/i.exec(g)))f.push(h[1]);else{if(null===(h=/^\[(\d+)\]/.exec(g)))throw"[sprintf] huh?";f.push(h[1])}c[2]=f}else e|=2;if(3===e)throw"[sprintf] mixing positional and named placeholders is not (yet) supported";d.push(c)}b=b.substring(c[0].length)}return d},c}(),ba=function(a,b){return b.unshift(a),aa.apply(null,b)};
// public api interface
return _("sprintf",function(a,b,c){return c.sprintf?"[object Array]"===Object.prototype.toString.apply(c.sprintf)?ba(a,c.sprintf):"object"==typeof c.sprintf?aa(a,c.sprintf):a:a}),M.init=g,M.isInitialized=h,M.setLng=s,M.preload=i,M.addResourceBundle=j,M.hasResourceBundle=k,M.getResourceBundle=l,M.addResource=n,M.addResources=o,M.removeResourceBundle=m,M.loadNamespace=q,M.loadNamespaces=r,M.setDefaultNamespace=p,M.t=F,M.translate=F,M.exists=E,M.detectLanguage=W.detectLanguage,M.pluralExtensions=Z,M.sync=R,M.functions=W,M.lng=t,M.dir=u,M.addPostProcessor=_,M.applyReplacement=W.applyReplacement,M.options=S,M.noConflict=w,a.i18n=M,a.t=M.t,M})},{jquery:25}],25:[function(a,b,c){/*!
 * jQuery JavaScript Library v1.12.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-05-20T17:17Z
 */
!function(a,c){"object"==typeof b&&"object"==typeof b.exports?
// For CommonJS and CommonJS-like environments where a proper `window`
// is present, execute the factory and get jQuery.
// For environments that do not have a `window` with a `document`
// (such as Node.js), expose a factory as module.exports.
// This accentuates the need for the creation of a real `window`.
// e.g. var jQuery = require("jquery")(window);
// See ticket #14549 for more info.
b.exports=a.document?c(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return c(a)}:c(a)}("undefined"!=typeof window?window:this,function(a,b){function c(a){
// Support: iOS 8.2 (not reproducible in simulator)
// `in` check used to prevent JIT error (gh-2145)
// hasOwn isn't used here due to false negatives
// regarding Nodelist length in IE
var b=!!a&&"length"in a&&a.length,c=na.type(a);return"function"!==c&&!na.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}
// Implement the identical functionality for filter and not
function d(a,b,c){if(na.isFunction(b))return na.grep(a,function(a,d){/* jshint -W018 */
return!!b.call(a,d,a)!==c});if(b.nodeType)return na.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(xa.test(b))return na.filter(b,a,c);b=na.filter(b,a)}return na.grep(a,function(a){return na.inArray(a,b)>-1!==c})}function e(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}
// Convert String-formatted options into Object-formatted ones
function f(a){var b={};return na.each(a.match(Da)||[],function(a,c){b[c]=!0}),b}/**
 * Clean-up method for dom ready events
 */
function g(){da.addEventListener?(da.removeEventListener("DOMContentLoaded",h),a.removeEventListener("load",h)):(da.detachEvent("onreadystatechange",h),a.detachEvent("onload",h))}/**
 * The ready event handler and self cleanup method
 */
function h(){
// readyState === "complete" is good enough for us to call the dom ready in oldIE
(da.addEventListener||"load"===a.event.type||"complete"===da.readyState)&&(g(),na.ready())}function i(a,b,c){
// If nothing was found internally, try to fetch any
// data from the HTML5 data-* attribute
if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(Ia,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c||"false"!==c&&("null"===c?null:
// Only convert to a number if it doesn't change the string
+c+""===c?+c:Ha.test(c)?na.parseJSON(c):c)}catch(e){}
// Make sure we set the data so it isn't changed later
na.data(a,b,c)}else c=void 0}return c}
// checks a cache object for emptiness
function j(a){var b;for(b in a)
// if the public data object is empty, the private is still empty
if(("data"!==b||!na.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function k(a,b,c,d){if(Ga(a)){var e,f,g=na.expando,
// We have to handle DOM nodes and JS objects differently because IE6-7
// can't GC object references properly across the DOM-JS boundary
h=a.nodeType,
// Only DOM nodes need the global jQuery cache; JS object data is
// attached directly to the object so GC can occur automatically
i=h?na.cache:a,
// Only defining an ID for JS objects if its cache already exists allows
// the code to shortcut on the same path as a DOM node with no cache
j=h?a[g]:a[g]&&g;
// Avoid doing any more work than we need to when trying to get data on an
// object that has no data at all
if(j&&i[j]&&(d||i[j].data)||void 0!==c||"string"!=typeof b)
// Only DOM nodes need a new unique ID for each element since their data
// ends up in the global cache
// Avoid exposing jQuery metadata on plain JS objects when the object
// is serialized using JSON.stringify
// An object can be passed to jQuery.data instead of a key/value pair; this gets
// shallow copied over onto the existing cache
// jQuery data() is stored in a separate object inside the object's internal data
// cache in order to avoid key collisions between internal data and user-defined
// data.
// Check for both converted-to-camel and non-converted data property names
// If a data property was specified
// First Try to find as-is property data
// Test for null|undefined property data
// Try to find the camelCased property
return j||(j=h?a[g]=ca.pop()||na.guid++:g),i[j]||(i[j]=h?{}:{toJSON:na.noop}),"object"!=typeof b&&"function"!=typeof b||(d?i[j]=na.extend(i[j],b):i[j].data=na.extend(i[j].data,b)),f=i[j],d||(f.data||(f.data={}),f=f.data),void 0!==c&&(f[na.camelCase(b)]=c),"string"==typeof b?(e=f[b],null==e&&(e=f[na.camelCase(b)])):e=f,e}}function l(a,b,c){if(Ga(a)){var d,e,f=a.nodeType,
// See jQuery.data for more information
g=f?na.cache:a,h=f?a[na.expando]:na.expando;
// If there is already no cache entry for this object, there is no
// purpose in continuing
if(g[h]){if(b&&(d=c?g[h]:g[h].data)){
// Support array or space separated string names for data keys
na.isArray(b)?
// If "name" is an array of keys...
// When data is initially created, via ("key", "val") signature,
// keys will be converted to camelCase.
// Since there is no way to tell _how_ a key was added, remove
// both plain key and camelCase key. #12786
// This will only penalize the array argument path.
b=b.concat(na.map(b,na.camelCase)):
// try the string as a key before any manipulation
b in d?b=[b]:(
// split the camel cased version by spaces unless a key with the spaces exists
b=na.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;for(;e--;)delete d[b[e]];
// If there is no data left in the cache, we want to continue
// and let the cache object itself get destroyed
if(c?!j(d):!na.isEmptyObject(d))return}
// See jQuery.data for more information
(c||(delete g[h].data,j(g[h])))&&(
// Destroy the cache
f?na.cleanData([a],!0):la.deleteExpando||g!=g.window?/* jshint eqeqeq: true */
delete g[h]:g[h]=void 0)}}}function m(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return na.css(a,b,"")},i=h(),j=c&&c[3]||(na.cssNumber[b]?"":"px"),
// Starting value computation is required for potential unit mismatches
k=(na.cssNumber[b]||"px"!==j&&+i)&&Ka.exec(na.css(a,b));if(k&&k[3]!==j){
// Trust units reported by jQuery.css
j=j||k[3],
// Make sure we update the tween properties later on
c=c||[],
// Iteratively approximate from a nonzero starting point
k=+i||1;do
// If previous iteration zeroed out, double until we get *something*.
// Use string for doubling so we don't accidentally see scale as unchanged below
f=f||".5",
// Adjust and apply
k/=f,na.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}
// Apply relative offset (+=/-=) if specified
return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}function n(a){var b=Sa.split("|"),c=a.createDocumentFragment();if(c.createElement)for(;b.length;)c.createElement(b.pop());return c}function o(a,b){var c,d,e=0,f="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||na.nodeName(d,b)?f.push(d):na.merge(f,o(d,b));return void 0===b||b&&na.nodeName(a,b)?na.merge([a],f):f}
// Mark scripts as having already been evaluated
function p(a,b){for(var c,d=0;null!=(c=a[d]);d++)na._data(c,"globalEval",!b||na._data(b[d],"globalEval"))}function q(a){Oa.test(a.type)&&(a.defaultChecked=a.checked)}function r(a,b,c,d,e){for(var f,g,h,i,j,k,l,m=a.length,
// Ensure a safe fragment
r=n(b),s=[],t=0;t<m;t++)if(g=a[t],g||0===g)
// Add nodes directly
if("object"===na.type(g))na.merge(s,g.nodeType?[g]:g);else if(Ua.test(g)){for(i=i||r.appendChild(b.createElement("div")),
// Deserialize a standard representation
j=(Pa.exec(g)||["",""])[1].toLowerCase(),l=Ta[j]||Ta._default,i.innerHTML=l[1]+na.htmlPrefilter(g)+l[2],
// Descend through wrappers to the right content
f=l[0];f--;)i=i.lastChild;
// Remove IE's autoinserted <tbody> from table fragments
if(
// Manually add leading whitespace removed by IE
!la.leadingWhitespace&&Ra.test(g)&&s.push(b.createTextNode(Ra.exec(g)[0])),!la.tbody)for(
// String was a <table>, *may* have spurious <tbody>
g="table"!==j||Va.test(g)?
// String was a bare <thead> or <tfoot>
"<table>"!==l[1]||Va.test(g)?0:i:i.firstChild,f=g&&g.childNodes.length;f--;)na.nodeName(k=g.childNodes[f],"tbody")&&!k.childNodes.length&&g.removeChild(k);
// Fix #12392 for oldIE
for(na.merge(s,i.childNodes),
// Fix #12392 for WebKit and IE > 9
i.textContent="";i.firstChild;)i.removeChild(i.firstChild);
// Remember the top-level container for proper cleanup
i=r.lastChild}else s.push(b.createTextNode(g));for(
// Fix #11356: Clear elements from fragment
i&&r.removeChild(i),
// Reset defaultChecked for any radios and checkboxes
// about to be appended to the DOM in IE 6/7 (#8060)
la.appendChecked||na.grep(o(s,"input"),q),t=0;g=s[t++];)
// Skip elements already in the context collection (trac-4087)
if(d&&na.inArray(g,d)>-1)e&&e.push(g);else
// Capture executables
if(h=na.contains(g.ownerDocument,g),
// Append to fragment
i=o(r.appendChild(g),"script"),
// Preserve script evaluation history
h&&p(i),c)for(f=0;g=i[f++];)Qa.test(g.type||"")&&c.push(g);return i=null,r}function s(){return!0}function t(){return!1}
// Support: IE9
// See #13393 for more info
function u(){try{return da.activeElement}catch(a){}}function v(a,b,c,d,e,f){var g,h;
// Types can be a map of types/handlers
if("object"==typeof b){
// ( types-Object, selector, data )
"string"!=typeof c&&(
// ( types-Object, data )
d=d||c,c=void 0);for(h in b)v(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(
// ( types, fn )
e=c,d=c=void 0):null==e&&("string"==typeof c?(
// ( types, selector, fn )
e=d,d=void 0):(
// ( types, data, fn )
e=d,d=c,c=void 0)),e===!1)e=t;else if(!e)return a;
// Use same guid so caller can remove using origFn
return 1===f&&(g=e,e=function(a){
// Can use an empty set, since event contains the info
return na().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=na.guid++)),a.each(function(){na.event.add(this,b,e,d,c)})}
// Support: IE<8
// Manipulating tables requires a tbody
function w(a,b){return na.nodeName(a,"table")&&na.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}
// Replace/restore the type attribute of script elements for safe DOM manipulation
function x(a){return a.type=(null!==na.find.attr(a,"type"))+"/"+a.type,a}function y(a){var b=eb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function z(a,b){if(1===b.nodeType&&na.hasData(a)){var c,d,e,f=na._data(a),g=na._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;d<e;d++)na.event.add(b,c,h[c][d])}
// make the cloned public data object a copy from the original
g.data&&(g.data=na.extend({},g.data))}}function A(a,b){var c,d,e;
// We do not need to do anything for non-Elements
if(1===b.nodeType){
// IE6-8 copies events bound via attachEvent when using cloneNode.
if(c=b.nodeName.toLowerCase(),!la.noCloneEvent&&b[na.expando]){e=na._data(b);for(d in e.events)na.removeEvent(b,d,e.handle);
// Event data gets referenced instead of copied if the expando gets copied too
b.removeAttribute(na.expando)}
// IE blanks contents when cloning scripts, and tries to evaluate newly-set text
"script"===c&&b.text!==a.text?(x(b).text=a.text,y(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),
// This path appears unavoidable for IE9. When cloning an object
// element in IE9, the outerHTML strategy above is not sufficient.
// If the src has innerHTML and the destination does not,
// copy the src.innerHTML into the dest.innerHTML. #10324
la.html5Clone&&a.innerHTML&&!na.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Oa.test(a.type)?(
// IE6-8 fails to persist the checked state of a cloned checkbox
// or radio button. Worse, IE6-7 fail to give the cloned element
// a checked appearance if the defaultChecked value isn't also set
b.defaultChecked=b.checked=a.checked,
// IE6-7 get confused and end up setting the value of a cloned
// checkbox/radio button to an empty string instead of "on"
b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}}function B(a,b,c,d){
// Flatten any nested arrays
b=fa.apply([],b);var e,f,g,h,i,j,k=0,l=a.length,m=l-1,n=b[0],p=na.isFunction(n);
// We can't cloneNode fragments that contain checked, in WebKit
if(p||l>1&&"string"==typeof n&&!la.checkClone&&db.test(n))return a.each(function(e){var f=a.eq(e);p&&(b[0]=n.call(this,e,f.html())),B(f,b,c,d)});if(l&&(j=r(b,a[0].ownerDocument,!1,a,d),e=j.firstChild,1===j.childNodes.length&&(j=e),e||d)){
// Use the original fragment for the last item
// instead of the first because it can end up
// being emptied incorrectly in certain situations (#8070).
for(h=na.map(o(j,"script"),x),g=h.length;k<l;k++)f=j,k!==m&&(f=na.clone(f,!0,!0),
// Keep references to cloned scripts for later restoration
g&&
// Support: Android<4.1, PhantomJS<2
// push.apply(_, arraylike) throws on ancient WebKit
na.merge(h,o(f,"script"))),c.call(a[k],f,k);if(g)
// Evaluate executable scripts on first document insertion
for(i=h[h.length-1].ownerDocument,
// Reenable scripts
na.map(h,y),k=0;k<g;k++)f=h[k],Qa.test(f.type||"")&&!na._data(f,"globalEval")&&na.contains(i,f)&&(f.src?
// Optional AJAX dependency, but won't run scripts if not present
na._evalUrl&&na._evalUrl(f.src):na.globalEval((f.text||f.textContent||f.innerHTML||"").replace(fb,"")));
// Fix #11809: Avoid leaking memory
j=e=null}return a}function C(a,b,c){for(var d,e=b?na.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||na.cleanData(o(d)),d.parentNode&&(c&&na.contains(d.ownerDocument,d)&&p(o(d,"script")),d.parentNode.removeChild(d));return a}/**
 * Retrieve the actual display of a element
 * @param {String} name nodeName of the element
 * @param {Object} doc Document object
 */
// Called only from within defaultDisplay
function D(a,b){var c=na(b.createElement(a)).appendTo(b.body),d=na.css(c[0],"display");
// We don't have any data stored on the element,
// so use "detach" method as fast way to get rid of the element
return c.detach(),d}/**
 * Try to determine the default display value of an element
 * @param {String} nodeName
 */
function E(a){var b=da,c=jb[a];
// If the simple way fails, read from inside an iframe
// Use the already-created iframe if possible
// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
// Support: IE
// Store the correct default display
return c||(c=D(a,b),"none"!==c&&c||(ib=(ib||na("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(ib[0].contentWindow||ib[0].contentDocument).document,b.write(),b.close(),c=D(a,b),ib.detach()),jb[a]=c),c}function F(a,b){
// Define the hook, we'll check on the first run if it's really needed.
return{get:function(){
// Hook not needed (or it's not possible to use it due
// to missing dependency), remove it.
return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}
// return a css property mapped to a potentially vendor prefixed property
function G(a){
// shortcut for names that are not vendor prefixed
if(a in yb)return a;for(
// check for vendor prefixed names
var b=a.charAt(0).toUpperCase()+a.slice(1),c=xb.length;c--;)if(a=xb[c]+b,a in yb)return a}function H(a,b){for(var c,d,e,f=[],g=0,h=a.length;g<h;g++)d=a[g],d.style&&(f[g]=na._data(d,"olddisplay"),c=d.style.display,b?(
// Reset the inline display of this element to learn if it is
// being hidden by cascaded rules or not
f[g]||"none"!==c||(d.style.display=""),
// Set elements which have been overridden with display: none
// in a stylesheet to whatever the default browser style is
// for such an element
""===d.style.display&&Ma(d)&&(f[g]=na._data(d,"olddisplay",E(d.nodeName)))):(e=Ma(d),(c&&"none"!==c||!e)&&na._data(d,"olddisplay",e?c:na.css(d,"display"))));
// Set the display of most of the elements in a second loop
// to avoid the constant reflow
for(g=0;g<h;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function I(a,b,c){var d=ub.exec(b);
// Guard against undefined "subtract", e.g., when used as in cssHooks
return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function J(a,b,c,d,e){for(var f=c===(d?"border":"content")?
// If we already have the right measurement, avoid augmentation
4:
// Otherwise initialize for horizontal or vertical properties
"width"===b?1:0,g=0;f<4;f+=2)
// both box models exclude margin, so add it if we want it
"margin"===c&&(g+=na.css(a,c+La[f],!0,e)),d?(
// border-box includes padding, so remove it if we want content
"content"===c&&(g-=na.css(a,"padding"+La[f],!0,e)),
// at this point, extra isn't border nor margin, so remove border
"margin"!==c&&(g-=na.css(a,"border"+La[f]+"Width",!0,e))):(
// at this point, extra isn't content, so add padding
g+=na.css(a,"padding"+La[f],!0,e),
// at this point, extra isn't content nor padding, so add border
"padding"!==c&&(g+=na.css(a,"border"+La[f]+"Width",!0,e)));return g}function K(a,b,c){
// Start with offset property, which is equivalent to the border-box value
var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=ob(a),g=la.boxSizing&&"border-box"===na.css(a,"boxSizing",!1,f);
// some non-html elements return undefined for offsetWidth, so check for null/undefined
// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
if(e<=0||null==e){
// Computed unit is not pixels. Stop here and return.
if(
// Fall back to computed then uncomputed css if necessary
e=pb(a,b,f),(e<0||null==e)&&(e=a.style[b]),lb.test(e))return e;
// we need the check for style in case a browser which returns unreliable values
// for getComputedStyle silently falls back to the reliable elem.style
d=g&&(la.boxSizingReliable()||e===a.style[b]),
// Normalize "", auto, and prepare for extra
e=parseFloat(e)||0}
// use the active box-sizing model to add/subtract irrelevant styles
return e+J(a,b,c||(g?"border":"content"),d,f)+"px"}function L(a,b,c,d,e){return new L.prototype.init(a,b,c,d,e)}
// Animations created synchronously will run synchronously
function M(){return a.setTimeout(function(){zb=void 0}),zb=na.now()}
// Generate parameters to create a standard animation
function N(a,b){var c,d={height:a},e=0;for(
// if we include width, step value is 1 to do all cssExpand values,
// if we don't include width, step value is 2 to skip over Left and Right
b=b?1:0;e<4;e+=2-b)c=La[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function O(a,b,c){for(var d,e=(R.tweeners[b]||[]).concat(R.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))
// we're done with this property
return d}function P(a,b,c){/* jshint validthis: true */
var d,e,f,g,h,i,j,k,l=this,m={},n=a.style,o=a.nodeType&&Ma(a),p=na._data(a,"fxshow");
// handle queue: false promises
c.queue||(h=na._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){
// doing this makes sure that the complete handler will be called
// before this completes
l.always(function(){h.unqueued--,na.queue(a,"fx").length||h.empty.fire()})})),
// height/width overflow pass
1===a.nodeType&&("height"in b||"width"in b)&&(
// Make sure that nothing sneaks out
// Record all 3 overflow attributes because IE does not
// change the overflow attribute when overflowX and
// overflowY are set to the same value
c.overflow=[n.overflow,n.overflowX,n.overflowY],
// Set display property to inline-block for height/width
// animations on inline elements that are having width/height animated
j=na.css(a,"display"),
// Test default display if display is currently "none"
k="none"===j?na._data(a,"olddisplay")||E(a.nodeName):j,"inline"===k&&"none"===na.css(a,"float")&&(
// inline-level elements accept inline-block;
// block-level elements need to be inline with layout
la.inlineBlockNeedsLayout&&"inline"!==E(a.nodeName)?n.zoom=1:n.display="inline-block")),c.overflow&&(n.overflow="hidden",la.shrinkWrapBlocks()||l.always(function(){n.overflow=c.overflow[0],n.overflowX=c.overflow[1],n.overflowY=c.overflow[2]}));
// show/hide pass
for(d in b)if(e=b[d],Bb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(o?"hide":"show")){
// If there is dataShow left over from a stopped hide or show
// and we are going to proceed with show, we should pretend to be hidden
if("show"!==e||!p||void 0===p[d])continue;o=!0}m[d]=p&&p[d]||na.style(a,d)}else j=void 0;if(na.isEmptyObject(m))"inline"===("none"===j?E(a.nodeName):j)&&(n.display=j);else{p?"hidden"in p&&(o=p.hidden):p=na._data(a,"fxshow",{}),
// store state if its toggle - enables .stop().toggle() to "reverse"
f&&(p.hidden=!o),o?na(a).show():l.done(function(){na(a).hide()}),l.done(function(){var b;na._removeData(a,"fxshow");for(b in m)na.style(a,b,m[b])});for(d in m)g=O(o?p[d]:0,d,l),d in p||(p[d]=g.start,o&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Q(a,b){var c,d,e,f,g;
// camelCase, specialEasing and expand cssHook pass
for(c in a)if(d=na.camelCase(c),e=b[d],f=a[c],na.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=na.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];
// not quite $.extend, this wont overwrite keys already present.
// also - reusing 'index' from above because we have the correct "name"
for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function R(a,b,c){var d,e,f=0,g=R.prefilters.length,h=na.Deferred().always(function(){
// don't match elem in the :animated selector
delete i.elem}),i=function(){if(e)return!1;for(var b=zb||M(),c=Math.max(0,j.startTime+j.duration-b),
// Support: Android 2.3
// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:na.extend({},b),opts:na.extend(!0,{specialEasing:{},easing:na.easing._default},c),originalProperties:b,originalOptions:c,startTime:zb||M(),duration:c.duration,tweens:[],createTween:function(b,c){var d=na.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,
// if we are going to the end, we want to run all the tweens
// otherwise we skip this part
d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);
// resolve when we played the last frame
// otherwise, reject
return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Q(k,j.opts.specialEasing);f<g;f++)if(d=R.prefilters[f].call(j,a,k,j.opts))return na.isFunction(d.stop)&&(na._queueHooks(j.elem,j.opts.queue).stop=na.proxy(d.stop,d)),d;
// attach callbacks from options
return na.map(k,O,j),na.isFunction(j.opts.start)&&j.opts.start.call(a,j),na.fx.timer(na.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function S(a){return na.attr(a,"class")||""}
// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function T(a){
// dataTypeExpression is optional and defaults to "*"
return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(Da)||[];if(na.isFunction(c))
// For each dataType in the dataTypeExpression
for(;d=f[e++];)
// Prepend if requested
"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}
// Base inspection function for prefilters and transports
function U(a,b,c,d){function e(h){var i;return f[h]=!0,na.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||g||f[j]?g?!(i=j):void 0:(b.dataTypes.unshift(j),e(j),!1)}),i}var f={},g=a===$b;return e(b.dataTypes[0])||!f["*"]&&e("*")}
// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function V(a,b){var c,d,e=na.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&na.extend(!0,a,c),a}/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function W(a,b,c){
// Remove auto dataType and get content-type in the process
for(var d,e,f,g,h=a.contents,i=a.dataTypes;"*"===i[0];)i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));
// Check if we're dealing with a known content-type
if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}
// Check to see if we have a response for the expected dataType
if(i[0]in c)f=i[0];else{
// Try convertible dataTypes
for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}
// Or just use first one
f=f||d}
// If we found a dataType
// We add the dataType to the list if needed
// and return the corresponding response
if(f)return f!==i[0]&&i.unshift(f),c[f]}/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function X(a,b,c,d){var e,f,g,h,i,j={},
// Work with a copy of dataTypes in case we need to modify it for conversion
k=a.dataTypes.slice();
// Create converters map with lowercased keys
if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];
// Convert to each sequential dataType
for(f=k.shift();f;)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),
// Apply the dataFilter if provided
!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())
// There's only work to do if current dataType is non-auto
if("*"===f)f=i;else if("*"!==i&&i!==f){
// If none found, seek a pair
if(
// Seek a direct converter
g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(
// If conv2 outputs current
h=e.split(" "),h[1]===f&&(
// If prev can be converted to accepted input
g=j[i+" "+h[0]]||j["* "+h[0]])){
// Condense equivalence converters
g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}
// Apply converter (if not an equivalence)
if(g!==!0)
// Unless errors are allowed to bubble, catch and return them
if(g&&a["throws"])// jscs:ignore requireDotNotation
b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}function Y(a){return a.style&&a.style.display||na.css(a,"display")}function Z(a){
// Disconnected elements are considered hidden
if(!na.contains(a.ownerDocument||da,a))return!0;for(;a&&1===a.nodeType;){if("none"===Y(a)||"hidden"===a.type)return!0;a=a.parentNode}return!1}function $(a,b,c,d){var e;if(na.isArray(b))
// Serialize array item.
na.each(b,function(b,e){c||dc.test(a)?
// Treat each array item as a scalar.
d(a,e):
// Item is non-scalar (array or object), encode its numeric index.
$(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==na.type(b))
// Serialize scalar item.
d(a,b);else
// Serialize object item.
for(e in b)$(a+"["+e+"]",b[e],c,d)}
// Functions to create xhrs
function _(){try{return new a.XMLHttpRequest}catch(b){}}function aa(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}/**
 * Gets a window from an element
 */
function ba(a){return na.isWindow(a)?a:9===a.nodeType&&(a.defaultView||a.parentWindow)}
// Support: Firefox 18+
// Can't be in strict mode, several libs including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
//"use strict";
var ca=[],da=a.document,ea=ca.slice,fa=ca.concat,ga=ca.push,ha=ca.indexOf,ia={},ja=ia.toString,ka=ia.hasOwnProperty,la={},ma="1.12.4",
// Define a local copy of jQuery
na=function(a,b){
// The jQuery object is actually just the init constructor 'enhanced'
// Need init if jQuery is called (just allow error to be thrown if not included)
return new na.fn.init(a,b)},
// Support: Android<4.1, IE<9
// Make sure we trim BOM and NBSP
oa=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
// Matches dashed string for camelizing
pa=/^-ms-/,qa=/-([\da-z])/gi,
// Used by jQuery.camelCase as callback to replace()
ra=function(a,b){return b.toUpperCase()};na.fn=na.prototype={
// The current version of jQuery being used
jquery:ma,constructor:na,
// Start with an empty selector
selector:"",
// The default length of a jQuery object is 0
length:0,toArray:function(){return ea.call(this)},
// Get the Nth element in the matched element set OR
// Get the whole matched element set as a clean array
get:function(a){
// Return just the one element from the set
// Return all the elements in a clean array
return null!=a?a<0?this[a+this.length]:this[a]:ea.call(this)},
// Take an array of elements and push it onto the stack
// (returning the new matched element set)
pushStack:function(a){
// Build a new jQuery matched element set
var b=na.merge(this.constructor(),a);
// Return the newly-formed element set
// Add the old object onto the stack (as a reference)
return b.prevObject=this,b.context=this.context,b},
// Execute a callback for every element in the matched set.
each:function(a){return na.each(this,a)},map:function(a){return this.pushStack(na.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(ea.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},
// For internal use only.
// Behaves like an Array's method, not like a jQuery method.
push:ga,sort:ca.sort,splice:ca.splice},na.extend=na.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for(
// Handle a deep copy situation
"boolean"==typeof g&&(j=g,
// skip the boolean and the target
g=arguments[h]||{},h++),
// Handle case when target is a string or something (possible in deep copy)
"object"==typeof g||na.isFunction(g)||(g={}),
// extend jQuery itself if only one argument is passed
h===i&&(g=this,h--);h<i;h++)
// Only deal with non-null/undefined values
if(null!=(e=arguments[h]))
// Extend the base object
for(d in e)a=g[d],c=e[d],
// Prevent never-ending loop
g!==c&&(
// Recurse if we're merging plain objects or arrays
j&&c&&(na.isPlainObject(c)||(b=na.isArray(c)))?(b?(b=!1,f=a&&na.isArray(a)?a:[]):f=a&&na.isPlainObject(a)?a:{},
// Never move original objects, clone them
g[d]=na.extend(j,f,c)):void 0!==c&&(g[d]=c));
// Return the modified object
return g},na.extend({
// Unique for each copy of jQuery on the page
expando:"jQuery"+(ma+Math.random()).replace(/\D/g,""),
// Assume jQuery is ready without the ready module
isReady:!0,error:function(a){throw new Error(a)},noop:function(){},
// See test/unit/core.js for details concerning isFunction.
// Since version 1.3, DOM methods and functions like alert
// aren't supported. They return false on IE (#2968).
isFunction:function(a){return"function"===na.type(a)},isArray:Array.isArray||function(a){return"array"===na.type(a)},isWindow:function(a){/* jshint eqeqeq: false */
return null!=a&&a==a.window},isNumeric:function(a){
// parseFloat NaNs numeric-cast false positives (null|true|false|"")
// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
// subtraction forces infinities to NaN
// adding 1 corrects loss of precision from parseFloat (#15100)
var b=a&&a.toString();return!na.isArray(a)&&b-parseFloat(b)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;
// Must be an Object.
// Because of IE, we also have to check the presence of the constructor property.
// Make sure that DOM nodes and window objects don't pass through, as well
if(!a||"object"!==na.type(a)||a.nodeType||na.isWindow(a))return!1;try{
// Not own constructor property must be Object
if(a.constructor&&!ka.call(a,"constructor")&&!ka.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){
// IE8,9 Will throw exceptions on certain host objects #9897
return!1}
// Support: IE<9
// Handle iteration over inherited properties before own properties.
if(!la.ownFirst)for(b in a)return ka.call(a,b);
// Own properties are enumerated firstly, so to speed up,
// if last one is own, then all properties are own.
for(b in a);return void 0===b||ka.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?ia[ja.call(a)]||"object":typeof a},
// Workarounds based on findings by Jim Driscoll
// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
globalEval:function(b){b&&na.trim(b)&&
// We use execScript on Internet Explorer
// We use an anonymous function so that context is window
// rather than jQuery in Firefox
(a.execScript||function(b){a.eval.call(a,b)})(b)},
// Convert dashed to camelCase; used by the css and data modules
// Microsoft forgot to hump their vendor prefix (#9572)
camelCase:function(a){return a.replace(pa,"ms-").replace(qa,ra)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var d,e=0;if(c(a))for(d=a.length;e<d&&b.call(a[e],e,a[e])!==!1;e++);else for(e in a)if(b.call(a[e],e,a[e])===!1)break;return a},
// Support: Android<4.1, IE<9
trim:function(a){return null==a?"":(a+"").replace(oa,"")},
// results is for internal usage only
makeArray:function(a,b){var d=b||[];return null!=a&&(c(Object(a))?na.merge(d,"string"==typeof a?[a]:a):ga.call(d,a)),d},inArray:function(a,b,c){var d;if(b){if(ha)return ha.call(b,a,c);for(d=b.length,c=c?c<0?Math.max(0,d+c):c:0;c<d;c++)
// Skip accessing in sparse arrays
if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;)a[e++]=b[d++];
// Support: IE<9
// Workaround casting of .length to NaN on otherwise arraylike objects (e.g., NodeLists)
if(c!==c)for(;void 0!==b[d];)a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){
// Go through the array, only saving the items
// that pass the validator function
for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},
// arg is for internal usage only
map:function(a,b,d){var e,f,g=0,h=[];
// Go through the array, translating each of the items to their new values
if(c(a))for(e=a.length;g<e;g++)f=b(a[g],g,d),null!=f&&h.push(f);else for(g in a)f=b(a[g],g,d),null!=f&&h.push(f);
// Flatten any nested arrays
return fa.apply([],h)},
// A global GUID counter for objects
guid:1,
// Bind a function to a context, optionally partially applying any
// arguments.
proxy:function(a,b){var c,d,e;
// Quick check to determine if target is callable, in the spec
// this throws a TypeError, but we will just return undefined.
if("string"==typeof b&&(e=a[b],b=a,a=e),na.isFunction(a))
// Simulated bind
// Set the guid of unique handler to the same of original handler, so it can be removed
return c=ea.call(arguments,2),d=function(){return a.apply(b||this,c.concat(ea.call(arguments)))},d.guid=a.guid=a.guid||na.guid++,d},now:function(){return+new Date},
// jQuery.support is not used in Core but other projects attach their
// properties to it so it needs to exist.
support:la}),
// JSHint would error on this code due to the Symbol not being defined in ES5.
// Defining this global in .jshintrc would create a danger of using the global
// unguarded in another place, it seems safer to just disable JSHint for these
// three lines.
/* jshint ignore: start */
"function"==typeof Symbol&&(na.fn[Symbol.iterator]=ca[Symbol.iterator]),/* jshint ignore: end */
// Populate the class2type map
na.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){ia["[object "+b+"]"]=b.toLowerCase()});var sa=/*!
 * Sizzle CSS Selector Engine v2.2.1
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-10-17
 */
function(a){function b(a,b,c,d){var e,f,g,h,i,j,l,n,o=b&&b.ownerDocument,
// nodeType defaults to 9, since context defaults to document
p=b?b.nodeType:9;
// Return early from calls with invalid selector or context
if(c=c||[],"string"!=typeof a||!a||1!==p&&9!==p&&11!==p)return c;
// Try to shortcut find operations (as opposed to filters) in HTML documents
if(!d&&((b?b.ownerDocument||b:O)!==G&&F(b),b=b||G,I)){
// If the selector is sufficiently simple, try using a "get*By*" DOM method
// (excepting DocumentFragment context, where the methods don't exist)
if(11!==p&&(j=ra.exec(a)))
// ID selector
if(e=j[1]){
// Document context
if(9===p){if(!(g=b.getElementById(e)))return c;
// Support: IE, Opera, Webkit
// TODO: identify versions
// getElementById can match elements by name instead of ID
if(g.id===e)return c.push(g),c}else
// Support: IE, Opera, Webkit
// TODO: identify versions
// getElementById can match elements by name instead of ID
if(o&&(g=o.getElementById(e))&&M(b,g)&&g.id===e)return c.push(g),c}else{if(j[2])return $.apply(c,b.getElementsByTagName(a)),c;if((e=j[3])&&v.getElementsByClassName&&b.getElementsByClassName)return $.apply(c,b.getElementsByClassName(e)),c}
// Take advantage of querySelectorAll
if(v.qsa&&!T[a+" "]&&(!J||!J.test(a))){if(1!==p)o=b,n=a;else if("object"!==b.nodeName.toLowerCase()){for(
// Capture the context ID, setting it first if necessary
(h=b.getAttribute("id"))?h=h.replace(ta,"\\$&"):b.setAttribute("id",h=N),
// Prefix every selector in the list
l=z(a),f=l.length,i=ma.test(h)?"#"+h:"[id='"+h+"']";f--;)l[f]=i+" "+m(l[f]);n=l.join(","),
// Expand context for sibling selectors
o=sa.test(a)&&k(b.parentNode)||b}if(n)try{return $.apply(c,o.querySelectorAll(n)),c}catch(q){}finally{h===N&&b.removeAttribute("id")}}}
// All others
return B(a.replace(ha,"$1"),b,c,d)}/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function c(){function a(c,d){
// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
// Only keep the most recent entries
return b.push(c+" ")>w.cacheLength&&delete a[b.shift()],a[c+" "]=d}var b=[];return a}/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function d(a){return a[N]=!0,a}/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function e(a){var b=G.createElement("div");try{return!!a(b)}catch(c){return!1}finally{
// Remove from its parent by default
b.parentNode&&b.parentNode.removeChild(b),
// release memory in IE
b=null}}/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function f(a,b){for(var c=a.split("|"),d=c.length;d--;)w.attrHandle[c[d]]=b}/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function g(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||V)-(~a.sourceIndex||V);
// Use IE sourceIndex if available on both nodes
if(d)return d;
// Check if b follows a
if(c)for(;c=c.nextSibling;)if(c===b)return-1;return a?1:-1}/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function h(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function i(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function j(a){return d(function(b){return b=+b,d(function(c,d){
// Match elements found at the specified indexes
for(var e,f=a([],c.length,b),g=f.length;g--;)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function k(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}
// Easy API for creating new setFilters
function l(){}function m(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function n(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=Q++;
// Check against closest ancestor/preceding element
// Check against all ancestor/preceding elements
return b.first?function(b,c,f){for(;b=b[d];)if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[P,f];
// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
if(g){for(;b=b[d];)if((1===b.nodeType||e)&&a(b,c,g))return!0}else for(;b=b[d];)if(1===b.nodeType||e){if(j=b[N]||(b[N]={}),
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===P&&h[1]===f)
// Assign to newCache so results back-propagate to previous elements
return k[2]=h[2];
// A match means we're done; a fail means we have to keep checking
if(
// Reuse newcache so results back-propagate to previous elements
i[d]=k,k[2]=a(b,c,g))return!0}}}function o(a){return a.length>1?function(b,c,d){for(var e=a.length;e--;)if(!a[e](b,c,d))return!1;return!0}:a[0]}function p(a,c,d){for(var e=0,f=c.length;e<f;e++)b(a,c[e],d);return d}function q(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function r(a,b,c,e,f,g){return e&&!e[N]&&(e=r(e)),f&&!f[N]&&(f=r(f,g)),d(function(d,g,h,i){var j,k,l,m=[],n=[],o=g.length,
// Get initial elements from seed or context
r=d||p(b||"*",h.nodeType?[h]:h,[]),
// Prefilter to get matcher input, preserving a map for seed-results synchronization
s=!a||!d&&b?r:q(r,m,a,h,i),t=c?
// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
f||(d?a:o||e)?
// ...intermediate processing is necessary
[]:
// ...otherwise use results directly
g:s;
// Apply postFilter
if(
// Find primary matches
c&&c(s,t,h,i),e)for(j=q(t,n),e(j,[],h,i),
// Un-match failing elements by moving them back to matcherIn
k=j.length;k--;)(l=j[k])&&(t[n[k]]=!(s[n[k]]=l));if(d){if(f||a){if(f){for(
// Get the final matcherOut by condensing this intermediate into postFinder contexts
j=[],k=t.length;k--;)(l=t[k])&&
// Restore matcherIn since elem is not yet a final match
j.push(s[k]=l);f(null,t=[],j,i)}for(
// Move matched elements from seed to results to keep them synchronized
k=t.length;k--;)(l=t[k])&&(j=f?aa(d,l):m[k])>-1&&(d[j]=!(g[j]=l))}}else t=q(t===g?t.splice(o,t.length):t),f?f(null,g,t,i):$.apply(g,t)})}function s(a){for(var b,c,d,e=a.length,f=w.relative[a[0].type],g=f||w.relative[" "],h=f?1:0,
// The foundational matcher ensures that elements are reachable from top-level context(s)
i=n(function(a){return a===b},g,!0),j=n(function(a){return aa(b,a)>-1},g,!0),k=[function(a,c,d){var e=!f&&(d||c!==C)||((b=c).nodeType?i(a,c,d):j(a,c,d));
// Avoid hanging onto element (issue #299)
return b=null,e}];h<e;h++)if(c=w.relative[a[h].type])k=[n(o(k),c)];else{
// Return special upon seeing a positional matcher
if(c=w.filter[a[h].type].apply(null,a[h].matches),c[N]){for(
// Find the next relative operator (if any) for proper handling
d=++h;d<e&&!w.relative[a[d].type];d++);
// If the preceding token was a descendant combinator, insert an implicit any-element `*`
return r(h>1&&o(k),h>1&&m(a.slice(0,h-1).concat({value:" "===a[h-2].type?"*":""})).replace(ha,"$1"),c,h<d&&s(a.slice(h,d)),d<e&&s(a=a.slice(d)),d<e&&m(a))}k.push(c)}return o(k)}function t(a,c){var e=c.length>0,f=a.length>0,g=function(d,g,h,i,j){var k,l,m,n=0,o="0",p=d&&[],r=[],s=C,
// We must always have either seed elements or outermost context
t=d||f&&w.find.TAG("*",j),
// Use integer dirruns iff this is the outermost matcher
u=P+=null==s?1:Math.random()||.1,v=t.length;
// Add elements passing elementMatchers directly to results
// Support: IE<9, Safari
// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
for(j&&(C=g===G||g||j);o!==v&&null!=(k=t[o]);o++){if(f&&k){for(l=0,g||k.ownerDocument===G||(F(k),h=!I);m=a[l++];)if(m(k,g||G,h)){i.push(k);break}j&&(P=u)}
// Track unmatched elements for set filters
e&&(
// They will have gone through all possible matchers
(k=!m&&k)&&n--,
// Lengthen the array for every element, matched or not
d&&p.push(k))}
// Apply set filters to unmatched elements
// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
// no element matchers and no seed.
// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
// case, which will result in a "00" `matchedCount` that differs from `i` but is also
// numerically zero.
if(
// `i` is now the count of elements visited above, and adding it to `matchedCount`
// makes the latter nonnegative.
n+=o,e&&o!==n){for(l=0;m=c[l++];)m(p,r,g,h);if(d){
// Reintegrate element matches to eliminate the need for sorting
if(n>0)for(;o--;)p[o]||r[o]||(r[o]=Y.call(i));
// Discard index placeholder values to get only actual matches
r=q(r)}
// Add matches to results
$.apply(i,r),
// Seedless set matches succeeding multiple successful matchers stipulate sorting
j&&!d&&r.length>0&&n+c.length>1&&b.uniqueSort(i)}
// Override manipulation of globals by nested matchers
return j&&(P=u,C=s),p};return e?d(g):g}var u,v,w,x,y,z,A,B,C,D,E,
// Local document vars
F,G,H,I,J,K,L,M,
// Instance-specific data
N="sizzle"+1*new Date,O=a.document,P=0,Q=0,R=c(),S=c(),T=c(),U=function(a,b){return a===b&&(E=!0),0},
// General-purpose constants
V=1<<31,
// Instance methods
W={}.hasOwnProperty,X=[],Y=X.pop,Z=X.push,$=X.push,_=X.slice,
// Use a stripped-down indexOf as it's faster than native
// http://jsperf.com/thor-indexof-vs-for/5
aa=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},ba="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
// Regular expressions
// http://www.w3.org/TR/css3-selectors/#whitespace
ca="[\\x20\\t\\r\\n\\f]",
// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
da="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
ea="\\["+ca+"*("+da+")(?:"+ca+
// Operator (capture 2)
"*([*^$|!~]?=)"+ca+
// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+da+"))|)"+ca+"*\\]",fa=":("+da+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+ea+")*)|.*)\\)|)",
// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
ga=new RegExp(ca+"+","g"),ha=new RegExp("^"+ca+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ca+"+$","g"),ia=new RegExp("^"+ca+"*,"+ca+"*"),ja=new RegExp("^"+ca+"*([>+~]|"+ca+")"+ca+"*"),ka=new RegExp("="+ca+"*([^\\]'\"]*?)"+ca+"*\\]","g"),la=new RegExp(fa),ma=new RegExp("^"+da+"$"),na={ID:new RegExp("^#("+da+")"),CLASS:new RegExp("^\\.("+da+")"),TAG:new RegExp("^("+da+"|[*])"),ATTR:new RegExp("^"+ea),PSEUDO:new RegExp("^"+fa),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ca+"*(even|odd|(([+-]|)(\\d*)n|)"+ca+"*(?:([+-]|)"+ca+"*(\\d+)|))"+ca+"*\\)|)","i"),bool:new RegExp("^(?:"+ba+")$","i"),
// For use in libraries implementing .is()
// We use this for POS matching in `select`
needsContext:new RegExp("^"+ca+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ca+"*((?:-\\d)?\\d*)"+ca+"*\\)|)(?=[^-]|$)","i")},oa=/^(?:input|select|textarea|button)$/i,pa=/^h\d$/i,qa=/^[^{]+\{\s*\[native \w/,
// Easily-parseable/retrievable ID or TAG or CLASS selectors
ra=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,sa=/[+~]/,ta=/'|\\/g,
// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
ua=new RegExp("\\\\([\\da-f]{1,6}"+ca+"?|("+ca+")|.)","ig"),va=function(a,b,c){var d="0x"+b-65536;
// NaN means non-codepoint
// Support: Firefox<24
// Workaround erroneous numeric interpretation of +"0x"
// BMP codepoint
// Supplemental Plane codepoint (surrogate pair)
return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},
// Used for iframes
// See setDocument()
// Removing the function wrapper causes a "Permission Denied"
// error in IE
wa=function(){F()};
// Optimize for push.apply( _, NodeList )
try{$.apply(X=_.call(O.childNodes),O.childNodes),
// Support: Android<4.0
// Detect silently failing push.apply
X[O.childNodes.length].nodeType}catch(xa){$={apply:X.length?
// Leverage slice if possible
function(a,b){Z.apply(a,_.call(b))}:
// Support: IE<9
// Otherwise append directly
function(a,b){
// Can't trust NodeList.length
for(var c=a.length,d=0;a[c++]=b[d++];);a.length=c-1}}}
// Expose support vars for convenience
v=b.support={},/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
y=b.isXML=function(a){
// documentElement is verified for cases where it doesn't yet exist
// (such as loading iframes in IE - #4833)
var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
F=b.setDocument=function(a){var b,c,d=a?a.ownerDocument||a:O;
// Return early if doc is invalid or already selected
// Return early if doc is invalid or already selected
// Update global variables
// Support: IE 9-11, Edge
// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
// Support: IE 11
/* Attributes
	---------------------------------------------------------------------- */
// Support: IE<8
// Verify that getAttribute really returns attributes and not properties
// (excepting IE8 booleans)
/* getElement(s)By*
	---------------------------------------------------------------------- */
// Check if getElementsByTagName("*") returns only elements
// Support: IE<9
// Support: IE<10
// Check if getElementById returns elements by name
// The broken getElementById methods don't pick up programatically-set names,
// so use a roundabout getElementsByName test
// ID find and filter
// Support: IE6/7
// getElementById is not reliable as a find shortcut
// Tag
// Class
/* QSA/matchesSelector
	---------------------------------------------------------------------- */
// QSA and matchesSelector support
// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
// qSa(:focus) reports false when true (Chrome 21)
// We allow this because of a bug in IE8/9 that throws an error
// whenever `document.activeElement` is accessed on an iframe
// So, we allow :focus to pass through QSA all the time to avoid the IE error
// See http://bugs.jquery.com/ticket/13378
// Build QSA regex
// Regex strategy adopted from Diego Perini
/* Contains
	---------------------------------------------------------------------- */
// Element contains another
// Purposefully self-exclusive
// As in, an element does not contain itself
/* Sorting
	---------------------------------------------------------------------- */
// Document order sorting
return d!==G&&9===d.nodeType&&d.documentElement?(G=d,H=G.documentElement,I=!y(G),(c=G.defaultView)&&c.top!==c&&(c.addEventListener?c.addEventListener("unload",wa,!1):c.attachEvent&&c.attachEvent("onunload",wa)),v.attributes=e(function(a){return a.className="i",!a.getAttribute("className")}),v.getElementsByTagName=e(function(a){return a.appendChild(G.createComment("")),!a.getElementsByTagName("*").length}),v.getElementsByClassName=qa.test(G.getElementsByClassName),v.getById=e(function(a){return H.appendChild(a).id=N,!G.getElementsByName||!G.getElementsByName(N).length}),v.getById?(w.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&I){var c=b.getElementById(a);return c?[c]:[]}},w.filter.ID=function(a){var b=a.replace(ua,va);return function(a){return a.getAttribute("id")===b}}):(delete w.find.ID,w.filter.ID=function(a){var b=a.replace(ua,va);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),w.find.TAG=v.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):v.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,
// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
f=b.getElementsByTagName(a);
// Filter out possible comments
if("*"===a){for(;c=f[e++];)1===c.nodeType&&d.push(c);return d}return f},w.find.CLASS=v.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&I)return b.getElementsByClassName(a)},K=[],J=[],(v.qsa=qa.test(G.querySelectorAll))&&(e(function(a){
// Select is set to empty string on purpose
// This is to test IE's treatment of not explicitly
// setting a boolean content attribute,
// since its presence should be enough
// http://bugs.jquery.com/ticket/12359
H.appendChild(a).innerHTML="<a id='"+N+"'></a><select id='"+N+"-\r\\' msallowcapture=''><option selected=''></option></select>",
// Support: IE8, Opera 11-12.16
// Nothing should be selected when empty strings follow ^= or $= or *=
// The test attribute must be unknown in Opera but "safe" for WinRT
// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
a.querySelectorAll("[msallowcapture^='']").length&&J.push("[*^$]="+ca+"*(?:''|\"\")"),
// Support: IE8
// Boolean attributes and "value" are not treated correctly
a.querySelectorAll("[selected]").length||J.push("\\["+ca+"*(?:value|"+ba+")"),
// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
a.querySelectorAll("[id~="+N+"-]").length||J.push("~="),
// Webkit/Opera - :checked should return selected option elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
// IE8 throws error here and will not see later tests
a.querySelectorAll(":checked").length||J.push(":checked"),
// Support: Safari 8+, iOS 8+
// https://bugs.webkit.org/show_bug.cgi?id=136851
// In-page `selector#id sibing-combinator selector` fails
a.querySelectorAll("a#"+N+"+*").length||J.push(".#.+[+~]")}),e(function(a){
// Support: Windows 8 Native Apps
// The type and name attributes are restricted during .innerHTML assignment
var b=G.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),
// Support: IE8
// Enforce case-sensitivity of name attribute
a.querySelectorAll("[name=d]").length&&J.push("name"+ca+"*[*^$|!~]?="),
// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
// IE8 throws error here and will not see later tests
a.querySelectorAll(":enabled").length||J.push(":enabled",":disabled"),
// Opera 10-11 does not throw on post-comma invalid pseudos
a.querySelectorAll("*,:x"),J.push(",.*:")})),(v.matchesSelector=qa.test(L=H.matches||H.webkitMatchesSelector||H.mozMatchesSelector||H.oMatchesSelector||H.msMatchesSelector))&&e(function(a){
// Check to see if it's possible to do matchesSelector
// on a disconnected node (IE 9)
v.disconnectedMatch=L.call(a,"div"),
// This should fail with an exception
// Gecko does not error, returns false instead
L.call(a,"[s!='']:x"),K.push("!=",fa)}),J=J.length&&new RegExp(J.join("|")),K=K.length&&new RegExp(K.join("|")),b=qa.test(H.compareDocumentPosition),M=b||qa.test(H.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)for(;b=b.parentNode;)if(b===a)return!0;return!1},U=b?function(a,b){
// Flag for duplicate removal
if(a===b)return E=!0,0;
// Sort on method existence if only one input has compareDocumentPosition
var c=!a.compareDocumentPosition-!b.compareDocumentPosition;
// Calculate position if both inputs belong to the same document
// Otherwise we know they are disconnected
// Disconnected nodes
// Choose the first element that is related to our preferred document
return c?c:(c=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&c||!v.sortDetached&&b.compareDocumentPosition(a)===c?a===G||a.ownerDocument===O&&M(O,a)?-1:b===G||b.ownerDocument===O&&M(O,b)?1:D?aa(D,a)-aa(D,b):0:4&c?-1:1)}:function(a,b){
// Exit early if the nodes are identical
if(a===b)return E=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];
// Parentless nodes are either documents or disconnected
if(!e||!f)return a===G?-1:b===G?1:e?-1:f?1:D?aa(D,a)-aa(D,b):0;if(e===f)return g(a,b);for(
// Otherwise we need full lists of their ancestors for comparison
c=a;c=c.parentNode;)h.unshift(c);for(c=b;c=c.parentNode;)i.unshift(c);
// Walk down the tree looking for a discrepancy
for(;h[d]===i[d];)d++;
// Do a sibling check if the nodes have a common ancestor
// Otherwise nodes in our document sort first
return d?g(h[d],i[d]):h[d]===O?-1:i[d]===O?1:0},G):G},b.matches=function(a,c){return b(a,null,null,c)},b.matchesSelector=function(a,c){if(
// Set document vars if needed
(a.ownerDocument||a)!==G&&F(a),
// Make sure that attribute selectors are quoted
c=c.replace(ka,"='$1']"),v.matchesSelector&&I&&!T[c+" "]&&(!K||!K.test(c))&&(!J||!J.test(c)))try{var d=L.call(a,c);
// IE 9's matchesSelector returns false on disconnected nodes
if(d||v.disconnectedMatch||
// As well, disconnected nodes are said to be in a document
// fragment in IE 9
a.document&&11!==a.document.nodeType)return d}catch(e){}return b(c,G,null,[a]).length>0},b.contains=function(a,b){
// Set document vars if needed
return(a.ownerDocument||a)!==G&&F(a),M(a,b)},b.attr=function(a,b){
// Set document vars if needed
(a.ownerDocument||a)!==G&&F(a);var c=w.attrHandle[b.toLowerCase()],
// Don't get fooled by Object.prototype properties (jQuery #13807)
d=c&&W.call(w.attrHandle,b.toLowerCase())?c(a,b,!I):void 0;return void 0!==d?d:v.attributes||!I?a.getAttribute(b):(d=a.getAttributeNode(b))&&d.specified?d.value:null},b.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
b.uniqueSort=function(a){var b,c=[],d=0,e=0;if(
// Unless we *know* we can detect duplicates, assume their presence
E=!v.detectDuplicates,D=!v.sortStable&&a.slice(0),a.sort(U),E){for(;b=a[e++];)b===a[e]&&(d=c.push(e));for(;d--;)a.splice(c[d],1)}
// Clear input after sorting to release objects
// See https://github.com/jquery/sizzle/pull/225
return D=null,a},/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
x=b.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(1===e||9===e||11===e){
// Use textContent for elements
// innerText usage removed for consistency of new lines (jQuery #11153)
if("string"==typeof a.textContent)return a.textContent;
// Traverse its children
for(a=a.firstChild;a;a=a.nextSibling)c+=x(a)}else if(3===e||4===e)return a.nodeValue}else
// If no nodeType, this is expected to be an array
for(;b=a[d++];)
// Do not traverse comment nodes
c+=x(b);
// Do not include comment or processing instruction nodes
return c},w=b.selectors={
// Can be adjusted by the user
cacheLength:50,createPseudo:d,match:na,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){
// Move the given value to match[3] whether quoted or unquoted
return a[1]=a[1].replace(ua,va),a[3]=(a[3]||a[4]||a[5]||"").replace(ua,va),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
// nth-* requires argument
// numeric x and y parameters for Expr.filter.CHILD
// remember that false/true cast respectively to 0/1
return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||b.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&b.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];
// Accept quoted arguments as-is
// Get excess from tokenize (recursively)
// advance to the next closing parenthesis
// excess is a negative index
return na.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&la.test(c)&&(b=z(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ua,va).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=R[a+" "];return b||(b=new RegExp("(^|"+ca+")"+a+"("+ca+"|$)"))&&R(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,c,d){return function(e){var f=b.attr(e,a);return null==f?"!="===c:!c||(f+="","="===c?f===d:"!="===c?f!==d:"^="===c?d&&0===f.indexOf(d):"*="===c?d&&f.indexOf(d)>-1:"$="===c?d&&f.slice(-d.length)===d:"~="===c?(" "+f.replace(ga," ")+" ").indexOf(d)>-1:"|="===c&&(f===d||f.slice(0,d.length+1)===d+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;
// Shortcut for :nth-*(n)
return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){
// :(first|last|only)-(child|of-type)
if(f){for(;p;){for(m=b;m=m[p];)if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;
// Reverse direction for :only-* (if we haven't yet done so)
o=p="only"===a&&!o&&"nextSibling"}return!0}
// non-xml :nth-child(...) stores cache data on `parent`
if(o=[g?q.firstChild:q.lastChild],g&&s){for(
// Seek `elem` from a previously-cached index
// ...in a gzip-friendly way
m=q,l=m[N]||(m[N]={}),
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===P&&j[1],t=n&&j[2],m=n&&q.childNodes[n];m=++n&&m&&m[p]||(
// Fallback to seeking `elem` from the start
t=n=0)||o.pop();)
// When found, cache indexes on `parent` and break
if(1===m.nodeType&&++t&&m===b){k[a]=[P,n,t];break}}else
// xml :nth-child(...)
// or :nth-last-child(...) or :nth(-last)?-of-type(...)
if(
// Use previously-cached element index if available
s&&(
// ...in a gzip-friendly way
m=b,l=m[N]||(m[N]={}),
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===P&&j[1],t=n),t===!1)
// Use the same loop as above to seek `elem` from the start
for(;(m=++n&&m&&m[p]||(t=n=0)||o.pop())&&((h?m.nodeName.toLowerCase()!==r:1!==m.nodeType)||!++t||(
// Cache the index of each encountered element
s&&(l=m[N]||(m[N]={}),
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[P,t]),m!==b)););
// Incorporate the offset, then check against cycle size
return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,c){
// pseudo-class names are case-insensitive
// http://www.w3.org/TR/selectors/#pseudo-classes
// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
// Remember that setFilters inherits from pseudos
var e,f=w.pseudos[a]||w.setFilters[a.toLowerCase()]||b.error("unsupported pseudo: "+a);
// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as Sizzle does
// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as Sizzle does
// But maintain support for old signatures
return f[N]?f(c):f.length>1?(e=[a,a,"",c],w.setFilters.hasOwnProperty(a.toLowerCase())?d(function(a,b){for(var d,e=f(a,c),g=e.length;g--;)d=aa(a,e[g]),a[d]=!(b[d]=e[g])}):function(a){return f(a,0,e)}):f}},pseudos:{
// Potentially complex pseudos
not:d(function(a){
// Trim the selector passed to compile
// to avoid treating leading and trailing
// spaces as combinators
var b=[],c=[],e=A(a.replace(ha,"$1"));return e[N]?d(function(a,b,c,d){
// Match elements unmatched by `matcher`
for(var f,g=e(a,null,d,[]),h=a.length;h--;)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,d,f){
// Don't keep the element (issue #299)
return b[0]=a,e(b,null,f,c),b[0]=null,!c.pop()}}),has:d(function(a){return function(c){return b(a,c).length>0}}),contains:d(function(a){return a=a.replace(ua,va),function(b){return(b.textContent||b.innerText||x(b)).indexOf(a)>-1}}),
// "Whether an element is represented by a :lang() selector
// is based solely on the element's language value
// being equal to the identifier C,
// or beginning with the identifier C immediately followed by "-".
// The matching of C against the element's language value is performed case-insensitively.
// The identifier C does not have to be a valid language name."
// http://www.w3.org/TR/selectors/#lang-pseudo
lang:d(function(a){
// lang value must be a valid identifier
return ma.test(a||"")||b.error("unsupported lang: "+a),a=a.replace(ua,va).toLowerCase(),function(b){var c;do if(c=I?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),
// Miscellaneous
target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===H},focus:function(a){return a===G.activeElement&&(!G.hasFocus||G.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},
// Boolean properties
enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){
// In CSS3, :checked should return both checked and selected elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){
// Accessing this property makes selected-by-default
// options in Safari work properly
return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},
// Contents
empty:function(a){
// http://www.w3.org/TR/selectors/#empty-pseudo
// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
//   but not by others (comment: 8; processing instruction: 7; etc.)
// nodeType < 6 works because attributes (2) do not appear as children
for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!w.pseudos.empty(a)},
// Element/input types
header:function(a){return pa.test(a.nodeName)},input:function(a){return oa.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;
// Support: IE<8
// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},
// Position-in-collection
first:j(function(){return[0]}),last:j(function(a,b){return[b-1]}),eq:j(function(a,b,c){return[c<0?c+b:c]}),even:j(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:j(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:j(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:j(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},w.pseudos.nth=w.pseudos.eq;
// Add button/input type pseudos
for(u in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})w.pseudos[u]=h(u);for(u in{submit:!0,reset:!0})w.pseudos[u]=i(u);/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
// One-time assignments
// Sort stability
// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
// Initialize against the default document
// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
// Support: IE<9
// Use defaultValue in place of getAttribute("value")
// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
return l.prototype=w.filters=w.pseudos,w.setFilters=new l,z=b.tokenize=function(a,c){var d,e,f,g,h,i,j,k=S[a+" "];if(k)return c?0:k.slice(0);for(h=a,i=[],j=w.preFilter;h;){
// Comma and first run
d&&!(e=ia.exec(h))||(e&&(
// Don't consume trailing commas as valid
h=h.slice(e[0].length)||h),i.push(f=[])),d=!1,
// Combinators
(e=ja.exec(h))&&(d=e.shift(),f.push({value:d,
// Cast descendant combinators to space
type:e[0].replace(ha," ")}),h=h.slice(d.length));
// Filters
for(g in w.filter)!(e=na[g].exec(h))||j[g]&&!(e=j[g](e))||(d=e.shift(),f.push({value:d,type:g,matches:e}),h=h.slice(d.length));if(!d)break}
// Return the length of the invalid excess
// if we're just parsing
// Otherwise, throw an error or return tokens
// Cache the tokens
return c?h.length:h?b.error(a):S(a,i).slice(0)},A=b.compile=function(a,b){var c,d=[],e=[],f=T[a+" "];if(!f){for(
// Generate a function of recursive functions that can be used to check each element
b||(b=z(a)),c=b.length;c--;)f=s(b[c]),f[N]?d.push(f):e.push(f);
// Cache the compiled function
f=T(a,t(e,d)),
// Save selector and tokenization
f.selector=a}return f},B=b.select=function(a,b,c,d){var e,f,g,h,i,j="function"==typeof a&&a,l=!d&&z(a=j.selector||a);
// Try to minimize operations if there is only one selector in the list and no seed
// (the latter of which guarantees us context)
if(c=c||[],1===l.length){if(
// Reduce context if the leading compound selector is an ID
f=l[0]=l[0].slice(0),f.length>2&&"ID"===(g=f[0]).type&&v.getById&&9===b.nodeType&&I&&w.relative[f[1].type]){if(b=(w.find.ID(g.matches[0].replace(ua,va),b)||[])[0],!b)return c;j&&(b=b.parentNode),a=a.slice(f.shift().value.length)}for(
// Fetch a seed set for right-to-left matching
e=na.needsContext.test(a)?0:f.length;e--&&(g=f[e],!w.relative[h=g.type]);)if((i=w.find[h])&&(d=i(g.matches[0].replace(ua,va),sa.test(f[0].type)&&k(b.parentNode)||b))){if(
// If seed is empty or no tokens remain, we can return early
f.splice(e,1),a=d.length&&m(f),!a)return $.apply(c,d),c;break}}
// Compile and execute a filtering function if one is not provided
// Provide `match` to avoid retokenization if we modified the selector above
return(j||A(a,l))(d,b,!I,c,!b||sa.test(a)&&k(b.parentNode)||b),c},v.sortStable=N.split("").sort(U).join("")===N,v.detectDuplicates=!!E,F(),v.sortDetached=e(function(a){
// Should return 1, but returns 4 (following)
return 1&a.compareDocumentPosition(G.createElement("div"))}),e(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||f("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),v.attributes&&e(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||f("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),e(function(a){return null==a.getAttribute("disabled")})||f(ba,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),b}(a);na.find=sa,na.expr=sa.selectors,na.expr[":"]=na.expr.pseudos,na.uniqueSort=na.unique=sa.uniqueSort,na.text=sa.getText,na.isXMLDoc=sa.isXML,na.contains=sa.contains;var ta=function(a,b,c){for(var d=[],e=void 0!==c;(a=a[b])&&9!==a.nodeType;)if(1===a.nodeType){if(e&&na(a).is(c))break;d.push(a)}return d},ua=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},va=na.expr.match.needsContext,wa=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,xa=/^.[^:#\[\.,]*$/;na.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?na.find.matchesSelector(d,a)?[d]:[]:na.find.matches(a,na.grep(b,function(a){return 1===a.nodeType}))},na.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(na(a).filter(function(){for(b=0;b<e;b++)if(na.contains(d[b],this))return!0}));for(b=0;b<e;b++)na.find(a,d[b],c);
// Needed because $( selector, context ) becomes $( context ).find( selector )
return c=this.pushStack(e>1?na.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(d(this,a||[],!1))},not:function(a){return this.pushStack(d(this,a||[],!0))},is:function(a){
// If this is a positional/relative selector, check membership in the returned set
// so $("p:first").is("p:last") won't return true for a doc with two "p".
return!!d(this,"string"==typeof a&&va.test(a)?na(a):a||[],!1).length}});
// Initialize a jQuery object
// A central reference to the root jQuery(document)
var ya,
// A simple way to check for HTML strings
// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
// Strict HTML recognition (#11290: must start with <)
za=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,Aa=na.fn.init=function(a,b,c){var d,e;
// HANDLE: $(""), $(null), $(undefined), $(false)
if(!a)return this;
// Handle HTML strings
if(
// init accepts an alternate rootjQuery
// so migrate can support jQuery.sub (gh-2101)
c=c||ya,"string"==typeof a){
// Match html or make sure no context is specified for #id
if(
// Assume that strings that start and end with <> are HTML and skip the regex check
d="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:za.exec(a),!d||!d[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);
// HANDLE: $(html) -> $(array)
if(d[1]){
// HANDLE: $(html, props)
if(b=b instanceof na?b[0]:b,
// scripts is true for back-compat
// Intentionally let the error be thrown if parseHTML is not present
na.merge(this,na.parseHTML(d[1],b&&b.nodeType?b.ownerDocument||b:da,!0)),wa.test(d[1])&&na.isPlainObject(b))for(d in b)
// Properties of context are called as methods if possible
na.isFunction(this[d])?this[d](b[d]):this.attr(d,b[d]);return this}
// Check parentNode to catch when Blackberry 4.6 returns
// nodes that are no longer in the document #6963
if(e=da.getElementById(d[2]),e&&e.parentNode){
// Handle the case where IE and Opera return items
// by name instead of ID
if(e.id!==d[2])return ya.find(a);
// Otherwise, we inject the element directly into the jQuery object
this.length=1,this[0]=e}return this.context=da,this.selector=a,this}
// Execute immediately if ready is not present
return a.nodeType?(this.context=this[0]=a,this.length=1,this):na.isFunction(a)?"undefined"!=typeof c.ready?c.ready(a):a(na):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),na.makeArray(a,this))};
// Give the init function the jQuery prototype for later instantiation
Aa.prototype=na.fn,
// Initialize central reference
ya=na(da);var Ba=/^(?:parents|prev(?:Until|All))/,
// methods guaranteed to produce a unique set when starting from a unique set
Ca={children:!0,contents:!0,next:!0,prev:!0};na.fn.extend({has:function(a){var b,c=na(a,this),d=c.length;return this.filter(function(){for(b=0;b<d;b++)if(na.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=va.test(a)||"string"!=typeof a?na(a,b||this.context):0;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)
// Always skip document fragments
if(c.nodeType<11&&(g?g.index(c)>-1:
// Don't pass non-elements to Sizzle
1===c.nodeType&&na.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?na.uniqueSort(f):f)},
// Determine the position of an element within
// the matched set of elements
index:function(a){
// No argument, return index in parent
// No argument, return index in parent
// index in selector
// If it receives a jQuery object, the first element is used
return a?"string"==typeof a?na.inArray(this[0],na(a)):na.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(na.uniqueSort(na.merge(this.get(),na(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}}),na.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return ta(a,"parentNode")},parentsUntil:function(a,b,c){return ta(a,"parentNode",c)},next:function(a){return e(a,"nextSibling")},prev:function(a){return e(a,"previousSibling")},nextAll:function(a){return ta(a,"nextSibling")},prevAll:function(a){return ta(a,"previousSibling")},nextUntil:function(a,b,c){return ta(a,"nextSibling",c)},prevUntil:function(a,b,c){return ta(a,"previousSibling",c)},siblings:function(a){return ua((a.parentNode||{}).firstChild,a)},children:function(a){return ua(a.firstChild)},contents:function(a){return na.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:na.merge([],a.childNodes)}},function(a,b){na.fn[a]=function(c,d){var e=na.map(this,b,c);
// Remove duplicates
// Reverse order for parents* and prev-derivatives
return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=na.filter(d,e)),this.length>1&&(Ca[a]||(e=na.uniqueSort(e)),Ba.test(a)&&(e=e.reverse())),this.pushStack(e)}});var Da=/\S+/g;/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
na.Callbacks=function(a){
// Convert options from String-formatted to Object-formatted if needed
// (we check in cache first)
a="string"==typeof a?f(a):na.extend({},a);var// Flag to know if list is currently firing
b,
// Last fire value for non-forgettable lists
c,
// Flag to know if list was already fired
d,
// Flag to prevent firing
e,
// Actual callback list
g=[],
// Queue of execution data for repeatable lists
h=[],
// Index of currently firing callback (modified by add/remove as needed)
i=-1,
// Fire callbacks
j=function(){for(
// Enforce single-firing
e=a.once,
// Execute callbacks for all pending executions,
// respecting firingIndex overrides and runtime changes
d=b=!0;h.length;i=-1)for(c=h.shift();++i<g.length;)
// Run callback and check for early termination
g[i].apply(c[0],c[1])===!1&&a.stopOnFalse&&(
// Jump to end and forget the data so .add doesn't re-fire
i=g.length,c=!1);
// Forget the data if we're done with it
a.memory||(c=!1),b=!1,
// Clean up if we're done firing for good
e&&(
// Keep an empty list if we have data for future add calls
g=c?[]:"")},
// Actual Callbacks object
k={
// Add a callback or a collection of callbacks to the list
add:function(){
// If we have memory from a past run, we should fire after adding
return g&&(c&&!b&&(i=g.length-1,h.push(c)),function d(b){na.each(b,function(b,c){na.isFunction(c)?a.unique&&k.has(c)||g.push(c):c&&c.length&&"string"!==na.type(c)&&
// Inspect recursively
d(c)})}(arguments),c&&!b&&j()),this},
// Remove a callback from the list
remove:function(){return na.each(arguments,function(a,b){for(var c;(c=na.inArray(b,g,c))>-1;)g.splice(c,1),
// Handle firing indexes
c<=i&&i--}),this},
// Check if a given callback is in the list.
// If no argument is given, return whether or not list has callbacks attached.
has:function(a){return a?na.inArray(a,g)>-1:g.length>0},
// Remove all callbacks from the list
empty:function(){return g&&(g=[]),this},
// Disable .fire and .add
// Abort any current/pending executions
// Clear all callbacks and values
disable:function(){return e=h=[],g=c="",this},disabled:function(){return!g},
// Disable .fire
// Also disable .add unless we have memory (since it would have no effect)
// Abort any pending executions
lock:function(){return e=!0,c||k.disable(),this},locked:function(){return!!e},
// Call all callbacks with the given context and arguments
fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],h.push(c),b||j()),this},
// Call all the callbacks with the given arguments
fire:function(){return k.fireWith(this,arguments),this},
// To know if the callbacks have already been called at least once
fired:function(){return!!d}};return k},na.extend({Deferred:function(a){var b=[
// action, add listener, listener list, final state
["resolve","done",na.Callbacks("once memory"),"resolved"],["reject","fail",na.Callbacks("once memory"),"rejected"],["notify","progress",na.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return na.Deferred(function(c){na.each(b,function(b,f){var g=na.isFunction(a[b])&&a[b];
// deferred[ done | fail | progress ] for forwarding actions to newDefer
e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&na.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},
// Get a promise for this deferred
// If obj is provided, the promise aspect is added to the object
promise:function(a){return null!=a?na.extend(a,d):d}},e={};
// All done!
// Keep pipe for back-compat
// Add list-specific methods
// Make the deferred a promise
// Call given func if any
return d.pipe=d.then,na.each(b,function(a,f){var g=f[2],h=f[3];
// promise[ done | fail | progress ] = list.add
d[f[1]]=g.add,
// Handle state
h&&g.add(function(){
// state = [ resolved | rejected ]
c=h},b[1^a][2].disable,b[2][2].lock),
// deferred[ resolve | reject | notify ]
e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},
// Deferred helper
when:function(a){var b,c,d,e=0,f=ea.call(arguments),g=f.length,
// the count of uncompleted subordinates
h=1!==g||a&&na.isFunction(a.promise)?g:0,
// the master Deferred.
// If resolveValues consist of only a single Deferred, just use that.
i=1===h?a:na.Deferred(),
// Update function for both resolve and progress values
j=function(a,c,d){return function(e){c[a]=this,d[a]=arguments.length>1?ea.call(arguments):e,d===b?i.notifyWith(c,d):--h||i.resolveWith(c,d)}};
// add listeners to Deferred subordinates; treat others as resolved
if(g>1)for(b=new Array(g),c=new Array(g),d=new Array(g);e<g;e++)f[e]&&na.isFunction(f[e].promise)?f[e].promise().progress(j(e,c,b)).done(j(e,d,f)).fail(i.reject):--h;
// if we're not waiting on anything, resolve the master
return h||i.resolveWith(d,f),i.promise()}});
// The deferred used on DOM ready
var Ea;na.fn.ready=function(a){
// Add the callback
return na.ready.promise().done(a),this},na.extend({
// Is the DOM ready to be used? Set to true once it occurs.
isReady:!1,
// A counter to track how many items to wait for before
// the ready event fires. See #6781
readyWait:1,
// Hold (or release) the ready event
holdReady:function(a){a?na.readyWait++:na.ready(!0)},
// Handle when the DOM is ready
ready:function(a){
// Abort if there are pending holds or we're already ready
(a===!0?--na.readyWait:na.isReady)||(
// Remember that the DOM is ready
na.isReady=!0,
// If a normal DOM Ready event fired, decrement, and wait if need be
a!==!0&&--na.readyWait>0||(
// If there are functions bound, to execute
Ea.resolveWith(da,[na]),
// Trigger any bound ready events
na.fn.triggerHandler&&(na(da).triggerHandler("ready"),na(da).off("ready"))))}}),na.ready.promise=function(b){if(!Ea)
// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE6-10
// Older IE sometimes signals "interactive" too soon
if(Ea=na.Deferred(),"complete"===da.readyState||"loading"!==da.readyState&&!da.documentElement.doScroll)
// Handle it asynchronously to allow scripts the opportunity to delay ready
a.setTimeout(na.ready);else if(da.addEventListener)
// Use the handy event callback
da.addEventListener("DOMContentLoaded",h),
// A fallback to window.onload, that will always work
a.addEventListener("load",h);else{
// Ensure firing before onload, maybe late but safe also for iframes
da.attachEvent("onreadystatechange",h),
// A fallback to window.onload, that will always work
a.attachEvent("onload",h);
// If IE and not a frame
// continually check to see if the document is ready
var c=!1;try{c=null==a.frameElement&&da.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!na.isReady){try{
// Use the trick by Diego Perini
// http://javascript.nwbox.com/IEContentLoaded/
c.doScroll("left")}catch(b){return a.setTimeout(e,50)}
// detach all dom ready events
g(),
// and execute any waiting functions
na.ready()}}()}return Ea.promise(b)},
// Kick off the DOM ready check even if the user does not
na.ready.promise();
// Support: IE<9
// Iteration over object's inherited properties before its own
var Fa;for(Fa in na(la))break;la.ownFirst="0"===Fa,
// Note: most support tests are defined in their respective modules.
// false until the test is run
la.inlineBlockNeedsLayout=!1,
// Execute ASAP in case we need to set body.style.zoom
na(function(){
// Minified: var a,b,c,d
var a,b,c,d;c=da.getElementsByTagName("body")[0],c&&c.style&&(
// Setup
b=da.createElement("div"),d=da.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),"undefined"!=typeof b.style.zoom&&(
// Support: IE<8
// Check if natively block-level elements act like inline-block
// elements when setting their display to 'inline' and giving
// them layout
b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",la.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(
// Prevent IE 6 from affecting layout for positioned elements #11048
// Prevent IE from shrinking the body in IE 7 mode #12869
// Support: IE<8
c.style.zoom=1)),c.removeChild(d))}),function(){var a=da.createElement("div");
// Support: IE<9
la.deleteExpando=!0;try{delete a.test}catch(b){la.deleteExpando=!1}
// Null elements to avoid leaks in IE.
a=null}();var Ga=function(a){var b=na.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;
// Do not set data on non-element DOM nodes because it will not be cleared (#8335).
// Nodes accept data unless otherwise specified; rejection can be conditional
return(1===c||9===c)&&(!b||b!==!0&&a.getAttribute("classid")===b)},Ha=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Ia=/([A-Z])/g;na.extend({cache:{},
// The following elements (space-suffixed to avoid Object.prototype collisions)
// throw uncatchable exceptions if you attempt to set expando properties
noData:{"applet ":!0,"embed ":!0,
// ...but Flash objects (which have this classid) *can* handle expandos
"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?na.cache[a[na.expando]]:a[na.expando],!!a&&!j(a)},data:function(a,b,c){return k(a,b,c)},removeData:function(a,b){return l(a,b)},
// For internal use only.
_data:function(a,b,c){return k(a,b,c,!0)},_removeData:function(a,b){return l(a,b,!0)}}),na.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;
// Special expections of .data basically thwart jQuery.access,
// so implement the relevant behavior ourselves
// Gets all values
if(void 0===a){if(this.length&&(e=na.data(f),1===f.nodeType&&!na._data(f,"parsedAttrs"))){for(c=g.length;c--;)
// Support: IE11+
// The attrs elements can be null (#14894)
g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=na.camelCase(d.slice(5)),i(f,d,e[d])));na._data(f,"parsedAttrs",!0)}return e}
// Sets multiple values
// Sets multiple values
// Sets one value
// Gets one value
// Try to fetch any internally stored data first
return"object"==typeof a?this.each(function(){na.data(this,a)}):arguments.length>1?this.each(function(){na.data(this,a,b)}):f?i(f,a,na.data(f,a)):void 0},removeData:function(a){return this.each(function(){na.removeData(this,a)})}}),na.extend({queue:function(a,b,c){var d;if(a)
// Speed up dequeue by getting out quickly if this is just a lookup
return b=(b||"fx")+"queue",d=na._data(a,b),c&&(!d||na.isArray(c)?d=na._data(a,b,na.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=na.queue(a,b),d=c.length,e=c.shift(),f=na._queueHooks(a,b),g=function(){na.dequeue(a,b)};
// If the fx queue is dequeued, always remove the progress sentinel
"inprogress"===e&&(e=c.shift(),d--),e&&(
// Add a progress sentinel to prevent the fx queue from being
// automatically dequeued
"fx"===b&&c.unshift("inprogress"),
// clear up the last queue stop function
delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},
// not intended for public consumption - generates a queueHooks object,
// or returns the current one
_queueHooks:function(a,b){var c=b+"queueHooks";return na._data(a,c)||na._data(a,c,{empty:na.Callbacks("once memory").add(function(){na._removeData(a,b+"queue"),na._removeData(a,c)})})}}),na.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?na.queue(this[0],a):void 0===b?this:this.each(function(){var c=na.queue(this,a,b);
// ensure a hooks for this queue
na._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&na.dequeue(this,a)})},dequeue:function(a){return this.each(function(){na.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},
// Get a promise resolved when queues of a certain type
// are emptied (fx is the type by default)
promise:function(a,b){var c,d=1,e=na.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};for("string"!=typeof a&&(b=a,a=void 0),a=a||"fx";g--;)c=na._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}}),function(){var a;la.shrinkWrapBlocks=function(){if(null!=a)return a;
// Will be changed later if needed.
a=!1;
// Minified: var b,c,d
var b,c,d;
// Setup
// Support: IE6
// Check if elements with layout shrink-wrap their children
// Reset CSS: box-sizing; display; margin; border
// Support: Firefox<29, Android 2.3
// Vendor-prefix box-sizing
return c=da.getElementsByTagName("body")[0],c&&c.style?(b=da.createElement("div"),d=da.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(da.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Ja=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Ka=new RegExp("^(?:([+-])=|)("+Ja+")([a-z%]*)$","i"),La=["Top","Right","Bottom","Left"],Ma=function(a,b){
// isHidden might be called from jQuery#filter function;
// in that case, element will be second argument
return a=b||a,"none"===na.css(a,"display")||!na.contains(a.ownerDocument,a)},Na=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;
// Sets many values
if("object"===na.type(c)){e=!0;for(h in c)Na(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,na.isFunction(d)||(g=!0),j&&(
// Bulk operations run against the entire set
g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(na(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));
// Gets
return e?a:j?b.call(a):i?b(a[0],c):f},Oa=/^(?:checkbox|radio)$/i,Pa=/<([\w:-]+)/,Qa=/^$|\/(?:java|ecma)script/i,Ra=/^\s+/,Sa="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";!function(){var a=da.createElement("div"),b=da.createDocumentFragment(),c=da.createElement("input");
// Setup
a.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
// IE strips leading whitespace when .innerHTML is used
la.leadingWhitespace=3===a.firstChild.nodeType,
// Make sure that tbody elements aren't automatically inserted
// IE will insert them into empty tables
la.tbody=!a.getElementsByTagName("tbody").length,
// Make sure that link elements get serialized correctly by innerHTML
// This requires a wrapper element in IE
la.htmlSerialize=!!a.getElementsByTagName("link").length,
// Makes sure cloning an html5 element does not cause problems
// Where outerHTML is undefined, this still works
la.html5Clone="<:nav></:nav>"!==da.createElement("nav").cloneNode(!0).outerHTML,
// Check if a disconnected checkbox will retain its checked
// value of true after appended to the DOM (IE6/7)
c.type="checkbox",c.checked=!0,b.appendChild(c),la.appendChecked=c.checked,
// Make sure textarea (and checkbox) defaultValue is properly cloned
// Support: IE6-IE11+
a.innerHTML="<textarea>x</textarea>",la.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,
// #11217 - WebKit loses check when the name is after the checked attribute
b.appendChild(a),
// Support: Windows Web Apps (WWA)
// `name` and `type` must use .setAttribute for WWA (#14901)
c=da.createElement("input"),c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),a.appendChild(c),
// Support: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3
// old WebKit doesn't clone checked state correctly in fragments
la.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,
// Support: IE<9
// Cloned elements keep attachEvent handlers, we use addEventListener on IE9+
la.noCloneEvent=!!a.addEventListener,
// Support: IE<9
// Since attributes and properties are the same in IE,
// cleanData must set properties to undefined rather than use removeAttribute
a[na.expando]=1,la.attributes=!a.getAttribute(na.expando)}();
// We have to close these tags to support XHTML (#13200)
var Ta={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],
// Support: IE8
param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],
// IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
// unless wrapped in a div with non-breaking characters in front of it.
_default:la.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};
// Support: IE8-IE9
Ta.optgroup=Ta.option,Ta.tbody=Ta.tfoot=Ta.colgroup=Ta.caption=Ta.thead,Ta.th=Ta.td;var Ua=/<|&#?\w+;/,Va=/<tbody/i;!function(){var b,c,d=da.createElement("div");
// Support: IE<9 (lack submit/change bubble), Firefox (lack focus(in | out) events)
for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(la[b]=c in a)||(
// Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP)
d.setAttribute(c,"t"),la[b]=d.attributes[c].expando===!1);
// Null elements to avoid leaks in IE.
d=null}();var Wa=/^(?:input|select|textarea)$/i,Xa=/^key/,Ya=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Za=/^(?:focusinfocus|focusoutblur)$/,$a=/^([^.]*)(?:\.(.+)|)/;/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
na.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=na._data(a);
// Don't attach events to noData or text/comment nodes (but allow plain objects)
if(q){for(
// Caller can pass in an object of custom data in lieu of the handler
c.handler&&(i=c,c=i.handler,e=i.selector),
// Make sure that the handler has a unique ID, used to find/remove it later
c.guid||(c.guid=na.guid++),
// Init the element's event structure and main handler, if this is the first
(g=q.events)||(g=q.events={}),(k=q.handle)||(k=q.handle=function(a){
// Discard the second event of a jQuery.event.trigger() and
// when an event is called after a page has unloaded
return"undefined"==typeof na||a&&na.event.triggered===a.type?void 0:na.event.dispatch.apply(k.elem,arguments)},
// Add elem as a property of the handle fn to prevent a memory leak
// with IE non-native events
k.elem=a),
// Handle multiple events separated by a space
b=(b||"").match(Da)||[""],h=b.length;h--;)f=$a.exec(b[h])||[],n=p=f[1],o=(f[2]||"").split(".").sort(),
// There *must* be a type, no attaching namespace-only handlers
n&&(
// If event changes its type, use the special event handlers for the changed type
j=na.event.special[n]||{},
// If selector defined, determine special event api type, otherwise given type
n=(e?j.delegateType:j.bindType)||n,
// Update special based on newly reset type
j=na.event.special[n]||{},
// handleObj is passed to all event handlers
l=na.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&na.expr.match.needsContext.test(e),namespace:o.join(".")},i),
// Init the event handler queue if we're the first
(m=g[n])||(m=g[n]=[],m.delegateCount=0,
// Only use addEventListener/attachEvent if the special events handler returns false
j.setup&&j.setup.call(a,d,o,k)!==!1||(
// Bind the global event handler to the element
a.addEventListener?a.addEventListener(n,k,!1):a.attachEvent&&a.attachEvent("on"+n,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),
// Add to the element's handler list, delegates in front
e?m.splice(m.delegateCount++,0,l):m.push(l),
// Keep track of which events have ever been used, for event optimization
na.event.global[n]=!0);
// Nullify elem to prevent memory leaks in IE
a=null}},
// Detach an event or set of events from an element
remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=na.hasData(a)&&na._data(a);if(q&&(k=q.events)){for(
// Once for each type.namespace in types; type may be omitted
b=(b||"").match(Da)||[""],j=b.length;j--;)
// Unbind all events (on this namespace, if provided) for the element
if(h=$a.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){for(l=na.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=k[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),
// Remove matching events
i=f=m.length;f--;)g=m[f],!e&&p!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));
// Remove generic event handler if we removed something and no more handlers exist
// (avoids potential for endless recursion during removal of special event handlers)
i&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||na.removeEvent(a,n,q.handle),delete k[n])}else for(n in k)na.event.remove(a,n+b[j],c,d,!0);
// Remove the expando if it's no longer used
na.isEmptyObject(k)&&(delete q.handle,
// removeData also checks for emptiness and clears the expando if empty
// so use it instead of delete
na._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,j,k,l,m=[d||da],n=ka.call(b,"type")?b.type:b,o=ka.call(b,"namespace")?b.namespace.split("."):[];
// Don't do events on text and comment nodes
if(h=k=d=d||da,3!==d.nodeType&&8!==d.nodeType&&!Za.test(n+na.event.triggered)&&(n.indexOf(".")>-1&&(
// Namespaced trigger; create a regexp to match event type in handle()
o=n.split("."),n=o.shift(),o.sort()),g=n.indexOf(":")<0&&"on"+n,
// Caller can pass in a jQuery.Event object, Object, or just an event type string
b=b[na.expando]?b:new na.Event(n,"object"==typeof b&&b),
// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
b.isTrigger=e?2:3,b.namespace=o.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,
// Clean up the event in case it is being reused
b.result=void 0,b.target||(b.target=d),
// Clone any incoming data and prepend the event, creating the handler arg list
c=null==c?[b]:na.makeArray(c,[b]),
// Allow special events to draw outside the lines
j=na.event.special[n]||{},e||!j.trigger||j.trigger.apply(d,c)!==!1)){
// Determine event propagation path in advance, per W3C events spec (#9951)
// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
if(!e&&!j.noBubble&&!na.isWindow(d)){for(i=j.delegateType||n,Za.test(i+n)||(h=h.parentNode);h;h=h.parentNode)m.push(h),k=h;
// Only add window if we got to document (e.g., not plain obj or detached DOM)
k===(d.ownerDocument||da)&&m.push(k.defaultView||k.parentWindow||a)}for(
// Fire handlers on the event path
l=0;(h=m[l++])&&!b.isPropagationStopped();)b.type=l>1?i:j.bindType||n,
// jQuery handler
f=(na._data(h,"events")||{})[b.type]&&na._data(h,"handle"),f&&f.apply(h,c),
// Native handler
f=g&&h[g],f&&f.apply&&Ga(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());
// If nobody prevented the default action, do it now
if(b.type=n,!e&&!b.isDefaultPrevented()&&(!j._default||j._default.apply(m.pop(),c)===!1)&&Ga(d)&&g&&d[n]&&!na.isWindow(d)){
// Don't re-trigger an onFOO event when we call its FOO() method
k=d[g],k&&(d[g]=null),
// Prevent re-triggering of the same event, since we already bubbled it above
na.event.triggered=n;try{d[n]()}catch(p){}na.event.triggered=void 0,k&&(d[g]=k)}return b.result}},dispatch:function(a){
// Make a writable jQuery.Event from the native event object
a=na.event.fix(a);var b,c,d,e,f,g=[],h=ea.call(arguments),i=(na._data(this,"events")||{})[a.type]||[],j=na.event.special[a.type]||{};
// Call the preDispatch hook for the mapped type, and let it bail if desired
if(
// Use the fix-ed jQuery.Event rather than the (read-only) native event
h[0]=a,a.delegateTarget=this,!j.preDispatch||j.preDispatch.call(this,a)!==!1){for(
// Determine handlers
g=na.event.handlers.call(this,a,i),
// Run delegates first; they may want to stop propagation beneath us
b=0;(e=g[b++])&&!a.isPropagationStopped();)for(a.currentTarget=e.elem,c=0;(f=e.handlers[c++])&&!a.isImmediatePropagationStopped();)
// Triggered event must either 1) have no namespace, or 2) have namespace(s)
// a subset or equal to those in the bound event (both can have no namespace).
a.rnamespace&&!a.rnamespace.test(f.namespace)||(a.handleObj=f,a.data=f.data,d=((na.event.special[f.origType]||{}).handle||f.handler).apply(e.elem,h),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()));
// Call the postDispatch hook for the mapped type
return j.postDispatch&&j.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;
// Support (at least): Chrome, IE9
// Find delegate handlers
// Black-hole SVG <use> instance trees (#13180)
//
// Support: Firefox<=42+
// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))/* jshint eqeqeq: false */
for(;i!=this;i=i.parentNode||this)/* jshint eqeqeq: true */
// Don't check non-elements (#13208)
// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;c<h;c++)f=b[c],
// Don't conflict with Object.prototype properties (#13203)
e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?na(e,this).index(i)>-1:na.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}
// Add the remaining (directly-bound) handlers
return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[na.expando])return a;
// Create a writable copy of the event object and normalize some properties
var b,c,d,e=a.type,f=a,g=this.fixHooks[e];for(g||(this.fixHooks[e]=g=Ya.test(e)?this.mouseHooks:Xa.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new na.Event(f),b=d.length;b--;)c=d[b],a[c]=f[c];
// Support: IE<9
// Fix target property (#1925)
// Support: Safari 6-8+
// Target should not be a text node (#504, #13143)
// Support: IE<9
// For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
return a.target||(a.target=f.srcElement||da),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},
// Includes some event props shared by KeyEvent and MouseEvent
props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){
// Add which for key events
return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;
// Calculate pageX/Y if missing and clientX/Y available
// Add relatedTarget, if necessary
// Add which for click: 1 === left; 2 === middle; 3 === right
// Note: button is not normalized, so don't use it
return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||da,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{
// Prevent triggered image.load events from bubbling to window.load
noBubble:!0},focus:{
// Fire native event if possible so blur/focus sequence is correct
trigger:function(){if(this!==u()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){if(this===u()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{
// For checkbox, fire native event so checked state will be right
trigger:function(){if(na.nodeName(this,"input")&&"checkbox"===this.type&&this.click)return this.click(),!1},
// For cross-browser consistency, don't fire native .click() on links
_default:function(a){return na.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){
// Support: Firefox 20+
// Firefox doesn't alert if the returnValue field is not set.
void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},
// Piggyback on a donor event to simulate a different one
simulate:function(a,b,c){var d=na.extend(new na.Event,c,{type:a,isSimulated:!0});na.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}},na.removeEvent=da.removeEventListener?function(a,b,c){
// This "if" is needed for plain objects
a.removeEventListener&&a.removeEventListener(b,c)}:function(a,b,c){var d="on"+b;a.detachEvent&&(
// #8545, #7054, preventing memory leaks for custom events in IE6-8
// detachEvent needed property on element, by name of that event,
// to properly expose it to GC
"undefined"==typeof a[d]&&(a[d]=null),a.detachEvent(d,c))},na.Event=function(a,b){
// Allow instantiation without the 'new' keyword
// Allow instantiation without the 'new' keyword
// Event object
// Events bubbling up the document may have been marked as prevented
// by a handler lower down the tree; reflect the correct value.
// Support: IE < 9, Android < 4.0
// Put explicitly provided properties onto the event object
// Create a timestamp if incoming event doesn't have one
// Mark it as fixed
return this instanceof na.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?s:t):this.type=a,b&&na.extend(this,b),this.timeStamp=a&&a.timeStamp||na.now(),void(this[na.expando]=!0)):new na.Event(a,b)},
// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
na.Event.prototype={constructor:na.Event,isDefaultPrevented:t,isPropagationStopped:t,isImmediatePropagationStopped:t,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=s,a&&(
// If preventDefault exists, run it on the original event
a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=s,a&&!this.isSimulated&&(
// If stopPropagation exists, run it on the original event
a.stopPropagation&&a.stopPropagation(),
// Support: IE
// Set the cancelBubble property of the original event to true
a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=s,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},
// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://code.google.com/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
na.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){na.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;
// For mouseenter/leave call the handler if related is outside the target.
// NB: No relatedTarget if the mouse left/entered the browser window
return e&&(e===d||na.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),
// IE submit delegation
la.submit||(na.event.special.submit={setup:function(){
// Only need this for delegated form submit events
// Only need this for delegated form submit events
// Lazy-add a submit handler when a descendant form may potentially be submitted
return!na.nodeName(this,"form")&&void na.event.add(this,"click._submit keypress._submit",function(a){
// Node name check avoids a VML-related crash in IE (#9807)
var b=a.target,c=na.nodeName(b,"input")||na.nodeName(b,"button")?
// Support: IE <=8
// We use jQuery.prop instead of elem.form
// to allow fixing the IE8 delegated submit issue (gh-2332)
// by 3rd party polyfills/workarounds.
na.prop(b,"form"):void 0;c&&!na._data(c,"submit")&&(na.event.add(c,"submit._submit",function(a){a._submitBubble=!0}),na._data(c,"submit",!0))})},postDispatch:function(a){
// If form was submitted by the user, bubble the event up the tree
a._submitBubble&&(delete a._submitBubble,this.parentNode&&!a.isTrigger&&na.event.simulate("submit",this.parentNode,a))},teardown:function(){
// Only need this for delegated form submit events
// Only need this for delegated form submit events
// Remove delegated handlers; cleanData eventually reaps submit handlers attached above
return!na.nodeName(this,"form")&&void na.event.remove(this,"._submit")}}),
// IE change delegation and checkbox/radio fix
la.change||(na.event.special.change={setup:function(){
// IE doesn't fire change on a check/radio until blur; trigger it on click
// after a propertychange. Eat the blur-change in special.change.handle.
// This still fires onchange a second time for check/radio after blur.
// Delegated event; lazy-add a change handler on descendant inputs
return Wa.test(this.nodeName)?("checkbox"!==this.type&&"radio"!==this.type||(na.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._justChanged=!0)}),na.event.add(this,"click._change",function(a){this._justChanged&&!a.isTrigger&&(this._justChanged=!1),
// Allow triggered, simulated change events (#11500)
na.event.simulate("change",this,a)})),!1):void na.event.add(this,"beforeactivate._change",function(a){var b=a.target;Wa.test(b.nodeName)&&!na._data(b,"change")&&(na.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||na.event.simulate("change",this.parentNode,a)}),na._data(b,"change",!0))})},handle:function(a){var b=a.target;
// Swallow native change events from checkbox/radio, we already triggered them above
if(this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type)return a.handleObj.handler.apply(this,arguments)},teardown:function(){return na.event.remove(this,"._change"),!Wa.test(this.nodeName)}}),
// Support: Firefox
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome, Safari
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
la.focusin||na.each({focus:"focusin",blur:"focusout"},function(a,b){
// Attach a single capturing handler on the document while someone wants focusin/focusout
var c=function(a){na.event.simulate(b,a.target,na.event.fix(a))};na.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=na._data(d,b);e||d.addEventListener(a,c,!0),na._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=na._data(d,b)-1;e?na._data(d,b,e):(d.removeEventListener(a,c,!0),na._removeData(d,b))}}}),na.fn.extend({on:function(a,b,c,d){return v(this,a,b,c,d)},one:function(a,b,c,d){return v(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)
// ( event )  dispatched jQuery.Event
return d=a.handleObj,na(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){
// ( types-object [, selector] )
for(e in a)this.off(e,b,a[e]);return this}
// ( types [, fn] )
return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=t),this.each(function(){na.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){na.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return na.event.trigger(a,b,c,!0)}});var _a=/ jQuery\d+="(?:null|\d+)"/g,ab=new RegExp("<(?:"+Sa+")[\\s/>]","i"),bb=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
// Support: IE 10-11, Edge 10240+
// In IE/Edge using regex groups here causes severe slowdowns.
// See https://connect.microsoft.com/IE/feedback/details/1736512/
cb=/<script|<style|<link/i,
// checked="checked" or checked
db=/checked\s*(?:[^=]|=\s*.checked.)/i,eb=/^true\/(.*)/,fb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,gb=n(da),hb=gb.appendChild(da.createElement("div"));na.extend({htmlPrefilter:function(a){return a.replace(bb,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h,i=na.contains(a.ownerDocument,a);if(la.html5Clone||na.isXMLDoc(a)||!ab.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(hb.innerHTML=a.outerHTML,hb.removeChild(f=hb.firstChild)),!(la.noCloneEvent&&la.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||na.isXMLDoc(a)))
// Fix all IE cloning issues
for(
// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
d=o(f),h=o(a),g=0;null!=(e=h[g]);++g)
// Ensure that the destination node is not null; Fixes #9587
d[g]&&A(e,d[g]);
// Copy the events from the original to the clone
if(b)if(c)for(h=h||o(a),d=d||o(f),g=0;null!=(e=h[g]);g++)z(e,d[g]);else z(a,f);
// Return the cloned set
// Preserve script evaluation history
return d=o(f,"script"),d.length>0&&p(d,!i&&o(a,"script")),d=h=e=null,f},cleanData:function(a,/* internal */b){for(var c,d,e,f,g=0,h=na.expando,i=na.cache,j=la.attributes,k=na.event.special;null!=(c=a[g]);g++)if((b||Ga(c))&&(e=c[h],f=e&&i[e])){if(f.events)for(d in f.events)k[d]?na.event.remove(c,d):na.removeEvent(c,d,f.handle);
// Remove cache only if it was not already removed by jQuery.event.remove
i[e]&&(delete i[e],
// Support: IE<9
// IE does not allow us to delete expando properties from nodes
// IE creates expando attributes along with the property
// IE does not have a removeAttribute function on Document nodes
j||"undefined"==typeof c.removeAttribute?c[h]=void 0:c.removeAttribute(h),ca.push(e))}}}),na.fn.extend({
// Keep domManip exposed until 3.0 (gh-2225)
domManip:B,detach:function(a){return C(this,a,!0)},remove:function(a){return C(this,a)},text:function(a){return Na(this,function(a){return void 0===a?na.text(this):this.empty().append((this[0]&&this[0].ownerDocument||da).createTextNode(a))},null,a,arguments.length)},append:function(){return B(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=w(this,a);b.appendChild(a)}})},prepend:function(){return B(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=w(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return B(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return B(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){
// Remove any remaining nodes
for(
// Remove element nodes and prevent memory leaks
1===a.nodeType&&na.cleanData(o(a,!1));a.firstChild;)a.removeChild(a.firstChild);
// If this is a select, ensure that it displays empty (#12336)
// Support: IE<9
a.options&&na.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return na.clone(this,a,b)})},html:function(a){return Na(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(_a,""):void 0;
// See if we can take a shortcut and just use innerHTML
if("string"==typeof a&&!cb.test(a)&&(la.htmlSerialize||!ab.test(a))&&(la.leadingWhitespace||!Ra.test(a))&&!Ta[(Pa.exec(a)||["",""])[1].toLowerCase()]){a=na.htmlPrefilter(a);try{for(;c<d;c++)
// Remove element nodes and prevent memory leaks
b=this[c]||{},1===b.nodeType&&(na.cleanData(o(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];
// Make the changes, replacing each non-ignored context element with the new content
return B(this,arguments,function(b){var c=this.parentNode;na.inArray(this,a)<0&&(na.cleanData(o(this)),c&&c.replaceChild(b,this))},a)}}),na.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){na.fn[a]=function(a){for(var c,d=0,e=[],f=na(a),g=f.length-1;d<=g;d++)c=d===g?this:this.clone(!0),na(f[d])[b](c),
// Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
ga.apply(e,c.get());return this.pushStack(e)}});var ib,jb={
// Support: Firefox
// We have to pre-define these values for FF (#10227)
HTML:"block",BODY:"block"},kb=/^margin/,lb=new RegExp("^("+Ja+")(?!px)[a-z%]+$","i"),mb=function(a,b,c,d){var e,f,g={};
// Remember the old values, and insert the new ones
for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);
// Revert the old values
for(f in b)a.style[f]=g[f];return e},nb=da.documentElement;!function(){function b(){var b,k,l=da.documentElement;
// Setup
l.appendChild(i),j.style.cssText=
// Support: Android 2.3
// Vendor-prefix box-sizing
"-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
// Support: IE<9
// Assume reasonable values in the absence of getComputedStyle
c=e=h=!1,d=g=!0,
// Check for getComputedStyle so that this code is not run in IE<9.
a.getComputedStyle&&(k=a.getComputedStyle(j),c="1%"!==(k||{}).top,h="2px"===(k||{}).marginLeft,e="4px"===(k||{width:"4px"}).width,
// Support: Android 4.0 - 4.3 only
// Some styles come back with percentage values, even though they shouldn't
j.style.marginRight="50%",d="4px"===(k||{marginRight:"4px"}).marginRight,
// Support: Android 2.3 only
// Div with explicit width and no margin-right incorrectly
// gets computed margin-right based on width of container (#3333)
// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
b=j.appendChild(da.createElement("div")),
// Reset CSS: box-sizing; display; margin; border; padding
b.style.cssText=j.style.cssText=
// Support: Android 2.3
// Vendor-prefix box-sizing
"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",b.style.marginRight=b.style.width="0",j.style.width="1px",g=!parseFloat((a.getComputedStyle(b)||{}).marginRight),j.removeChild(b)),
// Support: IE6-8
// First check that getClientRects works as expected
// Check if table cells still have offsetWidth/Height when they are set
// to display:none and there are still other visible table cells in a
// table row; if so, offsetWidth/Height are not reliable for use when
// determining if an element has been hidden directly using
// display:none (it is still safe to use offsets if a parent element is
// hidden; don safety goggles and see bug #4512 for more information).
j.style.display="none",f=0===j.getClientRects().length,f&&(j.style.display="",j.innerHTML="<table><tr><td></td><td>t</td></tr></table>",j.childNodes[0].style.borderCollapse="separate",b=j.getElementsByTagName("td"),b[0].style.cssText="margin:0;border:0;padding:0;display:none",f=0===b[0].offsetHeight,f&&(b[0].style.display="",b[1].style.display="none",f=0===b[0].offsetHeight)),
// Teardown
l.removeChild(i)}var c,d,e,f,g,h,i=da.createElement("div"),j=da.createElement("div");
// Finish early in limited (non-browser) environments
j.style&&(j.style.cssText="float:left;opacity:.5",
// Support: IE<9
// Make sure that element opacity exists (as opposed to filter)
la.opacity="0.5"===j.style.opacity,
// Verify style float existence
// (IE uses styleFloat instead of cssFloat)
la.cssFloat=!!j.style.cssFloat,j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",la.clearCloneStyle="content-box"===j.style.backgroundClip,i=da.createElement("div"),i.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",j.innerHTML="",i.appendChild(j),
// Support: Firefox<29, Android 2.3
// Vendor-prefix box-sizing
la.boxSizing=""===j.style.boxSizing||""===j.style.MozBoxSizing||""===j.style.WebkitBoxSizing,na.extend(la,{reliableHiddenOffsets:function(){return null==c&&b(),f},boxSizingReliable:function(){
// We're checking for pixelPositionVal here instead of boxSizingReliableVal
// since that compresses better and they're computed together anyway.
return null==c&&b(),e},pixelMarginRight:function(){
// Support: Android 4.0-4.3
return null==c&&b(),d},pixelPosition:function(){return null==c&&b(),c},reliableMarginRight:function(){
// Support: Android 2.3
return null==c&&b(),g},reliableMarginLeft:function(){
// Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
return null==c&&b(),h}}))}();var ob,pb,qb=/^(top|right|bottom|left)$/;a.getComputedStyle?(ob=function(b){
// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
// IE throws on elements created in popups
// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},pb=function(a,b,c){var d,e,f,g,h=a.style;
// Support: IE
// IE returns zIndex value as an integer.
// getPropertyValue is only needed for .css('filter') in IE9, see #12537
// Support: Opera 12.1x only
// Fall back to style even without computed
// computed is undefined for elems on document fragments
// Remember the original values
// Put in the new values to get a computed value out
// Revert the changed values
return c=c||ob(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||na.contains(a.ownerDocument,a)||(g=na.style(a,b)),c&&!la.pixelMarginRight()&&lb.test(g)&&kb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0===g?g:g+""}):nb.currentStyle&&(ob=function(a){return a.currentStyle},pb=function(a,b,c){var d,e,f,g,h=a.style;
// Support: IE
// IE returns zIndex value as an integer.
// Avoid setting ret to empty string here
// so we don't default to auto
// From the awesome hack by Dean Edwards
// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
// If we're not dealing with a regular pixel number
// but a number that has a weird ending, we need to convert it to pixels
// but not position css attributes, as those are
// proportional to the parent element instead
// and we can't measure the parent instead because it
// might trigger a "stacking dolls" problem
// Remember the original values
// Put in the new values to get a computed value out
// Revert the changed values
return c=c||ob(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),lb.test(g)&&!qb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});var rb=/alpha\([^)]*\)/i,sb=/opacity\s*=\s*([^)]*)/i,
// swappable if display is none or starts with table except
// "table", "table-cell", or "table-caption"
// see here for display values:
// https://developer.mozilla.org/en-US/docs/CSS/display
tb=/^(none|table(?!-c[ea]).+)/,ub=new RegExp("^("+Ja+")(.*)$","i"),vb={position:"absolute",visibility:"hidden",display:"block"},wb={letterSpacing:"0",fontWeight:"400"},xb=["Webkit","O","Moz","ms"],yb=da.createElement("div").style;na.extend({
// Add in style property hooks for overriding the default
// behavior of getting and setting a style property
cssHooks:{opacity:{get:function(a,b){if(b){
// We should always get a number back from opacity
var c=pb(a,"opacity");return""===c?"1":c}}}},
// Don't automatically add "px" to these possibly-unitless properties
cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},
// Add in properties whose names you wish to fix before
// setting or getting the value
cssProps:{
// normalize float css property
"float":la.cssFloat?"cssFloat":"styleFloat"},
// Get and set the style property on a DOM Node
style:function(a,b,c,d){
// Don't set styles on text and comment nodes
if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){
// Make sure that we're working with the right name
var e,f,g,h=na.camelCase(b),i=a.style;
// Check if we're setting a value
if(b=na.cssProps[h]||(na.cssProps[h]=G(h)||h),
// gets hook for the prefixed version
// followed by the unprefixed version
g=na.cssHooks[b]||na.cssHooks[h],void 0===c)
// If a hook was provided get the non-computed value from there
// If a hook was provided get the non-computed value from there
return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];
// Make sure that null and NaN values aren't set. See: #7116
if(f=typeof c,
// Convert "+=" or "-=" to relative numbers (#7345)
"string"===f&&(e=Ka.exec(c))&&e[1]&&(c=m(a,b,e),
// Fixes bug #9237
f="number"),null!=c&&c===c&&(
// If a number was passed in, add the unit (except for certain CSS properties)
"number"===f&&(c+=e&&e[3]||(na.cssNumber[h]?"":"px")),
// Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
// but it would mean to define eight
// (for every problematic property) identical functions
la.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))
// Support: IE
// Swallow errors from 'invalid' CSS values (#5509)
try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=na.camelCase(b);
// Return, converting to number if forced or a qualifier was provided and val looks numeric
// Make sure that we're working with the right name
// gets hook for the prefixed version
// followed by the unprefixed version
// If a hook was provided get the computed value from there
// Otherwise, if a way to get the computed value exists, use that
//convert "normal" to computed value
// Return, converting to number if forced or a qualifier was provided and val looks numeric
return b=na.cssProps[h]||(na.cssProps[h]=G(h)||h),g=na.cssHooks[b]||na.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=pb(a,b,d)),"normal"===f&&b in wb&&(f=wb[b]),""===c||c?(e=parseFloat(f),c===!0||isFinite(e)?e||0:f):f}}),na.each(["height","width"],function(a,b){na.cssHooks[b]={get:function(a,c,d){if(c)
// certain elements can have dimension info if we invisibly show them
// however, it must have a current display style that would benefit from this
return tb.test(na.css(a,"display"))&&0===a.offsetWidth?mb(a,vb,function(){return K(a,b,d)}):K(a,b,d)},set:function(a,c,d){var e=d&&ob(a);return I(a,c,d?J(a,b,d,la.boxSizing&&"border-box"===na.css(a,"boxSizing",!1,e),e):0)}}}),la.opacity||(na.cssHooks.opacity={get:function(a,b){
// IE uses filters for opacity
return sb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=na.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";
// IE has trouble with opacity if it does not have layout
// Force it by setting the zoom level
c.zoom=1,
// if setting opacity to 1, and no other filters exist -
// attempt to remove filter attribute #6652
// if value === "", then remove inline opacity #12685
(b>=1||""===b)&&""===na.trim(f.replace(rb,""))&&c.removeAttribute&&(
// Setting style.filter to null, "" & " " still leave "filter:" in the cssText
// if "filter:" is present at all, clearType is disabled, we want to avoid this
// style.removeAttribute is IE Only, but so apparently is this code path...
c.removeAttribute("filter"),""===b||d&&!d.filter)||(
// otherwise, set new filter values
c.filter=rb.test(f)?f.replace(rb,e):f+" "+e)}}),na.cssHooks.marginRight=F(la.reliableMarginRight,function(a,b){if(b)return mb(a,{display:"inline-block"},pb,[a,"marginRight"])}),na.cssHooks.marginLeft=F(la.reliableMarginLeft,function(a,b){if(b)
// Support: IE<=11+
// Running getBoundingClientRect on a disconnected node in IE throws an error
// Support: IE8 only
// getClientRects() errors on disconnected elems
return(parseFloat(pb(a,"marginLeft"))||(na.contains(a.ownerDocument,a)?a.getBoundingClientRect().left-mb(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}):0))+"px"}),
// These hooks are used by animate to expand properties
na.each({margin:"",padding:"",border:"Width"},function(a,b){na.cssHooks[a+b]={expand:function(c){for(var d=0,e={},
// assumes a single number if not a string
f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+La[d]+b]=f[d]||f[d-2]||f[0];return e}},kb.test(a)||(na.cssHooks[a+b].set=I)}),na.fn.extend({css:function(a,b){return Na(this,function(a,b,c){var d,e,f={},g=0;if(na.isArray(b)){for(d=ob(a),e=b.length;g<e;g++)f[b[g]]=na.css(a,b[g],!1,d);return f}return void 0!==c?na.style(a,b,c):na.css(a,b)},a,b,arguments.length>1)},show:function(){return H(this,!0)},hide:function(){return H(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){Ma(this)?na(this).show():na(this).hide()})}}),na.Tween=L,L.prototype={constructor:L,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||na.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(na.cssNumber[c]?"":"px")},cur:function(){var a=L.propHooks[this.prop];return a&&a.get?a.get(this):L.propHooks._default.get(this)},run:function(a){var b,c=L.propHooks[this.prop];return this.options.duration?this.pos=b=na.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):L.propHooks._default.set(this),this}},L.prototype.init.prototype=L.prototype,L.propHooks={_default:{get:function(a){var b;
// Use a property on the element directly when it is not a DOM element,
// or when there is no matching style property that exists.
// Use a property on the element directly when it is not a DOM element,
// or when there is no matching style property that exists.
// passing an empty string as a 3rd parameter to .css will automatically
// attempt a parseFloat and fallback to a string if the parse fails
// so, simple values such as "10px" are parsed to Float.
// complex values such as "rotate(1rad)" are returned as is.
return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=na.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){
// use step hook for back compat - use cssHook if its there - use .style if its
// available and use plain properties where available
na.fx.step[a.prop]?na.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[na.cssProps[a.prop]]&&!na.cssHooks[a.prop]?a.elem[a.prop]=a.now:na.style(a.elem,a.prop,a.now+a.unit)}}},
// Support: IE <=9
// Panic based approach to setting things on disconnected nodes
L.propHooks.scrollTop=L.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},na.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},na.fx=L.prototype.init,
// Back Compat <1.8 extension point
na.fx.step={};var zb,Ab,Bb=/^(?:toggle|show|hide)$/,Cb=/queueHooks$/;na.Animation=na.extend(R,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return m(c.elem,a,Ka.exec(b),c),c}]},tweener:function(a,b){na.isFunction(a)?(b=a,a=["*"]):a=a.match(Da);for(var c,d=0,e=a.length;d<e;d++)c=a[d],R.tweeners[c]=R.tweeners[c]||[],R.tweeners[c].unshift(b)},prefilters:[P],prefilter:function(a,b){b?R.prefilters.unshift(a):R.prefilters.push(a)}}),na.speed=function(a,b,c){var d=a&&"object"==typeof a?na.extend({},a):{complete:c||!c&&b||na.isFunction(a)&&a,duration:a,easing:c&&b||b&&!na.isFunction(b)&&b};
// normalize opt.queue - true/undefined/null -> "fx"
// Queueing
return d.duration=na.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in na.fx.speeds?na.fx.speeds[d.duration]:na.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){na.isFunction(d.old)&&d.old.call(this),d.queue&&na.dequeue(this,d.queue)},d},na.fn.extend({fadeTo:function(a,b,c,d){
// show any hidden elements after setting opacity to 0
return this.filter(Ma).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=na.isEmptyObject(a),f=na.speed(b,c,d),g=function(){
// Operate on a copy of prop so per-property easing won't be lost
var b=R(this,na.extend({},a),f);
// Empty animations, or finishing resolves immediately
(e||na._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=na.timers,g=na._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Cb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));
// start the next in the queue if the last step wasn't forced
// timers currently will call their complete callbacks, which will dequeue
// but only if they were gotoEnd
!b&&c||na.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=na._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=na.timers,g=d?d.length:0;
// look for any active animations, and finish them
for(
// enable finishing flag on private data
c.finish=!0,
// empty the queue first
na.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));
// look for any animations in the old queue and finish them
for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);
// turn off finishing flag
delete c.finish})}}),na.each(["toggle","show","hide"],function(a,b){var c=na.fn[b];na.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(N(b,!0),a,d,e)}}),
// Generate shortcuts for custom animations
na.each({slideDown:N("show"),slideUp:N("hide"),slideToggle:N("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){na.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),na.timers=[],na.fx.tick=function(){var a,b=na.timers,c=0;for(zb=na.now();c<b.length;c++)a=b[c],
// Checks the timer has not already been removed
a()||b[c]!==a||b.splice(c--,1);b.length||na.fx.stop(),zb=void 0},na.fx.timer=function(a){na.timers.push(a),a()?na.fx.start():na.timers.pop()},na.fx.interval=13,na.fx.start=function(){Ab||(Ab=a.setInterval(na.fx.tick,na.fx.interval))},na.fx.stop=function(){a.clearInterval(Ab),Ab=null},na.fx.speeds={slow:600,fast:200,
// Default speed
_default:400},
// Based off of the plugin by Clint Helfers, with permission.
// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
na.fn.delay=function(b,c){return b=na.fx?na.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a,b=da.createElement("input"),c=da.createElement("div"),d=da.createElement("select"),e=d.appendChild(da.createElement("option"));
// Setup
c=da.createElement("div"),c.setAttribute("className","t"),c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],
// Support: Windows Web Apps (WWA)
// `type` must use .setAttribute for WWA (#14901)
b.setAttribute("type","checkbox"),c.appendChild(b),a=c.getElementsByTagName("a")[0],
// First batch of tests.
a.style.cssText="top:1px",
// Test setAttribute on camelCase class.
// If it works, we need attrFixes when doing get/setAttribute (ie6/7)
la.getSetAttribute="t"!==c.className,
// Get the style information from getAttribute
// (IE uses .cssText instead)
la.style=/top/.test(a.getAttribute("style")),
// Make sure that URLs aren't manipulated
// (IE normalizes it by default)
la.hrefNormalized="/a"===a.getAttribute("href"),
// Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
la.checkOn=!!b.value,
// Make sure that a selected-by-default option has a working selected property.
// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
la.optSelected=e.selected,
// Tests for enctype support on a form (#6743)
la.enctype=!!da.createElement("form").enctype,
// Make sure that the options inside disabled selects aren't marked as disabled
// (WebKit marks them as disabled)
d.disabled=!0,la.optDisabled=!e.disabled,
// Support: IE8 only
// Check if we can trust getAttribute("value")
b=da.createElement("input"),b.setAttribute("value",""),la.input=""===b.getAttribute("value"),
// Check if an input maintains its value after becoming a radio
b.value="t",b.setAttribute("type","radio"),la.radioValue="t"===b.value}();var Db=/\r/g,Eb=/[\x20\t\r\n\f]+/g;na.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=na.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,na(this).val()):a,
// Treat null/undefined as ""; convert numbers to string
null==e?e="":"number"==typeof e?e+="":na.isArray(e)&&(e=na.map(e,function(a){return null==a?"":a+""})),b=na.valHooks[this.type]||na.valHooks[this.nodeName.toLowerCase()],
// If set returns undefined, fall back to normal setting
b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)
// handle most common string cases
// handle cases where value is null/undef or number
return b=na.valHooks[e.type]||na.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(Db,""):null==c?"":c)}}}),na.extend({valHooks:{option:{get:function(a){var b=na.find.attr(a,"value");
// Support: IE10-11+
// option.text throws exceptions (#14686, #14858)
// Strip and collapse whitespace
// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
return null!=b?b:na.trim(na.text(a)).replace(Eb," ")}},select:{get:function(a){
// Loop through all the selected options
for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||e<0,g=f?null:[],h=f?e+1:d.length,i=e<0?h:f?e:0;i<h;i++)
// oldIE doesn't update selected after form reset (#2551)
if(c=d[i],(c.selected||i===e)&&(
// Don't return options that are disabled or in a disabled optgroup
la.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!na.nodeName(c.parentNode,"optgroup"))){
// We don't need an array for one selects
if(
// Get the specific value for the option
b=na(c).val(),f)return b;
// Multi-Selects return an array
g.push(b)}return g},set:function(a,b){for(var c,d,e=a.options,f=na.makeArray(b),g=e.length;g--;)if(d=e[g],na.inArray(na.valHooks.option.get(d),f)>-1)
// Support: IE6
// When new option element is added to select box we need to
// force reflow of newly added node in order to workaround delay
// of initialization properties
try{d.selected=c=!0}catch(h){
// Will be executed only in IE6
d.scrollHeight}else d.selected=!1;
// Force browsers to behave consistently when non-matching value is set
return c||(a.selectedIndex=-1),e}}}}),
// Radios and checkboxes getter/setter
na.each(["radio","checkbox"],function(){na.valHooks[this]={set:function(a,b){if(na.isArray(b))return a.checked=na.inArray(na(a).val(),b)>-1}},la.checkOn||(na.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var Fb,Gb,Hb=na.expr.attrHandle,Ib=/^(?:checked|selected)$/i,Jb=la.getSetAttribute,Kb=la.input;na.fn.extend({attr:function(a,b){return Na(this,na.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){na.removeAttr(this,a)})}}),na.extend({attr:function(a,b,c){var d,e,f=a.nodeType;
// Don't get/set attributes on text, comment and attribute nodes
if(3!==f&&8!==f&&2!==f)
// Fallback to prop when attributes are not supported
// Fallback to prop when attributes are not supported
// All attributes are lowercase
// Grab necessary hook if one is defined
return"undefined"==typeof a.getAttribute?na.prop(a,b,c):(1===f&&na.isXMLDoc(a)||(b=b.toLowerCase(),e=na.attrHooks[b]||(na.expr.match.bool.test(b)?Gb:Fb)),void 0!==c?null===c?void na.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=na.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!la.radioValue&&"radio"===b&&na.nodeName(a,"input")){
// Setting the type on a radio button after the value resets the value in IE8-9
// Reset value to default in case type is set after value during creation
var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(Da);if(f&&1===a.nodeType)for(;c=f[e++];)d=na.propFix[c]||c,
// Boolean attributes get special treatment (#10870)
na.expr.match.bool.test(c)?
// Set corresponding property to false
Kb&&Jb||!Ib.test(c)?a[d]=!1:a[na.camelCase("default-"+c)]=a[d]=!1:na.attr(a,c,""),a.removeAttribute(Jb?c:d)}}),
// Hooks for boolean attributes
Gb={set:function(a,b,c){
// Remove boolean attributes when set to false
// IE<8 needs the *property* name
// Support: IE<9
// Use defaultChecked and defaultSelected for oldIE
return b===!1?na.removeAttr(a,c):Kb&&Jb||!Ib.test(c)?a.setAttribute(!Jb&&na.propFix[c]||c,c):a[na.camelCase("default-"+c)]=a[c]=!0,c}},na.each(na.expr.match.bool.source.match(/\w+/g),function(a,b){var c=Hb[b]||na.find.attr;Kb&&Jb||!Ib.test(b)?Hb[b]=function(a,b,d){var e,f;
// Avoid an infinite loop by temporarily removing this function from the getter
return d||(f=Hb[b],Hb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,Hb[b]=f),e}:Hb[b]=function(a,b,c){if(!c)return a[na.camelCase("default-"+b)]?b.toLowerCase():null}}),
// fix oldIE attroperties
Kb&&Jb||(na.attrHooks.value={set:function(a,b,c){
// Does not return so that setAttribute is also used
return na.nodeName(a,"input")?void(a.defaultValue=b):Fb&&Fb.set(a,b,c)}}),
// IE6/7 do not support getting/setting some attributes with get/setAttribute
Jb||(
// Use this for any attribute in IE6/7
// This fixes almost every IE6/7 issue
Fb={set:function(a,b,c){
// Set the existing or create a new attribute node
var d=a.getAttributeNode(c);
// Break association with cloned elements by also using setAttribute (#9646)
if(d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c))return b}},
// Some attributes are constructed with empty-string values when not defined
Hb.id=Hb.name=Hb.coords=function(a,b,c){var d;if(!c)return(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},
// Fixing value retrieval on a button requires this module
na.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);if(c&&c.specified)return c.value},set:Fb.set},
// Set contenteditable to false on removals(#10429)
// Setting to empty string throws an error as an invalid value
na.attrHooks.contenteditable={set:function(a,b,c){Fb.set(a,""!==b&&b,c)}},
// Set width and height to auto instead of 0 on empty string( Bug #8150 )
// This is for removals
na.each(["width","height"],function(a,b){na.attrHooks[b]={set:function(a,c){if(""===c)return a.setAttribute(b,"auto"),c}}})),la.style||(na.attrHooks.style={get:function(a){
// Return undefined in the case of empty string
// Note: IE uppercases css property names, but if we were to .toLowerCase()
// .cssText, that would destroy case sensitivity in URL's, like in "background"
return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var Lb=/^(?:input|select|textarea|button|object)$/i,Mb=/^(?:a|area)$/i;na.fn.extend({prop:function(a,b){return Na(this,na.prop,a,b,arguments.length>1)},removeProp:function(a){return a=na.propFix[a]||a,this.each(function(){
// try/catch handles cases where IE balks (such as removing a property on window)
try{this[a]=void 0,delete this[a]}catch(b){}})}}),na.extend({prop:function(a,b,c){var d,e,f=a.nodeType;
// Don't get/set properties on text, comment and attribute nodes
if(3!==f&&8!==f&&2!==f)
// Fix name and attach hooks
return 1===f&&na.isXMLDoc(a)||(b=na.propFix[b]||b,e=na.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){
// elem.tabIndex doesn't always return the
// correct value when it hasn't been explicitly set
// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
// Use proper attribute retrieval(#12072)
var b=na.find.attr(a,"tabindex");return b?parseInt(b,10):Lb.test(a.nodeName)||Mb.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),
// Some attributes require a special call on IE
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
la.hrefNormalized||
// href/src property should get the full normalized URL (#10299/#12915)
na.each(["href","src"],function(a,b){na.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),
// Support: Safari, IE9+
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
la.optSelected||(na.propHooks.selected={get:function(a){var b=a.parentNode;
// Make sure that it also works with optgroups, see #5701
return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),na.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){na.propFix[this.toLowerCase()]=this}),
// IE6/7 call enctype encoding
la.enctype||(na.propFix.enctype="encoding");var Nb=/[\t\r\n\f]/g;na.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(na.isFunction(a))return this.each(function(b){na(this).addClass(a.call(this,b,S(this)))});if("string"==typeof a&&a)for(b=a.match(Da)||[];c=this[i++];)if(e=S(c),d=1===c.nodeType&&(" "+e+" ").replace(Nb," ")){for(g=0;f=b[g++];)d.indexOf(" "+f+" ")<0&&(d+=f+" ");
// only assign if different to avoid unneeded rendering.
h=na.trim(d),e!==h&&na.attr(c,"class",h)}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(na.isFunction(a))return this.each(function(b){na(this).removeClass(a.call(this,b,S(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a)for(b=a.match(Da)||[];c=this[i++];)if(e=S(c),
// This expression is here for better compressibility (see addClass)
d=1===c.nodeType&&(" "+e+" ").replace(Nb," ")){for(g=0;f=b[g++];)
// Remove *all* instances
for(;d.indexOf(" "+f+" ")>-1;)d=d.replace(" "+f+" "," ");
// Only assign if different to avoid unneeded rendering.
h=na.trim(d),e!==h&&na.attr(c,"class",h)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):na.isFunction(a)?this.each(function(c){na(this).toggleClass(a.call(this,c,S(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c)for(
// Toggle individual class names
d=0,e=na(this),f=a.match(Da)||[];b=f[d++];)
// Check each className given, space separated list
e.hasClass(b)?e.removeClass(b):e.addClass(b);else void 0!==a&&"boolean"!==c||(b=S(this),b&&
// store className if set
na._data(this,"__className__",b),
// If the element has a class name or if we're passed "false",
// then remove the whole classname (if there was one, the above saved it).
// Otherwise bring back whatever was previously saved (if anything),
// falling back to the empty string if nothing was stored.
na.attr(this,"class",b||a===!1?"":na._data(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;for(b=" "+a+" ";c=this[d++];)if(1===c.nodeType&&(" "+S(c)+" ").replace(Nb," ").indexOf(b)>-1)return!0;return!1}}),
// Return jQuery for attributes-only inclusion
na.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){
// Handle event binding
na.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),na.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Ob=a.location,Pb=na.now(),Qb=/\?/,Rb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;na.parseJSON=function(b){
// Attempt to parse using the native JSON parser first
if(a.JSON&&a.JSON.parse)
// Support: Android 2.3
// Workaround failure to string-cast null input
return a.JSON.parse(b+"");var c,d=null,e=na.trim(b+"");
// Guard against invalid (and possibly dangerous) input by ensuring that nothing remains
// after removing valid tokens
return e&&!na.trim(e.replace(Rb,function(a,b,e,f){
// Perform no more replacements after returning to outermost depth
// Force termination if we see a misplaced comma
// Perform no more replacements after returning to outermost depth
// Commas must not follow "[", "{", or ","
// Determine new depth
// array/object open ("[" or "{"): depth += true - false (increment)
// array/object close ("]" or "}"): depth += false - true (decrement)
// other cases ("," or primitive): depth += true - true (numeric cast)
return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():na.error("Invalid JSON: "+b)},
// Cross-browser xml parsing
na.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(// Standard
d=new a.DOMParser,c=d.parseFromString(b,"text/xml")):(// IE
c=new a.ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||na.error("Invalid XML: "+b),c};var Sb=/#.*$/,Tb=/([?&])_=[^&]*/,
// IE leaves an \r character at EOL
Ub=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
// #7653, #8125, #8152: local protocol detection
Vb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Wb=/^(?:GET|HEAD)$/,Xb=/^\/\//,Yb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
Zb={},/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
$b={},
// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
_b="*/".concat("*"),
// Document location
ac=Ob.href,
// Segment location into parts
bc=Yb.exec(ac.toLowerCase())||[];na.extend({
// Counter for holding the number of active queries
active:0,
// Last-Modified header cache for next request
lastModified:{},etag:{},ajaxSettings:{url:ac,type:"GET",isLocal:Vb.test(bc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/
accepts:{"*":_b,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},
// Data converters
// Keys separate source (or catchall "*") and destination types with a single space
converters:{
// Convert anything to text
"* text":String,
// Text to html (true = no transformation)
"text html":!0,
// Evaluate text as a json expression
"text json":na.parseJSON,
// Parse text as xml
"text xml":na.parseXML},
// For options that shouldn't be deep extended:
// you can add your own custom options here if
// and when you create one that shouldn't be
// deep extended (see ajaxExtend)
flatOptions:{url:!0,context:!0}},
// Creates a full fledged settings object into target
// with both ajaxSettings and settings fields.
// If target is omitted, writes into ajaxSettings.
ajaxSetup:function(a,b){
// Building a settings object
// Extending ajaxSettings
return b?V(V(a,na.ajaxSettings),b):V(na.ajaxSettings,a)},ajaxPrefilter:T(Zb),ajaxTransport:T($b),
// Main method
ajax:function(b,c){
// Callback for when everything is done
function d(b,c,d,e){var f,l,s,t,v,x=c;
// Called once
2!==u&&(
// State is "done" now
u=2,
// Clear timeout if it exists
i&&a.clearTimeout(i),
// Dereference transport for early garbage collection
// (no matter how long the jqXHR object will be used)
k=void 0,
// Cache response headers
h=e||"",
// Set readyState
w.readyState=b>0?4:0,
// Determine if successful
f=b>=200&&b<300||304===b,
// Get response data
d&&(t=W(m,w,d)),
// Convert no matter what (that way responseXXX fields are always set)
t=X(m,t,w,f),
// If successful, handle type chaining
f?(
// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
m.ifModified&&(v=w.getResponseHeader("Last-Modified"),v&&(na.lastModified[g]=v),v=w.getResponseHeader("etag"),v&&(na.etag[g]=v)),
// if no content
204===b||"HEAD"===m.type?x="nocontent":304===b?x="notmodified":(x=t.state,l=t.data,s=t.error,f=!s)):(
// We extract error from statusText
// then normalize statusText and status for non-aborts
s=x,!b&&x||(x="error",b<0&&(b=0))),
// Set data for the fake xhr object
w.status=b,w.statusText=(c||x)+"",
// Success/Error
f?p.resolveWith(n,[l,x,w]):p.rejectWith(n,[w,x,s]),
// Status-dependent callbacks
w.statusCode(r),r=void 0,j&&o.trigger(f?"ajaxSuccess":"ajaxError",[w,m,f?l:s]),
// Complete
q.fireWith(n,[w,x]),j&&(o.trigger("ajaxComplete",[w,m]),
// Handle the global AJAX counter
--na.active||na.event.trigger("ajaxStop")))}
// If url is an object, simulate pre-1.5 signature
"object"==typeof b&&(c=b,b=void 0),
// Force options to be an object
c=c||{};var
// Cross-domain detection vars
e,
// Loop variable
f,
// URL without anti-cache param
g,
// Response headers as string
h,
// timeout handle
i,
// To know if global events are to be dispatched
j,k,
// Response headers
l,
// Create the final options object
m=na.ajaxSetup({},c),
// Callbacks context
n=m.context||m,
// Context for global events is callbackContext if it is a DOM node or jQuery collection
o=m.context&&(n.nodeType||n.jquery)?na(n):na.event,
// Deferreds
p=na.Deferred(),q=na.Callbacks("once memory"),
// Status-dependent callbacks
r=m.statusCode||{},
// Headers (they are sent all at once)
s={},t={},
// The jqXHR state
u=0,
// Default abort message
v="canceled",
// Fake xhr
w={readyState:0,
// Builds headers hashtable if needed
getResponseHeader:function(a){var b;if(2===u){if(!l)for(l={};b=Ub.exec(h);)l[b[1].toLowerCase()]=b[2];b=l[a.toLowerCase()]}return null==b?null:b},
// Raw string
getAllResponseHeaders:function(){return 2===u?h:null},
// Caches the header
setRequestHeader:function(a,b){var c=a.toLowerCase();return u||(a=t[c]=t[c]||a,s[a]=b),this},
// Overrides response content-type header
overrideMimeType:function(a){return u||(m.mimeType=a),this},
// Status-dependent callbacks
statusCode:function(a){var b;if(a)if(u<2)for(b in a)
// Lazy-add the new callback in a way that preserves old ones
r[b]=[r[b],a[b]];else
// Execute the appropriate callbacks
w.always(a[w.status]);return this},
// Cancel the request
abort:function(a){var b=a||v;return k&&k.abort(b),d(0,b),this}};
// If request was aborted inside a prefilter, stop there
if(
// Attach deferreds
p.promise(w).complete=q.add,w.success=w.done,w.error=w.fail,
// Remove hash character (#7531: and string promotion)
// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
// Handle falsy url in the settings object (#10093: consistency with old signature)
// We also use the url parameter if available
m.url=((b||m.url||ac)+"").replace(Sb,"").replace(Xb,bc[1]+"//"),
// Alias method option to type as per ticket #12004
m.type=c.method||c.type||m.method||m.type,
// Extract dataTypes list
m.dataTypes=na.trim(m.dataType||"*").toLowerCase().match(Da)||[""],
// A cross-domain request is in order when we have a protocol:host:port mismatch
null==m.crossDomain&&(e=Yb.exec(m.url.toLowerCase()),m.crossDomain=!(!e||e[1]===bc[1]&&e[2]===bc[2]&&(e[3]||("http:"===e[1]?"80":"443"))===(bc[3]||("http:"===bc[1]?"80":"443")))),
// Convert data if not already a string
m.data&&m.processData&&"string"!=typeof m.data&&(m.data=na.param(m.data,m.traditional)),
// Apply prefilters
U(Zb,m,c,w),2===u)return w;
// We can fire global events as of now if asked to
// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
j=na.event&&m.global,
// Watch for a new set of requests
j&&0===na.active++&&na.event.trigger("ajaxStart"),
// Uppercase the type
m.type=m.type.toUpperCase(),
// Determine if request has content
m.hasContent=!Wb.test(m.type),
// Save the URL in case we're toying with the If-Modified-Since
// and/or If-None-Match header later on
g=m.url,
// More options handling for requests with no content
m.hasContent||(
// If data is available, append data to url
m.data&&(g=m.url+=(Qb.test(g)?"&":"?")+m.data,
// #9682: remove data so that it's not used in an eventual retry
delete m.data),
// Add anti-cache in url if needed
m.cache===!1&&(m.url=Tb.test(g)?
// If there is already a '_' parameter, set its value
g.replace(Tb,"$1_="+Pb++):
// Otherwise add one to the end
g+(Qb.test(g)?"&":"?")+"_="+Pb++)),
// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
m.ifModified&&(na.lastModified[g]&&w.setRequestHeader("If-Modified-Since",na.lastModified[g]),na.etag[g]&&w.setRequestHeader("If-None-Match",na.etag[g])),
// Set the correct header, if data is being sent
(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&w.setRequestHeader("Content-Type",m.contentType),
// Set the Accepts header for the server, depending on the dataType
w.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+_b+"; q=0.01":""):m.accepts["*"]);
// Check for headers option
for(f in m.headers)w.setRequestHeader(f,m.headers[f]);
// Allow custom headers/mimetypes and early abort
if(m.beforeSend&&(m.beforeSend.call(n,w,m)===!1||2===u))
// Abort if not done already and return
return w.abort();
// aborting is no longer a cancellation
v="abort";
// Install callbacks on deferreds
for(f in{success:1,error:1,complete:1})w[f](m[f]);
// If no transport, we auto-abort
if(
// Get transport
k=U($b,m,c,w)){
// If request was aborted inside ajaxSend, stop there
if(w.readyState=1,
// Send global event
j&&o.trigger("ajaxSend",[w,m]),2===u)return w;
// Timeout
m.async&&m.timeout>0&&(i=a.setTimeout(function(){w.abort("timeout")},m.timeout));try{u=1,k.send(s,d)}catch(x){
// Propagate exception as error if not done
if(!(u<2))throw x;d(-1,x)}}else d(-1,"No Transport");return w},getJSON:function(a,b,c){return na.get(a,b,c,"json")},getScript:function(a,b){return na.get(a,void 0,b,"script")}}),na.each(["get","post"],function(a,b){na[b]=function(a,c,d,e){
// The url can be an options object (which then must have .url)
// shift arguments if data argument was omitted
return na.isFunction(c)&&(e=e||d,d=c,c=void 0),na.ajax(na.extend({url:a,type:b,dataType:e,data:c,success:d},na.isPlainObject(a)&&a))}}),na._evalUrl=function(a){return na.ajax({url:a,
// Make this explicit, since user can override this through ajaxSetup (#11264)
type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},na.fn.extend({wrapAll:function(a){if(na.isFunction(a))return this.each(function(b){na(this).wrapAll(a.call(this,b))});if(this[0]){
// The elements to wrap the target around
var b=na(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){for(var a=this;a.firstChild&&1===a.firstChild.nodeType;)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return na.isFunction(a)?this.each(function(b){na(this).wrapInner(a.call(this,b))}):this.each(function(){var b=na(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=na.isFunction(a);return this.each(function(c){na(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){na.nodeName(this,"body")||na(this).replaceWith(this.childNodes)}).end()}}),na.expr.filters.hidden=function(a){
// Support: Opera <= 12.12
// Opera reports offsetWidths and offsetHeights less than zero on some elements
return la.reliableHiddenOffsets()?a.offsetWidth<=0&&a.offsetHeight<=0&&!a.getClientRects().length:Z(a)},na.expr.filters.visible=function(a){return!na.expr.filters.hidden(a)};var cc=/%20/g,dc=/\[\]$/,ec=/\r?\n/g,fc=/^(?:submit|button|image|reset|file)$/i,gc=/^(?:input|select|textarea|keygen)/i;
// Serialize an array of form elements or a set of
// key/values into a query string
na.param=function(a,b){var c,d=[],e=function(a,b){
// If value is a function, invoke it and return its value
b=na.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};
// If an array was passed in, assume that it is an array of form elements.
if(
// Set traditional to true for jQuery <= 1.3.2 behavior.
void 0===b&&(b=na.ajaxSettings&&na.ajaxSettings.traditional),na.isArray(a)||a.jquery&&!na.isPlainObject(a))
// Serialize the form elements
na.each(a,function(){e(this.name,this.value)});else
// If traditional, encode the "old" way (the way 1.3.2 or older
// did it), otherwise encode params recursively.
for(c in a)$(c,a[c],b,e);
// Return the resulting serialization
return d.join("&").replace(cc,"+")},na.fn.extend({serialize:function(){return na.param(this.serializeArray())},serializeArray:function(){return this.map(function(){
// Can add propHook for "elements" to filter or add form elements
var a=na.prop(this,"elements");return a?na.makeArray(a):this}).filter(function(){var a=this.type;
// Use .is(":disabled") so that fieldset[disabled] works
return this.name&&!na(this).is(":disabled")&&gc.test(this.nodeName)&&!fc.test(a)&&(this.checked||!Oa.test(a))}).map(function(a,b){var c=na(this).val();return null==c?null:na.isArray(c)?na.map(c,function(a){return{name:b.name,value:a.replace(ec,"\r\n")}}):{name:b.name,value:c.replace(ec,"\r\n")}}).get()}}),
// Create the request object
// (This is still attached to ajaxSettings for backward compatibility)
na.ajaxSettings.xhr=void 0!==a.ActiveXObject?
// Support: IE6-IE8
function(){
// XHR cannot access local files, always use ActiveX for that case
// XHR cannot access local files, always use ActiveX for that case
// Support: IE 9-11
// IE seems to error on cross-domain PATCH requests when ActiveX XHR
// is used. In IE 9+ always use the native XHR.
// Note: this condition won't catch Edge as it doesn't define
// document.documentMode but it also doesn't support ActiveX so it won't
// reach this code.
return this.isLocal?aa():da.documentMode>8?_():/^(get|post|head|put|delete|options)$/i.test(this.type)&&_()||aa()}:
// For all other browsers, use the standard XMLHttpRequest object
_;var hc=0,ic={},jc=na.ajaxSettings.xhr();
// Support: IE<10
// Open requests must be manually aborted on unload (#5280)
// See https://support.microsoft.com/kb/2856746 for more info
a.attachEvent&&a.attachEvent("onunload",function(){for(var a in ic)ic[a](void 0,!0)}),
// Determine support properties
la.cors=!!jc&&"withCredentials"in jc,jc=la.ajax=!!jc,
// Create transport if the browser can provide an xhr
jc&&na.ajaxTransport(function(b){
// Cross domain only allowed if supported through XMLHttpRequest
if(!b.crossDomain||la.cors){var c;return{send:function(d,e){var f,g=b.xhr(),h=++hc;
// Apply custom fields if provided
if(
// Open the socket
g.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(f in b.xhrFields)g[f]=b.xhrFields[f];
// Override mime type if needed
b.mimeType&&g.overrideMimeType&&g.overrideMimeType(b.mimeType),
// X-Requested-With header
// For cross-domain requests, seeing as conditions for a preflight are
// akin to a jigsaw puzzle, we simply never set it to be sure.
// (it can always be set on a per-request basis or even using ajaxSetup)
// For same-domain requests, won't change header if already provided.
b.crossDomain||d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest");
// Set headers
for(f in d)
// Support: IE<9
// IE's ActiveXObject throws a 'Type Mismatch' exception when setting
// request header to a null-value.
//
// To keep consistent with other XHR implementations, cast the value
// to string and ignore `undefined`.
void 0!==d[f]&&g.setRequestHeader(f,d[f]+"");
// Do send the request
// This may raise an exception which is actually
// handled in jQuery.ajax (so no try/catch here)
g.send(b.hasContent&&b.data||null),
// Listener
c=function(a,d){var f,i,j;
// Was never called and is aborted or complete
if(c&&(d||4===g.readyState))
// Abort manually if needed
if(
// Clean up
delete ic[h],c=void 0,g.onreadystatechange=na.noop,d)4!==g.readyState&&g.abort();else{j={},f=g.status,
// Support: IE<10
// Accessing binary-data responseText throws an exception
// (#11426)
"string"==typeof g.responseText&&(j.text=g.responseText);
// Firefox throws an exception when accessing
// statusText for faulty cross-domain requests
try{i=g.statusText}catch(k){
// We normalize with Webkit giving an empty statusText
i=""}
// Filter status for non standard behaviors
// If the request is local and we have data: assume a success
// (success with no data won't get notified, that's the best we
// can do given current implementations)
f||!b.isLocal||b.crossDomain?1223===f&&(f=204):f=j.text?200:404}
// Call complete if needed
j&&e(f,i,j,g.getAllResponseHeaders())},
// Do send the request
// `xhr.send` may raise an exception, but it will be
// handled in jQuery.ajax (so no try/catch here)
b.async?4===g.readyState?
// (IE6 & IE7) if it's in cache and has been
// retrieved directly we need to fire the callback
a.setTimeout(c):
// Register the callback, but delay it in case `xhr.send` throws
// Add to the list of active xhr callbacks
g.onreadystatechange=ic[h]=c:
// If we're in sync mode we fire the callback
c()},abort:function(){c&&c(void 0,!0)}}}}),
// Install script dataType
na.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return na.globalEval(a),a}}}),
// Handle cache's special case and global
na.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),
// Bind script tag hack transport
na.ajaxTransport("script",function(a){
// This transport only deals with cross domain requests
if(a.crossDomain){var b,c=da.head||na("head")[0]||da.documentElement;return{send:function(d,e){b=da.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,
// Attach handlers for all browsers
b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(
// Handle memory leak in IE
b.onload=b.onreadystatechange=null,
// Remove the script
b.parentNode&&b.parentNode.removeChild(b),
// Dereference the script
b=null,
// Callback if not abort
c||e(200,"success"))},
// Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
// Use native DOM manipulation to avoid our domManip AJAX trickery
c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var kc=[],lc=/(=)\?(?=&|$)|\?\?/;
// Default jsonp settings
na.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=kc.pop()||na.expando+"_"+Pb++;return this[a]=!0,a}}),
// Detect, normalize options and install callbacks for jsonp requests
na.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(lc.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&lc.test(b.data)&&"data");
// Handle iff the expected data type is "jsonp" or we have a parameter to set
if(h||"jsonp"===b.dataTypes[0])
// Delegate to script
// Get callback name, remembering preexisting value associated with it
// Insert callback into url or form data
// Use data converter to retrieve json after script execution
// force json dataType
// Install callback
// Clean-up function (fires after converters)
return e=b.jsonpCallback=na.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(lc,"$1"+e):b.jsonp!==!1&&(b.url+=(Qb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||na.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){
// If previous value didn't exist - remove it
void 0===f?na(a).removeProp(e):a[e]=f,
// Save back as free
b[e]&&(
// make sure that re-using the options doesn't screw things around
b.jsonpCallback=c.jsonpCallback,
// save the callback name for future use
kc.push(e)),
// Call if it was a function and we have a response
g&&na.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),
// data: string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
na.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||da;var d=wa.exec(a),e=!c&&[];
// Single tag
// Single tag
return d?[b.createElement(d[1])]:(d=r([a],b,e),e&&e.length&&na(e).remove(),na.merge([],d.childNodes))};
// Keep a copy of the old load method
var mc=na.fn.load;/**
 * Load a url into a page
 */
na.fn.load=function(a,b,c){if("string"!=typeof a&&mc)return mc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");
// If it's a function
// We assume that it's the callback
// If we have elements to modify, make the request
return h>-1&&(d=na.trim(a.slice(h,a.length)),a=a.slice(0,h)),na.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&na.ajax({url:a,
// If "type" variable is undefined, then "GET" method will be used.
// Make value of this field explicit since
// user can override it through ajaxSetup method
type:e||"GET",dataType:"html",data:b}).done(function(a){
// Save response for use in complete callback
f=arguments,g.html(d?
// If a selector was specified, locate the right elements in a dummy div
// Exclude scripts to avoid IE 'Permission Denied' errors
na("<div>").append(na.parseHTML(a)).find(d):
// Otherwise use the full result
a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},
// Attach a bunch of functions for handling common AJAX events
na.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){na.fn[b]=function(a){return this.on(b,a)}}),na.expr.filters.animated=function(a){return na.grep(na.timers,function(b){return a===b.elem}).length},na.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=na.css(a,"position"),l=na(a),m={};
// set position first, in-case top/left are set even on static elem
"static"===k&&(a.style.position="relative"),h=l.offset(),f=na.css(a,"top"),i=na.css(a,"left"),j=("absolute"===k||"fixed"===k)&&na.inArray("auto",[f,i])>-1,
// need to be able to calculate position if either top or left
// is auto and position is either absolute or fixed
j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),na.isFunction(b)&&(
// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
b=b.call(a,c,na.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},na.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){na.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)
// Make sure it's not a disconnected DOM node
// Make sure it's not a disconnected DOM node
// If we don't have gBCR, just use 0,0 rather than error
// BlackBerry 5, iOS 3 (original iPhone)
return b=f.documentElement,na.contains(b,e)?("undefined"!=typeof e.getBoundingClientRect&&(d=e.getBoundingClientRect()),c=ba(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];
// Subtract parent offsets and element margins
// note: when an element has margin: auto the offsetLeft and marginLeft
// are the same in Safari causing offset.left to incorrectly be 0
// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
// because it is its only offset parent
// we assume that getBoundingClientRect is available when computed position is fixed
// Get *real* offsetParent
// Get correct offsets
// Add offsetParent borders
return"fixed"===na.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),na.nodeName(a[0],"html")||(c=a.offset()),c.top+=na.css(a[0],"borderTopWidth",!0),c.left+=na.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-na.css(d,"marginTop",!0),left:b.left-c.left-na.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent;a&&!na.nodeName(a,"html")&&"static"===na.css(a,"position");)a=a.offsetParent;return a||nb})}}),
// Create scrollLeft and scrollTop methods
na.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);na.fn[a]=function(d){return Na(this,function(a,d,e){var f=ba(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?na(f).scrollLeft():e,c?e:na(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),
// Support: Safari<7-8+, Chrome<37-44+
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// getComputedStyle returns percent when specified for top/left/bottom/right
// rather than make the css module depend on the offset module, we just check for it here
na.each(["top","left"],function(a,b){na.cssHooks[b]=F(la.pixelPosition,function(a,c){if(c)
// if curCSS returns percentage, fallback to offset
return c=pb(a,b),lb.test(c)?na(a).position()[b]+"px":c})}),
// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
na.each({Height:"height",Width:"width"},function(a,b){na.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){
// margin is only for outerHeight, outerWidth
na.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return Na(this,function(b,c,d){var e;
// Get document width or height
// Get width or height on the element, requesting but not forcing parseFloat
// Set width or height on the element
return na.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?na.css(b,c,g):na.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),na.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){
// ( namespace ) or ( selector, types [, fn] )
return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),
// The number of elements contained in the matched element set
na.fn.size=function(){return this.length},na.fn.andSelf=na.fn.addBack,
// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.
// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
"function"==typeof define&&define.amd&&define("jquery",[],function(){return na});var
// Map over jQuery in case of overwrite
nc=a.jQuery,
// Map over the $ in case of overwrite
oc=a.$;
// Expose jQuery and $ identifiers, even in
// AMD (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
return na.noConflict=function(b){return a.$===na&&(a.$=oc),b&&a.jQuery===na&&(a.jQuery=nc),na},b||(a.jQuery=a.$=na),na})},{}],26:[function(a,b,c){(function(a){!function(d){/*--------------------------------------------------------------------------*/
/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
function e(a){throw new RangeError(H[a])}/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
function f(a,b){for(var c=a.length,d=[];c--;)d[c]=b(a[c]);return d}/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
function g(a,b){var c=a.split("@"),d="";c.length>1&&(
// In email addresses, only the domain name should be punycoded. Leave
// the local part (i.e. everything up to `@`) intact.
d=c[0]+"@",a=c[1]),
// Avoid `split(regex)` for IE8 compatibility. See #17.
a=a.replace(G,".");var e=a.split("."),g=f(e,b).join(".");return d+g}/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
function h(a){for(var b,c,d=[],e=0,f=a.length;e<f;)b=a.charCodeAt(e++),b>=55296&&b<=56319&&e<f?(
// high surrogate, and there is a next character
c=a.charCodeAt(e++),56320==(64512&c)?// low surrogate
d.push(((1023&b)<<10)+(1023&c)+65536):(
// unmatched surrogate; only append this code unit, in case the next
// code unit is the high surrogate of a surrogate pair
d.push(b),e--)):d.push(b);return d}/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
function i(a){return f(a,function(a){var b="";return a>65535&&(a-=65536,b+=K(a>>>10&1023|55296),a=56320|1023&a),b+=K(a)}).join("")}/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
function j(a){return a-48<10?a-22:a-65<26?a-65:a-97<26?a-97:w}/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
function k(a,b){
//  0..25 map to ASCII a..z or A..Z
// 26..35 map to ASCII 0..9
return a+22+75*(a<26)-((0!=b)<<5)}/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
function l(a,b,c){var d=0;for(a=c?J(a/A):a>>1,a+=J(a/b);a>I*y>>1;d+=w)a=J(a/I);return J(d+(I+1)*a/(a+z))}/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
function m(a){
// Don't use UCS-2
var b,c,d,f,g,h,k,m,n,/** Cached calculation results */
o,p=[],q=a.length,r=0,s=C,t=B;for(
// Handle the basic code points: let `basic` be the number of input code
// points before the last delimiter, or `0` if there is none, then copy
// the first basic code points to the output.
c=a.lastIndexOf(D),c<0&&(c=0),d=0;d<c;++d)
// if it's not a basic code point
a.charCodeAt(d)>=128&&e("not-basic"),p.push(a.charCodeAt(d));
// Main decoding loop: start just after the last delimiter if any basic code
// points were copied; start at the beginning otherwise.
for(f=c>0?c+1:0;f<q;){
// `index` is the index of the next character to be consumed.
// Decode a generalized variable-length integer into `delta`,
// which gets added to `i`. The overflow checking is easier
// if we increase `i` as we go, then subtract off its starting
// value at the end to obtain `delta`.
for(g=r,h=1,k=w;f>=q&&e("invalid-input"),m=j(a.charCodeAt(f++)),(m>=w||m>J((v-r)/h))&&e("overflow"),r+=m*h,n=k<=t?x:k>=t+y?y:k-t,!(m<n);k+=w)o=w-n,h>J(v/o)&&e("overflow"),h*=o;b=p.length+1,t=l(r-g,b,0==g),
// `i` was supposed to wrap around from `out` to `0`,
// incrementing `n` each time, so we'll fix that now:
J(r/b)>v-s&&e("overflow"),s+=J(r/b),r%=b,
// Insert `n` at position `i` of the output
p.splice(r++,0,s)}return i(p)}/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
function n(a){var b,c,d,f,g,i,j,m,n,o,p,/** `inputLength` will hold the number of code points in `input`. */
q,/** Cached calculation results */
r,s,t,u=[];
// Handle the basic code points
for(
// Convert the input in UCS-2 to Unicode
a=h(a),
// Cache the length
q=a.length,
// Initialize the state
b=C,c=0,g=B,i=0;i<q;++i)p=a[i],p<128&&u.push(K(p));
// Main encoding loop:
for(d=f=u.length,
// `handledCPCount` is the number of code points that have been handled;
// `basicLength` is the number of basic code points.
// Finish the basic string - if it is not empty - with a delimiter
f&&u.push(D);d<q;){
// All non-basic code points < n have been handled already. Find the next
// larger one:
for(j=v,i=0;i<q;++i)p=a[i],p>=b&&p<j&&(j=p);for(
// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
// but guard against overflow
r=d+1,j-b>J((v-c)/r)&&e("overflow"),c+=(j-b)*r,b=j,i=0;i<q;++i)if(p=a[i],p<b&&++c>v&&e("overflow"),p==b){
// Represent delta as a generalized variable-length integer
for(m=c,n=w;o=n<=g?x:n>=g+y?y:n-g,!(m<o);n+=w)t=m-o,s=w-o,u.push(K(k(o+t%s,0))),m=J(t/s);u.push(K(k(m,0))),g=l(c,r,d==f),c=0,++d}++c,++b}return u.join("")}/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
function o(a){return g(a,function(a){return E.test(a)?m(a.slice(4).toLowerCase()):a})}/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
function p(a){return g(a,function(a){return F.test(a)?"xn--"+n(a):a})}/** Detect free variables */
var q="object"==typeof c&&c&&!c.nodeType&&c,r="object"==typeof b&&b&&!b.nodeType&&b,s="object"==typeof a&&a;s.global!==s&&s.window!==s&&s.self!==s||(d=s);/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
var t,/** Temporary variable */
u,/** Highest positive signed 32-bit float value */
v=2147483647,// aka. 0x7FFFFFFF or 2^31-1
/** Bootstring parameters */
w=36,x=1,y=26,z=38,A=700,B=72,C=128,// 0x80
D="-",// '\x2D'
/** Regular expressions */
E=/^xn--/,F=/[^\x20-\x7E]/,// unprintable ASCII chars + non-ASCII chars
G=/[\x2E\u3002\uFF0E\uFF61]/g,// RFC 3490 separators
/** Error messages */
H={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},/** Convenience shortcuts */
I=w-x,J=Math.floor,K=String.fromCharCode;/** Expose `punycode` */
// Some AMD build optimizers, like r.js, check for specific condition patterns
// like the following:
if(/*--------------------------------------------------------------------------*/
/** Define the public API */
t={/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
version:"1.4.1",/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
ucs2:{decode:h,encode:i},decode:m,encode:n,toASCII:p,toUnicode:o},"function"==typeof define&&"object"==typeof define.amd&&define.amd)define("punycode",function(){return t});else if(q&&r)if(b.exports==q)
// in Node.js, io.js, or RingoJS v0.8.0+
r.exports=t;else
// in Narwhal or RingoJS v0.7.0-
for(u in t)t.hasOwnProperty(u)&&(q[u]=t[u]);else
// in Rhino or a web browser
d.punycode=t}(this)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],27:[function(a,b,c){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
"use strict";
// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function d(a,b){return Object.prototype.hasOwnProperty.call(a,b)}b.exports=function(a,b,c,f){b=b||"&",c=c||"=";var g={};if("string"!=typeof a||0===a.length)return g;var h=/\+/g;a=a.split(b);var i=1e3;f&&"number"==typeof f.maxKeys&&(i=f.maxKeys);var j=a.length;
// maxKeys <= 0 means that we should not limit keys count
i>0&&j>i&&(j=i);for(var k=0;k<j;++k){var l,m,n,o,p=a[k].replace(h,"%20"),q=p.indexOf(c);q>=0?(l=p.substr(0,q),m=p.substr(q+1)):(l=p,m=""),n=decodeURIComponent(l),o=decodeURIComponent(m),d(g,n)?e(g[n])?g[n].push(o):g[n]=[g[n],o]:g[n]=o}return g};var e=Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)}},{}],28:[function(a,b,c){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
"use strict";function d(a,b){if(a.map)return a.map(b);for(var c=[],d=0;d<a.length;d++)c.push(b(a[d],d));return c}var e=function(a){switch(typeof a){case"string":return a;case"boolean":return a?"true":"false";case"number":return isFinite(a)?a:"";default:return""}};b.exports=function(a,b,c,h){return b=b||"&",c=c||"=",null===a&&(a=void 0),"object"==typeof a?d(g(a),function(g){var h=encodeURIComponent(e(g))+c;return f(a[g])?d(a[g],function(a){return h+encodeURIComponent(e(a))}).join(b):h+encodeURIComponent(e(a[g]))}).join(b):h?encodeURIComponent(e(h))+c+encodeURIComponent(e(a)):""};var f=Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)},g=Object.keys||function(a){var b=[];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.push(c);return b}},{}],29:[function(a,b,c){"use strict";c.decode=c.parse=a("./decode"),c.encode=c.stringify=a("./encode")},{"./decode":27,"./encode":28}],30:[function(a,b,c){(function(a){(function(a,b,c,d,e){"use strict";!function(a){function b(){return a.Performance&&a.performance instanceof a.Performance}function c(){return a.performance.now()}function d(){return(new Date).getTime()}function e(a){return o.call(a,0)}function f(){a.ga||
// https://developers.google.com/analytics/devguides/collection/analyticsjs/
/* jshint ignore:start */
!function(a,b,c,d,e,f,g){a.GoogleAnalyticsObject=e,a[e]=a[e]||function(){(a[e].q=a[e].q||[]).push(arguments)},a[e].l=1*new Date,f=b.createElement(c),g=b.getElementsByTagName(c)[0],f.async=1,f.src=d,g.parentNode.insertBefore(f,g)}(window,document,"script","//www.google-analytics.com/analytics.js","ga")}function g(){var b=new RegExp("riot_cpa=([^;]*)"),c=b.exec(a.document.cookie);return!!c&&"true"===c[1]}function h(b,c){a.ga("create",b,{name:c})}function i(a){return!(a.indexOf("euw")>=0||a.indexOf("eune")>=0)||!!g()}function j(a){return new k(a)}function k(){this.init.apply(this,arguments)}var l,m=a.Riot=a.Riot||{},n=0,o=Array.prototype.slice;k.prototype={init:function(a){var b="ga"+1*new Date+ ++n;i(window.location.hostname)&&(f(),h(a,b)),this.name=b},
// return a function that, when called, will send a timing call to GA.
// Unfortunately GA requires length in bytes, but this should cover most
// use cases.
time:function(a,b,c){var d=l(),e=this;return function(){e.send("timing",a.substr(0,150),// Max length 150 bytes
b.substr(0,500),// Max length 500 bytes
Math.round(l()-d),// GA currently only accepts integers :(
c.substr(0,500))}},
// allow any type of GA call
call:function(){if(i(window.location.hostname)){var b=e(arguments);
// prefix the all unprefixed calls
-1===b[0].indexOf(".")&&(b[0]=this.name+"."+b[0]),
// call GA
a.ga.apply(null,b)}},
// add sugar for the most common type
send:function(){var a=e(arguments);a.unshift("send"),this.call.apply(this,a)},getGA:function(){return a.ga},getName:function(){return this.name}},l=b()?c:d,k.create=j,m.Tracker=k}(window),e("undefined"!=typeof Riot.Tracker?Riot.Tracker:window.Riot.Tracker)}).call(a,void 0,void 0,void 0,void 0,function(a){b.exports=a})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],31:[function(a,b,c){"use strict";var d=document.getElementById("config"),e=JSON.parse(d.innerHTML);b.exports=function(a){return e[a]}},{}],32:[function(a,b,c){"use strict";function d(){g(document.body).addClass("fonts-loaded"),o.resolve()}function e(){
// fail out with unformatted text, if necessary.
o.resolve()}/**
 * Auto-tracking module for RSO
 *
 * * Pings fonts.com with font usage if set
 * * Makes a GA page view if body attributes are set
 * 
 * @module core
 */
var f,g=a("jquery"),h=a("riot-ga-js"),i=a("./fonts"),j=a("./config"),k=a("fontfaceobserver/fontfaceobserver"),l=h.create(j("ga")),m=j("pageView"),n=j("fontProjectId"),o=new g.Deferred,p=document.fonts;if(m&&l.send("pageview",m),n&&i.init(n),p&&p.ready)f="function"==typeof p.ready?p.ready():p.ready,p.load("12px Spiegel-Regular","a"),p.load("12px BeaufortforLOL-Bold","a"),f.then(d,e);else{var q=new k("Spiegel-Regular"),r=new k("BeaufortforLOL-Bold");g.when(q.load(),r.load()).then(d,e)}c.tracker=l,c.fontsLoaded=o.promise()},{"./config":31,"./fonts":35,"fontfaceobserver/fontfaceobserver":2,jquery:25,"riot-ga-js":30}],33:[function(a,b,c){"use strict";/**
 * Sent when something goes wrong upstream.
 * @type {String}
 * @const
 */
c.SERVER_ERROR="server_error",/**
 * Sent when something goes wrong but we don't know what.
 * @type {String}
 * @const
 */
c.UNKNOWN_ERROR="unknown_error",/**
 
These codes are defined by OAuth
https://tools.ietf.org/html/rfc6749#section-4.1.2.1

**/
/**
 * The requested scope is invalid, unknown, or malformed.
 * 
 * @type {String}
 * @const
 */
c.INVALID_SCOPE="invalid_scope",/**

These codes are defined by OAuth
https://tools.ietf.org/html/rfc6749#section-5.2

**/
/**
 * The request is missing a required parameter, includes an
 * unsupported parameter value (other than grant type),
 * repeats a parameter, includes multiple credentials,
 * utilizes more than one mechanism for authenticating the
 * client, or is otherwise malformed.
 *
 * @type {String}
 * @const
 */
c.INVALID_REQUEST="invalid_request",/**
 * Client authentication failed (e.g., unknown client, no
 * client authentication included, or unsupported
 * authentication method).  The authorization server MAY
 * return an HTTP 401 (Unauthorized) status code to indicate
 * which HTTP authentication schemes are supported.  If the
 * client attempted to authenticate via the "Authorization"
 * request header field, the authorization server MUST
 * respond with an HTTP 401 (Unauthorized) status code and
 * include the "WWW-Authenticate" response header field
 * matching the authentication scheme used by the client.
 *
 * @type {String}
 * @const
 */
c.INVALID_CLIENT="invalid_client",/**
 * The provided authorization grant (e.g., authorization
 * code, resource owner credentials) or refresh token is
 * invalid, expired, revoked, does not match the redirection
 * URI used in the authorization request, or was issued to
 * another client.
 *
 * @type {String}
 * @const
 */
c.INVALID_GRANT="invalid_grant",/**
 * The authenticated client is not authorized to use this
 * authorization grant type.
 *
 * @type {String}
 * @const
 */
c.UNAUTHORIZED_CLIENT="unauthorized_client",/**
 * The authorization grant type is not supported by the
 * authorization server.
 *
 * @type {String}
 * @const
 */
c.UNSUPPORTED_GRANT_TYPE="unsupported_grant_type",c.INVALID_SESSION_ID_CODE="invalid_session_id",/**
 * The Authorization Server requires End-User authentication. This error MAY be
 * returned when the prompt parameter value in the Authentication Request is
 * none, but the Authentication Request cannot be completed without displaying a
 * user interface for End-User authentication.
 * 
 * @type {String}
 * @const
 */
c.LOGIN_REQUIRED="login_required",/**
 * The Authorization Server requires End-User consent. This error MAY be returned
 * when the prompt parameter value in the Authentication Request is none, but the
 * Authentication Request cannot be completed without displaying a user interface
 * for End-User consent.
 * 
 * @type {String}
 * @const
 */
c.CONSENT_REQUIRED="consent_required"},{}],34:[function(a,b,c){"use strict";/**

These descriptions are human-readable strings specific to our application.
The only requirement is that they are within the ASCII character set ranges
%x20-21 / %x23-5B / %x5D-7E.

**/
c.RATE_LIMITED="rate_limited",c.AUTH_FAILURE="auth_failure",c.RECAPTCHA_FAILED="recaptcha_error",c.INVALID_GRANT="Invalid grant",c.ARCHIVED_ACCOUNT="archived_account",c.CONSENT_REQUIRED="consent_required"},{}],35:[function(a,b,c){"use strict";/**
 * Adds a ping to fonts.com for usage of web fonts on our sites.
 * 
 * @module fonts
 */
c.init=function(a){var b,c=document,d="//fast.fonts.net/t/1.css?apiType=css&projectid=";b=c.createElement("link"),b.href=d+encodeURIComponent(a),b.rel="stylesheet",c.head.appendChild(b)}},{}],36:[function(a,b,c){"use strict";var d=a("./config"),e=a("jquery").noConflict(),f=a("hbsfy/runtime"),g="OAuth2_Error",h="500",i="OAuth2_Error_help",j={theme:"lol",cdn:d("cdn"),languages:d("languages")||[],regions:d("regions")||[],rememberMe:d("remember")||!1,errorStatus:d("errorStatus")||h,errorCode:d("errorCode")||g,httpLogout:d("httpLogout")||[],errorDescription:d("errorDescription")||i,recaptchaPublicKey:d("recaptcha")};f.registerHelper("langCode",function(a){return(a||"").split(/[_\-]/)[0]}),f.registerHelper("multilingual",function(a){if(j.languages.length>1)return a.fn(this)}),f.registerHelper("remember",function(a){if(j.rememberMe)return a.fn(this)}),f.registerHelper("recaptchaPublicKey",function(){return j.recaptchaPublicKey}),f.registerHelper("cdn",function(){return j.cdn}),f.registerHelper("theme",function(){return j.theme}),f.registerHelper("errorCode",function(){return j.errorCode}),f.registerHelper("errorStatus",function(){return j.errorStatus}),f.registerHelper("errorDescription",function(){return j.errorDescription}),f.registerHelper("httpLogout",function(a){return e.map(j.httpLogout,function(b){return a.fn(b)}).join("")}),f.registerHelper("regions",function(a,b){return b||(b=a,a=""),e.map(j.regions,function(a){return b.fn(a)}).join(a)}),f.registerHelper("languages",function(a,b){return b||(b=a,a=""),e.map(j.languages,function(a){return b.fn(a)}).join(a)}),f.registerHelper("panel",function(a){return'<div class="panel-frame"><div class="panel-content"><img id="loc-spinner" src="'+j.cdn+"/images/themes/"+j.theme+'/spinner.gif" alt=""><div class="loc-hide loading">'+a.fn(this)+'</div></div><div class="panel-frame-sub-border"></div></div>'})},{"./config":31,"hbsfy/runtime":23,jquery:25}],37:[function(a,b,c){"use strict";/**
 * This class manages displaying locales.
 *
 * @constructor
 */
function d(){this._config={},this._$root=null,this._$spinner=null,this._onInit=r.Deferred(),this._i18nConf={}}function e(){u.lang=s.lng().split(/[_\-]/)[0]}function f(a,b,c,d){var e={success:function(a){d(null,a)},error:function(a,b,c){if(b&&200===b||a&&a.status&&200===a.status)s.functions.error("Invalid return value for "+e.url+" - see error "+c);else if(b&&404===b||a&&a.status&&404===a.status)s.functions.log("Could not find "+e.url);else{var f=b?b:a&&a.status?a.status:null;s.functions.log("Unexpected status "+f+" for "+e.url)}d(c,{})},url:s.applyReplacement(c.resGetPath,{lng:a,ns:b}),cache:!0,dataType:"jsonp",async:!0,jsonp:!1,jsonpCallback:"callback"+a,timeout:c.ajaxTimeout,headers:c.headers,crossDomain:!0};r.ajax(e)}/**
 * Called when i18n completes initializing
 *
 * @private
 */
function g(){var a=this;a._$root.hide().removeClass("loading").i18n(),r("title").i18n(),e(),a._notifyBeforeChange(),a._notifyChange(),a._onInit.resolve()}function h(a){return a.code}/**
 * Initialize the application and display the initial language.
 *
 * @param  {Object} config Config properies for the instance. Understands the
 * following properties:
 *
 *   * locales: A space-separated list of OpenID Connect ui_locales
 *   * root: An element ID that the manager will fade out when loading strings
 *   * spinner: An element ID that the manager will fade in when loading strings
 *   * i18n: Config values passed to i18next
 *   * beforeChange: a method to call before the UI starts to fade back in after a language change.
 *   * onChange: a method to call when the language changes. called after the UI has faded back in.
 *   * languages: An array of objects defining the available languages
 *   * cdn: A URI that will contain the assets from which the localization files will be loaded
 *
 * @return {Promise}       A Promise that resolves when a language is loaded.
 */
function i(a){var b=this;a||(a={});var c={fallbackLng:"en_US",ns:"rso",cookieName:"PVPNET_LANG",customLoad:f,lngWhitelist:r.map(a.languages||[],h),resGetPath:a.cdn+"/locale/__ns__-__lng__.js"};return b._config=a,b._$root=r(a.root||"body"),b._$spinner=r(a.spinner),b._i18nConf=r.extend(c,a.i18n),s.init(b._i18nConf,r.proxy(g,b)),b._onInit.promise()}/**
 * Call the onChange listener, if it exists.
 *
 * @method _notifyChange
 * @private
 */
function j(){var a=this._config.onChange;r.isFunction(a)&&a(s.lng())}function k(){var a=this._config.beforeChange;r.isFunction(a)&&a(s.lng())}function l(){var a=this;a._$root.i18n(),document.title=s.t(t),e(),a._notifyBeforeChange(),a._$spinner.fadeOut(function(){a._$root.fadeIn(),a._notifyChange()})}/**
 * Returns the current language
 * @return {String} A locale code
 */
function m(){return s.lng()}/**
 * Sets the current language
 *
 * @param {String} lang [description]
 */
function n(a){var b=this;a!==s.lng()&&r.when(b._$root.fadeOut(function(){b._$spinner.fadeIn()})).then(function(){s.setLng(a,r.proxy(l,b))})}function o(){return s.t.apply(s,arguments)}var p,q,r=a("jquery"),s=a("i18next-client/i18next.amd.withJQuery"),t=r("title").attr("data-i18n"),u=document.documentElement;p=d.prototype,p.init=i,p._notifyChange=j,p._notifyBeforeChange=k,p.getLng=m,p.setLng=n,p.t=o,q=new d,q.I18nManager=d,b.exports=q},{"i18next-client/i18next.amd.withJQuery":24,jquery:25}],38:[function(a,b,c){"use strict";/**
 * Returns the appropriate user-visible string based on the
 * error description and code we provide.
 *
 * @param  {String} code        An ErrorCode constant
 * @param  {String} description An ErrorDescription constant
 * @return {String}             A Message constant
 * @static
 * @method get
 */
function d(a,b){return h.hasOwnProperty(b)?h[b]:i.hasOwnProperty(a)?i[a]:g.SYSTEM_ERROR}var e=a("./error-codes"),f=a("./error-descriptions"),g={AUTH_SUCCESS:"AUTH_SUCCESS",AUTH_FAILURE:"Error_username_and_password_incorrect",VALIDATION_ERROR:"Error_username_and_password_incorrect",SYSTEM_ERROR:"OAuth2_Error",INVALID_REQUEST:"INVALID_REQUEST",RECAPTCHA_ERROR:"Recaptcha_error",RECAPTCHA_REQUIRED:"Captcha_subhead",AUTH_RATE_LIMITED:"RATE_LIMITED",DOWNTIME:"login_server_down",NOT_FOUND:"NOT_FOUND",SERVICE_UNAVAILABLE:"login_server_down",INVALID_SESSION_ID_CODE:"invalid_session_id",ARCHIVED_ACCOUNT:"archived_account",CONSENT_REQUIRED:"consent_required"};c.keys=g;
// Map
var h={};h[f.AUTH_FAILURE]=g.AUTH_FAILURE,h[f.RATE_LIMITED]=g.AUTH_RATE_LIMITED,h[f.RECAPTCHA_FAILED]=g.RECAPTCHA_ERROR,h[f.ARCHIVED_ACCOUNT]=g.ARCHIVED_ACCOUNT,h[f.CONSENT_REQUIRED]=g.CONSENT_REQUIRED;var i={};i[e.INVALID_REQUEST]=g.INVALID_REQUEST,i[e.SERVER_ERROR]=g.DOWNTIME,i[e.INVALID_SESSION_ID_CODE]=g.INVALID_SESSION_ID_CODE,c.get=d;var j={};for(var k in g)g.hasOwnProperty(k)&&(j[k]=k);c.codes=j},{"./error-codes":33,"./error-descriptions":34}],39:[function(a,b,c){"use strict";
// TODO: basic sanity checking for invalid stuff to save a server hit
function d(a){switch(a.type){case"redirect":return z.send("event","riotSignOn","login","success"),z.send("pageview","/riotSignOn/login/success"),window.location=a.location;case"auth":
// refresh the form validation to support chrome's password
// storage functionality
s.shouldPreventSubmit(),I.setEnabled(a.captcha_required),I.init({publicKey:x("#recaptcha").attr("data-publickey"),id:"recaptcha",opts:{theme:"dark"}}),x("#"+a.type).show();break;case"error":case"consent":z.send("event","riotSignOn","login",J.codes.DOWNTIME),z.send("pageview","/riotSignOn/login/"+J.codes.DOWNTIME),x("#"+a.type).show()}}function e(a){return x.ajax({url:"/authz/auth",type:"POST",contentType:"application/json",dataType:"json",data:JSON.stringify(a)})}function f(a){var b,c=a&&a.responseJSON,d=c&&c.error,e=c&&c.error_description||"",f=J.get(d,e),g="AUTH_RATE_LIMITED",h=c.captcha_required;h!==I.isEnabled()?(I.setEnabled(h),h&&(z.send("event","riotSignOn","login",d+"|"+g),z.send("pageview","/riotSignOn/login/"+g),f=J.keys.RECAPTCHA_REQUIRED)):h&&I.reload(),b=G.t(f,{locale:G.getLng()}),s.setMessage(b),s.setLoading(!1),s.setLock(!1),e=e.toUpperCase(),z.send("event","riotSignOn","login",d+"|"+e),z.send("pageview","/riotSignOn/login/"+e),x("html,body").animate({scrollTop:0})}function g(a){var b=L.getAlertFor(a),c=b?G.t(J[b]):null;s.setMessage(c)}function h(a,b){g(b),u=Q[b],t=b.toLowerCase()}function i(a,b){x(".panel-content").css("min-height",function(){return x(this).height()}),G.setLng(b)}function j(a){o.select().on("customselect:change",h),p.select().on("customselect:change",i),d(a),O.init(),x(V).fadeOut(function(){x(U).fadeIn()})}function k(a){t=a,u=Q[t],o.select().val(t),o.sync(),q.sync(),z.call("set","dimension1",t)}function l(a){p.select().val(a),p.sync(),r.sync()}function m(a){x(".panel-content").css("min-height",""),K.setLang(a,u),I.setLang(a),g(t)}function n(){o.sync(),q.sync()}/* global window */
a("./handlebars");var o,p,q,r,s,t,u,v,w=a("./views/authorize.hbs"),x=a("jquery").noConflict(),y=a("../core"),z=y.tracker,A=y.fontsLoaded,B=a("querystring"),C=a("./form-validation"),D=a("./custom-checkbox"),E=a("./custom-select"),F=a("./select-placeholder"),G=a("../i18n-manager"),H=a("./lol-langs"),I=a("./recaptcha-manager"),J=a("../messages"),K=a("./link-manager"),L=a("./status-manager"),M=a("./onready"),N=a("../config"),O=a("./device-identification"),P="#login-form-message",Q={},R=N("languages"),S=N("regions"),T=B.parse(window.location.search.substr(1)),U=".loc-hide",V="#loc-spinner";x.each(S,function(a,b){Q[b.name]=b.urlName}),x("body").append(w()),o=E("#login-form-region"),q=F("#region-selector > .custom-select"),
// create custom checkbox
D(".custom-checkbox"),p=E("#login-form-language"),r=F("#language-selector > .custom-select"),z.send("pageview","/riotSignOn/index"),
// set up initial region
v=H.parseQuery(T,R,S),k(v.region),l(v.locale);var W={languages:R,cdn:N("cdn"),locales:T.ui_locales,hint:T.login_hint,root:U,spinner:V,onChange:m,beforeChange:n,i18n:{lng:v.locale}};I.init({publicKey:x("#recaptcha").attr("data-publickey"),id:"recaptcha",opts:{theme:"dark"}}),
// start the show!
x.when(L.init(t),G.init(W),K.init(),A,M).always(j),
// set up form submit
s=C("#login-form",{message:P,loader:"#login-button-spinner",button:"#login-button",onValidate:function(a){var b=x("[name=username]",a).val(),c=x("[name=password]",a).val(),d=L.getAlertFor(t);
// disabled - too smart validation may be harder to use
// return av.isValidUsername(username) && av.isValidPassword(password, true) && recaptcha && !alert;
/*recaptcha &&*/
return b&&c&&!d},onSubmit:function(a){var b=x(a.target),c={};x("[name]",b).each(function(){var a=x(this);c[a.attr("name")]=a.val()}),c.region||(
// if it"s disabled, e.g. one region
c.region=S.length>0?S[0].name:""),c.remember=x("[name=remember]",b).is(":checked"),c.lang=G.getLng(),s.setLoading(!0),s.setMessage(),s.setLock(!0),e(c).then(d,f)}})},{"../config":31,"../core":32,"../i18n-manager":37,"../messages":38,"./custom-checkbox":40,"./custom-select":41,"./device-identification":42,"./form-validation":43,"./handlebars":44,"./link-manager":45,"./lol-langs":46,"./onready":47,"./recaptcha-manager":48,"./select-placeholder":49,"./status-manager":50,"./views/authorize.hbs":51,jquery:25,querystring:29}],40:[function(a,b,c){"use strict";function d(){f(this.parentNode).toggleClass("checked",this.checked)}function e(a){f(a).children("input[type=checkbox]").on("change",d)}var f=a("jquery");f.fn.createCustomCheckbox=function(){return e(this)},b.exports=e},{jquery:25}],41:[function(a,b,c){"use strict";function d(a){h(this).parent().toggleClass("focus","focus"===a.type)}function e(){var a=h(this),b=h(":selected",a)[0]||h("option",a)[0],c=h(b).text(),d=b?b.value:"";a.prev().text(c),a.trigger("customselect:change",[d,c])}function f(a){var b=h(a.data),c=b.prev().text(),d=h("option",b).filter(function(a,b){return h(b).text()===c});b.val(d.val()),e.call(b)}function g(a){var b=h(a);
// return a handler that can be used later
// ensure the custom select shows the correct value even when
// the page is shown from memory (e.g. via the back button)
return e.call(b),h("option",b).length>1?b.on("change keyup",e).on("focus blur",d):(b.attr("disabled","disabled"),b.parent().addClass("disabled")),h(window).on("pageshow",null,b,f),{sync:function(){e.call(b)},cleanup:function(){b.off("change keyup",e).off("focus blur",d),h(window).off("pageshow",null,f)},select:function(){return b}}}var h=a("jquery");h.fn.createCustomSelect=function(){return g(this)},b.exports=g},{jquery:25}],42:[function(a,b,c){"use strict";function d(a){a=encodeURIComponent(a);var b=new RegExp(a+"=([^;]*)"),c=b.exec(document.cookie);return!!c&&decodeURIComponent(c[1])}function e(){var a=g("kountEnabled"),b=g("collectorServerName"),c=g("merchantId"),e=d(i);if(a&&e&&b&&c){var j=h.format({protocol:"https",host:b,pathname:"/collect/sdk",query:{m:c,s:e}});f.getScript(j).done(function(){if("undefined"!=typeof ka){var a=new ka.ClientSDK;a.collectData()}})}}/* global ka */
var f=a("jquery"),g=a("../config"),h=a("url"),i="did";c.init=e},{"../config":31,jquery:25,url:3}],43:[function(a,b,c){"use strict";function d(){return!0}function e(a,b){var c,e,j,k,l=f.extend({onValidate:d,onSubmit:d,submit:"input[type=submit],button[type=submit]",inputs:"input[name],textarea[name],select[name]",events:["keyup","click","change"]},b),m=f(a),n=f.map(l.events,function(a){return a+g}).join(" "),o=!1,p=!0,q=function(){return o||!p},r=function(){f(l.submit,m).attr("disabled",q())},s=function(a){o=a,r()},t=function(){return o},u=function(a,b){var c=a?function(){var c="success"===b;j.toggleClass("success",c).toggleClass("error",!c).html(a).fadeIn(100)}:f.noop;j.fadeOut(100,c)},v=function(a){e[a?"hide":"show"](),c[a?"show":"hide"]()},w=function(){var a=!0;/*
      TODO: do built-in validations, e.g. check for values
      of input[required] and regexp on input[pattern].
    */
return a=a&&l.onValidate(m),p=a,r(),p},x=function(){v(!1),u(),f(l.inputs,m).val(""),f(l.inputs,m).change()},y=function(a){w(),!q()&&l.onSubmit(a)||a.preventDefault()};
// remove existing validator if there is one
// return a handler that allows you to interact with the component
return m.data(i)&&m.data(i).detach(),j=f(l.message).hide(),c=f(l.loader).hide(),e=f(l.button),m.delegate(l.inputs,n,w).on(h,y),k={reset:x,setLoading:v,setMessage:u,setLock:s,getLock:t,shouldPreventSubmit:function(){return w(),q()},detach:function(){p=!0,s(!1),x(),v=u=s=w=q=t=f.noop,j.html(""),m.off(n,l.inputs),m.off(h),m.data(i,null)}},w(),m.data(i,k),k}var f=a("jquery"),g=".formvalidation",h="submit"+g,i="validator";f.fn.addFormValidation=function(a){return e(this,a)},b.exports=e},{jquery:25}],44:[function(a,b,c){"use strict";a("../handlebars");var d=a("hbsfy/runtime"),e=a("./views/partials/footer.hbs"),f=a("./views/partials/region-disambiguator.hbs");d.registerPartial("footer",e),d.registerPartial("region-disambiguator",f)},{"../handlebars":36,"./views/partials/footer.hbs":52,"./views/partials/region-disambiguator.hbs":53,"hbsfy/runtime":23}],45:[function(a,b,c){"use strict";function d(a,b,c){var d=c.substr(0,2),e=s.posixToBCP47(c,b);return a.replace("{region}",b.toLowerCase()).replace("{regionName}",y[b]).replace("{lang}",d).replace("{bcp47Lang}",e).replace("{posixLang}",c)}function e(a,b,c){var e=q(a),f=e.attr("data-link"),g=u.hasOwnProperty(f)?u[f]:"#",h=d(g,b,c);e.attr("href",h)}function f(a){var b=a,c=q(".panel-view:visible"),e=b.attr("data-link");m.data("previous",c),
// set the header text
q("h1",m).text(b.text()),
// set up the region links
q(w,m).each(function(a,b){var c=q(b),f=c.attr("data-region").toLowerCase(),g=n;!r.isValidRegionForLanguage(f,g)&&s.regions.hasOwnProperty(f)?g=s.regions[f][0]:s.isValidLanguage(g)||(g="en_US");var h=e+"-"+f,i=u.hasOwnProperty(h)?u[h]:u.hasOwnProperty(e)?u[e]:"#",j=d(i,f,g);c.attr("href",j)}),c.fadeOut(function(){m.fadeIn()})}function g(a){var b=q(a.currentTarget);a.preventDefault(),f(b)}function h(){var a=m.data("previous");m.data("previous",null),m.fadeOut(function(){a.fadeIn(),q("h1",m).text(""),q(w,m).attr("href","#")})}function i(a){a.preventDefault(),h()}function j(){l=q("body"),l.delegate(t,"click",g),m=q(v).hide(),q(".close",m).on("click",i),q(w,m).on("click",h)}function k(a,b){
// store the settings for later
n=a,o=b,
// expand visible links
// if the region doesn't support the langauge, default to the first language
// in the region's list. Not perfect, but it's an edge case that this would
// be useful to a user anyway
q(t,l).each(function(c,d){e(d,b,a)})}/**

LinkManager

Manages regional links from a url template. This library
does the following:

* URLs are read from the config library
* When a langauge is set, it writes URLs to all regional links the page using
  default region/language combo, so right clicking on them does something.
* When a link is clicked, it fades out the current view and fades in a region
  selector view, with links to the selected link in each region.
* If a region/language combo is invalid, it defaults to the first language
  alphabetically by language code for that region, which matters to these
  regions:
  * euw (german)
  * eune (english)

TODO: this could be improved to be a bit more
reusable and testable in isolation, e.g.

* inject config
* inject selectors

**/
var l,m,n,o,p=a("../config"),q=a("jquery"),r=a("./lol-langs"),s=a("@riotgames/rioti18n"),t="[href][data-link]",u=p("links"),v="#region-disambiguator",w="[href][data-region]",x=p("regions"),y={};
// Map of region tags to name, ex. { 'na': 'NA1' }
q.each(x,function(a,b){y[b.urlName]=b.name}),c.expand=d,c.setLang=k,c.init=j},{"../config":31,"./lol-langs":46,"@riotgames/rioti18n":1,jquery:25}],46:[function(a,b,c){"use strict";/**
 * [getRiotLang description]
 * @param  {String} lolLang [description]
 * @return {String}         [description]
 */
function d(a){return p.hasOwnProperty(a)?p[a]:a}/**
 * Verify if a region/language combination is valid
 * 
 * @param  {String}  region   A regionTag
 * @param  {String}  language A locale code
 * @return {Boolean}          Whether or not the 
 */
function e(a,b){var c,d,e;if(!q.hasOwnProperty(a))return!1;for(
// return $.inArray(language, region) > -1;
e=q[a],c=0,d=e.length;c<d;c+=1)if(e[c]===b)return!0;return!1}/**
 * [getRegionAndLang description]
 * @param  {String} region  A regionTag
 * @param  {String} lolLang A locale code
 * @return {Object}         A object with two properties: region and lang
 */
function f(a,b){var c=o.isValidRegion(a),f=o.isValidLanguage(b),g={};
// set the language
// set the region
return f?g.locale=b:c?g.locale=o.getLanguagesForRegion(a)[0]:g.locale="en_US",g.locale=d(g.locale),a&&!c?g.tag=a:e(a,g.locale)?g.tag=a:g.tag=o.getRegionForLanguage(f?b:g.locale),g}function g(a,b){var c,d,e;for(d=0,e=b.length;d<e;d+=1)if(c=b[d],a===b[d].substr(0,2))return b[d]}function h(a,b){
// if locale is in mappedLolLangs, use that value instead
return a=d(a),n.inArray(a,b)>-1?a:null}function i(a){return{region:a.name,tag:a.urlName}}/**
 * Given an ID and a list of regions, return an object { region, tag }
 * where region is the shard name and tag is the url tag.
 * 
 * @param  {[type]} id      [description]
 * @param  {[type]} regions [description]
 * @return {[type]}         [description]
 */
function j(a,b){if(!a)return{};var c=n.grep(b,function(b){return b.name===a});if(c.length>0)return i(c[0]);var d=n.grep(b,function(b){return b.urlName===a});return d.length>0?i(d[0]):{}}/**
 * Returns a region if it's supported.
 * 
 * @param  {[type]} loginHint [description]
 * @param  {[type]} regions   [description]
 * @param  {[type]} tags      [description]
 * @return {[type]}           [description]
 */
function k(a,b){var c,d,e,f=(a||"").match(s);
// if we've found a valid region, look for a username
return c=j(f&&f[1],b),f&&f[2]&&f[3]&&(d=f[2],e=f[3],c["#"===d?"account":"username"]=e),c}/**
 * Searches through uiLocales to find a language supported in whitelist.
 * If none are found, defaults to the first language in the whitelist.
 * 
 * @param  {Array} uiLocales A list of user-provided language tags
 * @param  {Array} whitelist A list of supported POSIX locales
 * @return {String}          A POSIX locale code
 */
function l(a,b){for(var c,d,e,f=0,i=a.length;f<i;f+=1)
// if we don"t have a match, continue
if(c=a[f].match(r),c&&(
// if we have a region subtag
c[3]&&(
// create a POSIX code from the result
e=c[1].toLowerCase()+"_"+c[3].toUpperCase(),d=h(e,b)),
// if we didn"t find one, try by prefix
d||(d=g(c[1],b)),d))return d;
// default to the first value in the whitelist
return b[0]}/**
 * Returns a combination of region and language metadata
 * based on the supplied query string.
 * 
 * This includes a simplistic parsing of RFC-5646 language tags
 * in the ui_locales param based on Riot"s use cases.
 * 
 * @param  {Object} query   A parsed querystring
 * @param  {Array}  langs   An array of whitelisted language objects in order of preference
 * @param  {Array}  regions An array of whitelisted region objects
 * @return {Object}         An object with the following keys: region, locale, username, account
 */
function m(a,b,c){var d,e,g,h,i={};
// if we have ui_locales, split them and find the one we want
// special case: if region is latam, use latam spanish
// Fall back to first whitelisted region. Fixes non-prod regions that don't have NA configured.
// getRegionAndLang will return a region of 'na' as the default.
return n.each(c,function(a,b){i[b.urlName]=b.name}),e=k(a.login_hint,c),h=n.map(b,function(a){return a.code}),a.ui_locales&&(g=l(a.ui_locales.split(" "),h)),"es_ES"===g&&e.region&&"LA"===e.region.substr(0,2)&&(g="es_MX"),d=f(e.tag,g),d.region=i[d.tag]||i[Object.keys(i)[0]],d.lang=d.locale.substr(0,2),d.username=e.username,d.account=e.account,d}var n=a("jquery"),o=a("@riotgames/rioti18n"),p={en_AU:"en_US",en_GB:"en_US",en_PL:"en_US",en_US:"en_US",en_BE:"en_US",es_AR:"es_MX"},q={},r=/^([a-z]{2})(?:\-([a-z]{4}))?(?:\-([a-z]{2}|\d{3}))?((?:\-[a-z0-9]+)*)$/i,s=/^([a-z0-9]+)([#|]?)([a-z0-9]*)$/i;c.getRiotLang=d,n.each(o.regions,function(a,b){q[a]=n.map(b,d)}),/**
 * PBE is special because rioti18n does not have the valid languages specified.
 * Instead, we hardcode it here. This is because the signup pages are localized,
 * but the rest of the site is not so we did not want to change rioti18n.
 *
 * In addition, we want en_US to be first so that it is the invalid languages
 * default.
 */
q.pbe=["en_US"].concat(n.map(o.getLanguageCodes(),d)),c.isValidRegionForLanguage=e,c.getRegionAndLang=f,c.parseQuery=m},{"@riotgames/rioti18n":1,jquery:25}],47:[function(a,b,c){"use strict";/**

Promisify the ready event

**/
var d=a("jquery"),e=new d.Deferred;d(document).ready(function(){e.resolve()}),b.exports=e.promise()},{jquery:25}],48:[function(a,b,c){"use strict";function d(){if(!m||!q)return void p("#"+l.id).hide();var a=p("#"+l.id);
// hide the parent element, then clear all contents
a.hide(),a.empty();/* 
   * Recaptcha checks to see if you render twice to the container element.
   * When this happens, an exception is thrown.
   * Therefore, we must maintain reference to an outer element, 
   * create a new inner container, and put Recaptcha in that inner container
   */
var b=document.createElement("div"),c=l.id+"-child";b.id=c,a.append(b),o=grecaptcha.render(c,p.extend(l.opts,{lang:k,sitekey:l.publicKey})),a.show()}function e(){if(!n){n=!0;var a="//www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit&hl="+k;/* 
   * We can't start captcha using a callback on the ajax command, since Recaptcha hasn't finished setup.
   * Have to use Recaptcha's callback, which is implemented via the onload parameter of the Recaptcha url.
   * Unfortunately, this means we must expose our onLoad function as a property of window, so Recaptcha can call it.
   */
p.ajax({dataType:"script",cache:!0,url:a})}}function f(a){k=a.substr(0,2),q&&e()}function g(){m&&grecaptcha.reset(o)}function h(a){l=a}function i(a){q=!!a,a?e():d()}function j(){return q}/*global grecaptcha*/
var k,l,m,n,o,p=a("jquery"),q=!1;
// must be a global function so that Google's Recaptcha script can call this function once it has initialized
window.onRecaptchaLoad=function(){n=!1,m=!0,d()},c.setLang=f,c.reload=g,c.init=h,c.setEnabled=i,c.isEnabled=j},{jquery:25}],49:[function(a,b,c){"use strict";function d(){var a=f(this);a.next().css("display","block"),a.hide()}function e(a){var b=f(a),c=f('<span class="placeholder"><span class="placeholder-text"></span><span class="placeholder-caret"></span></span>');return b.hide(),b.before(c),f("option",b).length>1?c.on("click",d):c.addClass("disabled"),{sync:function(){var a=f(":selected",b)[0]||f("option",b)[0],c=f(a).text();b.prev().children(".placeholder-text").text(c)}}}var f=a("jquery");b.exports=e},{jquery:25}],50:[function(a,b,c){"use strict";function d(a){return k=a}function e(){var a=new j.Deferred;
// Resolve the promise appropriately with the error so the page flows as expected.
return k={type:"error"},a.resolve(k),a}function f(a){var b=k.alerts;return a=a.toUpperCase(),b?b.global?b.global:b.hasOwnProperty(a)&&b[a]:null}/**
 * Extract the query string and the session cookie (if one is present) from the
 * HTTP request. Then use the these two parameters to make a POST request to
 * start a new authorisation session. This session is basically a set of
 * interactions to establish the end-user’s identity and ask for their consent.
 *
 * We don"t need to get the session cookie, since the API layer is hanginng onto
 * that.
**/
function g(a){return j.ajax({url:"/authz/status",type:"POST",contentType:"application/json",dataType:"json",data:JSON.stringify({query:window.location.search.substr(1),region:a})}).then(d,e)}function h(){return k}function i(a){return g(a)}var j=a("jquery"),k={};c.init=i,c.check=g,c.get=h,c.getAlertFor=f},{jquery:25}],51:[function(a,b,c){
// hbsfy compiled Handlebars template
var d=a("hbsfy/runtime");b.exports=d.template({1:function(a,b,c,d,e){var f,g=null!=b?b:a.nullContext||{},h=a.escapeExpression;return'    <div class="panel-view" style="display:none" id="loading">Loading...</div>\n    <div class="panel-view" style="display:none" id="auth">\n        <form id="login-form" role="form" autocomplete="off" action="/auth" method="post">\n          <header>\n            <h1 data-i18n="Sign_In"></h1>\n          </header>\n          <p id="login-form-message"></p>\n          <div class="form-group">\n            <label for="login-form-username" id="login-form-label-username" data-i18n="Username"></label>\n            <input type="text" class="form-control" id="login-form-username" name="username" autofocus>\n          </div>\n          <div class="form-group">\n            <label for="login-form-password" id="login-form-label-password" data-i18n="Password"></label>\n            <input type="password" class="form-control" id="login-form-password" name="password">\n          </div>\n'+(null!=(f=c.remember.call(g,{name:"remember",hash:{},fn:a.program(2,e,0),inverse:a.noop,data:e}))?f:"")+'          <div class="form-group" id="region-selector">\n            <label for="login-form-region" id="login-form-label-region" data-i18n="Region"></label>\n            <span class="form-control custom-select">\n              <span class="custom-select-caret"></span>\n              <span class="custom-select-value"></span>\n              <select class="custom-select-combobox" id="login-form-region" tabindex="0" name="region">\n'+(null!=(f=c.regions.call(g,{name:"regions",hash:{},fn:a.program(4,e,0),inverse:a.noop,data:e}))?f:"")+'              </select>\n            </span>\n          </div>\n          <div class="form-group" id="recaptcha" data-publickey="'+h(c.recaptchaPublicKey.call(g,{name:"recaptchaPublicKey",hash:{},data:e}))+'" style="display:none"></div>\n          <p class="submit">\n            <button type="submit" class="btn btn-primary btn-block" id="login-button" data-i18n="Sign_In">\n            </button>\n            <img id="login-button-spinner" src="'+h(c.cdn.call(g,{name:"cdn",hash:{},data:e}))+"/images/themes/"+h(c.theme.call(g,{name:"theme",hash:{},data:e}))+'/spinner.gif" alt="">\n          </p>\n          <div class="help">\n            <div class="forgot">\n              <p><a href="#" data-link="forgot-username" data-i18n="FORGOT_USERNAME"></a></p>\n              <p><a href="#" data-link="forgot-password" data-i18n="FORGOT_PASSWORD"></a></p>\n            </div>\n            <div class="signup">\n              <p><a href="#" data-link="signup" data-i18n="Create_an_Account"></a></p>\n            </div>\n          </div>\n          <div class="lang">\n            <div class="form-group" id="language-selector">\n              <label for="login-form-language" data-i18n="language_selector"></label>\n              <span class="form-control custom-select">\n                <span class="custom-select-caret"></span>\n                <span class="custom-select-value"></span>\n                <select class="custom-select-combobox" id="login-form-language" tabindex="0" name="language">\n'+(null!=(f=c.languages.call(g,{name:"languages",hash:{},fn:a.program(6,e,0),inverse:a.noop,data:e}))?f:"")+'                </select>\n              </span>\n            </div>\n          </div>\n        </form>\n    </div>\n    <div class="panel-view" style="display:none" id="consent">Consent...</div>\n    <div class="panel-view" style="display:none" id="error">\n      <header>\n        <h1 data-i18n="'+h(c.errorCode.call(g,{name:"errorCode",hash:{},data:e}))+'" id="error-page"></h1>\n      </header>\n      <p class="description-line" data-i18n="[html]login_server_down"></p>\n    </div>\n'+(null!=(f=a.invokePartial(d["region-disambiguator"],b,{name:"region-disambiguator",data:e,indent:"    ",helpers:c,partials:d,decorators:a.decorators}))?f:"")},2:function(a,b,c,d,e){return'          <div class="form-group">\n            <label class="custom-checkbox">\n              <input type="checkbox" id="login-form-remember" name="remember">\n              <span class="checkbox-image"></span>\n              <span class="label" id="login-form-label-remember" data-i18n="Remember_me"></span>\n            </label>\n          </div>\n'},4:function(a,b,c,d,e){var f=a.lambda,g=a.escapeExpression;return'                <option value="'+g(f(null!=b?b.name:b,b))+'" data-i18n="'+g(f(null!=b?b.l10n:b,b))+'">'+g(f(null!=b?b.l10n:b,b))+"</option>\n"},6:function(a,b,c,d,e){var f=a.lambda,g=a.escapeExpression;return'                  <option value="'+g(f(null!=b?b.code:b,b))+'" lang="'+g(c.langCode.call(null!=b?b:a.nullContext||{},null!=b?b.code:b,{name:"langCode",hash:{},data:e}))+'">'+g(f(null!=b?b.name:b,b))+"</option>\n"},compiler:[7,">= 4.0.0"],main:function(a,b,c,d,e){var f;return'<div id="login-wrap">\n  <header id="login-header">\n    <div class="logo"></div>\n  </header>\n\n'+(null!=(f=c.panel.call(null!=b?b:a.nullContext||{},{name:"panel",hash:{},fn:a.program(1,e,0),inverse:a.noop,data:e}))?f:"")+"\n"+(null!=(f=a.invokePartial(d.footer,b,{name:"footer",data:e,indent:"  ",helpers:c,partials:d,decorators:a.decorators}))?f:"")+"</div>\n"},usePartial:!0,useData:!0})},{"hbsfy/runtime":23}],52:[function(a,b,c){
// hbsfy compiled Handlebars template
var d=a("hbsfy/runtime");b.exports=d.template({compiler:[7,">= 4.0.0"],main:function(a,b,c,d,e){return'<footer id="login-footer" class="loc-hide loading">\n  <img class="logo" src="'+a.escapeExpression(c.cdn.call(null!=b?b:a.nullContext||{},{name:"cdn",hash:{},data:e}))+'/images/riot-logo.png" alt="Riot Games">\n  <p class="links">\n    <a href="#" data-i18n="[href]support_site;Support"></a> |\n    <a href="#" data-link="privacy" data-i18n="[html]Privacy"></a> |\n    <a href="#" data-link="terms" data-i18n="Legal"></a>\n  </p>\n  <p class="legal" data-i18n="copyright_notice"></p>\n</footer>\n'},useData:!0})},{"hbsfy/runtime":23}],53:[function(a,b,c){
// hbsfy compiled Handlebars template
var d=a("hbsfy/runtime");b.exports=d.template({1:function(a,b,c,d,e){var f=a.lambda,g=a.escapeExpression;return'      <li>\n        <a href="#"\n           data-region="'+g(f(null!=b?b.urlName:b,b))+'"\n           data-i18n="'+g(f(null!=b?b.l10n:b,b))+'"\n           target="_blank"\n        >'+g(f(null!=b?b.value:b,b))+"</a>\n      </li>\n"},compiler:[7,">= 4.0.0"],main:function(a,b,c,d,e){var f;return'<div class="panel-view" id="region-disambiguator" style="display: none;">\n  <header>\n    <h1></h1>\n  </header>\n  <p id="select-label" data-i18n="Please_select_a_region"></h1>\n  <ul>\n'+(null!=(f=c.regions.call(null!=b?b:a.nullContext||{},{name:"regions",hash:{},fn:a.program(1,e,0),inverse:a.noop,data:e}))?f:"")+'  </ul>\n  <a href="#" class="close">\n    <span data-i18n="Back"></span>\n  </a>\n</div>\n'},useData:!0})},{"hbsfy/runtime":23}]},{},[39]);
//# sourceMappingURL=authorize.js.map