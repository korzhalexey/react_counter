(this.webpackJsonpreact_counter=this.webpackJsonpreact_counter||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(2),u=n.n(r),o=n(3),l=n(4),d=n(6),i=n(5),s=(n(12),function(t){var e=t.callback,n=t.text;return c.a.createElement("button",{type:"button",className:"button",onClick:e},n)}),m=function(t){var e=t.count,n=t.addOne,a=t.add100,r=t.increase;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Count:",e),c.a.createElement(s,{callback:n,text:"Add one"}),c.a.createElement(s,{callback:a,text:"Add 100"}),c.a.createElement(s,{callback:r,text:"Increase"}))},f=function(t){Object(d.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={count:0},t.addOne=function(){t.setState((function(t){return{count:t.count+1}}))},t.add100=function(){t.setState((function(t){return{count:t.count+100}}))},t.increase=function(){t.state.count%5===0&&t.add100(),t.addOne()},t}return Object(l.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"app"},c.a.createElement(m,{count:this.state.count,addOne:this.addOne,add100:this.add100,increase:this.increase}))}}]),n}(c.a.Component);u.a.render(c.a.createElement(f,null),document.getElementById("root"))},7:function(t,e,n){t.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.e13fccf7.chunk.js.map