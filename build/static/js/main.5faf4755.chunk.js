(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{19:function(e,t,a){},23:function(e,t,a){e.exports=a(33)},33:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(20),l=a.n(i),r=a(2),o=a(3),s=a(5),p=a(4),h=a(6),d=a(1);function m(){return c.a.createElement("div",{className:"header"},c.a.createElement("header",null,c.a.createElement("img",{src:"//static2.cnodejs.org/public/images/cnodejs_light.svg"}),c.a.createElement("div",{style:{float:"right"}},c.a.createElement(d.b,{to:"/home"},"\u9996\u9875"),c.a.createElement(d.b,{to:"/start"},"\u65b0\u624b\u5165\u95e8"),c.a.createElement(d.b,{to:"/api"},"API"),c.a.createElement(d.b,{to:"/about"},"\u5173\u4e8e"),c.a.createElement(d.b,{to:"/login"},"\u767b\u5f55"))))}var u=a(11),b=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(s.a)(this,Object(p.a)(t).call(this))).state={data:[],arr:[1,2,3,4,5,6,7,8,9,10]},e}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="https://cnodejs.org/api/v1/topics?tab=all&page="+this.props.match.params.id;fetch(t).then((function(e){return e.json()})).then((function(t){e.setState({data:t.data})}))}},{key:"render",value:function(){this.props.match.url;return c.a.createElement("div",{style:{background:"white"}},this.state.data.map((function(e){return c.a.createElement("ul",{key:e.id},c.a.createElement("li",{style:{paddingRight:"10px"}},c.a.createElement("img",{style:{width:"30px",height:"30px",marginLeft:"8px"},src:e.author.avatar_url}),c.a.createElement("span",{style:{margin:"5px",width:"70px",display:"inline-block",textAlign:"center"}},e.reply_count,"/",e.visit_count),1==e.top?c.a.createElement("button",{style:{width:"40px",height:"23px",background:"#80bd01",color:"white"}},"\u7f6e\u9876"):c.a.createElement("button",{style:{width:"40px",height:"23px"}},"\u5206\u4eab"),c.a.createElement(d.b,{to:"/topic/".concat(e.id)},c.a.createElement("h3",{style:{maxWidth:"70%",whiteSpace:"nowrap",display:"inline-block",verticalAlign:"middle",overflow:"hidden",lineHeight:"30px",textOverflow:"ellipsis"}},e.title)),c.a.createElement("span",{style:{float:"right"}},c.a.createElement("img",{style:{width:"15px",height:"15px"},src:"https://avatars3.githubusercontent.com/u/56661717?v=4&s=120"}),"1\u5c0f\u65f6\u524d")))})))}}]),t}(n.Component),g=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(s.a)(this,Object(p.a)(t).call(this))).state={data:[]},e}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="https://cnodejs.org/api/v1/topics?tab=good&page="+this.props.match.params.id;fetch(t).then((function(e){return e.json()})).then((function(t){e.setState({data:t.data})}))}},{key:"render",value:function(){return c.a.createElement("div",{style:{background:"white"}},this.state.data.map((function(e){return c.a.createElement("ul",{key:e.id},c.a.createElement("li",{style:{paddingRight:"10px"}},c.a.createElement("img",{style:{width:"30px",height:"30px",marginLeft:"8px"},src:e.author.avatar_url}),c.a.createElement("span",{style:{margin:"5px",width:"70px",display:"inline-block",textAlign:"center"}},e.reply_count,"/",e.visit_count),c.a.createElement("button",{style:{width:"40px",height:"23px",background:"#80bd01"}},"\u7cbe\u534e"),c.a.createElement(d.b,{to:"/topic/".concat(e.id)},c.a.createElement("h3",{style:{maxWidth:"70%",whiteSpace:"nowrap",display:"inline-block",verticalAlign:"middle",overflow:"hidden",lineHeight:"30px",textOverflow:"ellipsis"}},e.title)),c.a.createElement("span",{style:{float:"right"}},c.a.createElement("img",{style:{width:"15px",height:"15px"},src:"https://avatars3.githubusercontent.com/u/56661717?v=4&s=120"}),"1\u5c0f\u65f6\u524d")))})))}}]),t}(n.Component),E=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(s.a)(this,Object(p.a)(t).call(this))).state={data:[]},e}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="https://cnodejs.org/api/v1/topics?tab=share&page="+this.props.match.params.id;fetch(t).then((function(e){return e.json()})).then((function(t){e.setState({data:t.data})}))}},{key:"render",value:function(){return c.a.createElement("div",{style:{background:"white"}},this.state.data.map((function(e){return c.a.createElement("ul",{key:e.id},c.a.createElement("li",{style:{paddingRight:"10px"}},c.a.createElement("img",{style:{width:"30px",height:"30px",marginLeft:"8px"},src:e.author.avatar_url}),c.a.createElement("span",{style:{margin:"5px",width:"70px",display:"inline-block",textAlign:"center"}},e.reply_count,"/",e.visit_count),1==e.top?c.a.createElement("button",{style:{width:"40px",height:"23px",background:"#80bd01"}},"\u7f6e\u9876"):"",c.a.createElement(d.b,{to:"/topic/".concat(e.id)},c.a.createElement("h3",{style:{maxWidth:"70%",whiteSpace:"nowrap",display:"inline-block",verticalAlign:"middle",overflow:"hidden",lineHeight:"30px",textOverflow:"ellipsis"}},e.title)),c.a.createElement("span",{style:{float:"right"}},c.a.createElement("img",{style:{width:"15px",height:"15px"},src:"https://avatars3.githubusercontent.com/u/56661717?v=4&s=120"}),"1\u5c0f\u65f6\u524d")))})))}}]),t}(n.Component),x=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(s.a)(this,Object(p.a)(t).call(this))).state={data:[]},e}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="https://cnodejs.org/api/v1/topics?tab=ask&page="+this.props.match.params.id;fetch(t).then((function(e){return e.json()})).then((function(t){e.setState({data:t.data})}))}},{key:"render",value:function(){return c.a.createElement("div",{style:{background:"white"}},this.state.data.map((function(e){return c.a.createElement("ul",{key:e.id},c.a.createElement("li",{style:{paddingRight:"10px"}},c.a.createElement("img",{style:{width:"30px",height:"30px",marginLeft:"8px"},src:e.author.avatar_url}),c.a.createElement("span",{style:{margin:"5px",width:"70px",display:"inline-block",textAlign:"center"}},e.reply_count,"/",e.visit_count),c.a.createElement(d.b,{to:"/topic/".concat(e.id)},c.a.createElement("h3",{style:{maxWidth:"70%",whiteSpace:"nowrap",display:"inline-block",verticalAlign:"middle",overflow:"hidden",lineHeight:"30px",textOverflow:"ellipsis"}},e.title)),c.a.createElement("span",{style:{float:"right"}},c.a.createElement("img",{style:{width:"15px",height:"15px"},src:"https://avatars3.githubusercontent.com/u/56661717?v=4&s=120"}),"1\u5c0f\u65f6\u524d")))})))}}]),t}(n.Component),y=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(s.a)(this,Object(p.a)(t).call(this))).state={data:[]},e}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="https://cnodejs.org/api/v1/topics?tab=job&page="+this.props.match.params.id;fetch(t).then((function(e){return e.json()})).then((function(t){e.setState({data:t.data})}))}},{key:"render",value:function(){return c.a.createElement("div",{style:{background:"white"}},this.state.data.map((function(e){return c.a.createElement("ul",{key:e.id},c.a.createElement("li",{style:{paddingRight:"10px"}},c.a.createElement("img",{style:{width:"30px",height:"30px",marginLeft:"8px"},src:e.author.avatar_url}),c.a.createElement("span",{style:{margin:"5px",width:"70px",display:"inline-block",textAlign:"center"}},e.reply_count,"/",e.visit_count),c.a.createElement(d.b,{to:"/topic/".concat(e.id)},c.a.createElement("h3",{style:{maxWidth:"70%",whiteSpace:"nowrap",display:"inline-block",verticalAlign:"middle",overflow:"hidden",lineHeight:"30px",textOverflow:"ellipsis"}},e.title)),c.a.createElement("span",{style:{float:"right"}},c.a.createElement("img",{style:{width:"15px",height:"15px"},src:"https://avatars3.githubusercontent.com/u/56661717?v=4&s=120"}),"1\u5c0f\u65f6\u524d")))})))}}]),t}(n.Component),v=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(s.a)(this,Object(p.a)(t).call(this))).state={data:[],arr:[1,2,3,4,5,6,7,8,9,10]},e}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.match.url,t=this.props.location.pathname;return t=t.indexOf("all")>=0?"/all/":t.indexOf("good")>=0?"/good/":t.indexOf("share")>=0?"/share/":t.indexOf("ask")>=0?"/ask/":t.indexOf("job")>=0?"/job/":"/",c.a.createElement("div",null,c.a.createElement("div",{style:{width:"900px",height:"40px",padding:"10px",background:"#f6f6f6"}},c.a.createElement(d.c,{style:{padding:"2px 7px",color:"#80bd01",marginRight:"40px"},activeStyle:{background:"#80bd01",color:"white",borderRadius:"5px"},to:"".concat(e,"/all")},"\u5168\u90e8"),c.a.createElement(d.c,{style:{padding:"2px 7px",color:"#80bd01",marginRight:"40px"},activeStyle:{background:"#80bd01",color:"white",borderRadius:"5px"},to:"".concat(e,"/good")},"\u7cbe\u534e"),c.a.createElement(d.c,{style:{padding:"2px 7px",color:"#80bd01",marginRight:"40px"},activeStyle:{background:"#80bd01",color:"white",borderRadius:"5px"},to:"".concat(e,"/share")},"\u5206\u4eab"),c.a.createElement(d.c,{style:{padding:"2px 7px",color:"#80bd01",marginRight:"40px"},activeStyle:{background:"#80bd01",color:"white",borderRadius:"5px"},to:"".concat(e,"/ask")},"\u95ee\u7b54"),c.a.createElement(d.c,{style:{padding:"2px 7px",color:"#80bd01",marginRight:"40px"},activeStyle:{background:"#80bd01",color:"white",borderRadius:"5px"},to:"".concat(e,"/job")},"\u62db\u8058")),c.a.createElement("div",{style:{height:"2080px"}},c.a.createElement(u.d,null,c.a.createElement(u.b,{path:"".concat(e,"/all/:id"),component:b}),c.a.createElement(u.b,{path:"".concat(e,"/good/:id"),component:g}),c.a.createElement(u.b,{path:"".concat(e,"/share/:id"),component:E}),c.a.createElement(u.b,{path:"".concat(e,"/ask/:id"),component:x}),c.a.createElement(u.b,{path:"".concat(e,"/job/:id"),component:y}),c.a.createElement(u.a,{exact:!0,path:"".concat(e,"/all"),to:{pathname:"".concat(e,"/all/1")}}),c.a.createElement(u.a,{path:"".concat(e,"/good"),to:{pathname:"".concat(e,"/good/1")}}),c.a.createElement(u.a,{path:"".concat(e,"/share"),to:{pathname:"".concat(e,"/share/1")}}),c.a.createElement(u.a,{path:"".concat(e,"/ask"),to:{pathname:"".concat(e,"/ask/1")}}),c.a.createElement(u.a,{path:"".concat(e,"/job"),to:{pathname:"".concat(e,"/job/1")}}))),c.a.createElement("ul",{style:{width:"900px",height:"40px",marginTop:"-8px",background:"white"}},this.state.arr.map((function(a,n){return c.a.createElement("div",{style:{marginLeft:"20px"},key:n},c.a.createElement("li",{style:{textAlign:"center",lineHeight:"2em",width:"30px",height:"30px",border:"1px solid #888",float:"left"}},c.a.createElement(d.c,{activeStyle:{color:"#80bd01",background:"white",border:"none"},to:{pathname:"".concat(e)+t+a}},a)))}))))}}]),t}(n.Component),f=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,"\u65b0\u624b\u5165\u95e8")}}]),t}(n.Component),j=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,"Api")}}]),t}(n.Component),O=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,"\u5173\u4e8e")}}]),t}(n.Component),k=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{style:{background:"white",height:"200px"}},c.a.createElement("p",{style:{width:"900px",height:"40px",background:"#f6f6f6",lineHeight:"3em",paddingLeft:"5px"}},c.a.createElement(d.b,{to:"/home",style:{color:"#80bd01"}},"\u4e3b\u9875"),c.a.createElement("span",null,"/"),c.a.createElement(d.b,{to:"/login",style:{color:"#888"}},"\u767b\u5f55")),c.a.createElement("div",{style:{marginLeft:"200px"}},"\u7528\u6237\u540d ",c.a.createElement("input",{type:"text"}),c.a.createElement("p",null),"\u5bc6\xa0\xa0\xa0 \u7801 ",c.a.createElement("input",{type:"password"}),c.a.createElement("br",null),c.a.createElement("div",{style:{marginTop:"40px",marginLeft:"50px"}},c.a.createElement(d.b,{to:"/home/all/1",style:{background:"#08c",color:"white",borderRadius:"5px",padding:"5px 15px"}},"\u767b\u5f55"))))}}]),t}(n.Component),w=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(s.a)(this,Object(p.a)(t).call(this))).state={data:[]},e}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://cnodejs.org/api/v1/topics").then((function(e){return e.json()})).then((function(t){e.setState({data:t.data}),console.log(e.state.data)}))}},{key:"render",value:function(){var e=this.props.location.pathname.slice(7);return c.a.createElement("div",null,this.state.data.map((function(t){if(e==t.id)return console.log(t),c.a.createElement("div",{key:t.id,dangerouslySetInnerHTML:{__html:t.content}})||null})))}}]),t}(n.Component),S=(a(19),function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement(d.a,{basename:"/demo/build"},c.a.createElement("div",null,c.a.createElement(m,null)),c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"left"},c.a.createElement(u.b,{path:"/home",component:v}),c.a.createElement(u.b,{path:"/start",component:f}),c.a.createElement(u.b,{path:"/api",component:j}),c.a.createElement(u.b,{path:"/about",component:O}),c.a.createElement(u.b,{path:"/login",component:k}),c.a.createElement(u.b,{path:"/topic",component:w})),c.a.createElement("div",{className:"right"},c.a.createElement("div",{className:"pane1",style:{background:"white"}},c.a.createElement("div",{className:"inner"},c.a.createElement("p",null,"CNode\uff1aNode.js\u4e13\u4e1a\u4e2d\u6587\u793e\u533a"),c.a.createElement("p",null,"\u60a8\u53ef\u4ee5 \u767b\u5f55 \u6216 \u6ce8\u518c , \u4e5f\u53ef\u4ee5"),c.a.createElement("a",null,c.a.createElement("span",{className:"into"},"\u901a\u8fc7 GitHub \u767b\u5f55")))),c.a.createElement("div",{className:"pane2",style:{background:"white"}},c.a.createElement("div",{className:"inner"},c.a.createElement("h3",null,"\u65e0\u4eba\u56de\u590d\u7684\u8bdd\u9898"),c.a.createElement("ul",null,c.a.createElement("li",null,"\u5199\u4e86\u4e2a\u5728\u6d4b\u8bd5\u4e2d\uff0c\u63a7\u5236\u51fd\u6570\u65e5\u5fd7\u6253\u5370\u7684npm\u5305"),c.a.createElement("li",null,"libuv\u7684\u5b9a\u65f6\u5668\u539f\u7406\u6e90\u7801\u89e3\u6790"),c.a.createElement("li",null,"nodejs\u4e4bsetTimeout\u6e90\u7801\u89e3\u6790"),c.a.createElement("li",null,"libuv\u4e4basync.c\u6e90\u7801\u89e3\u6790"),c.a.createElement("li",null,"nodejs\u89e3\u6790http\u534f\u8bae\u6e90\u7801\u89e3\u6790")))),c.a.createElement("div",{className:"pane3",style:{background:"white"}},c.a.createElement("div",{className:"inner"},c.a.createElement("h3",null,"\u79ef\u5206\u699c   TOP 100 >>"),c.a.createElement("ul",null,c.a.createElement("li",null,"21745 i5ting"),c.a.createElement("li",null,"15675 alsotang"),c.a.createElement("li",null,"15675 alsotang"),c.a.createElement("li",null,"15675 alsotang"),c.a.createElement("li",null,"15675 alsotang")))))))}}]),t}(n.Component));l.a.render(c.a.createElement(S,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.5faf4755.chunk.js.map