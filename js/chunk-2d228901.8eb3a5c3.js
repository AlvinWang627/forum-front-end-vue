(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d228901"],{da5c:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container py-5"},[r("form",{on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"name"}},[e._v("Name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.name,expression:"user.name"}],staticClass:"form-control",attrs:{id:"name",type:"text",name:"name",placeholder:"Enter Name",required:""},domProps:{value:e.user.name},on:{input:function(t){t.target.composing||e.$set(e.user,"name",t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"image"}},[e._v("Image")]),e.user.image?r("img",{attrs:{width:"200",height:"200",src:e.user.image,alt:""}}):e._e(),r("input",{staticClass:"form-control-file",attrs:{id:"image",type:"file",name:"image",accept:"image/*"},on:{change:e.handleFileChange}})]),r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v(" "+e._s(e.isProcessing?"處理中":"Submit")+" ")])])])},s=[],n=r("1da1"),i=r("5530"),u=(r("96cf"),r("b0c0"),r("d3b7"),r("3ca3"),r("ddb0"),r("2b3d"),r("9861"),r("d9e2"),r("2f62")),c=r("2fa3"),o=r("4cce"),m={data:function(){return{user:{name:"",image:""},isProcessing:!1}},created:function(){var e=this.$route.params.id;this.setUser(e)},computed:Object(i["a"])({},Object(u["b"])(["currentUser"])),watch:{user:function(){var e=this.$route.params.id;e!==this.currentUser.id||this.setUser()}},methods:{setUser:function(){this.user={id:this.currentUser.id,name:this.currentUser.name,image:this.currentUser.image}},handleFileChange:function(e){var t=e.target.files;if(0===t.length)this.user.image="";else{var r=window.URL.createObjectURL(t[0]);this.user.image=r,console.log(r)}},handleSubmit:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var a,s,n,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,t.user.name||c["a"].fire({icon:"error",title:"請輸入姓名"}),a=e.target,s=new FormData(a),r.next=6,o["a"].update({userId:t.id,formData:s});case 6:if(n=r.sent,i=n.data,t.isProcessing=!0,"success"===i.status){r.next=11;break}throw new Error(i.message);case 11:t.$router.push({name:"user",params:{id:t.id}}),r.next=18;break;case 14:r.prev=14,r.t0=r["catch"](0),t.isProcessing=!1,c["a"].fire({icon:"error",title:"目前無法修改"});case 18:case"end":return r.stop()}}),r,null,[[0,14]])})))()}}},l=m,d=r("2877"),p=Object(d["a"])(l,a,s,!1,null,null,null);t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d228901.8eb3a5c3.js.map