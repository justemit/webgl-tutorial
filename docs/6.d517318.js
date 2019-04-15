(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{37:function(s,e,r){"use strict";r.r(e);var n={components:{}},a=r(2),t=Object(a.a)(n,function(){var s=this,e=s.$createElement,r=s._self._c||e;return r("section",[r("h1",[s._v("网格")]),s._v(" "),s._m(0),s._v(" "),r("h2",[s._v("1. 创建网格")]),s._v(" "),s._m(1),s._v(" "),r("block-demo",{attrs:{tip:"",source:"const renderer = new THREE.WebGLRenderer()\nrenderer.setSize(400, 300)\ndocument.querySelector('#app').appendChild(renderer.domElement)\n\nconst scene = new THREE.Scene()\n\nconst camera = new THREE.OrthographicCamera(-10, 10, 8, -8, 1, 10)\ncamera.position.set(0, 0, 5)\nscene.add(camera)\n\nconst light = new THREE.PointLight(0xfff000, 1, 10)\nlight.position.set(0, 2, 6)\nscene.add(light)\n\nconst cube = new THREE.Mesh(\n  new THREE.CubeGeometry(4, 4, 5),\n  new THREE.MeshLambertMaterial({ color: 0xff0000, wireframe: false })\n)\n\nscene.add(cube)\n\nrenderer.render(scene, camera)\n"}},[r("pre",{pre:!0},[r("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" renderer = "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" THREE.WebGLRenderer()\nrenderer.setSize("),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("400")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("300")]),s._v(")\n"),r("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".querySelector("),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#app'")]),s._v(").appendChild(renderer.domElement)\n\n"),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" scene = "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" THREE.Scene()\n\n"),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" camera = "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" THREE.OrthographicCamera("),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("-10")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("8")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("-8")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v(")\ncamera.position.set("),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5")]),s._v(")\nscene.add(camera)\n\n"),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" light = "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" THREE.PointLight("),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0xfff000")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v(")\nlight.position.set("),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("6")]),s._v(")\nscene.add(light)\n\n"),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" cube = "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" THREE.Mesh(\n  "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" THREE.CubeGeometry("),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5")]),s._v("),\n  "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" THREE.MeshLambertMaterial({ "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0xff0000")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("wireframe")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(" })\n)\n\nscene.add(cube)\n\nrenderer.render(scene, camera)\n")])])]),r("h2",[s._v("2. 修改属性")]),s._v(" "),r("p",[s._v("网格被创建后，可以对材质进行修改，也可以进行矩阵变换。")]),s._v(" "),r("block-demo",{attrs:{tip:"",source:"const renderer = new THREE.WebGLRenderer()\nrenderer.setSize(400, 300)\ndocument.querySelector('#app').appendChild(renderer.domElement)\n\nconst scene = new THREE.Scene()\n\nconst camera = new THREE.OrthographicCamera(-10, 10, 8, -8, 1, 10)\ncamera.position.set(0, 0, 5)\nscene.add(camera)\n\nconst light = new THREE.PointLight(0xfff000, 1, 10)\nlight.position.set(0, 2, 6)\nscene.add(light)\n\nconst cube = new THREE.Mesh(\n  new THREE.CubeGeometry(4, 4, 5),\n  new THREE.MeshLambertMaterial({ color: 0xff0000, wireframe: false })\n)\n\nscene.add(cube)\n\nsetTimeout(() => {\n  cube.material = new THREE.MeshLambertMaterial({\n    color: 0xffff00,\n    wireframe: false\n  })\n  renderer.render(scene, camera)\n}, 3000)\n\nrenderer.render(scene, camera)\n"}},[r("pre",{pre:!0},[r("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" renderer = "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" THREE.WebGLRenderer()\nrenderer.setSize("),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("400")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("300")]),s._v(")\n"),r("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".querySelector("),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#app'")]),s._v(").appendChild(renderer.domElement)\n\n"),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" scene = "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" THREE.Scene()\n\n"),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" camera = "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" THREE.OrthographicCamera("),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("-10")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("8")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("-8")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v(")\ncamera.position.set("),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5")]),s._v(")\nscene.add(camera)\n\n"),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" light = "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" THREE.PointLight("),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0xfff000")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v(")\nlight.position.set("),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("6")]),s._v(")\nscene.add(light)\n\n"),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" cube = "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" THREE.Mesh(\n  "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" THREE.CubeGeometry("),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5")]),s._v("),\n  "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" THREE.MeshLambertMaterial({ "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0xff0000")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("wireframe")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(" })\n)\n\nscene.add(cube)\n\nsetTimeout("),r("span",{pre:!0,attrs:{class:"hljs-function"}},[r("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" {\n  cube.material = "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" THREE.MeshLambertMaterial({\n    "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0xffff00")]),s._v(",\n    "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("wireframe")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("\n  })\n  renderer.render(scene, camera)\n}, "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3000")]),s._v(")\n\nrenderer.render(scene, camera)\n")])])]),r("block-demo",{attrs:{tip:"",source:"const renderer = new THREE.WebGLRenderer()\nrenderer.setSize(400, 300)\ndocument.querySelector('#app').appendChild(renderer.domElement)\n\nconst scene = new THREE.Scene()\n\nconst camera = new THREE.OrthographicCamera(-10, 10, 8, -8, 1, 10)\ncamera.position.set(0, 0, 5)\nscene.add(camera)\n\nconst light = new THREE.PointLight(0xfff000, 1, 10)\nlight.position.set(0, 2, 4)\nscene.add(light)\n\nconst cube = new THREE.Mesh(\n  new THREE.CubeGeometry(4, 4, 5),\n  new THREE.MeshLambertMaterial({ color: 0xff0000, wireframe: false })\n)\n\nscene.add(cube)\n\nconst animate = () => {\n  cube.rotation.x += 0.01\n  cube.rotation.y += 0.01\n\n  renderer.render(scene, camera)\n  requestAnimationFrame(animate)\n}\n\nanimate()\n"}},[r("pre",{pre:!0},[r("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" renderer = "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" THREE.WebGLRenderer()\nrenderer.setSize("),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("400")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("300")]),s._v(")\n"),r("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".querySelector("),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#app'")]),s._v(").appendChild(renderer.domElement)\n\n"),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" scene = "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" THREE.Scene()\n\n"),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" camera = "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" THREE.OrthographicCamera("),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("-10")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("8")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("-8")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v(")\ncamera.position.set("),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5")]),s._v(")\nscene.add(camera)\n\n"),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" light = "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" THREE.PointLight("),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0xfff000")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v(")\nlight.position.set("),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4")]),s._v(")\nscene.add(light)\n\n"),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" cube = "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" THREE.Mesh(\n  "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" THREE.CubeGeometry("),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5")]),s._v("),\n  "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" THREE.MeshLambertMaterial({ "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0xff0000")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("wireframe")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(" })\n)\n\nscene.add(cube)\n\n"),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" animate = "),r("span",{pre:!0,attrs:{class:"hljs-function"}},[r("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" {\n  cube.rotation.x += "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.01")]),s._v("\n  cube.rotation.y += "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.01")]),s._v("\n\n  renderer.render(scene, camera)\n  requestAnimationFrame(animate)\n}\n\nanimate()\n")])])])],1)},[function(){var s=this.$createElement,e=this._self._c||s;return e("p",[this._v("网格（"),e("code",{pre:!0},[this._v("Mesh")]),this._v("）是由顶点、边、面等组成的物体。创建物体时需要指定几何形状和材质，其中几何形状决定了物体的顶点位置等信息，材质决定了物体的颜色、纹理等信息。")])},function(){var s=this.$createElement,e=this._self._c||s;return e("p",[e("code",{pre:!0},[this._v("Mesh")]),this._v(" 的构造函数为："),e("code",{pre:!0},[this._v("new THREE.Mesh(geometry, material)")]),this._v("。")])}],!1,null,null,null);e.default=t.exports}}]);