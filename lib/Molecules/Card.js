"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = exports.SCard = void 0;
const React = require("react");
const styled_components_1 = require("styled-components");
const Rectangle_1 = require("../Containers/Rectangle");
exports.SCard = (0, styled_components_1.default)(Rectangle_1.SRectangle) `
    border-radius: 50px 50px 50px 50px;
    background-color: ${props => props.bgColor};
`;
function Card({ props, children, styleProps }) {
    console.log(styleProps);
    return (React.createElement(exports.SCard, { width: styleProps === null || styleProps === void 0 ? void 0 : styleProps.width, height: styleProps === null || styleProps === void 0 ? void 0 : styleProps.height, bgColor: styleProps === null || styleProps === void 0 ? void 0 : styleProps.bgColor }, children));
}
exports.Card = Card;
//# sourceMappingURL=Card.js.map