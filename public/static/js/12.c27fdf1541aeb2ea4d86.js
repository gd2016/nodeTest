webpackJsonp([12],{497:function(e,t,a){a(627);var o=a(181)(a(554),a(670),"data-v-22980778",null);e.exports=o.exports},509:function(e,t,a){e.exports={default:a(512),__esModule:!0}},510:function(e,t){t.f={}.propertyIsEnumerable},511:function(e,t){t.f=Object.getOwnPropertySymbols},512:function(e,t,a){a(514),e.exports=a(47).Object.assign},513:function(e,t,a){"use strict";var o=a(184),n=a(511),i=a(510),r=a(185),s=a(186),l=Object.assign;e.exports=!l||a(124)(function(){var e={},t={},a=Symbol(),o="abcdefghijklmnopqrst";return e[a]=7,o.split("").forEach(function(e){t[e]=e}),7!=l({},e)[a]||Object.keys(l({},t)).join("")!=o})?function(e,t){for(var a=r(e),l=arguments.length,c=1,d=n.f,f=i.f;l>c;)for(var u,p=s(arguments[c++]),g=d?o(p).concat(d(p)):o(p),m=g.length,h=0;m>h;)f.call(p,u=g[h++])&&(a[u]=p[u]);return a}:l},514:function(e,t,a){var o=a(79);o(o.S+o.F,"Object",{assign:a(513)})},515:function(e,t,a){"use strict";t.__esModule=!0;var o=a(509),n=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default=n.default||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}},516:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a(509),n=a.n(o),i=(a(183),a(182));t.default={data:function(){return{searchContent:{},total:"",pageNow:1,rows:10}},created:function(){this.initData({page:1,rows:10}),this.searchContent=n()({},this.searchData)},watch:{searchData:{handler:function(e,t){this.searchContent=n()({},this.searchData),this.searchContent.rows=this.rows,1==this.pageNow?this.initData(this.searchContent):this.pageNow=1},deep:!0},reload:function(){1==this.pageNow?this.initData(this.searchContent):this.pageNow=1}},methods:{initData:function(e){var t=this;a.i(i.c)(this,e,this.url,function(e){e.data.message?(t.total=0,t.$emit("tableContent",[])):(t.total=e.data.total,t.$emit("tableContent",e.data.rows))})},handleSizeChange:function(e){this.searchContent.rows=e,this.rows=e,this.initData(this.searchContent)},handleCurrentChange:function(e){this.searchContent.page=e,this.initData(this.searchContent)}},props:["searchData","url","reload"]}},517:function(e,t,a){t=e.exports=a(480)(!1),t.push([e.i,"",""])},518:function(e,t,a){var o=a(517);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);a(481)("6f170d66",o,!0)},519:function(e,t,a){a(518);var o=a(181)(a(516),a(520),"data-v-d3b730f0",null);e.exports=o.exports},520:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("el-pagination",{ref:"pagination",attrs:{total:parseInt(e.total),layout:"total, sizes, prev, pager, next, jumper","current-page":e.pageNow},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.pageNow=t}}})},staticRenderFns:[]}},554:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a(515),n=a.n(o),i=a(519),r=a.n(i),s=a(182),l=a(183);t.default={data:function(){return{reload:!1,url:"/aas/admin/software/queryByPage.do",tableHeight:"",tableData:[],buttonData:[],packageVersion:"",searchData:{page:1,rows:10,packageVersion:""},addVisiable:!1,addLoading:!1,addForm:{packageVersion:"",packageUpdateFlag:"1",packageVersionInfo:"",remark:"",softwareFile:"",addfileName:""},fileName:"",rules:{packageVersion:[{required:!0,message:"请输入软件版本",trigger:"blur"},{max:32,message:"输入字符长度不超过32个",trigger:"blur"},{validator:function(e,t,a){0==/^\S*$/.test(t)?a(new Error("不能包含空格")):a()},trigger:"blur"}],packageVersionInfo:[{required:!0,message:"请输入软件版本信息",trigger:"blur"},{max:64,message:"输入字符长度不超过64个",trigger:"blur"},{validator:function(e,t,a){0==/^\S*$/.test(t)?a(new Error("不能包含空格")):a()},trigger:"blur"}],addfileName:[{required:!0,message:"请选择文件",trigger:"change"}],remark:[{max:256,message:"输入字符长度不超过256个",trigger:"blur"}]}}},mounted:function(){var e=this;this.tableHeight=document.documentElement.clientHeight-160,window.onresize=function(){e.tableHeight=document.documentElement.clientHeight-160};var t="";if(window.localStorage){t=window.localStorage.getItem("popedoms")}else t=localStorage.getItem("popedoms");if(this.buttonData=[],t)for(var a=JSON.parse(t),o=a.length,n=0;n<o;n++)4==a[n].popedomButton&&this.buttonData.push(a[n])},computed:n()({},a.i(l.b)(["popedomList"])),methods:n()({},a.i(l.c)(["getPopedom"]),{tableContent:function(e){this.tableData=e||[]},search:function(){for(var e in this.searchData)"page"==e&&"rows"==e||(this.searchData[e]=this[e]);this.searchData.page=1,this.searchData.rows=10},reset:function(){this.packageVersion=""},flagFormat:function(e,t){return"0"==e.packageUpdateFlag?"可选升级":"强制升级"},buttonClick:function(e){var t=this;switch(e){case"openAddDialog()":t.openAddDialog()}},download:function(e){window.open("/aas/download/software.do?packageVersion="+e.packageVersion+"&packageLink="+e.packageLink)},openAddDialog:function(){this.$refs.addForm&&(this.$refs.addForm.resetFields(),this.fileName="",this.$refs.file.value=""),this.addLoading=!1,this.addVisiable=!0,this.addForm.packageUpdateFlag="1"},addSoft:function(){var e=this;this.$refs.addForm.validate(function(t){if(!t)return!1;var o=e.addForm.softwareFile.name,n=/[\u4E00-\u9FA5\uF900-\uFA2D]/,i=o.split(".");if("zip"==i[i.length-1])if(n.test(o))e.$notify.warning({title:"消息",message:"软件包名不能包含中文"});else if(0==/^\S*$/.test(o))e.$notify.warning({title:"消息",message:"软件包名不能含空格"});else if(/^[A-Za-z0-9\.\-\_]+$/.test(o)){e.addForm.softwareFile.size<=20971520?(e.addLoading=!0,a.i(s.d)(e,e.addForm,"/aas/admin/software/upload.do",function(t){t.data&&t.data.type?(e.addVisiable=!1,e.addLoading=!1,e.$message({message:"上传成功",type:"success"}),e.reload=!e.reload):e.addLoading=!1})):e.$notify.warning({title:"消息",message:"软件包大小不能超过20M"})}else e.$notify.warning({title:"消息",message:'软件包名不能含特殊字符除 "." 、 "-" 或"_" '});else e.$notify.warning({title:"消息",message:"请选择zip格式的软件包"})})},selectFile:function(){this.$refs.file.click()},fileChange:function(){this.fileName=this.$refs.file.files[0].name,this.addForm.addfileName=this.$refs.file.files[0].name,this.addForm.softwareFile=this.$refs.file.files[0]}}),components:{pagerows:r.a}}},598:function(e,t,a){t=e.exports=a(480)(!1),t.push([e.i,".handle[data-v-22980778]{margin-bottom:3px}.topNotice[data-v-22980778]{color:red;line-height:25px;text-align:center}.iconfont[data-v-22980778]{font-size:16px;margin-right:4px}.el-alert[data-v-22980778]{margin-bottom:15px}",""])},627:function(e,t,a){var o=a(598);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);a(481)("331f54d4",o,!0)},670:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"softwarePage"}},[a("section",{staticClass:"search"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.searchData}},[a("el-form-item",{attrs:{label:"软件版本"}},[a("el-input",{attrs:{size:"small",placeholder:"请输入软件版本"},nativeOn:{keydown:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13))return null;e.search()}},model:{value:e.packageVersion,callback:function(t){e.packageVersion=t},expression:"packageVersion"}})],1),e._v(" "),a("el-button",{attrs:{size:"small",icon:"search",type:"primary"},on:{click:function(t){e.search()}}},[e._v("查询")]),e._v(" "),a("el-button",{attrs:{size:"small",icon:"circle-close",type:"primary"},on:{click:function(t){e.reset()}}},[e._v("重置")]),e._v(" "),e._l(e.buttonData,function(t,o){return e.buttonData.length?[a("el-button",{key:o,attrs:{size:"small",type:"primary"},on:{click:function(a){e.buttonClick(t.buttonLink)}}},[a("i",{staticClass:"iconfont",class:t.iconLink}),e._v(e._s(t.popedomName))])]:e._e()})],2)],1),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{height:e.tableHeight,"highlight-current-row":"",border:"",stripe:"",data:e.tableData}},[a("el-table-column",{attrs:{"show-overflow-tooltip":"",type:"index",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","show-overflow-tooltip":"",label:"软件包版本号",prop:"packageVersion","min-width":"140"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","show-overflow-tooltip":"",label:"更新标识",prop:"packageUpdateFlag",formatter:e.flagFormat,"min-width":"150"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","show-overflow-tooltip":"",label:"版本信息",prop:"packageVersionInfo","min-width":"180"}}),e._v(" "),a("el-table-column",{attrs:{align:"center","show-overflow-tooltip":"",label:"下载链接","min-width":"240"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"success",size:"small"},on:{click:function(a){e.download(t.row)}}},[e._v(e._s(t.row.packageLink))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center","show-overflow-tooltip":"",label:"更新时间","min-width":"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-icon",{attrs:{name:"time"}}),e._v(" "),a("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.formatPackageDatetime))])]}}])})],1),e._v(" "),a("pagerows",{attrs:{searchData:e.searchData,url:e.url,reload:e.reload},on:{tableContent:e.tableContent}}),e._v(" "),a("el-dialog",{attrs:{size:"tiny",title:"添加软件包",visible:e.addVisiable,"close-on-click-modal":!1},on:{"update:visible":function(t){e.addVisiable=t}}},[a("el-alert",{attrs:{title:"点击提交后系统响应时间可能会比较长，请耐心等待！",type:"info","show-icon":""}}),e._v(" "),a("el-form",{ref:"addForm",attrs:{model:e.addForm,rules:e.rules,"label-width":"110px"}},[a("el-form-item",{attrs:{prop:"packageVersion",label:"软件版本"}},[a("el-input",{ref:"addInput",attrs:{"auto-complete":"off"},model:{value:e.addForm.packageVersion,callback:function(t){e.addForm.packageVersion=t},expression:"addForm.packageVersion"}})],1),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.addForm.packageUpdateFlag,expression:"addForm.packageUpdateFlag"}],attrs:{type:"hidden"},domProps:{value:e.addForm.packageUpdateFlag},on:{input:function(t){t.target.composing||(e.addForm.packageUpdateFlag=t.target.value)}}}),e._v(" "),a("el-form-item",{attrs:{prop:"packageVersionInfo",label:"软件版本信息"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.addForm.packageVersionInfo,callback:function(t){e.addForm.packageVersionInfo=t},expression:"addForm.packageVersionInfo"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"上传软件",prop:"addfileName"}},[a("input",{ref:"file",staticStyle:{display:"none"},attrs:{type:"file"},on:{change:function(t){e.fileChange()}}}),e._v(" "),a("el-input",{staticStyle:{display:"none"},attrs:{"auto-complete":"off"},model:{value:e.addForm.addfileName,callback:function(t){e.addForm.addfileName=t},expression:"addForm.addfileName"}}),e._v(" "),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){e.selectFile()}}},[e._v("选择文件")]),e._v(" "),e.fileName?a("el-tag",{attrs:{type:"primary"}},[e._v(e._s(e.fileName))]):e._e()],1),e._v(" "),a("el-form-item",{attrs:{prop:"remark",label:"备注"}},[a("el-input",{attrs:{type:"textarea","auto-complete":"off"},model:{value:e.addForm.remark,callback:function(t){e.addForm.remark=t},expression:"addForm.remark"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",slot:"footer"},[a("el-button",{attrs:{type:"primary",loading:e.addLoading},on:{click:function(t){e.addSoft()}}},[e._v("确 定")]),e._v(" "),a("el-button",{on:{click:function(t){e.addVisiable=!1}}},[e._v("取 消")])],1)],1)],1)},staticRenderFns:[]}}});