module.exports = {
    title: '洞见',
    base: '/insight/docs/dist',
    dest: './dist',
    themeConfig: {
        nav: [{ text: 'GitHub', link: 'https://github.com/iamjoel/insight' }],
        sidebar: [
            {
                title: '高效法则',
                path: '/content/effective/'
            },
            {
                title: '代码',
                children: [
                    {
                        title: '学新技术的选择和如何学的思考',
                        path: '/content/coding/question-learn-tech'
                    },
                    {
                        title: '代码质量',
                        path: '/content/coding/code-quality'
                    }
                ]
            },
            {
                title: '理财',
                children: [
                    {
                        title: '指数基金',
                        path: '/content/money/etf'
                    }
                ]
            }
        ]
    }

}