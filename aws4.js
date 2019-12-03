!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.aws4=e():t.aws4=e()}(window,(function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=3)}([function(t,e,r){"use strict";var n,i={cipher:{},hash:{},keyexchange:{},mode:{},misc:{},codec:{},exception:{corrupt:function(t){this.toString=function(){return"CORRUPT: "+this.message},this.message=t},invalid:function(t){this.toString=function(){return"INVALID: "+this.message},this.message=t},bug:function(t){this.toString=function(){return"BUG: "+this.message},this.message=t},notReady:function(t){this.toString=function(){return"NOT READY: "+this.message},this.message=t}}};i.misc.hmac=function(t,e){this._hash=e=e||i.hash.sha256;var r,n=[[],[]],s=e.prototype.blockSize/32;for(this._baseHash=[new e,new e],t.length>s&&(t=e.hash(t)),r=0;r<s;r++)n[0][r]=909522486^t[r],n[1][r]=1549556828^t[r];this._baseHash[0].update(n[0]),this._baseHash[1].update(n[1]),this._resultHash=new e(this._baseHash[0])},i.misc.hmac.prototype.encrypt=i.misc.hmac.prototype.mac=function(t){if(this._updated)throw new i.exception.invalid("encrypt on already updated hmac called!");return this.update(t),this.digest(t)},i.misc.hmac.prototype.reset=function(){this._resultHash=new this._hash(this._baseHash[0]),this._updated=!1},i.misc.hmac.prototype.update=function(t){this._updated=!0,this._resultHash.update(t)},i.misc.hmac.prototype.digest=function(){var t=this._resultHash.finalize(),e=new this._hash(this._baseHash[1]).update(t).finalize();return this.reset(),e},i.hash.sha256=function(t){this._key[0]||this._precompute(),t?(this._h=t._h.slice(0),this._buffer=t._buffer.slice(0),this._length=t._length):this.reset()},i.hash.sha256.hash=function(t){return(new i.hash.sha256).update(t).finalize()},i.hash.sha256.prototype={blockSize:512,reset:function(){return this._h=this._init.slice(0),this._buffer=[],this._length=0,this},update:function(t){"string"==typeof t&&(t=i.codec.utf8String.toBits(t));var e,r=this._buffer=i.bitArray.concat(this._buffer,t),n=this._length,s=this._length=n+i.bitArray.bitLength(t);if(s>9007199254740991)throw new i.exception.invalid("Cannot hash more than 2^53 - 1 bits");if("undefined"!=typeof Uint32Array){var o=new Uint32Array(r),a=0;for(e=512+n-(512+n&511);e<=s;e+=512)this._block(o.subarray(16*a,16*(a+1))),a+=1;r.splice(0,16*a)}else for(e=512+n-(512+n&511);e<=s;e+=512)this._block(r.splice(0,16));return this},finalize:function(){var t,e=this._buffer,r=this._h;for(t=(e=i.bitArray.concat(e,[i.bitArray.partial(1,1)])).length+2;15&t;t++)e.push(0);for(e.push(Math.floor(this._length/4294967296)),e.push(0|this._length);e.length;)this._block(e.splice(0,16));return this.reset(),r},_init:[],_key:[],_precompute:function(){var t,e,r=0,n=2;function i(t){return 4294967296*(t-Math.floor(t))|0}for(;r<64;n++){for(e=!0,t=2;t*t<=n;t++)if(n%t==0){e=!1;break}e&&(r<8&&(this._init[r]=i(Math.pow(n,.5))),this._key[r]=i(Math.pow(n,1/3)),r++)}},_block:function(t){var e,r,n,i,s=this._h,o=this._key,a=s[0],c=s[1],u=s[2],h=s[3],p=s[4],f=s[5],l=s[6],d=s[7];for(e=0;e<64;e++)e<16?r=t[e]:(n=t[e+1&15],i=t[e+14&15],r=t[15&e]=(n>>>7^n>>>18^n>>>3^n<<25^n<<14)+(i>>>17^i>>>19^i>>>10^i<<15^i<<13)+t[15&e]+t[e+9&15]|0),r=r+d+(p>>>6^p>>>11^p>>>25^p<<26^p<<21^p<<7)+(l^p&(f^l))+o[e],d=l,l=f,f=p,p=h+r|0,h=u,u=c,a=r+((c=a)&u^h&(c^u))+(c>>>2^c>>>13^c>>>22^c<<30^c<<19^c<<10)|0;s[0]=s[0]+a|0,s[1]=s[1]+c|0,s[2]=s[2]+u|0,s[3]=s[3]+h|0,s[4]=s[4]+p|0,s[5]=s[5]+f|0,s[6]=s[6]+l|0,s[7]=s[7]+d|0}},i.bitArray={bitSlice:function(t,e,r){return t=i.bitArray._shiftRight(t.slice(e/32),32-(31&e)).slice(1),void 0===r?t:i.bitArray.clamp(t,r-e)},extract:function(t,e,r){var n=Math.floor(-e-r&31);return(-32&(e+r-1^e)?t[e/32|0]<<32-n^t[e/32+1|0]>>>n:t[e/32|0]>>>n)&(1<<r)-1},concat:function(t,e){if(0===t.length||0===e.length)return t.concat(e);var r=t[t.length-1],n=i.bitArray.getPartial(r);return 32===n?t.concat(e):i.bitArray._shiftRight(e,n,0|r,t.slice(0,t.length-1))},bitLength:function(t){var e,r=t.length;return 0===r?0:(e=t[r-1],32*(r-1)+i.bitArray.getPartial(e))},clamp:function(t,e){if(32*t.length<e)return t;var r=(t=t.slice(0,Math.ceil(e/32))).length;return e&=31,r>0&&e&&(t[r-1]=i.bitArray.partial(e,t[r-1]&2147483648>>e-1,1)),t},partial:function(t,e,r){return 32===t?e:(r?0|e:e<<32-t)+1099511627776*t},getPartial:function(t){return Math.round(t/1099511627776)||32},equal:function(t,e){if(i.bitArray.bitLength(t)!==i.bitArray.bitLength(e))return!1;var r,n=0;for(r=0;r<t.length;r++)n|=t[r]^e[r];return 0===n},_shiftRight:function(t,e,r,n){var s,o,a;for(void 0===n&&(n=[]);e>=32;e-=32)n.push(r),r=0;if(0===e)return n.concat(t);for(s=0;s<t.length;s++)n.push(r|t[s]>>>e),r=t[s]<<32-e;return o=t.length?t[t.length-1]:0,a=i.bitArray.getPartial(o),n.push(i.bitArray.partial(e+a&31,e+a>32?r:n.pop(),1)),n},_xor4:function(t,e){return[t[0]^e[0],t[1]^e[1],t[2]^e[2],t[3]^e[3]]},byteswapM:function(t){var e,r;for(e=0;e<t.length;++e)r=t[e],t[e]=r>>>24|r>>>8&65280|(65280&r)<<8|r<<24;return t}},i.codec.utf8String={fromBits:function(t){var e,r,n="",s=i.bitArray.bitLength(t);for(e=0;e<s/8;e++)0==(3&e)&&(r=t[e/4]),n+=String.fromCharCode(r>>>8>>>8>>>8),r<<=8;return decodeURIComponent(escape(n))},toBits:function(t){t=unescape(encodeURIComponent(t));var e,r=[],n=0;for(e=0;e<t.length;e++)n=n<<8|t.charCodeAt(e),3==(3&e)&&(r.push(n),n=0);return 3&e&&r.push(i.bitArray.partial(8*(3&e),n)),r}},i.codec.hex={fromBits:function(t){var e,r="";for(e=0;e<t.length;e++)r+=(0xf00000000000+(0|t[e])).toString(16).substr(4);return r.substr(0,i.bitArray.bitLength(t)/4)},toBits:function(t){var e,r,n=[];for(r=(t=t.replace(/\s|0x/g,"")).length,t+="00000000",e=0;e<t.length;e+=8)n.push(0^parseInt(t.substr(e,8),16));return i.bitArray.clamp(n,4*r)}},t.exports&&(t.exports=i),void 0===(n=function(){return i}.apply(e,[]))||(t.exports=n)},function(t,e,r){(function(t){var n=e,i=r(2),s=r(5),o=r(8),a=r(9)(1e3);function c(t,e,r){return o.createHmac("sha256",t).update(e,"utf8").digest(r)}function u(t,e){return o.createHash("sha256").update(t,"utf8").digest(e)}function h(t){return t.replace(/[!'()*]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function p(t,e){"string"==typeof t&&(t=i.parse(t));var r=t.headers=t.headers||{},n=this.matchHost(t.hostname||t.host||r.Host||r.host);this.request=t,this.credentials=e||this.defaultCredentials(),this.service=t.service||n[0]||"",this.region=t.region||n[1]||"us-east-1","email"===this.service&&(this.service="ses"),!t.method&&t.body&&(t.method="POST"),r.Host||r.host||(r.Host=t.hostname||t.host||this.createHost(),t.port&&(r.Host+=":"+t.port)),t.hostname||t.host||(t.hostname=r.Host||r.host),this.isCodeCommitGit="codecommit"===this.service&&"GIT"===t.method}p.prototype.matchHost=function(t){var e=((t||"").match(/([^\.]+)\.(?:([^\.]*)\.)?amazonaws\.com(\.cn)?$/)||[]).slice(1,3);return"es"===e[1]&&(e=e.reverse()),e},p.prototype.isSingleRegion=function(){return["s3","sdb"].indexOf(this.service)>=0&&"us-east-1"===this.region||["cloudfront","ls","route53","iam","importexport","sts"].indexOf(this.service)>=0},p.prototype.createHost=function(){var t=this.isSingleRegion()?"":("s3"===this.service&&"us-east-1"!==this.region?"-":".")+this.region;return("ses"===this.service?"email":this.service)+t+".amazonaws.com"},p.prototype.prepareRequest=function(){this.parsePath();var e,r=this.request,n=r.headers;r.signQuery?(this.parsedPath.query=e=this.parsedPath.query||{},this.credentials.sessionToken&&(e["X-Amz-Security-Token"]=this.credentials.sessionToken),"s3"!==this.service||e["X-Amz-Expires"]||(e["X-Amz-Expires"]=86400),e["X-Amz-Date"]?this.datetime=e["X-Amz-Date"]:e["X-Amz-Date"]=this.getDateTime(),e["X-Amz-Algorithm"]="AWS4-HMAC-SHA256",e["X-Amz-Credential"]=this.credentials.accessKeyId+"/"+this.credentialString(),e["X-Amz-SignedHeaders"]=this.signedHeaders()):(r.doNotModifyHeaders||this.isCodeCommitGit||(!r.body||n["Content-Type"]||n["content-type"]||(n["Content-Type"]="application/x-www-form-urlencoded; charset=utf-8"),!r.body||n["Content-Length"]||n["content-length"]||(n["Content-Length"]=t.byteLength(r.body)),!this.credentials.sessionToken||n["X-Amz-Security-Token"]||n["x-amz-security-token"]||(n["X-Amz-Security-Token"]=this.credentials.sessionToken),"s3"!==this.service||n["X-Amz-Content-Sha256"]||n["x-amz-content-sha256"]||(n["X-Amz-Content-Sha256"]=u(this.request.body||"","hex")),n["X-Amz-Date"]||n["x-amz-date"]?this.datetime=n["X-Amz-Date"]||n["x-amz-date"]:n["X-Amz-Date"]=this.getDateTime()),delete n.Authorization,delete n.authorization)},p.prototype.sign=function(){return this.parsedPath||this.prepareRequest(),this.request.signQuery?this.parsedPath.query["X-Amz-Signature"]=this.signature():this.request.headers.Authorization=this.authHeader(),this.request.path=this.formatPath(),this.request},p.prototype.getDateTime=function(){if(!this.datetime){var t=this.request.headers,e=new Date(t.Date||t.date||new Date);this.datetime=e.toISOString().replace(/[:\-]|\.\d{3}/g,""),this.isCodeCommitGit&&(this.datetime=this.datetime.slice(0,-1))}return this.datetime},p.prototype.getDate=function(){return this.getDateTime().substr(0,8)},p.prototype.authHeader=function(){return["AWS4-HMAC-SHA256 Credential="+this.credentials.accessKeyId+"/"+this.credentialString(),"SignedHeaders="+this.signedHeaders(),"Signature="+this.signature()].join(", ")},p.prototype.signature=function(){var t,e,r,n=this.getDate(),i=[this.credentials.secretAccessKey,n,this.region,this.service].join(),s=a.get(i);return s||(t=c("AWS4"+this.credentials.secretAccessKey,n),e=c(t,this.region),r=c(e,this.service),s=c(r,"aws4_request"),a.set(i,s)),c(s,this.stringToSign(),"hex")},p.prototype.stringToSign=function(){return["AWS4-HMAC-SHA256",this.getDateTime(),this.credentialString(),u(this.canonicalString(),"hex")].join("\n")},p.prototype.canonicalString=function(){this.parsedPath||this.prepareRequest();var t,e=this.parsedPath.path,r=this.parsedPath.query,n=this.request.headers,i="",s="s3"!==this.service,o="s3"===this.service||this.request.doNotEncodePath,a="s3"===this.service,c="s3"===this.service;if(t="s3"===this.service&&this.request.signQuery?"UNSIGNED-PAYLOAD":this.isCodeCommitGit?"":n["X-Amz-Content-Sha256"]||n["x-amz-content-sha256"]||u(this.request.body||"","hex"),r){var p=Object.keys(r).reduce((function(t,e){return e?(t[e]=Array.isArray(r[e])?c?r[e][0]:r[e].slice().sort():r[e],t):t}),{}),f=[];Object.keys(p).forEach((function(t){var e=encodeURIComponent(t)+"=";Array.isArray(p[t])?p[t].forEach((function(t){f.push(h(e+encodeURIComponent(t)))})):f.push(h(e+encodeURIComponent(p[t])))})),i=f.sort().join("&")}return"/"!==e&&(s&&(e=e.replace(/\/{2,}/g,"/")),"/"!==(e=e.split("/").reduce((function(t,e){return s&&".."===e?t.pop():s&&"."===e||(o&&(e=decodeURIComponent(e).replace(/\+/g," ")),t.push(h(encodeURIComponent(e)))),t}),[]).join("/"))[0]&&(e="/"+e),a&&(e=e.replace(/%2F/g,"/"))),[this.request.method||"GET",e,i,this.canonicalHeaders()+"\n",this.signedHeaders(),t].join("\n")},p.prototype.canonicalHeaders=function(){var t=this.request.headers;return Object.keys(t).sort((function(t,e){return t.toLowerCase()<e.toLowerCase()?-1:1})).map((function(e){return e.toLowerCase()+":"+t[e].toString().trim().replace(/\s+/g," ")})).join("\n")},p.prototype.signedHeaders=function(){return Object.keys(this.request.headers).map((function(t){return t.toLowerCase()})).sort().join(";")},p.prototype.credentialString=function(){return[this.getDate(),this.region,this.service,"aws4_request"].join("/")},p.prototype.defaultCredentials=function(){var t=process.env;return{accessKeyId:t.AWS_ACCESS_KEY_ID||t.AWS_ACCESS_KEY,secretAccessKey:t.AWS_SECRET_ACCESS_KEY||t.AWS_SECRET_KEY,sessionToken:t.AWS_SESSION_TOKEN}},p.prototype.parsePath=function(){var t=this.request.path||"/";/[^0-9A-Za-z;,/?:@&=+$\-_.!~*'()#%]/.test(t)&&(t=encodeURI(decodeURI(t)));var e=t.indexOf("?"),r=null;e>=0&&(r=s.parse(t.slice(e+1)),t=t.slice(0,e)),this.parsedPath={path:t,query:r}},p.prototype.formatPath=function(){var t=this.parsedPath.path,e=this.parsedPath.query;return e?(null!=e[""]&&delete e[""],t+"?"+h(s.stringify(e))):t},n.RequestSigner=p,n.sign=function(t,e){return new p(t,e).sign()}}).call(this,r(4))},function(t,e){var r=/^(?:(?:(([^:\/#\?]+:)?(?:(?:\/\/)(?:(?:(?:([^:@\/#\?]+)(?:\:([^:@\/#\?]*))?)@)?(([^:\/#\?\]\[]+|\[[^\/\]@#?]+\])(?:\:([0-9]+))?))?)?)?((?:\/?(?:[^\/\?#]+\/+)*)(?:[^\?#]*)))?(\?[^#]+)?)(#.*)?/;t.exports.parse=function(t){var e=r.exec(t);return{href:e[0],origin:e[1],protocol:e[2],username:e[3],password:e[4],host:e[5],hostname:e[6],port:e[7],pathname:e[8],search:e[9],hash:e[10]}},t.exports.format=function(t){var e=t.protocol?t.protocol+"//":"",r=t.port?":"+t.port:"",n="";return t.origin?n=t.origin:t.host?n=e+t.host:t.hostname&&(n=e+t.hostname+r),n+(t.pathname||"")+(t.search||"")+(t.hash||"")}},function(t,e,r){"use strict";r.r(e);var n=r(1),i=r.n(n),s=r(2),o=r.n(s);function a(t,e,r){return(a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var i=new(Function.bind.apply(t,n));return r&&c(i,r.prototype),i}).apply(null,arguments)}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){p(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}i.a.fetch=function(){if(!("fetch"in window))throw new Error("fetch is not defined");for(var t,e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];if("string"==typeof r[0]){var s=o.a.parse(r[0]),c=s.protocol,u=s.host,p=s.port,f=s.pathname,l=s.search;if(2===r.length)t=new n.RequestSigner({host:u,port:p,path:"".concat(f).concat(l||""),protocol:c},r[1]);else{var d=r[1],y=r[2];t=new n.RequestSigner(h({host:u,port:p,path:"".concat(f).concat(l||""),protocol:c},d),y)}}else(t=a(n.RequestSigner,r)).request.protocol="https:";var g=o.a.parse("path"in t.request?t.request.path:""),m=g.pathname,v=g.search,b=o.a.format(h({pathname:m,search:v},t.request));return t.sign(),fetch(b,t.request)},e.default=i.a},function(t,e,r){"use strict";r.r(e),r.d(e,"byteLength",(function(){return s}));var n=r(0),i=r.n(n);function s(t){return i.a.bitArray.bitLength(i.a.codec.utf8String.toBits(t))/8}},function(t,e,r){"use strict";e.decode=e.parse=r(6),e.encode=e.stringify=r(7)},function(t,e,r){"use strict";function n(t,e){return Object.prototype.hasOwnProperty.call(t,e)}t.exports=function(t,e,r,s){e=e||"&",r=r||"=";var o={};if("string"!=typeof t||0===t.length)return o;var a=/\+/g;t=t.split(e);var c=1e3;s&&"number"==typeof s.maxKeys&&(c=s.maxKeys);var u=t.length;c>0&&u>c&&(u=c);for(var h=0;h<u;++h){var p,f,l,d,y=t[h].replace(a,"%20"),g=y.indexOf(r);g>=0?(p=y.substr(0,g),f=y.substr(g+1)):(p=y,f=""),l=decodeURIComponent(p),d=decodeURIComponent(f),n(o,l)?i(o[l])?o[l].push(d):o[l]=[o[l],d]:o[l]=d}return o};var i=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},function(t,e,r){"use strict";var n=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};t.exports=function(t,e,r,a){return e=e||"&",r=r||"=",null===t&&(t=void 0),"object"==typeof t?s(o(t),(function(o){var a=encodeURIComponent(n(o))+r;return i(t[o])?s(t[o],(function(t){return a+encodeURIComponent(n(t))})).join(e):a+encodeURIComponent(n(t[o]))})).join(e):a?encodeURIComponent(n(a))+r+encodeURIComponent(n(t)):""};var i=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function s(t,e){if(t.map)return t.map(e);for(var r=[],n=0;n<t.length;n++)r.push(e(t[n],n));return r}var o=Object.keys||function(t){var e=[];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.push(r);return e}},function(t,e,r){"use strict";r.r(e),r.d(e,"createHmac",(function(){return s})),r.d(e,"createHash",(function(){return o}));var n=r(0),i=r.n(n);function s(t,e){var r=new i.a.misc.hmac("string"==typeof e?i.a.codec.utf8String.toBits(e):e);return{update:function(t){return r.update(t),{digest:function(t){var e=r.digest();return e="hex"===t?i.a.codec.hex.fromBits(e):e}}}}}function o(){var t=new i.a.hash.sha256;return{update:function(e){return t.update(e),{digest:function(){return i.a.codec.hex.fromBits(t.finalize())}}}}}},function(t,e){function r(t){this.capacity=0|t,this.map=Object.create(null),this.list=new n}function n(){this.firstNode=null,this.lastNode=null}function i(t,e){this.key=t,this.val=e,this.prev=null,this.next=null}t.exports=function(t){return new r(t)},r.prototype.get=function(t){var e=this.map[t];if(null!=e)return this.used(e),e.val},r.prototype.set=function(t,e){var r=this.map[t];if(null!=r)r.val=e;else{if(this.capacity||this.prune(),!this.capacity)return!1;r=new i(t,e),this.map[t]=r,this.capacity--}return this.used(r),!0},r.prototype.used=function(t){this.list.moveToFront(t)},r.prototype.prune=function(){var t=this.list.pop();null!=t&&(delete this.map[t.key],this.capacity++)},n.prototype.moveToFront=function(t){this.firstNode!=t&&(this.remove(t),null==this.firstNode?(this.firstNode=t,this.lastNode=t,t.prev=null,t.next=null):(t.prev=null,t.next=this.firstNode,t.next.prev=t,this.firstNode=t))},n.prototype.pop=function(){var t=this.lastNode;return null!=t&&this.remove(t),t},n.prototype.remove=function(t){this.firstNode==t?this.firstNode=t.next:null!=t.prev&&(t.prev.next=t.next),this.lastNode==t?this.lastNode=t.prev:null!=t.next&&(t.next.prev=t.prev)}}]).default}));