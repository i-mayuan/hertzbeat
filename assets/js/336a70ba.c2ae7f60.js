"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[7326],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>h});var r=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,r,l=function(t,e){if(null==t)return{};var a,r,l={},n=Object.keys(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var i=r.createContext({}),p=function(t){var e=r.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=p(t.components);return r.createElement(i.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,l=t.mdxType,n=t.originalType,i=t.parentName,m=s(t,["components","mdxType","originalType","parentName"]),u=p(a),h=l,k=u["".concat(i,".").concat(h)]||u[h]||c[h]||n;return a?r.createElement(k,o(o({ref:e},m),{},{components:a})):r.createElement(k,o({ref:e},m))}));function h(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var n=a.length,o=new Array(n);o[0]=u;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s.mdxType="string"==typeof t?t:l,o[1]=s;for(var p=2;p<n;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},59547:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var r=a(87462),l=(a(67294),a(3905));const n={title:"\u4f7f\u7528\u5f00\u6e90\u5b9e\u65f6\u76d1\u63a7\u7cfb\u7edf HertzBeat \u5bf9 Mysql \u6570\u636e\u5e93\u76d1\u63a7\u544a\u8b66\u5b9e\u8df5",author:"tom",author_title:"tom",author_url:"https://github.com/tomsun28",author_image_url:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4",tags:["opensource","practice"],keywords:["\u5f00\u6e90\u76d1\u63a7\u7cfb\u7edf","\u5f00\u6e90\u6570\u636e\u5e93\u76d1\u63a7","Mysql\u6570\u636e\u5e93\u76d1\u63a7"]},o=void 0,s={permalink:"/blog/2023/02/11/monitor-mysql",editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/blog/2023-02-11-monitor-mysql.md",source:"@site/blog/2023-02-11-monitor-mysql.md",title:"\u4f7f\u7528\u5f00\u6e90\u5b9e\u65f6\u76d1\u63a7\u7cfb\u7edf HertzBeat \u5bf9 Mysql \u6570\u636e\u5e93\u76d1\u63a7\u544a\u8b66\u5b9e\u8df5",description:"\u4f7f\u7528\u5f00\u6e90\u5b9e\u65f6\u76d1\u63a7\u7cfb\u7edf HertzBeat \u5bf9 Mysql \u6570\u636e\u5e93\u76d1\u63a7\u544a\u8b66\u5b9e\u8df5\uff0c5\u5206\u949f\u641e\u5b9a\uff01",date:"2023-02-11T00:00:00.000Z",formattedDate:"2023\u5e742\u670811\u65e5",tags:[{label:"opensource",permalink:"/blog/tags/opensource"},{label:"practice",permalink:"/blog/tags/practice"}],readingTime:7.185,hasTruncateMarker:!1,authors:[{name:"tom",title:"tom",url:"https://github.com/tomsun28",imageURL:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4"}],frontMatter:{title:"\u4f7f\u7528\u5f00\u6e90\u5b9e\u65f6\u76d1\u63a7\u7cfb\u7edf HertzBeat \u5bf9 Mysql \u6570\u636e\u5e93\u76d1\u63a7\u544a\u8b66\u5b9e\u8df5",author:"tom",author_title:"tom",author_url:"https://github.com/tomsun28",author_image_url:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4",tags:["opensource","practice"],keywords:["\u5f00\u6e90\u76d1\u63a7\u7cfb\u7edf","\u5f00\u6e90\u6570\u636e\u5e93\u76d1\u63a7","Mysql\u6570\u636e\u5e93\u76d1\u63a7"]},nextItem:{title:"\u606d\u559c HertzBeat \u53c8\u8fce\u6765\u4e86\u4e24\u4f4d\u65b0\u664b\u793e\u533a Committer",permalink:"/blog/2023/02/10/new-committer"}},i={authorsImageUrls:[void 0]},p=[{value:"\u4f7f\u7528\u5f00\u6e90\u5b9e\u65f6\u76d1\u63a7\u7cfb\u7edf HertzBeat \u5bf9 Mysql \u6570\u636e\u5e93\u76d1\u63a7\u544a\u8b66\u5b9e\u8df5\uff0c5\u5206\u949f\u641e\u5b9a\uff01",id:"\u4f7f\u7528\u5f00\u6e90\u5b9e\u65f6\u76d1\u63a7\u7cfb\u7edf-hertzbeat-\u5bf9-mysql-\u6570\u636e\u5e93\u76d1\u63a7\u544a\u8b66\u5b9e\u8df55\u5206\u949f\u641e\u5b9a",level:2},{value:"Mysql \u6570\u636e\u5e93\u4ecb\u7ecd",id:"mysql-\u6570\u636e\u5e93\u4ecb\u7ecd",level:3},{value:"HertzBeat \u4ecb\u7ecd",id:"hertzbeat-\u4ecb\u7ecd",level:3},{value:"\u5728 HertzBeat 5\u5206\u949f\u641e\u5b9a\u5bf9 Mysql \u6570\u636e\u5e93\u76d1\u63a7",id:"\u5728-hertzbeat-5\u5206\u949f\u641e\u5b9a\u5bf9-mysql-\u6570\u636e\u5e93\u76d1\u63a7",level:3},{value:"\u64cd\u4f5c\u524d\u63d0\uff0c\u60a8\u5df2\u62e5\u6709 Mysql \u73af\u5883\u548c HertzBeat \u73af\u5883\u3002",id:"\u64cd\u4f5c\u524d\u63d0\u60a8\u5df2\u62e5\u6709-mysql-\u73af\u5883\u548c-hertzbeat-\u73af\u5883",level:4},{value:"\u5728\u5f00\u6e90\u76d1\u63a7\u7cfb\u7edf HertzBeat \u76d1\u63a7\u9875\u9762\u6dfb\u52a0\u5bf9 Mysql \u6570\u636e\u5e93\u76d1\u63a7",id:"\u5728\u5f00\u6e90\u76d1\u63a7\u7cfb\u7edf-hertzbeat-\u76d1\u63a7\u9875\u9762\u6dfb\u52a0\u5bf9-mysql-\u6570\u636e\u5e93\u76d1\u63a7",level:4},{value:"\u4e09. \u5728 HertzBeat \u7cfb\u7edf\u6dfb\u52a0 Mysql \u6570\u636e\u5e93\u6307\u6807\u9608\u503c\u544a\u8b66",id:"\u4e09-\u5728-hertzbeat-\u7cfb\u7edf\u6dfb\u52a0-mysql-\u6570\u636e\u5e93\u6307\u6807\u9608\u503c\u544a\u8b66",level:4},{value:"\u5b8c\u6bd5\uff0c\u73b0\u5728\u5750\u7b49\u544a\u8b66\u6d88\u606f\u8fc7\u6765\u5566\u3002\u53ee\u53ee\u53ee\u53ee",id:"\u5b8c\u6bd5\u73b0\u5728\u5750\u7b49\u544a\u8b66\u6d88\u606f\u8fc7\u6765\u5566\u53ee\u53ee\u53ee\u53ee",level:3},{value:"\u5c0f\u7ed3",id:"\u5c0f\u7ed3",level:2}],m={toc:p};function c(t){let{components:e,...n}=t;return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u4f7f\u7528\u5f00\u6e90\u5b9e\u65f6\u76d1\u63a7\u7cfb\u7edf-hertzbeat-\u5bf9-mysql-\u6570\u636e\u5e93\u76d1\u63a7\u544a\u8b66\u5b9e\u8df55\u5206\u949f\u641e\u5b9a"},"\u4f7f\u7528\u5f00\u6e90\u5b9e\u65f6\u76d1\u63a7\u7cfb\u7edf HertzBeat \u5bf9 Mysql \u6570\u636e\u5e93\u76d1\u63a7\u544a\u8b66\u5b9e\u8df5\uff0c5\u5206\u949f\u641e\u5b9a\uff01"),(0,l.kt)("h3",{id:"mysql-\u6570\u636e\u5e93\u4ecb\u7ecd"},"Mysql \u6570\u636e\u5e93\u4ecb\u7ecd"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"MySQL\u662f\u4e00\u4e2a\u5f00\u6e90\u5173\u7cfb\u578b\u6570\u636e\u5e93\u7ba1\u7406\u7cfb\u7edf\uff0c\u7531\u745e\u5178MySQL AB \u516c\u53f8\u5f00\u53d1\uff0c\u5c5e\u4e8e Oracle \u65d7\u4e0b\u4ea7\u54c1\u3002MySQL \u662f\u6700\u6d41\u884c\u7684\u5f00\u6e90\u5173\u7cfb\u578b\u6570\u636e\u5e93\u7ba1\u7406\u7cfb\u7edf\u4e4b\u4e00\uff0c\u5728 WEB \u5e94\u7528\u65b9\u9762\uff0cMySQL\u662f\u6700\u597d\u7684 RDBMS (Relational Database Management System\uff0c\u5173\u7cfb\u6570\u636e\u5e93\u7ba1\u7406\u7cfb\u7edf) \u5e94\u7528\u8f6f\u4ef6\u4e4b\u4e00\u3002")),(0,l.kt)("h3",{id:"hertzbeat-\u4ecb\u7ecd"},"HertzBeat \u4ecb\u7ecd"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"HertzBeat \u662f\u4e00\u6b3e\u5f00\u6e90\uff0c\u6613\u7528\u53cb\u597d\u7684\u5b9e\u65f6\u76d1\u63a7\u7cfb\u7edf\uff0c\u65e0\u9700Agent\uff0c\u62e5\u6709\u5f3a\u5927\u81ea\u5b9a\u4e49\u76d1\u63a7\u80fd\u529b\u3002    ")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u96c6",(0,l.kt)("strong",{parentName:"li"},"\u76d1\u63a7-\u544a\u8b66-\u901a\u77e5\u4e3a\u4e00\u4f53"),"\uff0c\u652f\u6301\u5bf9\u5e94\u7528\u670d\u52a1\uff0c\u6570\u636e\u5e93\uff0c\u64cd\u4f5c\u7cfb\u7edf\uff0c\u4e2d\u95f4\u4ef6\uff0c\u4e91\u539f\u751f\u7b49\u76d1\u63a7\uff0c\u9608\u503c\u544a\u8b66\uff0c\u544a\u8b66\u901a\u77e5(\u90ae\u4ef6\u5fae\u4fe1\u9489\u9489\u98de\u4e66\u77ed\u4fe1 Slack Discord Telegram)\u3002    "),(0,l.kt)("li",{parentName:"ul"},"\u5176\u5c06Http,Jmx,Ssh,Snmp,Jdbc\u7b49\u534f\u8bae\u89c4\u8303\u53ef\u914d\u7f6e\u5316\uff0c\u53ea\u9700\u914d\u7f6eYML\u5c31\u80fd\u4f7f\u7528\u8fd9\u4e9b\u534f\u8bae\u53bb\u81ea\u5b9a\u4e49\u91c7\u96c6\u4efb\u4f55\u60a8\u60f3\u8981\u91c7\u96c6\u7684\u6307\u6807\u3002\u60a8\u76f8\u4fe1\u53ea\u9700\u914d\u7f6eYML\u5c31\u80fd\u7acb\u523b\u9002\u914d\u4e00\u4e2aK8s\u6216Docker\u7b49\u65b0\u7684\u76d1\u63a7\u7c7b\u578b\u5417\uff1f   "),(0,l.kt)("li",{parentName:"ul"},"HertzBeat \u7684\u5f3a\u5927\u81ea\u5b9a\u4e49\uff0c\u591a\u7c7b\u578b\u652f\u6301\uff0c\u6613\u6269\u5c55\uff0c\u4f4e\u8026\u5408\uff0c\u5e0c\u671b\u80fd\u5e2e\u52a9\u5f00\u53d1\u8005\u548c\u4e2d\u5c0f\u56e2\u961f\u5feb\u901f\u642d\u5efa\u81ea\u6709\u76d1\u63a7\u7cfb\u7edf\u3002  ")),(0,l.kt)("h3",{id:"\u5728-hertzbeat-5\u5206\u949f\u641e\u5b9a\u5bf9-mysql-\u6570\u636e\u5e93\u76d1\u63a7"},"\u5728 HertzBeat 5\u5206\u949f\u641e\u5b9a\u5bf9 Mysql \u6570\u636e\u5e93\u76d1\u63a7"),(0,l.kt)("h4",{id:"\u64cd\u4f5c\u524d\u63d0\u60a8\u5df2\u62e5\u6709-mysql-\u73af\u5883\u548c-hertzbeat-\u73af\u5883"},"\u64cd\u4f5c\u524d\u63d0\uff0c\u60a8\u5df2\u62e5\u6709 Mysql \u73af\u5883\u548c HertzBeat \u73af\u5883\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Mysql ",(0,l.kt)("a",{parentName:"li",href:"https://www.runoob.com/mysql/mysql-install.html"},"\u5b89\u88c5\u90e8\u7f72\u6587\u6863"),"     "),(0,l.kt)("li",{parentName:"ul"},"HertzBeat ",(0,l.kt)("a",{parentName:"li",href:"https://hertzbeat.com/docs/start/docker-deploy"},"\u5b89\u88c5\u90e8\u7f72\u6587\u6863"))),(0,l.kt)("h4",{id:"\u5728\u5f00\u6e90\u76d1\u63a7\u7cfb\u7edf-hertzbeat-\u76d1\u63a7\u9875\u9762\u6dfb\u52a0\u5bf9-mysql-\u6570\u636e\u5e93\u76d1\u63a7"},"\u5728\u5f00\u6e90\u76d1\u63a7\u7cfb\u7edf HertzBeat \u76d1\u63a7\u9875\u9762\u6dfb\u52a0\u5bf9 Mysql \u6570\u636e\u5e93\u76d1\u63a7"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u70b9\u51fb\u65b0\u589e Mysql \u76d1\u63a7  ")),(0,l.kt)("p",null,"\u8def\u5f84\uff1a\u83dc\u5355 -> \u6570\u636e\u5e93\u76d1\u63a7 -> Mysql\u6570\u636e\u5e93 -> \u65b0\u589eMysql\u6570\u636e\u5e93\u76d1\u63a7  "),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"hertzbeat",src:a(99658).Z,width:"4064",height:"2166"})),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u914d\u7f6e\u65b0\u589e\u76d1\u63a7 Mysql \u6570\u636e\u5e93\u6240\u9700\u53c2\u6570   ")),(0,l.kt)("p",null,"\u5728\u76d1\u63a7\u9875\u9762\u586b\u5199 Mysql ",(0,l.kt)("strong",{parentName:"p"},"\u670d\u52a1IP"),"\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u76d1\u63a7\u7aef\u53e3"),"(\u9ed8\u8ba43306)\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u8d26\u6237\u5bc6\u7801\u7b49"),"\uff0c\u6700\u540e\u70b9\u51fb\u786e\u5b9a\u6dfb\u52a0\u5373\u53ef\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u5176\u4ed6\u53c2\u6570\u5982",(0,l.kt)("strong",{parentName:"p"},"\u91c7\u96c6\u95f4\u9694"),"\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u8d85\u65f6\u65f6\u95f4"),"\u7b49\u53ef\u4ee5\u53c2\u8003",(0,l.kt)("a",{parentName:"p",href:"https://hertzbeat.com/docs/help/mysql/"},"\u5e2e\u52a9\u6587\u6863")," ",(0,l.kt)("a",{parentName:"p",href:"https://hertzbeat.com/docs/help/mysql/"},"https://hertzbeat.com/docs/help/mysql/"),"   "),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"hertzbeat",src:a(82634).Z,width:"4064",height:"2166"}),"    "),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\u5b8c\u6210\u2705,\u73b0\u5728\u6211\u4eec\u5df2\u7ecf\u6dfb\u52a0\u597d\u5bf9 Mysql\u6570\u636e\u5e93 \u7684\u76d1\u63a7\u4e86\uff0c\u67e5\u770b\u76d1\u63a7\u5217\u8868\u5373\u53ef\u770b\u5230\u6211\u4eec\u7684\u6dfb\u52a0\u9879\u3002  ")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"hertzbeat",src:a(99658).Z,width:"4064",height:"2166"}),"  "),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"\u70b9\u51fb\u76d1\u63a7\u5217\u8868\u9879\u7684",(0,l.kt)("strong",{parentName:"li"},"\u64cd\u4f5c"),"->",(0,l.kt)("strong",{parentName:"li"},"\u76d1\u63a7\u8be6\u60c5\u56fe\u6807")," \u5373\u53ef\u6d4f\u89c8 Mysql\u6570\u636e\u5e93 \u7684\u5b9e\u65f6\u76d1\u63a7\u6307\u6807\u6570\u636e\u3002  ")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"hertzbeat",src:a(25621).Z,width:"4064",height:"2166"}),"  "),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,l.kt)("strong",{parentName:"li"},"\u76d1\u63a7\u5386\u53f2\u8be6\u60c5TAB")," \u5373\u53ef\u6d4f\u89c8 Mysql\u6570\u636e\u5e93 \u7684\u5386\u53f2\u76d1\u63a7\u6307\u6807\u6570\u636e\u56fe\u8868\ud83d\udcc8\u3002  ")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"hertzbeat",src:a(19165).Z,width:"4064",height:"2166"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"DONE\uff01\u5b8c\u6210\u5566\uff01\u901a\u8fc7\u4e0a\u9762\u51e0\u6b65\uff0c\u603b\u7ed3\u8d77\u6765\u5176\u5b9e\u4e5f\u5c31\u53ea\u7528\u4e00\u6b65\u5373\u53ef")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u5728 HertzBeat \u76d1\u63a7\u9875\u9762\u914d\u7f6eIP\u7aef\u53e3\u8d26\u6237\u5bc6\u7801\u6dfb\u52a0 Mysql \u76d1\u63a7\u5373\u53ef"),"         ")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u901a\u8fc7\u4e0a\u9762\u7684\u4e24\u6b65\u6211\u4eec\u5c31\u5b8c\u6210\u4e86\u5bf9 Mysql\u6570\u636e\u5e93 \u7684\u76d1\u63a7\uff0c\u6211\u4eec\u53ef\u4ee5\u5728 HertzBeat \u968f\u65f6\u67e5\u770b\u76d1\u63a7\u8be6\u60c5\u6307\u6807\u4fe1\u606f\u6765\u89c2\u6d4b\u5176\u670d\u52a1\u72b6\u6001\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u5f53\u7136\u53ea\u662f\u770b\u80af\u5b9a\u662f\u4e0d\u5b8c\u7f8e\u7684\uff0c\u76d1\u63a7\u5f80\u5f80\u4f34\u968f\u7740\u544a\u8b66\u9608\u503c\uff0c\u5f53 Mysql \u6570\u636e\u5e93\u7684\u6307\u6807\u8d85\u51fa\u6211\u4eec\u7684\u671f\u671b\u503c\u6216\u5f02\u5e38\u65f6\uff0c\u80fd\u53ca\u65f6\u7684\u901a\u77e5\u5230\u6211\u4eec\u5bf9\u5e94\u7684\u8d1f\u8d23\u4eba\uff0c\u8d1f\u8d23\u4eba\u6536\u5230\u901a\u77e5\u5904\u7406\u95ee\u9898\uff0c\u8fd9\u6837\u624d\u662f\u4e00\u4e2a\u5b8c\u6574\u7684\u76d1\u63a7\u544a\u8b66\u6d41\u7a0b\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u63a5\u4e0b\u6765\u6211\u4eec\u5c31\u6765\u4e00\u6b65\u4e00\u6b65\u6f14\u793a\u5982\u4f55\u914d\u7f6e HertzBeat \u7cfb\u7edf\u91cc\u7684\u9608\u503c\u544a\u8b66\u901a\u77e5\uff0c\u8ba9\u53ca\u65f6\u53d1\u73b0 Mysql \u6570\u636e\u5e93\u7684\u6307\u6807\u5f02\u5e38\u65f6\uff0c\u53ca\u65f6\u901a\u77e5\u7ed9\u6211\u4eec"),"     "),(0,l.kt)("h4",{id:"\u4e09-\u5728-hertzbeat-\u7cfb\u7edf\u6dfb\u52a0-mysql-\u6570\u636e\u5e93\u6307\u6807\u9608\u503c\u544a\u8b66"},"\u4e09. \u5728 HertzBeat \u7cfb\u7edf\u6dfb\u52a0 Mysql \u6570\u636e\u5e93\u6307\u6807\u9608\u503c\u544a\u8b66"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5bf9\u67d0\u4e2a\u91cd\u8981\u6307\u6807\u914d\u7f6e\u544a\u8b66\u9608\u503c     ")),(0,l.kt)("p",null,"\u8def\u5f84\uff1a\u83dc\u5355 -> \u9608\u503c\u89c4\u5219 -> \u65b0\u589e\u9608\u503c  "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9009\u62e9\u914d\u7f6e\u7684\u6307\u6807\u5bf9\u8c61\uff0cMysql \u6570\u636e\u5e93\u76d1\u63a7\u4e3b\u8981\u662f\u6570\u636e\u5e93\u6027\u80fd\u7b49\u76f8\u5173\u6307\u6807\uff0c\u6211\u4eec\u4e3e\u4f8b\u5bf9 ",(0,l.kt)("inlineCode",{parentName:"li"},"\u67e5\u8be2\u7f13\u5b58\u547d\u4e2d\u7387")," ",(0,l.kt)("inlineCode",{parentName:"li"},"cache")," -> ",(0,l.kt)("inlineCode",{parentName:"li"},"query_cache_hit_rate")," \u8fd9\u4e2a\u6307\u6807\u8fdb\u884c\u9608\u503c\u8bbe\u7f6e\uff0c \u5f53Mysql\u7684\u67e5\u8be2\u7f13\u5b58\u547d\u4e2d\u7387\u5f88\u4f4e\u5c0f\u4e8e30%\u65f6\u53d1\u51fa\u544a\u8b66\u3002       "),(0,l.kt)("li",{parentName:"ul"},"\u8fd9\u91cc\u6211\u4eec\u5c31\u914d\u7f6e\u5f53\u6b64\u6307\u6807",(0,l.kt)("inlineCode",{parentName:"li"},"cache")," \u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"query_cache_hit_rate<30")," \u65f6\u53d1\u51fa\u544a\u8b66\uff0c\u544a\u8b66\u7ea7\u522b\u4e3a",(0,l.kt)("strong",{parentName:"li"},"\u4e25\u91cd\u544a\u8b66"),"\uff0c\u4e09\u6b21\u5373\u89e6\u53d1\uff0c\u5177\u4f53\u5982\u4e0b\u56fe\u3002  ")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"hertzbeat",src:a(76890).Z,width:"4064",height:"2166"}),"     "),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"hertzbeat",src:a(13148).Z,width:"4064",height:"2166"})),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u65b0\u589e\u6d88\u606f\u901a\u77e5\u63a5\u6536\u4eba")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u914d\u7f6e\u63a5\u6536\u4eba\uff0c\u8ba9\u544a\u8b66\u6d88\u606f\u77e5\u9053\u8981\u53d1\u7ed9\u8c01\uff0c\u7528\u4ec0\u4e48\u65b9\u5f0f\u53d1\u3002  ")),(0,l.kt)("p",null,"\u8def\u5f84\uff1a\u83dc\u5355 -> \u544a\u8b66\u901a\u77e5 -> \u544a\u8b66\u63a5\u6536\u4eba -> \u65b0\u589e\u63a5\u6536\u4eba  "),(0,l.kt)("p",null,"\u6d88\u606f\u901a\u77e5\u65b9\u5f0f\u652f\u6301 ",(0,l.kt)("strong",{parentName:"p"},"\u90ae\u4ef6\uff0c\u9489\u9489\uff0c\u4f01\u4e1a\u5fae\u4fe1\uff0c\u98de\u4e66\uff0cWebHook\uff0c\u77ed\u4fe1"),"\u7b49\uff0c\u6211\u4eec\u8fd9\u91cc\u4ee5\u5e38\u7528\u7684\u9489\u9489\u4e3a\u4f8b\u3002  "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u53c2\u7167\u6b64",(0,l.kt)("a",{parentName:"li",href:"https://hertzbeat.com/docs/help/alert_dingtalk"},"\u5e2e\u52a9\u6587\u6863")," ",(0,l.kt)("a",{parentName:"li",href:"https://hertzbeat.com/docs/help/alert_dingtalk"},"https://hertzbeat.com/docs/help/alert_dingtalk")," \u5728\u9489\u9489\u7aef\u914d\u7f6e\u673a\u5668\u4eba\uff0c\u8bbe\u7f6e\u5b89\u5168\u81ea\u5b9a\u4e49\u5173\u952e\u8bcd",(0,l.kt)("inlineCode",{parentName:"li"},"HertzBeat"),"\uff0c\u83b7\u53d6\u5bf9\u5e94",(0,l.kt)("inlineCode",{parentName:"li"},"access_token"),"\u503c\u3002 "),(0,l.kt)("li",{parentName:"ul"},"\u5728 HertzBeat \u914d\u7f6e\u63a5\u6536\u4eba\u53c2\u6570\u5982\u4e0b\u3002  ")),(0,l.kt)("p",null,"\u3010\u544a\u8b66\u901a\u77e5\u3011->\u3010\u65b0\u589e\u63a5\u6536\u4eba\u3011 ->\u3010\u9009\u62e9\u9489\u9489\u673a\u5668\u4eba\u901a\u77e5\u65b9\u5f0f\u3011->\u3010\u8bbe\u7f6e\u9489\u9489\u673a\u5668\u4ebaACCESS_TOKEN\u3011-> \u3010\u786e\u5b9a\u3011"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"hertzbeat",src:a(41711).Z,width:"3436",height:"890"}),"    "),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\u914d\u7f6e\u5173\u8054\u7684\u544a\u8b66\u901a\u77e5\u7b56\u7565\u26a0\ufe0f \u3010\u65b0\u589e\u901a\u77e5\u7b56\u7565\u3011-> \u3010\u5c06\u521a\u8bbe\u7f6e\u7684\u63a5\u6536\u4eba\u5173\u8054\u3011-> \u3010\u786e\u5b9a\u3011 ")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u914d\u7f6e\u544a\u8b66\u901a\u77e5\u7b56\u7565\uff0c\u8ba9\u544a\u8b66\u6d88\u606f\u4e0e\u63a5\u6536\u4eba\u7ed1\u5b9a\uff0c\u8fd9\u6837\u5c31\u80fd\u51b3\u5b9a\u54ea\u4e9b\u544a\u8b66\u53d1\u7ed9\u54ea\u4e2a\u4eba\u3002")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"hertzbeat",src:a(60315).Z,width:"3436",height:"1088"}),"    "),(0,l.kt)("h3",{id:"\u5b8c\u6bd5\u73b0\u5728\u5750\u7b49\u544a\u8b66\u6d88\u606f\u8fc7\u6765\u5566\u53ee\u53ee\u53ee\u53ee"},"\u5b8c\u6bd5\uff0c\u73b0\u5728\u5750\u7b49\u544a\u8b66\u6d88\u606f\u8fc7\u6765\u5566\u3002\u53ee\u53ee\u53ee\u53ee"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[HertzBeat\u544a\u8b66\u901a\u77e5]\n\u544a\u8b66\u76ee\u6807\u5bf9\u8c61 : mysql.cahce.query_cache_hit_rate\n\u6240\u5c5e\u76d1\u63a7ID : 205540620394932\n\u6240\u5c5e\u76d1\u63a7\u540d\u79f0 : Mysql_localhost\n\u544a\u8b66\u7ea7\u522b : \u4e25\u91cd\u544a\u8b66\n\u544a\u8b66\u89e6\u53d1\u65f6\u95f4 : 2023-02-11 21:13:44\n\u5185\u5bb9\u8be6\u60c5 : mysql db query_cache_hit_rate is too low, now is 20.\n")),(0,l.kt)("h2",{id:"\u5c0f\u7ed3"},"\u5c0f\u7ed3"),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u8fd9\u7bc7\u5b9e\u8df5\u6587\u7ae0\u5e26\u6211\u4eec\u4f53\u9a8c\u4e86\u5982\u4f55\u4f7f\u7528\u5f00\u6e90\u5b9e\u65f6\u76d1\u63a7\u7cfb\u7edf HertzBeat \u6765\u76d1\u63a7 Mysql \u6570\u636e\u5e93\u6307\u6807\u6570\u636e\uff0c\u53ef\u4ee5\u53d1\u73b0\u96c6 ",(0,l.kt)("inlineCode",{parentName:"p"},"\u76d1\u63a7-\u544a\u8b66-\u901a\u77e5")," \u7684 HertzBeat \u5728\u64cd\u4f5c\u4e0e\u4f7f\u7528\u65b9\u9762\u66f4\u52a0\u7684\u4fbf\u6377\uff0c\u53ea\u9700\u9875\u9762\u4e0a\u7b80\u5355\u70b9\u4e00\u70b9\u5c31\u80fd\u628a Mysql \u6570\u636e\u5e93\u7eb3\u5165\u76d1\u63a7\u5e76\u544a\u8b66\u901a\u77e5\uff0c\u518d\u4e5f\u4e0d\u9700\u8981\u90e8\u7f72\u591a\u4e2a\u7ec4\u4ef6\u7f16\u5199\u914d\u7f6e\u6587\u4ef6\u90a3\u4e9b\u7e41\u7410\u64cd\u4f5c\u4e86\u3002  ")),(0,l.kt)("p",null,"Mysql Github: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/mysql/mysql-server"},"https://github.com/mysql/mysql-server"),(0,l.kt)("br",{parentName:"p"}),"\n","HertzBeat Github: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/dromara/hertzbeat"},"https://github.com/dromara/hertzbeat")," "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6b22\u8fce\u4e86\u89e3\u4f7f\u7528\u652f\u6301Star\u54e6\uff01")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u53ea\u9700\u8981\u4e00\u6761docker\u547d\u4ee4\u5373\u53ef\u5b89\u88c5\u4f53\u9a8cheartbeat:   ")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"docker run -d -p 1157:1157 --name hertzbeat tancloud/hertzbeat")))}c.isMDXComponent=!0},41711:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/alert-notice-1-3bad6e06e2c870849bc656a2092d59ac.png"},60315:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/alert-notice-2-8025b90624873463fe0a3f75bd7efafa.png"},99658:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/monitor-mysql-1-19e6ec4459f0d9e919f6a6c30be7b57a.png"},82634:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/monitor-mysql-2-13a14e1ef2e6ce1aad18487061354b44.png"},25621:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/monitor-mysql-3-d6896c6d4ffd9c2b6e947b2953e784f1.png"},19165:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/monitor-mysql-4-3283b82611bd5f8e97a5ee6c58b2258c.png"},76890:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/monitor-mysql-5-de9e52572120721588e3ec4207999d97.png"},13148:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/monitor-mysql-6-734d367e3a2cd939c75d3ea9204bd615.png"}}]);