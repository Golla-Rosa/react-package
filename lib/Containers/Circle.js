"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = exports.SCircle = void 0;
const React = require("react");
const styled_components_1 = require("styled-components");
const Square_1 = require("./Square");
exports.SCircle = (0, styled_components_1.default)(Square_1.SSquare) `
    border-radius: 100%;
  
`;
function Circle({ props, styleProps, children }) {
    return (React.createElement(exports.SCircle, { overflow: styleProps === null || styleProps === void 0 ? void 0 : styleProps.overflow, height: styleProps === null || styleProps === void 0 ? void 0 : styleProps.height, bgColor: styleProps === null || styleProps === void 0 ? void 0 : styleProps.bgColor }, children));
}
exports.Circle = Circle;
//# sourceMappingURL=Circle.js.map