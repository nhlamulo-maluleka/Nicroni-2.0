import Apply from "./nicroni.apply.js"

class Implement extends Apply {
    widthStyle = ({ style, classList, childNodes }) => this.width(classList, style, childNodes)
    heightStyle = ({ style, classList, childNodes}) => this.height(classList, style, childNodes)
    borderRadiusStyle = ({ style, classList, childNodes }) => this.borderRadius(classList, style, childNodes)
    backgroundStyle = ({ style, classList, childNodes }) => this.background(classList, style, childNodes)
    foregroundColorStyle = ({ style, classList, childNodes }) => this.foregroundColor(classList, style, childNodes)
    displayStyle = ({ style, classList, childNodes}) => this.display(classList, style, childNodes)
    fontStyle = ({ style, classList, childNodes}) => this.font(classList, style, childNodes)
    paddingStyle = ({ style, classList, childNodes}) => this.padding(classList, style, childNodes)
    marginStyle = ({ style, classList, childNodes}) => this.margin(classList, style, childNodes)
    alignStyle = ({ style, classList, childNodes }) => this.align(classList, style, childNodes)
    borderStyle = ({ style, classList, childNodes}) => this.border(classList, style, childNodes)
    opacityStyle = ({ style, classList, childNodes}) => this.opacity(classList, style, childNodes)
    centerStyle = ({ style, classList, childNodes}) => this.center(classList, style, childNodes)
    outlineStyle = ({ style, classList, childNodes}) => this.outline(classList, style, childNodes)
    listStyle = ({ style, classList, childNodes}) => this._listStyle(classList, style, childNodes)
    fontFamilyStyle = ({ style, classList, childNodes}) => this.fontFamily(classList, style, childNodes)
    gridTemplateStyle = ({ style, classList, childNodes}) => this.gridTemplate(classList, style, childNodes)
    gridColumnStyle = ({ style, classList, childNodes}) => this.gridColumn(classList, style, childNodes)
    gridRowStyle = ({ style, classList, childNodes}) => this.gridRow(classList, style, childNodes)
    displayStyle = ({ style, classList, childNodes}) => this.display(classList, style, childNodes)
    textDecorationStyle = ({ style, classList, childNodes}) => this.textDecoration(classList, style, childNodes)
    gapStyle = ({ style, classList, childNodes}) => this.gap(classList, style, childNodes)
}

export default new Implement()