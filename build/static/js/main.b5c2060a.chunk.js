(this.webpackJsonpecom=this.webpackJsonpecom||[]).push([[0],{40:function(e,t,a){e.exports=a(73)},45:function(e,t,a){},46:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(34),i=a.n(r),l=(a(45),a(35)),o=a(5),s=(a(46),a(36)),m=a.n(s),u=a(37),d=a.n(u),p=a(14),E=Object(n.createContext)(),_=function(e){var t=e.reducer,a=e.initialState,r=e.children;return c.a.createElement(E.Provider,{value:Object(n.useReducer)(t,a)},r)},h=function(){return Object(n.useContext)(E)},g=a(26),b=a.n(g),f=b.a.initializeApp({apiKey:"AIzaSyBPEe8FCE2ajyu8oMUG0SYFcAQamO5D9n4",authDomain:"ecom-sutt.firebaseapp.com",databaseURL:"https://ecom-sutt-default-rtdb.firebaseio.com",projectId:"ecom-sutt",storageBucket:"ecom-sutt.appspot.com",messagingSenderId:"700631776961",appId:"1:700631776961:web:21b830ec2d6480b9b49e40",measurementId:"G-SZ8TL0X3CH"}).firestore(),v=b.a.auth();var N=function(){var e=h(),t=Object(o.a)(e,2),a=t[0],n=a.basket,r=a.user;return t[1],c.a.createElement("div",{className:"header"},c.a.createElement(p.b,{to:"/"},c.a.createElement("img",{className:"header__logo",src:"https://github.com/astroraditya/WebHosting_1/blob/main/New%20Project%20(6).png?raw=true"})),c.a.createElement("div",{className:"header__search"},c.a.createElement("input",{className:"header__searchInput",type:"text"}),c.a.createElement(m.a,{className:"header__searchIcon"})),c.a.createElement("div",{className:"header__nav"},c.a.createElement(p.b,{to:!r&&"/login"},c.a.createElement("div",{onClick:function(){r&&v.signOut()},className:"header__option"},c.a.createElement("span",{className:"header__optionLineOne"},"Hey ",r?r.email:"Student"),c.a.createElement("span",{className:"header__optionLineTwo"},r?"Sign Out":"Sign In"))),c.a.createElement(p.b,{to:"/orders"},c.a.createElement("div",{className:"header__option"},c.a.createElement("span",{className:"header__optionLineOne"},"Returns"),c.a.createElement("span",{className:"header__optionLineTwo"},"& Orders"))),c.a.createElement("div",{className:"header__option"},c.a.createElement("span",{className:"header__optionLineOne"},"Your"),c.a.createElement("span",{className:"header__optionLineTwo"},"Privilage")),c.a.createElement(p.b,{to:"/checkout"},c.a.createElement("div",{className:"header__optionBasket"},c.a.createElement(d.a,null),c.a.createElement("span",{className:"header__optionLineTwo header__basketCount"},null===n||void 0===n?void 0:n.length)))))};a(62),a(63);var k=function(e){var t=e.id,a=e.title,n=e.image,r=e.price,i=e.rating,l=h(),s=Object(o.a)(l,2),m=(s[0].basket,s[1]);return c.a.createElement("div",{className:"product"},c.a.createElement("div",{className:"product__info"},c.a.createElement("p",null,a),c.a.createElement("p",{className:"product__price"},c.a.createElement("small",null,"Rs. "),c.a.createElement("strong",null,r)),c.a.createElement("div",{className:"product__rating"},Array(i).fill().map((function(e,t){return c.a.createElement("p",null,"\ud83c\udf1f")})))),c.a.createElement("img",{src:n,alt:""}),c.a.createElement("button",{onClick:function(){m({type:"ADD_TO_BASKET",item:{id:t,title:a,image:n,price:r,rating:i}})}},"Add to Basket"))};var O=function(){return c.a.createElement("div",{className:"home"},c.a.createElement("div",{className:"home__container"},c.a.createElement("img",{className:"home__image",src:"https://media-exp1.licdn.com/dms/image/C561BAQHeZ8QMd0XWkg/company-background_10000/0/1592287484700?e=2147483647&v=beta&t=21NazMcYrzOdZ6Cd9v2bQc4GZglvKnJo7yVVEkXoICk",alt:""}),c.a.createElement("div",{className:"home__row"},c.a.createElement(k,{id:"12321341",title:"BITSians Key ring : The ring to hold all your earned success",price:99,rating:4,image:"https://i3.cpcache.com/merchandise/874_300x300_Front_Color-Silver.jpg?Size=NA&AttributeValue=NA&c=True&region={%22name%22:%22FrontCenter%22,%22width%22:1.405,%22height%22:1.405,%22alignment%22:%22MiddleCenter%22,%22orientation%22:0,%22dpi%22:200,%22crop_x%22:7,%22crop_y%22:3,%22crop_h%22:281,%22crop_w%22:277,%22scale%22:0.47359455,%22template%22:{%22id%22:79632716,%22params%22:{}}}&cid=PUartJBjiF%2Fyg4FdKqiggQ%3D%3D+%7C%7C+%2BZxFEWHLtbNhHE7fY6wftA%3D%3D%20&Filters=[{%22name%22:%22background%22,%22value%22:%22ddddde%22,%22sequence%22:2}]"}),c.a.createElement(k,{id:"49538094",title:"Campus Hoodie : Available in all types of size (S, M, L, XL, XXL, Customizable)",price:800,rating:5,image:"https://m.media-amazon.com/images/I/B1i3u9-Q-KS._CLa%7C2140%2C2000%7CB1rJ68NtSES.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX342_.png"})),c.a.createElement("div",{className:"home__row"},c.a.createElement(k,{id:"4903850",title:"Pilani Campus Graduation Ring : Customized with your ID number",price:5e3,rating:5,image:"https://scontent-hkt1-2.xx.fbcdn.net/v/t1.18169-9/15780754_1827438620802300_4426767203180883320_n.png?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Oh6WhrDfJIoAX-R_s0_&_nc_ht=scontent-hkt1-2.xx&oh=00_AT_X_0johUtQL5fzMwGZHNq5RcaJDAu7h9PAIxaym0GkJg&oe=62C14A05"}),c.a.createElement(k,{id:"23445930",title:"Cotton Hoodie for Unisex",price:988.99,rating:4,image:"https://bitspilani.campusmall.in/pub/media/catalog/product/cache/70363dcd7ca9e78e610c784651f84966/b/i/bits_navy_blue_hoodie.jpg"}),c.a.createElement(k,{id:"3254354345",title:"Tech Tattoo",price:99.99,rating:3,image:"https://bitspilani.campusmall.in/pub/media/catalog/product/cache/70363dcd7ca9e78e610c784651f84966/b/i/bits_tech_tattoo_1.jpg"})),c.a.createElement("div",{className:"home__row"},c.a.createElement(k,{id:"90829332",title:"TShirt with Customized Name",price:694.98,rating:4,image:"https://bitspilani.campusmall.in/pub/media/catalog/product/cache/70363dcd7ca9e78e610c784651f84966/b/i/bits_pilani_montage_t_shirt_navy_blue.jpg"}),c.a.createElement(k,{id:"32543543",title:"NoteBook",price:40,rating:3,image:"https://bitspilani.campusmall.in/pub/media/catalog/product/cache/70363dcd7ca9e78e610c784651f84966/b/i/bits_diary_navy_blue_1.jpg"}))))},C=a(4),S=(a(64),a(65),a(24)),j=a.n(S),y=a(29),A=a(16),B=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},T=function(e,t){switch(console.log(t),t.type){case"ADD_TO_BASKET":return Object(A.a)(Object(A.a)({},e),{},{basket:[].concat(Object(y.a)(e.basket),[t.item])});case"EMPTY_BASKET":return Object(A.a)(Object(A.a)({},e),{},{basket:[]});case"REMOVE_FROM_BASKET":var a=e.basket.findIndex((function(e){return e.id===t.id})),n=Object(y.a)(e.basket);return a>=0?n.splice(a,1):console.warn("Cant remove product (id: ".concat(t.id,") as its not in basket!")),Object(A.a)(Object(A.a)({},e),{},{basket:n});case"SET_USER":return Object(A.a)(Object(A.a)({},e),{},{user:t.user});default:return e}};var w=function(){var e=Object(C.f)(),t=h(),a=Object(o.a)(t,2),n=a[0].basket;return a[1],c.a.createElement("div",{className:"subtotal"},c.a.createElement(j.a,{renderText:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Subtotal (",n.length," items): ",c.a.createElement("strong",null,e)))},decimalScale:2,value:B(n),displayType:"text",thousandSeparator:!0,prefix:"Rs."}),c.a.createElement("button",{onClick:function(t){return e.push("/payment")}},"Proceed to Checkout"))};a(67);var P=function(e){var t=e.id,a=e.image,n=e.title,r=e.price,i=e.rating,l=e.hideButton,s=h(),m=Object(o.a)(s,2),u=(m[0].basket,m[1]);return c.a.createElement("div",{className:"checkoutProduct"},c.a.createElement("img",{className:"checkoutProduct__image",src:a}),c.a.createElement("div",{className:"checkoutProduct__info"},c.a.createElement("p",{className:"checkoutProduct__title"},n),c.a.createElement("p",{className:"checkoutProduct__price"},c.a.createElement("small",null,"Rs."),c.a.createElement("strong",null,r)),c.a.createElement("div",{className:"checkoutProduct__rating"},Array(i).fill().map((function(e,t){return c.a.createElement("p",null,"\ud83c\udf1f")}))),!l&&c.a.createElement("button",{onClick:function(){u({type:"REMOVE_FROM_BASKET",id:t})}},"Remove from Basket")))};var x=function(){var e=h(),t=Object(o.a)(e,2),a=t[0],n=a.basket,r=a.user;return t[1],c.a.createElement("div",{className:"checkout"},c.a.createElement("div",{className:"checkout__left"},c.a.createElement("img",{className:"checkout__ad",src:"https://bits-sutechteam.org/assets/img/mainback.png",alt:""}),c.a.createElement("div",null,c.a.createElement("h3",null,"Hello, ",null===r||void 0===r?void 0:r.email," "),c.a.createElement("h2",{className:"checkout__title"},"Your shopping Basket"),n.map((function(e){return c.a.createElement(P,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})})))),c.a.createElement("div",{className:"checkout__right"},c.a.createElement(w,null)))};a(68);var I=function(){var e=Object(C.f)(),t=Object(n.useState)(""),a=Object(o.a)(t,2),r=a[0],i=a[1],l=Object(n.useState)(""),s=Object(o.a)(l,2),m=s[0],u=s[1];return c.a.createElement("div",{className:"login"},c.a.createElement(p.b,{to:"/"},c.a.createElement("img",{className:"login__logo",src:"https://github.com/astroraditya/WebHosting_1/blob/main/New%20Project%20(5).png?raw=true"})),c.a.createElement("div",{className:"login__container"},c.a.createElement("h1",null,"Sign-in"),c.a.createElement("form",null,c.a.createElement("h5",null,"E-mail"),c.a.createElement("input",{type:"text",value:r,onChange:function(e){return i(e.target.value)}}),c.a.createElement("h5",null,"Password"),c.a.createElement("input",{type:"password",value:m,onChange:function(e){return u(e.target.value)}}),c.a.createElement("button",{type:"submit",onClick:function(t){t.preventDefault(),v.signInWithEmailAndPassword(r,m).then((function(t){e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__signInButton"},"Sign In")),c.a.createElement("p",null,"By signing-in you agree to the Conditions of Use & Sale of BPPCMall. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice."),c.a.createElement("button",{onClick:function(t){t.preventDefault(),v.createUserWithEmailAndPassword(r,m).then((function(t){t&&e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__registerButton"},"Create your BPPCMall Account")))},R=(a(69),a(70),a(38)),M=a.n(R);var D=function(e){var t,a=e.order;return c.a.createElement("div",{className:"order"},c.a.createElement("h2",null,"Order"),c.a.createElement("p",null,M.a.unix(a.data.created).format("MMMM Do YYYY, h:mma")),c.a.createElement("p",{className:"order__id"},c.a.createElement("small",null,a.id)),null===(t=a.data.basket)||void 0===t?void 0:t.map((function(e){return c.a.createElement(P,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating,hideButton:!0})})),c.a.createElement(j.a,{renderText:function(e){return c.a.createElement("h3",{className:"order__total"},"Order Total: ",e)},decimalScale:2,value:a.data.amount/100,displayType:"text",thousandSeparator:!0,prefix:"Rs."}))};var L=function(){var e=h(),t=Object(o.a)(e,2),a=t[0],r=(a.basket,a.user),i=(t[1],Object(n.useState)([])),l=Object(o.a)(i,2),s=l[0],m=l[1];return Object(n.useEffect)((function(){r?f.collection("users").doc(null===r||void 0===r?void 0:r.uid).collection("orders").orderBy("created","desc").onSnapshot((function(e){return m(e.docs.map((function(e){return{id:e.id,data:e.data()}})))})):m([])}),[r]),c.a.createElement("div",{className:"orders"},c.a.createElement("h1",null,"Your Orders"),c.a.createElement("div",{className:"orders__order"},null===s||void 0===s?void 0:s.map((function(e){return c.a.createElement(D,{order:e})}))))};var F=function(){var e=h(),t=Object(o.a)(e,2);Object(l.a)(t[0]);var a=t[1];return Object(n.useEffect)((function(){v.onAuthStateChanged((function(e){console.log("THE USER IS ",e),a(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),c.a.createElement(p.a,null,c.a.createElement("div",{className:"app"},c.a.createElement(C.c,null,c.a.createElement(C.a,{path:"/orders"},c.a.createElement(N,null),c.a.createElement(L,null)),c.a.createElement(C.a,{path:"/login"},c.a.createElement(I,null)),c.a.createElement(C.a,{path:"/checkout"},c.a.createElement(N,null),c.a.createElement(x,null)),c.a.createElement(C.a,{path:"/"},c.a.createElement(N,null),c.a.createElement(O,null)))))};i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(_,{initialState:{basket:[],user:null},reducer:T},c.a.createElement(F,null))),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.b5c2060a.chunk.js.map