(this["webpackJsonpreact-blog-app"]=this["webpackJsonpreact-blog-app"]||[]).push([[0],{95:function(e,t,r){},96:function(e,t,r){"use strict";r.r(t);var n=r(2),c=r(0),a=r.n(c),i=r(71),o=r.n(i),s=r(4),l=r(27),u=r(10),b=a.a.createContext(),j=function(){var e=a.a.useState(null),t=Object(s.a)(e,2),r=t[0],c=t[1];return Object(n.jsx)(b.Provider,{value:{user:r,setUser:c},children:Object(n.jsx)(l.a,{children:Object(n.jsx)(q,{children:Object(n.jsxs)(u.d,{children:[Object(n.jsx)(u.b,{path:"/signin",children:Object(n.jsx)(U,{})}),Object(n.jsx)(u.b,{path:"/signup",children:Object(n.jsx)(J,{})}),Object(n.jsx)(u.b,{path:"/profile",children:Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(R,{})})}),Object(n.jsx)(u.b,{path:"/",exact:!0,children:Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(I,{})})})]})})})})},d=r(105),h=r(110),p=r(106),x=r(112),m=r(72),f=r(74);var O=r(15),g=r(22),v=r.n(g),w=r(30),S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2e3;return new Promise((function(t,r){setTimeout((function(){t()}),e)}))},k=function(){var e=Object(w.a)(v.a.mark((function e(t,r,n){var c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.find((function(e){return e.email===r}))){e.next=3;break}return e.abrupt("return",Promise.reject("El usuario ingresado no existe"));case 3:return c=t.find((function(e){return e.email===r&&e.password===n})),e.next=6,S(1e3);case 6:if(c){e.next=8;break}return e.abrupt("return",Promise.reject("Contrase\xf1a inexistente"));case 8:return e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),y=function(){var e=Object(w.a)(v.a.mark((function e(t,r,n){var c,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=["email","password"],a=[],Object.entries(n).forEach((function(e){var t=Object(s.a)(e,2),r=t[0],n=t[1],i=c.includes(r);if(!n&&i){var o=" ".concat(r," is required");a.push(o)}})),!(a.length>0)){e.next=9;break}return e.next=6,S(1e3);case 6:return e.abrupt("return",Promise.reject(a));case 9:return e.next=11,S();case 11:r([].concat(Object(O.a)(t),[n]));case 12:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),C=function(){var e=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.serialize,a=void 0===n?JSON.stringify:n,i=r.deserialize,o=void 0===i?JSON.parse:i,l=c.useState((function(){var r=window.localStorage.getItem(e);return r?o(r):"function"===typeof t?t():t})),u=Object(s.a)(l,2),b=u[0],j=u[1],d=c.useRef(e);return c.useEffect((function(){var t=d.current;t!==e&&window.localStorage.removeItem(t),d.current=e,window.localStorage.setItem(e,a(b))}),[e,b,a]),[b,j]}("users",[]),t=Object(s.a)(e,2),r=t[0],n=t[1];return{signin:function(e,t){return k(r,e,t)},signup:function(e){return y(r,n,e)}}},N=function(){var e=Object(u.g)(),t=a.a.useContext(b).user,r=C().users;console.log("users header: ".concat(JSON.stringify(r,null,2)));var c=t&&"".concat(t.firstName," ").concat(t.lastName);return Object(n.jsxs)(d.a,{minH:"5rem",w:"full",bg:"black",direction:"row",justify:"space-between",align:"center",p:"1rem 3rem",children:[Object(n.jsx)(h.a,{cursor:"pointer",color:"white",variant:"ghost",_active:{bg:"#0000",borderColor:"none"},_focus:{outline:"none"},onClick:function(){e.push("/")},children:Object(n.jsx)(m.a,{size:"2x",icon:f.a})}),Object(n.jsx)(u.d,{children:Object(n.jsx)(u.b,{path:"/",exact:!0,children:Object(n.jsx)(d.a,{direction:"row",children:Object(n.jsxs)(h.a,{colorScheme:"teal",variant:"ghost",onClick:function(){e.push("/profile")},children:[Object(n.jsx)(p.a,{color:"white",mr:"1rem",children:c||"Profile"}),Object(n.jsx)(x.a,{size:"xs",name:"Dan Abrahmov",src:"https://bit.ly/dan-abramov"})]})})})})]})},P=r(111),E=r(107),z=function(){var e=Object(w.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.fetch("https://gorest.co.in/public-api/posts");case 2:if((t=e.sent).ok){e.next=7;break}throw new Error("Estamos teniendo problemas en el servidor, intenta luego");case 7:return e.abrupt("return",t.json());case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=a.a.useState({loading:!1,posts:[],error:null}),t=Object(s.a)(e,2),r=t[0],c=t[1],i=r.loading,o=r.posts,l=r.error;return a.a.useEffect((function(){(function(){var e=Object(w.a)(v.a.mark((function e(){var t,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c({loading:!0,posts:[],error:null}),e.prev=1,e.next=4,z();case 4:t=e.sent,r=t.data,c({loading:!1,posts:r,error:null}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),c({loading:!1,posts:[],error:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}})()()}),[]),i?Object(n.jsx)(d.a,{align:"center",justify:"center",h:"97vh",w:"100%",children:Object(n.jsx)(P.a,{size:"xl"})}):(l&&p.a,Object(n.jsxs)(d.a,{direction:"column",p:"3.5rem",children:[Object(n.jsx)(E.a,{as:"h1",mb:"1.5rem",children:"Mis Publicaciones"}),o.map((function(e){return Object(n.jsxs)(d.a,{m:"0.5rem",border:"3px solid #c2c2c2",direction:"column",borderRadius:"8px",p:"1.5rem",children:[Object(n.jsx)(E.a,{as:"h3",size:"lg",mb:"1rem",children:e.title}),Object(n.jsx)(p.a,{children:e.body})]},e.id)}))]}))},R=function(){var e=Object(u.g)(),t=a.a.useContext(b),r=t.user,c=t.setUser,i=r&&"".concat(r.firstName," ").concat(r.lastName);return Object(n.jsxs)(d.a,{direction:"column",children:[Object(n.jsx)("h1",{children:"Profile"}),Object(n.jsx)(p.a,{children:i}),Object(n.jsx)(h.a,{onClick:function(){c(null),e.push("/")},children:"Sign Out"})]})},A=r(109);function J(){var e=a.a.useState(""),t=Object(s.a)(e,2),r=t[0],c=t[1],i=a.a.useState(""),o=Object(s.a)(i,2),l=o[0],b=o[1],j=a.a.useState(""),x=Object(s.a)(j,2),m=x[0],f=x[1],O=a.a.useState(""),g=Object(s.a)(O,2),v=g[0],w=g[1],S=a.a.useState([]),k=Object(s.a)(S,2),y=k[0],N=k[1],P=a.a.useState(!1),z=Object(s.a)(P,2),I=z[0],R=z[1],J=Object(u.g)(),U=C().signup;return Object(n.jsxs)(d.a,{as:"form",w:"400px",h:"520px",p:"2rem",direction:"column",backgroundColor:"white",border:"3px solid #000",borderRadius:"8px",textAlign:"center",onSubmit:function(e){e.preventDefault(),N([]),R(!0),U({firstName:r,lastName:l,email:m,password:v}).then((function(){N([]),R(!1),J.push("/signin")})).catch((function(e){N(e),R(!1),console.log("errors",e)}))},children:[Object(n.jsxs)(p.a,{mb:"2rem",fontSize:"1.3rem",fontWeight:"bold",as:"samp",children:["Welcome to MyBlog App! \ud83d\udcd3"," "]}),Object(n.jsx)(E.a,{mb:"2rem",children:"Sign Up"}),Object(n.jsx)(A.a,{border:"2px solid ",bg:"white",onChange:function(e){c(e.target.value)},mb:"1rem",placeholder:"First Name"}),Object(n.jsx)(A.a,{border:"2px solid ",bg:"white",onChange:function(e){b(e.target.value)},mb:"1rem",placeholder:"Last Name"}),Object(n.jsx)(A.a,{border:"2px solid ",bg:"white",onChange:function(e){f(e.target.value)},mb:"1rem",placeholder:"Email"}),Object(n.jsx)(A.a,{border:"2px solid ",bg:"white",onChange:function(e){w(e.target.value)},mb:"1rem",placeholder:"Password"}),y.map((function(e,t){return Object(n.jsx)(p.a,{color:"red.500",children:e},t)})),Object(n.jsx)(h.a,{color:"white",bg:"black",colorScheme:"white",mt:"20px",type:"submit",border:"3px solid black",variant:"ghost",disabled:I,isLoading:I,children:"Sign up"}),Object(n.jsx)(h.a,{padding:"2px",mt:"1rem",color:"black",colorScheme:"teal",border:"3px solid black",variant:"ghost",onClick:function(){J.push("/signin")},children:"Already have an account? Sign In"})]})}function U(){var e=a.a.useState(""),t=Object(s.a)(e,2),r=t[0],c=t[1],i=a.a.useState(""),o=Object(s.a)(i,2),l=o[0],j=o[1],x=a.a.useState(null),m=Object(s.a)(x,2),f=m[0],O=m[1],g=a.a.useState(!1),v=Object(s.a)(g,2),w=v[0],S=v[1],k=a.a.useContext(b).setUser,y=Object(u.g)(),N=C().signin;return Object(n.jsxs)(d.a,{as:"form",w:"400px",p:"2rem",direction:"column",backgroundColor:"white",border:"2px solid #000",borderRadius:"8px",textAlign:"center",onSubmit:function(e){e.preventDefault(),O(null),S(!0),N(r,l).then((function(e){O(null),S(!1),k(e),y.push("/")})).catch((function(e){O(e),S(!1)}))},children:[Object(n.jsx)(p.a,{children:"Welcome to your blog \ud83d\udcd3 "}),Object(n.jsx)(E.a,{mb:"2rem",children:"Sign in"}),Object(n.jsx)(A.a,{border:"2px solid",bg:"white",mb:"1rem",placeholder:"Email",onChange:function(e){c(e.target.value)},isRequired:!0}),Object(n.jsx)(A.a,{border:"2px solid",bg:"white",mb:"1rem",placeholder:"Password",onChange:function(e){j(e.target.value)},isRequired:!0}),f?Object(n.jsx)(p.a,{color:"red.400",children:f}):null,Object(n.jsx)(h.a,{color:"white",bg:"black",colorScheme:"white",mt:"20px",type:"submit",border:"3px solid black",variant:"ghost",disabled:w,isLoading:w,children:"Sign In"}),Object(n.jsx)(h.a,{mt:"1rem",color:"black",colorScheme:"teal",border:"3px solid black",variant:"ghost",onClick:function(){y.push("/signup")},children:"First time here? Sign Up"})]})}var F=function(){return Object(n.jsx)(d.a,{w:"full",bg:"black",direction:"row",px:"10rem",py:"1.5rem",justify:"center",children:Object(n.jsx)(p.a,{color:"white",children:" Gabriel Cerri 2021 \xa9 "})})},q=function(e){var t=e.children;return Object(n.jsxs)(d.a,{direction:"column",minH:"100vh",children:[Object(n.jsx)(N,{}),Object(n.jsxs)(d.a,{flex:1,justify:"center",align:"center",direction:"column",children:[" ",t]}),Object(n.jsx)(F,{})]})},D=(r(42),r(76),r(108));r(95);o.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(D.a,{children:Object(n.jsx)(j,{})})}),document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.26bee061.chunk.js.map