(this["webpackJsonpreact-stuff-box"]=this["webpackJsonpreact-stuff-box"]||[]).push([[0],{22:function(e,t,a){e.exports=a(44)},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(19),c=a.n(r),i=a(11),o=a(1),s=a(5),m=a(6),u=a(8),p=a(7),h=a(20),d=a.n(h),y=(a(27),function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).handleClick=function(){e.props.clickHandler(e.props.symb)},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.symb,a=e.typeKey,n=d()("key-calculate",a);return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{onClick:this.handleClick,className:n},t))}}]),a}(n.Component)),k=(a(28),function(e){var t=e.value;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"calculator-display"},t))}),E=a(10),b=a.n(E);function v(e,t,a){var n=b()(e||"0"),l=b()(t||("\xf7"===a||"\xd7"===a?"1":"0"));if("+"===a)return n.plus(l).toString();if("\u2013"===a)return n.minus(l).toString();if("\xd7"===a)return n.times(l).toString();if("\xf7"===a)return"0"===l?(alert("Divide by 0 error"),"0"):n.div(l).toString();throw Error("Unknown operation '".concat(a,"'"))}var f=function(e,t){if("AC"===t)return{total:null,next:null,operation:null};if(/[0-9]+/.test(t))return"0"===t&&"0"===e.next?{}:e.operation?e.next?{next:e.next+t}:{next:t}:e.next?{next:"0"===e.next?t:e.next+t,total:null}:{next:t,total:null};if("%"===t){if(e.operation&&e.next){var a=v(e.total,e.next,e.operation);return{total:b()(a).div(b()("100")).toString(),next:null,operation:null}}return e.next?{next:b()(e.next).div(b()("100")).toString()}:{}}return"."===t?e.next?e.next.includes(".")?{}:{next:e.next+"."}:{next:"0."}:"="===t?e.next&&e.operation?{total:v(e.total,e.next,e.operation),next:null,operation:null}:{}:"\xb1"===t?e.next?{next:(-1*parseFloat(e.next)).toString()}:e.total?{total:(-1*parseFloat(e.total)).toString()}:{}:e.operation?{total:v(e.total,e.next,e.operation),next:null,operation:t}:e.next?{total:e.next,next:null,operation:t}:{operation:t}},w=(a(29),function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={total:null,next:null,operation:null},e.handleClick=function(t){console.log("buttonName :>> ",t),console.log("object :>> ",e.state.total),e.setState(f(e.state,t))},e}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"calculator"},l.a.createElement("div",{className:"calculate-wrapper"},l.a.createElement(k,{value:this.state.next||this.state.total||"0"}),l.a.createElement("div",{className:"calculate-keys"},l.a.createElement("div",{className:"calculate-left-block"},l.a.createElement("div",{className:"calculate-functions"},l.a.createElement(y,{clickHandler:this.handleClick,typeKey:"key-numbers",symb:"AC"}),l.a.createElement(y,{clickHandler:this.handleClick,typeKey:"key-numbers",symb:"\xb1"}),l.a.createElement(y,{clickHandler:this.handleClick,typeKey:"key-numbers",symb:"%"})),l.a.createElement("div",{className:"calculate-numbers"},l.a.createElement(y,{clickHandler:this.handleClick,typeKey:"key-numbers",symb:"1"}),l.a.createElement(y,{clickHandler:this.handleClick,typeKey:"key-numbers",symb:"2"}),l.a.createElement(y,{clickHandler:this.handleClick,typeKey:"key-numbers",symb:"3"}),l.a.createElement(y,{clickHandler:this.handleClick,typeKey:"key-numbers",symb:"4"}),l.a.createElement(y,{clickHandler:this.handleClick,typeKey:"key-numbers",symb:"5"}),l.a.createElement(y,{clickHandler:this.handleClick,typeKey:"key-numbers",symb:"6"}),l.a.createElement(y,{clickHandler:this.handleClick,typeKey:"key-numbers",symb:"7"}),l.a.createElement(y,{clickHandler:this.handleClick,typeKey:"key-numbers",symb:"8"}),l.a.createElement(y,{clickHandler:this.handleClick,typeKey:"key-numbers",symb:"9"}),l.a.createElement(y,{clickHandler:this.handleClick,typeKey:"key-numbers",symb:"0"}))),l.a.createElement("div",{className:"calculate-operations"},l.a.createElement(y,{clickHandler:this.handleClick,typeKey:"key-operations",symb:"\xf7"}),l.a.createElement(y,{clickHandler:this.handleClick,typeKey:"key-operations",symb:"\xd7"}),l.a.createElement(y,{clickHandler:this.handleClick,typeKey:"key-operations",symb:"\u2013"}),l.a.createElement(y,{clickHandler:this.handleClick,typeKey:"key-operations",symb:"+"}),l.a.createElement(y,{clickHandler:this.handleClick,typeKey:"key-operations",symb:"="}))))))}}]),a}(n.Component)),x=(a(30),function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={weatherData:null},e}return Object(m.a)(a,[{key:"componentDidUpdate",value:function(){var e=this,t=this.props.zip,a="https://api.openweathermap.org/data/2.5/weather?id=".concat(t,"&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=metric");fetch(a).then((function(e){return e.json()})).then((function(t){e.setState({weatherData:t})}))}},{key:"render",value:function(){var e=this.state.weatherData;if(!e)return l.a.createElement("div",null,"Loading");var t=e.weather[0],a="http://openweathermap.org/img/w/".concat(t.icon,".png");return l.a.createElement("div",{className:"weather-place"},l.a.createElement("div",{className:"weather-place__title"},t.main," in ",e.name,l.a.createElement("img",{src:a,alt:e.description})),l.a.createElement("p",null,"Current: ",e.main.temp,"\xb0"),l.a.createElement("p",null,"High: ",e.main.temp_max,"\xb0"),l.a.createElement("p",null,"Low: ",e.main.temp_min,"\xb0"),l.a.createElement("p",null,"Wind Speed: ",e.wind.speed," mi/hr"))}}]),a}(n.Component)),g=(a(31),function(e){var t=e.weatherPlaces,a=e.onSelect,n=t.map((function(e,t){return l.a.createElement("li",{className:"weather-nav__item",key:e.zip,onClick:function(){return a(e.zip)}},e.name)}));return l.a.createElement("ul",{className:"weather-nav "},n)}),C=(a(32),[{name:"Moscow",zip:"524894"},{name:"Blagoveshchensk",zip:"576116"},{name:"Svobodnyy",zip:"485449"},{name:"Khabarovsk",zip:"2022890"}]),N=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={selectedPlace:null},e.onPlaceSelected=function(t){e.setState({selectedPlace:t})},e}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"weather"},l.a.createElement("div",{className:"weather-wrapper"},l.a.createElement("h1",{className:"weather__title"},"Weather App"),l.a.createElement(g,{weatherPlaces:C,onSelect:this.onPlaceSelected}),l.a.createElement(x,{zip:this.state.selectedPlace}))))}}]),a}(n.Component),j=(a(33),function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).handleChange=function(e,t){t(e.target.value)},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this,t=this.props.startTimer;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"count-timer-input"},l.a.createElement("input",{type:"datetime-local",className:"time-to",id:"time-to",onChange:function(a){return e.handleChange(a,t)}})))}}]),a}(n.Component)),O=(a(34),function(e){var t=e.timeDown;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"count-timer-display"},l.a.createElement("div",{className:"clock-column"},l.a.createElement("p",{className:"clock-timer"},t.days),l.a.createElement("p",{className:"clock-label"},"Days")),l.a.createElement("div",{className:"clock-column"},l.a.createElement("p",{className:"clock-timer"},t.hours),l.a.createElement("p",{className:"clock-label"},"Hours")),l.a.createElement("div",{className:"clock-column"},l.a.createElement("p",{className:"clock-timer"},t.minutes),l.a.createElement("p",{className:"clock-label"},"Minutes")),l.a.createElement("div",{className:"clock-column"},l.a.createElement("p",{className:"clock-timer"},t.seconds),l.a.createElement("p",{className:"clock-label"},"Seconds"))))}),H=(a(35),function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={intervalId:"",days:"T",hours:"I",minutes:"M",seconds:"E"},e.useInterval=function(t){var a=setInterval((function(){var a=new Date(t).getTime()-(new Date).getTime(),n=Math.floor(a/864e5),l=Math.floor(a%864e5/36e5),r=Math.floor(a%36e5/6e4),c=Math.floor(a%6e4/1e3);a<0?clearInterval(e.useInterval):e.setState({days:n,hours:l,minutes:r,seconds:c})}),1e3);e.setState({intervalId:a})},e.countDown=function(t){clearInterval(e.state.intervalId),e.useInterval(t)},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"count-timer"},l.a.createElement("h1",null,"Countdown timer page"),l.a.createElement(j,{startTimer:this.countDown}),l.a.createElement(O,{timeDown:e})))}}]),a}(n.Component)),S=(a(36),function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"map"},l.a.createElement(i.b,{to:"calculator"},"Calculator"),l.a.createElement(i.b,{to:"weather"},"Weather"),l.a.createElement(i.b,{to:"countdowntimer"},"Countdown Timer")))}),K=(a(42),function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement(o.a,{path:"/",exact:!0,component:S}),l.a.createElement(o.a,{path:"/calculator",component:w}),l.a.createElement(o.a,{path:"/weather",component:N}),l.a.createElement(o.a,{path:"/countdowntimer",component:H})))});a(43);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(i.a,{basename:"/react-stuff-box"},l.a.createElement(K,null))),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.662f8705.chunk.js.map