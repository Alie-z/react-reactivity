(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./demo/design/index.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),b=(n("react"),n("./node_modules/@mdx-js/react/dist/esm.js")),c={};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(b.b)("wrapper",Object.assign({},c,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"\u539f\u7406\u5206\u6790"},"\u539f\u7406\u5206\u6790"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"vue-next"),"\u662fVue3\u7684\u6e90\u7801\u4ed3\u5e93\uff0cVue3\u91c7\u7528lerna\u505apackage\u7684\u5212\u5206\uff0c\u800c\u54cd\u5e94\u5f0f\u80fd\u529b",Object(b.b)("inlineCode",{parentName:"p"},"@vue/reactivity"),"\u88ab\u5212\u5206\u5230\u4e86\u5355\u72ec\u7684\u4e00\u4e2apackage\u4e2d"),Object(b.b)("p",null,"\u4ece\u8fd9\u4e2a\u5305\u63d0\u4f9b\u7684\u51e0\u4e2a\u6838\u5fc3api\u6765\u5206\u6790\uff1a"),Object(b.b)("h3",{id:"effect"},"effect"),Object(b.b)("p",null,"effect\u5176\u5b9e\u662f\u54cd\u5e94\u5f0f\u5e93\u4e2d\u4e00\u4e2a\u901a\u7528\u7684\u6982\u5ff5\uff1a",Object(b.b)("inlineCode",{parentName:"p"},"\u89c2\u5bdf\u51fd\u6570"),"\uff0c\u5c31\u50cfVue2\u4e2d\u7684",Object(b.b)("inlineCode",{parentName:"p"},"Watcher"),"\uff0cmobx\u4e2d\u7684",Object(b.b)("inlineCode",{parentName:"p"},"autorun"),"\uff0c",Object(b.b)("inlineCode",{parentName:"p"},"observer"),"\u4e00\u6837\uff0c\u5b83\u7684\u4f5c\u7528\u662f",Object(b.b)("inlineCode",{parentName:"p"},"\u6536\u96c6\u4f9d\u8d56"),"\u3002"),Object(b.b)("p",null,"\u5b83\u63a5\u53d7\u7684\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u8fd9\u4e2a\u51fd\u6570\u5185\u90e8\u5bf9\u4e8e\u54cd\u5e94\u5f0f\u6570\u636e\u7684\u8bbf\u95ee\u90fd\u53ef\u4ee5\u6536\u96c6\u4f9d\u8d56\uff0c\u90a3\u4e48\u5728\u54cd\u5e94\u5f0f\u6570\u636e\u66f4\u65b0\u540e\uff0c\u5c31\u4f1a\u89e6\u53d1\u54cd\u5e94\u7684\u66f4\u65b0\u4e8b\u4ef6\u3002"),Object(b.b)("h3",{id:"reactive"},"reactive"),Object(b.b)("p",null,"\u54cd\u5e94\u5f0f\u6570\u636e\u7684\u6838\u5fc3api\uff0c\u8fd9\u4e2aapi\u8fd4\u56de\u7684\u662f\u4e00\u4e2a",Object(b.b)("inlineCode",{parentName:"p"},"proxy"),"\uff0c\u5bf9\u4e0a\u9762\u6240\u6709\u5c5e\u6027\u7684\u8bbf\u95ee\u90fd\u4f1a\u88ab\u52ab\u6301\uff0c\u4ece\u800c\u5728get\u7684\u65f6\u5019\u6536\u96c6\u4f9d\u8d56\uff08\u4e5f\u5c31\u662f\u6b63\u5728\u8fd0\u884c\u7684",Object(b.b)("inlineCode",{parentName:"p"},"effect"),"\uff09\uff0c\u5728set\u7684\u65f6\u5019\u89e6\u53d1\u66f4\u65b0\u3002"),Object(b.b)("h3",{id:"ref"},"ref"),Object(b.b)("p",null,"\u5bf9\u4e8e\u7b80\u5355\u6570\u636e\u7c7b\u578b\u6bd4\u5982",Object(b.b)("inlineCode",{parentName:"p"},"number"),"\uff0c\u6211\u4eec\u4e0d\u53ef\u80fd\u50cf\u8fd9\u6837\u53bb\u505a\uff1a"),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"let data = reactive(2)\n// \ud83d\ude2doops\ndata = 5\n")),Object(b.b)("p",null,"\u8fd9\u662f\u4e0d\u7b26\u5408\u54cd\u5e94\u5f0f\u7684\u62e6\u622a\u89c4\u5219\u7684\uff0c\u6ca1\u6709\u529e\u6cd5\u80fd\u62e6\u622a\u5230",Object(b.b)("inlineCode",{parentName:"p"},"data"),"\u672c\u8eab\u7684\u6539\u53d8\uff0c\u53ea\u80fd\u62e6\u622a\u5230",Object(b.b)("inlineCode",{parentName:"p"},"data"),"\u8eab\u4e0a\u7684\u5c5e\u6027\u7684\u6539\u53d8\uff0c\u6240\u4ee5\u6709\u4e86ref\u3002"),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"const data = ref(2)\n// \ud83d\udc95ok\ndata.value= 5\n")),Object(b.b)("h3",{id:"computed"},"computed"),Object(b.b)("p",null,"\u8ba1\u7b97\u5c5e\u6027\uff0c\u4f9d\u8d56\u503c\u66f4\u65b0\u4ee5\u540e\uff0c\u5b83\u7684\u503c\u4e5f\u4f1a\u968f\u4e4b\u81ea\u52a8\u66f4\u65b0\u3002\u5176\u5b9ecomputed\u5185\u90e8\u4e5f\u662f\u4e00\u4e2aeffect\u3002"),Object(b.b)("p",null,"\u62e5\u6709\u5728computed\u4e2d\u89c2\u5bdf\u53e6\u4e00\u4e2acomputed\u6570\u636e\u3001effect\u89c2\u5bdfcomputed\u6539\u53d8\u4e4b\u7c7b\u7684\u9ad8\u7ea7\u7279\u6027\u3002"),Object(b.b)("h2",{id:"\u5b9e\u73b0"},"\u5b9e\u73b0"),Object(b.b)("p",null,"\u4ece\u8fd9\u51e0\u4e2a\u6838\u5fc3api\u6765\u770b\uff0c\u53ea\u8981effect\u80fd\u63a5\u5165\u5230React\u7cfb\u7edf\u4e2d\uff0c\u90a3\u4e48\u5176\u4ed6\u7684api\u90fd\u6ca1\u4ec0\u4e48\u95ee\u9898\uff0c\u56e0\u4e3a\u5b83\u4eec\u53ea\u662f\u53bb\u6536\u96c6effect\u7684\u4f9d\u8d56\uff0c\u53bb\u901a\u77e5effect\u89e6\u53d1\u66f4\u65b0\u3002"),Object(b.b)("p",null,"effect\u63a5\u53d7\u7684\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u800c\u4e14effect\u8fd8\u652f\u6301\u901a\u8fc7\u4f20\u5165",Object(b.b)("inlineCode",{parentName:"p"},"schedule"),"\u53c2\u6570\u6765\u81ea\u5b9a\u4e49\u4f9d\u8d56\u66f4\u65b0\u7684\u65f6\u5019\u9700\u8981\u89e6\u53d1\u4ec0\u4e48\u51fd\u6570\uff0c"),Object(b.b)("p",null,"\u800c",Object(b.b)("inlineCode",{parentName:"p"},"react-reactivity"),"\u7684\u6838\u5fc3api: ",Object(b.b)("inlineCode",{parentName:"p"},"useStore"),"\u63a5\u53d7\u7684\u4e5f\u662f\u4e00\u4e2a\u51fd\u6570",Object(b.b)("inlineCode",{parentName:"p"},"selector"),"\uff0c\u5b83\u4f1a\u8ba9\u7528\u6237\u81ea\u5df1\u9009\u62e9\u5728\u7ec4\u4ef6\u4e2d\u9700\u8981\u8bbf\u95ee\u7684\u6570\u636e\u3002"),Object(b.b)("p",null,"\u90a3\u4e48\u601d\u8def\u5c31\u663e\u800c\u6613\u89c1\u4e86\uff1a"),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},"\u628a",Object(b.b)("inlineCode",{parentName:"li"},"selector"),"\u5305\u88c5\u5728effect\u4e2d\u6267\u884c\uff0c\u53bb\u6536\u96c6\u4f9d\u8d56\u3002"),Object(b.b)("li",{parentName:"ol"},"\u6307\u5b9a\u4f9d\u8d56\u53d1\u751f\u66f4\u65b0\u65f6\uff0c\u9700\u8981\u8c03\u7528\u7684\u51fd\u6570\u662f",Object(b.b)("inlineCode",{parentName:"li"},"\u5f53\u524d\u6b63\u5728\u4f7f\u7528useStore"),"\u7684\u8fd9\u4e2a\u7ec4\u4ef6\u7684",Object(b.b)("inlineCode",{parentName:"li"},"forceUpdate"),"\u5f3a\u5236\u6e32\u67d3\u51fd\u6570\u3002")),Object(b.b)("p",null,"\u8fd9\u6837\u4e0d\u5c31\u5b9e\u73b0\u4e86\u6570\u636e\u53d8\u5316\uff0c\u7ec4\u4ef6\u81ea\u52a8\u66f4\u65b0\u5417\uff1f"),Object(b.b)("p",null,"\u7b80\u5355\u7684\u770b\u4e00\u4e0b\u6838\u5fc3\u5b9e\u73b0"),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"export const useStore = (selector) => {\n  const store = useContext(storeContext)\n  if (!store) throw new Error('\u6ca1\u6709\u53d1\u73b0context\u7684value,\u8bf7\u5728\u7ec4\u4ef6\u4e0a\u4f7f\u7528<Provider>\u5305\u88f9\uff01')\n  const [, forceUpdateDispatch] = useReducer(v => v + 1, 0)\n  let runner\n  if (!runner) {\n    runner = effect(\n      () => selector(store),\n      {\n        lazy: true,\n        scheduler: j => {\n          if (j() === undefined) return\n          forceUpdateDispatch()\n        }\n      })\n  }\n  useEffect(() => () => stop(runner), []) //\u5378\u8f7d\u7ec4\u4ef6\u540e\u53d6\u6d88effect\n  const value = runner()\n  //\u81ea\u52a8\u8131 Ref \u529f\u80fd>>\u5224\u65ad\u5bf9\u8c61\u662fref \u5219\u8fd4\u56de.value (\u5728\u6e32\u67d3\u73af\u5883\u4e0d\u9700\u8981 .value \u53bb\u53d6\u503c\uff0c\u6781\u5927\u7684\u51cf\u5c11\u7684\u5fc3\u667a\u8d1f\u62c5\u3002)\n  for (let key in value) if (isRef(value[key])) value[key] = value[key].value\n  return value\n}\n")),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},"\u5148\u901a\u8fc7useReducer\u5728\u5f53\u524d\u7ec4\u4ef6\u4e2d\u6ce8\u518c\u4e00\u4e2a\u5f3a\u5236\u66f4\u65b0\u7684\u51fd\u6570\u3002"),Object(b.b)("li",{parentName:"ol"},"\u901a\u8fc7useContext\u8bfb\u53d6\u7528\u6237\u4eceProvider\u4e2d\u4f20\u5165\u7684store\u3002"),Object(b.b)("li",{parentName:"ol"},"\u518d\u901a\u8fc7Vue\u7684effect\u53bb\u5e2e\u6211\u4eec\u6267\u884cselector(store)\uff0c\u5e76\u4e14\u6307\u5b9ascheduler\u4e3aforceUpdate\uff0c\u8fd9\u6837\u5c31\u5b8c\u6210\u4e86\u4f9d\u8d56\u6536\u96c6\u3002")),Object(b.b)("p",null,"\u5c31\u7b80\u5355\u7684\u51e0\u884c\u4ee3\u7801\uff0c\u5c31\u5b9e\u73b0\u4e86\u5728React\u4e2d\u4f7f\u7528",Object(b.b)("inlineCode",{parentName:"p"},"@vue/reactivity"),"\u4e2d\u7684\u6240\u6709\u80fd\u529b\u3002"),Object(b.b)("h2",{id:"\u4f18\u70b9\uff1a"},"\u4f18\u70b9\uff1a"),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},"\u76f4\u63a5\u5f15\u5165@vue/reacivity\uff0c\u5b8c\u5168\u4f7f\u7528Vue3\u7684reactivity\u80fd\u529b\uff0c\u62e5\u6709computed, effect\u7b49\u5404\u79cd\u80fd\u529b\uff0c\u5e76\u4e14\u5bf9\u4e8eSet\u548cMap\u4e5f\u63d0\u4f9b\u4e86\u54cd\u5e94\u5f0f\u7684\u80fd\u529b\u3002\u540e\u7eed\u4e5f\u4f1a\u968f\u7740\u8fd9\u4e2a\u5e93\u7684\u66f4\u65b0\u53d8\u5f97\u66f4\u52a0\u5b8c\u5584\u7684\u548c\u5f3a\u5927\u3002"),Object(b.b)("li",{parentName:"ol"},"vue-next\u4ed3\u5e93\u5185\u90e8\u5b8c\u6574\u7684\u6d4b\u8bd5\u7528\u4f8b\u3002"),Object(b.b)("li",{parentName:"ol"},"\u5b8c\u5584\u7684TypeScript\u7c7b\u578b\u652f\u6301\u3002"),Object(b.b)("li",{parentName:"ol"},"\u5b8c\u5168\u590d\u7528@vue/reacivity\u5b9e\u73b0\u8d85\u5f3a\u7684\u5168\u5c40\u72b6\u6001\u7ba1\u7406\u80fd\u529b\u3002"),Object(b.b)("li",{parentName:"ol"},"\u72b6\u6001\u7ba1\u7406\u4e2d\u7ec4\u4ef6\u7ea7\u522b\u7684\u7cbe\u786e\u66f4\u65b0\u3002"),Object(b.b)("li",{parentName:"ol"},"Vue3\u603b\u662f\u8981\u5b66\u7684\u561b\uff0c\u63d0\u524d\u5b66\u4e60\u9632\u6b62\u5931\u4e1a\uff01")),Object(b.b)("h2",{id:"\u7f3a\u70b9\uff1a"},"\u7f3a\u70b9\uff1a"),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},"\u7531\u4e8e\u9700\u8981\u7cbe\u786e\u7684\u6536\u96c6\u4f9d\u8d56\u5168\u9760",Object(b.b)("inlineCode",{parentName:"li"},"useStore"),"\uff0c\u6240\u4ee5",Object(b.b)("inlineCode",{parentName:"li"},"selector"),"\u51fd\u6570\u4e00\u5b9a\u8981\u7cbe\u786e\u7684\u8bbf\u95ee\u5230\u4f60\u5173\u5fc3\u7684\u6570\u636e\u3002\u751a\u81f3\u5982\u679c\u4f60\u9700\u8981\u89e6\u53d1\u6570\u7ec4\u5185\u90e8\u67d0\u4e2a\u503c\u7684\u66f4\u65b0\uff0c\u90a3\u4f60\u5728useStore\u4e2d\u5c31\u4e0d\u80fd\u53ea\u8fd4\u56de\u8fd9\u4e2a\u6570\u7ec4\u672c\u8eab\u3002")),Object(b.b)("p",null,"\u4e3e\u4e00\u4e2a\u4f8b\u5b50\uff1a"),Object(b.b)("pre",null,Object(b.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"function ViewArea() {\n  const msgList = useStore((store) => {\n    return store.state.msgList.map((msg, i) => (\n      <div onClick={() => mutations.delMsg2(i)} key={i}>\n        {msg}\n      </div>\n    ));\n  });\n\n  return (\n    <Card hoverable style={{marginBottom: 24}}>\n      <h1>\u6d88\u606f\u5217\u8868</h1>\n      {msgList}\n    </Card>\n  )\n}\n")),Object(b.b)("p",null,"\u8fd9\u6bb5\u4ee3\u7801\u76f4\u63a5\u5728",Object(b.b)("inlineCode",{parentName:"p"},"useStore"),"\u4e2d\u8fd4\u56de\u4e86\u6574\u6bb5jsx\uff0c\u662f\u56e0\u4e3a",Object(b.b)("inlineCode",{parentName:"p"},"map"),"\u7684\u8fc7\u7a0b\u4e2d\u4f1a\u53bb\u8bbf\u95ee\u6570\u7ec4\u7684\u6bcf\u4e00\u9879\u6765\u6536\u96c6\u4f9d\u8d56\uff0c\u53ea\u6709\u8fd9\u6837\u624d\u80fd\u8fbe\u5230\u54cd\u5e94\u5f0f\u7684\u76ee\u7684,\u6216\u8005\u5728\u64cd\u4f5c\u6570\u7ec4\u540e\uff0c\u8981\u5c06\u65b0\u6570\u7ec4\u91cd\u65b0\u8d4b\u503c\u3002"))}l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"demo\\design\\index.mdx"}}),l.isMDXComponent=!0}}]);