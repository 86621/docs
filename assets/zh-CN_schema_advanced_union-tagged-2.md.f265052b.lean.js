import{_ as s,s as n,q as t,S as a}from"./chunks/framework.26d7e063.js";const d=JSON.parse(`{"title":"Union：配置联动 2","description":"","frontmatter":{"layout":"schema","code":"Schema.intersect([\\n  Schema.object({\\n    shared: Schema.string().description('公用的配置项。'),\\n    type: Schema.union(['foo', 'bar']).required().description('选择一个类型。'),\\n  }).description('基础配置'),\\n  Schema.union([\\n    Schema.object({\\n      type: Schema.const('foo').required(),\\n      value: Schema.number().default(114514).description('请输入一个数值。'),\\n    }).description('特殊配置 1'),\\n    Schema.object({\\n      type: Schema.const('bar').required(),\\n      text: Schema.string().description('请输入一个字符串。'),\\n    }).description('特殊配置 2'),\\n  ]),\\n])\\n"},"headers":[],"relativePath":"zh-CN/schema/advanced/union-tagged-2.md","filePath":"zh-CN/schema/advanced/union-tagged-2.md"}`),e={name:"zh-CN/schema/advanced/union-tagged-2.md"},o=a("",4),i=[o];function r(p,l,c,k,h,y){return t(),n("div",null,i)}const x=s(e,[["render",r]]);export{d as __pageData,x as default};
