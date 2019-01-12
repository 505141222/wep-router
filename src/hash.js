import { BaseRouter } from './base'

export class HashRouter extends BaseRouter {
    constructor (list){
        super(list)
        this.handler();
        window.addEventListener('hashchange',item => {
            this.handler()
        })
    }
    handler() {
        console.log('handler')
        this.render(this.getState())
    }
    getState() {
        const hash = window.location.hash
        return hash ? hash.slice(1) : '/'
    }
    getUrl(path) {
        const href = window.location.href;
        const index = href.indexOf('#');
        const base = index >= 0 ? href.slice(0,index) : href
        return `${base}#${path}`
    }
    push(path) {
        window.location.hash = path
    }
    replace(path) {
        window.location.replace(this.getUrl(path))
    }
    go(n) {
        window.history.go(n)
    }
    back() {
        window.history.back()
    }
}