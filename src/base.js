const ELEMENT = document.querySelector('#app');

export class BaseRouter {
    constructor(list) {
        this.list = list 
    }
    render(state){
        console.log(this.list)
        let ele = this.list.find((item)=> item.path === state)
        ele = ele || this.list.find((item)=> item.path === '*')
        ELEMENT.innerHTML = ele.component
    }
}