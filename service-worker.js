"use strict";var precacheConfig=[["//marvel-assets.freetls.fastly.net/lite-gatsby/index.html","8b465f8c52791608061a8aa479396367"],["//marvel-assets.freetls.fastly.net/lite-gatsby/static/css/main.65027555.css","41e5e45b9b5d9ecaa09b72c11eed3386"],["//marvel-assets.freetls.fastly.net/lite-gatsby/static/js/0.b0b8b2a8.chunk.js","8168c6a864c6195fa37641788375b8ec"],["//marvel-assets.freetls.fastly.net/lite-gatsby/static/js/1.1e79606f.chunk.js","fa9be75d0c9661be0faf1e65486b6999"],["//marvel-assets.freetls.fastly.net/lite-gatsby/static/js/2.07e7bcac.chunk.js","26b0879d90f48aea90536e0135a74982"],["//marvel-assets.freetls.fastly.net/lite-gatsby/static/js/main.328b8323.js","751ceb9ddcec02625597c1cc59fc3fe5"],["//marvel-assets.freetls.fastly.net/lite-gatsby/static/media/about.a9958d22.jpg","a9958d221da6b92dd89656ad50610def"],["//marvel-assets.freetls.fastly.net/lite-gatsby/static/media/home.fe50002b.jpg","fe50002b9d1f64633428447ac08756e8"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,s){var a=new URL(e);return s&&a.pathname.match(s)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],s=new URL(t,self.location),a=createCacheKey(s,hashParamName,n,/\.\w{8}\./);return[s.toString(),a]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var s=new Request(n,{credentials:"same-origin"});return fetch(s).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),s="index.html";(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,s),t=urlsToCacheKeys.has(n));var a="//marvel-assets.freetls.fastly.net/lite-gatsby/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL(a,self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});