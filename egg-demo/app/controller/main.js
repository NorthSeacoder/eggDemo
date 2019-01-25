const Controller = require('egg').Controller

class MainController extends Controller {
    async index() {
        this.ctx.body = 'hello world'
    }
    async time() {
        const time = new Date()
        await this.ctx.render('index', {
            time: time.getFullYear()
        })
    }
    async list() {
        const dataList = {
            list: [{
                    id: 1,
                    title: 'this is news 1',
                    url: '/news/1'
                },
                {
                    id: 2,
                    title: 'this is news 2',
                    url: '/news/2'
                }
            ]
        };
        await this.ctx.render('list.tpl', dataList);
    }
}
module.exports = MainController