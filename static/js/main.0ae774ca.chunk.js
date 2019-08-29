(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(24)},22:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(8),l=a.n(r),s=a(9),u=a(10),i=a(14),c=a(11),p=a(15),m=(a(22),{name:"one",label:"&#49;",value:1}),b={name:"two",label:"&#50;",value:2},d={name:"three",label:"&#51;",value:3},g={name:"four",label:"&#52;",value:4},h={name:"five",label:"&#53;",value:5},y={name:"six",label:"&#54;",value:6},v={name:"seven",label:"&#55;",value:7},E={name:"eight",label:"&#56;",value:8},f={name:"nine",label:"&#57;",value:9},P={name:"zero",label:"&#48;",value:0},w={name:"add",label:"&#43;",value:"+"},x={name:"subtract",label:"&#8722;",value:"-"},N={name:"divide",label:"&#247;",value:"/"},B={name:"multiply",label:"&#215;",value:"*"},O="operator",j="operand",k=function(e){return o.a.createElement("button",{id:e.button.name,type:"button",className:"operand-group operand-group-light",dangerouslySetInnerHTML:{__html:e.button.label},onClick:function(){return e.onPress(j,e.button)}})},R={display:{borderBottomLeftRadius:0,borderBottomRightRadius:0},result:{borderTopLeftRadius:0,borderTopRightRadius:0,color:"#ccc"}},C=function(e){return o.a.createElement("form",null,o.a.createElement("div",{id:"display1",className:"form-control-lg text-right form-input-light",dangerouslySetInnerHTML:{__html:e.display},value:e.display,style:R.display}),o.a.createElement("input",{readOnly:!0,id:"display2",type:"text",value:e.result,className:"form-control-lg text-right  form-input-light",style:R.result}))},S=function(e){return o.a.createElement("button",{id:e.button.name,type:"button",className:"operator-group operator-group-light",dangerouslySetInnerHTML:{__html:e.button.label},onClick:function(){return e.onPress(O,e.button)}})},T=function(e){return o.a.createElement("h1",{style:{width:"50%",margin:"0 auto",textAlign:"center"}},e.text)},U=a(26),_=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).state={display:"",expression:"",result:0,lastUsedOperator:null},a.onButtonPress=function(e,t){var n=a.updateDisplay(e,t),o=null;o=e===j?null:t.value;var r=a.updateExpression(e,t),l=a.calculateResult(r);a.setState({display:n,lastUsedOperator:o,expression:r,result:l})},a.calculateResult=function(e){var t=a.state.result;try{t=Object(U.a)(e)}catch(n){console.log("Evaluation error")}return t},a.updateExpression=function(e,t){var n=a.state.expression;return console.log("last op",a.state.lastUsedOperator),a.state.lastUsedOperator&&e===O?n:n+=t.value},a.updateDisplay=function(e,t){var n=a.state.display;if(a.state.lastUsedOperator&&e===O)return n;var o=t.value;return e===O&&(o=t.label),String(n)+String(o)},a.onPressClear=function(){a.setState({display:"",expression:"",result:0,lastUsedOperator:null})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.display,a=e.result;return o.a.createElement(o.a.Fragment,null,o.a.createElement(T,{text:"React Calculator"}),o.a.createElement("div",{className:"container container-light",style:{marginTop:50}},o.a.createElement(C,{display:t,result:a}),o.a.createElement("div",{className:"d-flex justify-content-between button-row"},o.a.createElement("button",{id:"left-parenthesis",type:"button",className:"operator-group operator-group-light"},"("),o.a.createElement("button",{id:"right-parenthesis",type:"button",className:"operator-group operator-group-light"},")"),o.a.createElement("button",{id:"square-root",type:"button",className:"operator-group operator-group-light"},"\u221a"),o.a.createElement("button",{id:"square",type:"button",className:"operator-group operator-group-light"},"x\xb2")),o.a.createElement("div",{className:"d-flex justify-content-between button-row"},o.a.createElement("button",{id:"clear",className:"clear-light",type:"button",onClick:this.onPressClear},"C"),o.a.createElement("button",{id:"backspace",className:"backspace-light",type:"button"},"\u232b"),o.a.createElement("button",{id:"ans",type:"button",className:"operand-group ans-light"},"Ans"),o.a.createElement(S,{button:N,onPress:this.onButtonPress})),o.a.createElement("div",{className:"d-flex justify-content-between button-row"},o.a.createElement(k,{button:v,onPress:this.onButtonPress}),o.a.createElement(k,{button:E,onPress:this.onButtonPress}),o.a.createElement(k,{button:f,onPress:this.onButtonPress}),o.a.createElement(S,{button:B,onPress:this.onButtonPress})),o.a.createElement("div",{className:"d-flex justify-content-between button-row"},o.a.createElement(k,{button:g,onPress:this.onButtonPress}),o.a.createElement(k,{button:h,onPress:this.onButtonPress}),o.a.createElement(k,{button:y,onPress:this.onButtonPress}),o.a.createElement(S,{button:x,onPress:this.onButtonPress})),o.a.createElement("div",{className:"d-flex justify-content-between button-row"},o.a.createElement(k,{button:m,onPress:this.onButtonPress}),o.a.createElement(k,{button:b,onPress:this.onButtonPress}),o.a.createElement(k,{button:d,onPress:this.onButtonPress}),o.a.createElement(S,{button:w,onPress:this.onButtonPress})),o.a.createElement("div",{className:"d-flex justify-content-between button-row"},o.a.createElement("button",{id:"percentage",type:"button",className:"operand-group operand-group-light"},"%"),o.a.createElement(k,{button:P,onPress:this.onButtonPress}),o.a.createElement("button",{id:"decimal",type:"button",className:"operand-group operand-group-light"},"."),o.a.createElement("button",{id:"equal",className:"equal-light",type:"button"},"="))))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.0ae774ca.chunk.js.map