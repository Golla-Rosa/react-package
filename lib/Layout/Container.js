"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
const React = require("react");
const styled_components_1 = require("styled-components");
const __1 = require("..");
const SContainer = (0, styled_components_1.default)(__1.SBox) `

`;
function Container({ props, styleProps, children }) {
    return React.createElement(SContainer, Object.assign({}, styleProps), children);
}
exports.Container = Container;
//# sourceMappingURL=Container.js.map