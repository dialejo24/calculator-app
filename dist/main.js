(()=>{"use strict";const e=document.querySelector(".grid-buttons"),t=document.querySelector(".display-input"),s=document.getElementById("display-input");let a=[],l="",m=document.querySelector(".theme"),i=document.querySelector(".toggle"),o=document.querySelector(".point"),c=document.querySelector(".title"),r=document.querySelector(".calc-display"),d=document.querySelector(".display-input"),n=document.querySelector(".grid-buttons"),h=document.querySelectorAll(".btn"),u=document.querySelector(".equal"),L=document.querySelector(".reset"),_=document.querySelector(".del");function v(e){"*"==e||"/"==e||"+"==e||"-"==e?l.length>0&&"NaN"!=Number(l).toString()?(a.push(l),l="",3==a.length&&y(),a.push(e)):"*"!=a[1]&&"/"!=a[1]||"-"!=e?a.length>0?a[1]=e:0==l.length&&"-"==e&&(l+=e):l+=e:"del"==e?(a=[],l=""):"."==e?-1==l.indexOf(".")&&(l+="."):"Enter"==e?!isNaN(l)&&2==a.length&&l.length>0&&(a.push(l),l="",y()):"Backspace"==e?l.length>0?l=l.slice(0,l.length-1):2==a.length&&(a.pop(),l=a.pop()+""):(1==a.length&&a.pop(),l+=e)}function p(){let e=a.join(" ")+" "+l;for(console.log(e),e.includes("NaN")||e.includes("null")?(alert("Error!"),e=0):" "==e&&(e=0),s.textContent=e;s.offsetWidth>t.offsetWidth;)e=e.slice(1),s.textContent=e}function y(){let e=a.pop(),t=function(e,t,s){switch(e){case"+":return function(e,t){return e+t}(Number(t),Number(s));case"-":return function(e,t){return e-t}(t,s);case"*":return function(e,t){return e*t}(t,s);case"/":return function(e,t){return 0!=t?e/t:"error"}(t,s);default:return null}}(a.pop(),a.pop(),e);"error"!=t?(t>=1e14?t=t.toExponential(10):t.toString().length>14&&(t=t.toFixed(3)),a.push(t)):alert("Error! you can't divide by 0")}window.addEventListener("keydown",(e=>{const t=document.querySelector(`button[data-key="${e.key}"]`);null!=t&&(v(t.attributes[0].value),p())})),e.addEventListener("click",(e=>{"data-key"==e.target.attributes[0].name&&(v(e.target.attributes[0].value),p())})),i.addEventListener("click",(e=>{"three"==e.target.id?(o.style="transform: translateX(49px)",function(){document.body.classList.add("body_theme3"),document.body.classList.remove("body_theme2"),document.body.classList.remove("body_theme1"),c.classList.add("h1_theme3"),c.classList.remove("h1_theme2"),c.classList.remove("h1_theme1"),m.classList.add("theme3"),m.classList.remove("theme2"),m.classList.remove("theme1"),i.classList.add("toggle_theme3"),i.classList.remove("toggle_theme2"),i.classList.remove("toggle_theme1"),o.classList.add("point_theme3"),o.classList.remove("point_theme2"),o.classList.remove("point_theme1"),r.classList.add("calc-display_theme3"),r.classList.remove("calc-display_theme2"),r.classList.remove("calc-display_theme1"),d.classList.add("display-input_theme3"),d.classList.remove("display-input_theme2"),d.classList.remove("display-input_theme1"),n.classList.add("grid-buttons_theme3"),n.classList.remove("grid-buttons_theme2"),n.classList.remove("grid-buttons_theme1"),u.classList.add("equal_theme3"),u.classList.remove("equal_theme2"),u.classList.remove("equal_theme1"),L.classList.add("reset_theme3"),L.classList.remove("reset_theme2"),L.classList.remove("reset_theme1"),_.classList.add("del_theme3"),_.classList.remove("del_theme2"),_.classList.remove("del_theme1");for(let e=0;e<h.length;e++)"del"!=h[e].attributes[0].value&&"Enter"!=h[e].attributes[0].value&&"Backspace"!=h[e].attributes[0].value&&(h[e].classList.add("btn_theme3"),h[e].classList.remove("btn_theme2"),h[e].classList.remove("btn_theme1"))}()):"two"==e.target.id?(o.style="transform: translateX(24px)",function(){document.body.classList.add("body_theme2"),document.body.classList.remove("body_theme1"),document.body.classList.remove("body_theme3"),c.classList.add("h1_theme2"),c.classList.remove("h1_theme1"),c.classList.remove("h1_theme3"),m.classList.add("theme2"),m.classList.remove("theme1"),m.classList.remove("theme3"),i.classList.add("toggle_theme2"),i.classList.remove("toggle_theme1"),i.classList.remove("toggle_theme3"),o.classList.add("point_theme2"),o.classList.remove("point_theme1"),o.classList.remove("point_theme3"),r.classList.add("calc-display_theme2"),r.classList.remove("calc-display_theme1"),r.classList.remove("calc-display_theme3"),d.classList.add("display-input_theme2"),d.classList.remove("display-input_theme1"),d.classList.remove("display-input_theme3"),n.classList.add("grid-buttons_theme2"),n.classList.remove("grid-buttons_theme1"),n.classList.remove("grid-buttons_theme3"),u.classList.add("equal_theme2"),u.classList.remove("equal_theme1"),u.classList.remove("equal_theme3"),L.classList.add("reset_theme2"),L.classList.remove("reset_theme1"),L.classList.remove("reset_theme3"),_.classList.add("del_theme2"),_.classList.remove("del_theme1"),_.classList.remove("del_theme3");for(let e=0;e<h.length;e++)"del"!=h[e].attributes[0].value&&"Enter"!=h[e].attributes[0].value&&"Backspace"!=h[e].attributes[0].value&&(h[e].classList.add("btn_theme2"),h[e].classList.remove("btn_theme1"),h[e].classList.remove("btn_theme3"))}()):(o.style="transform: translateX(0px)",function(){document.body.classList.add("body_theme1"),document.body.classList.remove("body_theme2"),document.body.classList.remove("body_theme3"),c.classList.add("h1_theme1"),c.classList.remove("h1_theme2"),c.classList.remove("h1_theme3"),m.classList.add("theme1"),m.classList.remove("theme2"),m.classList.remove("theme3"),i.classList.add("toggle_theme1"),i.classList.remove("toggle_theme2"),i.classList.remove("toggle_theme3"),o.classList.add("point_theme1"),o.classList.remove("point_theme2"),o.classList.remove("point_theme3"),r.classList.add("calc-display_theme1"),r.classList.remove("calc-display_theme2"),r.classList.remove("calc-display_theme3"),d.classList.add("display-input_theme1"),d.classList.remove("display-input_theme2"),d.classList.remove("display-input_theme3"),n.classList.add("grid-buttons_theme1"),n.classList.remove("grid-buttons_theme2"),n.classList.remove("grid-buttons_theme3"),u.classList.add("equal_theme1"),u.classList.remove("equal_theme2"),u.classList.remove("equal_theme3"),L.classList.add("reset_theme1"),L.classList.remove("reset_theme2"),L.classList.remove("reset_theme3"),_.classList.add("del_theme1"),_.classList.remove("del_theme2"),_.classList.remove("del_theme3");for(let e=0;e<h.length;e++)"del"!=h[e].attributes[0].value&&"Enter"!=h[e].attributes[0].value&&"Backspace"!=h[e].attributes[0].value&&(h[e].classList.add("btn_theme1"),h[e].classList.remove("btn_theme2"),h[e].classList.remove("btn_theme3"))}())}))})();