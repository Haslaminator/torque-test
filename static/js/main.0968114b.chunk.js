(this["webpackJsonptorque-test"]=this["webpackJsonptorque-test"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(6),l=n.n(r),s=(n(13),n(1)),c=n(2),d=n(4),o=n(3),m=(n(14),n(15),function(){return i.a.createElement("div",{className:"navbar sticky"},i.a.createElement("a",{href:"home"},"Home"),i.a.createElement("a",{href:"about"},"About"),i.a.createElement("a",{href:"help"},"Help"))}),u=n(7),h=(n(16),n(17),function(e){var t=e.ClientId,n=e.ClientName,a=e.PhysicalSite,r=e.Orders,l=e.Units;return i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"image-container"},i.a.createElement("img",{src:"https://haslaminator.github.io/torque-test/img/".concat(t,".png"),alt:n})),i.a.createElement("hr",null),i.a.createElement("h1",null,n),i.a.createElement("h1",null,a),i.a.createElement("h1",null,"Orders: ",r),i.a.createElement("h1",null,"Units: ",l))}),C=[{ClientId:"CL",ClientName:"Clarks",PhysicalSite:"London",Orders:121,Units:300},{ClientId:"NK",ClientName:"Nike",PhysicalSite:"Manchester",Orders:252,Units:321},{ClientId:"AD",ClientName:"Adidas",PhysicalSite:"Cardiff",Orders:147,Units:451},{ClientId:"PR",ClientName:"Primark",PhysicalSite:"Birmingham",Orders:86,Units:87},{ClientId:"LV",ClientName:"Levis",PhysicalSite:"Cardiff",Orders:10,Units:11},{ClientId:"TK",ClientName:"TK maxx",PhysicalSite:"Leeds",Orders:57,Units:2346},{ClientId:"TB",ClientName:"Timberland",PhysicalSite:"Birmingham",Orders:5647,Units:12348},{ClientId:"RB",ClientName:"Ray Ban",PhysicalSite:"London",Orders:82,Units:104},{ClientId:"RL",ClientName:"Ralph Lauren",PhysicalSite:"Cardiff",Orders:82,Units:546},{ClientId:"FP",ClientName:"Fred Perry",PhysicalSite:"Manchester",Orders:699,Units:900},{ClientId:"JD",ClientName:"JD Sports",PhysicalSite:"London",Orders:4200,Units:10012},{ClientId:"SD",ClientName:"Superdry",PhysicalSite:"Birmingham",Orders:1555,Units:3001},{ClientId:"SC",ClientName:"Schuh",PhysicalSite:"Cardiff",Orders:245,Units:400},{ClientId:"DS",ClientName:"Diesel",PhysicalSite:"Leeds",Orders:555,Units:999},{ClientId:"HB",ClientName:"Hugo Boss",PhysicalSite:"London",Orders:45,Units:150}],f=function(e){Object(d.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={clientInfo:[]},a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.setState({clientInfo:C})}},{key:"render",value:function(){var e=this.state.clientInfo,t=this.props,n=t.filterBy,a=t.filterText,r=e.filter((function(e){switch(n){case"site":return e.PhysicalSite.toLowerCase().includes(a.toLowerCase());case"client":return e.ClientName.toLowerCase().includes(a.toLowerCase());case"orders":return e.Orders>Number(a);default:return e}}));return i.a.createElement("div",{className:"card-list"},r.map((function(e){var t=e.ClientId,n=Object(u.a)(e,["ClientId"]);return i.a.createElement(h,Object.assign({key:t,ClientId:t},n))})))}}]),n}(i.a.Component),y=(n(18),function(e){var t=e.filterBy,n=e.handleInputChange,a=e.handleRadioChange;return i.a.createElement("div",{className:"searchbox"},i.a.createElement("h1",null,"Filter by"),i.a.createElement("label",{className:"site"===t?"checked":"",htmlFor:"site"},i.a.createElement("input",{type:"radio",id:"site",name:"filterOpt",onClick:a})," ","Site"),i.a.createElement("label",{className:"client"===t?"checked":"",htmlFor:"client"},i.a.createElement("input",{type:"radio",id:"client",name:"filterOpt",onClick:a}),"Client"),i.a.createElement("label",{className:"orders"===t?"checked":"",htmlFor:"orders"},i.a.createElement("input",{type:"radio",id:"orders",name:"filterOpt",onClick:a}),"Orders"),i.a.createElement("br",null),i.a.createElement("input",{type:"search",placeholder:"enter filter criteria...",onChange:n}))}),p=function(e){Object(d.a)(n,e);var t=Object(o.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).state={filterBy:"site",filterText:""},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.filterBy,a=t.filterText;return i.a.createElement("div",{className:"App"},i.a.createElement(m,null),i.a.createElement(y,{filterBy:n,handleRadioChange:function(t){var n=t.target.id;e.setState({filterBy:n})},handleInputChange:function(t){var n=t.target.value;e.setState({filterText:n})}}),i.a.createElement(f,{filterBy:n,filterText:a}))}}]),n}(i.a.Component);l.a.render(i.a.createElement(p,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.0968114b.chunk.js.map