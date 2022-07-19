import styles from "./nicroni.stylesheet.js"

export default class PropHelpers {
    sanitize = value => value.replace(/[()]/g, '').replace(/[,+]/g, ' ').replace(/[_]/g, '-')

    alignCenter = (style) => {
        styles.setDisplay(style, 'flex')
        styles.setJustifyContent(style, 'center')
    }

    alignLeft = (style) => {
        styles.setDisplay(style, 'flex')
        styles.setJustifyContent(style, 'left')
    }

    alignRight = (style) => {
        styles.setDisplay(style, 'flex')
        styles.setJustifyContent(style, 'right')
    }

    centerItems = async (style, pos, children) => {
        styles.setDisplay(style, 'flex')
        styles.setJustifyContent(style, pos ? pos : 'center')
        styles.setAlignItems(style, 'center')
        this.reAlignHeight(children)
    }

    applyMarginProp = (style, type, value) => {
        switch (type) {
            case "m":
                styles.setMargin(style, value)
                break
            case "ml":
                styles.setMarginLeft(style, value)
                break
            case "mr":
                styles.setMarginRight(style, value)
                break
            case "mt":
                styles.setMarginTop(style, value)
                break
            case "mb":
                styles.setMarginBottom(style, value)
                break
        }
    }

    applyPaddingProp = (style, type, value) => {
        switch (type) {
            case "p":
                styles.setPadding(style, value)
                break
            case "pl":
                styles.setPaddingLeft(style, value)
                break
            case "pr":
                styles.setPaddingRight(style, value)
                break
            case "pt":
                styles.setPaddingTop(style, value)
                break
            case "pb":
                styles.setPaddingBottom(style, value)
                break
        }
    }

    applyFontProp = (style, type, value) => {
        switch (type) {
            case "fs":
                styles.setFontSize(style, value)
                break
            case "fw":
                styles.setFontWeight(style, value)
                break
            case "ft":
                styles.setFontStyle(style, value)
                break
            case "ff":
                styles.setFontFamily(style, this.sanitize(value))
                break
        }
    }

    applyAlignProp = (style, position, children) => {
        switch (position) {
            case "left":
                this.alignLeft(style)
                break
            case "right":
                this.alignRight(style)
                break
            case "center":
                this.alignCenter(style)
                break
        }

        this.reAlignHeight(children)
    }

    reAlignHeight = children => {
        for (let { style } of children) {
            if (style === undefined) continue
            style.height = `max-content`
        }
    }

    applyBorderProp = (style, type, value) => {
        value = this.sanitize(value)

        switch (type) {
            case "border":
                styles.setBorder(style, value)
                break
            case "borderl":
                styles.setBorderLeft(style, value)
                break
            case "borderr":
                styles.setBorderRight(style, value)
                break
            case "bordert":
                styles.setBorderTop(style, value)
                break
            case "borderd":
                styles.setBorderBottom(style, value)
                break
        }
    }

    applyListStyleProp = (style, type, value) => {
        switch (type) {
            case "ls":
                const shorthand = this.sanitize(value).split(',')
                styles.setListStyle(style, `${shorthand[0]} ${shorthand[1]} url(${this.sanitize(shorthand[2])})`)
                break
            case "lst":
                styles.setListStyleType(style, value)
                break
            case "lsp":
                styles.setListStylePosition(style, value)
                break
            case "lsi":
                styles.setListStyleImage(style, `url(${this.sanitize(value)})`)
                break
        }
    }

    applyOutlineProp = (style, type, value) => {
        const outline = this.sanitize(value)
        if (!type) styles.setOutline(style, outline)
        else styles.setOutlineOffset(style, outline)
    }

    applyTextDecorationProp = (style, type, value) => {
        const tdeco = this.sanitize(value)

        switch (type) {
            case "line":
                styles.setTextDecorationLine(style, tdeco)
            case "color":
                return styles.setTextDecorationColor(style, tdeco)
            case "thickness":
                return styles.setTextDecorationThickness(style, tdeco)
            case "style":
                return styles.setTextDecorationStyle(style, tdeco)
            default:
                return styles.setTextDecoration(style, tdeco)
        }
    }

    applyGapProp = (style, type, value) => {
        switch (type) {
            case "row":
                return styles.setRowGap(style, value)
            case "col":
                return styles.setColumnGap(style, value)
            default:
                return styles.setGap(style, value)
        }
    }

    applyGridTemplateProp = (style, type, value) => {
        switch (type) {
            case "template":
                return styles.setGridTemplate(style, value)
            case "row":
                return styles.setGridTemplateRow(style, value)
            case "col":
                return styles.setGridTemplateColumn(style, value)
            default:
                return styles.setGrid(style, value)
        }
    }

    applyBackgroundProp = (style, type, value) => {
        switch (type) {
            case "color":
                styles.setBackgroundColor(style, value)
                break
            case "image":
                styles.setBackgroundImage(style, this.sanitize(value))
                break
            case "repeat":
                styles.setBackgroundRepeat(style, this.sanitize(value))
                break
            case "size":
                styles.setBackgroundSize(style, this.sanitize(value))
                break
            case "position":
                styles.setBackgroundPosition(style, this.sanitize(value))
                break
            case "origin":
                styles.setBackgroundOrigin(style, this.sanitize(value))
                break
        }
    }

    applyGridColumnProp = (style, value) => {
        styles.setGridColumn(style, value)
    }

    applyGridRowProp = (style, value) => {
        styles.setGridRow(style, value)
    }

    applyForegroundColor = (style, value) => styles.setColor(style, value)
    applyWidthProp = (style, value) => styles.setWidth(style, this.sanitize(value))
    applyHeightProp = (style, value) => styles.setHeight(style, this.sanitize(value))
    applyBorderRadiusProp = (style, value) => styles.setBorderRadius(style, this.sanitize(value))
    applyOpacityProp = (style, value) => styles.setOpacity(style, value)
    applyDisplayProp = (style, value) => styles.setDisplay(style, value)
}
