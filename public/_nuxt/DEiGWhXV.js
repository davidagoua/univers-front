import{s as o}from"./v_zAiA-p.js";import{Y as l,t as i,v as n,a5 as a,a6 as s,U as p}from"./DZ6gmq71.js";var d={root:function(r){var t=r.props;return{justifyContent:t.layout==="horizontal"?t.align==="center"||t.align===null?"center":t.align==="left"?"flex-start":t.align==="right"?"flex-end":null:null,alignItems:t.layout==="vertical"?t.align==="center"||t.align===null?"center":t.align==="top"?"flex-start":t.align==="bottom"?"flex-end":null:null}}},u={root:function(r){var t=r.props;return["p-divider p-component","p-divider-"+t.layout,"p-divider-"+t.type,{"p-divider-left":t.layout==="horizontal"&&(!t.align||t.align==="left")},{"p-divider-center":t.layout==="horizontal"&&t.align==="center"},{"p-divider-right":t.layout==="horizontal"&&t.align==="right"},{"p-divider-top":t.layout==="vertical"&&t.align==="top"},{"p-divider-center":t.layout==="vertical"&&(!t.align||t.align==="center")},{"p-divider-bottom":t.layout==="vertical"&&t.align==="bottom"}]},content:"p-divider-content"},v=l.extend({name:"divider",classes:u,inlineStyles:d}),c={name:"BaseDivider",extends:o,props:{align:{type:String,default:null},layout:{type:String,default:"horizontal"},type:{type:String,default:"solid"}},style:v,provide:function(){return{$parentInstance:this}}},g={name:"Divider",extends:c,inheritAttrs:!1},y=["aria-orientation"];function f(e,r,t,m,h,$){return i(),n("div",a({class:e.cx("root"),style:e.sx("root"),role:"separator","aria-orientation":e.layout},e.ptmi("root")),[e.$slots.default?(i(),n("div",a({key:0,class:e.cx("content")},e.ptm("content")),[s(e.$slots,"default")],16)):p("",!0)],16,y)}g.render=f;export{g as default};
