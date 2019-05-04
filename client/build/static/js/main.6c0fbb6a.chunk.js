(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{150:function(e,t,a){},151:function(e,t,a){},152:function(e,t,a){},153:function(e,t,a){},154:function(e,t,a){},155:function(e,t,a){},156:function(e,t,a){},157:function(e,t,a){},158:function(e,t,a){},159:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(46),l=a.n(s),r=a(2),o=a(3),m=a(5),c=a(4),d=a(6),u=a(13),h=a(16);a(58);var p=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(m.a)(this,Object(c.a)(t).call(this,e))).setState({logLinks:[{to:"/",title:"Home",exact:!0},{to:"/login/",title:"Login",exact:!1},{to:"/register/",title:"Register",exact:!1}],regLinks:[{to:"/",title:"Home",exact:!0},{to:"/dashboard/",title:"Dashboard",exact:!1},{to:"/profile/",title:"Profile",exact:!1}]}),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"logOut",value:function(e){e.preventDefault(),localStorage.removeItem("usertoken"),this.props.history.push("/")}},{key:"render",value:function(){var e=i.a.createElement(i.a.Fragment,null,i.a.createElement("li",{className:"nav__item"},i.a.createElement(u.b,{to:"/login",className:"nav__link"},"Login")),i.a.createElement("li",{className:"nav__item"},i.a.createElement(u.b,{to:"/register",className:"nav__link"},"Registration"))),t=i.a.createElement(i.a.Fragment,null,i.a.createElement("li",{className:"nav__item"},i.a.createElement(u.b,{to:"/dashboard",className:"nav__link"},"Dashboard")),i.a.createElement("li",{className:"nav__item"},i.a.createElement(u.b,{to:"/profile",className:"nav__link"},"Account")),i.a.createElement("li",{className:"nav__item"},i.a.createElement(u.b,{to:"/logout",className:"nav__link",onClick:this.logOut.bind(this)},"Log out")));return i.a.createElement("header",{className:"header"},i.a.createElement("div",{className:"container header__container"},i.a.createElement("a",{href:"/",className:"logo"},"React ToDo List"),i.a.createElement("nav",{className:"nav"},i.a.createElement("ul",{className:"nav__list"},i.a.createElement("li",{className:"nav__item"},i.a.createElement(u.b,{to:"/",className:"nav__link"},"Home")),localStorage.usertoken?t:e))))}}]),t}(n.Component),v=Object(h.d)(p);a(67);function f(){return i.a.createElement("footer",{className:"footer"},i.a.createElement("div",{className:"container footer__container"},i.a.createElement("a",{href:"/",className:"logo-small"},"React ToDo App"),i.a.createElement("p",{className:"footer__year"},"2019"),i.a.createElement("a",{href:"https://github.com/rammfall",className:"footer__link",target:"_blank",rel:"noopener noreferrer"},"My GitHub")))}a(68);var _=function(e){function t(){return Object(r.a)(this,t),Object(m.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"landing"},i.a.createElement("h1",{className:"landing__title title-one"},"Welcome!"),i.a.createElement("p",{className:"landing__text text"},"It is a simplest ToDo list!"),i.a.createElement("h2",{className:"landing__subtitle title"},"You can there:"),i.a.createElement("ul",{className:"landing__list"},i.a.createElement("li",{className:"landing__list-item"},"Register and login"),i.a.createElement("li",{className:"landing__list-item"},"Create, update and remove own projects"),i.a.createElement("li",{className:"landing__list-item"},"Create, update and delete tasks")),i.a.createElement("h2",{className:"landing__subtitle title"},"The app created with:"),i.a.createElement("ul",{className:"landing__list"},i.a.createElement("li",{className:"landing__list-item"},"Node.js(Express.js)"),i.a.createElement("li",{className:"landing__list-item"},"MySQL(Sequelize for models and connection with DB)"),i.a.createElement("li",{className:"landing__list-item"},"JSON Web Token(for authorization)"),i.a.createElement("li",{className:"landing__list-item"},"React(built with Create React App)"),i.a.createElement("li",{className:"landing__list-item"},"SASS(for flexible work with CSS)"),i.a.createElement("li",{className:"landing__list-item"},"Axios(for cross browser queries on server)"),i.a.createElement("li",{className:"landing__list-item"},"Eslint and Stylelint(for linting code)"),i.a.createElement("li",{className:"landing__list-item"},"Heroku with ClearDB")))}}]),t}(n.Component),b=a(8),E=a(18),g=a.n(E),N=function(e){return g.a.post("users/register",{first_name:e.first_name,last_name:e.last_name,email:e.email,password:e.password}).then(function(e){return e.data})},k=function(e){return g.a.post("users/login",{email:e.email,password:e.password}).then(function(e){return e.data}).catch(function(e){console.log(e)})},j=a(49),y=a(52),S=a(50),O=a.n(S),w=function(){function e(t){Object(r.a)(this,e),this.validations=t}return Object(o.a)(e,[{key:"validate",value:function(e){var t=this.valid();return this.validations.map(function(a){if(!t[a.field].isInvalid){var n=e[a.field].toString(),i=a.args||[];("string"===typeof a.method?O.a[a.method]:a.method).apply(void 0,[n].concat(Object(y.a)(i),[e]))!==a.validWhen&&(t[a.field]={isInvalid:!0,message:a.message},t.isValid=!1)}}),t}},{key:"valid",value:function(){var e={};return this.validations.map(function(t){return e[t.field]={isInvalid:!1,message:""}}),Object(j.a)({isValid:!0},e)}}]),e}(),I=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(m.a)(this,Object(c.a)(t).call(this,e))).handleInput=function(e){e.preventDefault(),a.setState(Object(b.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.email,i=t.password,s=a.validator.validate(a.state);a.setState({validation:s}),a.submitted=!0,s.isValid&&k({email:n,password:i}).then(function(e){"success"===e.status?(localStorage.usertoken=e.token,a.props.history.push("/dashboard"),window.location.reload()):(a.setState({error:{visible:!0,info:e.info}}),setTimeout(function(){a.setState({error:{visible:!1}})},3e3))}).catch(function(e){console.log(e)})},a.handlerCloseModal=function(e){e.target.classList.contains("modal")&&a.setState({error:{visible:!1}})},a.validator=new w([{field:"email",method:"isEmpty",validWhen:!1,message:"Email is required"},{field:"email",method:"isEmail",validWhen:!0,message:"That is not valid email"},{field:"password",method:"isEmpty",validWhen:!1,message:"Password is required"},{field:"password",method:"isByteLength",args:[{min:4}],validWhen:!0,message:"In password minimum 4 symbols"},{field:"password",method:"isByteLength",args:[{max:60}],validWhen:!0,message:"In password maximum 60 symbols"}]),a.state={error:{info:"",visible:!1},email:"",password:"",validation:a.validator.valid()},a.submitted=!1,a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.submitted?this.validator.validate(this.state):this.state.validation;return i.a.createElement("form",{className:"form",noValidate:!0,onSubmit:this.handleSubmit},i.a.createElement("h1",{className:"form__title"},"Log in"),i.a.createElement("p",{className:"form__description"},"on ToDo list for Ruby Garage"),i.a.createElement("div",{className:"form__group"},i.a.createElement("div",{className:e.email.isInvalid?"input error":"input","data-error":e.email.message},i.a.createElement("input",{type:"email",className:"input__field",name:"email",placeholder:"Email",required:!0,onInput:this.handleInput}),i.a.createElement("label",{className:"input__label"},"Email"))),i.a.createElement("div",{className:"form__group"},i.a.createElement("div",{className:e.password.isInvalid?"input error":"input","data-error":e.password.message},i.a.createElement("input",{type:"password",className:"input__field",name:"password",placeholder:"Password",required:!0,onChange:this.handleInput}),i.a.createElement("label",{className:"input__label"},"Password"))),i.a.createElement("button",{className:"btn color-btn"},"Log in"),this.state.error.visible?i.a.createElement("div",{className:"modal",onClick:this.handlerCloseModal},i.a.createElement("div",{className:"modal__container"},i.a.createElement("div",{className:"modal__title"},this.state.error.info))):null)}}]),t}(n.Component),L=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(m.a)(this,Object(c.a)(t).call(this,e))).handleInput=function(e){e.preventDefault(),a.setState(Object(b.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.first_name,i=t.last_name,s=t.email,l=t.password,r=a.validator.validate(a.state);a.setState({validation:r}),a.submitted=!0,r.isValid&&N({first_name:n,last_name:i,email:s,password:l}).then(function(e){"success"===e.status?(localStorage.usertoken=e.token,a.props.history.push("/dashboard"),window.location.reload()):(a.setState({error:{visible:!0,info:e.info}}),setTimeout(function(){a.setState({error:{visible:!1}})},3e3))}).catch(function(e){console.log(e)})},a.handlerCloseModal=function(e){e.target.classList.contains("modal")&&a.setState({error:{visible:!1}})},a.validator=new w([{field:"email",method:"isEmpty",validWhen:!1,message:"Email is required"},{field:"email",method:"isEmail",validWhen:!0,message:"That is not valid email"},{field:"first_name",method:"isEmpty",validWhen:!1,message:"First name is required"},{field:"first_name",method:"isByteLength",args:[{min:4}],validWhen:!0,message:"In first name minimum 4 symbols"},{field:"first_name",method:"isByteLength",args:[{max:20}],validWhen:!0,message:"In first name maximum 20 symbols"},{field:"last_name",method:"isEmpty",validWhen:!1,message:"Last name is required"},{field:"last_name",method:"isByteLength",args:[{min:4}],validWhen:!0,message:"In last name minimum 4 symbols"},{field:"last_name",method:"isByteLength",args:[{max:20}],validWhen:!0,message:"In last name maximum 20 symbols"},{field:"password",method:"isEmpty",validWhen:!1,message:"Password is required"},{field:"password",method:"isByteLength",args:[{min:4}],validWhen:!0,message:"In password minimum 4 symbols"},{field:"password",method:"isByteLength",args:[{max:60}],validWhen:!0,message:"In password maximum 60 symbols"}]),a.state={first_name:"",last_name:"",email:"",password:"",validation:a.validator.valid(),error:{info:"",visible:!1}},a.submitted=!1,a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.submitted?this.validator.validate(this.state):this.state.validation;return i.a.createElement("form",{className:"form",noValidate:!0,onSubmit:this.handleSubmit},i.a.createElement("h1",{className:"form__title"},"Sign in"),i.a.createElement("p",{className:"form__description"},"on ToDo list for Ruby Garage"),i.a.createElement("div",{className:"form__group"},i.a.createElement("div",{className:e.first_name.isInvalid?"input error":"input","data-error":e.first_name.message},i.a.createElement("input",{type:"text",name:"first_name",className:"input__field",placeholder:"First name",required:!0,onInput:this.handleInput}),i.a.createElement("label",{className:"input__label"},"First name"))),i.a.createElement("div",{className:"form__group"},i.a.createElement("div",{className:e.last_name.isInvalid?"input error":"input","data-error":e.last_name.message},i.a.createElement("input",{type:"text",name:"last_name",className:"input__field",placeholder:"Last name",required:!0,onInput:this.handleInput}),i.a.createElement("label",{className:"input__label"},"Last name"))),i.a.createElement("div",{className:"form__group"},i.a.createElement("div",{className:e.email.isInvalid?"input error":"input","data-error":e.email.message},i.a.createElement("input",{type:"email",name:"email",className:"input__field",placeholder:"Email",required:!0,onInput:this.handleInput}),i.a.createElement("label",{className:"input__label"},"Email"))),i.a.createElement("div",{className:"form__group"},i.a.createElement("div",{className:e.password.isInvalid?"input error":"input","data-error":e.password.message},i.a.createElement("input",{type:"password",name:"password",className:"input__field",placeholder:"Password",required:!0,onInput:this.handleInput}),i.a.createElement("label",{className:"input__label"},"Password"))),i.a.createElement("button",{className:"btn color-btn"},"Sign in"),this.state.error.visible?i.a.createElement("div",{className:"modal",onClick:this.handlerCloseModal},i.a.createElement("div",{className:"modal__container"},i.a.createElement("div",{className:"modal__title"},this.state.error.info))):null)}}]),t}(n.Component),D=a(51),x=a.n(D),C=(a(150),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(m.a)(this,Object(c.a)(t).call(this,e))).state={first_name:"",last_name:"",email:""},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.usertoken,t=x()(e);console.log(1),this.setState({first_name:t.first_name,last_name:t.last_name,email:t.email})}},{key:"render",value:function(){return i.a.createElement("div",{className:"profile"},i.a.createElement("h1",{className:"title profile__title"},"Your Profile"),i.a.createElement("dl",{className:"profile__list"},i.a.createElement("dt",{className:"profile__term"},"First name: "),i.a.createElement("dd",{className:"profile__description"},this.state.first_name),i.a.createElement("dt",{className:"profile__term"},"Last name: "),i.a.createElement("dd",{className:"profile__description"},this.state.last_name),i.a.createElement("dt",{className:"profile__term"},"Email: "),i.a.createElement("dd",{className:"profile__description"},this.state.email)))}}]),t}(n.Component)),W=function(e){"Auth failed"===e.data.message&&console.log("Auth fail")},M=g.a.create({headers:{Authorization:localStorage.usertoken?"sdSfapodIF ".concat(localStorage.usertoken):" Token is not get"}}),q=function(e){return M.post("/projects/put",e).then(function(e){return e.data}).catch(function(e){return W(e)})},T=function(e){return M.post("/projects/update",e).then(function(e){return e.data}).catch(function(e){return console.log(e)})},B=function(e){return M.post("/tasks/put",e).then(function(e){return e.data}).catch(function(e){return W(e)})},A=function(e){return M.post("/tasks/update",e).then(function(e){return e.data}).catch(function(e){return console.log(e)})},P=a(14),V=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(m.a)(this,Object(c.a)(t).call(this,e))).handlerInput=function(e){e.preventDefault(),a.setState(Object(b.a)({},e.target.name,e.target.value))},a.handlerSubmit=function(e){e.preventDefault();var t=a.state,n=t.name,i=t.deadline,s=a.validator.validate(a.state);a.setState({validation:s}),a.submitted=!0,s.isValid&&A({name:n,deadline:i,id:"".concat(a.state.id)}).then(function(e){a.setState({visibleEditModal:!a.state.visibleEditModal})}).catch(function(e){return console.log(e)})},a.handlerEdit=function(){a.setState({visibleEditModal:!a.state.visibleEditModal})},a.handlerCloseModal=function(e){e.target.classList.contains("modal")&&a.setState({visibleEditModal:!a.state.visibleEditModal,name:a.props.data.name})},a.checkboxClick=function(e){e.preventDefault();var t=a.state,n=t.name,i=t.deadline,s=t.status;s=0!==+s?"0":"1",A({name:n,deadline:i,id:"".concat(a.state.id),status:s}).then(function(e){a.setState({status:s})}).catch(function(e){return console.log(e)})},a.validator=new w([{field:"name",method:"isEmpty",validWhen:!1,message:"Task name is required"},{field:"name",method:"isByteLength",args:[{min:4}],validWhen:!0,message:"Task name should have minimum 4 symbols"},{field:"name",method:"isByteLength",args:[{max:30}],validWhen:!0,message:"Task name should have maximum 60 symbols"},{field:"deadline",method:"isEmpty",validWhen:!1,message:"Deadline is required"}]),a.state={data:a.props.data,isAlive:!0,name:a.props.data.name,id:a.props.data.id,status:a.props.data.status,deadline:a.props.data.deadline,validation:a.validator.valid()},a.submitted=!1,a.clickDelete=a.clickDelete.bind(Object(P.a)(Object(P.a)(a))),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"clickDelete",value:function(){var e,t=this;(e={id:"".concat(this.state.data.id)},M.post("/tasks/delete",e).then(function(e){return e}).catch(function(e){return console.log(e)})).then(function(){t.setState({isAlive:!1})}).catch()}},{key:"render",value:function(){var e=this.state,t=e.name,a=e.deadline,n=this.submitted?this.validator.validate(this.state):this.state.validation;return this.state.isAlive?i.a.createElement("li",{className:"task"},i.a.createElement("label",{className:"checkbox-container"},i.a.createElement("input",{type:"checkbox",checked:0!==+this.state.status?"checked":"",onChange:this.checkboxClick}),i.a.createElement("span",{className:"checkmark"})),i.a.createElement("h4",{className:0!==+this.state.status?"task__title through":"task__title"},t),i.a.createElement("div",{className:"task__date"},a),i.a.createElement("button",{className:"btn btn-color",onClick:this.handlerEdit},"Edit task"),i.a.createElement("button",{className:"btn btn-danger",onClick:this.clickDelete},"Delete task"),!0===this.state.visibleEditModal?i.a.createElement("div",{className:"modal",onClick:this.handlerCloseModal},i.a.createElement("form",{className:"modal__container",noValidate:!0,onSubmit:this.handlerSubmit},i.a.createElement("p",{className:"title modal__title"},"Edit ",i.a.createElement("span",{className:"modal__color"},t)),i.a.createElement("div",{className:n.name.isInvalid?"input error modal__input":"input modal__input","data-error":n.name.message},i.a.createElement("input",{type:"text",name:"name",onInput:this.handlerInput,required:!0,placeholder:"Enter new name",className:"input__field"}),i.a.createElement("label",{className:"input__label"},"Enter new name")),i.a.createElement("div",{className:n.deadline.isInvalid?"input error modal__input":"input modal__input","data-error":n.deadline.message},i.a.createElement("input",{type:"date",name:"deadline",onInput:this.handlerInput,required:!0,placeholder:"Enter new name",className:"input__field"}),i.a.createElement("label",{className:"input__label"},"Deadline")),i.a.createElement("button",{className:"btn btn-color"},"Save"))):null):""}}]),t}(n.Component),R=(a(151),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(m.a)(this,Object(c.a)(t).call(this,e))).handlerInput=function(e){e.preventDefault(),a.setState(Object(b.a)({},e.target.name,e.target.value))},a.handlerSubmit=function(e){e.preventDefault();var t=a.state,n=t.name,i=t.deadline,s=a.validator.validate(a.state);a.setState({validation:s}),a.submitted=!0,s.isValid&&B({name:n,deadline:i,project_id:"".concat(a.state.project_id)}).then(function(e){var t=a.state.tasks||[],n=new Date(e.info.deadline).toLocaleString("en-US",{year:"numeric",month:"numeric",day:"numeric"});t.push({deadline:n,id:e.info.id,name:e.info.name,status:e.info.status}),console.log(t),a.setState({tasks:t})}).catch(function(e){return console.log(e)})},a.validator=new w([{field:"name",method:"isEmpty",validWhen:!1,message:"Task name is required"},{field:"name",method:"isByteLength",args:[{min:4}],validWhen:!0,message:"Task name should have minimum 4 symbols"},{field:"name",method:"isByteLength",args:[{max:30}],validWhen:!0,message:"Task name should have maximum 60 symbols"},{field:"deadline",method:"isEmpty",validWhen:!1,message:"Deadline is required"}]),a.state={project_id:a.props.projectId,isLoading:!0,tasks:[],error:null,name:"",deadline:"",validation:a.validator.valid()},a.submitted=!1,a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"fetchTasks",value:function(){var e,t=this;(e={id:"".concat(this.props.projectId)},M.post("/tasks/get",e).then(function(e){return e}).catch(function(e){return e})).then(function(e){t.setState({tasks:e.data,isLoading:!1})}).catch(function(e){t.setState({error:e.response,isLoading:!1})})}},{key:"componentDidMount",value:function(){this.fetchTasks()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.tasks,n=this.submitted?this.validator.validate(this.state):this.state.validation;return i.a.createElement("div",{className:"tasks"},i.a.createElement("h3",{className:"tasks__title"},"Project tasks:"),i.a.createElement("ul",{className:"tasks__list"},t||void 0===a?i.a.createElement("p",{className:"load-animation"},"Loading..."):a.map(function(e){return i.a.createElement(V,{data:e,key:e.id})})),i.a.createElement("form",{className:"tasks__form",noValidate:!0,onSubmit:this.handlerSubmit},i.a.createElement("div",{className:"form__group tasks__form-group"},i.a.createElement("div",{className:n.name.isInvalid?"input error":"input","data-error":n.name.message},i.a.createElement("input",{type:"text",name:"name",placeholder:"Task name",className:"input__field",onInput:this.handlerInput,required:!0}),i.a.createElement("label",{className:"input__label"},"Task name"))),i.a.createElement("div",{className:"form__group tasks__form-group"},i.a.createElement("div",{className:n.deadline.isInvalid?"input error":"input","data-error":n.deadline.message},i.a.createElement("input",{type:"date",name:"deadline",placeholder:"Deadline task",className:"input__field input__date",required:!0,onInput:this.handlerInput}),i.a.createElement("label",{className:"input__label"},"Task deadline"))),i.a.createElement("button",{type:"submit",className:"btn btn-color"},"Add task")))}}]),t}(n.Component)),F=(a(152),a(153),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(m.a)(this,Object(c.a)(t).call(this,e))).handleInput=function(e){e.preventDefault(),a.setState(Object(b.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.name,i=t.id,s=a.validator.validate(a.state);a.setState({validation:s}),a.submitted=!0,s.isValid&&T({name:n,id:"".concat(i)}).then(function(e){a.setState({name:a.state.name,visibleEditModal:!1})}).catch(function(e){return console.log(e)})},a.handlerEdit=function(){a.setState({visibleEditModal:!a.state.visibleEditModal})},a.handlerCloseModal=function(e){e.target.classList.contains("modal")&&a.setState({visibleEditModal:!a.state.visibleEditModal,name:a.props.data.name})},a.validator=new w([{field:"name",method:"isEmpty",validWhen:!1,message:"Name project is required"},{field:"name",method:"isByteLength",args:[{min:4}],validWhen:!0,message:"Name project should have minimum 4 symbols"},{field:"name",method:"isByteLength",args:[{max:30}],validWhen:!0,message:"Name project should have maximum 30 symbols"}]),a.state={isAlive:!0,id:a.props.data.id,visibleEditModal:!1,name:a.props.data.name,validation:a.validator.valid()},a.submitted=!1,a.clickDelete=a.clickDelete.bind(Object(P.a)(Object(P.a)(a))),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"clickDelete",value:function(){var e,t=this;(e={id:"".concat(this.state.id)},M.post("/projects/delete",e).then(function(e){return e}).catch(function(e){return console.log(e)})).then(function(){t.setState({isAlive:!1})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this.state,t=e.id,a=e.name,n=this.submitted?this.validator.validate(this.state):this.state.validation;return this.state.isAlive?i.a.createElement("li",{className:"project"},i.a.createElement("div",{className:"project__header"},i.a.createElement("h2",{className:"project__title"},a),i.a.createElement("button",{className:"btn",onClick:this.handlerEdit},"Edit project"),i.a.createElement("button",{className:"btn btn-danger",onClick:this.clickDelete},"Delete project")),!0===this.state.visibleEditModal?i.a.createElement("div",{className:"modal",onClick:this.handlerCloseModal},i.a.createElement("form",{className:"modal__container",noValidate:!0,onSubmit:this.handleSubmit},i.a.createElement("p",{className:"title modal__title"},"Edit ",i.a.createElement("span",{className:"modal__color"},a)),i.a.createElement("div",{className:n.name.isInvalid?"input error modal__input":"input modal__input","data-error":n.name.message},i.a.createElement("input",{type:"text",name:"name",onInput:this.handleInput,required:!0,placeholder:"Enter new name",className:"input__field"}),i.a.createElement("label",{className:"input__label"},"Enter new name")),i.a.createElement("button",{className:"btn btn-color"},"Save"))):null,i.a.createElement(R,{projectId:t})):null}}]),t}(n.Component)),H=(a(154),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(m.a)(this,Object(c.a)(t).call(this,e))).handleInput=function(e){e.preventDefault(),a.setState(Object(b.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t=a.state.name,n=a.validator.validate(a.state);a.setState({validation:n}),a.submitted=!0,n.isValid&&q({name:t}).then(function(e){var t=a.state.projects||[];t.push({name:e.name,id:e.id}),a.setState({projects:t})}).catch(function(e){return console.log(e)})},a.update=function(e){},a.validator=new w([{field:"name",method:"isEmpty",validWhen:!1,message:"Name project is required"},{field:"name",method:"isByteLength",args:[{min:4}],validWhen:!0,message:"Name project should have minimum 4 symbols"},{field:"name",method:"isByteLength",args:[{max:30}],validWhen:!0,message:"Name project should have maximum 30 symbols"}]),a.state={isLoading:!0,projects:[],error:null,name:"",validation:a.validator.valid()},a.submitted=!1,a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"fetchProjects",value:function(){var e=this;M.post("/projects/get").then(function(e){return e}).catch(function(e){console.log(e),W(e.response)}).then(function(t){e.setState({projects:t.data,isLoading:!1})}).catch(function(t){e.setState({error:t.response,isLoading:!1})})}},{key:"componentDidMount",value:function(){this.fetchProjects()}},{key:"render",value:function(){var e=this,t=this.state,a=t.isLoading,n=t.projects,s=t.error,l=this.submitted?this.validator.validate(this.state):this.state.validation;return i.a.createElement("div",{className:"projects"},i.a.createElement("h1",{className:"projects__title title"},"Projects:"),i.a.createElement("ul",{className:"projects__list"},s?i.a.createElement("p",null,s.message):null,a||void 0===n?i.a.createElement("h3",{className:"projects__load-title load-animation"},"Loading"):n.map(function(t){return i.a.createElement(F,{data:t,key:t.id,callback:e.update})})),i.a.createElement("form",{className:"form-project",noValidate:!0,onSubmit:this.handleSubmit},i.a.createElement("div",{className:"form__group"},i.a.createElement("div",{className:l.name.isInvalid?"input error":"input","data-error":l.name.message},i.a.createElement("input",{type:"text",className:"input__field",required:!0,placeholder:"Project name",name:"name",onInput:this.handleInput}),i.a.createElement("label",{className:"input__label"},"Project name"))),i.a.createElement("button",{className:"btn btn-color"},"Add New Project")))}}]),t}(n.Component)),z=(a(155),a(156),a(157),a(158),function(e){function t(){return Object(r.a)(this,t),Object(m.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement(u.a,null,i.a.createElement("div",{className:"app"},i.a.createElement(v,null),i.a.createElement("main",{className:"content"},i.a.createElement("div",{className:"container content__container"},i.a.createElement(h.a,{exact:!0,path:"/",component:_}),i.a.createElement(h.a,{path:"/register",component:L}),i.a.createElement(h.a,{path:"/login",component:I}),i.a.createElement(h.a,{path:"/profile",component:C}),i.a.createElement(h.a,{path:"/dashboard",component:H}))),i.a.createElement(f,null)))}}]),t}(n.Component));l.a.render(i.a.createElement(z,null),document.getElementById("root"))},53:function(e,t,a){e.exports=a(159)},58:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){}},[[53,1,2]]]);
//# sourceMappingURL=main.6c0fbb6a.chunk.js.map