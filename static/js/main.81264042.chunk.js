(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{13:function(t,e,c){},15:function(t,e,c){"use strict";c.r(e);var n=c(1),a=c.n(n),r=c(3),o=c.n(r),i=(c(13),c(4)),s=c(5),l=c(6),d=c(8),u=c(7),b=c(0);var j=function(t){var e=t.title,c=t.children;return Object(b.jsxs)("section",{children:[Object(b.jsx)("h2",{children:e}),c]})};var h=function(t){var e=t.good,c=t.neutral,n=t.bad,a=t.countTotal,r=t.calculateFeedback;return Object(b.jsxs)("div",{children:[Object(b.jsxs)("p",{children:["Good: ",e]}),Object(b.jsxs)("p",{children:["Neutral: ",c]}),Object(b.jsxs)("p",{children:["Bad: ",n]}),Object(b.jsxs)("p",{children:["Total: ",a()]}),Object(b.jsxs)("p",{children:["Positive feedback: ",r().toFixed(0),"%"]})]})};var O=function(t){var e=t.options,c=t.onFeedbackBtnClick;return Object(b.jsx)("div",{children:e.map((function(t){return Object(b.jsx)("button",{type:"button",onClick:c(t),children:t},t)}))})};var k=function(t){var e=t.message;return Object(b.jsx)("p",{children:e})},f=function(t){Object(d.a)(c,t);var e=Object(u.a)(c);function c(){var t;Object(s.a)(this,c);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={good:0,neutral:0,bad:0},t.onFeedbackBtnClick=function(e){return function(){t.setState((function(t){return Object(i.a)({},e,t[e]+1)}))}},t.countTotal=function(){return t.state.good+t.state.neutral+t.state.bad},t.calculateFeedback=function(){return t.state.good?100*t.state.good/t.countTotal():0},t}return Object(l.a)(c,[{key:"render",value:function(){var t=Object.keys(this.state);return Object(b.jsxs)("div",{children:[Object(b.jsx)(j,{title:"Please leave feedback",children:Object(b.jsx)(O,{options:t,onFeedbackBtnClick:this.onFeedbackBtnClick})}),Object(b.jsx)(j,{title:"Statistics",children:this.countTotal()?Object(b.jsx)(h,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,countTotal:this.countTotal,calculateFeedback:this.calculateFeedback}):Object(b.jsx)(k,{message:"No feedback given"})})]})}}]),c}(n.Component),v=f;o.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.81264042.chunk.js.map