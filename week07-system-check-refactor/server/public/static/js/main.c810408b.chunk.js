(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(19)},16:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(9),c=n.n(o),r=(n(16),n(10)),i=n(2),s=n(3),u=n(5),m=n(4),h=n(6),p=n(1),f=(n(8),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",null,l.a.createElement("h1",null,"Margie's System Check")))}}]),t}(a.Component)),d=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){var t=e.target.value;console.log("HANDLE CHANGE",t),n.setState(Object(r.a)({},n.state,{selectedValue:t}))},n.handleSubmit=function(e){n.setState({allData:""}),console.log("A name was submitted: ",n.state),n.runCpuInfo(n.state.selectedValue),e.preventDefault()},n.callCpuInfo=function(){var e=Object(p.a)(Object(p.a)(n));fetch("/ssh-runner/call-cpu-info").then(function(e){return e.json()}).then(function(t){console.log("parsed json",t.allData),e.setState({allData:t.allData})}).catch(function(e){console.log("parsing failed, URL bad, network down, or similar",e)})},n.copyFile=function(){Object(p.a)(Object(p.a)(n));fetch("/script-pusher/copy-file").then(function(e){return e.json()}).then(function(e){console.log("parsed json",e)}).catch(function(e){console.log("parsing failed, URL bad, network down, or similar",e)})},n.state={allData:"unknown"},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=l.a.createElement("div",{className:"container"},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"elf-form-field"},l.a.createElement("input",{type:"radio",name:"app-choice",value:"CpuInfo",id:"elf-radio-cpu",onChange:this.handleChange}),l.a.createElement("label",{htmlFor:"elf-radio-cpu"},"CpuInfo"),l.a.createElement("input",{type:"radio",name:"app-choice",value:"VersionCheck",id:"elf-radio-version",onChange:this.handleChange}),l.a.createElement("label",{htmlFor:"elf-radio-version"},"Version Info")),l.a.createElement("div",{className:"form-group"},l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Run System Script"))));return l.a.createElement("div",{className:"App"},l.a.createElement(f,null),l.a.createElement("section",null,e),l.a.createElement("section",null,l.a.createElement("pre",null,this.state.allData)),l.a.createElement("main",null,l.a.createElement("button",{onClick:this.copyFile},"Copy File"),l.a.createElement("button",{onClick:this.callCpuInfo},"Run CPU Info")),l.a.createElement("footer",null,l.a.createElement("p",null,"\xa9 by Margie Calvert ")))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){}},[[11,2,1]]]);
//# sourceMappingURL=main.c810408b.chunk.js.map