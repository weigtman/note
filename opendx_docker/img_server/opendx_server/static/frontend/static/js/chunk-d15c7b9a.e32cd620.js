(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d15c7b9a"],{"184a":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-form",{attrs:{data:t.app,"label-width":"80px","label-position":"left"}},[a("el-form-item",{attrs:{label:"平台",rules:[{required:!0}]}},[a("el-radio-group",{attrs:{disabled:!t.isAdd},model:{value:t.app.platform,callback:function(e){t.$set(t.app,"platform",e)},expression:"app.platform"}},t._l(t.platforms,function(e){return a("el-radio",{key:e.type,attrs:{label:e.type}},[t._v("\n        "+t._s(e.name)+"\n      ")])}),1)],1),t._v(" "),t.isAdd?a("el-form-item",{attrs:{label:"app",rules:[{required:!0}]}},[a("el-upload",{attrs:{drag:"",action:"/","on-change":t.onChange,multiple:!1,"auto-upload":!1}},[a("i",{staticClass:"el-icon-upload"}),a("div",[t._v("将app拖到此处，或点击选择app")])])],1):t._e(),t._v(" "),a("el-form-item",{attrs:{label:"app名",rules:[{required:!0}]}},[a("el-input",{staticStyle:{width:"300px"},attrs:{clearable:""},model:{value:t.app.name,callback:function(e){t.$set(t.app,"name","string"===typeof e?e.trim():e)},expression:"app.name"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",loading:t.saveBtnLoading},on:{click:t.saveApp}},[t._v("保 存")])],1)],1)},p=[],i=a("b562"),s={props:{isAdd:Boolean},data:function(){return{platforms:[{type:1,name:"Android"},{type:2,name:"iOS"}],choosedApp:null,saveBtnLoading:!1,app:{id:void 0,name:"",platform:1,projectId:this.$store.state.project.id}}},created:function(){var t=this;this.isAdd||Object(i["c"])({id:this.$route.params.appId}).then(function(e){t.app=e.data[0]})},methods:{onChange:function(t){this.choosedApp=t},saveAppSuccess:function(t){var e=this;this.$notify.success(t),this.$store.dispatch("tagsView/delView",this.$store.state.tagsView.visitedViews.filter(function(t){return t.path===e.$route.path})[0]),this.$router.back()},saveApp:function(){var t=this;if(this.saveBtnLoading=!0,this.isAdd){if(null==this.choosedApp)return this.$notify.error("请选择一个app"),void(this.saveBtnLoading=!1);var e=new FormData;for(var a in e.append("file",this.choosedApp.raw),this.app)this.app[a]&&e.append(a,this.app[a]);Object(i["e"])(e).then(function(e){t.saveAppSuccess(e.msg)}).finally(function(){t.saveBtnLoading=!1})}else Object(i["d"])(this.app).then(function(e){t.saveAppSuccess(e.msg)}).finally(function(){t.saveBtnLoading=!1})}}},r=s,o=a("2877"),l=Object(o["a"])(r,n,p,!1,null,null,null);e["a"]=l.exports},"3f3b":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("save-app",{attrs:{"is-add":!0}})],1)},p=[],i=a("184a"),s={name:"AddApp",components:{SaveApp:i["a"]}},r=s,o=a("2877"),l=Object(o["a"])(r,n,p,!1,null,null,null);e["default"]=l.exports},b562:function(t,e,a){"use strict";a.d(e,"e",function(){return p}),a.d(e,"b",function(){return i}),a.d(e,"d",function(){return s}),a.d(e,"c",function(){return r}),a.d(e,"a",function(){return o});var n=a("b775");function p(t){return Object(n["a"])({method:"post",headers:{"Content-Type":"multipart/form-data"},url:"/app/upload",data:t})}function i(t){return Object(n["a"])({method:"delete",url:"/app/"+t})}function s(t){return Object(n["a"])({method:"post",url:"/app/update",data:t})}function r(t){return Object(n["a"])({method:"post",url:"/app/list",params:t})}function o(t){return Object(n["a"])({method:"get",url:"/app/"+t+"/aaptDumpBadging"})}}}]);