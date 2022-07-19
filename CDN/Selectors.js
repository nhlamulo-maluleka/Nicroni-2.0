import implement from "./nicroni.implement.js"

const Structure = [
    {
        selector: ['[class*="w-"]'],
        method: elem => implement.widthStyle(elem)
    },
    {
        selector: ['[class*="h-"]'],
        method: elem => implement.heightStyle(elem)
    },
    {
        selector: ['[class*="fs-"]', '[class*="fw-"]', '[class*="ft-"]', '[class*="ff-"]'],
        method: elem => implement.fontStyle(elem)
    },
    {
        selector: ['[class*="al-"]'],
        method: elem => implement.alignStyle(elem)
    },
    {
        selector: ['[class*="p-"]', '[class*="pl-"]', '[class*="pr-"]', '[class*="pt-"]', '[class*="pb-"]'],
        method: elem => implement.paddingStyle(elem)
    },
    {
        selector: ['[class*="m-"]', '[class*="ml-"]', '[class*="mr-"]', '[class*="mt-"]', '[class*="mb-"]'],
        method: elem => implement.marginStyle(elem)
    },
    {
        selector: ['[class*="bg-"]'],
        method: elem => implement.backgroundStyle(elem)
    },
    {
        selector: ['[class*="color-"]'],
        method: elem => implement.foregroundColorStyle(elem)
    },
    {
        selector: ['[class*="d-"]'],
        method: elem => implement.displayStyle(elem)
    },
    {
        selector: ['[class*="br-"]'],
        method: elem => implement.borderRadiusStyle(elem)
    },
    {
        selector: ['[class*="border-"]', '[class*="borderl-"]', '[class*="borderr-"]', '[class*="bordert-"]', '[class*="borderb-"]'],
        method: elem => implement.borderStyle(elem)
    },
    {
        selector: ['[class*="opacity-"]'],
        method: elem => implement.opacityStyle(elem)
    },
    {
        selector: ['[class*="center"]'],
        method: elem => implement.centerStyle(elem)
    },
    {
        selector: ['[class*="outline-"]'],
        method: elem => implement.outlineStyle(elem)
    },
    {
        selector: ['[class*="ls-"]', '[class*="lst-"]', '[class*="lsp-"]', '[class*="lsi-"]'],
        method: elem => implement.listStyle(elem)
    },
    {
        selector: ['[class*="grid-"]'],
        method: elem => implement.gridTemplateStyle(elem)
    },
    {
        selector: ['[class*="grid-col-"]'],
        method: elem => implement.gridColumnStyle(elem)
    },
    {
        selector: ['[class*="grid-row-"]'],
        method: elem => implement.gridRowStyle(elem)
    },
    {
        selector: ['[class*="gap-"]'],
        method: elem => implement.gapStyle(elem)
    },
    {
        selector: ['[class*="td-"]'],
        method: elem => implement.textDecorationStyle(elem)
    }
]

export default Structure;