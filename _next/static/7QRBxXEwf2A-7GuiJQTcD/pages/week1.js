(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"7BSk":function(t,e,n){"use strict";n.r(e),n.d(e,"Week1",(function(){return w}));var a=n("o0o1"),c=n.n(a),r=n("1OyB"),s=n("vuIU"),i=n("JX7q"),o=n("Ji7U"),u=n("md7G"),l=n("foSv"),f=n("rePB"),d=n("q1tI"),p=n.n(d),h=n("+3Ox"),b=n("R63U"),g=p.a.createElement;function v(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var w=function(t){Object(o.a)(a,t);var e,n=(e=a,function(){var t,n=Object(l.a)(e);if(v()){var a=Object(l.a)(this).constructor;t=Reflect.construct(n,arguments,a)}else t=n.apply(this,arguments);return Object(u.a)(this,t)});function a(){var t;Object(r.a)(this,a);for(var e=arguments.length,s=new Array(e),o=0;o<e;o++)s[o]=arguments[o];return t=n.call.apply(n,[this].concat(s)),Object(f.a)(Object(i.a)(t),"state",{id:null,url:null,resultList:[],isLoading:!1}),Object(f.a)(Object(i.a)(t),"fetchData",(function(e){var n,a;return c.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t.startLoading(!0),r.prev=1,r.next=4,c.a.awrap(fetch("https://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=24c9f8fe-88db-4a6e-895c-498fbc94df94&limit=".concat(e),{method:"GET",headers:{"content-type":"application/json"}}));case 4:if(!(n=r.sent).ok){r.next=13;break}return r.next=8,c.a.awrap(n.json());case 8:a=r.sent,console.log(a.result.results),t.setState({resultList:a.result.results}),r.next=14;break;case 13:throw new Error("ernie xxx");case 14:r.next=19;break;case 16:r.prev=16,r.t0=r.catch(1),console.log(r.t0.message);case 19:return r.prev=19,t.startLoading(!1),r.finish(19);case 22:case"end":return r.stop()}}),null,null,[[1,16,19,22]],Promise)})),Object(f.a)(Object(i.a)(t),"startLoading",(function(e){t.setState({isLoading:e})})),t}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.fetchData("10")}},{key:"render",value:function(){return g("div",null,g(h.a,{title:"\u8543\u8304\u9418 \uff5c Week 1"}),g("div",{style:{textAlign:"center"}},g("button",{className:"fetch-button",onClick:this.fetchData.bind(this,"20")},"button fetch"),this.state.isLoading&&g("div",{className:"loading-content"},g("img",{src:"".concat(b.a,"/images/loading.gif"),alt:"loading"})),this.state.resultList.map((function(t,e){return g("div",{key:e,className:"fetch-id"},t.o_tlc_agency_name," / ",t.o_tlc_agency_phone)}))))}}]),a}(d.Component);e.default=w},cDqn:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/week1",function(){return n("7BSk")}])}},[["cDqn",0,1,2,4]]]);