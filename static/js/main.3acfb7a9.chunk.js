(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(9),o=n.n(r),i=(n(15),n(2)),s=n(3),u=n(4),l=n(5),d=n(7),b=n(6),j=n(19),h=n(10),m=n(0),O={name:"",number:""},f=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.onHandleChange=function(e){var n=e.target,a=n.value,c=n.name;t.setState(Object(i.a)({},c,a))},t.handelSubmitForm=function(e){e.preventDefault(),t.props.onAddNewContact(t.state),t.setState(Object(h.a)({},O))},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("form",{onSubmit:this.handelSubmitForm,children:[Object(m.jsxs)("label",{children:["Name",Object(m.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.onHandleChange,value:this.state.name})]}),Object(m.jsxs)("label",{children:["Number",Object(m.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.onHandleChange,value:this.state.number})]}),Object(m.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(a.Component),p=f,x=function(t){var e=t.contact,n=t.removeContactById;return Object(m.jsxs)("li",{children:[Object(m.jsxs)("p",{children:[e.name,": ",e.number]}),Object(m.jsx)("button",{onClick:function(){n(e.id)},children:"DELETE"})]},e.id)},C=function(t){var e=t.contacts,n=t.filterValue,a=t.removeContactById,c=Object(s.a)(e).filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())}));return Object(m.jsx)(m.Fragment,{children:0!==e.length?Object(m.jsx)(m.Fragment,{children:0!==c.length?Object(m.jsx)("ul",{children:c.map((function(t){return Object(m.jsx)(x,{contact:t,removeContactById:a})}))}):Object(m.jsx)("p",{children:"There is no such contact ;("})}):Object(m.jsx)("p",{children:"Please enter your first contact ;)"})})},v=function(t){var e=t.onFilterInput,n=t.filter;return Object(m.jsxs)("label",{children:["Find contacts by name:",Object(m.jsx)("input",{type:"text",name:"filter",onChange:e,value:n})]})},g=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.removeContactById=function(e){t.setState((function(t){return{contacts:Object(s.a)(t.contacts.filter((function(t){return t.id!==e})))}}))},t.onFilterInput=function(e){var n=e.target,a=n.value,c=n.name;t.setState(Object(i.a)({},c,a))},t.onAddNewContact=function(e){t.state.contacts.some((function(t){return t.name.toLowerCase().includes(e.name.toLowerCase())}))?alert("".concat(e.name," is already in contacts.")):t.setState((function(t){return{contacts:[].concat(Object(s.a)(t.contacts),[{name:e.name,number:e.number,id:Object(j.a)()}])}}))},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"Phonebook"}),Object(m.jsx)(p,{onAddNewContact:this.onAddNewContact}),Object(m.jsx)("h2",{children:"Contacts"}),0!==this.state.contacts.length&&Object(m.jsx)(v,{onFilterInput:this.onFilterInput,filter:this.state.filter}),Object(m.jsx)(C,{contacts:this.state.contacts,filterValue:this.state.filter,removeContactById:this.removeContactById})]})})}}]),n}(a.Component),y=g;o.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(y,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.3acfb7a9.chunk.js.map