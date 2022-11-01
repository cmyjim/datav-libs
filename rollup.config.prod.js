/*
 * @Author: cuimengyu 1162843632@qq.com
 * @Date: 2022-10-27 11:09:26
 * @LastEditors: cuimengyu 1162843632@qq.com
 * @LastEditTime: 2022-10-27 14:00:28
 * @Description: 
 */
const path = require('path')
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const babel = require('rollup-plugin-babel')
const json = require('rollup-plugin-json')
const {terser} = require('rollup-plugin-terser')
const inputPath = path.resolve(__dirname, './src/index.js')
const outputUmdPath = path.resolve(__dirname,'./dist/jim-datav.min.js')
const outputEsPath = path.resolve(__dirname,'./dist/jim-datav.es.min.js')
module.exports = {
    input: inputPath,
    output:[{
        file:outputUmdPath,
        format: 'umd',
        name: 'Datav'
    },{
        file:outputEsPath,
        format: 'es',
        name: 'Datav'
    }],
    plugins:[
        resolve(),
        commonjs(),
        babel({
            exclude: "node_modules/**"
        }),
        json(),
        terser()
    ],
    external:['vue']
}