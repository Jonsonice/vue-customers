webpackJsonp([0],{0:function(t,e){},"8sVM":function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),o=s("/ocq"),r=s("8+8L"),n={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"app"}})},staticRenderFns:[]};s("VU/8")({name:"App"},n,!1,function(t){s("QWe+")},null,null).exports;var i={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"alert alert-warning alert-dismissible",attrs:{role:"alert"}},[this._m(0),this._v("\n\t"+this._s(this.message)+"\n")])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])}]};var l=s("VU/8")({name:"alert",props:["message"],data:function(){return{}}},i,!1,function(t){s("lOiS")},"data-v-078789d1",null).exports,c={name:"customers",data:function(){return{customers:[],alert:"",filterInput:""}},methods:{fetchCustomers:function(){this.$http.get("http://localhost:3000/users").then(function(t){this.customers=t.body})},filterBy:function(t,e){return t.filter(function(t){return t.name.match(e)})}},created:function(){this.$route.query.alert&&(this.alert=this.$route.query.alert),this.fetchCustomers()},updated:function(){this.fetchCustomers()},components:{Alert:l}},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"customers container"},[t.alert?s("Alert",{attrs:{message:t.alert}}):t._e(),t._v(" "),s("h1",{staticClass:"page-header"},[t._v("用户管理系统")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.filterInput,expression:"filterInput"}],staticClass:"form-control",attrs:{type:"text",placeholder:"可根据姓名进行搜索"},domProps:{value:t.filterInput},on:{input:function(e){e.target.composing||(t.filterInput=e.target.value)}}}),t._v(" "),s("br"),t._v(" "),s("table",{staticClass:"table table-striped"},[t._m(0),t._v(" "),s("tbody",t._l(t.filterBy(t.customers,t.filterInput),function(e){return s("tr",{key:e.id},[s("td",[t._v(t._s(e.name))]),t._v(" "),s("td",[t._v(t._s(e.phone))]),t._v(" "),s("td",[t._v(t._s(e.email))]),t._v(" "),s("td",[s("router-link",{staticClass:"btn btn-default",attrs:{to:"/customer/"+e.id}},[t._v("详情")])],1)])}),0)])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("姓名")]),this._v(" "),e("th",[this._v("电话")]),this._v(" "),e("th",[this._v("邮箱")]),this._v(" "),e("th")])])}]};var m=s("VU/8")(c,u,!1,function(t){s("pCog")},null,null).exports,p={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"details container"},[s("router-link",{staticClass:"btn btn-default",attrs:{to:"/"}},[t._v("返回")]),t._v(" "),s("h1",{staticClass:"page-header"},[t._v("\n\t"+t._s(t.customer.name)+"\n\t "),s("span",{staticClass:"pull-right"},[s("router-link",{staticClass:"btn btn-primary",attrs:{to:"/edit/"+t.customer.id}},[t._v("编辑")]),t._v(" "),s("button",{staticClass:"btn btn-danger",on:{click:function(e){t.deleteCustomer(t.customer.id)}}},[t._v("删除")])],1)]),t._v(" "),s("ul",{staticClass:"list-group"},[s("li",{staticClass:"list-group-item"},[s("span",{staticClass:"glyphicon glyphicon-earphone"},[t._v(" "+t._s(t.customer.phone))])]),t._v(" "),s("li",{staticClass:"list-group-item"},[s("span",{staticClass:"glyphicon glyphicon-envelope"},[t._v(" "+t._s(t.customer.email))])])]),t._v(" "),s("ul",{staticClass:"list-group"},[s("li",{staticClass:"list-group-item"},[s("span",{staticClass:"glyphicon glyphicon-education"},[t._v(" "+t._s(t.customer.edcuation))])]),t._v(" "),s("li",{staticClass:"list-group-item"},[s("span",{staticClass:"glyphicon glyphicon-tent"},[t._v(" "+t._s(t.customer.graduationschool))])]),t._v(" "),s("li",{staticClass:"list-group-item"},[s("span",{staticClass:"glyphicon glyphicon-grain"},[t._v(" "+t._s(t.customer.profession))])]),t._v(" "),s("li",{staticClass:"list-group-item"},[s("span",{staticClass:"glyphicon glyphicon-list-alt"},[t._v(" "+t._s(t.customer.profile))])])])],1)},staticRenderFns:[]};var v=s("VU/8")({name:"customerdetails",data:function(){return{customer:""}},methods:{fetchCustomers:function(t){this.$http.get("http://localhost:3000/users/"+t).then(function(t){this.customer=t.body})},deleteCustomer:function(t){this.$http.delete("http://localhost:3000/users/"+t).then(function(t){this.$router.push({path:"/",query:{alert:"用户删除成功!"}})})}},created:function(){this.fetchCustomers(this.$route.params.id)}},p,!1,function(t){s("wVhU")},"data-v-07cc5eb4",null).exports,d={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"about container"},[e("h1",{staticClass:"page-header"},[this._v("我是不是很棒")])])}]};var h=s("VU/8")({name:"about",data:function(){return{}}},d,!1,function(t){s("PaXZ")},null,null).exports,f={name:"add",data:function(){return{customer:{},alert:""}},methods:{addCustomer:function(t){if(this.customer.name&&this.customer.phone&&this.customer.email){var e={name:this.customer.name,phone:this.customer.phone,email:this.customer.email,edcuation:this.customer.edcuation,graduationschool:this.customer.graduationschool,profession:this.customer.profession,profile:this.customer.profile};this.$http.post("http://localhost:3000/users",e).then(function(t){this.$router.push({path:"/",query:{alert:"用户信息添加成功!"}})}),t.preventDefault()}else this.alert="必须添加姓名 电话 邮箱";t.preventDefault()}},components:{Alert:l}},_={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"add container"},[t.alert?s("Alert",{attrs:{message:t.alert}}):t._e(),t._v(" "),s("h1",{staticClass:"page-header"},[t._v("添加用户")]),t._v(" "),s("form",{on:{submit:t.addCustomer}},[s("div",{staticClass:"well"},[s("h4",[t._v("用户信息")]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("姓名")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.customer.name,expression:"customer.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"name"},domProps:{value:t.customer.name},on:{input:function(e){e.target.composing||t.$set(t.customer,"name",e.target.value)}}}),t._v(" "),s("label",[t._v("电话")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.customer.phone,expression:"customer.phone"}],staticClass:"form-control",attrs:{type:"text",placeholder:"phone"},domProps:{value:t.customer.phone},on:{input:function(e){e.target.composing||t.$set(t.customer,"phone",e.target.value)}}}),t._v(" "),s("label",[t._v("邮箱")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.customer.email,expression:"customer.email"}],staticClass:"form-control",attrs:{type:"text",placeholder:"email"},domProps:{value:t.customer.email},on:{input:function(e){e.target.composing||t.$set(t.customer,"email",e.target.value)}}}),t._v(" "),s("label",[t._v("学历")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.customer.education,expression:"customer.education"}],staticClass:"form-control",attrs:{type:"text",placeholder:"education"},domProps:{value:t.customer.education},on:{input:function(e){e.target.composing||t.$set(t.customer,"education",e.target.value)}}}),t._v(" "),s("label",[t._v("毕业学校")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.customer.graduationschool,expression:"customer.graduationschool"}],staticClass:"form-control",attrs:{type:"text",placeholder:"graduationschool"},domProps:{value:t.customer.graduationschool},on:{input:function(e){e.target.composing||t.$set(t.customer,"graduationschool",e.target.value)}}}),t._v(" "),s("label",[t._v("职业")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.customer.profession,expression:"customer.profession"}],staticClass:"form-control",attrs:{type:"text",placeholder:"profession"},domProps:{value:t.customer.profession},on:{input:function(e){e.target.composing||t.$set(t.customer,"profession",e.target.value)}}}),t._v(" "),s("label",[t._v("个人简介")]),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.customer.profile,expression:"customer.profile"}],staticClass:"form-control",attrs:{rows:"10",placeholder:"profile"},domProps:{value:t.customer.profile},on:{input:function(e){e.target.composing||t.$set(t.customer,"profile",e.target.value)}}})]),t._v(" "),s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("添加")])])])],1)},staticRenderFns:[]};var g=s("VU/8")(f,_,!1,function(t){s("8sVM")},null,null).exports,b={name:"edit",data:function(){return{customer:{},alert:""}},methods:{fetchCustomer:function(t){this.$http.get("http://localhost:3000/users/"+t).then(function(t){this.customer=t.body})},updateCustomer:function(t){if(this.customer.name&&this.customer.phone&&this.customer.email){var e={name:this.customer.name,phone:this.customer.phone,email:this.customer.email,edcuation:this.customer.edcuation,graduationschool:this.customer.graduationschool,profession:this.customer.profession,profile:this.customer.profile};this.$http.put("http://localhost:3000/users/"+this.$route.params.id,e).then(function(t){this.$router.push({path:"/",query:{alert:"用户信息更新成功!"}})}),t.preventDefault()}else this.alert="必须添加姓名 电话 邮箱";t.preventDefault()}},created:function(){this.fetchCustomer(this.$route.params.id)},components:{Alert:l}},C={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"edit container"},[t.alert?s("Alert",{attrs:{message:t.alert}}):t._e(),t._v(" "),s("h1",{staticClass:"page-header"},[t._v("编辑用户")]),t._v(" "),s("form",{on:{submit:t.updateCustomer}},[s("div",{staticClass:"well"},[s("h4",[t._v("用户信息")]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("姓名")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.customer.name,expression:"customer.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"name"},domProps:{value:t.customer.name},on:{input:function(e){e.target.composing||t.$set(t.customer,"name",e.target.value)}}}),t._v(" "),s("label",[t._v("电话")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.customer.phone,expression:"customer.phone"}],staticClass:"form-control",attrs:{type:"text",placeholder:"phone"},domProps:{value:t.customer.phone},on:{input:function(e){e.target.composing||t.$set(t.customer,"phone",e.target.value)}}}),t._v(" "),s("label",[t._v("邮箱")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.customer.email,expression:"customer.email"}],staticClass:"form-control",attrs:{type:"text",placeholder:"email"},domProps:{value:t.customer.email},on:{input:function(e){e.target.composing||t.$set(t.customer,"email",e.target.value)}}}),t._v(" "),s("label",[t._v("学历")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.customer.education,expression:"customer.education"}],staticClass:"form-control",attrs:{type:"text",placeholder:"education"},domProps:{value:t.customer.education},on:{input:function(e){e.target.composing||t.$set(t.customer,"education",e.target.value)}}}),t._v(" "),s("label",[t._v("毕业学校")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.customer.graduationschool,expression:"customer.graduationschool"}],staticClass:"form-control",attrs:{type:"text",placeholder:"graduationschool"},domProps:{value:t.customer.graduationschool},on:{input:function(e){e.target.composing||t.$set(t.customer,"graduationschool",e.target.value)}}}),t._v(" "),s("label",[t._v("职业")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.customer.profession,expression:"customer.profession"}],staticClass:"form-control",attrs:{type:"text",placeholder:"profession"},domProps:{value:t.customer.profession},on:{input:function(e){e.target.composing||t.$set(t.customer,"profession",e.target.value)}}}),t._v(" "),s("label",[t._v("个人简介")]),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.customer.profile,expression:"customer.profile"}],staticClass:"form-control",attrs:{rows:"10",placeholder:"profile"},domProps:{value:t.customer.profile},on:{input:function(e){e.target.composing||t.$set(t.customer,"profile",e.target.value)}}})]),t._v(" "),s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("确认")])])])],1)},staticRenderFns:[]};var y=s("VU/8")(b,C,!1,function(t){s("jf+V")},null,null).exports;a.a.config.productionTip=!1,a.a.use(o.a),a.a.use(r.a);var x=new o.a({mode:"history",routes:[{path:"/",component:m},{path:"/about",component:h},{path:"/add",component:g},{path:"/customer/:id",component:v},{path:"/edit/:id",component:y}]});new a.a({router:x,template:'\n\t  <div id="app">\n\t\t<nav class="navbar navbar-default">\n      <div class="container">\n        <div class="navbar-header">\n          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">\n            <span class="sr-only">Toggle navigation</span>\n            <span class="icon-bar"></span>\n            <span class="icon-bar"></span>\n            <span class="icon-bar"></span>\n          </button>\n          <a class="navbar-brand" href="#">用户管理系统</a>\n        </div>\n        <div id="navbar" class="navbar-collapse collapse">\n          <ul class="nav navbar-nav">\n            <li><router-link to="/">主页</router-link></li>\n            <li><router-link to="/about">关于我们</router-link></li>\n          </ul>\n\t\t\t\t\t<ul class="nav navbar-nav navbar-right">\n\t\t\t\t\t\t<li><router-link to="/add">添加用户</router-link></li>\n\t\t\t\t\t</ul>\n        </div>\x3c!--/.nav-collapse --\x3e\n      </div>\n    </nav>\n\t\t<router-view></router-view>\n\t  </div>\n  '}).$mount("#app")},PaXZ:function(t,e){},"QWe+":function(t,e){},"jf+V":function(t,e){},lOiS:function(t,e){},pCog:function(t,e){},wVhU:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.f4d8ee274bba80c97e3d.js.map