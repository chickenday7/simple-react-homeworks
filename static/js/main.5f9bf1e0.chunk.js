(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],{11:function(e,t,n){e.exports={wrapperButton:"SuperButton_wrapperButton__3lBln",wrapperButtonDis:"SuperButton_wrapperButtonDis__3WNhl",defaultDis:"SuperButton_defaultDis__JY8uy",default:"SuperButton_default__E9Fug",red:"SuperButton_red__AyqKq",redDis:"SuperButton_redDis__eIgYN"}},12:function(e,t,n){e.exports={textNav:"Header_textNav__3YegJ",buttonDiv:"Header_buttonDiv__3GJqs",buttonMenuActive:"Header_buttonMenuActive__2hGks",buttonMenuDisable:"Header_buttonMenuDisable__2JN-k",exampleDisable:"Header_exampleDisable__-Wbi5",menuLeft:"Header_menuLeft__1wWOD",exampleActive:"Header_exampleActive__93K93",menuRight:"Header_menuRight__GwLnr"}},15:function(e,t,n){e.exports={wrapperInput:"HW6Style_wrapperInput__1XjCZ",wrapperButtons:"HW6Style_wrapperButtons__3Len3",button:"HW6Style_button__afpbF"}},20:function(e,t,n){e.exports={someClass:"Greeting_someClass__uGflL",error:"Greeting_error__1uvQ8",notError:"Greeting_notError__1-UDC"}},26:function(e,t,n){e.exports={App:"App_App__3Wf-J"}},36:function(e,t,n){},44:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(16),r=n.n(s),i=(n(36),n(26)),o=n.n(i),j=n(3),l=n(10),u=n(0);var d=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:"404"}),Object(u.jsx)("div",{children:"Page not found!"}),Object(u.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},b=n(4),x=function(e){return Object(u.jsxs)("div",{className:"messageItem",children:[Object(u.jsx)("div",{className:"messageItem__avatar",children:Object(u.jsx)("img",{src:e.avatar,alt:"avatar"})}),Object(u.jsx)("div",{className:"messageItem__description",children:Object(u.jsxs)("div",{className:"description",children:[Object(u.jsx)("div",{className:"description__name",children:Object(u.jsx)("span",{children:e.name})}),Object(u.jsx)("div",{className:"description__text",children:e.message}),Object(u.jsx)("div",{className:"description__time",children:Object(u.jsx)("span",{children:e.time})})]})})]})},h=function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"message",children:[Object(u.jsx)(x,Object(b.a)({},e)),Object(u.jsx)("div",{className:"message__text",children:Object(u.jsx)("textarea",{placeholder:"Write text"})}),Object(u.jsx)("div",{className:"message__button",children:Object(u.jsx)("button",{children:"Send"})})]})})},p=n(27),O=n(28),m=n(31),v=n(30),_=n(17),g=n(18),f="NEW_TEXT",C="ADD_MESSAGE",N={messageData:[{id:1,avatar:"https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",name:"chickenDay",message:"Send me msg, pls ",time:"this time"}],newMessageText:""},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(b.a)(Object(b.a)({},e),{},{newMessageText:t.text});case C:return Object(b.a)(Object(b.a)({},e),{},{messageData:[].concat(Object(g.a)(e.messageData),[{id:e.messageData.length+1,avatar:"https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",name:"chickenDay",message:e.newMessageText,time:t.time}]),newMessageText:""});default:return e}},S=function(e){return Object(u.jsxs)("div",{className:"messageItem",children:[Object(u.jsx)("div",{className:"messageItem__avatar",children:Object(u.jsx)("img",{src:e.avatar,alt:"avatar"})}),Object(u.jsx)("div",{className:"arrow"}),Object(u.jsx)("div",{className:"messageItem__description",children:Object(u.jsxs)("div",{className:"description",children:[Object(u.jsx)("div",{className:"description__name",children:Object(u.jsx)("span",{children:e.name})}),Object(u.jsx)("div",{className:"description__text",children:e.message}),Object(u.jsx)("div",{className:"description__time",children:Object(u.jsx)("span",{children:e.time})})]})})]})},w=function(e){var t=e.messageData.map((function(e){return Object(u.jsx)(S,{id:e.id,message:e.message,avatar:e.avatar,name:e.name,time:e.time},e.id)})),n=c.a.createRef();return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("span",{children:"This with Redux"}),Object(u.jsxs)("div",{className:"message",children:[t,Object(u.jsx)("div",{className:"message__text",children:Object(u.jsx)("textarea",{ref:n,onChange:function(){var t=n.current.value;e.updateMessageText(t)},value:e.newMessageText,placeholder:"Write text"})}),Object(u.jsx)("div",{className:"message__button",children:Object(u.jsx)("button",{onClick:function(){var t="".concat((new Date).getHours(),":").concat((new Date).getMinutes(),":").concat((new Date).getSeconds());""===e.newMessageText.trim()?alert("Message === null"):e.addMessage(t)},children:"Send"})})]})]})},y=function(e){Object(m.a)(n,e);var t=Object(v.a)(n);function n(e){return Object(p.a)(this,n),t.call(this,e)}return Object(O.a)(n,[{key:"render",value:function(){return Object(u.jsx)(w,{messageData:this.props.messageData,newMessageText:this.props.newMessageText,updateMessageText:this.props.updateMessageText,addMessage:this.props.addMessage})}}]),n}(c.a.Component),T=Object(_.b)((function(e){return{messageData:e.homework1.messageData,newMessageText:e.homework1.newMessageText}}),(function(e){return{updateMessageText:function(t){e(function(e){return{type:f,text:e}}(t))},addMessage:function(t){e(function(e){return{type:C,time:e}}(t))}}}))(y),D=(n(44),"https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg"),B="Some Name",M="some text",I="22:00";var A=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 1",Object(u.jsx)(h,{avatar:D,name:B,message:M,time:I}),Object(u.jsx)("hr",{}),Object(u.jsx)(T,{}),Object(u.jsx)("hr",{})]})},W={margin:"5px"},E=function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{style:W,children:e.affair.name}),Object(u.jsx)("span",{style:W,children:e.affair.priority}),Object(u.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})},H=function(e){var t=e.data.map((function(t){return Object(u.jsx)(E,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)})),n=function(t){!function(t){e.setFilter(t)}(t.currentTarget.name)};return Object(u.jsxs)("div",{children:[t,Object(u.jsx)("button",{name:"all",onClick:n,children:"All"}),Object(u.jsx)("button",{name:"high",onClick:n,children:"High"}),Object(u.jsx)("button",{name:"middle",onClick:n,children:"Middle"}),Object(u.jsx)("button",{name:"low",onClick:n,children:"Low"})]})},F=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var J=function(){var e=Object(a.useState)(F),t=Object(j.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)("all"),r=Object(j.a)(s,2),i=r[0],o=r[1],l=function(e,t){return"all"===t?e:"high"===t?e.filter((function(e){return"high"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):"low"===t?e.filter((function(e){return"low"===e.priority})):e}(n,i);return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 2",Object(u.jsx)(H,{data:l,setFilter:o,deleteAffairCallback:function(e){return c(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},P=n(20),G=n.n(P),Y=function(e){var t=e.name,n=e.setNameCallback,a=e.addUser,c=e.error,s=e.totalUsers,r=""!==c?G.a.error:G.a.notError;return Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{value:t,onChange:function(e){n(e.currentTarget.value)},className:r}),Object(u.jsx)("span",{children:c}),Object(u.jsx)("button",{disabled:""===t.trim(),onClick:function(){a(t)},children:"add"}),Object(u.jsx)("span",{children:s})]})},q=function(e){var t=e.users,n=e.addUserCallback,c=Object(a.useState)(""),s=Object(j.a)(c,2),r=s[0],i=s[1],o=Object(a.useState)(""),l=Object(j.a)(o,2),d=l[0],b=l[1],x=t.length,h=t.map((function(e){return Object(u.jsx)("div",{children:Object(u.jsx)("span",{children:e.name})},e.key)}));return Object(u.jsxs)(u.Fragment,{children:[h,Object(u.jsx)(Y,{name:r,setNameCallback:function(e){i(e)},addUser:function(e){""===e.trim()?(b("\u0414\u0430\u0432\u0430\u0439 \u0431\u0435\u0437 \u043f\u0443\u0441\u0442\u044b\u0445 \u0441\u0442\u0440\u043e\u043a, \u0431\u0440\u0430\u0442\u043e\u043a"),i("")):e.trim().length<3?(b("\u0418\u043c\u044f \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 3 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),i(e.trim())):(b(""),alert("Hello ".concat(e.trim()," !")),n(e),i(""))},error:d,totalUsers:x})]})},U=n(21);var L=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),n=t[0],c=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 3",Object(u.jsx)(q,{users:n,addUserCallback:function(e){c([].concat(Object(g.a)(n),[{_id:Object(U.v1)(),name:e,key:Object(U.v1)()}]))}}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},R=n(6),X=n(8),Z=n.n(X),K=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName","necessary"],Q=function(e){var t=e.type,n=e.onChange,a=e.onChangeText,c=e.onKeyPress,s=e.onEnter,r=e.error,i=e.className,o=e.spanClassName,j=e.necessary,l=Object(R.a)(e,K),d="".concat(o||""," ").concat(Z.a.errorSpan," "),x="".concat(i," ").concat(Z.a.wrapperInput," ").concat(r?Z.a.errorWrapper:""," "),h="".concat(r?Z.a.errorInput:Z.a.input),p="".concat(j?Z.a.necessarySpan:"");return Object(u.jsx)("div",{className:x,children:Object(u.jsxs)("div",{className:Z.a.settingPosition,children:[Object(u.jsx)("input",Object(b.a)({type:t,onChange:function(e){n&&n(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){c&&c(e),s&&"Enter"===e.key&&s()},className:h},l)),Object(u.jsx)("span",{className:p,children:j?"*":""}),r&&Object(u.jsx)("span",{className:d,children:r})]})})},z=n(7),V=n.n(z),$=n(11),ee=n.n($),te=["red","className","textStyle","onClick"],ne=function(e){var t=e.red,n=e.className,a=e.textStyle,c=e.onClick,s=Object(R.a)(e,te),r="".concat(n," ").concat(t?s.disabled?ee.a.redDis:ee.a.red:s.disabled?ee.a.wrapperButtonDis:ee.a.wrapperButton," "),i="".concat(s.disabled?ee.a.defaultDis:ee.a.default," ").concat(a);return Object(u.jsx)("div",{className:r,onClick:function(e){c&&c(e)},children:Object(u.jsx)("button",Object(b.a)({className:i},s))})},ae=n(9),ce=n.n(ae),se=["type","onChange","onChangeChecked","className","spanClassName","children"],re=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,c=(e.spanClassName,e.children),s=Object(R.a)(e,se),r="".concat(s.checked?ce.a.divCheckboxTrue:ce.a.divCheckboxFalse," ").concat(a||""),i="".concat(s.checked?ce.a.circTrue:ce.a.circFalse," ").concat(a||""," ");return Object(u.jsxs)("label",{className:ce.a.label,children:[Object(u.jsx)("div",{className:r,children:Object(u.jsx)("div",{className:i})}),Object(u.jsx)("input",Object(b.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:ce.a.checkbox},s)),c&&Object(u.jsx)("span",{className:ce.a.spanClassName,children:c})]})};var ie=function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),n=t[0],c=t[1],s=n.trim()?"":"error",r=function(){s?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(a.useState)(!1),o=Object(j.a)(i,2),l=o[0],d=o[1];return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:V.a.column,children:[Object(u.jsx)("div",{className:V.a.test,children:Object(u.jsx)(Q,{value:n,onChangeText:c,onEnter:r,error:s,necessary:!0})}),Object(u.jsx)("div",{className:V.a.test,children:Object(u.jsx)(Q,{necessary:!0,className:V.a.blue,error:s,spanClassName:V.a.testSpanError})}),Object(u.jsx)("div",{className:V.a.test,children:Object(u.jsx)(ne,{onClick:r,className:V.a.testButton,children:"default"})}),Object(u.jsx)("div",{className:V.a.test,children:Object(u.jsx)(ne,{red:!0,onClick:r,children:"Red Button"})}),Object(u.jsx)("div",{className:V.a.test,children:Object(u.jsx)(ne,{disabled:!0,children:"Disabled"})}),Object(u.jsx)("div",{className:V.a.test,children:Object(u.jsx)(ne,{red:!0,disabled:!0,children:"Disabled"})}),Object(u.jsx)(re,{checked:l,onChangeChecked:d,children:"some text"})]}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},oe=["autoFocus","onBlur","onEnter","spanProps"],je=["children","onDoubleClick","className"],le=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,c=e.spanProps,s=Object(R.a)(e,oe),r=Object(a.useState)(!1),i=Object(j.a)(r,2),o=i[0],l=i[1],d=c||{},x=d.children,h=d.onDoubleClick,p=d.className,O=Object(R.a)(d,je),m="\u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0439 \u0441\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u0441\u043f\u0430\u043d\u0430".concat(" ",p);return Object(u.jsx)(u.Fragment,{children:o?Object(u.jsx)(Q,Object(b.a)({autoFocus:!0,onBlur:function(e){l(!1),t&&t(e)},onEnter:function(){l(!1),n&&n()}},s)):Object(u.jsx)("span",Object(b.a)(Object(b.a)({onDoubleClick:function(e){l(!0),h&&h(e)},className:m},O),{},{children:x||s.value}))})};function ue(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function de(e,t){var n=t,a=localStorage.getItem(e);return null!==a&&(n=JSON.parse(a)),n}ue("test",{x:"A",y:1});de("test",{x:"",y:0});var be=n(15),xe=n.n(be);var he=function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),n=t[0],c=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 6",Object(u.jsx)("div",{className:xe.a.wrapperInput,children:Object(u.jsx)(le,{value:n,onChangeText:c,spanProps:{children:n?void 0:"enter text..."}})}),Object(u.jsxs)("div",{className:xe.a.wrapperButtons,children:[Object(u.jsx)(ne,{className:xe.a.button,onClick:function(){ue("editable-span-value",n)},children:"save"}),Object(u.jsx)(ne,{className:xe.a.button,onClick:function(){c(de("editable-span-value",""))},children:"restore"})]}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})};var pe=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(A,{}),Object(u.jsx)(J,{}),Object(u.jsx)(L,{}),Object(u.jsx)(ie,{}),Object(u.jsx)(he,{})]})},Oe=n(2),me=["options","onChange","onChangeOption"],ve=function(e){var t=e.options,n=e.onChange,a=e.onChangeOption,c=Object(R.a)(e,me),s=t?t.map((function(e,t){return Object(u.jsx)("option",{value:e,children:e},t)})):[];return Object(u.jsx)("select",Object(b.a)(Object(b.a)({onChange:function(e){n&&n(e),a&&a(e.currentTarget.value)}},c),{},{children:s}))},_e=["type","name","options","value","onChange","onChangeOption"],ge=function(e){e.type;var t=e.name,n=e.options,a=e.value,c=e.onChange,s=e.onChangeOption,r=(Object(R.a)(e,_e),function(e){s&&s(e.currentTarget.value),c&&c(e)}),i=n?n.map((function(e,c){return Object(u.jsxs)("label",{children:[Object(u.jsx)("input",{type:"radio",onChange:r,name:t,value:e,checked:a===n[c]}),e]},t+"-"+c)})):[];return Object(u.jsx)(u.Fragment,{children:i})},fe=["x","y","z"];var Ce=function(){var e=Object(a.useState)(fe[1]),t=Object(j.a)(e,2),n=t[0],c=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 7",Object(u.jsx)("div",{children:Object(u.jsx)(ve,{options:fe,value:n,onChangeOption:c})}),Object(u.jsx)("div",{children:Object(u.jsx)(ge,{name:"radio",options:fe,value:n,onChangeOption:c})}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},Ne=function(){return Object(u.jsx)("div",{children:Object(u.jsx)(Ce,{})})},ke="/pre-junior",Se="/junior",we="/junior-plus";var ye=function(){return Object(u.jsx)("div",{children:Object(u.jsxs)(Oe.c,{children:[Object(u.jsx)(Oe.a,{path:"/",element:Object(u.jsx)(pe,{})}),Object(u.jsx)(Oe.a,{path:ke,element:Object(u.jsx)(pe,{})}),Object(u.jsx)(Oe.a,{path:Se,element:Object(u.jsx)(Ne,{})}),Object(u.jsx)(Oe.a,{path:"/*",element:Object(u.jsx)(d,{})})]})})},Te=n(12),De=n.n(Te),Be={textDecoration:"none",color:"rgba(192, 44, 70, 0.5)",fontSize:"20px"};var Me=function(){var e=Object(a.useState)(!1),t=Object(j.a)(e,2),n=t[0],c=t[1],s="".concat(n?De.a.buttonMenuActive:De.a.buttonMenuDisable),r="".concat(n?De.a.exampleActive:De.a.exampleDisable);return Object(u.jsxs)("div",{className:r,children:[Object(u.jsxs)("div",{className:De.a.textNav,children:[Object(u.jsx)(l.b,{to:ke,style:function(e){return e.isActive?Be:void 0},children:"Pre-junior"}),Object(u.jsx)(l.b,{to:Se,style:function(e){return e.isActive?Be:void 0},children:"Junior"}),Object(u.jsx)(l.b,{to:we,style:function(e){return e.isActive?Be:void 0},children:"Junior+"})]}),Object(u.jsx)("div",{className:De.a.buttonDiv,onClick:function(){c(!n)},children:Object(u.jsx)(ne,{className:s,children:"Menu"})})]})};var Ie=function(){return Object(u.jsx)("div",{children:Object(u.jsxs)(l.a,{children:[Object(u.jsx)(Me,{}),Object(u.jsx)(ye,{})]})})};var Ae=function(){return Object(u.jsxs)("div",{className:o.a.App,children:[Object(u.jsx)("div",{children:"react homeworks:"}),Object(u.jsx)(Ie,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var We=n(22),Ee=Object(We.a)({homework1:k}),He=Object(We.b)(Ee);r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(_.a,{store:He,children:Object(u.jsx)(Ae,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports={blue:"HW4_blue__3QbY1",column:"HW4_column__3Eb1_",testSpanError:"HW4_testSpanError__3MRuU",test:"HW4_test__27ynD",testButton:"HW4_testButton__z_VVC"}},8:function(e,t,n){e.exports={settingPosition:"SuperInputText_settingPosition__1B3ln",superInput:"SuperInputText_superInput__3JOyp",wrapperInput:"SuperInputText_wrapperInput__1SrT8",errorWrapper:"SuperInputText_errorWrapper__1qa_5",input:"SuperInputText_input__BS-Z6",errorInput:"SuperInputText_errorInput__2PxaS",necessarySpan:"SuperInputText_necessarySpan__1ngdw",errorSpan:"SuperInputText_errorSpan__EwtmQ"}},9:function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__2s8QL",spanClassName:"SuperCheckbox_spanClassName__cEBZ0",label:"SuperCheckbox_label__3sYBk",divCheckboxTrue:"SuperCheckbox_divCheckboxTrue__Y5ifY",divCheckboxFalse:"SuperCheckbox_divCheckboxFalse__2Q436",circFalse:"SuperCheckbox_circFalse__1b7q9",circTrue:"SuperCheckbox_circTrue__2GnvG",circTrueHover:"SuperCheckbox_circTrueHover__NW4N-"}}},[[47,1,2]]]);
//# sourceMappingURL=main.5f9bf1e0.chunk.js.map