"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SItemFlex = exports.SFlexBox = exports.SItem = exports.SGrid = exports.SBox = void 0;
const styled_components_1 = require("styled-components");
const bgColorsTypes = ["primary", "primary-light", "primary-dark", "secondary", "secondary-light", "secondary-dark"];
exports.SBox = styled_components_1.default.div `
    width: ${props => { var _a; return (_a = props.width) !== null && _a !== void 0 ? _a : ""; }};
    height: ${props => { var _a; return (_a = props.height) !== null && _a !== void 0 ? _a : "100%"; }};
    background-color: ${props => bgColorsTypes.includes("" + props.bgColor) ? "var(--" + props.bgColor + "-text);" : props.bgColor + ";"}   
    color: ${props => props.bgColor != undefined ? bgColorsTypes.includes(props.bgColor) ? "var(--" + props.bgColor + "-text);" : props.textColor + ";" : props.textColor + ";"}                      
    display: ${props => props.display};


    // text-align: ${props => props.textAlign}
    overflow: ${props => props.overflow}

    `;
exports.SGrid = (0, styled_components_1.default)(exports.SBox) `
  display: grid;
  grid-template-columns: repeat(${props => props.columns}, 1fr);
  grid-template-rows: repeat(${props => props.rows}, 1fr);
  grid-gap: 0px;
`;
exports.SItem = (0, styled_components_1.default)(exports.SBox) `
  grid-column: ${props => props.column};
  grid-row: ${props => props.row};
`;
exports.SFlexBox = (0, styled_components_1.default)(exports.SBox) `
  display: flex;
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  flex-direction: ${props => props.direction};
  flex-wrap: ${props => props.wrap};
`;
exports.SItemFlex = (0, styled_components_1.default)(exports.SBox) `
    flex: ${props => props.flex};
    flex-grow: ${props => props.grow};
    flex-shrink:   ${props => props.shrink}; 
    align-self: ${props => props.alignSelf};
`;
//# sourceMappingURL=index.js.map