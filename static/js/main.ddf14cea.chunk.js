(this["webpackJsonpreact-stuff-box"]=this["webpackJsonpreact-stuff-box"]||[]).push([[0],{22:function(e,t,a){e.exports=a(41)},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(19),c=a.n(r),i=a(12),o=a(1),s=a(6),m=a(7),u=a(9),p=a(8),h=a(20),y=a.n(h),d=(a(27),function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).handleClick=function(){e.props.clickHandler(e.props.symb)},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.symb,a=e.typeKey,n=y()("key-calculate",a);return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{onClick:this.handleClick,className:n},t))}}]),a}(n.Component)),k=(a(28),function(e){var t=e.value;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"calculator-display"},t))}),b=a(10),E=a.n(b);function f(e,t,a){var n=E()(e||"0"),l=E()(t||("\xf7"===a||"\xd7"===a?"1":"0"));if("+"===a)return n.plus(l).toString();if("\u2013"===a)return n.minus(l).toString();if("\xd7"===a)return n.times(l).toString();if("\xf7"===a)return"0"===l?(alert("Divide by 0 error"),"0"):n.div(l).toString();throw Error("Unknown operation '".concat(a,"'"))}var v=function(e,t){if("AC"===t)return{total:null,next:null,operation:null};if(/[0-9]+/.test(t))return"0"===t&&"0"===e.next?{}:e.operation?e.next?{next:e.next+t}:{next:t}:e.next?{next:"0"===e.next?t:e.next+t,total:null}:{next:t,total:null};if("%"===t){if(e.operation&&e.next){var a=f(e.total,e.next,e.operation);return{total:E()(a).div(E()("100")).toString(),next:null,operation:null}}return e.next?{next:E()(e.next).div(E()("100")).toString()}:{}}return"."===t?e.next?e.next.includes(".")?{}:{next:e.next+"."}:{next:"0."}:"="===t?e.next&&e.operation?{total:f(e.total,e.next,e.operation),next:null,operation:null}:{}:"\xb1"===t?e.next?{next:(-1*parseFloat(e.next)).toString()}:e.total?{total:(-1*parseFloat(e.total)).toString()}:{}:e.operation?{total:f(e.total,e.next,e.operation),next:null,operation:t}:e.next?{total:e.next,next:null,operation:t}:{operation:t}},x=(a(29),function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={total:null,next:null,operation:null},e.handleClick=function(t){console.log("buttonName :>> ",t),console.log("object :>> ",e.state.total),e.setState(v(e.state,t))},e}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"calculator"},l.a.createElement("div",{className:"calculate-wrapper"},l.a.createElement(k,{value:this.state.next||this.state.total||"0"}),l.a.createElement("div",{className:"calculate-keys"},l.a.createElement("div",{className:"calculate-left-block"},l.a.createElement("div",{className:"calculate-functions"},l.a.createElement(d,{clickHandler:this.handleClick,typeKey:"key-numbers",symb:"AC"}),l.a.createElement(d,{clickHandler:this.handleClick,typeKey:"key-numbers",symb:"\xb1"}),l.a.createElement(d,{clickHandler:this.handleClick,typeKey:"key-numbers",symb:"%"})),l.a.createElement("div",{className:"calculate-numbers"},l.a.createElement(d,{clickHandler:this.handleClick,typeKey:"key-numbers",symb:"1"}),l.a.createElement(d,{clickHandler:this.handleClick,typeKey:"key-numbers",symb:"2"}),l.a.createElement(d,{clickHandler:this.handleClick,typeKey:"key-numbers",symb:"3"}),l.a.createElement(d,{clickHandler:this.handleClick,typeKey:"key-numbers",symb:"4"}),l.a.createElement(d,{clickHandler:this.handleClick,typeKey:"key-numbers",symb:"5"}),l.a.createElement(d,{clickHandler:this.handleClick,typeKey:"key-numbers",symb:"6"}),l.a.createElement(d,{clickHandler:this.handleClick,typeKey:"key-numbers",symb:"7"}),l.a.createElement(d,{clickHandler:this.handleClick,typeKey:"key-numbers",symb:"8"}),l.a.createElement(d,{clickHandler:this.handleClick,typeKey:"key-numbers",symb:"9"}),l.a.createElement(d,{clickHandler:this.handleClick,typeKey:"key-numbers",symb:"0"}))),l.a.createElement("div",{className:"calculate-operations"},l.a.createElement(d,{clickHandler:this.handleClick,typeKey:"key-operations",symb:"\xf7"}),l.a.createElement(d,{clickHandler:this.handleClick,typeKey:"key-operations",symb:"\xd7"}),l.a.createElement(d,{clickHandler:this.handleClick,typeKey:"key-operations",symb:"\u2013"}),l.a.createElement(d,{clickHandler:this.handleClick,typeKey:"key-operations",symb:"+"}),l.a.createElement(d,{clickHandler:this.handleClick,typeKey:"key-operations",symb:"="}))))))}}]),a}(n.Component)),w=(a(30),function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={weatherData:null},e}return Object(m.a)(a,[{key:"componentDidUpdate",value:function(){var e=this,t=this.props.zip,a="http://api.openweathermap.org/data/2.5/weather?id=".concat(t,"&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=metric");fetch(a).then((function(e){return e.json()})).then((function(t){e.setState({weatherData:t})}))}},{key:"render",value:function(){var e=this.state.weatherData;if(!e)return l.a.createElement("div",null,"Loading");var t=e.weather[0],a="http://openweathermap.org/img/w/".concat(t.icon,".png");return l.a.createElement("div",{className:"weather-place"},l.a.createElement("div",{className:"weather-place__title"},t.main," in ",e.name,l.a.createElement("img",{src:a,alt:e.description})),l.a.createElement("p",null,"Current: ",e.main.temp,"\xb0"),l.a.createElement("p",null,"High: ",e.main.temp_max,"\xb0"),l.a.createElement("p",null,"Low: ",e.main.temp_min,"\xb0"),l.a.createElement("p",null,"Wind Speed: ",e.wind.speed," mi/hr"))}}]),a}(n.Component)),C=(a(31),function(e){var t=e.weatherPlaces,a=e.onSelect,n=t.map((function(e,t){return l.a.createElement("li",{className:"weather-nav__item",key:e.zip,onClick:function(){return a(e.zip)}},e.name)}));return l.a.createElement("ul",{className:"weather-nav "},n)}),g=(a(32),[{name:"Moscow",zip:"524894"},{name:"Blagoveshchensk",zip:"576116"},{name:"Svobodnyy",zip:"485449"},{name:"Khabarovsk",zip:"2022890"}]),H=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={selectedPlace:null},e.onPlaceSelected=function(t){e.setState({selectedPlace:t})},e}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"weather"},l.a.createElement("div",{className:"weather-wrapper"},l.a.createElement("h1",{className:"weather__title"},"Weather App"),l.a.createElement(C,{weatherPlaces:g,onSelect:this.onPlaceSelected}),l.a.createElement(w,{zip:this.state.selectedPlace}))))}}]),a}(n.Component),K=(a(33),function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"map"},l.a.createElement(i.b,{to:"calculator"},"Calculator"),l.a.createElement(i.b,{to:"weather"},"Weather")))}),N=(a(39),function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement(o.a,{path:"/",exact:!0,component:K}),l.a.createElement(o.a,{path:"/calculator",component:x}),l.a.createElement(o.a,{path:"/weather",component:H})))});a(40);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(i.a,null,l.a.createElement(N,null))),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.ddf14cea.chunk.js.map