const COMPONENT_FILE_ROOT = '/src/components'

const buildComponent = async (componentID, componentLocation) => {
    let component = await fetch(componentLocation)
    component = await component?.text()
    if (!component) return
    const element = document.querySelector(componentID)
    if (!element) return
    element.innerHTML = component
}


const initComponent = async () => {
    await buildComponent("#header-component", `${COMPONENT_FILE_ROOT}/header.html`)
    console.log("hello form 1")
    await buildComponent("#hero-component", `${COMPONENT_FILE_ROOT}/hero.html`)



}



initComponent()
