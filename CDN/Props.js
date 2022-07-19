import Root from "./Root.js"
import PropHelpers from "./PropHelpers.js"

export default class Props extends Root {
    constructor() {
        super()
        this.pHs = new PropHelpers();
    }

    isValid = (style) => style ? true : false

    widthProp = (c, style, children = null) => {
        if (c.search(/^(w-)/i) === -1) return
        const wvalue = c.split('-')

        if (wvalue[1] === "children") {
            children.forEach(({ style }) => {
                if (!isValid(style)) return
                this.pHs.applyWidthProp(style, wvalue[2])
            })
        } else this.pHs.applyWidthProp(style, wvalue[1])
    }

    heightProp = (c, style, children = null) => {
        if (c.search(/^(h-)/i) === -1) return
        const hvalue = c.split('-')

        if (hvalue[1] === "children") {
            children.forEach(({ style }) => {
                if (!isValid(style)) return
                this.pHs.applyHeightProp(style, hvalue[2])
            })
        } else this.pHs.applyHeightProp(style, hvalue[1])
    }

    backgroundProp = (c, style, children = null) => {
        if (c.search(/^(bg-)/i) === -1) return
        const bgValue = c.split('-')

        if (bgValue[2] === "children") {
            children.forEach(({ style }) => {
                if (!this.isValid(style)) return
                this.pHs.applyBackgroundProp(style, bgValue[1], bgValue[3])
            })
        } else this.pHs.applyBackgroundProp(style, bgValue[1], bgValue[2])
    }

    foregroundColorProp = (c, style, children = null) => {
        if (c.search(/^(color-)/i) === -1) return
        const cvalue = c.split('-')

        if (cvalue[1] === "children") {
            children.forEach(({ style }) => {
                if (!this.isValid(style)) return
                this.pHs.applyForegroundColor(style, cvalue[2])
            })
        } else this.pHs.applyForegroundColor(style, cvalue[1])
    }

    paddingProp = (c, style, children = null) => {
        if (c.search(/^(p)+((l|r|t|b)?)+(-)/i) === -1) return
        const pvalue = c.split('-')

        if (pvalue[1] === "children") {
            children.forEach(({ style }) => {
                if (!this.isValid(style)) return
                this.pHs.applyPaddingProp(style, pvalue[0], this.pHs.sanitize(pvalue[2]))
            })
        } else this.pHs.applyPaddingProp(style, pvalue[0], this.pHs.sanitize(pvalue[1]))
    }

    marginProp = (c, style, children = null) => {
        if (c.search(/^(m)+((l|r|t|b)?)+(-)/i) === -1) return
        const mvalue = c.split('-')

        if (mvalue[1] === "children") {
            children.forEach(({ style }) => {
                if (!this.isValid(style)) return
                this.pHs.applyMarginProp(style, mvalue[0], this.pHs.sanitize(mvalue[2]))
            })
        } else this.pHs.applyMarginProp(style, mvalue[0], this.pHs.sanitize(mvalue[1]))
    }

    fontProp = (c, style, children = null) => {
        if (c.search(/^(f)+((s|w|t|f)?)+(-)/i) === -1) return
        const fvalue = c.split('-')

        if (fvalue[1] === "children") {
            children.forEach(({ style }) => {
                if (!this.isValid(style)) return
                this.pHs.applyFontProp(style, fvalue[0], fvalue[2])
            })
        } else this.pHs.applyFontProp(style, fvalue[0], fvalue[1])
    }

    borderRadiusProp = (c, style, children = null) => {
        if (c.search(/^(br-)/i) === -1) return
        const brvalue = c.split('-')

        if (brvalue[1] === "children") {
            children.forEach(({ style }) => {
                if (!this.isValid(style)) return
                this.pHs.applyBorderRadiusProp(style, brvalue[2])
            })
        } else this.pHs.applyBorderRadiusProp(style, brvalue[1])
    }

    alignProp = (c, style, children = null) => {
        if (c.search(/^(al-)/i) === -1) return
        const alvalue = c.split('-')

        if (alvalue[1] === "children") {
            children.forEach(({ style, childNodes }) => {
                if (!this.isValid(style)) return
                this.pHs.applyAlignProp(style, alvalue[2], childNodes)
            })
        } else this.pHs.applyAlignProp(style, alvalue[1], children)
    }

    borderProp = (c, style, children = null) => {
        if (c.search(/^(border)+((l|r|t|b)?)+(-)/i) === -1) return
        const bvalue = c.split('-')

        if (bvalue[1] === "children") {
            children.forEach(({ style }) => {
                if (!this.isValid(style)) return
                this.pHs.applyBorderProp(style, bvalue[0], bvalue[2])
            })
        } else this.pHs.applyBorderProp(style, bvalue[0], bvalue[1])
    }

    opacityProp = (c, style, children = null) => {
        if (c.search(/^(opacity)+(-)/i) === -1) return
        const opacity = c.split('-')

        if (opacity[1] === "children") {
            children.forEach(({ style }) => {
                if (!isvalid(style)) return
                this.pHs.applyOpacityProp(style, opacity[2])
            })
        } else this.pHs.applyOpacityProp(style, opacity[1])
    }

    centerProp = (c, style, children = null) => {
        if (c.search(/^(center)/i) === -1) return
        const center = c.split('-')

        if(center[1] === "children") {
            children.forEach(({ style, childNodes }) => {
                if(!this.isValid(style)) return
                this.pHs.centerItems(style, center[2], childNodes)
            })
        } else this.pHs.centerItems(style, center[1], children)
    }

