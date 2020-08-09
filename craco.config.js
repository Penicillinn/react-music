const path = require('path');

const resolve = (dir) => path.resolve(__dirname,dir)

module.exports = {
    webpack: {
        alias: {
            '@': resolve('src'),
            '@components': resolve('src/components'),
            '@assets': resolve('src/assets'),
            '@pages': resolve('src/pages'),
            '@router': resolve('src/router'),
            '@services': resolve('src/services'),
            '@store': resolve('src/store'),
            '@utils': resolve('src/utils')
        }
    }
}