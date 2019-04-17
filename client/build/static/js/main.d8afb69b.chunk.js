(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,a){e.exports=a(68)},38:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(29),s=a.n(r),o=(a(38),a(2)),c=a(3),i=a(5),m=a(4),u=a(6),d=a(13),h=a(14),b=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"logOut",value:function(e){e.preventDefault(),localStorage.removeItem("usertoken"),this.props.history.push("/")}},{key:"render",value:function(){var e=l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.b,{to:"/login",className:"nav-link"},"Login")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.b,{to:"/register",className:"nav-link"},"Register"))),t=l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.b,{to:"/dashboard",className:"nav-link"},"Dashboard")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.b,{to:"/profile",className:"nav-link"},"User")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{href:"/#",onClick:this.logOut.bind(this),className:"nav-link"},"Logout")));return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbar1","aria-controls":"navbar1","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggle-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse justify-content-md-center",id:"navbar1"},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.b,{to:"/",className:"nav-link"},"Home"))),localStorage.usertoken?t:e))}}]),t}(n.Component),p=Object(h.d)(b),v=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"jumbotron mt-5"},l.a.createElement("div",{className:"col-sm-8 mx-auto"},l.a.createElement("h1",{className:"text-center"},"WELCOME"))))}}]),t}(n.Component),f=a(12),E=a(1),g=function(e){var t=e.formErrors;return l.a.createElement("div",{className:"formErrors"},Object.keys(t).map(function(e,a){return t[e].length>0?l.a.createElement("p",{key:a},e," ",t[e]):""}))},j=a(16),N=a.n(j),O=function(e){e.data.message},k=N.a.create({timeout:2e3,headers:{Authorization:localStorage.usertoken?"2 ".concat(localStorage.usertoken):" Token is not get"}}),y=function(e){return k.post("/projects/put",e).then(function(e){return e.data}).catch(function(e){return O(e)})},w=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.text;return l.a.createElement("div",{className:"modal",tabIndex:"-1",role:"dialog"},l.a.createElement("div",{className:"modal-dialog",role:"document"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h5",{className:"modal-title"},"Server response"),l.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),l.a.createElement("div",{className:"modal-body"},l.a.createElement("p",null,e)),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Close")))))}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={email:"",password:"",formErrors:{email:"",password:""},emailValid:!1,passwordValid:!1,formValid:!1},a.onChange=a.onChange.bind(Object(E.a)(Object(E.a)(a))),a.onSubmit=a.onSubmit.bind(Object(E.a)(Object(E.a)(a))),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"validateField",value:function(e,t){var a=this.state.formErrors,n=this.state.emailValid,l=this.state.passwordValid;switch(e){case"email":n=t.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i),a.email=n?"":" is invalid";break;case"password":l=t.length>=6,a.password=l?"":" is too short"}this.setState({formErrors:a,emailValid:n,passwordValid:l},this.validateForm)}},{key:"validateForm",value:function(){this.setState({formValid:this.state.emailValid&&this.state.passwordValid})}},{key:"onChange",value:function(e){var t=this,a=e.target.name,n=e.target.value;this.setState(Object(f.a)({},a,n),function(){t.validateField(a,n)})}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault(),function(e){return N.a.post("users/login",{email:e.email,password:e.password}).then(function(e){return e.data}).catch(function(e){console.log(e)})}({email:this.state.email,password:this.state.password}).then(function(e){console.log(e),"error"!==e.status&&(localStorage.usertoken=e.token,t.props.history.push("/profile"))})}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 mt-5 mx-auto"},l.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},l.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"Please sign in"),l.a.createElement("div",{className:"panel panel-default"},l.a.createElement(g,{formErrors:this.state.formErrors})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"email"},"Email Address"),l.a.createElement("input",{type:"email",className:"form-control",name:"email",placeholder:"Enter Email",value:this.state.email,onChange:this.onChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{type:"password",className:"form-control",name:"password",placeholder:"Enter Password",value:this.state.password,onChange:this.onChange})),l.a.createElement("button",{type:"submit",className:"btn btn-lg btn-primary btn-block",disabled:!this.state.formValid},"Sign in")),l.a.createElement(w,null))))}}]),t}(n.Component),S=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={first_name:"",last_name:"",email:"",password:""},a.onChange=a.onChange.bind(Object(E.a)(Object(E.a)(a))),a.onSubmit=a.onSubmit.bind(Object(E.a)(Object(E.a)(a))),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"onChange",value:function(e){this.setState(Object(f.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var a,n={first_name:this.state.first_name,last_name:this.state.last_name,email:this.state.email,password:this.state.password};(a=n,N.a.post("users/register",{first_name:a.first_name,last_name:a.last_name,email:a.email,password:a.password}).then(function(e){console.log("Registered")})).then(function(e){t.props.history.push("/login")})}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 mt-5 mx-auto"},l.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},l.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"Please sign in"),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"first_name"},"First Name"),l.a.createElement("input",{type:"text",className:"form-control",name:"first_name",placeholder:"Enter Fist Name",value:this.state.first_name,onChange:this.onChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"last_name"},"Last Name"),l.a.createElement("input",{type:"text",className:"form-control",name:"last_name",placeholder:"Enter Last Name",value:this.state.last_name,onChange:this.onChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"email"},"Email Address"),l.a.createElement("input",{type:"email",className:"form-control",name:"email",placeholder:"Enter Email",value:this.state.email,onChange:this.onChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{type:"password",className:"form-control",name:"password",placeholder:"Enter Password",value:this.state.password,onChange:this.onChange})),l.a.createElement("button",{type:"submit",className:"btn btn-lg btn-primary btn-block"},"Register")))))}}]),t}(n.Component),x=a(32),_=a.n(x),I=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={first_name:"",last_name:"",email:""},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.usertoken,t=_()(e);console.log(1),this.setState({first_name:t.first_name,last_name:t.last_name,email:t.email})}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"jumbotron mt-5"},l.a.createElement("div",{className:"col-sm-8 mx-auto"},l.a.createElement("h1",{className:"text-center"},"PROFILE")),l.a.createElement("table",{className:"table col-md-6 mx-auto"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"First Name"),l.a.createElement("td",null,this.state.first_name)),l.a.createElement("tr",null,l.a.createElement("td",null,"Last Name"),l.a.createElement("td",null,this.state.last_name)),l.a.createElement("tr",null,l.a.createElement("td",null,"Email"),l.a.createElement("td",null,this.state.email))))))}}]),t}(n.Component),D=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={data:a.props.data,isAlive:!0},a.clickDelete=a.clickDelete.bind(Object(E.a)(Object(E.a)(a))),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"clickDelete",value:function(){var e,t=this;(e={id:"".concat(this.state.data.id)},k.post("/tasks/delete",e).then(function(e){return e}).catch(function(e){return console.log(e)})).then(function(){t.setState({isAlive:!1})}).catch()}},{key:"render",value:function(){var e=this.state.data,t=e.name,a=e.id,n=e.deadline;return this.state.isAlive?l.a.createElement("div",{className:"col-md-12","data-id":a},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},t),l.a.createElement("h6",{className:"card-subtitle"},n),l.a.createElement("button",{className:"btn btn-outline-secondary"},"Edit task"),l.a.createElement("button",{className:"btn btn-danger",onClick:this.clickDelete},"Delete task")))):""}}]),t}(n.Component),L=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={projectId:a.props.projectId,isLoading:!0,tasks:[],error:null,newItem:""},a.onSubmit=a.onSubmit.bind(Object(E.a)(Object(E.a)(a))),a.onChange=a.onChange.bind(Object(E.a)(Object(E.a)(a))),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"onSubmit",value:function(e){var t,a=this;e.preventDefault(),(t={project_id:"".concat(this.state.projectId),name:this.state.newItem.name,deadline:this.state.newItem.deadline},k.post("/tasks/put",t).then(function(e){return e.data}).catch(function(e){return O(e)})).then(function(e){var t=a.state.tasks||[];t.push(e.info),a.setState({tasks:t})}).catch(function(e){return console.log(e)})}},{key:"onChange",value:function(e){var t=e.target.name,a=e.target.value;console.log(this.state),this.setState({newItem:Object(f.a)({},t,a)})}},{key:"fetchTasks",value:function(){var e,t=this;console.log(this.props.project_id),(e={id:"".concat(this.props.projectId)},k.post("/tasks/get",e).then(function(e){return e}).catch(function(e){return e})).then(function(e){t.setState({tasks:e.data,isLoading:!1})}).catch(function(e){t.setState({error:e.response,isLoading:!1})})}},{key:"componentDidMount",value:function(){this.fetchTasks()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.tasks;return l.a.createElement("div",null,l.a.createElement("h2",null,"Tasks:"),t||void 0===a?l.a.createElement("p",null,"Loading..."):a.map(function(e){return l.a.createElement(D,{data:e,key:e.id})}),l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",className:"form-control","aria-describedby":"emailHelp",placeholder:"Enter task name",name:"name",onChange:this.onChange}),l.a.createElement("input",{type:"date",className:"form-control","aria-describedby":"emailHelp",placeholder:"Enter task name",name:"deadline",onChange:this.onChange})),l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Add task")))}}]),t}(n.Component),F=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).handleSave=a.handleSave.bind(Object(E.a)(Object(E.a)(a))),a.state={name:"",id:""},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({name:e.data.name,id:e.data.id})}},{key:"titleHandler",value:function(e){this.setState({name:e.target.value})}},{key:"handleSave",value:function(){var e=this.state;this.props.saveModalDetails(e)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"modal fade",id:"exampleModal",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},l.a.createElement("div",{className:"modal-dialog",role:"document"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h5",{className:"modal-title",id:"exampleModalLabel"},"Edit Jewel"),l.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),l.a.createElement("div",{className:"modal-body"},l.a.createElement("p",null,l.a.createElement("span",{className:"modal-lable"},"Name:"),l.a.createElement("input",{value:this.state.name,onChange:function(t){return e.titleHandler(t)}}))),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Close"),l.a.createElement("button",{type:"button",className:"btn btn-primary","data-dismiss":"modal",onClick:function(){e.handleSave()}},"Save changes")))))}}]),t}(n.Component),M=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={isAlive:!0,id:a.props.data.id,requiredItem:0,data:a.props.data},a.saveModalDetails=a.saveModalDetails.bind(Object(E.a)(Object(E.a)(a))),a.clickDelete=a.clickDelete.bind(Object(E.a)(Object(E.a)(a))),a.replaceModalItem=a.replaceModalItem.bind(Object(E.a)(Object(E.a)(a))),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"clickDelete",value:function(){var e,t=this;(e={id:"".concat(this.state.id)},k.post("/projects/delete",e).then(function(e){return e}).catch(function(e){return console.log(e)})).then(function(){t.setState({isAlive:!1})}).catch(function(e){return console.log(e)})}},{key:"saveModalDetails",value:function(e){var t;t=e,this.setState({data:t})}},{key:"replaceModalItem",value:function(e){this.setState({requiredItem:e})}},{key:"render",value:function(){var e=this.props.data,t=e.id,a=e.name;return this.state.isAlive?l.a.createElement("div",{className:" col-md-12","data-id":t},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},a),l.a.createElement("button",{className:"btn btn-outline-secondary"},"Edit project"),l.a.createElement("button",{className:"btn btn-danger",onClick:this.clickDelete},"Delete project"),l.a.createElement(L,{projectId:t}),l.a.createElement(F,{data:{name:a,id:t}})))):""}}]),t}(n.Component),A=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).onSubmit=function(e){var t=this;e.preventDefault(),y({name:this.state.newItem.name}).then(function(e){var a=t.state.projects||[];a.push({name:e.name,id:e.id}),t.setState({projects:a})}).catch(function(e){return console.log(e)})},a.state={isLoading:!0,projects:[],error:null,newItem:""},a.onChange=a.onChange.bind(Object(E.a)(Object(E.a)(a))),a.onSubmit=a.onSubmit.bind(Object(E.a)(Object(E.a)(a))),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"onChange",value:function(e){var t=e.target.name,a=e.target.value;this.setState({newItem:Object(f.a)({},t,a)})}},{key:"fetchProjects",value:function(){var e=this;k.post("/projects/get").then(function(e){return e}).catch(function(e){console.log(e),O(e.response)}).then(function(t){e.setState({projects:t.data,isLoading:!1})}).catch(function(t){e.setState({error:t.response,isLoading:!1})})}},{key:"componentDidMount",value:function(){this.fetchProjects()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.projects,n=e.error;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Projects:"),n?l.a.createElement("p",null,n.message):null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},t||void 0===a?l.a.createElement("h3",null,"Loading..."):a.map(function(e){return l.a.createElement(M,{data:e,key:e.id})}))),l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Project name"),l.a.createElement("input",{type:"text",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter project name",name:"name",onChange:this.onChange}),l.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"We'll never share your email with anyone else.")),l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Add project")))}}]),t}(n.Component),V=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(p,null),l.a.createElement(h.a,{exact:!0,path:"/",component:v}),l.a.createElement("div",{className:"container"},l.a.createElement(h.a,{exact:!0,path:"/register",component:S}),l.a.createElement(h.a,{exact:!0,path:"/login",component:C}),l.a.createElement(h.a,{exact:!0,path:"/profile",component:I}),l.a.createElement(h.a,{exact:!0,path:"/dashboard",component:A}))))}}]),t}(n.Component),P=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function W(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}s.a.render(l.a.createElement(V,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");P?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):W(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):W(e)})}}()}},[[33,1,2]]]);
//# sourceMappingURL=main.d8afb69b.chunk.js.map