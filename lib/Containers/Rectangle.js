"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = exports.SRectangle = void 0;
const React = require("react");
const styled_components_1 = require("styled-components");
const Container_1 = require("./Container");
exports.SRectangle = (0, styled_components_1.default)(Container_1.SContainer) `
    height: ${props => props.height};
    width: ${props => props.width};
`;
function Rectangle({ styleProps, props, children }) {
    return (React.createElement(exports.SRectangle, { bgColor: styleProps === null || styleProps === void 0 ? void 0 : styleProps.bgColor, height: styleProps === null || styleProps === void 0 ? void 0 : styleProps.height, width: styleProps === null || styleProps === void 0 ? void 0 : styleProps.width }, children));
}
exports.Rectangle = Rectangle;
//# sourceMappingURL=Rectangle.js.map