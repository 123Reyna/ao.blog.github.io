module.exports = {
    base: '/aoao.blog/',
    title: "aoao科技分享",
    port: 4040,
    description: "个人学习记录,各类资源、教程等记录",
    theme: 'reco',
    markdown: {
        lineNumbers: true,
    },
    head: [
        ['link', {rel: 'icon', href: '/logo.png'}]
    ],
    themeConfig: {
        moveNext: true,
        // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
        nextLinks: true,
        // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
        prevLinks: false,
        nav: [
            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [
                    {text: 'Chinese', items: [{text: 'Japanese', link: '/language/japanese/'}]},
                    {text: 'Japanese', link: '/language/japanese/'}
                ]
            },
            {text: 'Guide', link: '/'},
            {text: 'External', link: 'https://google.com'},
        ],
        sidebar: [
            {
                title: '开发',
                children: ['/document/develop/develop'],
                initialOpenGroupIndex: 1 // 可选的, 默认值是 0
            },
            {
                title: '人工智能',
                sidebarDepth: 2,
                collapsable: true,
                children: [{
                    title: '机器学习',
                    children: ['/document/ai/machine'],

                }, {
                    title: '神经网络',
                    children: ['/document/ai/neural'],

                }],
                initialOpenGroupIndex: 1 // 可选的, 默认值是 0
            },
            {
                title: '算法',
                children: ['/document/algo/algo'],
                initialOpenGroupIndex: 1 // 可选的, 默认值是 0
            },
            {
                title: '运维',
                children: ['/document/devops/devops'],
                initialOpenGroupIndex: 1 // 可选的, 默认值是 0
            },
            {
                title: '项目',
                children: ['/document/project/project'],
                initialOpenGroupIndex: 1 // 可选的, 默认值是 0
            },
            {
                title: '学习工具',
                children: ['/document/learn/learn'],
                initialOpenGroupIndex: 1 // 可选的, 默认值是 0
            }
        ]
    },
};