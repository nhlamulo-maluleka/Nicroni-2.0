const computeSize = (list, target, element) => {
    const wTest = /^[w-]/i
    const hTest = /^[h-]/i
    
    for(let c of list) {
        if(c.search(wTest) !== -1){
            element.width = `${parseInt(c.replace(target, ''))}px`;
        }

        if(c.search(hTest) !== -1){
            element.height = `${parseInt(c.replace(target, ''))}px`;
        }
    }
}

const getPaddingRegex = type => {
    switch(type){
        case "p-": return /^[p-]/i;
        case "pl-": return /^[pl-]/i;
        case "pr-": return /^[pr-]/i;
        case "pt-": return /^[pt-]/i;
        case "pb-": return /^[pb-]/i
    }
}

const getMarginRegex = type => {
    switch(type){
        case "m-": return /^[m-]/i;
        case "ml-": return /^[ml-]/i;
        case "mr-": return /^[mr-]/i;
        case "mt-": return /^[mt-]/i;
        case "mb-": return /^[mb-]/i
    }
}

const computePadding = (clist, type, element) => {
    for(let c of clist) {
        if(c.search(getPaddingRegex(type)) !== -1) {
            const pvalue = c.replace(type, '');
            
            if(isNaN(pvalue)) return;
            if(type === "p-") element.padding = `${parseInt(pvalue)}px`;
            if(type === "pl-") element.paddingLeft = `${parseInt(pvalue)}px`;
            if(type === "pr-") element.paddingRight = `${parseInt(pvalue)}px`;
            if(type === "pt-") element.paddingTop = `${parseInt(pvalue)}px`;
            if(type === "pb-") element.paddingBottom = `${parseInt(pvalue)}px`;
        }
    }
}

const computeMargin = (clist, type, element) => {
    for(let c of clist) {
        if(c.search(getMarginRegex(type)) !== -1) {
            const mvalue = c.replace(type, '');
            
            if(isNaN(mvalue)) return;
            if(type === "m-") element.margin = `${parseInt(mvalue)}px`;
            if(type === "ml-") element.marginLeft = `${parseInt(mvalue)}px`;
            if(type === "mr-") element.marginRight = `${parseInt(mvalue)}px`;
            if(type === "mt-") element.marginTop = `${parseInt(mvalue)}px`;
            if(type === "mb-") element.marginBottom = `${parseInt(mvalue)}px`;
        }
    }
}

const getFontStyleType = (type) => {
    switch(type) {
        case "fs-": return /^[fs-]/i;
        case "fw-": return /^[fw-]/i;
        case "ft-": return /^[ft-]/i;
    }
}

const computeFont = (clist, type, element) => {
    for(let c of clist) {
        if(c.search(getFontStyleType(type)) !== -1) {
            const fvalue = c.replace(type, '');

            switch(type) {
                case "fs-": 
                    element.fontSize = `${parseInt(fvalue)}pt`; 
                    break;
                case "fw-":
                    element.fontWeight = `${fvalue}`;
                    break;
                case "ft-":
                    element.fontStyle = `${fvalue}`;
                    break;
            }
        }
    }
}

export {computeSize, computePadding, computeMargin, computeFont}