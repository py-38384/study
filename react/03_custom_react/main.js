function renderDom(newElement, parentElement){
    const domElement = document.createElement(newElement.type)
    domElement.innerHTML = newElement.child
    for (let prop in newElement.props){
        domElement.setAttribute(prop,newElement.props[prop])
    }
    parentElement.append(domElement)
}
const reactElement = {
    type: 'a',
    props:{
        class: 'link',
        href: 'https://google.com',
        target: '_blank'
    },
    child: 'Click me to visit google'
}
const root = document.getElementById('root')

renderDom(reactElement, root)