(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f215f1c"],{"24d2":function(t,e,r){"use strict";r.d(e,"a",function(){return a}),r.d(e,"b",function(){return o}),r.d(e,"d",function(){return c}),r.d(e,"c",function(){return i});var n=r("b775");function a(t){return Object(n["a"])({method:"post",url:"/project/add",data:t})}function o(t){return Object(n["a"])({method:"delete",url:"/project/"+t})}function c(t){return Object(n["a"])({method:"post",url:"/project/update",data:t})}function i(t){return Object(n["a"])({method:"post",url:"/project/list",params:t})}},a7e8:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-form",{attrs:{data:t.project,"label-width":"60px"}},[r("el-form-item",{attrs:{label:"名称",rules:[{required:!0}]}},[r("el-input",{staticStyle:{width:"300px"},attrs:{clearable:""},model:{value:t.project.name,callback:function(e){t.$set(t.project,"name","string"===typeof e?e.trim():e)},expression:"project.name"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"平台",rules:[{required:!0}]}},[r("el-radio-group",{attrs:{disabled:!t.isAdd},model:{value:t.project.platform,callback:function(e){t.$set(t.project,"platform",e)},expression:"project.platform"}},t._l(t.platforms,function(e){return r("el-radio",{key:e.type,attrs:{label:e.type}},[t._v("\n        "+t._s(e.name)+"\n      ")])}),1)],1),t._v(" "),r("el-form-item",{attrs:{label:"描述"}},[r("el-input",{staticStyle:{width:"300px"},attrs:{type:"textarea"},model:{value:t.project.description,callback:function(e){t.$set(t.project,"description","string"===typeof e?e.trim():e)},expression:"project.description"}})],1),t._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:t.saveProject}},[t._v("保 存")])],1)],1)},a=[],o=r("24d2"),c=r("b0e4"),i={props:{isAdd:Boolean},data:function(){return{platforms:c["a"],project:{id:null,name:"",description:"",platform:null}}},created:function(){var t=this;this.isAdd||Object(o["c"])({id:this.$route.params.projectId}).then(function(e){t.project=e.data[0]})},methods:{saveProjectSuccess:function(t){var e=this;this.$notify.success(t),this.$store.dispatch("tagsView/delView",this.$store.state.tagsView.visitedViews.filter(function(t){return t.path===e.$route.path})[0]),this.$router.back()},saveProject:function(){var t=this;this.isAdd?Object(o["a"])(this.project).then(function(e){t.saveProjectSuccess(e.msg)}):Object(o["d"])(this.project).then(function(e){t.saveProjectSuccess(e.msg)})}}},s=i,u=r("2877"),l=Object(u["a"])(s,n,a,!1,null,null,null);e["a"]=l.exports},b0e4:function(t,e,r){"use strict";r.d(e,"a",function(){return n});var n=[{type:1,name:"Android"},{type:2,name:"iOS"},{type:3,name:"Android-微信web"},{type:4,name:"Android-微信小程序"}]},b30d:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"app-container"},[r("save-project",{attrs:{"is-add":!1}})],1)},a=[],o=r("a7e8"),c={name:"UpdateProject",components:{SaveProject:o["a"]}},i=c,s=r("2877"),u=Object(s["a"])(i,n,a,!1,null,"3b0e6bf7",null);e["default"]=u.exports}}]);