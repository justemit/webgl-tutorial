(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{29:function(s,a,n){"use strict";n.r(a);var e={components:{}},t=n(2),r=Object(t.a)(e,function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("section",[n("h1",[s._v("初始化 WebGL")]),s._v(" "),n("p",[s._v("为了使用 WebGL 进行 3D 渲染，需要一个 canvas 元素，然后使用该元素初始化 WebGL 上下文。")]),s._v(" "),n("block-demo",{attrs:{tip:"",source:"const app = document.querySelector('#app')\nconst canvas = document.createElement('canvas')\ncanvas.width = 400\ncanvas.height = 300\n\napp.appendChild(canvas)\n\nconst gl = canvas.getContext('webgl')\n\n// 设置 清除背景色\ngl.clearColor(1, 0, 0, 1) // 4 个参数 分别对应 hsla 颜色\n// 使用 设置的清除色清除上下文\ngl.clear(gl.COLOR_BUFFER_BIT)\n"}},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" app = "),n("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".querySelector("),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#app'")]),s._v(")\n"),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" canvas = "),n("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".createElement("),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'canvas'")]),s._v(")\ncanvas.width = "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("400")]),s._v("\ncanvas.height = "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("300")]),s._v("\n\napp.appendChild(canvas)\n\n"),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" gl = canvas.getContext("),n("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'webgl'")]),s._v(")\n\n\ngl.clearColor("),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(", "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),n("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(") \n\ngl.clear(gl.COLOR_BUFFER_BIT)\n")])])])],1)},[],!1,null,null,null);a.default=r.exports}}]);