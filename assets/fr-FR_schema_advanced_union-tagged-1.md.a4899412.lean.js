import{_ as s,s as n,q as a,S as e}from"./chunks/framework.26d7e063.js";const d=JSON.parse(`{"title":"Union : type somme 1","description":"","frontmatter":{"layout":"schema","code":"Schema.intersect([\\nSchema.object({\\nenabled: Schema.boolean().default(false).description('是否开启功能'),\\n}).description('基础配置'),\\nSchema.union([\\nSchema.object({\\nenabled: Schema.const(true).required(),\\nfoo: Schema.number().description('请输入一个数值。'),\\nbar: Schema.string().description('请输入一个字符串。'),\\n}),\\nSchema.object({}),\\n]),\\n])\\n"},"headers":[],"relativePath":"fr-FR/schema/advanced/union-tagged-1.md","filePath":"fr-FR/schema/advanced/union-tagged-1.md"}`),t={name:"fr-FR/schema/advanced/union-tagged-1.md"},o=e("",4),i=[o];function r(p,l,c,k,h,y){return a(),n("div",null,i)}const m=s(t,[["render",r]]);export{d as __pageData,m as default};
