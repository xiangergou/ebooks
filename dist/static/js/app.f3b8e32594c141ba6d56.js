webpackJsonp([1],{"5Rnn":function(e,t){},"9XmQ":function(e,t){},AFmA:function(e,t){},IlOt:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("kV13"),o=function(){var e,t=[];function n(){for(var e=0;e<t.length;e++)t[e].alpha<=0?(document.body.removeChild(t[e].el),t.splice(e,1)):(t[e].y--,t[e].scale+=.004,t[e].alpha-=.013,t[e].el.style.cssText="left:"+t[e].x+"px;top:"+t[e].y+"px;opacity:"+t[e].alpha+";transform:scale("+t[e].scale+","+t[e].scale+") rotate(45deg);background:"+t[e].color);requestAnimationFrame(n)}window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){setTimeout(e,1e3/60)},function(e){var t=document.createElement("style");t.type="text/css";try{t.appendChild(document.createTextNode(e))}catch(n){t.styleSheet.cssText=e}document.getElementsByTagName("head")[0].appendChild(t)}(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: absolute;}.heart:after{top: -5px;}.heart:before{left: -5px;}"),e="function"==typeof window.οnclick&&window.onclick,window.onclick=function(n){e&&e(),function(e){var n=document.createElement("div");n.className="heart",t.push({el:n,x:e.clientX-5,y:e.clientY-5,scale:1,alpha:1,color:"rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")"}),document.body.appendChild(n)}(n)},n()},r={name:"App",mounted:function(){o()}},i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var s=n("C7Lr")(r,i,!1,function(e){n("IlOt")},null,null).exports,l=n("4WWC"),c=n("3cXf"),d=n.n(c),m=n("hJ6B"),u=n.n(m);var f={name:"homeHeader",data:function(){return{activeIndex:"1",activeIndex2:"1",menuList:[]}},created:function(){var e,t=this;(e=new u.a.Query("Category"),e.descending("createdAt").toJSON(),e.find()).then(function(e){console.log(JSON.parse(d()(e)),"res");var n=JSON.parse(d()(e));console.log(n,"data"),t.menuList=n})},methods:{handleSelect:function(e,t){console.log(e,t),4==+e&&this.$router.push({path:"/contribute"})}}},h={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header-wrap"},[n("nav",[n("el-menu",{staticClass:"el-menu",attrs:{"default-active":e.activeIndex,mode:"horizontal","show-timeout":"200"},on:{select:e.handleSelect}},[n("el-menu-item",{staticClass:"_el-menu-item",attrs:{index:"1"}},[e._v("首页")]),e._v(" "),e._l(e.menuList,function(t,a){return n("el-submenu",{key:a,attrs:{index:a+""}},[n("template",{slot:"title"},[e._v(e._s(t.OriginaName))]),e._v(" "),e._l(t.children,function(t,a){return n("el-menu-item",{key:a,attrs:{index:a+""}},[e._v(e._s(t.name))])})],2)}),e._v(" "),n("el-menu-item",{staticClass:"_el-menu-item",attrs:{index:"3"}},[n("a",{attrs:{href:"https://www.ele.me",target:"_blank"}},[e._v("搜索")])]),e._v(" "),n("el-menu-item",{staticClass:"_el-menu-item",attrs:{index:"4"}},[e._v("投稿")])],2)],1),e._v(" "),e._m(0)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("main",[t("div",{staticClass:"content-text"},[t("h1",[this._v("留下")]),this._v(" "),t("h2",[this._v("晚来天欲雪 能饮一杯无")])])])}]};var p=n("C7Lr")(f,h,!1,function(e){n("zVat"),n("n2ef")},"data-v-5f303950",null).exports,v=n("IHPB"),_=n.n(v),b={name:"homeContent",data:function(){return{count:10,loading:!1,activeNames:["1"],booksList:[],showGuide:!1}},computed:{noMore:function(){return this.count>=10},disabled:function(){return this.loading||this.noMore}},created:function(){var e,t=this;(e=new u.a.Query("Books"),e.descending("createdAt").toJSON(),e.find()).then(function(e){var n;console.log(JSON.parse(d()(e)),"res");var a=JSON.parse(d()(e));(n=t.booksList).push.apply(n,_()(a))})},methods:{load:function(){var e=this;this.loading=!0,setTimeout(function(){e.count+=2,e.loading=!1},2e3)},handleChange:function(e){console.log(e)}}},g={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"infinite-list-wrapper"},[e.showGuide?n("el-row",{staticStyle:{"margin-bottom":"20px"}},[n("el-col",{attrs:{span:23}},[n("el-card",{attrs:{shadow:"hover"}},[e._v("\n        总是显示\n      ")])],1)],1):e._e(),e._v(" "),n("el-row",[n("el-col",{attrs:{span:23}},[n("el-card",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:e.load,expression:"load"}],attrs:{shadow:"hover","infinite-scroll-disabled":"disabled"}},[n("el-row",{staticClass:"grid-content",attrs:{gutter:20}},[n("el-col",{attrs:{span:4}},[n("div",{staticClass:"grid-img bg-purple"},[n("el-image",{attrs:{src:"https://www.sanqiu.cc/wp-content/uploads/2020/05/1590884904-20200424022716.jpg",fit:"contain"}})],1)]),e._v(" "),n("el-col",{attrs:{span:20}},[n("div",[n("main",[n("aside",[e._v("留下书屋")]),e._v(" "),n("h2",[e._v("牛奶可乐经济学套装（全四册) 【罗伯特·弗兰克】epub+mobi+azw3")])]),e._v(" "),n("article",[e._v("《牛奶可乐经济学》：《牛奶可乐经济学》是用经济学的原理和方法来解释我们在现实中司空见惯而又未注意到的现象，并通过这些事例和解释来加深人们对经济学的理解。比如，为什么牛奶……")])])])],1),e._v(" "),n("div",{staticClass:"card-bottom"},[e._v("\n           2020年5月31日  1条评论 4人点赞  三秋\n        ")])],1)],1)],1),e._v(" "),e.loading?n("p",[e._v("加载中...")]):e._e(),e._v(" "),e.noMore?n("p",[e._v("没有更多了")]):e._e()],1)},staticRenderFns:[]};var w={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"footer"},[t("main"),this._v(" "),t("h3",[this._v("\n    © 2020 留下. 上方邮箱投稿. | 已在风雨中度过\n    版权声明 本站所有资源来自于互联网以及网友上传，网站内所提供的下载链接均为站外链接，版权归原作者以及开发商所有，仅限个人测试学习之用，网站本身不存储相关资源文件.如侵犯到版权方，请发送邮件到DAYUBUBIAN@GMAIL.COM，站长会在第一时间删除并向您道歉。\n  ")])])}]};var x={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"aside-box"},[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[e._v("您的小小赞助会让在下更有能力投入书籍更新。谢谢。")])]),e._v(" "),n("aside"),e._v(" "),n("footer",{staticClass:"codeListBox"},e._l(e.codeList,function(t,a){return n("div",{key:a},[n("el-image",{staticStyle:{width:"100px",height:"100px"},attrs:{src:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",fit:"fill"}}),e._v(" "),n("p",[e._v(e._s(t.title))])],1)}),0)])],1)},staticRenderFns:[]};var y={name:"home",components:{HomeHeader:p,HomeContent:n("C7Lr")(b,g,!1,function(e){n("AFmA"),n("cXtP")},"data-v-7c69b40e",null).exports,HomeFooter:n("C7Lr")({name:"homeFooter"},w,!1,function(e){n("9XmQ")},"data-v-341ca860",null).exports,HomeAside:n("C7Lr")({name:"homeAside",data:function(){return{codeList:[{url:"",title:"微信"},{url:"",title:"支付宝"}]}}},x,!1,function(e){n("nywG")},"data-v-59e072e1",null).exports},data:function(){return{booksList:[]}},created:function(){console.log(window,document,"ss")},methods:{}},C={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("el-container",[t("el-header",{staticClass:"header",attrs:{height:"320px"}},[t("HomeHeader")],1),this._v(" "),t("el-container",{attrs:{width:"960px"}},[t("el-main",[t("HomeContent")],1),this._v(" "),t("el-aside",{attrs:{width:"400px"}},[t("HomeAside")],1)],1),this._v(" "),t("el-footer",[t("HomeFooter")],1)],1)],1)},staticRenderFns:[]};var k=n("C7Lr")(y,C,!1,function(e){n("mb8K")},"data-v-056125b8",null).exports,A={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login-container"},[n("el-form",{ref:"form",staticStyle:{background:"#fff"},attrs:{model:e.form,"label-width":"80px"}},[n("el-form-item",{attrs:{label:"资源属性"}},[n("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"资源分类"}},[n("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}},[n("el-option",{attrs:{label:"区域一",value:"shanghai"}}),e._v(" "),n("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),e._v(" "),n("el-form-item",{attrs:{label:"资源简介"}},[n("el-col",{attrs:{span:11}},[n("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.form.date1,callback:function(t){e.$set(e.form,"date1",t)},expression:"form.date1"}})],1),e._v(" "),n("el-col",{staticClass:"line",attrs:{span:2}},[e._v("-")]),e._v(" "),n("el-col",{attrs:{span:11}},[n("el-time-picker",{staticStyle:{width:"100%"},attrs:{placeholder:"选择时间"},model:{value:e.form.date2,callback:function(t){e.$set(e.form,"date2",t)},expression:"form.date2"}})],1)],1),e._v(" "),n("el-form-item",{attrs:{label:"资源封面"}},[n("el-switch",{model:{value:e.form.delivery,callback:function(t){e.$set(e.form,"delivery",t)},expression:"form.delivery"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"资源作者"}},[n("el-checkbox-group",{model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[n("el-checkbox",{attrs:{label:"美食/餐厅线上活动",name:"type"}}),e._v(" "),n("el-checkbox",{attrs:{label:"地推活动",name:"type"}}),e._v(" "),n("el-checkbox",{attrs:{label:"线下主题活动",name:"type"}}),e._v(" "),n("el-checkbox",{attrs:{label:"单纯品牌曝光",name:"type"}})],1)],1),e._v(" "),n("el-form-item",{attrs:{label:"特殊资源"}},[n("el-radio-group",{model:{value:e.form.resource,callback:function(t){e.$set(e.form,"resource",t)},expression:"form.resource"}},[n("el-radio",{attrs:{label:"线上品牌商赞助"}}),e._v(" "),n("el-radio",{attrs:{label:"线下场地免费"}})],1)],1),e._v(" "),n("el-form-item",{attrs:{label:"资源上传"}},[n("el-input",{attrs:{type:"textarea"},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}})],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("立即创建")]),e._v(" "),n("el-button",[e._v("取消")])],1)],1)],1)},staticRenderFns:[]};var F=n("C7Lr")({name:"Login",data:function(){return{form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}}},methods:{handleLogin:function(){var e=this;this.$refs.loginForm.validate(function(t){if(!t)return!1;e.loading=!0,e.$store.dispatch("Login",e.loginForm).then(function(){e.loading=!1,e.$router.push({path:"/"})}).catch(function(){e.loading=!1})})}}},A,!1,function(e){n("5Rnn")},"data-v-ac132762",null).exports;a.default.use(l.a);var L=new l.a({routes:[{path:"/",redirect:"/home"},{path:"/home",name:"home",component:k},{path:"/contribute",name:"contribute",component:F}]}),$=n("bQIR"),N=n.n($);n("gFLX");n("hJ6B").init({appId:"AlWeYVtSToe0WIC9iWiVHLsQ-MdYXbMMI",appKey:"gC4mPTDAI5e5GriuORDNgED4"}),a.default.use(N.a),a.default.config.productionTip=!1,new a.default({el:"#app",router:L,components:{App:s},template:"<App/>"})},cXtP:function(e,t){},gFLX:function(e,t){},mb8K:function(e,t){},n2ef:function(e,t){},nywG:function(e,t){},zVat:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.f3b8e32594c141ba6d56.js.map