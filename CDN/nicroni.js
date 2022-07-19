import Structure from "./Selectors.js"

const getQuerySelector = async (selector) => await document.querySelectorAll(selector)

const applyStyle = ({ selector, method }) => {
    selector.forEach((clselector) => {
        getQuerySelector(clselector).then(elements => {
            if (elements.length === 0) return
            for (let element of elements) method(element)
        })
    })
}

window.addEventListener("load", async () => {
    if (document.readyState !== "complete") return
    Structure.map((object) => applyStyle(object))
})