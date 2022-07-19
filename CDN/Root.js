export default class Root {
    apply = (clist, style, applyProps, other) => {
        for (let c of clist) applyProps(c, style, other)
    }
}