(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d3dc7ae"],{"1c64":function(t,e,n){},"1cc6":function(t,e,n){"use strict";var a=n("1c64"),o=n.n(a);o.a},"333d":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[n("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,"page-sizes":t.pageSizes,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},o=[];n("c5f6");Math.easeInOutQuad=function(t,e,n,a){return t/=a/2,t<1?n/2*t*t+e:(t--,-n/2*(t*(t-2)-1)+e)};var i=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function r(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function u(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function c(t,e,n){var a=u(),o=t-a,c=20,l=0;e="undefined"===typeof e?500:e;var p=function t(){l+=c;var u=Math.easeInOutQuad(l,a,o,e);r(u),l<e?i(t):n&&"function"===typeof n&&n()};p()}var l={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&c(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&c(0,800)}}},p=l,s=(n("1cc6"),n("2877")),d=Object(s["a"])(p,a,o,!1,null,"f3b72548",null);e["a"]=d.exports},"7cc2e":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("div",{staticStyle:{"margin-bottom":"10px"}},[n("el-button",{on:{click:function(e){return t.$router.push({name:"AddApp"})}}},[t._v("添加app")])],1),t._v(" "),n("div",{staticStyle:{"margin-bottom":"10px"}},[n("el-select",{model:{value:t.queryForm.platform,callback:function(e){t.$set(t.queryForm,"platform",e)},expression:"queryForm.platform"}},t._l(t.platforms,function(t){return n("el-option",{key:t.type,attrs:{label:t.name,value:t.type}})}),1),t._v(" "),n("el-button",{staticClass:"el-icon-search",attrs:{type:"primary"},on:{click:t.onQueryBtnClick}})],1),t._v(" "),n("div",[n("el-table",{attrs:{data:t.appList,"highlight-current-row":"",border:""}},[n("el-table-column",{attrs:{label:"平台",align:"center",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[t._v("\n          "+t._s(1===n.platform?"Android":"iOS")+"\n        ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"App名",property:"name",align:"center","show-overflow-tooltip":""}}),t._v(" "),n("el-table-column",{attrs:{label:"下载地址",align:"center",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:a.downloadUrl,expression:"row.downloadUrl",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"}],attrs:{slot:"append",type:"text"},slot:"append"},[t._v("复制")])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"Version",property:"version",align:"center",width:"100","show-overflow-tooltip":""}}),t._v(" "),n("el-table-column",{attrs:{label:"PackageName",property:"packageName",align:"center","show-overflow-tooltip":""}}),t._v(" "),n("el-table-column",{attrs:{label:"LaunchActivity",property:"launchActivity",align:"center","show-overflow-tooltip":""}}),t._v(" "),n("el-table-column",{attrs:{label:"上传时间",align:"center",width:"200","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[t._v("\n          "+t._s(n.uploadorNickName+" "+n.uploadTime)+"\n        ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"操作",align:"center",width:"250"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[1!==a.platform||a.packageName&&a.launchActivity&&a.version?t._e():n("el-button",{attrs:{title:"获取Version PackageName LaunchActivity",loading:t.aaptDumpBadgingBtnLoading},on:{click:function(e){return t.aaptDumpBadging(a)}}},[t._v("aapt dump")]),t._v(" "),n("el-button",{staticClass:"el-icon-edit",attrs:{type:"primary"},on:{click:function(e){return t.updateApp(a)}}}),t._v(" "),n("el-button",{staticClass:"el-icon-delete",attrs:{type:"danger"},on:{click:function(e){return t.deleteApp(a)}}})]}}])})],1)],1),t._v(" "),n("div",[n("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.queryForm.pageNum,limit:t.queryForm.pageSize},on:{"update:page":function(e){return t.$set(t.queryForm,"pageNum",e)},"update:limit":function(e){return t.$set(t.queryForm,"pageSize",e)},pagination:t.fetchAppList}})],1)])},o=[],i=(n("7f7f"),n("b562")),r=n("333d"),u=n("8325"),c={directives:{clipboard:u["a"]},components:{Pagination:r["a"]},data:function(){return{aaptDumpBadgingBtnLoading:!1,platforms:[{type:1,name:"Android"},{type:2,name:"iOS"}],appList:[],total:0,queryForm:{projectId:this.$store.state.project.id,pageNum:1,pageSize:10,platform:null}}},created:function(){this.fetchAppList()},methods:{updateApp:function(t){this.$router.push({name:"UpdateApp",params:{appId:t.id}})},deleteApp:function(t){var e=this;this.$confirm("删除"+t.name,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(i["b"])(t.id).then(function(t){e.$notify.success(t.msg),e.fetchAppList()})})},fetchAppList:function(){var t=this;Object(i["c"])(this.queryForm).then(function(e){t.appList=e.data.data,t.total=e.data.total})},onCopy:function(t){this.$notify.success(t.text+"复制成功")},onQueryBtnClick:function(){this.queryForm.pageNum=1,this.fetchAppList()},aaptDumpBadging:function(t){var e=this;this.aaptDumpBadgingBtnLoading=!0,Object(i["a"])(t.id).then(function(t){e.$notify.success(t.msg),e.fetchAppList()}).finally(function(){e.aaptDumpBadgingBtnLoading=!1})}}},l=c,p=n("2877"),s=Object(p["a"])(l,a,o,!1,null,null,null);e["default"]=s.exports},b562:function(t,e,n){"use strict";n.d(e,"e",function(){return o}),n.d(e,"b",function(){return i}),n.d(e,"d",function(){return r}),n.d(e,"c",function(){return u}),n.d(e,"a",function(){return c});var a=n("b775");function o(t){return Object(a["a"])({method:"post",headers:{"Content-Type":"multipart/form-data"},url:"/app/upload",data:t})}function i(t){return Object(a["a"])({method:"delete",url:"/app/"+t})}function r(t){return Object(a["a"])({method:"post",url:"/app/update",data:t})}function u(t){return Object(a["a"])({method:"post",url:"/app/list",params:t})}function c(t){return Object(a["a"])({method:"get",url:"/app/"+t+"/aaptDumpBadging"})}}}]);