"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Square = exports.SSquare = void 0;
const React = require("react");
const styled_components_1 = require("styled-components");
const Container_1 = require("./Container");
exports.SSquare = (0, styled_components_1.default)(Container_1.SContainer) `
    height: ${props => props.height};
    width: ${props => props.height};
`;
function Square({ styleProps, props, children }) {
    return (React.createElement(exports.SSquare, { overflow: styleProps === null || styleProps === void 0 ? void 0 : styleProps.overflow, bgColor: styleProps === null || styleProps === void 0 ? void 0 : styleProps.bgColor, height: styleProps === null || styleProps === void 0 ? void 0 : styleProps.height }, children));
}
exports.Square = Square;
//# sourceMappingURL=Square.js.map