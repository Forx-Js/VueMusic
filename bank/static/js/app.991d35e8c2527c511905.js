webpackJsonp([1],{"/iqk":function(t,e){},"0buk":function(t,e){},FBu2:function(t,e){},KgXz:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),n={name:"player",data:function(){return{isPlay:!0}},mounted:function(){var t=document.querySelector("#player"),e=this;t.onplay=function(){e.isPlay=!0},t.onpause=function(){e.isPlay=!1}},methods:{doPlayer:function(){var t=document.querySelector("#player");this.isPlay?t.pause():t.play()}}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"audio"},[s("img",{class:t.isPlay?"on":"off",attrs:{src:a("u6Hf")},on:{click:function(e){t.doPlayer()}}}),t._v(" "),s("audio",{attrs:{id:"player",loop:"loop",autoplay:"",src:"http://ws.stream.qqmusic.qq.com/C100001J5QJL1pRQYB.m4a?fromtag=38"}})])},staticRenderFns:[]};var r={name:"App",components:{player:a("VU/8")(n,i,!1,function(t){a("0buk")},"data-v-73b7c9d3",null).exports}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("el-container",[e("el-header",{staticStyle:{height:"2em"}},[e("player")],1),this._v(" "),e("el-main",[e("transition",{attrs:{name:"fade"}},[e("keep-alive",[e("router-view")],1)],1)],1),this._v(" "),e("el-footer",{staticClass:"Appfooter"},[e("router-link",{staticClass:"AppfooterLink",attrs:{"active-class":"activePage",to:{name:"HelloWorld"}}},[this._v("认领任务条")]),this._v(" "),e("router-link",{staticClass:"AppfooterLink",attrs:{"active-class":"activePage",to:{name:"fight"}}},[this._v("全年运营评价提升PK赛")])],1)],1)],1)},staticRenderFns:[]};var o=a("VU/8")(r,l,!1,function(t){a("KgXz")},null,null).exports,c=a("/ocq"),u={data:function(){var t=["二环东路支行","花园支行","解放路支行","朝山街支行","燕山支行","文东支行","大明湖支行","明湖东路支行","工业南路支行","泺源大街支行","开元支行","分行营业部","浆水泉支行","山大路支行","历山东路支行","文西支行","甸柳支行","龙奥支行"],e=["“零”风险类差错|“零”风险类差错","“零”违规预警|“零”违规预警","支付、交换业务“零”差错|支付、交换业务“零”差错","“零”屡查屡犯问题|“零”屡查屡犯问题","监管红线“零”容忍|监管红线“零”容忍","服务排名全行前 30 |服务排名全行前 30 ","“零”反洗钱差错|“零”反洗钱差错","集中授权差错≤2 |集中授权差错≤2 ","账户、国库业务“零”差错|账户、国库业务“零”差错"],a=new Array,s=new Array;function n(t){this.branch=t,this.tasks=new Array}function i(t,e){this.label=t.split("|")[1],this.name=t.split("|")[0],this.id=e}for(var r in t)a.push(new n(t[r]));for(var l in e)s.push(new i(e[l],l));return{tableData:a,taskArr:s,tempSub:a[0]}},methods:{setTempSub:function(t){this.tempSub=t},setSubTasks:function(t){this.tempSub.tasks=t},clearSubTasks:function(t,e,a){e.tasks.splice(0,e.tasks.length)}}},f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tasks"},[a("div",{staticClass:"elect"},[a("div",{staticClass:"title"}),t._v(" "),a("div",{staticClass:"content"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:18}},[a("el-card",{staticClass:"box-card card-color"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("支行表单")])]),t._v(" "),a("div",{staticClass:"sub-branch"},[a("el-table",{staticClass:"jjj",staticStyle:{width:"100%"},attrs:{height:"400px",data:t.tableData,"highlight-current-row":""},on:{"current-change":t.setTempSub}},[a("el-table-column",{attrs:{prop:"branch",label:"支行名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"tasks[0]",label:"任务一"}}),t._v(" "),a("el-table-column",{attrs:{prop:"tasks[1]",label:"任务二"}}),t._v(" "),a("el-table-column",{attrs:{prop:"tasks[2]",label:"任务三"}}),t._v(" "),a("el-table-column",{attrs:{prop:"tasks[3]",label:"任务四"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){t.clearSubTasks(e.$index,e.row)}}},[t._v("清除任务")])]}}])})],1)],1)])],1),t._v(" "),a("el-col",{attrs:{span:6}},[a("el-card",{staticClass:"box-card card-color"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("任务名单")])]),t._v(" "),a("el-checkbox-group",{staticClass:"tempSubTasks",attrs:{max:4,min:0},on:{change:t.setSubTasks},model:{value:t.tempSub.tasks,callback:function(e){t.$set(t.tempSub,"tasks",e)},expression:"tempSub.tasks"}},t._l(t.taskArr,function(e){return a("el-checkbox",{key:e.id,staticClass:"checkbox-color",staticStyle:{display:"block",margin:"8px 0px"},attrs:{border:"",label:e.name,size:"medium"}},[t._v("\n              "+t._s(e.label)+"\n              ")])}))],1)],1)],1),t._v(" "),a("div",{staticClass:"slogan"},[t._v("固合规 强执行 2018我们砥砺前行！")])],1)])])},staticRenderFns:[]};var d=a("VU/8")(u,f,!1,function(t){a("/iqk")},"data-v-55f7739a",null).exports,p=a("mvHQ"),h=a.n(p),m={name:"fight",data:function(){return{offenseArr:["龙奥支行","甸柳支行","文西支行","历山东路支行","山大路支行","浆水泉支行","分行营业部","开元支行","泺源大街支行"],defenderArr:["二环东路支行","花园支行","解放路支行","朝山街支行","燕山支行","文东支行","大明湖支行","明湖东路支行","工业南路支行"],fightTemp:{offense:null,defender:null,index:{o:null,d:null}},fightArr:new Array}},methods:{setFight:function(t,e,a){0===t?(this.fightTemp.offense=e,this.fightTemp.index.o=a):(this.fightTemp.index.d=a,this.fightTemp.defender=e)},mateTeam:function(){if(this.fightArr.length<9&&null!==this.fightTemp.offense&&null!==this.fightTemp.defender){var t=JSON.parse(h()(this.fightTemp));this.fightArr.push(t),this.offenseArr.splice(t.index.o,1),this.defenderArr.splice(t.index.d,1),this.fightTemp={offense:null,defender:null,index:{o:null,d:null}}}else this.$alert("请确定检查双方阵容","错误",{confirmButtonText:"返回"})}}},v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"fight"},[a("div",{staticClass:"teamArr"},[a("el-row",{attrs:{gutter:16}},t._l(t.fightArr,function(e,s){return a("el-col",{key:s,attrs:{span:8}},[a("div",{staticClass:"teamList"},[t._v("\n    "+t._s(e.offense)+" vs "+t._s(e.defender)+" \n\n    ")])])}))],1),t._v(" "),a("el-row",{attrs:{gutter:20}},t._l(2,function(e){return a("el-col",{key:e,attrs:{span:12}},[a("el-card",[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v(t._s(1==e?"进取组":"榜样组"))])]),t._v(" "),a("div",{staticClass:"subArr"},t._l(1===e?t.offenseArr:t.defenderArr,function(s,n){return a("div",{key:s,staticClass:"sub subList",class:n===(1===e?t.fightTemp.index.o:t.fightTemp.index.d)?"active":"",on:{click:function(a){t.setFight(e-1,s,n)}}},[t._v("\n          "+t._s(s)+"\n        ")])}))])],1)})),t._v(" "),a("div",{staticClass:"tempTeam"},[a("div",{staticClass:"vs"},[t._v(t._s(t.fightTemp.offense?t.fightTemp.offense:"等待选择")+" vs "+t._s(t.fightTemp.defender?t.fightTemp.defender:"等待选择"))]),t._v(" "),a("el-button",{attrs:{type:"danger",plain:""},on:{click:t.mateTeam}},[t._v("PK")])],1)],1)},staticRenderFns:[]};var A=a("VU/8")(m,v,!1,function(t){a("FBu2")},"data-v-054baa42",null).exports;s.default.use(c.a);var g=new c.a({routes:[{path:"/hello",name:"HelloWorld",component:d},{path:"/fight",name:"fight",component:A}]}),b=a("zL8q"),k=a.n(b);a("tvR6");s.default.config.productionTip=!1,s.default.use(k.a),new s.default({el:"#app",router:g,render:function(t){return t(o)}})},tvR6:function(t,e){},u6Hf:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADXUlEQVRoQ+2ai3EUMRBEZyKAiwATAecIcAbYEWAiACKAiwA7AiACTAT4IsCOADsCIIKhnkpadnX7kbS6T7msqiu77P10z7RGPdKpVBhm9lREXonIkYic+J/83h53IsLn2v/8rqp/5r5eSx/gQb8WkXMRWRY+50ZEvojI11Iy2QTMjMi+9cCJfI1BJiByqapkKXlkETCzDyLyTkRqAY+BQuRCVVepDJIImBkS+TxDKql4wnVI6ywlG5MEzAyNf9pi1IfIkY33qoq0BscoAQ+eyO9zvBkjMUjgQMCHwA2S6CVwYOADCebEVSyFDQJ+wv7Yg+anZMqcOI4ndh+BnzusNlOg4//fqOpx+48dAmb2UUSo9Yc8VqoKTjcaAn6FJfrbWqRqBaUjpTaBC28Rar1o6jn33tgBCGuSM5osOALemP3acvRvRYQVFjd6HSajmeFeKRo5A9LPMYCBAP6G1bbmALAD6wH3WudCAuB0a0MgUKvyXE4BjiM0g4CrSOrl87tG6FV10lt5yb70jc9CRFicciUU4C4ggFmr4neGCJhZAIze+YSxFhFKYimBMwhUqz6BwAjgONFzCawgwCQjQrMHBMzMMh40l8CaF1I+4wY8A8P/S/dA4C43YqPE9kBAHgm0U/KYgYKZh4TYh3lWcO/GLXvIwP2uy+hfv4FF6WZg3Qlg6ULmymjVhWxkHcA+n8QtoZmdisi3QgW4hayqlRgh0LuzMDOAzkqQxjlmjtUUGSxVdTlCYGNXoUIXuAh2mkbjRWYaAX7eI4khK4HuIeH6Ai8depBSF3BLwEobGvRMxDealAQvBBH2Wuf23p2GJlSDJ4lZWKtq2xa722rOpwkcVLOjpqX0L8+pRk1PGl7kJUFfMTeyKTHsNvWeAFpkLqRmgYkbdo7jRiUFROk1RB/5uoOQh7Ox1ZJCSUUqjWbufa7ydAxk/AS/uUulSJVSLojS6zvSCQ95eNvrLSlVsxilIW/dl3fAcWAkyo6YovpOudz1nEDzWJWNU5nRSdyXbm+6eFCuXypVD/uqp1WOWdsI/AEIG8HbygZR56C7OcCYikDSXmZEghUbEkzyWkQccFb2lKhnS2hAVngeSPAplRZSAfjVzr7sMUIGP8QqGb5uE28UYMHD123cQUcp6DaGfw93nhHSIXRWAAAAAElFTkSuQmCC"}},["NHnr"]);
//# sourceMappingURL=app.991d35e8c2527c511905.js.map