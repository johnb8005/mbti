import { c as createCommonjsModule, r as react, a as commonjsGlobal, g as getDefaultExportFromCjs } from '../common/index-4b0af3e2.js';

var layout = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(react);
exports.default = (function (_a) {
    //const onMouseMove = e => {
    //const x = e.screenX - 7;
    //const y = e.screenY - 86;
    var children = _a.children;
    //const c = { x, y };
    //console.log(c)
    //}
    //
    //  {/*preserveAspectRatio="xMinYMin meet"
    //   onMouseMove={onMouseMove}*/}
    return (react_1.default.createElement("div", { style: {
            display: "inline-block",
            position: "relative",
            width: "100%",
            paddingBottom: "100%",
            verticalAlign: "middle",
            overflow: "hidden",
        } },
        react_1.default.createElement("svg", { version: "1.1", viewBox: "0 0 800 800", style: {
                border: "1px solid black",
                display: "inline-block",
                position: "absolute",
                top: 0,
                left: 0,
            } }, children)));
});
});

var segment = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
var Segment = /** @class */ (function () {
    function Segment(p1, p2) {
        this.p1 = p1;
        this.p2 = p2;
        this.d1 = p1.x - p1.x;
        this.d2 = p2.y - p2.y;
        this.alpha = Math.atan2(this.d1, this.d2);
        this.r = Math.sqrt(Math.pow(this.d1, 2) + Math.pow(this.d2, 2));
    }
    return Segment;
}());
exports.default = Segment;
});

var point = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.toLin = function () {
        return [this.x, this.y].join(",");
    };
    return Point;
}());
exports.default = Point;
});

var rhombus = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(react);
var segment_1 = __importDefault(segment);
var Rhombus = function (_a) {
    var c1 = _a.c1, c2 = _a.c2;
    var S = new segment_1.default(c1, c2);
    var x3 = S.p1.x - S.r * Math.cos(S.alpha);
    var y3 = S.p1.y + S.r * Math.sin(S.alpha);
    var x4 = S.p2.x - S.r * Math.cos(S.alpha);
    var y4 = S.p2.y + S.r * Math.sin(S.alpha);
    var points = [
        [S.p1.x, S.p1.y].join(","),
        [S.p2.x, S.p2.y].join(","),
        [x4, y4].join(","),
        [x3, y3].join(","),
    ].join(" ");
    return (react_1.default.createElement("polygon", { points: points, style: { fill: "none", stroke: "purple", strokeWidth: 1 } }));
};
exports.default = Rhombus;
});

var circle = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(react);
var Circle = function (_a) {
    var _b = _a.r, r = _b === void 0 ? 10 : _b, _c = _a.coord, coord = _c === void 0 ? { x: 0, y: 0 } : _c, _d = _a.stroke, stroke = _d === void 0 ? "green" : _d;
    return (react_1.default.createElement("circle", { r: r, cx: coord.x, cy: coord.y, stroke: stroke, strokeWidth: "1", fill: "none" }));
};
exports.default = Circle;
});

var rectangle = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Square = void 0;
var react_1 = __importDefault(react);
var Rect = function (_a) {
    var w = _a.w, h = _a.h, _b = _a.coords, _c = _b === void 0 ? { x: 0, y: 0 } : _b, x = _c.x, y = _c.y;
    return (react_1.default.createElement("rect", { width: w, height: h, x: x, y: y, style: { fill: "none", strokeWidth: 1, stroke: "rgb(0,0,0)" } }));
};
var Square = function (_a) {
    var w = _a.w, coords = _a.coords;
    return (react_1.default.createElement(Rect, { w: w, h: w, coords: coords }));
};
exports.Square = Square;
exports.default = Rect;
});

var line = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(react);
var Line = function (_a) {
    var p1 = _a.p1, p2 = _a.p2, _b = _a.stroke, stroke = _b === void 0 ? "orange" : _b;
    return (react_1.default.createElement("line", { x1: p1.x, y1: p1.y, x2: p2.x, y2: p2.y, stroke: stroke, strokeWidth: "1" }));
};
exports.default = Line;
});

var triangle = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(react);
var Triangle = function (_a) {
    var p1 = _a.p1, p2 = _a.p2, p3 = _a.p3, _b = _a.stroke, stroke = _b === void 0 ? "grey" : _b, _c = _a.fill, fill = _c === void 0 ? "none" : _c;
    var points = [p1, p2, p3].map(function (p) { return p.x + "," + p.y; }).join(" ");
    return react_1.default.createElement("polygon", { points: points, style: { fill: fill, stroke: stroke, strokeWidth: 1 } });
};
exports.default = Triangle;
});

