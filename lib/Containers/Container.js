"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = exports.SContainer = void 0;
const React = require("react");
const styled_components_1 = require("styled-components");
const __1 = require("..");
const handleShape = (shape) => {
    switch (shape) {
        case "rounded":
            return "50px 50px 50px 50px";
            break;
        case "none":
            return null;
            break;
        case "circle":
            return "100%";
            break;
    }
};
exports.SContainer = (0, styled_components_1.default)(__1.SBox) `
    //${props => handleShape(props.shape)};
    overflow: ${props => props.overflow};
    overflow-y: ${props => props.yOverflow}; 
    overflow-x: ${props => props.xOverflow};
`;
function Container({ props, styleProps, children }) {
    console.log("container", children);
    return React.createElement(exports.SContainer, Object.assign({}, styleProps), children);
}
exports.Container = Container;
//# sourceMappingURL=Container.js.map