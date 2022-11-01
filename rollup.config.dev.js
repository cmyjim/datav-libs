/*
 * @Author: cuimengyu 1162843632@qq.com
 * @Date: 2022-10-27 11:09:26
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-10-27 16:30:56
 * @Description: 
 */
const path = require('path')
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const babel = require('rollup-plugin-babel')
const json = require('rollup-plugin-json')
const vue = require('rollup-plugin-vue')
const postcss = require('rollup-plugin-postcss')
const inputPath = path.resolve(__dirname, './src/index.js')
const outputUmdPath = path.resolve(__dirname,'./dist/jim-datav.js')
const outputEsPath = path.resolve(__dirname,'./dist/jim-datav.es.js')
module.exports = {
    input: inputPath,
    output:[{
        file:outputUmdPath,
        format: 'umd',
        name: 'Datav',
        globals: {
            vue: "vue"
        }
    },{
        file:outputEsPath,
        format: 'es',
        name: 'Datav',
        globals: {
            vue: "vue"
        }
    }],
    plugins:[
        vue(),
        resolve(),
        commonjs(),
        babel({
            exclude: "node_modules/**"
        }),
        json(),
        postcss({
            plugins:[]
        })
    ],
    external:['vue']
}