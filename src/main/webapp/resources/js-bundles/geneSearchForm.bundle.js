var geneSearchForm=(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[6],{117:function(e,t,n){"use strict";var r;function a(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  background-image: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='32' height='24' viewBox='0 0 32 24'><polygon points='0,0 32,0 16,24' style='fill: rgb%28138, 138, 138%29'></polygon></svg>\");\n  background-origin: content-box;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 9px 6px;\n  width: 1.5rem;\n  height: 1rem;\n"]);return a=function(){return e},e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={styles:{control:function(e,t){return{minHeight:"2.4375rem",margin:"0 0 1rem",padding:"0",appearance:"none",border:t.isFocused?"1px solid #8a8a8a":"1px solid #777",borderRadius:"0",backgroundColor:t.isDisabled?"#e6e6e6":"#fefefe",fontFamily:"inherit",fontSize:"1rem",fontWeight:"normal",lineHeight:"1.5",color:"#0a0a0a",transition:"box-shadow 0.5s, border-color 0.25s ease-in-out",outline:t.isFocused?"none":"inherit",boxShadow:t.isFocused?"0 0 5px #777":"none",cursor:t.isDisabled?"not-allowed":"default",display:"flex"}},multiValueLabel:function(e,t){return u({},e,{whiteSpace:"pre-line"})},menu:function(e,t){return u({},e,{borderRadius:"0",padding:"0"})}},DropdownIndicator:((r=n(5))&&r.__esModule?r:{default:r}).default.span(a())};t.default=i},256:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}}),t.render=void 0;var r=u(n(0)),a=u(n(6)),o=u(n(257));function u(e){return e&&e.__esModule?e:{default:e}}t.render=function(e,t){a.default.render(r.default.createElement(o.default,e),document.getElementById(t))}},257:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(0)),a=u(n(7)),o=u(n(258));function u(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t,n,r,a,o,u){try{var l=e[o](u),i=l.value}catch(e){return void n(e)}l.done?t(i):Promise.resolve(i).then(r,a)}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=f(this,p(t).call(this,e))).state={data:null,loading:!0,error:null},n}var n,u,l,m,b;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),n=t,(u=[{key:"render",value:function(){var e=this.state,t=e.data,n=e.loading,a=e.error;return a?r.default.createElement(o.default,s({},t,this.props,{speciesSelectStatusMessage:"".concat(a.name,": ").concat(a.message)})):n?r.default.createElement(o.default,s({},t,this.props,{speciesSelectStatusMessage:"Fetching species…"})):r.default.createElement(o.default,s({},t,this.props))}},{key:"componentDidMount",value:(m=regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),t=(0,a.default)(this.props.speciesEndpoint,this.props.atlasUrl).toString(),e.prev=2,e.next=5,fetch(t);case 5:if((n=e.sent).ok){e.next=8;break}throw new Error("".concat(t," => ").concat(n.status));case 8:return e.t0=this,e.next=11,n.json();case 11:e.t1=e.sent,e.t2={data:e.t1,loading:!1,error:null},e.t0.setState.call(e.t0,e.t2),e.next=19;break;case 16:e.prev=16,e.t3=e.catch(2),this.setState({data:null,loading:!1,error:{description:"There was a problem communicating with the server. Please try again later.",name:e.t3.name,message:e.t3.message}});case 19:case"end":return e.stop()}}),e,this,[[2,16]])})),b=function(){var e=this,t=arguments;return new Promise((function(n,r){var a=m.apply(e,t);function o(e){i(a,n,r,o,u,"next",e)}function u(e){i(a,n,r,o,u,"throw",e)}o(void 0)}))},function(){return b.apply(this,arguments)})},{key:"componentDidCatch",value:function(e,t){this.setState({error:{description:"There was a problem rendering this component.",name:e.name,message:"".concat(e.message," – ").concat(t)}})}}])&&c(n.prototype,u),l&&c(n,l),t}(r.default.Component);m.propTypes=o.default.propTypes,m.defaultProps=o.default.defaultProps;var b=m;t.default=b},258:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(n(0)),a=s(n(1)),o=s(n(7)),u=s(n(259)),l=s(n(260)),i=s(n(261));function s(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e){function t(e){var n,r,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,n=!(a=p(t).call(this,e))||"object"!==c(a)&&"function"!=typeof a?d(r):a;var o=e.defaultValue.term&&e.defaultValue.term.trim()?{term:e.defaultValue.term.trim(),category:e.defaultValue.category&&e.defaultValue.category.trim()?e.defaultValue.category:"q"}:{};return n.state={query:o,selectedSpecies:e.defaultSpecies},n.speciesSelectOnChange=n._speciesSelectOnChange.bind(d(n)),n.autocompleteOnChange=n._autocompleteOnChange.bind(d(n)),n}var n,a,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),n=t,(a=[{key:"_autocompleteOnChange",value:function(e){this.setState({query:e?JSON.parse(e.value):{}})}},{key:"_speciesSelectOnChange",value:function(e){this.setState({selectedSpecies:e.value})}},{key:"render",value:function(){var e=this,t=this.props,n=t.wrapperClassName,a=t.actionEndpoint,s=t.onSubmit,c=t.searchExamples,f=this.props,p=f.autocompleteClassName,d=f.atlasUrl,m=f.suggesterEndpoint,b=f.defaultValue,y=f.autocompleteLabel,g=this.props,h=g.enableSpeciesSelect,v=g.speciesSelectClassName,S=g.speciesSelectStatusMessage,O=this.props,w=O.allSpecies,_=O.topSpecies;return r.default.createElement("form",{action:(0,o.default)(a,d).toString(),method:"post"},r.default.createElement("div",{className:n},r.default.createElement("div",{className:p},r.default.createElement(u.default,{atlasUrl:d,suggesterEndpoint:m,onChange:this.autocompleteOnChange,selectedSpecies:this.state.selectedSpecies,allSpecies:w,defaultValue:b,labelText:y})),h&&r.default.createElement("div",{className:v},r.default.createElement(l.default,{name:"species",topGroup:_,bottomGroup:w,bottomGroupLabel:"All species",statusMessage:S,value:this.state.selectedSpecies,onChange:this.speciesSelectOnChange})),c&&r.default.createElement("div",{className:"small-12 columns"},r.default.createElement(i.default,{links:c}))),r.default.createElement("div",{className:n},r.default.createElement("div",{className:"small-12 columns"},r.default.createElement("button",{type:"Submit",className:"button",disabled:!this.state.query.term||""===this.state.query.term.trim(),onClick:s?function(t){s(t,e.state.query,e.state.selectedSpecies)}:null},"Search"))))}}])&&f(n.prototype,a),s&&f(n,s),t}(r.default.Component);b.propTypes={atlasUrl:a.default.string.isRequired,actionEndpoint:a.default.string.isRequired,onSubmit:a.default.func,wrapperClassName:a.default.string,autocompleteLabel:a.default.string,autocompleteClassName:a.default.string,suggesterEndpoint:a.default.string.isRequired,defaultValue:a.default.shape({term:a.default.string,category:a.default.string}),enableSpeciesSelect:a.default.bool,speciesSelectClassName:a.default.string,allSpecies:a.default.arrayOf(a.default.string),topSpecies:a.default.arrayOf(a.default.string),defaultSpecies:a.default.string,speciesSelectStatusMessage:a.default.string,searchExamples:a.default.arrayOf(a.default.shape({text:a.default.string.isRequired,url:a.default.string.isRequired}))},b.defaultProps={autocompleteLabel:"Gene ID or gene symbol",wrapperClassName:"",autocompleteClassName:"",defaultValue:{},enableSpeciesSelect:!1,speciesSelectClassName:"",allSpecies:[],topSpecies:[]};var y=b;t.default=y},259:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(0)),a=i(n(1)),o=i(n(7)),u=i(n(146)),l=i(n(117));function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t,n,r,a,o,u){try{var l=e[o](u),i=l.value}catch(e){return void n(e)}l.done?t(i):Promise.resolve(i).then(r,a)}var c=function(e,t,n,r){return function(){var a,u=(a=regeneratorRuntime.mark((function a(u){var l,i;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return l=(0,o.default)(t,e).search({query:u,species:n||r.join(",")}).toString(),a.next=3,fetch(l);case 3:if(!(i=a.sent).ok){a.next=8;break}return a.next=7,i.json();case 7:return a.abrupt("return",a.sent);case 8:throw new Error("".concat(l," => ").concat(i.status));case 9:case"end":return a.stop()}}),a)})),function(){var e=this,t=arguments;return new Promise((function(n,r){var o=a.apply(e,t);function u(e){s(o,n,r,u,l,"next",e)}function l(e){s(o,n,r,u,l,"throw",e)}u(void 0)}))});return function(e){return u.apply(this,arguments)}}()},f=function(e){var t=e.atlasUrl,n=e.suggesterEndpoint,a=e.selectedSpecies,o=e.allSpecies,i=e.onChange,s=e.defaultValue,f=e.labelText,p=s.term&&s.term.trim()?{label:s.term.trim(),value:s.category&&s.category.trim()?JSON.stringify(s):JSON.stringify({term:s.term.trim(),category:"q"})}:null;return r.default.createElement("div",null,f&&r.default.createElement("label",{htmlFor:"geneQuery"},f),r.default.createElement(u.default,{name:"geneQuery",components:{DropdownIndicator:null,IndicatorSeparator:null},styles:l.default.styles,inputId:"gene-input",onChange:i,loadOptions:c(t,n,a,o),noOptionsMessage:function(){return null},allowCreateWhileLoading:!0,isClearable:!0,createOptionPosition:"first",formatCreateLabel:function(e){return e},isValidNewOption:function(e){return""!==e.trim()},getNewOptionData:function(e){return{label:e,value:JSON.stringify({term:e,category:"q"})}},placeholder:"",defaultValue:p}))};f.propTypes={atlasUrl:a.default.string.isRequired,suggesterEndpoint:a.default.string.isRequired,selectedSpecies:a.default.string,allSpecies:a.default.arrayOf(a.default.string),onChange:a.default.func.isRequired,defaultValue:a.default.shape({term:a.default.string,category:a.default.string}),labelText:a.default.string.isRequired},f.defaultProps={allSpecies:[],defaultValue:{}};var p=f;t.default=p},260:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(0)),a=l(n(1)),o=l(n(41)),u=l(n(117));function l(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e,t,n){return n.indexOf(e)===t},m=function(e){return""===e?{value:"",label:"Any"}:{value:e.trim(),label:e.trim()}},b=function(e){function t(e){var n,r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(a=c(t).call(this,e))||"object"!==i(a)&&"function"!=typeof a?f(r):a).state={value:e.value},n.onChange=n._onChange.bind(f(n)),n}var n,a,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),n=t,(a=[{key:"_onChange",value:function(e){this.setState({value:e.value}),this.props.onChange(e)}},{key:"render",value:function(){var e=this,t=this.props,n=t.name,a=t.topGroup,l=t.bottomGroup,i=t.bottomGroupLabel,s=(t.onChange,t.statusMessage),c=Boolean(s),f=a.filter(d).map(m),p={label:i,options:[""].concat(l).filter(d).sort().map(m)},b=f.concat(p.options).find((function(t){return t.value===e.state.value}))||p.options[0],y=n.charAt(0).toUpperCase()+n.slice(1);return r.default.createElement("div",null,r.default.createElement("label",{htmlFor:n},y),r.default.createElement(o.default,{name:n,components:{IndicatorSeparator:null,DropdownIndicator:u.default.DropdownIndicator},styles:u.default.styles,inputId:"".concat(n,"-input"),isSearchable:!1,onChange:this.onChange,options:f.concat(p),isDisabled:c,placeholder:c?s:null,value:c?null:b}))}}])&&s(n.prototype,a),l&&s(n,l),t}(r.default.Component);b.propTypes={name:a.default.string,topGroup:a.default.arrayOf(a.default.string),bottomGroup:a.default.arrayOf(a.default.string),bottomGroupLabel:a.default.string,value:a.default.string,onChange:a.default.func.isRequired,statusMessage:a.default.string},b.defaultProps={name:"Select",topGroup:[],bottomGroup:[],bottomGroupLabel:"All",statusMessage:null};var y=b;t.default=y},261:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(0)),a=o(n(1));function o(e){return e&&e.__esModule?e:{default:e}}var u=function(e){var t=e.links;return r.default.createElement("p",{style:{fontSize:"smaller"}},"Examples:",t.map((function(e,n){return r.default.createElement("span",{key:n},0===n&&" ",r.default.createElement("a",{href:e.url},e.text),n<t.length-1&&", ")})))};u.propTypes={links:a.default.arrayOf(a.default.shape({text:a.default.string.isRequired,url:a.default.string.isRequired})).isRequired};var l=u;t.default=l}},[[256,0]]]);