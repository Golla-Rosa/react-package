"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlexBox = void 0;
const index_1 = require("../index");
const React = require("react");
function FlexBox({ props, styleProps, children }) {
    var childs;
    if (!Array.isArray(children))
        childs = React.Children.toArray([children]);
    else
        childs = children;
    const childrenTab = childs === null || childs === void 0 ? void 0 : childs.map((c) => {
        var _a, _b, _c, _d;
        return React.createElement(index_1.SItemFlex, { justifyContent: (_b = (_a = c.props) === null || _a === void 0 ? void 0 : _a.styleProps) === null || _b === void 0 ? void 0 : _b.justifyContent, alignItems: (_d = (_c = c.props) === null || _c === void 0 ? void 0 : _c.styleProps) === null || _d === void 0 ? void 0 : _d.alignItems, width: "100%" }, c);
    });
    return React.createElement(index_1.SFlexBox, Object.assign({}, styleProps), childrenTab);
}
exports.FlexBox = FlexBox;
//# sourceMappingURL=Flexbox.js.map