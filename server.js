/*
 * @Author: Yoona Lim miraclefishleong@gmail.com
 * @Date: 2024-04-25 22:30:52
 * @LastEditors: Yoona Lim miraclefishleong@gmail.com
 * @LastEditTime: 2024-04-25 22:38:51
 * @FilePath: \AJAX-demo\server.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const express = require('express')

const app = express()

app.get('/server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.send('Hello World get AJAX!')
})

app.post('/server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.send('Hello World post AJAX!')
})

app.listen(8000, () => {
    console.log('Server is running at http://localhost:8000')
})