const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const port = 8000;
const USER_IND = 'identification';
const LOGIN_PATH = 'http://www.airchinacc.com/login';

app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');


// 请求拦截器，验证是否登录
app.use((req, res, next) => {
    const {cookies} = req;
    // 其他请求验证cookie，没有cookie强制跳转到登录界面
    if (!cookies[USER_IND]) {
        res.redirect(LOGIN_PATH);
        return;
    }
    next();
})

app.get('/', (req, res) => {
    res.render(`home`)
})

app.get('*', (req, res) => {
    res.render('404');
})

app.listen(port, () => {
    console.log(`Trip-node-server start at http://localhost:${port}`)
})