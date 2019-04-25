App.loadBundle("fwp0yhlk",["exports"],function(e){var t=window.App.h,n=function(){function e(){}return e.prototype.comparePatterns=function(e,t){for(var n=0;n<e.length;n++)if(e[n]!=t[n])return!1;return!0},e.prototype.createNewStep=function(){return Math.ceil(4*Math.random())},e}(),r=function(){function e(){}return e.prototype.gamepadTouched=function(e){var t=this;this.userProposal.push(e.detail),this.game.comparePatterns(this.userProposal,this.animationPattern)?this.userProposal.length==this.animationPattern.length&&setTimeout(function(){t.animationPattern=t.animationPattern.concat([t.game.createNewStep()]),t.userProposal=[]},500):this.history.replace("/gameover/"+(this.animationPattern.length-1),{})},e.prototype.componentWillLoad=function(){this.game=new n,this.userProposal=[],this.animationPattern=[this.game.createNewStep()]},e.prototype.render=function(){return t("main",null,t("sn-gameboard",{animationPattern:this.animationPattern}))},Object.defineProperty(e,"is",{get:function(){return"sn-game"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{animationPattern:{state:!0},history:{type:"Any",attr:"history"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"gamepadTouched",method:"gamepadTouched"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return""},enumerable:!0,configurable:!0}),e}(),a=function(){function e(){this.step=0}return Object.defineProperty(e.prototype,"heading",{get:function(){return this.isPlaying?"Memorize the pattern":"Replay the pattern"},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isPlaying",{get:function(){return this.step<this.animationPattern.length},enumerable:!0,configurable:!0}),e.prototype.animationPatternChanged=function(){this.step=0},e.prototype.blinkFinished=function(){this.step+=1},e.prototype.render=function(){for(var e=this,n=[],r=function(r){var i={gamepad:!0};i["gamepad-"+r]=!0,i.blink=a.animationPattern[a.step]==r,n.push(t("button",a.isPlaying?{class:i}:{onClick:function(){return e.gamepadTouched.emit(r)},class:i}))},a=this,i=1;i<=4;i++)r(i);return[t("h2",null,this.heading),t("div",{class:"gameboard"},n)]},Object.defineProperty(e,"is",{get:function(){return"sn-gameboard"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{animationPattern:{type:"Any",attr:"animation-pattern",watchCallbacks:["animationPatternChanged"]},step:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"gamepadTouched",method:"gamepadTouched",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"animationiteration",method:"blinkFinished"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".gameboard{display:grid;width:100vw;height:80vw;grid-template-columns:40% 40%;grid-template-rows:auto;grid-gap:10px 10px;-ms-flex-pack:center;justify-content:center}.gamepad{border-radius:20%;border:0}.gamepad:active,.gamepad:focus{outline:none}.gamepad:active{opacity:.4}.gamepad-1{border-top-left-radius:75%;background:#ff0}.gamepad-2{border-top-right-radius:75%;background:red}.gamepad-3{border-bottom-left-radius:75%;background:green}.gamepad-4{border-bottom-right-radius:75%;background:#00f}.blink{-webkit-animation-name:blink;animation-name:blink;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}\@-webkit-keyframes blink{0%{opacity:1}25%{opacity:.4}50%{opacity:1}}\@keyframes blink{0%{opacity:1}25%{opacity:.4}50%{opacity:1}}"},enumerable:!0,configurable:!0}),e}();e.SnGame=r,e.SnGameboard=a,Object.defineProperty(e,"__esModule",{value:!0})});