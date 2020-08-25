(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{498:function(t,e,s){"use strict";s.r(e);var a=s(42),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"customizando"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#customizando"}},[t._v("#")]),t._v(" Customizando 📝")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/docs/customization.html"}},[t._v("🇺🇸 English version")])],1),t._v(" "),s("blockquote",[s("p",[t._v("Aqui estamos considerando que você já tem um deploy criado a partir do\n"),s("a",{attrs:{href:"https://github.com/ecomplus/storefront-starter",target:"_blank",rel:"noopener noreferrer"}},[t._v("Storefront Starter"),s("OutboundLink")],1),t._v(" e usando nosso template padrão\n"),s("code",[t._v("@ecomplus/storefront-template")]),t._v(". Se você é um lojista E-Com Plus nós já fizemos isto por você 😉")])]),t._v(" "),s("p",[t._v("Há várias formas de customizar o Storefront:")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#construir-paginas-no-cms"}},[t._v("Compor as páginas no CMS")]),t._v(" (o jeito mais fácil);")]),t._v(" "),s("li",[s("a",{attrs:{href:"#criar-sobrescrever-tema"}},[t._v("Criar/sobrescrever tema")]),t._v(";")]),t._v(" "),s("li",[s("a",{attrs:{href:"#editar-views-pre-renderizadas"}},[t._v("Editar parte do código EJS (HTML) do template padrão")]),t._v(";")]),t._v(" "),s("li",[s("a",{attrs:{href:"#scripts-adicionais"}},[t._v("Adicionar/importar JavaScript customizado")]),t._v(";")]),t._v(" "),s("li",[s("a",{attrs:{href:"#substituir-componentes-vue"}},[t._v("Substituir scripts e componentes Vue com Webpack aliases")]),t._v(" (PRO 🤘);")])]),t._v(" "),s("p",[t._v("Antes de começar, pode ser útil rodar o seu deploy do Storefront\nem "),s("em",[t._v("localhost")]),t._v("\n("),s("a",{attrs:{href:"https://www.youtube.com/watch?v=r-YudHVLJS8",target:"_blank",rel:"noopener noreferrer"}},[t._v("vídeo tutorial"),s("OutboundLink")],1),t._v("):")]),t._v(" "),s("ol",[s("li",[t._v("Certifique-se que o "),s("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js"),s("OutboundLink")],1),t._v(" está instalado;")]),t._v(" "),s("li",[t._v("Clone seu repositório no GitHub;")]),t._v(" "),s("li",[t._v("Instale as dependências do npm;")]),t._v(" "),s("li",[t._v("Rode o script "),s("code",[t._v("serve")]),t._v(";")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/ecomplus-stores/my-store\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" my-store\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run serve\n")])])]),s("h2",{attrs:{id:"construir-paginas-no-cms"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#construir-paginas-no-cms"}},[t._v("#")]),t._v(" Construir páginas no CMS")]),t._v(" "),s("p",[t._v("Acesse a parte administrativa (powered by "),s("a",{attrs:{href:"https://www.netlifycms.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Netlify CMS"),s("OutboundLink")],1),t._v(" ❤️)\ndo seu deploy do Storefront em "),s("code",[t._v("https://www.seudominio.com.br/admin/")]),t._v(", depois do login você poderá:")]),t._v(" "),s("ul",[s("li",[t._v("Editar informações e configurações gerais como contatos, endereço e logo:")])]),t._v(" "),s("div",{staticClass:"demo"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("img",{attrs:{src:"/storefront/assets/img/doc_customization1.png",alt:"CMS"}})]),t._v(" "),s("div",{staticClass:"col"},[s("img",{attrs:{src:"/assets/img/doc_customization2.png",alt:"CMS"}})])])])]),t._v(" "),s("ul",[s("li",[t._v("Setar as cores da identidade da loja:")])]),t._v(" "),s("img",{staticStyle:{"max-height":"180px"},attrs:{src:"/storefront/assets/img/doc_customization3.png",alt:"CMS"}}),t._v(" "),s("ul",[s("li",[t._v("Organizar todas as páginas adicionando, movendo ou removendo seções (arraste e solte):")])]),t._v(" "),s("img",{staticStyle:{"max-height":"240px"},attrs:{src:"/storefront/assets/img/doc_customization.gif",alt:"CMS"}}),t._v(" "),s("ul",[s("li",[t._v("Adicionar código HTML, JS ou CSS extra para cada página ou todo o site:")])]),t._v(" "),s("div",{staticClass:"demo"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("img",{attrs:{src:"/storefront/assets/img/doc_customization4.png",alt:"CMS"}})]),t._v(" "),s("div",{staticClass:"col"},[s("img",{attrs:{src:"/storefront/assets/img/doc_customization5.png",alt:"CMS"}})])])])]),t._v(" "),s("ul",[s("li",[t._v("Criar ou editar páginas extra e posts de blog;")]),t._v(" "),s("li",[t._v("Plugar e customizar widgets adicionais;")])]),t._v(" "),s("h2",{attrs:{id:"criar-sobrescrever-tema"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#criar-sobrescrever-tema"}},[t._v("#")]),t._v(" Criar/sobrescrever tema")]),t._v(" "),s("p",[t._v("Estamos usando o "),s("code",[t._v("@ecomplus/storefront-twbs")]),t._v("\n(baseado em "),s("a",{attrs:{href:"https://getbootstrap.com/docs/4.5/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bootstrap 4"),s("OutboundLink")],1),t._v(") como base CSS/JS,\npara detalhes cheque a "),s("RouterLink",{attrs:{to:"/@ecomplus/storefront-twbs/"}},[t._v("referência da UI base")]),t._v(".\nVocê também pode querer checar os\n"),s("RouterLink",{attrs:{to:"/@ecomplus/storefront-template/docs/01-elements.html"}},[t._v("seletores de elementos")]),t._v("\nmais importantes to template.")],1),t._v(" "),s("ul",[s("li",[t._v("Se você quer apenas adicionar poucos trechos de CSS,\nfaça isto no CMS em "),s("em",[t._v("Layout > Inserir código > CSS customizado")]),t._v(";")]),t._v(" "),s("li",[t._v("Se você planeja fazer alterações maiores nós recomendamos\neditar os arquivos SCSS\n(você pode usar "),s("a",{attrs:{href:"https://sass-lang.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sass"),s("OutboundLink")],1),t._v(" ou apenas CSS padrão)\ndiretamente do GitHub ou usando seu editor de código preferido:\n"),s("ol",[s("li",[t._v("Adicione ou sobrescreva estilos em\n"),s("code",[t._v("/template/scss/custom-css/_styles.scss")]),t._v(";")]),t._v(" "),s("li",[t._v("Para substituir os estilos padrão do template você pode tentar usar\n"),s("a",{attrs:{href:"https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss",target:"_blank",rel:"noopener noreferrer"}},[t._v("variáveis SCSS do Bootstrap"),s("OutboundLink")],1),t._v("\nem "),s("code",[t._v("/template/scss/_variables.scss")]),t._v(";")]),t._v(" "),s("li",[t._v("Finalmente, você também pode editar "),s("em",[t._v("from scratch")]),t._v(" em\n"),s("code",[t._v("/template/scss/_main.scss")]),t._v(" se você não quiser importar todos os\n"),s("a",{attrs:{href:"https://github.com/ecomplus/storefront/tree/master/%40ecomplus/storefront-template/template/scss",target:"_blank",rel:"noopener noreferrer"}},[t._v("estilos do Storefront Template"),s("OutboundLink")],1),t._v(",\npor exemplo se quiser criar do zero os estilos do rodapé e\nnão quiser importar o padrão do template\n(perf optim 🚀, não tão fácil quanto as opções anteriores);")])])])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("Também encorajamos a utilização de\n"),s("RouterLink",{attrs:{to:"/@ecomplus/storefront-twbs/docs/05-vars.html"}},[t._v("CSS vars")]),t._v("\nsempre que possível, para tornar seu código adicional\nfacilmente customizável e extensível.")],1)]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("Exemplo usando CSS vars")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".top-bar")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("var")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("--secondary"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("img",{staticStyle:{"max-height":"180px"},attrs:{src:"/storefront/assets/img/doc_customization9.png",alt:"CMS"}})]),t._v(" "),s("p",[t._v("Como exemplo você também pode analisar o SCSS aplicado por\nalguns dos nossos temas adicionais, como\n"),s("a",{attrs:{href:"https://github.com/ecomplus/storefront/tree/master/%40ecomplus/storefront-template/template/scss/themes/clean-gray",target:"_blank",rel:"noopener noreferrer"}},[t._v("Clean Gray"),s("OutboundLink")],1),t._v("\ne "),s("a",{attrs:{href:"https://github.com/ecomplus/storefront/blob/master/%40ecomplus/storefront-template/template/scss/themes/niche-baby/_variables.scss",target:"_blank",rel:"noopener noreferrer"}},[t._v("Niche Baby"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"editar-views-pre-renderizadas"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#editar-views-pre-renderizadas"}},[t._v("#")]),t._v(" Editar views pré-renderizadas")]),t._v(" "),s("p",[t._v("No CMS é possível incluir snippets HTML adicionais, mas para\neditr as views padrão você deve editar os arquivos\n"),s("a",{attrs:{href:"https://ejs.co/",target:"_blank",rel:"noopener noreferrer"}},[t._v("EJS"),s("OutboundLink")],1),t._v(" na pasta "),s("code",[t._v("/template/pages/")]),t._v(":")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("/template/pages/@/meta.ejs")]),t._v(" para customizar meta tags\n(especialmente para SEO):")])]),t._v(" "),s("img",{attrs:{src:"/storefront/assets/img/doc_customization8.png",alt:"CMS",width:"400"}}),t._v(" "),s("ul",[s("li",[s("code",[t._v("/template/pages/@/sections/")]),t._v(" para editar vários componentes reutilizáveis 📌,\nestes renderizam o conteúdo principal das páginas e são\nconfigurados no arraste e solte do CMS:")])]),t._v(" "),s("img",{attrs:{src:"/storefront/assets/img/doc_customization7.png",alt:"CMS",width:"400"}}),t._v(" "),s("ul",[s("li",[s("code",[t._v("/template/pages/@/layout/")]),t._v(" para editar organismos comuns do\nlayout (rodapé, cabeçalho, menu);")]),t._v(" "),s("li",[s("code",[t._v("/template/pages/@/app/")]),t._v(" para customizar a view específica\ndo carrinho e checkout;")])]),t._v(" "),s("p",[t._v("Antes de começar a editar HTML, deve ser útil checar os\n"),s("RouterLink",{attrs:{to:"/@ecomplus/storefront-twbs/docs/01-components.html"}},[t._v("componentes")]),t._v(" e\nclasses CSS utilitárias disponíveis por padrão.")],1),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("EJS é uma linguaguem de template simples baseada em JS\npara gerar markup HTML programaticamente,\nclaro que você pode apenas escrever HTML padrão,\nmas para customizações avançadas recomendamos que\nverifique como funciona a\n"),s("RouterLink",{attrs:{to:"/@ecomplus/storefront-framework/docs/01-renderization.html"}},[t._v("renderização")]),t._v("\ndo Storefront com EJS.")],1)]),t._v(" "),s("blockquote",[s("p",[t._v("Para manter as lojas customizadas atualizadas nós\ncontinuamos tentando atualizar os arquivos EJS editados após\ncada release do Storefront, preservando os snippets editados\nmas atualizando as partes não alteradas via Git diff 😎")])]),t._v(" "),s("h3",{attrs:{id:"nota-para-cards-de-produtos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nota-para-cards-de-produtos"}},[t._v("#")]),t._v(" Nota para cards de produtos")]),t._v(" "),s("p",[t._v("Some pre-rendered HTML elements are overwritten with JS on client by the\nrespective Vue components, it happens specially with product cards pre-rendered by\n"),s("code",[t._v("/template/pages/@/sections/inc/product-item.ejs")]),t._v(".")]),t._v(" "),s("p",[t._v("In those cases you should use "),s("code",[t._v("data-slot")]),t._v(" attribute to preserve your custom code\nafter hydration, for example:")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("data-slot")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("buy-button-content"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("i")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("fas fa-shopping-bag mr-1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("i")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  Buy now\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("The "),s("code",[t._v("data-slot")]),t._v(" value must correspond to a\n"),s("a",{attrs:{href:"https://vuejs.org/v2/guide/components-slots.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("slot"),s("OutboundLink")],1),t._v(" name\nof the Vue component, check\n"),s("RouterLink",{attrs:{to:"/@ecomplus/storefront-components/docs/ProductCard.html#slots"}},[s("code",[t._v("<ProductCard>")]),t._v(" slots here")]),t._v(".")],1),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("PRO TIP")]),t._v(" "),s("p",[t._v("If you need deeper customization, consider creating an Webpack alias to\n"),s("code",[t._v("./html/ProductCard.html")]),t._v(" (check "),s("a",{attrs:{href:"#replace-vue-components"}},[t._v("replacing Vue components")]),t._v(").")])]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("You don't need to know Vue.js to customize Storefront")]),t._v(",\nVue is awesome and really easy to learn, for advanced customization it'll give you\nlot of productivity, but it's not required at all ✌️")])]),t._v(" "),s("h2",{attrs:{id:"scripts-adicionais"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scripts-adicionais"}},[t._v("#")]),t._v(" Scripts adicionais")]),t._v(" "),s("p",[t._v("By default you can use jQuery 3 (slim), Vue.js 2 and some other\nsmall libraries globally available, for details check\n"),s("RouterLink",{attrs:{to:"/@ecomplus/storefront-twbs/docs/06-javascript.html"}},[t._v("base UI included JS")]),t._v(" and\n"),s("RouterLink",{attrs:{to:"/@ecomplus/storefront-template/docs/05-javascript.html"}},[t._v("template JS globals")]),t._v(".")],1),t._v(" "),s("ul",[s("li",[t._v("If you just want to add few JS, do it in the CMS at "),s("em",[t._v("Layout > Insert code")]),t._v("\nadding "),s("code",[t._v("<script>")]),t._v(" tags before "),s("code",[t._v("/body")]),t._v(" or (when really needed) "),s("code",[t._v("/head")]),t._v(",\nyou can also add scripts to specific pages using "),s("em",[t._v("HTML code")]),t._v(" section;")]),t._v(" "),s("li",[t._v("If you're planning to add lot of JS (or ES) code, it's strongly recommended to\nedit JS files at "),s("code",[t._v("/template/js/custom-js/")]),t._v(" folder directly from GitHub or locally using your preferred code editor. You can also create new files and\n"),s("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/import",target:"_blank",rel:"noopener noreferrer"}},[t._v("import"),s("OutboundLink")],1),t._v(" properly;")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("When editing "),s("code",[t._v("/template/js/")]),t._v(" files you can use ES6 features without worrying about\nbrowser support, code there will be parsed and minified.")])]),t._v(" "),s("h2",{attrs:{id:"substituir-componentes-vue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#substituir-componentes-vue"}},[t._v("#")]),t._v(" Substituir componentes Vue")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("Use it with moderation and only when really needed, skip using for things other\nthen explained below, specially if you don't know Webpack very well.")])]),t._v(" "),s("p",[t._v("When easier ways aren't sufficient to make your wanted customization,\nyou can give a try with\n"),s("a",{attrs:{href:"https://webpack.js.org/configuration/resolve/#resolvealias",target:"_blank",rel:"noopener noreferrer"}},[t._v("Webpack 4 aliases"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("Generally we recommend to use it only for replacing Vue components\nHTML template 📐, although it would work also for scripts and styles.")]),t._v(" "),s("p",[t._v("You should start getting the original source from\n"),s("a",{attrs:{href:"https://github.com/ecomplus/storefront/tree/master/%40ecomplus/storefront-components/src/html",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub repo"),s("OutboundLink")],1),t._v(",\ncopy the file you want to replace and paste it inside\n"),s("code",[t._v("/template/js/custom-js/")]),t._v(" folder, edit the new file as needed and then create\na "),s("code",[t._v("storefront.webpack.js")]),t._v(" file at the root of your repository, as example:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// storefront.webpack.js")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  resolve"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    alias"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./html/ProductCard.html'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/template/js/custom-js/html/ProductCard.html'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("Note that all "),s("RouterLink",{attrs:{to:"/@ecomplus/storefront-components/"}},[t._v("Storefront components")]),t._v(" are\ncomposed by 4 files (Vue/HTML/JS/SCSS), the Vue file always imports the\nHTML one with "),s("code",[t._v("./html/{ComponentName}.html")]),t._v(".")],1)])])}),[],!1,null,null,null);e.default=o.exports}}]);