    outlineProp = (c, style, children = null) => {
        if (c.search(/^(outline)/i) === -1) return
        const offset = c.split('-')

        if (offset[1] === "children" || offset[2] === "children") {
            children.forEach(({ style }) => {
                if (!this.isValid(style)) return

                if (offset[1] === "offset")
                    this.pHs.applyOutlineProp(style, offset[1], offset[3])
                else
                    this.pHs.applyOutlineProp(style, null, offset[2])
            })
        } else {
            if (offset[1] === "offset")
                this.pHs.applyOutlineProp(style, offset[1], offset[2])
            else
                this.pHs.applyOutlineProp(style, null, offset[1])
        }
    }

    listStyleProp = (c, style, children = null) => {
        if (c.search(/^(ls)+((t|p|i)?)+(-)/i) == -1) return
        let lstyle = c.split('-')

        if (lstyle[1] === "children") {
            children.forEach(({ style }) => {
                if (!this.isValid(style)) return
                this.pHs.applyListStyleProp(style, lstyle[0], lstyle[2])
            })
        } else this.pHs.applyListStyleProp(style, lstyle[0], lstyle[1])
    }

    gridTemplateProp = (c, style, children = null) => {
        if (c.search(/^(grid-)/) === -1) return
        const gt = c.split('-')

        // grid-child-value
        // grid-temp-child-value
        // grid-temp-row/col-children-value

        if (gt[1] === "children" || gt[2] === "children" || gt[3] === "children") {
            children.forEach(({ style }) => {
                switch (gt.length) {
                    case 2:
                        this.pHs.applyGridTemplateProp(style, null, this.pHs.sanitize(gt[2]))
                        break
                    case 3:
                        this.pHs.applyGridTemplateProp(style, gt[1], this.pHs.sanitize(gt[3]))
                        break
                    case 4:
                        this.pHs.applyGridTemplateProp(style, gt[2], this.pHs.sanitize(gt[4]))
                        break
                }
            })
        } else {
            // grid-value
            // grid-temp-value
            // grid-temp-row/col-value
            switch (gt.length) {
                case 2:
                    this.pHs.applyGridTemplateProp(style, null, this.pHs.sanitize(gt[1]))
                    break
                case 3:
                    this.pHs.applyGridTemplateProp(style, gt[1], this.pHs.sanitize(gt[2]))
                    break
                case 4:
                    this.pHs.applyGridTemplateProp(style, gt[2], this.pHs.sanitize(gt[3]))
                    break
            }
        }
    }

    gridColumnProp = (c, style, children = null) => {
        if (c.search(/^(grid-col)/i) === -1) return
        let gridcol = c.split('-')

        // grid-col-child-value
        if (gridcol[2] === "children") {
            children.forEach(({ style }) => {
                if (!isValid(style)) return
                this.pHs.applyGridColumnProp(style, this.pHs.sanitize(gridcol[3]))
            })
        } else this.pHs.applyGridColumnProp(style, this.pHs.sanitize(gridcol[2]))
        // grid-col-value
    }

    gridRowProp = (c, style) => {
        if (c.search(/^(grid-row)/i) === -1) return
        let gridrow = c.split('-')

        // grid-row-child-value
        if (gridrow[2] === "children") {
            children.forEach(({ style }) => {
                if (!isValid(style)) return
                this.pHs.applyGridRowProp(style, this.pHs.sanitize(gridrow[3]))
            })
        } else this.pHs.applyGridRowProp(style, this.pHs.sanitize(gridrow[2]))
        // grid-row-value
    }

    displayProp = (c, style) => {
        if (c.search(/^(d-)/) === -1) return
        const dvalue = c.split('-')

        if (dvalue[1] === "children") {
            children.forEach(({ style }) => {
                if (!isValid(style)) return
                this.pHs.applyDisplayProp(style, dvalue[2])
            })

        } else this.pHs.applyDisplayProp(style, dvalue[1])
    }

    textDecorationProp = (c, style, children = null) => {
        if (c.search(/^(td-)/g) === -1) return
        const textdeco = c.split('-')

        if (textdeco[1] === "children" || textdeco[2] === "children") {
            children.forEach(({ style }) => {
                if (!this.isValid(style)) return
                if (textdeco.length === 3) this.pHs.applyTextDecorationProp(style, null, textdeco[2])
                else this.pHs.applyTextDecorationProp(style, textdeco[1], textdeco[3])
            })
        } else {
            if (textdeco.length === 2) this.pHs.applyTextDecorationProp(style, null, textdeco[1])
            else this.pHs.applyTextDecorationProp(style, textdeco[1], textdeco[2])
        }
    }

    gapProp = (c, style, children = null) => {
        if (c.search(/^(gap-)/) === -1) return
        const gap = c.split('-')

        if (gap[1] === "children" || gap[2] === "children") {
            children.forEach(({ style }) => {
                if (!this.isValid(style)) return
                if (gap.length === 3) this.pHs.applyGapProp(style, null, this.pHs.sanitize(gap[2]))
                else this.pHs.applyGapProp(style, gap[1], this.pHs.sanitize(gap[3]))
            })
        } else {
            if (gap.length === 2) this.pHs.applyGapProp(style, null, this.pHs.sanitize(gap[1]))
            else this.pHs.applyGapProp(style, gap[1], this.pHs.sanitize(gap[2]))
        }
    }
}
