module.exports = {
    title: '洞见',
    base: '/insight/dist',
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
                        title: '代码质量',
                        path: '/content/coding/code-quality'
                    }
                ]
            }
        ]
    }

}