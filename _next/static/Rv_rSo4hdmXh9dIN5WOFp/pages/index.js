(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+JPL":function(t,e,n){t.exports={default:n("+SFK"),__esModule:!0}},"+SFK":function(t,e,n){n("AUvm"),n("wgeU"),n("adOz"),n("dl0q"),t.exports=n("WEpk").Symbol},"+plK":function(t,e,n){n("ApPD"),t.exports=n("WEpk").Object.getPrototypeOf},"29s/":function(t,e,n){var r=n("WEpk"),o=n("5T2Y"),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n("uOPS")?"pure":"global",copyright:"\xa9 2019 Denis Pushkarev (zloirock.ru)"})},"2GTP":function(t,e,n){var r=n("eaoh");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},"2Nb0":function(t,e,n){n("FlQf"),n("bBy9"),t.exports=n("zLkG").f("iterator")},"2faE":function(t,e,n){var r=n("5K7Z"),o=n("eUtF"),i=n("G8Mo"),u=Object.defineProperty;e.f=n("jmDH")?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(c){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},"3GJH":function(t,e,n){n("lCc8");var r=n("WEpk").Object;t.exports=function(t,e){return r.create(t,e)}},"454i":function(t,e,n){t.exports={error:"Header_error__26ATN",ernie:"Header_ernie__3YW2E"}},"5K7Z":function(t,e,n){var r=n("93I4");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},"5T2Y":function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},"5vMV":function(t,e,n){var r=n("B+OT"),o=n("NsO/"),i=n("W070")(!1),u=n("VVlx")("IE_PROTO");t.exports=function(t,e){var n,c=o(t),a=0,f=[];for(n in c)n!=u&&r(c,n)&&f.push(n);for(;e.length>a;)r(c,n=e[a++])&&(~i(f,n)||f.push(n));return f}},"6/1s":function(t,e,n){var r=n("YqAc")("meta"),o=n("93I4"),i=n("B+OT"),u=n("2faE").f,c=0,a=Object.isExtensible||function(){return!0},f=!n("KUxP")((function(){return a(Object.preventExtensions({}))})),s=function(t){u(t,r,{value:{i:"O"+ ++c,w:{}}})},l=t.exports={KEY:r,NEED:!1,fastKey:function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!a(t))return"F";if(!e)return"E";s(t)}return t[r].i},getWeak:function(t,e){if(!i(t,r)){if(!a(t))return!0;if(!e)return!1;s(t)}return t[r].w},onFreeze:function(t){return f&&l.NEED&&a(t)&&!i(t,r)&&s(t),t}}},"6tYh":function(t,e,n){var r=n("93I4"),o=n("5K7Z"),i=function(t,e){if(o(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{(r=n("2GTP")(Function.call,n("vwuL").f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(o){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:i}},"93I4":function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},A5Xg:function(t,e,n){var r=n("NsO/"),o=n("ar/p").f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(e){return u.slice()}}(t):o(r(t))}},AUvm:function(t,e,n){"use strict";var r=n("5T2Y"),o=n("B+OT"),i=n("jmDH"),u=n("Y7ZC"),c=n("kTiW"),a=n("6/1s").KEY,f=n("KUxP"),s=n("29s/"),l=n("RfKB"),p=n("YqAc"),h=n("UWiX"),d=n("zLkG"),v=n("Zxgi"),y=n("R+7+"),m=n("kAMH"),b=n("5K7Z"),g=n("93I4"),O=n("JB68"),x=n("NsO/"),w=n("G8Mo"),j=n("rr1i"),_=n("oVml"),S=n("A5Xg"),E=n("vwuL"),P=n("mqlF"),k=n("2faE"),M=n("w6GO"),T=E.f,N=k.f,R=S.f,C=r.Symbol,L=r.JSON,D=L&&L.stringify,F=h("_hidden"),U=h("toPrimitive"),A={}.propertyIsEnumerable,W=s("symbol-registry"),Y=s("symbols"),B=s("op-symbols"),V=Object.prototype,H="function"==typeof C&&!!P.f,G=r.QObject,K=!G||!G.prototype||!G.prototype.findChild,I=i&&f((function(){return 7!=_(N({},"a",{get:function(){return N(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=T(V,e);r&&delete V[e],N(t,e,n),r&&t!==V&&N(V,e,r)}:N,J=function(t){var e=Y[t]=_(C.prototype);return e._k=t,e},q=H&&"symbol"==typeof C.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof C},Z=function(t,e,n){return t===V&&Z(B,e,n),b(t),e=w(e,!0),b(n),o(Y,e)?(n.enumerable?(o(t,F)&&t[F][e]&&(t[F][e]=!1),n=_(n,{enumerable:j(0,!1)})):(o(t,F)||N(t,F,j(1,{})),t[F][e]=!0),I(t,e,n)):N(t,e,n)},z=function(t,e){b(t);for(var n,r=y(e=x(e)),o=0,i=r.length;i>o;)Z(t,n=r[o++],e[n]);return t},X=function(t){var e=A.call(this,t=w(t,!0));return!(this===V&&o(Y,t)&&!o(B,t))&&(!(e||!o(this,t)||!o(Y,t)||o(this,F)&&this[F][t])||e)},Q=function(t,e){if(t=x(t),e=w(e,!0),t!==V||!o(Y,e)||o(B,e)){var n=T(t,e);return!n||!o(Y,e)||o(t,F)&&t[F][e]||(n.enumerable=!0),n}},$=function(t){for(var e,n=R(x(t)),r=[],i=0;n.length>i;)o(Y,e=n[i++])||e==F||e==a||r.push(e);return r},tt=function(t){for(var e,n=t===V,r=R(n?B:x(t)),i=[],u=0;r.length>u;)!o(Y,e=r[u++])||n&&!o(V,e)||i.push(Y[e]);return i};H||(c((C=function(){if(this instanceof C)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===V&&e.call(B,n),o(this,F)&&o(this[F],t)&&(this[F][t]=!1),I(this,t,j(1,n))};return i&&K&&I(V,t,{configurable:!0,set:e}),J(t)}).prototype,"toString",(function(){return this._k})),E.f=Q,k.f=Z,n("ar/p").f=S.f=$,n("NV0k").f=X,P.f=tt,i&&!n("uOPS")&&c(V,"propertyIsEnumerable",X,!0),d.f=function(t){return J(h(t))}),u(u.G+u.W+u.F*!H,{Symbol:C});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;et.length>nt;)h(et[nt++]);for(var rt=M(h.store),ot=0;rt.length>ot;)v(rt[ot++]);u(u.S+u.F*!H,"Symbol",{for:function(t){return o(W,t+="")?W[t]:W[t]=C(t)},keyFor:function(t){if(!q(t))throw TypeError(t+" is not a symbol!");for(var e in W)if(W[e]===t)return e},useSetter:function(){K=!0},useSimple:function(){K=!1}}),u(u.S+u.F*!H,"Object",{create:function(t,e){return void 0===e?_(t):z(_(t),e)},defineProperty:Z,defineProperties:z,getOwnPropertyDescriptor:Q,getOwnPropertyNames:$,getOwnPropertySymbols:tt});var it=f((function(){P.f(1)}));u(u.S+u.F*it,"Object",{getOwnPropertySymbols:function(t){return P.f(O(t))}}),L&&u(u.S+u.F*(!H||f((function(){var t=C();return"[null]"!=D([t])||"{}"!=D({a:t})||"{}"!=D(Object(t))}))),"JSON",{stringify:function(t){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(n=e=r[1],(g(e)||void 0!==t)&&!q(t))return m(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!q(e))return e}),r[1]=e,D.apply(L,r)}}),C.prototype[U]||n("NegM")(C.prototype,U,C.prototype.valueOf),l(C,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},ApPD:function(t,e,n){var r=n("JB68"),o=n("U+KD");n("zn7N")("getPrototypeOf",(function(){return function(t){return o(r(t))}}))},AyUB:function(t,e,n){t.exports={default:n("3GJH"),__esModule:!0}},"B+OT":function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},D8kY:function(t,e,n){var r=n("Ojgd"),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=r(t))<0?o(t+e,0):i(t,e)}},EJiy:function(t,e,n){"use strict";e.__esModule=!0;var r=u(n("F+2o")),o=u(n("+JPL")),i="function"===typeof o.default&&"symbol"===typeof r.default?function(t){return typeof t}:function(t){return t&&"function"===typeof o.default&&t.constructor===o.default&&t!==o.default.prototype?"symbol":typeof t};function u(t){return t&&t.__esModule?t:{default:t}}e.default="function"===typeof o.default&&"symbol"===i(r.default)?function(t){return"undefined"===typeof t?"undefined":i(t)}:function(t){return t&&"function"===typeof o.default&&t.constructor===o.default&&t!==o.default.prototype?"symbol":"undefined"===typeof t?"undefined":i(t)}},"F+2o":function(t,e,n){t.exports={default:n("2Nb0"),__esModule:!0}},FYw3:function(t,e,n){"use strict";e.__esModule=!0;var r,o=n("EJiy"),i=(r=o)&&r.__esModule?r:{default:r};e.default=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==("undefined"===typeof e?"undefined":(0,i.default)(e))&&"function"!==typeof e?t:e}},FlQf:function(t,e,n){"use strict";var r=n("ccE7")(!0);n("MPFp")(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})}))},FpHa:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},G8Mo:function(t,e,n){var r=n("93I4");t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},Hfiw:function(t,e,n){var r=n("Y7ZC");r(r.S,"Object",{setPrototypeOf:n("6tYh").set})},Hsns:function(t,e,n){var r=n("93I4"),o=n("5T2Y").document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},JB68:function(t,e,n){var r=n("Jes0");t.exports=function(t){return Object(r(t))}},JbBM:function(t,e,n){n("Hfiw"),t.exports=n("WEpk").Object.setPrototypeOf},Jes0:function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},KUxP:function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},M1xp:function(t,e,n){var r=n("a0xu");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},MPFp:function(t,e,n){"use strict";var r=n("uOPS"),o=n("Y7ZC"),i=n("kTiW"),u=n("NegM"),c=n("SBuE"),a=n("j2DC"),f=n("RfKB"),s=n("U+KD"),l=n("UWiX")("iterator"),p=!([].keys&&"next"in[].keys()),h=function(){return this};t.exports=function(t,e,n,d,v,y,m){a(n,e,d);var b,g,O,x=function(t){if(!p&&t in S)return S[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},w=e+" Iterator",j="values"==v,_=!1,S=t.prototype,E=S[l]||S["@@iterator"]||v&&S[v],P=E||x(v),k=v?j?x("entries"):P:void 0,M="Array"==e&&S.entries||E;if(M&&(O=s(M.call(new t)))!==Object.prototype&&O.next&&(f(O,w,!0),r||"function"==typeof O[l]||u(O,l,h)),j&&E&&"values"!==E.name&&(_=!0,P=function(){return E.call(this)}),r&&!m||!p&&!_&&S[l]||u(S,l,P),c[e]=P,c[w]=h,v)if(b={values:j?P:x("values"),keys:y?P:x("keys"),entries:k},m)for(g in b)g in S||i(S,g,b[g]);else o(o.P+o.F*(p||_),e,b);return b}},MvwC:function(t,e,n){var r=n("5T2Y").document;t.exports=r&&r.documentElement},NV0k:function(t,e){e.f={}.propertyIsEnumerable},NegM:function(t,e,n){var r=n("2faE"),o=n("rr1i");t.exports=n("jmDH")?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},"NsO/":function(t,e,n){var r=n("M1xp"),o=n("Jes0");t.exports=function(t){return r(o(t))}},Ojgd:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},"R+7+":function(t,e,n){var r=n("w6GO"),o=n("mqlF"),i=n("NV0k");t.exports=function(t){var e=r(t),n=o.f;if(n)for(var u,c=n(t),a=i.f,f=0;c.length>f;)a.call(t,u=c[f++])&&e.push(u);return e}},RNiq:function(t,e,n){"use strict";n.r(e),n.d(e,"__N_SSG",(function(){return M})),n.d(e,"App",(function(){return T}));var r=n("o0o1"),o=n.n(r),i=n("1OyB"),u=n("vuIU"),c=n("JX7q"),a=n("Ji7U"),f=n("md7G"),s=n("foSv"),l=n("rePB"),p=n("MX0m"),h=n.n(p),d=n("q1tI"),v=n.n(d),y=n("YFqc"),m=n.n(y),b=n("454i"),g=n.n(b),O=n("R63U"),x=n("+3Ox"),w=n("VrIe"),j=n.n(w),_=v.a.createElement;function S(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var E=function(t){Object(a.a)(r,t);var e,n=(e=r,function(){var t,n=Object(s.a)(e);if(S()){var r=Object(s.a)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return Object(f.a)(this,t)});function r(){return Object(i.a)(this,r),n.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){return _("div",null,"fetch data")}}]),r}(d.Component),P=v.a.createElement;function k(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var M=!0,T=function(t){Object(a.a)(r,t);var e,n=(e=r,function(){var t,n=Object(s.a)(e);if(k()){var r=Object(s.a)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return Object(f.a)(this,t)});function r(){var t;Object(i.a)(this,r);for(var e=arguments.length,o=new Array(e),u=0;u<e;u++)o[u]=arguments[u];return t=n.call.apply(n,[this].concat(o)),Object(l.a)(Object(c.a)(t),"state",{searchText:""}),Object(l.a)(Object(c.a)(t),"handleChangeSearch",(function(e){t.setState({searchText:e.target.value})})),Object(l.a)(Object(c.a)(t),"handleSearch",(function(e){e.preventDefault();var n=t.state.searchText;0!==n.trim().length&&(window.location="".concat(O.a,"/manon?").concat(n))})),Object(l.a)(Object(c.a)(t),"scrollDown",(function(){var e=t.refs.image.offsetTop;window.scrollTo({top:e,behavior:"smooth"})})),t}return Object(u.a)(r,[{key:"componentDidMount",value:function(){return o.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),null,null,null,Promise)}},{key:"render",value:function(){return P("div",{className:"jsx-3389900631"},P(x.a,null),P("h1",{style:{padding:"15px",textAlign:"center",fontWeight:"300"},className:"jsx-3389900631 "+(g.a.error||"")},"This is Ernie NEXT.js website to Github"),P("h1",{style:{padding:"15px",fontSize:"20px",fontWeight:"300",textAlign:"right"},className:"jsx-3389900631"},"#Taiwancanhelp"),P("div",{className:"jsx-3389900631 ernie"},"testing"),P("div",{className:"jsx-3389900631 menu-link"},P(m.a,{href:"/about",as:"".concat(O.a,"/about")},P("a",{className:"jsx-3389900631"},"click me go to About Page"))),P("div",{className:"jsx-3389900631 menu-link"},P(m.a,{href:"/manon",as:"".concat(O.a,"/manon")},P("a",{className:"jsx-3389900631"},"click me go to Manon Page"))),P("div",{className:"jsx-3389900631 menu-link"},P(m.a,{href:"/taiwancanhelp",as:"".concat(O.a,"/taiwancanhelp")},P("a",{className:"jsx-3389900631"},"click me go to Taiwan Can Help"))),P("form",{onSubmit:this.handleSearch,action:"javascript:return true",className:"jsx-3389900631"},P("input",{type:"search",value:this.state.searchText,onChange:this.handleChangeSearch,className:"jsx-3389900631"})),P("input",{type:"text",pattern:"[0-9]*",placeholder:"\u8acb\u8f38\u5165\u6578\u5b57",className:"jsx-3389900631"}),P("form",{action:"javascript:return true",className:"jsx-3389900631"},P("input",{type:"number",placeholder:"\u8acb\u8f38\u5165\u6578\u5b57",className:"jsx-3389900631"})),P("div",{onClick:this.scrollDown,className:"jsx-3389900631 move-down"},"scroll drop"),P(h.a,{id:"3389900631"},[".address.jsx-3389900631{padding:15px;}",".address-item.jsx-3389900631{margin-bottom:1rem;padding-bottom:1rem;border-bottom:1px solid #6c6c6c;}"]),P(j.a,null,P(E,null)),P("img",{src:"".concat(O.a,"/images/love.jpg"),ref:"image",alt:"image",className:"jsx-3389900631"}))}}]),r}(d.Component);e.default=T},"RU/L":function(t,e,n){n("Rqdy");var r=n("WEpk").Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},RfKB:function(t,e,n){var r=n("2faE").f,o=n("B+OT"),i=n("UWiX")("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},Rqdy:function(t,e,n){var r=n("Y7ZC");r(r.S+r.F*!n("jmDH"),"Object",{defineProperty:n("2faE").f})},SBuE:function(t,e){t.exports={}},SEkw:function(t,e,n){t.exports={default:n("RU/L"),__esModule:!0}},"U+KD":function(t,e,n){var r=n("B+OT"),o=n("JB68"),i=n("VVlx")("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},UO39:function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},UWiX:function(t,e,n){var r=n("29s/")("wks"),o=n("YqAc"),i=n("5T2Y").Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},V7oC:function(t,e,n){"use strict";e.__esModule=!0;var r,o=n("SEkw"),i=(r=o)&&r.__esModule?r:{default:r};e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,i.default)(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},VVlx:function(t,e,n){var r=n("29s/")("keys"),o=n("YqAc");t.exports=function(t){return r[t]||(r[t]=o(t))}},VrIe:function(t,e,n){t.exports=n("wtOq")},W070:function(t,e,n){var r=n("NsO/"),o=n("tEej"),i=n("D8kY");t.exports=function(t){return function(e,n,u){var c,a=r(e),f=o(a.length),s=i(u,f);if(t&&n!=n){for(;f>s;)if((c=a[s++])!=c)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===n)return t||s||0;return!t&&-1}}},WEpk:function(t,e){var n=t.exports={version:"2.6.11"};"number"==typeof __e&&(__e=n)},Y7ZC:function(t,e,n){var r=n("5T2Y"),o=n("WEpk"),i=n("2GTP"),u=n("NegM"),c=n("B+OT"),a=function(t,e,n){var f,s,l,p=t&a.F,h=t&a.G,d=t&a.S,v=t&a.P,y=t&a.B,m=t&a.W,b=h?o:o[e]||(o[e]={}),g=b.prototype,O=h?r:d?r[e]:(r[e]||{}).prototype;for(f in h&&(n=e),n)(s=!p&&O&&void 0!==O[f])&&c(b,f)||(l=s?O[f]:n[f],b[f]=h&&"function"!=typeof O[f]?n[f]:y&&s?i(l,r):m&&O[f]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):v&&"function"==typeof l?i(Function.call,l):l,v&&((b.virtual||(b.virtual={}))[f]=l,t&a.R&&g&&!g[f]&&u(g,f,l)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},YFqc:function(t,e,n){t.exports=n("cTJO")},YqAc:function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},"Yz+Y":function(t,e,n){t.exports={default:n("+plK"),__esModule:!0}},Zxgi:function(t,e,n){var r=n("5T2Y"),o=n("WEpk"),i=n("uOPS"),u=n("zLkG"),c=n("2faE").f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||c(e,t,{value:u.f(t)})}},a0xu:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},adOz:function(t,e,n){n("Zxgi")("asyncIterator")},"ar/p":function(t,e,n){var r=n("5vMV"),o=n("FpHa").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},bBy9:function(t,e,n){n("w2d+");for(var r=n("5T2Y"),o=n("NegM"),i=n("SBuE"),u=n("UWiX")("toStringTag"),c="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),a=0;a<c.length;a++){var f=c[a],s=r[f],l=s&&s.prototype;l&&!l[u]&&o(l,u,f),i[f]=i.Array}},cTJO:function(t,e,n){"use strict";var r=n("lwsE"),o=n("W8MJ"),i=n("7W2i"),u=n("a1gu"),c=n("Nsbk");function a(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var f=n("TqRt"),s=n("284h");e.__esModule=!0,e.default=void 0;var l,p=s(n("q1tI")),h=n("QmWs"),d=n("g/15"),v=f(n("nOHt")),y=n("elyg");function m(t){return t&&"object"===typeof t?(0,d.formatWithValidation)(t):t}var b=new Map,g=window.IntersectionObserver,O={};function x(){return l||(g?l=new g((function(t){t.forEach((function(t){if(b.has(t.target)){var e=b.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(l.unobserve(t.target),b.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0)}var w=function(t){i(f,t);var e,n=(e=f,function(){var t,n=c(e);if(a()){var r=c(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return u(this,t)});function f(t){var e;return r(this,f),(e=n.call(this,t)).p=void 0,e.cleanUpListeners=function(){},e.formatUrls=function(t){var e=null,n=null,r=null;return function(o,i){if(r&&o===e&&i===n)return r;var u=t(o,i);return e=o,n=i,r=u,u}}((function(t,e){return{href:(0,y.addBasePath)(m(t)),as:e?(0,y.addBasePath)(m(e)):e}})),e.linkClicked=function(t){var n=t.currentTarget,r=n.nodeName,o=n.target;if("A"!==r||!(o&&"_self"!==o||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var i=e.formatUrls(e.props.href,e.props.as),u=i.href,c=i.as;if(function(t){var e=(0,h.parse)(t,!1,!0),n=(0,h.parse)((0,d.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===n.protocol&&e.host===n.host}(u)){var a=window.location.pathname;u=(0,h.resolve)(a,u),c=c?(0,h.resolve)(a,c):u,t.preventDefault();var f=e.props.scroll;null==f&&(f=c.indexOf("#")<0),v.default[e.props.replace?"replace":"push"](u,c,{shallow:e.props.shallow}).then((function(t){t&&f&&(window.scrollTo(0,0),document.body.focus())}))}}},e.p=!1!==t.prefetch,e}return o(f,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as),n=e.href,r=e.as,o=(0,h.resolve)(t,n);return[o,r?(0,h.resolve)(t,r):o]}},{key:"handleRef",value:function(t){var e=this;this.p&&g&&t&&t.tagName&&(this.cleanUpListeners(),O[this.getPaths().join("%")]||(this.cleanUpListeners=function(t,e){var n=x();return n?(n.observe(t),b.set(t,e),function(){try{n.unobserve(t)}catch(e){console.error(e)}b.delete(t)}):function(){}}(t,(function(){e.prefetch()}))))}},{key:"prefetch",value:function(t){if(this.p){var e=this.getPaths();v.default.prefetch(e[0],e[1],t).catch((function(t){0})),O[e.join("%")]=!0}}},{key:"render",value:function(){var t=this,e=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof e&&(e=p.default.createElement("a",null,e));var i=p.Children.only(e),u={ref:function(e){t.handleRef(e),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(e):"object"===typeof i.ref&&(i.ref.current=e))},onMouseEnter:function(e){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(e),t.prefetch({priority:!0})},onClick:function(e){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(u.href=o||r),p.default.cloneElement(i,u)}}]),f}(p.Component);e.default=w},ccE7:function(t,e,n){var r=n("Ojgd"),o=n("Jes0");t.exports=function(t){return function(e,n){var i,u,c=String(o(e)),a=r(n),f=c.length;return a<0||a>=f?t?"":void 0:(i=c.charCodeAt(a))<55296||i>56319||a+1===f||(u=c.charCodeAt(a+1))<56320||u>57343?t?c.charAt(a):i:t?c.slice(a,a+2):u-56320+(i-55296<<10)+65536}}},dl0q:function(t,e,n){n("Zxgi")("observable")},eUtF:function(t,e,n){t.exports=!n("jmDH")&&!n("KUxP")((function(){return 7!=Object.defineProperty(n("Hsns")("div"),"a",{get:function(){return 7}}).a}))},eaoh:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},fpC5:function(t,e,n){var r=n("2faE"),o=n("5K7Z"),i=n("w6GO");t.exports=n("jmDH")?Object.defineProperties:function(t,e){o(t);for(var n,u=i(e),c=u.length,a=0;c>a;)r.f(t,n=u[a++],e[n]);return t}},hDam:function(t,e){t.exports=function(){}},iCc5:function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},j2DC:function(t,e,n){"use strict";var r=n("oVml"),o=n("rr1i"),i=n("RfKB"),u={};n("NegM")(u,n("UWiX")("iterator"),(function(){return this})),t.exports=function(t,e,n){t.prototype=r(u,{next:o(1,n)}),i(t,e+" Iterator")}},jmDH:function(t,e,n){t.exports=!n("KUxP")((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},kAMH:function(t,e,n){var r=n("a0xu");t.exports=Array.isArray||function(t){return"Array"==r(t)}},kTiW:function(t,e,n){t.exports=n("NegM")},lCc8:function(t,e,n){var r=n("Y7ZC");r(r.S,"Object",{create:n("oVml")})},mRg0:function(t,e,n){"use strict";e.__esModule=!0;var r=u(n("s3Ml")),o=u(n("AyUB")),i=u(n("EJiy"));function u(t){return t&&t.__esModule?t:{default:t}}e.default=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+("undefined"===typeof e?"undefined":(0,i.default)(e)));t.prototype=(0,o.default)(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(r.default?(0,r.default)(t,e):t.__proto__=e)}},mqlF:function(t,e){e.f=Object.getOwnPropertySymbols},oVml:function(t,e,n){var r=n("5K7Z"),o=n("fpC5"),i=n("FpHa"),u=n("VVlx")("IE_PROTO"),c=function(){},a=function(){var t,e=n("Hsns")("iframe"),r=i.length;for(e.style.display="none",n("MvwC").appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),a=t.F;r--;)delete a.prototype[i[r]];return a()};t.exports=Object.create||function(t,e){var n;return null!==t?(c.prototype=r(t),n=new c,c.prototype=null,n[u]=t):n=a(),void 0===e?n:o(n,e)}},rr1i:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},s3Ml:function(t,e,n){t.exports={default:n("JbBM"),__esModule:!0}},tEej:function(t,e,n){var r=n("Ojgd"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},uOPS:function(t,e){t.exports=!0},vlRD:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])},vwuL:function(t,e,n){var r=n("NV0k"),o=n("rr1i"),i=n("NsO/"),u=n("G8Mo"),c=n("B+OT"),a=n("eUtF"),f=Object.getOwnPropertyDescriptor;e.f=n("jmDH")?f:function(t,e){if(t=i(t),e=u(e,!0),a)try{return f(t,e)}catch(n){}if(c(t,e))return o(!r.f.call(t,e),t[e])}},"w2d+":function(t,e,n){"use strict";var r=n("hDam"),o=n("UO39"),i=n("SBuE"),u=n("NsO/");t.exports=n("MPFp")(Array,"Array",(function(t,e){this._t=u(t),this._i=0,this._k=e}),(function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])}),"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},w6GO:function(t,e,n){var r=n("5vMV"),o=n("FpHa");t.exports=Object.keys||function(t){return r(t,o)}},wgeU:function(t,e){},wtOq:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=f(n("Yz+Y")),o=f(n("iCc5")),i=f(n("V7oC")),u=f(n("FYw3")),c=f(n("mRg0")),a=f(n("q1tI"));function f(t){return t&&t.__esModule?t:{default:t}}var s=function(){return a.default.createElement("span",null)},l=function(t){function e(){var t;(0,o.default)(this,e);for(var n=arguments.length,i=Array(n),c=0;c<n;c++)i[c]=arguments[c];var a=(0,u.default)(this,(t=(0,r.default)(e)).call.apply(t,[this].concat(i)));return a.state={canRender:!1},a}return(0,c.default)(e,t),(0,i.default)(e,[{key:"componentDidMount",value:function(){this.setState({canRender:!0})}},{key:"render",value:function(){var t=this.props,e=t.children,n=t.onSSR,r=void 0===n?a.default.createElement(s,null):n;return this.state.canRender?e:r}}]),e}(a.default.Component);e.default=l},zLkG:function(t,e,n){e.f=n("UWiX")},zn7N:function(t,e,n){var r=n("Y7ZC"),o=n("WEpk"),i=n("KUxP");t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],u={};u[t]=e(n),r(r.S+r.F*i((function(){n(1)})),"Object",u)}}},[["vlRD",0,1,3,2]]]);