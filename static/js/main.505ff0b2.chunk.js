(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],{10:function(e,t,a){e.exports={wrapperButton:"SuperButton_wrapperButton__-eoLl",wrapperButtonDis:"SuperButton_wrapperButtonDis__2VKD7",defaultDis:"SuperButton_defaultDis__2RRQx",default:"SuperButton_default__3R27D",red:"SuperButton_red__3g1_d",redDis:"SuperButton_redDis__VFUAJ"}},11:function(e,t,a){e.exports={textNav:"Header_textNav__7pBZc",buttonDiv:"Header_buttonDiv__nqeL3",buttonMenuActive:"Header_buttonMenuActive__1fTHi",buttonMenuDisable:"Header_buttonMenuDisable__JppK-",exampleDisable:"Header_exampleDisable__1cPf2",menuLeft:"Header_menuLeft__2ZLdB",exampleActive:"Header_exampleActive__16veo",menuRight:"Header_menuRight__3gLJB"}},19:function(e,t,a){e.exports={someClass:"Greeting_someClass__FLIgf",error:"Greeting_error__35PM3",notError:"Greeting_notError__1PpHy"}},25:function(e,t,a){e.exports={App:"App_App__3MlMn"}},35:function(e,t,a){},43:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),c=a(15),r=a.n(c),i=(a(35),a(25)),o=a.n(i),l=a(3),j=a(9),d=a(0);var u=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:"404"}),Object(d.jsx)("div",{children:"Page not found!"}),Object(d.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},b=a(5),x=function(e){return Object(d.jsxs)("div",{className:"messageItem",children:[Object(d.jsx)("div",{className:"messageItem__avatar",children:Object(d.jsx)("img",{src:e.avatar,alt:"avatar"})}),Object(d.jsx)("div",{className:"messageItem__description",children:Object(d.jsxs)("div",{className:"description",children:[Object(d.jsx)("div",{className:"description__name",children:Object(d.jsx)("span",{children:e.name})}),Object(d.jsx)("div",{className:"description__text",children:e.message}),Object(d.jsx)("div",{className:"description__time",children:Object(d.jsx)("span",{children:e.time})})]})})]})},h=function(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"message",children:[Object(d.jsx)(x,Object(b.a)({},e)),Object(d.jsx)("div",{className:"message__text",children:Object(d.jsx)("textarea",{placeholder:"Write text"})}),Object(d.jsx)("div",{className:"message__button",children:Object(d.jsx)("button",{children:"Send"})})]})})},m=a(26),p=a(27),O=a(30),_=a(29),v=a(16),f=a(17),g="NEW_TEXT",N="ADD_MESSAGE",C={messageData:[{id:1,avatar:"https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",name:"chickenDay",message:"Send me msg, pls ",time:"this time"}],newMessageText:""},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(b.a)(Object(b.a)({},e),{},{newMessageText:t.text});case N:return Object(b.a)(Object(b.a)({},e),{},{messageData:[].concat(Object(f.a)(e.messageData),[{id:e.messageData.length+1,avatar:"https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",name:"chickenDay",message:e.newMessageText,time:t.time}]),newMessageText:""});default:return e}},S=function(e){return Object(d.jsxs)("div",{className:"messageItem",children:[Object(d.jsx)("div",{className:"messageItem__avatar",children:Object(d.jsx)("img",{src:e.avatar,alt:"avatar"})}),Object(d.jsx)("div",{className:"arrow"}),Object(d.jsx)("div",{className:"messageItem__description",children:Object(d.jsxs)("div",{className:"description",children:[Object(d.jsx)("div",{className:"description__name",children:Object(d.jsx)("span",{children:e.name})}),Object(d.jsx)("div",{className:"description__text",children:e.message}),Object(d.jsx)("div",{className:"description__time",children:Object(d.jsx)("span",{children:e.time})})]})})]})},w=function(e){var t=e.messageData.map((function(e){return Object(d.jsx)(S,{id:e.id,message:e.message,avatar:e.avatar,name:e.name,time:e.time},e.id)})),a=n.a.createRef();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("span",{children:"This with Redux"}),Object(d.jsxs)("div",{className:"message",children:[t,Object(d.jsx)("div",{className:"message__text",children:Object(d.jsx)("textarea",{ref:a,onChange:function(){var t=a.current.value;e.updateMessageText(t)},value:e.newMessageText,placeholder:"Write text"})}),Object(d.jsx)("div",{className:"message__button",children:Object(d.jsx)("button",{onClick:function(){var t="".concat((new Date).getHours(),":").concat((new Date).getMinutes(),":").concat((new Date).getSeconds());""===e.newMessageText.trim()?alert("Message === null"):e.addMessage(t)},children:"Send"})})]})]})},y=function(e){Object(O.a)(a,e);var t=Object(_.a)(a);function a(e){return Object(m.a)(this,a),t.call(this,e)}return Object(p.a)(a,[{key:"render",value:function(){return Object(d.jsx)(w,{messageData:this.props.messageData,newMessageText:this.props.newMessageText,updateMessageText:this.props.updateMessageText,addMessage:this.props.addMessage})}}]),a}(n.a.Component),T=Object(v.b)((function(e){return{messageData:e.homework1.messageData,newMessageText:e.homework1.newMessageText}}),(function(e){return{updateMessageText:function(t){e(function(e){return{type:g,text:e}}(t))},addMessage:function(t){e(function(e){return{type:N,time:e}}(t))}}}))(y),D=(a(43),"https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg"),M="Some Name",A="some text",H="22:00";var B=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 1",Object(d.jsx)(h,{avatar:D,name:M,message:A,time:H}),Object(d.jsx)("hr",{}),Object(d.jsx)(T,{}),Object(d.jsx)("hr",{})]})},I={margin:"5px"},E=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{style:I,children:e.affair.name}),Object(d.jsx)("span",{style:I,children:e.affair.priority}),Object(d.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})},W=function(e){var t=e.data.map((function(t){return Object(d.jsx)(E,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(d.jsxs)("div",{children:[t,Object(d.jsx)("button",{onClick:function(){e.setFilter("all")},children:"All"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("high")},children:"High"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("low")},children:"Low"})]})},F=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var P=function(){var e=Object(s.useState)(F),t=Object(l.a)(e,2),a=t[0],n=t[1],c=Object(s.useState)("all"),r=Object(l.a)(c,2),i=r[0],o=r[1],j=function(e,t){return"all"===t?e:"high"===t?e.filter((function(e){return"high"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):"low"===t?e.filter((function(e){return"low"===e.priority})):e}(a,i);return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 2",Object(d.jsx)(W,{data:j,setFilter:o,deleteAffairCallback:function(e){return n(function(e,t){return e.filter((function(e){return e._id!==t}))}(a,e))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},J=a(19),L=a.n(J),R=function(e){var t=e.name,a=e.setNameCallback,s=e.addUser,n=e.error,c=e.totalUsers,r=""!==n?L.a.error:L.a.notError;return Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{value:t,onChange:function(e){a(e.target.value)},className:r}),Object(d.jsx)("span",{children:n}),Object(d.jsx)("button",{disabled:""===t.trim(),onClick:function(){s(t)},children:"add"}),Object(d.jsx)("span",{children:c})]})},G=function(e){var t=e.users,a=e.addUserCallback,n=Object(s.useState)(""),c=Object(l.a)(n,2),r=c[0],i=c[1],o=Object(s.useState)(""),j=Object(l.a)(o,2),u=j[0],b=j[1],x=t.length,h=t.map((function(e){return Object(d.jsx)("div",{children:Object(d.jsx)("span",{children:e.name})},e.key)}));return Object(d.jsxs)(d.Fragment,{children:[h,Object(d.jsx)(R,{name:r,setNameCallback:function(e){i(e)},addUser:function(e){""===e.trim()?(b("\u0414\u0430\u0432\u0430\u0439 \u0431\u0435\u0437 \u043f\u0443\u0441\u0442\u044b\u0445 \u0441\u0442\u0440\u043e\u043a, \u0431\u0440\u0430\u0442\u043e\u043a"),i("")):e.trim().length<3?(b("\u0418\u043c\u044f \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 3 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),i(e.trim())):(b(""),alert("Hello ".concat(e.trim()," !")),a(e),i(""))},error:u,totalUsers:x})]})},U=a(20);var K=function(){var e=Object(s.useState)([]),t=Object(l.a)(e,2),a=t[0],n=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 3",Object(d.jsx)(G,{users:a,addUserCallback:function(e){n([].concat(Object(f.a)(a),[{_id:Object(U.v1)(),name:e,key:Object(U.v1)()}]))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},X=a(13),Z=a(7),q=a.n(Z),V=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName","necessary"],Y=function(e){e.type;var t=e.onChange,a=e.onChangeText,s=e.onKeyPress,n=e.onEnter,c=e.error,r=e.className,i=e.spanClassName,o=e.necessary,l=Object(X.a)(e,V),j="".concat(i||""," ").concat(q.a.errorSpan," "),u="".concat(q.a.wrapperInput," ").concat(c?q.a.errorWrapper:""," ").concat(r),x="".concat(c?q.a.errorInput:q.a.input),h="".concat(o?q.a.necessarySpan:"");return Object(d.jsxs)("div",{className:q.a.settingPosition,children:[Object(d.jsxs)("div",{className:u,children:[Object(d.jsx)("input",Object(b.a)({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){s&&s(e),n&&"Enter"===e.key&&n()},className:x},l)),Object(d.jsx)("span",{className:h,children:o?"*":""})]}),c&&Object(d.jsx)("span",{className:j,children:c})]})},z=a(6),Q=a.n(z),$=a(10),ee=a.n($),te=["red","className"],ae=function(e){var t=e.red,a=e.className,s=Object(X.a)(e,te),n="".concat(a," ").concat(t?s.disabled?ee.a.redDis:ee.a.red:s.disabled?ee.a.wrapperButtonDis:ee.a.wrapperButton," "),c="".concat(s.disabled?ee.a.defaultDis:ee.a.default);return Object(d.jsx)("div",{className:n,children:Object(d.jsx)("button",Object(b.a)({className:c},s))})},se=a(8),ne=a.n(se),ce=["type","onChange","onChangeChecked","className","spanClassName","children"],re=function(e){e.type;var t=e.onChange,a=e.onChangeChecked,s=e.className,n=(e.spanClassName,e.children),c=Object(X.a)(e,ce),r="".concat(c.checked?ne.a.divCheckboxTrue:ne.a.divCheckboxFalse," ").concat(s||""),i="".concat(c.checked?ne.a.circTrue:ne.a.circFalse," ").concat(s||""," ");return Object(d.jsxs)("label",{className:ne.a.label,children:[Object(d.jsx)("div",{className:r,children:Object(d.jsx)("div",{className:i})}),Object(d.jsx)("input",Object(b.a)({type:"checkbox",onChange:function(e){t&&t(e),a&&a(e.currentTarget.checked)},className:ne.a.checkbox},c)),n&&Object(d.jsx)("span",{className:ne.a.spanClassName,children:n})]})};var ie=function(){var e=Object(s.useState)(""),t=Object(l.a)(e,2),a=t[0],n=t[1],c=a.trim()?"":"error",r=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(a)},i=Object(s.useState)(!1),o=Object(l.a)(i,2),j=o[0],u=o[1];return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:Q.a.column,children:[Object(d.jsx)("div",{className:Q.a.test,children:Object(d.jsx)(Y,{value:a,onChangeText:n,onEnter:r,error:c,necessary:!0})}),Object(d.jsx)("div",{className:Q.a.test,children:Object(d.jsx)(Y,{necessary:!0,className:Q.a.blue,error:c,spanClassName:Q.a.testSpanError})}),Object(d.jsx)("div",{className:Q.a.test,children:Object(d.jsx)(ae,{onClick:r,className:Q.a.testButton,children:"default"})}),Object(d.jsx)("div",{className:Q.a.test,children:Object(d.jsx)(ae,{red:!0,onClick:r,children:"Red Button"})}),Object(d.jsx)("div",{className:Q.a.test,children:Object(d.jsx)(ae,{disabled:!0,children:"Disabled"})}),Object(d.jsx)("div",{className:Q.a.test,children:Object(d.jsx)(ae,{red:!0,disabled:!0,children:"Disabled"})}),Object(d.jsx)(re,{checked:j,onChangeChecked:u,children:"some text"})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var oe=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(B,{}),Object(d.jsx)(P,{}),Object(d.jsx)(K,{}),Object(d.jsx)(ie,{})]})},le=a(2),je="/pre-junior",de="/junior",ue="/junior-plus";var be=function(e){return Object(d.jsx)("div",{children:Object(d.jsxs)(le.c,{children:[Object(d.jsx)(le.a,{path:"/",element:Object(d.jsx)(oe,{})}),Object(d.jsx)(le.a,{path:je,element:Object(d.jsx)(oe,{})}),Object(d.jsx)(le.a,{path:"/*",element:Object(d.jsx)(u,{})})]})})},xe=a(11),he=a.n(xe),me={textDecoration:"none",color:"rgba(192, 44, 70, 0.5)",fontSize:"20px"};var pe=function(){var e=Object(s.useState)(!1),t=Object(l.a)(e,2),a=t[0],n=t[1],c="".concat(a?he.a.buttonMenuActive:he.a.buttonMenuDisable),r="".concat(a?he.a.exampleActive:he.a.exampleDisable);return Object(d.jsxs)("div",{className:r,children:[Object(d.jsxs)("div",{className:he.a.textNav,children:[Object(d.jsx)(j.b,{to:je,style:function(e){return e.isActive?me:void 0},children:"Pre-junior"}),Object(d.jsx)(j.b,{to:de,style:function(e){return e.isActive?me:void 0},children:"Junior"}),Object(d.jsx)(j.b,{to:ue,style:function(e){return e.isActive?me:void 0},children:"Junior+"})]}),Object(d.jsx)("div",{className:he.a.buttonDiv,onClick:function(){n(!a)},children:Object(d.jsx)(ae,{className:c,children:"Menu"})})]})};var Oe=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(j.a,{children:[Object(d.jsx)(pe,{}),Object(d.jsx)(be,{})]})})};var _e=function(){return Object(d.jsxs)("div",{className:o.a.App,children:[Object(d.jsx)("div",{children:"react homeworks:"}),Object(d.jsx)(Oe,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ve=a(21),fe=Object(ve.a)({homework1:k}),ge=Object(ve.b)(fe);r.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(v.a,{store:ge,children:Object(d.jsx)(_e,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,a){e.exports={blue:"HW4_blue__2RHWr",column:"HW4_column__1rp7V",testSpanError:"HW4_testSpanError__20JtV",test:"HW4_test__2Mtth",testButton:"HW4_testButton__2xtur"}},7:function(e,t,a){e.exports={settingPosition:"SuperInputText_settingPosition__MomP5",superInput:"SuperInputText_superInput__3EgLh",wrapperInput:"SuperInputText_wrapperInput__2Xwbi",errorWrapper:"SuperInputText_errorWrapper__2ZC0B",input:"SuperInputText_input__1uL_k",errorInput:"SuperInputText_errorInput__8szvH",necessarySpan:"SuperInputText_necessarySpan__3ptde",errorSpan:"SuperInputText_errorSpan__1w_tH"}},8:function(e,t,a){e.exports={checkbox:"SuperCheckbox_checkbox__GwoqK",spanClassName:"SuperCheckbox_spanClassName__22eC-",label:"SuperCheckbox_label__3DcEC",divCheckboxTrue:"SuperCheckbox_divCheckboxTrue__3lJj1",divCheckboxFalse:"SuperCheckbox_divCheckboxFalse__1_dl7",circFalse:"SuperCheckbox_circFalse__26MLM",circTrue:"SuperCheckbox_circTrue__3p9mL",circTrueHover:"SuperCheckbox_circTrueHover__v8-9b"}}},[[46,1,2]]]);
//# sourceMappingURL=main.505ff0b2.chunk.js.map