var trapeze = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(react);
var Trapeze = function (_a) {
    var p1 = _a.p1, p2 = _a.p2, p3 = _a.p3, _b = _a.stroke, stroke = _b === void 0 ? "grey" : _b, _c = _a.fill, fill = _c === void 0 ? "none" : _c;
    var p4 = { x: p3.x + (p2.x - p1.x), y: p1.y };
    var points = [p1, p2, p3, p4].map(function (p) { return p.x + "," + p.y; }).join(" ");
    return react_1.default.createElement("polygon", { points: points, style: { fill: fill, stroke: stroke, strokeWidth: 1 } });
};
exports.default = Trapeze;
});

var movingDashLines = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovingDashLines = void 0;
var react_1 = __importDefault(react);
var line_1 = __importDefault(line);
/**
 * gives the impression of a road moving underneath you
 */
var MovingDashLines = function (_a) {
    var y0 = _a.y0, y1 = _a.y1, _b = _a.l, l = _b === void 0 ? 8 : _b, _c = _a.x, x = _c === void 0 ? 100 : _c, _d = _a.idx, idx = _d === void 0 ? 0 : _d, _e = _a.stroke, stroke = _e === void 0 ? "purple" : _e;
    var n = parseInt(((y1 - y0) / (2 * l)).toString()) + 1;
    var moveIdx = idx % (l * 2);
    var middle = new Array(n - 1).fill(0).map(function (_, i) {
        return (react_1.default.createElement(line_1.default, { key: i, p1: { x: x, y: y0 + (2 * i + 1) * l + moveIdx }, p2: { x: x, y: y0 + 2 * i * l + moveIdx }, stroke: stroke }));
    });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(line_1.default, { p1: { x: x, y: y0 + (moveIdx > l ? moveIdx - l : 0) }, p2: { x: x, y: y0 }, stroke: stroke }),
        middle,
        react_1.default.createElement(line_1.default, { p1: { x: x, y: y0 + (n * 2 - 1) * l }, p2: { x: x, y: y0 + (n * 2 - 2) * l + (moveIdx > l ? l : moveIdx) }, stroke: stroke })));
};
exports.MovingDashLines = MovingDashLines;
exports.default = exports.MovingDashLines;
});

var type = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
});

var dist = createCommonjsModule(function (module, exports) {
var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (commonjsGlobal && commonjsGlobal.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (commonjsGlobal && commonjsGlobal.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovingDashLines = exports.Trapeze = exports.Triangle = exports.Line = exports.Square = exports.Rectangle = exports.Circle = exports.Rhombus = exports.Point = exports.Segment = exports.Layout = exports.Types = void 0;
var layout_1 = __importDefault(layout);
exports.Layout = layout_1.default;
var segment_1 = __importDefault(segment);
exports.Segment = segment_1.default;
var point_1 = __importDefault(point);
exports.Point = point_1.default;
var rhombus_1 = __importDefault(rhombus);
exports.Rhombus = rhombus_1.default;
var circle_1 = __importDefault(circle);
exports.Circle = circle_1.default;
var rectangle_1 = __importStar(rectangle);
exports.Rectangle = rectangle_1.default;
Object.defineProperty(exports, "Square", { enumerable: true, get: function () { return rectangle_1.Square; } });
var line_1 = __importDefault(line);
exports.Line = line_1.default;
var triangle_1 = __importDefault(triangle);
exports.Triangle = triangle_1.default;
var trapeze_1 = __importDefault(trapeze);
exports.Trapeze = trapeze_1.default;
var moving_dash_lines_1 = __importDefault(movingDashLines);
exports.MovingDashLines = moving_dash_lines_1.default;
exports.Types = __importStar(type);
});

var __pika_web_default_export_for_treeshaking__ = /*@__PURE__*/getDefaultExportFromCjs(dist);

var Circle = dist.Circle;
var Layout = dist.Layout;
var Line = dist.Line;
var MovingDashLines = dist.MovingDashLines;
var Point = dist.Point;
var Rectangle = dist.Rectangle;
var Rhombus = dist.Rhombus;
var Segment = dist.Segment;
var Square = dist.Square;
var Trapeze = dist.Trapeze;
var Triangle = dist.Triangle;
var Types = dist.Types;
export default __pika_web_default_export_for_treeshaking__;
export { Circle, Layout, Line, MovingDashLines, Point, Rectangle, Rhombus, Segment, Square, Trapeze, Triangle, Types, dist as __moduleExports };
