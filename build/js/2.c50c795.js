(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"/qA8":function(e,t,n){var a=n("LboF"),o=n("7Oky");"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};a(o,i);e.exports=o.locals||{}},"7Oky":function(e,t,n){(t=n("JPst")(!1)).push([e.i,".g6-tooltip{position:fixed;top:0;left:0;font-size:12px;color:#545454;-webkit-border-radius:4px;border-radius:4px;border:1px solid #e2e2e2;background-color:rgba(255,255,255,0.9);-webkit-box-shadow:#aeaeae 0 0 10px;box-shadow:#aeaeae 0 0 10px;padding:10px 8px}\n",""]),e.exports=t},CncF:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"root"},[n("div",{class:{hidden:e.headVisible},attrs:{id:"headPanel"}},[n("span",{staticClass:"logo"},[e._v("Vue 生命周期图示")]),e._v(" "),n("i",{staticClass:"gb-toggle-btn",on:{click:function(t){e.headVisible=!e.headVisible}}})]),e._v(" "),n("item-panel",{attrs:{graph:e.graph},on:{"canvas-add-node":e.addNode}}),e._v(" "),n("div",{attrs:{id:"toolbar"}},[n("i",{staticClass:"iconfont icon-undo",on:{click:e.addNode}}),e._v(" "),n("i",{staticClass:"iconfont icon-redo",on:{click:e.addNode}}),e._v(" "),n("i",{staticClass:"split"}),e._v(" "),n("i",{staticClass:"iconfont icon-copy",on:{click:e.copyNode}}),e._v(" "),n("i",{staticClass:"iconfont icon-paste",on:{click:e.addNode}}),e._v(" "),n("i",{staticClass:"split"}),e._v(" "),n("i",{staticClass:"iconfont icon-line-style",on:{click:e.addNode}}),e._v(" "),n("i",{staticClass:"iconfont icon-line-strong",on:{click:e.addNode}}),e._v(" "),n("i",{staticClass:"split"}),e._v(" "),n("i",{staticClass:"iconfont icon-toup",on:{click:e.addNode}}),e._v(" "),n("i",{staticClass:"iconfont icon-todown",on:{click:e.addNode}}),e._v(" "),n("i",{staticClass:"split"}),e._v(" "),n("i",{staticClass:"iconfont icon-font-size",on:{click:e.addNode}}),e._v(" "),n("i",{staticClass:"iconfont icon-actual-size",on:{click:e.addNode}}),e._v(" "),n("i",{staticClass:"iconfont icon-full-screen",on:{click:e.addNode}})]),e._v(" "),n("div",{attrs:{id:"canvasPanel"},on:{dragover:function(e){e.preventDefault()}}}),e._v(" "),n("div",{class:{hidden:!e.configVisible},attrs:{id:"configPanel"}},[n("h2",{staticClass:"panel-title"},[e._v("数据配置")]),e._v(" "),n("i",{staticClass:"gb-toggle-btn",on:{click:function(t){e.configVisible=!e.configVisible}}}),e._v(" "),n("div",{staticClass:"config-data"},[e._v("\n      "+e._s(e.config)+"\n    ")])]),e._v(" "),e.tooltip?n("div",{staticClass:"g6-tooltip",style:"top: "+e.top+"px; left: "+e.left+"px;"},[e._v("\n    label: "+e._s(e.tooltip)+"\n  ")]):e._e()],1)};a._withStripped=!0;var o=n("0iUn"),i=n("sLSF"),r=n("fD4D"),s=(n("rGqo"),n("8+KV"),n("HAE/"),n("WLL4"),n("jm62"),n("0l/t"),n("RW0V"),n("vYYK"));function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l=function(e){!function(e){e.registerBehavior("canvas-event",{getEvents:function(){return{"canvas:mousemove":"onCanvasMouseMove","canvas:mousedown":"onCanvasMouseDown","canvas:mouseup":"onCanvasMouseUp","canvas:dragend":"onCanvasDragEnd"}},onCanvasMouseMove:function(e){e.target.get("el").style.cursor="grab"},onCanvasMouseDown:function(e){e.target.get("el").style.cursor="grabbing"},onCanvasMouseUp:function(e){e.target.get("el").style.cursor="grab"},onCanvasDragEnd:function(e){e.target.get("el").style.cursor="grab"}})}(e),function(e){e.registerBehavior("select-node",{getDefaultCfg:function(){return{multiple:!1}},getEvents:function(){return{"node:click":"onNodeClick","node:dblclick":"ondblClick","canvas:click":"onCanvasClick","node:mouseenter":"onNodeMouseEnter","node:mousemove":"onNodeMouseMove","node:mouseleave":"onNodeMouseLeave"}},onNodeClick:function(e){this._clearSelected(),e.item.toFront(),this.graph.setItemState(e.item,"nodeState","selected"),this.graph.emit("after-node-selected",e)},ondblClick:function(e){this._clearSelected(),e.item.toFront(),this.graph.setItemState(e.item,"nodeState","selected"),this.graph.emit("after-node-dblclick",e)},onCanvasClick:function(e){this._clearSelected(),this.graph.emit("on-canvas-click",e)},onNodeMouseEnter:function(e){e.item.hasState("nodeState:selected")||this.graph.setItemState(e.item,"nodeState","hover"),this.graph.emit("on-node-mouseenter",e)},onNodeMouseMove:function(e){this.graph.emit("on-node-mousemove",e)},onNodeMouseLeave:function(e){e.item.hasState("nodeState:selected")||this.graph.clearItemStates(e.item,"nodeState:hover"),this.graph.emit("on-node-mouseleave",e)},_clearSelected:function(){var e=this;this.graph.findAllByState("node","nodeState:selected").forEach((function(t){e.graph.clearItemStates(t,["nodeState:selected","nodeState:hover"])})),this.graph.findAllByState("edge","edgeState:selected").forEach((function(t){e.graph.clearItemStates(t,["edgeState:selected","edgeState:hover"])})),this.graph.emit("after-node-selected")}})}(e),function(e){e.registerBehavior("delete-item",{getEvents:function(){return{keydown:"onKeydown"}},onKeydown:function(e){var t=this.graph;if("true"===t.cfg.canvas.cfg.el.getAttribute("isFocused")&&8===e.keyCode){var n=t.findAllByState("node","nodeState:selected");if(n&&n.length){var a=n[0].getContainer().get("item");t.emit("before-node-removed",{target:a,callback:function(e){e&&(t.remove(a),t.set("after-node-selected",[]),t.emit("after-node-selected"),t.emit("after-node-removed",a))}})}var o=t.findAllByState("edge","edgeState:selected");if(o&&o.length){var i=o[0].getContainer().get("item");t.emit("before-node-removed",{target:i,callback:function(e){e&&(t.remove(i),t.set("after-edge-selected",[]),t.emit("after-edge-selected"),t.emit("after-edge-removed",i))}})}}}})}(e),function(e){e.registerBehavior("active-edge",{getDefaultCfg:function(){return{editMode:!1}},getEvents:function(){return{"canvas:click":"onCanvasClick","edge:click":"onEdgeClick","edge:dblclick":"ondblEdgeClick","edge:mouseenter":"onMouseEnter","edge:mousemove":"onMouseMove","edge:mouseleave":"onMouseLeave"}},onCanvasClick:function(e){this.editMode=!1,this._clearSelected()},onEdgeClick:function(e){this._clearSelected(),this.editMode=!0,this.graph.setItemState(e.item.get("id"),"edgeState","selected"),this.graph.emit("after-edge-selected",e)},ondblEdgeClick:function(e){this._clearSelected(),this.editMode=!0,this.graph.setItemState(e.item,"edgeState","selected"),this.graph.emit("after-edge-dblclick",e)},onMouseEnter:function(e){this.editMode||this.graph.setItemState(e.item,"edgeState","hover"),this.graph.emit("on-edge-mouseenter",e)},onMouseMove:function(e){this.editMode||this.graph.setItemState(e.item,"edgeState","hover"),this.graph.emit("on-edge-mousemove",e)},onMouseLeave:function(e){this.editMode||this.graph.setItemState(e.item,"edgeState","default"),this.graph.emit("on-edge-mouseleave",e)},_clearSelected:function(){var e=this;this.graph.findAllByState("node","nodeState:selected").forEach((function(t){e.graph.clearItemStates(t,["nodeState:selected"])})),this.graph.findAllByState("edge","edgeState:selected").forEach((function(t){e.graph.clearItemStates(t,["edgeState:selected"])})),this.graph.emit("after-edge-selected")}})}(e),function(e){e.registerBehavior("hover-node",{getEvents:function(){return{"node:mouseenter":"onNodeEnter","node:mouseleave":"onNodeLeave"}},onNodeEnter:function(e){this.graph.setItemState(e.item,"anchorShow",!0)},onNodeLeave:function(e){this.graph.setItemState(e.item,"anchorShow",!1)}})}(e),function(e){e.registerBehavior("drag-node",{getDefaultCfg:function(){return{dragTarget:"node",dragStartNode:{},distance:[]}},getEvents:function(){return{"node:mousedown":"onMousedown","node:mouseup":"onMouseup","node:dragstart":"onDragStart","node:drag":"onDrag","node:dragend":"onDragEnd","node:dragenter":"onDragEnter","node:drop":"onDrop"}},onMousedown:function(e){var t=this;(this._clearSelected(e),e.target.cfg.isAnchor)&&(this.dragTarget="anchor",this.dragStartNode=d({},e.item._cfg,{anchorIndex:e.target.cfg.index}),this.graph.findAll("node",(function(e){return e})).forEach((function(e){t.graph.setItemState(e,"anchorActived",!0)})));this.graph.emit("on-node-mousedown",e)},onMouseup:function(e){"anchor"===this.dragTarget&&this.graph.findAll("node",(function(e){return e})).forEach((function(e){e.clearStates("anchorActived")}));this.graph.emit("on-node-mouseup",e)},onDragStart:function(e){e.target.cfg.isAnchor||(e.item.toFront(),this.dragTarget="node",this._nodeOnDragStart(e,e.item.getContainer())),this.graph.emit("on-node-dragstart",e)},onDrag:function(e){"node"===this.dragTarget&&this._nodeOnDrag(e,e.item.getContainer()),this.graph.emit("on-node-drag",e)},onDragEnd:function(e){var t=e.item.getContainer();"anchor"===this.dragTarget?this.graph.findAll("node",(function(e){return e})).forEach((function(e){e.clearStates("anchorActived")})):"node"===this.dragTarget&&this._nodeOnDragEnd(e,t);this.graph.emit("on-node-dragend",e)},onDrop:function(e){this.dragStartNode.id&&e.target.cfg.isAnchor&&this.dragStartNode.id!==e.target.cfg.nodeId&&this.graph.emit("before-edge-add",{source:this.dragStartNode.group.get("item"),target:e.item.getContainer().get("item"),sourceAnchor:this.dragStartNode.anchorIndex,targetAnchor:e.target.cfg.index}),this.graph.emit("on-node-drop",e)},_nodeOnDragStart:function(e,t){var n=t.get("item"),a=n.get("originStyle").radius,o=n.get("currentShape"),i=n.getBBox(),r=i.width,s=i.height,c=i.centerX,l=i.centerY,h=n.get("shapeFactory")[o].shapeType,g={fillOpacity:.1,fill:"rgb(24, 144, 255, 1)",stroke:"#1890FF",cursor:"move",lineDash:[4,4],width:r,height:s};switch(h){case"circle":this.distance=[e.x-c,e.y-l],g=d({},g,{x:0,y:0,r:r/2});break;case"rect":this.distance=[e.x-c+r/2,e.y-l+s/2],g=d({},g,{x:-r/2,y:-s/2,r:r/2}),a&&(g.radius=a);break;case"ellipse":this.distance=[e.x-c,e.y-l],g=d({},g,{x:0,y:0,rx:r/2,ry:s/2});break;case"path":this.distance=[e.x-c,e.y-l],g.path=n.get("keyShape").attrs.path,g.size=[r,s],g.x=0,g.y=0}t.addShape(h,{attrs:g,className:"shadow-node"}).toFront()},_nodeOnDrag:function(e,t){var n=t.get("item"),a=n.getBBox(),o=a.width,i=a.height,r=a.centerX,s=a.centerY,c=n.get("currentShape"),d=n.get("shapeFactory")[c].shapeType,l=t.getItem("shadow-node");if("path"===d){var h=e.x-r-this.distance[0],g=e.y-s-this.distance[1];l.attr({path:[["M",h,g-i/2],["L",h+o/2,g],["L",h,g+i/2],["L",h-o/2,g],["Z"]]})}else l.attr({x:e.x-r-this.distance[0],y:e.y-s-this.distance[1]});l.toFront()},_nodeOnDragEnd:function(e,t){var n=t.get("item"),a=n.getBBox(),o=a.width,i=a.height,r=t.getItem("shadow-node"),s=n.get("currentShape"),c={x:0,y:0};switch(n.get("shapeFactory")[s].shapeType){case"ellipse":case"circle":c.x=e.x-this.distance[0],c.y=e.y-this.distance[1];break;case"rect":c.x=e.x-this.distance[0]+o/2,c.y=e.y-this.distance[1]+i/2;break;case"path":c.x=e.x-this.distance[0],c.y=e.y-this.distance[1]}r.remove(),n.updatePosition(c),this.graph.refreshPositions()},_clearSelected:function(e){var t=this;this.graph.findAllByState("edge","edgeState:selected").forEach((function(e){t.graph.clearItemStates(e,["edgeState:selected","edgeState:hover"])}))}})}(e)},h=(n("f3/d"),n("Z2Ku"),n("dRSK"),{fill:"#E7F7FE",stroke:"#1890FF",lineWidth:1}),g={"nodeState:default":{fill:"#E7F7FE"},"nodeState:hover":{cursor:"pointer",shadowOffsetX:0,shadowOffsetY:4,shadowBlur:10,opacity:.8},"nodeState:selected":{stroke:"#1890FF",cursor:"default"}},u={cursor:"default",fill:"#666",textAlign:"center",textBaseline:"middle",fontSize:12},f={width:20,height:20,left:0,top:0},p={radius:11,fill:"#1890FF",fillOpacity:.25},v={r:4,fill:"#fff",stroke:"#1890FF",lineWidth:1},m=p;function y(e,t,n,a){e.attr(t),n&&n.attr(a)}function S(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"hover",a=t.get("item"),o=a.getModel(),i=a.get("originStyle"),r=Object.assign(i,o.edgeStateStyles),s=r["".concat(e,"State:").concat(n)],c=r["".concat(e,"State:default")];return{activeStyle:s,defaultStyle:c,originStyle:i}}var b={anchorShow:function(e,t){e?t.showAnchor(t):t.clearAnchor(t)},anchorActived:function(e,t){if(e){var n=t.get("item").getModel().anchorPoints;t.showAnchor(t),this.getAnchorPoints({anchorPoints:n}).forEach((function(e,n){var a=t.get("children")[0].getBBox(),o=t.addShape("circle",{attrs:{x:a.minX+a.width*e[0],y:a.minY+a.height*e[1],r:m.radius,fill:"#1890ff",opacity:.5},nodeId:t.get("item").get("id"),className:"node-anchor-bg",draggable:!0,isAnchor:!0,index:n});t.anchorShapes.push(o)})),t.anchorShapes.filter((function(e){"node-anchor"===e.get("className")&&e.toFront(),"node-anchor-group"===e.get("className")&&(e.attr({r:m.radius+2}),e.toFront())}))}else t.clearAnchor(t)},nodeState:function(e,t){b["nodeState:".concat(e)].call(this,e,t)},"nodeState:default":function(e,t){e&&y(t.getChildByIndex(0),S("node",t).defaultStyle)},"nodeState:selected":function(e,t){var n=t.getChildByIndex(0),a=S("node",t,"selected"),o=a.activeStyle,i=a.defaultStyle;y(n,e?o:i)},"nodeState:hover":function(e,t){var n=t.getChildByIndex(0),a=S("node",t,"hover"),o=a.activeStyle,i=a.defaultStyle;y(n,e?o:i)},edgeState:function(e,t){b["edgeState:".concat(e)].call(this,e,t)},"edgeState:default":function(e,t){if(e){var n=S("edge",t).defaultStyle;y(t.getChildByIndex(0),n)}},"edgeState:hover":function(e,t){var n=t.getChildByIndex(0),a=n.get("attrs").endArrow,o=S("edge",t,"hover"),i=o.activeStyle,r=o.defaultStyle,s=o.originStyle;e?(y(n,i),a&&n.attr("endArrow",{path:a.path,fill:i.stroke||s.stroke})):(y(n,r),a&&n.attr("endArrow",{path:a.path,fill:r.stroke||i.stroke||s.stroke}))},"edgeState:selected":function(e,t){var n=t.getChildByIndex(0),a=n.get("attrs").endArrow,o=S("edge",t,"selected"),i=o.activeStyle,r=o.defaultStyle,s=o.originStyle;e?(y(n,i),a&&n.attr("endArrow",{path:a.path,fill:i.stroke||s.stroke})):(y(n,r),a&&n.attr("endArrow",{path:a.path,fill:r.stroke||i.stroke||s.stroke}))}},w=b,k=n("dfwq"),C=[],O=null;function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _=g,E=p,M=function(e){e.registerNode("base-node",{drawIcon:function(e,t){this.options.icon&&(t.icon=t.addShape("image",{attrs:{img:this.options.icon,x:this.options.iconStyles.left,y:this.options.iconStyles.top,width:this.options.iconStyles.width,height:this.options.iconStyles.height},className:"".concat(this.options.type,"-icon")}),e.hideIcon&&t.icon.hide())},initAnchor:function(e,t){var n=this;t.anchorShapes=[],t.showAnchor=function(t){n.drawAnchor(e,t)},t.clearAnchor=function(e){e.anchorShapes&&e.anchorShapes.forEach((function(e){return e.remove()})),e.anchorShapes=[]}},drawAnchor:function(e,t){var n=this.options.anchorPointStyles,a=t.get("children")[0].getBBox();this.getAnchorPoints(e).forEach((function(e,o){var i=t.addShape("circle",{attrs:A({x:a.minX+a.width*e[0],y:a.minY+a.height*e[1]},n),nodeId:t.get("id"),className:"node-anchor",draggable:!0,isAnchor:!0,index:o}),r=t.addShape("circle",{attrs:{x:a.minX+a.width*e[0],y:a.minY+a.height*e[1],r:E.radius,fill:"#000",opacity:0},nodeId:t.get("id"),className:"node-anchor-group",draggable:!0,isAnchor:!0,index:o});!function(e,t,n){e.on("mouseenter",(function(){e.attr({cursor:"crosshair"})})),e.on("dragstart",(function(a){if(null==O){var o=e.get("attrs").r,i=t.get("cacheCanvasBBox"),r=t.get("item")._cfg,s=r.id,c=(r.model.style.lineWidth||0)/2,d=[(i.width-2*o-4)*(n[0]-.5)-c,(i.height-2*o-4)*(n[1]-.5)-c];C=[a.x,a.y];var l=t.addShape("path",{attrs:{stroke:"#1890FF",lineDash:[5,5],path:[["M"].concat(d),["L"].concat(d)]},className:"dashed-line",pointStart:d});t.toFront(),l.toFront(),O=s}})),e.on("drag",(function(e){var n=t.get("children")[0].get("canvasBox"),a=t.getItem("dashed-line"),o=a.get("pointStart"),i=[e.x-n.x-n.width/2,e.y-n.y-n.height/2];a.toFront(),Math.sqrt(Math.pow(Math.abs(C[0])-Math.abs(e.x),2)+Math.pow(Math.abs(C[1])-Math.abs(e.y),2))>=16&&(e.x>=C[0]?(e.y,C[1],i[0]-=1,i[1]-=1):(e.y,C[1],i[0]+=1,i[1]+=1)),a.attr({path:[["M"].concat(Object(k.a)(o)),["L",i[0],i[1]]]})})),e.on("dragend",(function(e){t.getItem("dashed-line").remove(),O=null})),e.on("dragenter",(function(e){if(e.target.cfg.nodeId!==O){var n=e.target.cfg.index;t.getAllAnchorBg()[n]&&t.getAllAnchorBg()[n].attr("fillOpacity",.7)}})),e.on("dragleave",(function(e){if(e.target.cfg.nodeId!==O){var n=e.target.cfg.index;t.getAllAnchorBg()[n]&&t.getAllAnchorBg()[n].attr("fillOpacity",.5)}}))}(r,t,e),t.anchorShapes.push(i),t.anchorShapes.push(r)})),t.getAllAnchors=function(){return t.anchorShapes.filter((function(e){return!0===e.get("isAnchor")}))},t.getAnchor=function(e){return t.anchorShapes.filter((function(t){return"node-anchor"===t.get("className")&&t.get("index")===e}))},t.getAllAnchorBg=function(){return t.anchorShapes.filter((function(e){return"node-anchor-bg"===e.get("className")}))}},addLabel:function(e,t){if(e.label){var n=this.options.labelCfg;n&&n.fontSize<12&&(n.fontSize=12),t.addShape("text",{attrs:A({x:0,y:0,width:100,height:100,text:e.label},n),className:"node-text",draggable:!0})}},draw:function(e,t){var n=this.shapeType||"rect",a=this.getShapeStyle(e),o=t.addShape(n,{attrs:this.getShapeStyle(e),className:"".concat(n,"-shape"),draggable:!0});return this.options=A({},_,{},a),this.addLabel(e,t),this.drawIcon(e,t),this.initAnchor(e,t),o},runAnimate:function(e,t){e.active},afterDraw:function(e,t){t.getItem=function(e){return t.get("children").find((function(t){return t.get("className")===e}))},this.runAnimate(e,t)},update:function(e,t){var n=t.get("model"),a=t.get("keyShape").attrs,o=t.get("group").getItem("node-text"),i=t.get("group").get("children")[0];setTimeout((function(){o&&o.attr({text:n.label,labelCfg:a.labelCfg}),i.attr(A({},a,{},n.style))}))},afterUpdate:function(e,t){var n=t.get("group").icon;n&&(e.hideIcon&&n.get("visible")?n.hide():e.hideIcon||n.get("visible")||n.show())},setState:function(e,t,n){var a=n.getContainer();["anchorShow","anchorActived","nodeState","nodeState:default","nodeState:selected","nodeState:hover","nodeOnDragStart","nodeOnDrag","nodeOnDragEnd"].includes(e)&&w[e].call(this,t,a)},getAnchorPoints:function(e){return e&&e.anchorPoints?e.anchorPoints:[[.5,0],[1,.5],[.5,1],[0,.5]]}},"single-node")};function P(e,t,n){var a=n.getContainer();["edgeState","edgeState:default","edgeState:selected","edgeState:hover"].includes(e)&&w[e].call(this,t,a)}function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var D=f,j=h,F=v,B=u,L=function(e){M(e),function(e){e.registerNode("rect-node",{shapeType:"rect",options:{iconStyles:D},getShapeStyle:function(e){var t=e.style.width||80,n=e.style.height||40;return I({},j,{width:t,height:n,x:-t/2,y:-n/2,anchorPointStyles:F,labelCfg:I({},B),radius:5},e.style,{},e.nodeStateStyles)}},"base-node"),e.registerNode("circle-node",{shapeType:"circle",getShapeStyle:function(e){var t=e.style.r||30;return I({},j,{r:t,x:0,y:0,anchorPointStyles:F,labelCfg:I({},B)},e.style,{},e.nodeStateStyles)}},"base-node"),e.registerNode("ellipse-node",{shapeType:"ellipse",getShapeStyle:function(e){return I({rx:50,ry:30},j,{x:0,y:0,anchorPointStyles:F,labelCfg:I({},B)},e.style,{},e.nodeStateStyles)}},"base-node"),e.registerNode("diamond-node",{shapeType:"path",getShapeStyle:function(e){return I({path:this.getPath(e)},j,{x:0,y:0,anchorPointStyles:F,labelCfg:I({},B)},e.style,{},e.nodeStateStyles)},getPath:function(e){var t=e.size||[80,80],n=t[0],a=t[1];return[["M",0,-a/2],["L",n/2,0],["L",0,a/2],["L",-n/2,0],["Z"]]}},"base-node")}(e),function(e){e.registerEdge("line-edge",{setState:P},"line"),e.registerEdge("polyline-edge",{setState:P},"polyline"),e.registerEdge("quadratic-edge",{setState:P},"quadratic"),e.registerEdge("cubic-edge",{setState:P},"cubic"),e.registerEdge("arc-edge",{setState:P},"arc")}(e)},T=function(e){l(e),L(e)},V=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(o.a)(this,e),T(r.a),t.registerFactory&&t.registerFactory(r.a),this.init(t)}return Object(i.a)(e,[{key:"init",value:function(e){var t=Object.assign({container:"canvasPanel",width:window.innerWidth-100,height:window.innerHeight-40,fitViewPadding:20,animate:!0,layout:{type:"dagre",nodesep:30,ranksep:30},modes:{default:["drag-canvas","canvas-event","delete-item","select-node","hover-node","drag-node","active-edge"]},defaultNode:{type:"circle-node"},defaultEdge:{type:"polyline-edge",style:{radius:5,offset:15,stroke:"#aab7c3",lineAppendWidth:10,endArrow:{path:"M 0,0 L 8,4 L 7,0 L 8,-4 Z",fill:"#aab7c3"}}},nodeStateStyles:{"nodeState:default":{fill:"#E7F7FE",stroke:"#1890FF"},"nodeState:hover":{fill:"#d5f1fd"},"nodeState:selected":{fill:"#caebf9",stroke:"#1890FF"}},edgeStateStyles:{"edgeState:default":{stroke:"#aab7c3"},"edgeState:selected":{stroke:"#1890FF"},"edgeState:hover":{stroke:"#1890FF"}}},e);e.plugins&&e.plugins.length&&(t.plugins=e.plugins),this.instance=new r.a.Graph(t);var n=this.instance.cfg.canvas.cfg.el;n.id="".concat(t.container,"-canvas"),document.addEventListener("click",(function(e){n.setAttribute("isFocused",e.target.id===n.id)}))}},{key:"destroy",value:function(){this.instance.destroy(),this.instance=null}}]),e}(),z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"itemPanel",class:{hidden:e.itemVisible},attrs:{id:"itemPanel"}},[n("i",{staticClass:"iconfont icon-h-drag"}),e._v(" "),n("div",{staticClass:"icon-tool"},[n("i",{staticClass:"iconfont icon-circle",attrs:{draggable:"true","data-type":"node","data-shape":"circle-node"}}),e._v(" "),n("i",{staticClass:"iconfont icon-rect",attrs:{draggable:"true","data-type":"node","data-shape":"rect-node"}}),e._v(" "),n("i",{staticClass:"iconfont icon-ellipse",attrs:{draggable:"true","data-type":"node","data-shape":"ellipse-node"}}),e._v(" "),n("i",{staticClass:"iconfont icon-diamond",attrs:{draggable:"true","data-type":"node","data-shape":"diamond-node"}}),e._v(" "),n("i",{staticClass:"iconfont icon-model-rect",attrs:{draggable:"true","data-type":"node","data-shape":"modelRect"}}),e._v(" "),n("i",{staticClass:"split"}),e._v(" "),n("i",{staticClass:"gb-toggle-btn",attrs:{draggable:"true"},on:{click:function(t){e.itemVisible=!e.itemVisible}}})])])};z._withStripped=!0;var Y={name:"ItemPanel",props:{graph:{type:Object,default:function(){}}},data:function(){return{itemVisible:!1}},mounted:function(){var e=this;Object(k.a)(this.$refs.itemPanel.querySelector(".icon-tool").querySelectorAll(".iconfont")).forEach((function(t){t.addEventListener("click",(function(t){e.$emit("canvas-add-".concat(t.target.dataset.type),t)})),t.addEventListener("dragend",(function(t){e.$emit("canvas-add-".concat(t.target.dataset.type),t)}))})),document.addEventListener("drop",(function(e){e.preventDefault()}),!1)},methods:{addEdge:function(e){}}},W=n("KHd+"),X=Object(W.a)(Y,z,[],!1,null,null,null);X.options.__file="src/pages/graph/ItemPanel.vue";var q=X.exports,K={nodes:[{id:"1",label:"new Vue()",data:{date:"2020-04-20"},type:"diamond-node",style:{fill:"orange",lineDash:[1,2],shadowOffsetX:0,shadowOffsetY:2,shadowColor:"#666",shadowBlur:10},labelCfg:{fill:"green",textAlign:"center",textBaseline:"middle",fontWeight:"bold",fontSize:13},nodeStateStyles:{"nodeState:default":{fill:"orange"},"nodeState:hover":{fill:"#ffbd17"},"nodeState:selected":{fill:"#f1ac00"}}},{id:"2",label:"初始化\n事件和生命周期",type:"rect-node"},{id:"3",label:"beforeCreate",type:"rect-node",style:{radius:2},anchorPoints:[[0,0],[.5,0],[0,1],[.5,1],[1,0],[1,1]]},{id:"4",label:"初始化\n注入 & 校验",style:{size:[130,100]},type:"ellipse-node"},{id:"5",label:"created",type:"diamond-node"},{id:"6",label:'是否指定 "el" 选项?',style:{size:[130,100]},type:"ellipse-node"},{id:"7",label:"当调用 vm.$mount(el) 函数时",style:{size:[130,100]},type:"ellipse-node"},{id:"8",label:'是否指定 "template" 选项'},{id:"9",label:"将 template 编译\n到 render 函数中"},{id:"10",label:"将 el 外部的 HTML\n作为 template 编译"},{id:"11",label:"beforeMount"},{id:"12",label:'创建 VM.$el\n并用其替换 "el"'}],edges:[{source:"1",target:"2",sourceAnchor:2,data:{type:"A",amount:"100,000 元",date:"2019-08-03"},label:"条件",shape:"cubic-edge",style:{stroke:"red",lineDash:[5,2],lineWidth:2,lineAppendWidth:10},labelCfg:{position:"center",autoRotate:!0,style:{stroke:"white",fill:"#722ed1",lineWidth:5}}},{source:"2",target:"3",data:{type:"B",amount:"100,000 元",date:"2019-08-03"},label:"终止",edgeStateStyles:{"edgeState:default":{strokeOpacity:1},"edgeState:hover":{strokeOpacity:.6},"edgeState:selected":{strokeOpacity:1}}},{source:"2",target:"4",data:{type:"C",amount:"100,000 元",date:"2019-08-03"},label:"循环",edgeStateStyles:{"edgeState:default":{strokeOpacity:1},"edgeState:hover":{strokeOpacity:.6,stroke:"#ccc"},"edgeState:selected":{strokeOpacity:1,stroke:"#ccc"}}},{source:"4",target:"5",data:{type:"C",amount:"100,000 元",date:"2019-08-03"},label:"否"},{source:"4",target:"6",data:{type:"B",amount:"100,000 元",date:"2019-08-03"},label:"小于"},{source:"6",target:"7",data:{type:"C",amount:"100,000 元",date:"2019-08-03"}},{source:"6",target:"8",data:{type:"C",amount:"100,000 元",date:"2019-08-03"}},{source:"8",target:"9",data:{type:"C",amount:"100,000 元",date:"2019-08-03"}},{source:"8",target:"10",data:{type:"C",amount:"100,000 元",date:"2019-08-03"}},{source:"9",target:"12",data:{type:"C",amount:"100,000 元",date:"2019-08-03"}},{source:"8",target:"12",data:{type:"C",amount:"100,000 元",date:"2019-08-03"}}]},G={components:{ItemPanel:q},data:function(){return{graph:{},highLight:{undo:!1,redo:!1},lineStyle:{type:"line",width:1},headVisible:!1,configVisible:!1,config:"",tooltip:"",top:0,left:0}},mounted:function(){var e=this;this.$nextTick((function(){e.createGraphic(),e.initGraphEvent()}))},beforeDestroy:function(){this.graph.destroy()},methods:{createGraphic:function(){var e=new V({});this.graph=e.instance,this.graph.read(K),this.graph.paint()},copyNode:function(){},paste:function(){},addNode:function(e){var t={text:"node",type:e.target.dataset.shape,x:e.clientX-80,y:e.clientY-40};this.graph.addItem("node",t)},initGraphEvent:function(){var e=this;this.graph.on("on-node-mouseenter",(function(e){e&&e.item})),this.graph.on("after-node-selected",(function(t){if(e.configVisible=!!t,t&&t.item){var n=t.item.get("id"),a=t.item.get("model");e.config=a,a.label=n}})),this.graph.on("after-edge-selected",(function(t){e.configVisible=!!t,t&&t.item&&(e.config=t.item.get("model").id,e.graph.updateItem(t.item,{shape:"line-edge",label:"model"}))})),this.graph.on("on-edge-mousemove",(function(t){t&&t.item&&(e.tooltip=t.item.get("model").label,e.left=t.clientX+40,e.top=t.clientY-20)})),this.graph.on("on-node-mousemove",(function(t){t&&t.item&&(e.tooltip=t.item.get("model").id,e.left=t.clientX+40,e.top=t.clientY-20)})),this.graph.on("on-node-mouseleave",(function(t){t&&t.item&&(e.tooltip="")})),this.graph.on("on-edge-mouseleave",(function(t){t&&t.item&&(e.tooltip="")})),this.graph.on("before-node-removed",(function(e){e.target;var t=e.callback;setTimeout((function(){t(!0)}),1e3)})),this.graph.on("after-node-dblclick",(function(e){e&&e.item})),this.graph.on("before-edge-add",(function(t){var n=t.source,a=t.target,o=t.sourceAnchor,i=t.targetAnchor;setTimeout((function(){e.graph.addItem("edge",{source:n.get("id"),target:a.get("id"),sourceAnchor:o,targetAnchor:i,label:"edge label"})}),100)}))}}},$=(n("eGKd"),Object(W.a)(G,a,[],!1,null,null,null));$.options.__file="src/pages/graph/graph.vue";t.default=$.exports},eGKd:function(e,t,n){"use strict";var a=n("/qA8");n.n(a).a}}]);