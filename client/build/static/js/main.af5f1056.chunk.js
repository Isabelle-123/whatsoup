(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],[,,,function(e,t,n){e.exports={cards:"menuStyle_cards__2WR9O",img:"menuStyle_img__2UjRz",foodInfoContainer:"menuStyle_foodInfoContainer__13I5E",text:"menuStyle_text__1-VCl",nameButton:"menuStyle_nameButton__3Ut8e",button:"menuStyle_button__ILHtW",container:"menuStyle_container__1jE0K"}},,function(e,t,n){e.exports={container:"style_container__1L9WH",listFriend:"style_listFriend__2LpXq",listItems:"style_listItems__ULj8s",type:"style_type__2XlSL",counterContainer:"style_counterContainer__1J4Qg",counterButton:"style_counterButton__bwm5q",counter:"style_counter__Q7lrY",containerPrice:"style_containerPrice__5yfuf",wrapper:"style_wrapper__1kiz-",inputSection:"style_inputSection__2vdIS"}},,function(e,t,n){e.exports={buttonWithBorder:"buttonsStyle_buttonWithBorder__3daVt",addRemove:"buttonsStyle_addRemove__1hPPe",LinkButtonWide:"buttonsStyle_LinkButtonWide__g1tMI",LinkButtonBig:"buttonsStyle_LinkButtonBig__3_0eE",closeX:"buttonsStyle_closeX__1rEQN"}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/healing.dfdac8d4.png"},function(e,t,n){e.exports=n.p+"static/media/chillibillie.5aea309a.png"},function(e,t,n){e.exports=n.p+"static/media/solongcold.41ee4079.png"},function(e,t,n){e.exports=n.p+"static/media/lowcarb.5678fb39.png"},function(e,t,n){e.exports=n.p+"static/media/missmuscle.9c692007.png"},,,,function(e,t,n){e.exports={BlurBackground:"backdrop_BlurBackground__2e_rQ"}},function(e,t,n){e.exports=n.p+"static/media/friedtofu.65f987f5.png"},function(e,t,n){e.exports=n.p+"static/media/grilledchicken.95a3a677.png"},function(e,t,n){e.exports=n.p+"static/media/shrimps.c9c36d70.png"},function(e,t,n){e.exports=n.p+"static/media/beef.6e7ceec6.png"},function(e,t,n){e.exports=n.p+"static/media/cheesy.eef78770.png"},function(e,t,n){e.exports=n.p+"static/media/vampire.8d558055.png"},function(e,t,n){e.exports=n.p+"static/media/goingnuts.d3c3d17d.png"},function(e,t,n){e.exports=n.p+"static/media/asgoodasitbaguettes.e9f740bf.png"},function(e,t,n){e.exports=n.p+"static/media/butter.e357eacd.png"},function(e,t,n){e.exports=n.p+"static/media/beet.da76d7d2.png"},function(e,t,n){e.exports=n.p+"static/media/aioli.a1ea1808.png"},function(e,t,n){e.exports=n.p+"static/media/avocado.de033bad.png"},function(e,t,n){e.exports=n.p+"static/media/pancake.9f60bf5f.png"},function(e,t,n){e.exports=n.p+"static/media/regularpan.50c0c0ae.png"},function(e,t,n){e.exports=n.p+"static/media/lime.35147186.png"},function(e,t,n){e.exports=n.p+"static/media/apple.cb6dc85e.png"},function(e,t,n){e.exports=n.p+"static/media/shots.67a6969b.png"},function(e,t,n){e.exports=n.p+"static/media/fritz.eab59872.png"},function(e,t,n){e.exports=n.p+"static/media/kombucha.edd786dd.png"},function(e,t,n){e.exports=n.p+"static/media/logo.22152f9a.png"},function(e,t,n){e.exports=n(98)},,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(40),o=n.n(c),i=(n(75),n(26)),l=n(2),s=n(3),m=n.n(s),u=Object(a.createContext)(),p=Object(a.createContext)(),d=function(e){var t=Object(a.useContext)(u).addFood,n=Object(a.useContext)(p),c=n.setAlert,o=n.setBlur,i=e.name,l=e.type,s=e.price,d=e.desc,f=e.img,x=e.alt,g=e.nextItem;return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:m.a.cards},r.a.createElement("img",{className:m.a.img,src:f,alt:x}),r.a.createElement("section",{className:m.a.foodInfoContainer},r.a.createElement("div",{className:m.a.nameButton},r.a.createElement("h2",null,i),r.a.createElement("button",{type:"click",onClick:function(e){e.preventDefault(),o(),c(i,g,l,s),t(l,i,s)},className:m.a.button}," + ")),r.a.createElement("h5",{className:m.a.text},d))))},f=n(41),x=n.n(f),g=n(42),y=n.n(g),E=n(43),h=n.n(E),b=n(44),k=n.n(b),v=n(45),O=n.n(v),j=n(13),_=n(7),C=n.n(_),N=function(){var e=Object(l.f)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){return e.goBack()},className:C.a.buttonWithBorder},"BACK"))},I=n(18),w=Object(l.g)((function(e){var t=e.history,n=(e.location,e.match,e.staticContext,e.to),a=e.onClick,c=Object(I.a)(e,["history","location","match","staticContext","to","onClick"]);return r.a.createElement("button",Object.assign({className:C.a.buttonWithBorder},c,{onClick:function(e){a&&a(e),t.push(n)}}))})),S=n(14);function B(){var e=Object(j.a)(["\n  \n  .Navbar {\n    width:100%;\n    height: 150px;\n    left: 0px;\n    top: 0px;\n    background: #ffb\n  }\n\n  .Upperbutt{\n    display:flex;\n    justify-content: space-between;\n    padding: 10px;\n  }\n\n  .Nextstyle{\n    display:flex;\n    justify-content: flex-end;\n    padding-bottom:10px;\n    margin-right: 10px;\n  }\n\n .namePrice{\n    display: flex;\n    justify-content: space-between;\n    margin-left: 15px;\n    margin-right: 15px;\n    color: black;\n    font-size: 25px;\n }\n\n ","\n\n  .price {\n    margin-top: 15px;\n  }\n\n  .typeOfFood-Soup {\n    background: #ffb;\n  }\n\n  .typeOfFood-Protein {\n    background: #fec;\n  }\n\n  .typeOfFood-Bread {\n    background: #cff;\n  }\n\n  .typeOfFood-Spreads {\n    background: #dfd;\n  }\n\n  .typeOfFood-Treats {\n    background: #ffb;\n  }\n\n  .typeOfFood-Beverages {\n    background: #fec;\n  }\n\n"]);return B=function(){return e},e}var T=S.a.div(B(),""),R=function(e){var t=Object(a.useContext)(p).removeAlert,n=function(e){e.preventDefault(),t()};return r.a.createElement(T,null,r.a.createElement("div",{className:".Navbar typeOfFood-".concat(e.typeOfFood)},r.a.createElement("div",{className:"Upperbutt"},r.a.createElement(N,null),r.a.createElement(w,{to:"/checkout",onClick:n},"CHECKOUT")),r.a.createElement("div",{className:"namePrice"},r.a.createElement("h1",null,e.typeOfFood),r.a.createElement("div",{className:"price"},"/ ",e.price," SEK")),r.a.createElement("div",{className:"Nextstyle"},r.a.createElement(w,{to:e.next,onClick:n},"NEXT"))))},F=n(11),A=function(e){var t=Object(a.useContext)(u).removeItem,n=e.name,c=e.type,o=e.price;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){t({name:n,type:c,price:o})},className:C.a.addRemove},"-"))},P=function(e){var t=Object(a.useContext)(u).addFood,n=e.type,c=e.name,o=e.price;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){t(n,c,o)},className:C.a.addRemove},"+"))};function L(){var e=Object(j.a)(["\n  display:flex; \n  justify-content: center;\n  align-items: center;\n  \n  .alert-container {\n    width:300px;\n    margin-top: 10px;\n    position: fixed;\n    border-radius: 10px;\n    z-index: 100;\n    top: 20%;\n    height: 310px;\n  }\n\n  .alert-Soup {\n    background: #ffb;\n  }\n\n  .alert-Protein {\n    background: #fec;\n  }\n\n  .alert-Bread {\n    background: #cff;\n  }\n\n  .alert-Spreads {\n    background: #dfd;\n  }\n\n  .alert-Treats {\n    background: #ffb;\n  }\n  \n  .alert-Beverages {\n    background: #fec;\n  }\n\n .name {\n    font-weight: 100;\n    margin: 0;\n    padding-top: 10px;\n    font-size: 25px;\n    text-align: center;\n    font-family: Lobster;\n }\n\n .text {\n    margin: 0px 15px 0px 15px;\n    padding: 5px;\n    padding-top: 10px;\n    font-weight: 200;\n    text-align: center;\n    font-size: 15px;\n  }\n\n .amountAddRemoveItem {\n   display: flex;\n   justify-content: center;\n  }\n\n .amount {\n  border-radius: 5px;\n  border: 1px solid black;\n  width: 15px;\n  margin:5px;\n  font-size: 15px;\n  padding-left: 5px;\n  padding-right: 5px;\n  font-family: Lobster;\n  text-align: center;\n }\n\n .nextContainer  {\n   display: flex;\n   justify-content: center;\n   width: 100%;\n   margin-bottom: 10px;\n   padding-bottom: 3px;\n }\n\n .ingredients-container {\n   background-color: snow;\n   margin:0px;\n   padding-bottom: 10px;\n }\n\n  .read-more-container {\n   display: flex;\n   justify-content: center;\n   width: 100%;\n }\n\n @media (min-width: 500px) {\n  .alert-container {\n    width: 450px;\n    height: 310px;\n  }\n\n .text {\n    font-size: 20px;\n  }\n}\n\n \n \n"]);return L=function(){return e},e}var D=S.a.div(L()),U=n(49),K=n.n(U),M=function(){var e=Object(a.useContext)(p).removeAlert;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:K.a.BlurBackground,onClick:function(t){t.preventDefault(),e()}}))},z=function(){var e=Object(a.useContext)(p),t=e.alert,n=e.removeAlert,c=Object(a.useContext)(u).checkout;return null!==t&&r.a.createElement(D,null,r.a.createElement(M,null),r.a.createElement("div",{key:t.id,className:"alert-container alert-".concat(t.type)},r.a.createElement("button",{onClick:function(e){e.preventDefault(),n()},className:C.a.closeX}," x "),r.a.createElement("h1",{className:"name"},t.name),r.a.createElement("p",{className:"text"},"You placed ",t.name," in your shopping cart."),r.a.createElement("div",{className:"amountAddRemoveItem"},r.a.createElement(A,{type:t.type,name:t.name,price:t.price}),r.a.createElement("div",{className:"amount"},function(e){for(var t=c.reduce((function(e,t){return e[t.name]||(e[t.name]=0),e[t.name]++,e}),{}),n=0,a=Object.entries(t);n<a.length;n++){var r=Object(F.a)(a[n],2),o=r[0],i=r[1];if(o===e)return i}}(t.name)),r.a.createElement(P,{type:t.type,name:t.name,price:t.price})),r.a.createElement("div",{className:"nextContainer"},r.a.createElement(w,{to:"/"+t.nextItem,onClick:function(e){e.preventDefault(),n()}},"NEXT")),r.a.createElement("section",{className:"ingredients-container"},r.a.createElement("h3",{className:"name"},"Ingredients"),r.a.createElement("p",{className:"text"},"Ingredients list and carbs. Do adjustments here. We will fix it!"),r.a.createElement("div",{className:"read-more-container"},r.a.createElement(w,null,"READ MORE")))))},G=function(){var e=[{type:"Soup",key:1,name:"The Healing",desc:"Butternut squash, red onions, garlic, coconut milk",price:50,img:x.a,nextItem:"PROTEIN",alt:"Soup with taste of healing",next:"protein"},{type:"Soup",key:2,name:"So Long Cold",desc:"Parsnips, rosted garlic, lemon rosmary, maple syrup",price:50,img:h.a,nextItem:"PROTEIN",next:"protein"},{type:"Soup",key:3,name:"Chillie Billie",desc:"Carrots, chilli flakes, peanuts, sweet potato, coconut milk ",price:50,img:y.a,nextItem:"PROTEIN",next:"protein"},{type:"Soup",key:4,name:"Miss Muscle",desc:"Green peas, coriander, green chilli, lime, coconut milk",price:50,img:O.a,nextItem:"PROTEIN",next:"protein"},{type:"Soup",key:5,name:"Low Carb",desc:"Sweet potato, ginger, cummin marsala, garlic, coconut milk",price:50,img:k.a,nextItem:"PROTEIN",next:"protein"}];return r.a.createElement("div",null,r.a.createElement(z,null),r.a.createElement(R,{typeOfFood:"Soup",price:"50",next:"/protein"}),r.a.createElement("ul",{className:m.a.container},e.map((function(e){return r.a.createElement(d,{type:e.type,name:e.name,price:e.price,key:e.key,desc:e.desc,img:e.img,alt:"Soup"+e.name,nextItem:e.nextItem,next:e.next})}))))},W=n(50),H=n.n(W),V=n(51),X=n.n(V),J=n(52),Q=n.n(J),Y=n(53),q=n.n(Y),Z=function(){var e=[{type:"Protein",key:6,name:"Fried Tofu",desc:"100 gram",price:30,img:H.a,nextItem:"bread"},{type:"Protein",key:7,name:"Grilled Chicken",desc:"100 gram",price:30,img:X.a,nextItem:"bread"},{type:"Protein",key:8,name:"Hand-peeled Shrimps",desc:"75 gam",price:30,img:Q.a,nextItem:"bread"},{type:"Protein",key:9,name:"Grilled Beef",desc:"50 gram",price:30,img:q.a,nextItem:"bread"}];return r.a.createElement("div",null,r.a.createElement(z,null),r.a.createElement(R,{typeOfFood:"Protein",price:"30",next:"/bread"}),r.a.createElement("ul",{className:m.a.container},e.map((function(e){return r.a.createElement(d,{type:e.type,name:e.name,price:e.price,key:e.key,desc:e.desc,img:e.img,alt:"Protein"+e.name,nextItem:e.nextItem,next:e.next})}))))},$=n(54),ee=n.n($),te=n(55),ne=n.n(te),ae=n(56),re=n.n(ae),ce=n(57),oe=n.n(ce),ie=function(){var e=[{type:"Bread",key:10,name:"The Cheesy One",desc:"",price:15,img:ee.a,nextItem:"spreads",alt:"Soup with taste of healing",next:"protein"},{type:"Bread",key:11,name:"Hold Back Vampire",desc:"",price:15,img:ne.a,nextItem:"spreads",next:"protein"},{type:"Bread",key:12,name:"Going Nuts",desc:"",price:15,img:re.a,nextItem:"spreads",next:"protein"},{type:"Bread",key:13,name:"As Good As It Baguettes",desc:"",price:15,img:oe.a,nextItem:"spreads",next:"protein"}];return r.a.createElement("div",null,r.a.createElement(z,null),r.a.createElement(R,{typeOfFood:"Bread",price:"15",next:"/spreads"}),r.a.createElement("ul",{className:m.a.container},e.map((function(e){return r.a.createElement(d,{type:e.type,name:e.name,price:e.price,key:e.key,desc:e.desc,img:e.img,alt:"Bread"+e.name,nextItem:e.nextItem,next:e.next})}))))},le=n(58),se=n.n(le),me=n(59),ue=n.n(me),pe=n(60),de=n.n(pe),fe=n(61),xe=n.n(fe),ge=function(){var e=[{type:"Spreads",key:14,name:"Whipped Butter",desc:"75 gram",price:15,img:se.a,nextItem:"treats",next:"protein"},{type:"Spreads",key:15,name:"Beetroot Hummus",desc:"100 gram",price:15,img:ue.a,nextItem:"treats",next:"protein"},{type:"Spreads",key:16,name:"Tryffle Aioli",desc:"75 gram",price:15,img:de.a,nextItem:"treats",next:"protein"},{type:"Spreads",key:17,name:"Sliced Avocado",desc:"75 gram",price:15,img:xe.a,nextItem:"treats",next:"protein"}];return r.a.createElement("div",null,r.a.createElement(z,null),r.a.createElement(R,{typeOfFood:"Spreads",price:"15",next:"/treats"}),r.a.createElement("ul",{className:m.a.container},e.map((function(e){return r.a.createElement(d,{type:e.type,name:e.name,price:e.price,key:e.key,desc:e.desc,img:e.img,alt:"Spread"+e.name,nextItem:e.nextItem,next:e.next})}))))},ye=n(62),Ee=n.n(ye),he=n(63),be=n.n(he),ke=function(){var e=[{type:"Treats",key:18,name:"American Pancakes",desc:"With lemon and blueberrys",price:15,img:Ee.a,nextItem:"beverages",next:"beverages"},{type:"Treats",key:19,name:"Pancakes",desc:"with cream and jam",price:15,img:be.a,nextItem:"beverages",next:"beverages"}];return r.a.createElement("div",null,r.a.createElement(z,null),r.a.createElement(R,{typeOfFood:"Treats",price:"15",next:"/beverages"}),r.a.createElement("ul",{className:m.a.container},e.map((function(e){return r.a.createElement(d,{type:e.type,name:e.name,price:e.price,key:e.key,desc:e.desc,img:e.img,alt:"Treat"+e.name,nextItem:e.nextItem,next:e.next})}))))},ve=n(64),Oe=n.n(ve),je=n(65),_e=n.n(je),Ce=n(66),Ne=n.n(Ce),Ie=n(67),we=n.n(Ie),Se=n(68),Be=n.n(Se),Te=function(){var e=[{type:"Beverages",key:20,name:"Lemonade",desc:"Lime and Lemon",price:15,img:Oe.a,nextItem:"checkout",alt:"Soup with taste of healing",next:"checkout"},{type:"Beverages",key:21,name:"Juice",desc:"Apple and Ginger",price:15,img:_e.a,nextItem:"checkout",next:"checkout"},{type:"Beverages",key:22,name:"Three Shots",desc:"",price:15,img:Ne.a,nextItem:"checkout",next:"checkout"},{type:"Beverages",key:23,name:"Fritz-Kola",desc:"",price:15,img:we.a,nextItem:"checkout",next:"checkout"},{type:"Beverages",key:24,name:"Kombucha",desc:"",price:15,img:Be.a,nextItem:"checkout",next:"checkout"}];return r.a.createElement("div",null,r.a.createElement(z,null),r.a.createElement(R,{typeOfFood:"Beverages",price:"15",next:"/checkout"}),r.a.createElement("ul",{className:m.a.container},e.map((function(e){return r.a.createElement(d,{type:e.type,name:e.name,price:e.price,key:e.key,desc:e.desc,img:e.img,alt:"Beverage"+e.name,nextItem:e.nextItem,next:e.next})}))))},Re=function(e,t){switch(t.type){case"SET_ALERT":case"SET_BLUR":return t.payload;case"REMOVE_ALERT":return null;default:return e}},Fe=function(e){var t=Object(a.useReducer)(Re,null),n=Object(F.a)(t,2),c=n[0],o=n[1];return r.a.createElement(p.Provider,{value:{alert:c,setAlert:function(e,t,n,a){o({type:"SET_ALERT",payload:{name:e,nextItem:t,type:n,price:a}})},setBlur:function(){o({type:"SET_BLUR"})},removeAlert:function(){o({type:"REMOVE_ALERT"})}}},e.children)};function Ae(){var e=Object(j.a)(["\n    background-color: #dfd;\n\n    .container {\n        background: #dfd;\n        font-size: 15px;\n        font-weight: 200;\n        padding: 20px;\n        margin: 0;\n        border-bottom: 2px solid black;\n    }\n\n    .listItems {\n        display: flex;\n        flex-direction: row;\n        justify-content: space-between;\n        margin-top: 10px;\n        margin-bottom: 10px;\n    }\n\n    .item {\n        margin-top: 5px;\n        margin-bottom: 5px;\n    }\n\n    .container-price {\n        display: flex;\n        justify-content: space-between;\n       \n    }\n\n    .total-price {\n        margin-top: 15px;\n    }\n\n    .finalPrice {\n        font-family: Lobster;\n        font-size: 30px;\n        font-weight: 100;\n        margin-top: 0;\n        margin: 0;\n    }\n\n    .cancelOk {\n        display: flex;\n        justify-content: space-between;\n        margin: 0;\n        margin-top: 20px;\n    }\n\n    @media (min-width: 560px){\n\n        .container {\n            padding-left: 25%;\n            padding-right:25%;\n        }\n    } \n\n    @media (min-width: 1040px){\n\n        .container {\n            padding: 1% 35% 1% 35%;\n        }\n    }\n}\n\n"]);return Ae=function(){return e},e}var Pe=S.a.div(Ae()),Le=Object(l.g)((function(e){var t=e.history,n=(e.location,e.match,e.staticContext,e.to),a=e.onClick,c=Object(I.a)(e,["history","location","match","staticContext","to","onClick"]);return r.a.createElement("button",Object.assign({className:C.a.LinkButtonWide},c,{onClick:function(e){a&&a(e),t.push(n)}}))})),De=function(){var e=Object(a.useContext)(u),t=e.checkout,n=e.cancelCheckout;return console.log(t),r.a.createElement(Pe,null,r.a.createElement("div",{className:"container"},r.a.createElement("h3",null,"YOUR ORDER"),r.a.createElement("section",{className:"listItems"},r.a.createElement("div",{className:"item"},t.length>0?t.map((function(e,t){return r.a.createElement("div",{key:t},e.name)})):""),r.a.createElement("div",{className:"item"},t.length>0?t.map((function(e,t){return r.a.createElement("div",{key:t},e.price," SEK")})):"")),r.a.createElement("section",{className:"container-price"},r.a.createElement("h3",null,"TOTAL PRICE"),r.a.createElement("h3",null,t.length>0?t.reduce((function(e,t){return e+t.price}),0):""," SEK")),r.a.createElement("section",{className:"cancelOk"},r.a.createElement(Le,{to:"/soup",onClick:function(){n()}},"CANCEL"),r.a.createElement(Le,null,"OK"))))};function Ue(){var e=Object(j.a)(["\n\n.container {\n    font-family: Lobster;\n    width: 100%;\n    margin: 0;\n    text-align: center;\n}\n\n.checkout {\n    background: #dfd;\n    font-weight: 100;\n    font-size: 30px;\n    margin: 0;\n    padding: 20px 0px 15px 0px;\n}\n\n.container-choice {\n    background: #ffb;\n    margin: 0;\n    padding: 20px;\n\n    border-top: 2px solid black;\n    border-bottom: 2px solid black;\n}\n\n.text {\n    font-size: 25px;\n    margin: 10px;\n    font-weight: 100;\n}\n  \n\nul {\n    list-style: none;\n    display:flex; \n    justify-content: center;\n    flex-wrap: wrap;\n    margin-bottom: 0;\n    margin-top: 10px;\n}\n\n@media (min-width: 560px){\n    ul {\n        margin: 3% 25% 1% 25%;\n    }\n}\n\n@media (min-width: 1040px){\n    ul {\n     margin: 2% 10% 0% 10%;\n    }\n}\n\n"]);return Ue=function(){return e},e}var Ke=S.a.div(Ue()),Me=function(){return r.a.createElement(Ke,null,r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"checkout"},"Checkout"),r.a.createElement("section",{className:"container-choice"},r.a.createElement("h1",null," Good Choice!"),r.a.createElement("h2",null,"Do you feel pleased or do you want something more?"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(Le,{to:"/soup"},"SOUP")),r.a.createElement("li",null,r.a.createElement(Le,{to:"/protein"},"PROTEIN")),r.a.createElement("li",null,r.a.createElement(Le,{to:"/bread"},"BREAD")),r.a.createElement("li",null,r.a.createElement(Le,{to:"/spreads"},"SPREADS")),r.a.createElement("li",null,r.a.createElement(Le,{to:"/treats"},"TREATS")),r.a.createElement("li",null,r.a.createElement(Le,{to:"/beverages"},"BEVERAGES"))))))},ze=Object(a.createContext)(),Ge=n(5),We=n.n(Ge),He=function(e){var t=Object(a.useContext)(ze),n=t.addToFriend,c=t.removeFriendItem,o=t.friend,i=e.id,l=e.type,s=e.price;return r.a.createElement("div",{className:We.a.listFriend},r.a.createElement("ul",{key:i},r.a.createElement("li",{className:We.a.listItems},r.a.createElement("div",{className:We.a.type},l),r.a.createElement("section",{className:We.a.counterContainer},r.a.createElement("button",{className:We.a.counterButton,type:"submit",onClick:function(){return function(e,t){c({type:e,price:t})}(l,s)}},"-"),r.a.createElement("div",{className:We.a.counter},function(e){for(var t=o.reduce((function(e,t){return e[t.type]||(e[t.type]=0),e[t.type]++,e}),{}),n=0,a=Object.entries(t);n<a.length;n++){var r=Object(F.a)(a[n],2),c=r[0],i=r[1];if(c===e)return i}}(l)),r.a.createElement("button",{className:We.a.counterButton,type:"submit",onClick:function(){return function(e,t){n({type:e,price:t})}(l,s)}},"+")),r.a.createElement("div",{className:We.a.counter},s," SEK"))))},Ve=function(){var e=Object(a.useContext)(ze),t=e.friend,n=e.getFriend;Object(a.useEffect)((function(){c(),n()}),[]);var c=function(){return t.length>0?t.reduce((function(e,t){return e+t.price}),0).toString()+" SEK":""};return r.a.createElement("div",{className:We.a.container},r.a.createElement("section",{className:We.a.inputSection},r.a.createElement("h2",{className:We.a.h2},"Which friend is this treasure for?"),r.a.createElement("input",{type:"text",placeholder:" Name"}),r.a.createElement("input",{type:"text",placeholder:" Number"})),[{type:"Soup",id:1,price:50},{type:"Protein",id:2,price:30},{type:"Bread",id:3,price:15},{type:"Spread",id:4,price:25},{type:"Treats",id:5,price:15},{type:"Beverages",id:6,price:25}].map((function(e){return r.a.createElement(He,{type:e.type,id:e.id,price:e.price,key:e.id})})),r.a.createElement("section",{className:We.a.containerPrice},r.a.createElement("h3",null,"AMOUNT FOR GIFT"),r.a.createElement("h3",null," ",c())),r.a.createElement("h2",null,"Send a message"),r.a.createElement("textarea",null))},Xe=function(){var e=Object(a.useState)(!1),t=Object(F.a)(e,2),n=t[0],c=t[1],o=function(){return c(!n)};return r.a.createElement("div",{className:We.a.wrapper},n?r.a.createElement("div",null,r.a.createElement(Le,{onClick:o},"BACK")):r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Would you like to send a delicious soup to a friend?"),r.a.createElement("div",null,r.a.createElement(Le,{onClick:o},"GREAT IDEA!"))),n?r.a.createElement(Ve,null):null)},Je=function(){var e=Object(a.useContext)(u).getCheckout;return Object(a.useEffect)((function(){e()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(Me,null),r.a.createElement(De,null),r.a.createElement(Xe,null))},Qe=n(69),Ye=n.n(Qe),qe=Object(l.g)((function(e){var t=e.history,n=(e.location,e.match,e.staticContext,e.to),a=e.onClick,c=Object(I.a)(e,["history","location","match","staticContext","to","onClick"]);return r.a.createElement("button",Object.assign({className:C.a.LinkButtonBig},c,{onClick:function(e){a&&a(e),t.push(n)}}))}));function Ze(){var e=Object(j.a)(["\n    width: 100%;\n\n"]);return Ze=function(){return e},e}function $e(){var e=Object(j.a)(["\n    \n    .container {\n    font-family: 'Lobster', cursive;\n    display: flex;\n    flex-direction: column;\n    ","\n    position: absolute;\n    background-color: #dfd;\n    height:100%;\n    font-size: 10em;\n    }\n\n\n   \n    @media (min-width: 560px){\n        .container {\n            align-items: center;\n            width: 100%;\n        }\n\n        .img {\n            width: 40%;\n            margin-top: 5%;\n        }\n    }\n\n    @media (min-width: 1150px){\n    .img {\n        width: 30%;\n        margin-top: 5%;\n    }\n}\n\n@media (min-width: 1500px){\n\n    .img {\n        width: 20%;\n        margin-top: 5%;\n    }\n}\n\n\n"]);return $e=function(){return e},e}var et=S.a.div($e(),""),tt=S.a.img(Ze()),nt=function(){return r.a.createElement(et,null,r.a.createElement("div",{className:"container"},r.a.createElement(tt,{src:Ye.a,className:"img"}),r.a.createElement(qe,{to:"/soup"},"I'M HUNGRY. I NEED A SOUP!")))},at=n(6),rt=n.n(at),ct=n(1),ot=n(16),it=n(23),lt=function(e,t){switch(t.type){case"ADD_FOOD":return Object(ct.a)(Object(ct.a)({},e),{},{checkout:[].concat(Object(it.a)(e.checkout),[t.payload])});case"REMOVE_ITEM":var n=t.payload.checkout.findIndex((function(e){return e.name===t.payload.name}));return Object(ct.a)(Object(ct.a)({},e),{},{checkout:e.checkout.filter((function(e,t){return t!==n}))});case"GET_CHECKOUT":return Object(ct.a)(Object(ct.a)({},e),{},{checkout:t.payload});case"UPDATE_CHECKOUT":return Object(ct.a)(Object(ct.a)({},e),{},{checkout:Object(it.a)(e.checkout+t.payload)});case"CANCEL_CHECKOUT":return Object(ct.a)(Object(ct.a)({},e),{},{checkout:e.checkout.filter((function(e){return e.id!==t.payload}))});default:return e}},st=n(15),mt=n.n(st),ut=function(e){var t=Object(a.useReducer)(lt,{checkout:[]}),n=Object(F.a)(t,2),c=n[0],o=n[1],i=function(){var e=Object(ot.a)(rt.a.mark((function e(t,n,a){var r,c,i;return rt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={type:t,name:n,price:a},c={headers:{"Content-Type":"application/json"}},e.prev=2,e.next=5,mt.a.post("https://whatsoup-7c207.firebaseio.com/order.json/",r,c);case 5:i=e.sent,o({type:"ADD_FOOD",payload:Object(ct.a)({id:i.data},r)}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log("error");case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t,n,a){return e.apply(this,arguments)}}(),l=function(){var e=Object(ot.a)(rt.a.mark((function e(t){var n,a,r,c,i;return rt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t.name),e.prev=1,e.next=4,mt.a.get("https://whatsoup-7c207.firebaseio.com/order.json/");case 4:for(r in n=e.sent,a=[],n.data)a.push(Object(ct.a)(Object(ct.a)({},n.data[r]),{},{id:r}));return c=a.findIndex((function(e){return e.name===t.name})),console.log(c),i=a[c].id,console.log(i),e.next=13,mt.a.delete("https://whatsoup-7c207.firebaseio.com/order/".concat(i,".json/"));case 13:o({type:"REMOVE_ITEM",payload:{name:t.name,checkout:a}}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=Object(ot.a)(rt.a.mark((function e(){var t,n,a;return rt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,mt.a.get("https://whatsoup-7c207.firebaseio.com/order.json/");case 3:for(a in t=e.sent,n=[],t.data)n.push(Object(ct.a)(Object(ct.a)({},t.data[a]),{},{id:a}));o({type:"GET_CHECKOUT",payload:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("error - could not get checkout");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(ot.a)(rt.a.mark((function e(t){return rt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,mt.a.delete("https://whatsoup-7c207.firebaseio.com/order.json/");case 3:o({type:"CANCEL_CHECKOUT",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(u.Provider,{value:{checkout:c.checkout,addFood:i,removeItem:l,cancelCheckout:m,getCheckout:s}},e.children)},pt=function(e,t){switch(t.type){case"ADD_TO_FRIEND":return Object(ct.a)(Object(ct.a)({},e),{},{friend:[].concat(Object(it.a)(e.friend),[t.payload])});case"GET_FRIEND":return Object(ct.a)(Object(ct.a)({},e),{},{friend:t.payload});case"REMOVE_FRIEND_ITEM":var n=t.payload.friend.findIndex((function(e){return e.type===t.payload.type}));return Object(ct.a)(Object(ct.a)({},e),{},{friend:e.friend.filter((function(e,t){return t!==n}))});default:return e}},dt=function(e){var t=Object(a.useReducer)(pt,{friend:[]}),n=Object(F.a)(t,2),c=n[0],o=n[1],i=function(){var e=Object(ot.a)(rt.a.mark((function e(t){var n,a;return rt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{"Content-Type":"application/json"}},e.prev=1,e.next=4,mt.a.post("https://whatsoup-7c207.firebaseio.com/friend.json/",t,n);case 4:a=e.sent,o({type:"ADD_TO_FRIEND",payload:Object(ct.a)({id:a.data},t)}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error("error - could not add food item to friend");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(ot.a)(rt.a.mark((function e(){var t,n,a;return rt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,mt.a.get("https://whatsoup-7c207.firebaseio.com/friend.json/");case 3:for(a in t=e.sent,n=[],t.data)n.push(Object(ct.a)(Object(ct.a)({},t.data[a]),{},{id:a}));o({type:"GET_FRIEND",payload:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("error - could not get checkout");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(ot.a)(rt.a.mark((function e(t){var n,a,r,c,i;return rt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t.type),e.prev=1,e.next=4,mt.a.get("https://whatsoup-7c207.firebaseio.com/friend.json/");case 4:for(r in n=e.sent,a=[],n.data)a.push(Object(ct.a)(Object(ct.a)({},n.data[r]),{},{id:r}));return c=a.findIndex((function(e){return e.type===t.type})),console.log(c),i=a[c].id,console.log(i),e.next=13,mt.a.delete("https://whatsoup-7c207.firebaseio.com/friend/".concat(i,".json/"));case 13:o({type:"REMOVE_FRIEND_ITEM",payload:{type:t.type,friend:a}}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(ze.Provider,{value:{friend:c.friend,addToFriend:i,getFriend:l,removeFriendItem:s}},e.children)};var ft=function(){return r.a.createElement(Fe,null,r.a.createElement(ut,null,r.a.createElement(dt,null,r.a.createElement(i.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:nt}),r.a.createElement(l.a,{exact:!0,path:"/soup",component:G}),r.a.createElement(l.a,{exact:!0,path:"/protein",component:Z}),r.a.createElement(l.a,{exact:!0,path:"/bread",component:ie}),r.a.createElement(l.a,{exact:!0,path:"/spreads",component:ge}),r.a.createElement(l.a,{exact:!0,path:"/treats",component:ke}),r.a.createElement(l.a,{exact:!0,path:"/beverages",component:Te}),r.a.createElement(l.a,{exact:!0,path:"/checkout",component:Je})))))))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ft,null)),document.getElementById("root"))}],[[70,1,2]]]);
//# sourceMappingURL=main.af5f1056.chunk.js.map