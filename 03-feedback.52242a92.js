function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,s=u||l||Function("return this")(),c=Object.prototype.toString,m=Math.max,d=Math.min,v=function(){return s.Date.now()};function g(e,t,n){var i,r,o,a,f,u,l=0,s=!1,c=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,o=r;return i=r=void 0,l=t,a=e.apply(o,n)}function j(e){return l=e,f=setTimeout(w,t),s?y(e):a}function h(e){var n=e-u;return void 0===u||n>=t||n<0||c&&e-l>=o}function w(){var e=v();if(h(e))return O(e);f=setTimeout(w,function(e){var n=t-(e-u);return c?d(n,o-(e-l)):n}(e))}function O(e){return f=void 0,g&&i?y(e):(i=r=void 0,a)}function T(){var e=v(),n=h(e);if(i=arguments,r=this,u=e,n){if(void 0===f)return j(u);if(c)return f=setTimeout(w,t),y(u)}return void 0===f&&(f=setTimeout(w,t)),a}return t=b(t)||0,p(n)&&(s=!!n.leading,o=(c="maxWait"in n)?m(b(n.maxWait)||0,t):o,g="trailing"in n?!!n.trailing:g),T.cancel=function(){void 0!==f&&clearTimeout(f),l=0,i=u=r=f=void 0},T.flush=function(){return void 0===f?a:O(v())},T}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=o.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:i,maxWait:t,trailing:r})};const y=document.querySelector(".feedback-form"),j=JSON.parse(localStorage.getItem("feedback-form-state")),h={email:"",message:""};null!==j&&j&&(y.elements.email.value=j.email,y.elements.message.value=j.message),y.addEventListener("input",e(t)((function(e){const t=e.target.value;"email"===e.target.name?(h.email=t,h.message=j?j.message:""):(h.message=t,h.email=j?j.email:"");n=h,localStorage.setItem("feedback-form-state",JSON.stringify(n));var n}),500)),y.addEventListener("submit",(function(e){if(e.preventDefault(),y.elements.email.value||""!==y.elements.message.value)return localStorage.removeItem("feedback-form-state"),void e.target.reset();alert("Заполните все поля!"),console.log("test")}));
//# sourceMappingURL=03-feedback.52242a92.js.map