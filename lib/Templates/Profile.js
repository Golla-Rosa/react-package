"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profile = void 0;
const React = require("react");
const Circle_1 = require("../Containers/Circle");
const Rectangle_1 = require("../Containers/Rectangle");
const Flexbox_1 = require("../Layout/Flexbox");
const Grid_1 = require("../Layout/Grid");
const Card_1 = require("../Molecules/Card");
function Profile() {
    return (React.createElement(Card_1.Card, { styleProps: { width: "500px", height: "700px", bgColor: "red", overflow: "hidden" } },
        React.createElement(Grid_1.Grid, { styleProps: { columns: "3", rows: "5", overflow: "hidden" } },
            React.createElement(Flexbox_1.FlexBox, { styleProps: { column: "2/3", row: "1", alignItems: "center", justifyContent: "center" } },
                React.createElement(Circle_1.Circle, { styleProps: { overflow: "hidden", height: "50px", bgColor: "blue" } }, "Profile"),
                React.createElement(Circle_1.Circle, { styleProps: { overflow: "hidden", height: "50px", bgColor: "blue" } }, "Profile")),
            React.createElement(Flexbox_1.FlexBox, { styleProps: { row: "2", column: "2", justifyContent: "center" } },
                React.createElement(Rectangle_1.Rectangle, { styleProps: { bgColor: "blue", width: "100%", height: "300px" } },
                    React.createElement(Flexbox_1.FlexBox, { styleProps: { justifyContent: "center" } },
                        React.createElement(Circle_1.Circle, { styleProps: { height: "30px", bgColor: "red" } }, "Profile"),
                        React.createElement(Circle_1.Circle, { styleProps: { height: "30px", bgColor: "red" } }, "Profile"))),
                React.createElement(Rectangle_1.Rectangle, { styleProps: { bgColor: "blue", width: "100%", height: "300px" } },
                    React.createElement(Flexbox_1.FlexBox, { styleProps: { justifyContent: "center" } },
                        React.createElement(Circle_1.Circle, { styleProps: { height: "30px", bgColor: "red" } }, "Profile"),
                        React.createElement(Circle_1.Circle, { styleProps: { height: "30px", bgColor: "red" } }, "Profile")))))));
}
exports.Profile = Profile;
exports.default = Profile;
//# sourceMappingURL=Profile.js.map