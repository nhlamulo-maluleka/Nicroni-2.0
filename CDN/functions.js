import { computeFont, computePadding, computeMargin, computeSize } from "./helpers"

const widthStyle = e => computeSize(e.classList, "w-", e.style);
const heightStyle = e => computeSize(e.classList, "h-", e.style);

const jumbotronStyle = ({ style }) => {
    centerStyle(style);
    style.backgroundColor = 'lightgrey';
    style.padding = '5rem';
    style.borderRadius = '10px';
    style.fontSize = '30pt'
    style.fontFamily = 'Arial';
    style.fontWeight = 'bold';
}

const centerStyle = (style) => {
    style.display = 'flex';
    style.justifyContent = 'center';
}

const leftStyle = ({ style }) => {
    style.display = 'flex';
    style.justifyContent = 'left';
    
}

const rightStyle = ({ style }) => {
    style.display = 'flex';
    style.justifyContent = 'right';
}

const fontSizeStyle = ({style, classList}) => computeFont(classList, "fs-", style);
const fontWeightStyle = ({style, classList}) => computeFont(classList, "fw-", style);
const fontStyle = ({style, classList}) => computeFont(classList, "ft-", style);

const paddingStyle = ({ style, classList }) => computePadding(classList, "p-", style);
const paddingLeftStyle = ({ style, classList }) => computePadding(classList, "pl-", style);
const paddingRightStyle = ({ style, classList }) => computePadding(classList, "pr-", style);
const paddingTopStyle = ({ style, classList }) => computePadding(classList, "pt-", style);
const paddingBottomStyle = ({ style, classList }) => computePadding(classList, "pb-", style);

const marginStyle = ({ style, classList }) => computeMargin(classList, "m-", style);
const marginLeftStyle = ({ style, classList }) => computeMargin(classList, "ml-", style);
const marginRightStyle = ({ style, classList }) => computeMargin(classList, "mr-", style);
const marginTopStyle = ({ style, classList }) => computeMargin(classList, "mt-", style);
const marginBottomStyle = ({ style, classList }) => computeMargin(classList, "mb-", style);

export {
    jumbotronStyle,
    widthStyle, heightStyle,
    centerStyle, leftStyle, rightStyle,
    fontSizeStyle, fontWeightStyle, fontStyle,
    paddingStyle, paddingLeftStyle, paddingRightStyle, paddingTopStyle, paddingBottomStyle,
    marginStyle, marginLeftStyle, marginRightStyle, marginTopStyle, marginBottomStyle
}