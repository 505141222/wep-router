import { HashRouter } from './hash'
import { HistoryRouter } from './history';
import { ROUTERLIST } from './routeList';

const MODE = 'hash'

class WebRouter {
    constructor({
        mode = MODE ,
        routeList
    }) {
        this.router = mode === MODE ? new HashRouter(routeList) : new HistoryRouter(routeList)
    }
    push(path) {
        this.router.push(path)
    }
    replace(path) {
        this.router.replace(path)
    }
    go(n) {
        this.router.go(n)
    }
    back() {
        this.router.back()
    }
}

const webRouter = new WebRouter({
    mode: 'history',
    routeList: ROUTERLIST
  });
  webRouter.push('/')
  webRouter.push('/aaaa')
  webRouter.back()
  webRouter.go(5)