(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e6aeffd"],{"10ec":function(t,e,l){"use strict";var n=l("2d8e"),a=l.n(n);a.a},"2d8e":function(t,e,l){},f125:function(t,e,l){"use strict";l.r(e);var n=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"app-container"},[l("el-button",{staticStyle:{"margin-bottom":"10px"},on:{click:t.fetchOnlineAgentList}},[t._v("刷新")]),t._v(" "),l("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{data:t.agentList,"highlight-current-row":"",border:""}},[l("el-table-column",{attrs:{label:"状态",align:"center",width:"50"}},[[l("div",{staticClass:"circle"})]],2),t._v(" "),l("el-table-column",{attrs:{label:"操作系统",property:"osName",align:"center",width:"150","show-overflow-tooltip":""}}),t._v(" "),l("el-table-column",{attrs:{label:"appium版本",property:"appiumVersion",align:"center",width:"100","show-overflow-tooltip":""}}),t._v(" "),l("el-table-column",{attrs:{label:"java版本",property:"javaVersion",align:"center",width:"100","show-overflow-tooltip":""}}),t._v(" "),l("el-table-column",{attrs:{label:"地址",align:"center",width:"180","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){var l=e.row;return[t._v("\n        "+t._s(l.ip+":"+l.port)+"\n      ")]}}])}),t._v(" "),l("el-table-column",{attrs:{label:"设备",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[l("el-table",{attrs:{data:n.devices,border:""}},[l("el-table-column",{attrs:{label:"设备id",prop:"id",align:"center","show-overflow-tooltip":""}}),t._v(" "),l("el-table-column",{attrs:{label:"设备名",prop:"name",align:"center","show-overflow-tooltip":""}}),t._v(" "),l("el-table-column",{attrs:{label:"系统",prop:"systemVersion",align:"center","show-overflow-tooltip":""}}),t._v(" "),l("el-table-column",{attrs:{label:"设备状态",align:"center","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){var l=e.row;return[t._v("\n              "+t._s(2===l.status?"在线闲置":"["+l.username+"]使用中")+"\n            ")]}}],null,!0)})],1)]}}])})],1)],1)},a=[],o=l("b775");function r(){return Object(o["a"])({url:"/agent/list/online",method:"get"})}var i={data:function(){return{loading:!1,agentList:[]}},methods:{fetchOnlineAgentList:function(){var t=this;this.loading=!0,r().then(function(e){t.agentList=e.data}).finally(function(){t.loading=!1})}},created:function(){this.fetchOnlineAgentList()}},s=i,c=(l("10ec"),l("2877")),u=Object(c["a"])(s,n,a,!1,null,"2a785ed8",null);e["default"]=u.exports}}]);