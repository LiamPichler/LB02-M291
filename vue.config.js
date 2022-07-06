const path = require('path')
module.exports = {
    pages: {
        'index': {
            //entry: './01_02_03_04_06_task/src/main.js',
            entry: './05_task/client/src/main.js',
            //entry: './07_task/src/main.js',
            template: 'public/index.html',
            title: 'State in vue'
        }
    },

    chainWebpack: config => {
        config.resolve.alias.set(
            'vue$',
            path.resolve(__dirname, 'node_modules/vue/dist/vue.runtime.esm.js')
        )
    }
}
