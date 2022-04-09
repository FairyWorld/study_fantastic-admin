module.exports = {
	bundler: '@vuepress/vite',
	lang: 'zh-CN',
	title: 'Fantastic-admin 官网',
	description: '一款开箱即用的 Vue 中后台管理系统框架',
	base: '/fantastic-admin/',
	dest: 'docs',
	head: [
		['link', { rel: 'icon', href: `./favicon.ico` }],
		['keywords', { content: 'fantastic-admin,后台系统,管理后台,后台模版,vue后台,vue-admin,vue-element-admin,vue-admin-template' }],
		['description', { content: '一款开箱即用的 Vue 中后台管理系统框架，采用 Vue3 + Vite2 技术栈。' }],
		['script', {}, `var _hmt = _hmt || [];
		_hmt.push(['_requirePlugin', 'UrlChangeTracker', {
			shouldTrackUrlChange: function(newPath, oldPath) {
				return newPath && oldPath;
			}
		}]);
		(function() {
			var hm = document.createElement("script");
			if (location.origin.includes('gitee')) {
				hm.src = "https://hm.baidu.com/hm.js?ba0ee7b31f404b7dc10bfcd8bdc7183d";
			} else {
				hm.src = "https://hm.baidu.com/hm.js?d07a64f7a02cd5e9c01e1b36948ac4a5";
			}
			var s = document.getElementsByTagName("script")[0];
			s.parentNode.insertBefore(hm, s);
		})();`]
	],
	themeConfig: {
		logo: '/logo.png',
		search: false,
		navbar: [
			{
				text: '开发指南',
				children: [
					{
						text: '文档说明',
						link: '/intro.md',
					},
					{
						text: 'Vue3 版本指南',
						link: '/guide/ready.md',
						activeMatch: '/guide/',
					},
					{
						text: 'Vue2 版本指南',
						link: '/guide-vue2/start.md',
						activeMatch: '/guide-vue2/',
					}
				]
			},
			{
				text: '演示地址',
				children: [
					{
						text: 'Vue 3',
						children: [
							{
								text: '基础版',
								link: 'https://hooray.gitee.io/fantastic-admin/vue3/basic'
							},
							{
								text: '专业版',
								link: 'https://hooray.gitee.io/fantastic-admin/vue3/pro'
							}
						]
					},
					{
						text: 'Vue 2',
						children: [
							{
								text: '基础版',
								link: 'https://hooray.gitee.io/fantastic-admin/vue2/basic'
							},
							{
								text: '专业版',
								link: 'https://hooray.gitee.io/fantastic-admin/vue2/pro'
							}
						]
					},
					{
						text: '备份地址',
						children: [
							{
								text: 'Vue3 基础版',
								link: 'https://hooray.github.io/fantastic-admin/vue3/basic'
							},
							{
								text: 'Vue3 专业版',
								link: 'https://hooray.github.io/fantastic-admin/vue3/pro'
							},
							{
								text: 'Vue2 基础版',
								link: 'https://hooray.github.io/fantastic-admin/vue2/basic'
							},
							{
								text: 'Vue2 专业版',
								link: 'https://hooray.github.io/fantastic-admin/vue2/pro'
							}
						]
					}
				]
			},
			{
				text: '技术支持',
				link: '/support.md'
			},
			{
				text: '下载基础版',
				children: [
					{
						text: 'Gitee',
						link: 'https://gitee.com/hooray/fantastic-admin'
					},
					{
						text: 'Github',
						link: 'https://github.com/hooray/fantastic-admin'
					}
				]
			},
			{
				text: '购买专业版',
				link: '/buy.md'
			},
			{
				text: '定制开发',
				link: '/customize.md'
			},
			{
				text: '生态',
				children: [
					{
						text: 'Fantastaic-template',
						link: 'https://hooray.gitee.io/fantastic-template'
					},
					{
						text: 'Fantastaic-admin',
						link: 'https://hooray.gitee.io/fantastic-admin'
					},
					{
						text: 'One-step-admin',
						link: 'https://hooray.gitee.io/one-step-admin'
					},
					{
						text: '战略合作',
						children: [
							{
								text: 'VForm 低代码表单',
								link: 'https://www.vform666.com'
							}
						]
					}
				]
			}
		],
		sidebar: {
			'/guide/': [
				'/guide/intro.md',
				{
					text: '指南',
					children: [
						'/guide/ready.md',
						'/guide/start.md',
						'/guide/coding-standard.md',
						'/guide/configure.md',
						'/guide/layout.md',
						'/guide/theme.md',
						'/guide/router.md',
						'/guide/axios.md',
						'/guide/store.md',
						'/guide/global-resources.md',
						'/guide/build.md'
					]
				},
				{
					text: '高级',
					children: [
						'/guide/permission.md',
						'/guide/tabbar.md',
						'/guide/keep-alive.md',
						'/guide/i18n.md',
						'/guide/plop.md',
						'/guide/plop-module.md',
						'/guide/global-properties.md',
						'/guide/storage.md',
						'/guide/error-log.md',
						'/guide/font.md',
						'/guide/jsx.md',
						'/guide/file-system-route.md',
						'/guide/position-fixed.md'
					]
				},
				{
					text: '组件',
					children: [
						'/guide/components/readme.md',
						'/guide/components/basic.md',
						{
							text: '扩展组件',
							children: [
								'/guide/components/auth.md',
								'/guide/components/auth-all.md',
								'/guide/components/page-header.md',
								'/guide/components/page-main.md',
								'/guide/components/fixed-action-bar.md',
								'/guide/components/search-bar.md',
								'/guide/components/batch-action-bar.md',
								'/guide/components/image-upload.md',
								'/guide/components/images-upload.md',
								'/guide/components/file-upload.md',
								'/guide/components/image-preview.md',
								'/guide/components/svg-icon.md',
								'/guide/components/trend.md',
								'/guide/components/cascader-area.md',
								'/guide/components/chip.md',
								'/guide/components/colorful-card.md',
								'/guide/components/icon-picker.md',
								'/guide/components/sparkline.md',
								'/guide/components/i18n-selector.md'
							]
						}
					]
				},
				{
					text: '其它',
					children: [
						'/guide/vue3-composition-api.md',
						'/guide/upgrade.md',
						'/guide/vue2-to-vue3.md',
						'/guide/vea-to-fa.md',
						'/guide/q-a.md'
					]
				}
			],
			'/guide-vue2/': [
				{
					text: '指南',
					children: [
						'start.md',
						'coding-standard.md',
						'configure.md',
						'layout.md',
						'theme.md',
						'global-resources.md',
						'axios.md',
						'component.md',
						'vuex.md',
						'router.md',
						'permission.md',
						'tabbar.md',
						'keep-alive.md',
						'keep-alive-neste.md',
						'font.md',
						'i18n.md',
						'storage.md',
						'library.md',
						'cdn.md',
						'gzip.md',
						'mock.md',
						'build.md',
						'git.md',
						'bug.md',
						'plop.md',
						'module.md',
						'position-fixed.md',
						'upgrade.md'
					]
				},
				{
					text: '视频教程',
					link: 'https://space.bilibili.com/3079082/channel/detail?cid=156985'
				}
			]
		}
	},
	plugins: [
		['@vuepress/plugin-docsearch', {
			apiKey: '1a963d3300ae4934911e321fb6eba267',
			indexName: 'fantastic-admin',
			placeholder: '搜索',
			searchParameters: {
				facetFilters: ['lang:zh-CN']
			}
		}]
	]
}