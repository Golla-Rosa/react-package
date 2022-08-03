"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grid = void 0;
const React = require("react");
const __1 = require("../");
function Grid({ props, styleProps, children }) {
    const childrenTab = children === null || children === void 0 ? void 0 : children.map((c) => React.createElement(__1.SItem, { row: c.props.styleProps.row, column: c.props.styleProps.column }, c));
    return React.createElement(__1.SGrid, Object.assign({}, styleProps), childrenTab);
}
exports.Grid = Grid;
//# sourceMappingURL=Grid.js.map