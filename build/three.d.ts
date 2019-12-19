declare namespace THREE {
    var REVISION: string;
    var MOUSE: {
        LEFT: number;
        MIDDLE: number;
        RIGHT: number;
        ROTATE: number;
        DOLLY: number;
        PAN: number;
    };
    var TOUCH: {
        ROTATE: number;
        PAN: number;
        DOLLY_PAN: number;
        DOLLY_ROTATE: number;
    };
    var CullFaceNone: number;
    var CullFaceBack: number;
    var CullFaceFront: number;
    var CullFaceFrontBack: number;
    var FrontFaceDirectionCW: number;
    var FrontFaceDirectionCCW: number;
    var BasicShadowMap: number;
    var PCFShadowMap: number;
    var PCFSoftShadowMap: number;
    var VSMShadowMap: number;
    var FrontSide: number;
    var BackSide: number;
    var DoubleSide: number;
    var FlatShading: number;
    var SmoothShading: number;
    var NoColors: number;
    var FaceColors: number;
    var VertexColors: number;
    var NoBlending: number;
    var NormalBlending: number;
    var AdditiveBlending: number;
    var SubtractiveBlending: number;
    var MultiplyBlending: number;
    var CustomBlending: number;
    var AddEquation: number;
    var SubtractEquation: number;
    var ReverseSubtractEquation: number;
    var MinEquation: number;
    var MaxEquation: number;
    var ZeroFactor: number;
    var OneFactor: number;
    var SrcColorFactor: number;
    var OneMinusSrcColorFactor: number;
    var SrcAlphaFactor: number;
    var OneMinusSrcAlphaFactor: number;
    var DstAlphaFactor: number;
    var OneMinusDstAlphaFactor: number;
    var DstColorFactor: number;
    var OneMinusDstColorFactor: number;
    var SrcAlphaSaturateFactor: number;
    var NeverDepth: number;
    var AlwaysDepth: number;
    var LessDepth: number;
    var LessEqualDepth: number;
    var EqualDepth: number;
    var GreaterEqualDepth: number;
    var GreaterDepth: number;
    var NotEqualDepth: number;
    var MultiplyOperation: number;
    var MixOperation: number;
    var AddOperation: number;
    var NoToneMapping: number;
    var LinearToneMapping: number;
    var ReinhardToneMapping: number;
    var Uncharted2ToneMapping: number;
    var CineonToneMapping: number;
    var ACESFilmicToneMapping: number;
    var UVMapping: number;
    var CubeReflectionMapping: number;
    var CubeRefractionMapping: number;
    var EquirectangularReflectionMapping: number;
    var EquirectangularRefractionMapping: number;
    var SphericalReflectionMapping: number;
    var CubeUVReflectionMapping: number;
    var CubeUVRefractionMapping: number;
    var RepeatWrapping: number;
    var ClampToEdgeWrapping: number;
    var MirroredRepeatWrapping: number;
    var NearestFilter: number;
    var NearestMipmapNearestFilter: number;
    var NearestMipMapNearestFilter: number;
    var NearestMipmapLinearFilter: number;
    var NearestMipMapLinearFilter: number;
    var LinearFilter: number;
    var LinearMipmapNearestFilter: number;
    var LinearMipMapNearestFilter: number;
    var LinearMipmapLinearFilter: number;
    var LinearMipMapLinearFilter: number;
    var UnsignedByteType: number;
    var ByteType: number;
    var ShortType: number;
    var UnsignedShortType: number;
    var IntType: number;
    var UnsignedIntType: number;
    var FloatType: number;
    var HalfFloatType: number;
    var UnsignedShort4444Type: number;
    var UnsignedShort5551Type: number;
    var UnsignedShort565Type: number;
    var UnsignedInt248Type: number;
    var AlphaFormat: number;
    var RGBFormat: number;
    var RGBAFormat: number;
    var LuminanceFormat: number;
    var LuminanceAlphaFormat: number;
    var RGBEFormat: number;
    var DepthFormat: number;
    var DepthStencilFormat: number;
    var RedFormat: number;
    var RGB_S3TC_DXT1_Format: number;
    var RGBA_S3TC_DXT1_Format: number;
    var RGBA_S3TC_DXT3_Format: number;
    var RGBA_S3TC_DXT5_Format: number;
    var RGB_PVRTC_4BPPV1_Format: number;
    var RGB_PVRTC_2BPPV1_Format: number;
    var RGBA_PVRTC_4BPPV1_Format: number;
    var RGBA_PVRTC_2BPPV1_Format: number;
    var RGB_ETC1_Format: number;
    var RGBA_ASTC_4x4_Format: number;
    var RGBA_ASTC_5x4_Format: number;
    var RGBA_ASTC_5x5_Format: number;
    var RGBA_ASTC_6x5_Format: number;
    var RGBA_ASTC_6x6_Format: number;
    var RGBA_ASTC_8x5_Format: number;
    var RGBA_ASTC_8x6_Format: number;
    var RGBA_ASTC_8x8_Format: number;
    var RGBA_ASTC_10x5_Format: number;
    var RGBA_ASTC_10x6_Format: number;
    var RGBA_ASTC_10x8_Format: number;
    var RGBA_ASTC_10x10_Format: number;
    var RGBA_ASTC_12x10_Format: number;
    var RGBA_ASTC_12x12_Format: number;
    var LoopOnce: number;
    var LoopRepeat: number;
    var LoopPingPong: number;
    var InterpolateDiscrete: number;
    var InterpolateLinear: number;
    var InterpolateSmooth: number;
    var ZeroCurvatureEnding: number;
    var ZeroSlopeEnding: number;
    var WrapAroundEnding: number;
    var TrianglesDrawMode: number;
    var TriangleStripDrawMode: number;
    var TriangleFanDrawMode: number;
    var LinearEncoding: number;
    var sRGBEncoding: number;
    var GammaEncoding: number;
    var RGBEEncoding: number;
    var LogLuvEncoding: number;
    var RGBM7Encoding: number;
    var RGBM16Encoding: number;
    var RGBDEncoding: number;
    var BasicDepthPacking: number;
    var RGBADepthPacking: number;
    var TangentSpaceNormalMap: number;
    var ObjectSpaceNormalMap: number;
    var ZeroStencilOp: number;
    var KeepStencilOp: number;
    var ReplaceStencilOp: number;
    var IncrementStencilOp: number;
    var DecrementStencilOp: number;
    var IncrementWrapStencilOp: number;
    var DecrementWrapStencilOp: number;
    var InvertStencilOp: number;
    var NeverStencilFunc: number;
    var LessStencilFunc: number;
    var EqualStencilFunc: number;
    var LessEqualStencilFunc: number;
    var GreaterStencilFunc: number;
    var NotEqualStencilFunc: number;
    var GreaterEqualStencilFunc: number;
    var AlwaysStencilFunc: number;
    var StaticDrawUsage: number;
    var DynamicDrawUsage: number;
    var StreamDrawUsage: number;
    var StaticReadUsage: number;
    var DynamicReadUsage: number;
    var StreamReadUsage: number;
    var StaticCopyUsage: number;
    var DynamicCopyUsage: number;
    var StreamCopyUsage: number;
}
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     */
    function arrayMin(array: any): any;
    function arrayMax(array: any): any;
}
declare namespace THREE {
    var _Math: {
        DEG2RAD: number;
        RAD2DEG: number;
        generateUUID: () => string;
        clamp: (value: any, min: any, max: any) => number;
        euclideanModulo: (n: any, m: any) => number;
        mapLinear: (x: any, a1: any, a2: any, b1: any, b2: any) => any;
        lerp: (x: any, y: any, t: any) => number;
        smoothstep: (x: any, min: any, max: any) => number;
        smootherstep: (x: any, min: any, max: any) => number;
        randInt: (low: any, high: any) => any;
        randFloat: (low: any, high: any) => any;
        randFloatSpread: (range: any) => number;
        degToRad: (degrees: any) => number;
        radToDeg: (radians: any) => number;
        isPowerOfTwo: (value: any) => boolean;
        ceilPowerOfTwo: (value: any) => number;
        floorPowerOfTwo: (value: any) => number;
    };
}
declare namespace THREE {
    /**
     * @author mikael emtinger / http://gomo.se/
     * @author alteredq / http://alteredqualia.com/
     * @author WestLangley / http://github.com/WestLangley
     * @author bhouston / http://clara.io
     */
    class Quaternion {
        _x: any;
        _y: any;
        _z: any;
        _w: any;
        get x(): any;
        set x(value: any);
        get y(): any;
        set y(value: any);
        get z(): any;
        set z(value: any);
        get w(): any;
        set w(value: any);
        constructor(x?: any, y?: any, z?: any, w?: any);
        static slerp(qa: any, qb: any, qm: any, t: any): any;
        static slerpFlat(dst: any, dstOffset: any, src0: any, srcOffset0: any, src1: any, srcOffset1: any, t: any): void;
        isQuaternion: true;
        set(x: any, y: any, z: any, w: any): this;
        clone(): Quaternion;
        copy(quaternion: any): this;
        setFromEuler(euler: any, update?: any): this;
        setFromAxisAngle(axis: any, angle: any): this;
        setFromRotationMatrix(m: any): this;
        setFromUnitVectors(vFrom: any, vTo: any): this;
        angleTo(q: any): number;
        rotateTowards(q: any, step: any): this;
        inverse(): this;
        conjugate(): this;
        dot(v: any): number;
        lengthSq(): number;
        length(): number;
        normalize(): this;
        multiply(q: any, p: any): this;
        premultiply(q: any): this;
        multiplyQuaternions(a: any, b: any): this;
        slerp(qb: any, t: any): this;
        equals(quaternion: any): boolean;
        fromArray(array: any, offset?: any): this;
        toArray(array: any, offset: any): any;
        _onChange(callback: any): this;
        _onChangeCallback(): void;
    }
}
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     * @author philogb / http://blog.thejit.org/
     * @author egraether / http://egraether.com/
     * @author zz85 / http://www.lab4games.net/zz85/blog
     */
    function Vector2(x?: any, y?: any): void;
}
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     * @author kile / http://kile.stravaganza.org/
     * @author philogb / http://blog.thejit.org/
     * @author mikael emtinger / http://gomo.se/
     * @author egraether / http://egraether.com/
     * @author WestLangley / http://github.com/WestLangley
     */
    function Vector3(x?: any, y?: any, z?: any): void;
}
declare namespace THREE {
    /**
     * @author supereggbert / http://www.paulbrunt.co.uk/
     * @author philogb / http://blog.thejit.org/
     * @author mikael emtinger / http://gomo.se/
     * @author egraether / http://egraether.com/
     * @author WestLangley / http://github.com/WestLangley
     */
    function Vector4(x?: any, y?: any, z?: any, w?: any): void;
}
declare namespace THREE {
    function Matrix3(): void;
}
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     * @author supereggbert / http://www.paulbrunt.co.uk/
     * @author philogb / http://blog.thejit.org/
     * @author jordi_ros / http://plattsoft.com
     * @author D1plo1d / http://github.com/D1plo1d
     * @author alteredq / http://alteredqualia.com/
     * @author mikael emtinger / http://gomo.se/
     * @author timknip / http://www.floorplanner.com/
     * @author bhouston / http://clara.io
     * @author WestLangley / http://github.com/WestLangley
     */
    function Matrix4(): void;
}
declare namespace THREE {
    function Plane(normal?: any, constant?: any): void;
}
declare namespace THREE {
    class Triangle {
        a: any;
        b: any;
        c: any;
        constructor(a: any, b: any, c: any);
        static getNormal(a: any, b: any, c: any, target: any): any;
        static getBarycoord(point: any, a: any, b: any, c: any, target: any): any;
        static containsPoint(point: any, a: any, b: any, c: any): boolean;
        static getUV(point: any, p1: any, p2: any, p3: any, uv1: any, uv2: any, uv3: any, target: any): any;
        static isFrontFacing(a: any, b: any, c: any, direction: any): boolean;
    }
}
declare namespace THREE {
    function Box2(min: any, max: any): void;
}
declare namespace THREE {
    /**
     * @author bhouston / http://clara.io
     * @author WestLangley / http://github.com/WestLangley
     */
    function Box3(min?: any, max?: any): void;
}
declare namespace THREE {
    class Color {
        constructor(r?: any, g?: any, b?: any);
        isColor: boolean;
        r: number;
        g: number;
        b: number;
        set(value: any): this;
        setScalar(scalar: any): this;
        setHex(hex: any): this;
        setRGB(r: any, g: any, b: any): this;
        setHSL(h: any, s: any, l: any): this;
        setStyle(style: any): this;
        setColorName(style: any): this;
        clone(): Color;
        copy(color: any): this;
        copyGammaToLinear(color: any, gammaFactor: any): this;
        copyLinearToGamma(color: any, gammaFactor: any): this;
        convertGammaToLinear(gammaFactor: any): this;
        convertLinearToGamma(gammaFactor: any): this;
        copySRGBToLinear(color: any): this;
        copyLinearToSRGB(color: any): this;
        convertSRGBToLinear(): this;
        convertLinearToSRGB(): this;
        getHex(): number;
        getHexString(): string;
        getHSL(target: any): any;
        getStyle(): string;
        offsetHSL(h: any, s: any, l: any): this;
        add(color: any): this;
        addColors(color1: any, color2: any): this;
        addScalar(s: any): this;
        sub(color: any): this;
        multiply(color: any): this;
        multiplyScalar(s: any): this;
        lerp(color: any, alpha: any): this;
        lerpHSL(color: any, alpha: any): this;
        equals(c: any): boolean;
        fromArray(array: any, offset: any): this;
        toArray(array: any, offset: any): any;
        toJSON(): number;
        static NAMES: {
            'aliceblue': number;
            'antiquewhite': number;
            'aqua': number;
            'aquamarine': number;
            'azure': number;
            'beige': number;
            'bisque': number;
            'black': number;
            'blanchedalmond': number;
            'blue': number;
            'blueviolet': number;
            'brown': number;
            'burlywood': number;
            'cadetblue': number;
            'chartreuse': number;
            'chocolate': number;
            'coral': number;
            'cornflowerblue': number;
            'cornsilk': number;
            'crimson': number;
            'cyan': number;
            'darkblue': number;
            'darkcyan': number;
            'darkgoldenrod': number;
            'darkgray': number;
            'darkgreen': number;
            'darkgrey': number;
            'darkkhaki': number;
            'darkmagenta': number;
            'darkolivegreen': number;
            'darkorange': number;
            'darkorchid': number;
            'darkred': number;
            'darksalmon': number;
            'darkseagreen': number;
            'darkslateblue': number;
            'darkslategray': number;
            'darkslategrey': number;
            'darkturquoise': number;
            'darkviolet': number;
            'deeppink': number;
            'deepskyblue': number;
            'dimgray': number;
            'dimgrey': number;
            'dodgerblue': number;
            'firebrick': number;
            'floralwhite': number;
            'forestgreen': number;
            'fuchsia': number;
            'gainsboro': number;
            'ghostwhite': number;
            'gold': number;
            'goldenrod': number;
            'gray': number;
            'green': number;
            'greenyellow': number;
            'grey': number;
            'honeydew': number;
            'hotpink': number;
            'indianred': number;
            'indigo': number;
            'ivory': number;
            'khaki': number;
            'lavender': number;
            'lavenderblush': number;
            'lawngreen': number;
            'lemonchiffon': number;
            'lightblue': number;
            'lightcoral': number;
            'lightcyan': number;
            'lightgoldenrodyellow': number;
            'lightgray': number;
            'lightgreen': number;
            'lightgrey': number;
            'lightpink': number;
            'lightsalmon': number;
            'lightseagreen': number;
            'lightskyblue': number;
            'lightslategray': number;
            'lightslategrey': number;
            'lightsteelblue': number;
            'lightyellow': number;
            'lime': number;
            'limegreen': number;
            'linen': number;
            'magenta': number;
            'maroon': number;
            'mediumaquamarine': number;
            'mediumblue': number;
            'mediumorchid': number;
            'mediumpurple': number;
            'mediumseagreen': number;
            'mediumslateblue': number;
            'mediumspringgreen': number;
            'mediumturquoise': number;
            'mediumvioletred': number;
            'midnightblue': number;
            'mintcream': number;
            'mistyrose': number;
            'moccasin': number;
            'navajowhite': number;
            'navy': number;
            'oldlace': number;
            'olive': number;
            'olivedrab': number;
            'orange': number;
            'orangered': number;
            'orchid': number;
            'palegoldenrod': number;
            'palegreen': number;
            'paleturquoise': number;
            'palevioletred': number;
            'papayawhip': number;
            'peachpuff': number;
            'peru': number;
            'pink': number;
            'plum': number;
            'powderblue': number;
            'purple': number;
            'rebeccapurple': number;
            'red': number;
            'rosybrown': number;
            'royalblue': number;
            'saddlebrown': number;
            'salmon': number;
            'sandybrown': number;
            'seagreen': number;
            'seashell': number;
            'sienna': number;
            'silver': number;
            'skyblue': number;
            'slateblue': number;
            'slategray': number;
            'slategrey': number;
            'snow': number;
            'springgreen': number;
            'steelblue': number;
            'tan': number;
            'teal': number;
            'thistle': number;
            'tomato': number;
            'turquoise': number;
            'violet': number;
            'wheat': number;
            'white': number;
            'whitesmoke': number;
            'yellow': number;
            'yellowgreen': number;
        };
    }
}
declare namespace THREE {
    /**
     * @author Mugen87 / https://github.com/Mugen87
     *
     * Ref: https://en.wikipedia.org/wiki/Cylindrical_coordinate_system
     *
     */
    function Cylindrical(radius: any, theta: any, y: any): any;
}
declare namespace THREE {
    function Euler(x?: any, y?: any, z?: any, order?: any): void;
    namespace Euler {
        var RotationOrders: string[];
        var DefaultOrder: string;
    }
}
declare namespace THREE {
    /**
     * @author bhouston / http://clara.io
     * @author mrdoob / http://mrdoob.com/
     */
    function Sphere(center?: any, radius?: any): void;
}
declare namespace THREE {
    function Frustum(p0?: any, p1?: any, p2?: any, p3?: any, p4?: any, p5?: any): void;
}
declare namespace THREE {
    /**
     * @author bhouston / http://clara.io
     * @author WestLangley / http://github.com/WestLangley
     *
     * Ref: https://en.wikipedia.org/wiki/Spherical_coordinate_system
     *
     * The polar angle (phi) is measured from the positive y-axis. The positive y-axis is up.
     * The azimuthal angle (theta) is measured from the positive z-axis.
     */
    function Spherical(radius: any, phi: any, theta: any): any;
}
declare namespace THREE {
    /**
     * Abstract base class of interpolants over parametric samples.
     *
     * The parameter domain is one dimensional, typically the time or a path
     * along a curve defined by the data.
     *
     * The sample values can have any dimensionality and derived classes may
     * apply special interpretations to the data.
     *
     * This class provides the interval seek in a Template Method, deferring
     * the actual interpolation to derived classes.
     *
     * Time complexity is O(1) for linear access crossing at most two points
     * and O(log N) for random access, where N is the number of positions.
     *
     * References:
     *
     * 		http://www.oodesign.com/template-method-pattern.html
     *
     * @author tschw
     */
    function Interpolant(parameterPositions: any, sampleValues: any, sampleSize: any, resultBuffer: any): void;
}
declare namespace THREE {
    /**
     * @author bhouston / http://clara.io
     */
    function Line3(start: any, end: any): void;
}
declare namespace THREE {
    /**
     * @author bhouston / http://clara.io
     */
    function Ray(origin?: any, direction?: any): void;
}
declare namespace THREE {
    /**
     * @author bhouston / http://clara.io
     * @author WestLangley / http://github.com/WestLangley
     *
     * Primary reference:
     *   https://graphics.stanford.edu/papers/envmap/envmap.pdf
     *
     * Secondary reference:
     *   https://www.ppsloan.org/publications/StupidSH36.pdf
     */
    function SphericalHarmonics3(): void;
}
declare namespace THREE {
    /**
     * Fast and simple cubic spline interpolant.
     *
     * It was derived from a Hermitian construction setting the first derivative
     * at each sample position to the linear slope between neighboring positions
     * over their parameter interval.
     *
     * @author tschw
     */
    function CubicInterpolant(parameterPositions: any, sampleValues: any, sampleSize: any, resultBuffer: any): void;
    namespace CubicInterpolant {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     *
     * Interpolant that evaluates to the sample value at the position preceeding
     * the parameter.
     *
     * @author tschw
     */
    function DiscreteInterpolant(parameterPositions: any, sampleValues: any, sampleSize: any, resultBuffer: any): void;
    namespace DiscreteInterpolant {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author tschw
     */
    function LinearInterpolant(parameterPositions: any, sampleValues: any, sampleSize: any, resultBuffer: any): void;
    namespace LinearInterpolant {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * Spherical linear unit quaternion interpolant.
     *
     * @author tschw
     */
    function QuaternionLinearInterpolant(parameterPositions: any, sampleValues: any, sampleSize: any, resultBuffer: any): void;
    namespace QuaternionLinearInterpolant {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * https://github.com/mrdoob/eventdispatcher.js/
     */
    class EventDispatcher {
        _listeners: any;
        addEventListener(type: any, listener: any): void;
        hasEventListener(type: any, listener: any): boolean;
        removeEventListener(type: any, listener: any): void;
        dispatchEvent(event: any): void;
    }
}
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     */
    function BufferAttribute(array: any, itemSize: any, normalized?: any): void;
    function Int8BufferAttribute(array: any, itemSize: any, normalized?: any): void;
    namespace Int8BufferAttribute {
        var prototype: any;
    }
    function Uint8BufferAttribute(array: any, itemSize: any, normalized?: any): void;
    namespace Uint8BufferAttribute {
        var prototype: any;
    }
    function Uint8ClampedBufferAttribute(array: any, itemSize: any, normalized?: any): void;
    namespace Uint8ClampedBufferAttribute {
        var prototype: any;
    }
    function Int16BufferAttribute(array: any, itemSize: any, normalized?: any): void;
    namespace Int16BufferAttribute {
        var prototype: any;
    }
    function Uint16BufferAttribute(array: any, itemSize: any, normalized?: any): void;
    namespace Uint16BufferAttribute {
        var prototype: any;
    }
    function Int32BufferAttribute(array: any, itemSize: any, normalized?: any): void;
    namespace Int32BufferAttribute {
        var prototype: any;
    }
    function Uint32BufferAttribute(array: any, itemSize: any, normalized?: any): void;
    namespace Uint32BufferAttribute {
        var prototype: any;
    }
    function Float32BufferAttribute(array: any, itemSize: any, normalized?: any): void;
    namespace Float32BufferAttribute {
        var prototype: any;
    }
    function Float64BufferAttribute(array: any, itemSize: any, normalized?: any): void;
    namespace Float64BufferAttribute {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author alteredq / http://alteredqualia.com/
     */
    function Clock(autoStart?: any): void;
}
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     * @author alteredq / http://alteredqualia.com/
     */
    function Face3(a: any, b: any, c: any, normal?: any, color?: any, materialIndex?: any): void;
}
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     * @author mikael emtinger / http://gomo.se/
     * @author alteredq / http://alteredqualia.com/
     * @author WestLangley / http://github.com/WestLangley
     * @author elephantatwork / www.elephantatwork.ch
     */
    class Object3D extends EventDispatcher {
        matrixAutoUpdate: any;
        matrix: any;
        position: any;
        quaternion: any;
        scale: any;
        matrixWorld: any;
        parent: any;
        isCamera: any;
        isLight: any;
        up: any;
        children: any;
        visible: boolean;
        matrixWorldNeedsUpdate: boolean;
        uuid: any;
        type: any;
        name: string;
        castShadow: boolean;
        receiveShadow: boolean;
        frustumCulled: boolean;
        renderOrder: number;
        layers: any;
        isMesh: boolean;
        drawMode: number;
        isInstancedMesh: any;
        count: any;
        instanceMatrix: any;
        isLine: boolean;
        isPoints: boolean;
        material: any;
        userData: any;
        geometry: any;
        constructor();
        static DefaultUp: any;
        static DefaultMatrixAutoUpdate: boolean;
        isObject3D: boolean;
        onBeforeRender(): void;
        onAfterRender(): void;
        applyMatrix(matrix: any): void;
        applyQuaternion(q: any): this;
        setRotationFromAxisAngle(axis: any, angle: any): void;
        setRotationFromEuler(euler: any): void;
        setRotationFromMatrix(m: any): void;
        setRotationFromQuaternion(q: any): void;
        rotateOnAxis(axis: any, angle: any): this;
        rotateOnWorldAxis(axis: any, angle: any): this;
        rotateX(angle: any): this;
        rotateY(angle: any): this;
        rotateZ(angle: any): this;
        translateOnAxis(axis: any, distance: any): this;
        translateX(distance: any): this;
        translateY(distance: any): this;
        translateZ(distance: any): this;
        localToWorld(vector: any): any;
        worldToLocal(vector: any): any;
        lookAt(x: any, y?: any, z?: any): void;
        add(object: any): this;
        remove(object: any): this;
        attach(object: any): this;
        getObjectById(id: any): any;
        getObjectByName(name: any): any;
        getObjectByProperty(name: any, value: any): any;
        getWorldPosition(target: any): any;
        getWorldQuaternion(target: any): any;
        getWorldScale(target: any): any;
        getWorldDirection(target: any): any;
        raycast(): void;
        traverse(callback: any): void;
        traverseVisible(callback: any): void;
        traverseAncestors(callback: any): void;
        updateMatrix(): void;
        updateMatrixWorld(force: any): void;
        updateWorldMatrix(updateParents: any, updateChildren: any): void;
        toJSON(meta: any): any;
        clone(recursive: any): Object3D;
        copy(source: any, recursive?: any): this;
    }
}
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     */
    function Layers(): void;
}
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     * @author bhouston / http://clara.io/
     * @author stephomi / http://stephaneginier.com/
     */
    function Raycaster(origin: any, direction: any, near: any, far: any): void;
}
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     */
    function Uniform(value: any): void;
}
declare namespace THREE {
    class Geometry extends EventDispatcher {
        uuid: string;
        name: string;
        type: string;
        vertices: any[];
        colors: any[];
        faces: any[];
        faceVertexUvs: any[][];
        morphTargets: any[];
        morphNormals: any[];
        skinWeights: any[];
        skinIndices: any[];
        lineDistances: any[];
        boundingBox: any;
        boundingSphere: any;
        elementsNeedUpdate: boolean;
        verticesNeedUpdate: boolean;
        uvsNeedUpdate: boolean;
        colorsNeedUpdate: boolean;
        normalsNeedUpdate: boolean;
        lineDistancesNeedUpdate: boolean;
        groupsNeedUpdate: boolean;
        parameters: any;
        constructor();
        isGeometry: boolean;
        applyMatrix(matrix: any): this;
        rotateX(angle: any): this;
        rotateY(angle: any): this;
        rotateZ(angle: any): this;
        translate(x: any, y: any, z: any): this;
        scale(x: any, y: any, z: any): this;
        lookAt(vector: any): this;
        fromBufferGeometry(geometry: any): this;
        center(): this;
        normalize(): this;
        computeFaceNormals(): void;
        computeVertexNormals(areaWeighted?: any): void;
        computeFlatVertexNormals(): void;
        computeMorphNormals(): void;
        computeBoundingBox(): void;
        computeBoundingSphere(): void;
        merge(geometry: any, matrix: any, materialIndexOffset?: any): void;
        mergeMesh(mesh: any): void;
        mergeVertices(): number;
        setFromPoints(points: any): this;
        sortFacesByMaterialIndex(): void;
        toJSON(): any;
        clone(): Geometry;
        copy(source: any): this;
        dispose(): void;
    }
}
declare namespace THREE {
    class BufferGeometry extends EventDispatcher {
        index: any;
        attributes: any;
        groups: any;
        drawRange: any;
        boundingBox: any;
        boundingSphere: any;
        morphAttributes: any;
        userData: any;
        uuid: any;
        type: any;
        name: any;
        parameters: any;
        constructor();
        isBufferGeometry: boolean;
        getIndex(): any;
        setIndex(index: any): void;
        getAttribute(name: any): any;
        setAttribute(name: any, attribute: any): this;
        deleteAttribute(name: any): this;
        addGroup(start: any, count: any, materialIndex: any): void;
        clearGroups(): void;
        setDrawRange(start: any, count: any): void;
        applyMatrix(matrix: any): this;
        rotateX(angle: any): this;
        rotateY(angle: any): this;
        rotateZ(angle: any): this;
        translate(x: any, y: any, z: any): this;
        scale(x: any, y: any, z: any): this;
        lookAt(vector: any): this;
        center(): this;
        setFromObject(object: any): this;
        setFromPoints(points: any): this;
        updateFromObject(object: any): this;
        fromGeometry(geometry: any): this;
        fromDirectGeometry(geometry: any): this;
        computeBoundingBox(): void;
        computeBoundingSphere(): void;
        computeFaceNormals(): void;
        computeVertexNormals(): void;
        merge(geometry: any, offset: any): this;
        normalizeNormals(): void;
        toNonIndexed(): BufferGeometry;
        toJSON(): any;
        clone(): BufferGeometry;
        copy(source: any): this;
        dispose(): void;
    }
}
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     */
    function DirectGeometry(): void;
}
declare namespace THREE {
    /**
     * @author benaadams / https://twitter.com/ben_a_adams
     */
    function InterleavedBuffer(array: any, stride: any): void;
}
declare namespace THREE {
    /**
     * @author benaadams / https://twitter.com/ben_a_adams
     */
    function InstancedBufferAttribute(array: any, itemSize: any, normalized: any, meshPerAttribute?: any): void;
    namespace InstancedBufferAttribute {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author benaadams / https://twitter.com/ben_a_adams
     */
    function InstancedBufferGeometry(): void;
    namespace InstancedBufferGeometry {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author benaadams / https://twitter.com/ben_a_adams
     */
    function InstancedInterleavedBuffer(array: any, stride: any, meshPerAttribute: any): void;
    namespace InstancedInterleavedBuffer {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author benaadams / https://twitter.com/ben_a_adams
     */
    function InterleavedBufferAttribute(interleavedBuffer: any, itemSize: any, offset: any, normalized: any): void;
}
declare namespace THREE {
    /**
     *
     * A timed sequence of keyframes for a specific property.
     *
     *
     * @author Ben Houston / http://clara.io/
     * @author David Sarno / http://lighthaus.us/
     * @author tschw
     */
    class KeyframeTrack {
        name: any;
        times: any;
        values: any;
        createInterpolant: any;
        ValueTypeName: string;
        constructor(name: any, times: any, values: any, interpolation?: any);
        static toJSON(track: any): any;
        constructo: typeof KeyframeTrack;
        TimeBufferType: Float32ArrayConstructor;
        ValueBufferType: any;
        DefaultInterpolation: number;
        InterpolantFactoryMethodDiscrete(result: any): any;
        InterpolantFactoryMethodLinear(result: any): any;
        InterpolantFactoryMethodSmooth(result: any): any;
        setInterpolation(interpolation: any): this;
        getInterpolation(): number;
        getValueSize(): number;
        shift(timeOffset: any): this;
        scale(timeScale: any): this;
        trim(startTime: any, endTime: any): this;
        validate(): boolean;
        optimize(): this;
        clone(): KeyframeTrack;
    }
}
declare namespace THREE {
    /**
     *
     * Action provided by AnimationMixer for scheduling clip playback on specific
     * objects.
     *
     * @author Ben Houston / http://clara.io/
     * @author David Sarno / http://lighthaus.us/
     * @author tschw
     *
     */
    function AnimationAction(mixer: any, clip: any, localRoot: any): void;
}
declare namespace THREE {
    /**
     *
     * Reusable set of Tracks that represent an animation.
     *
     * @author Ben Houston / http://clara.io/
     * @author David Sarno / http://lighthaus.us/
     */
    class AnimationClip {
        name: any;
        tracks: any;
        duration: any;
        uuid: string;
        constructor(name: any, duration: any, tracks: any);
        static parse(json: any): AnimationClip;
        static toJSON(clip: any): {
            'name': any;
            'duration': any;
            'tracks': any[];
            'uuid': any;
        };
        static CreateFromMorphTargetSequence(name: any, morphTargetSequence: any, fps: any, noLoop: any): AnimationClip;
        static findByName(objectOrClipArray: any, name: any): any;
        static CreateClipsFromMorphTargetSequences(morphTargets: any, fps: any, noLoop: any): any[];
        static parseAnimation(animation: any, bones: any): AnimationClip;
        resetDuration(): this;
        trim(): this;
        validate(): boolean;
        optimize(): this;
        clone(): AnimationClip;
    }
}
declare namespace THREE {
    /**
     *
     * Player for AnimationClips.
     *
     *
     * @author Ben Houston / http://clara.io/
     * @author David Sarno / http://lighthaus.us/
     * @author tschw
     */
    function AnimationMixer(root: any): void;
    namespace AnimationMixer {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     *
     * A group of objects that receives a shared animation state.
     *
     * Usage:
     *
     *  - Add objects you would otherwise pass as 'root' to the
     *    constructor or the .clipAction method of AnimationMixer.
     *
     *  - Instead pass this object as 'root'.
     *
     *  - You can also add and remove objects later when the mixer
     *    is running.
     *
     * Note:
     *
     *    Objects of this class appear as one object to the mixer,
     *    so cache control of the individual objects must be done
     *    on the group.
     *
     * Limitation:
     *
     *  - The animated properties must be compatible among the
     *    all objects in the group.
     *
     *  - A single property can either be controlled through a
     *    target group or directly, but not both.
     *
     * @author tschw
     */
    function AnimationObjectGroup(): void;
}
declare namespace THREE {
    /**
     * @author tschw
     * @author Ben Houston / http://clara.io/
     * @author David Sarno / http://lighthaus.us/
     */
    var AnimationUtils: {
        arraySlice: (array: any, from: any, to?: any) => any;
        convertArray: (array: any, type: any, forceClone?: any) => any;
        isTypedArray: (object: any) => boolean;
        getKeyframeOrder: (times: any) => any[];
        sortedArray: (values: any, stride: any, order: any) => any;
        flattenJSON: (jsonKeys: any, times: any, values: any, valuePropertyName: any) => void;
        subclip: (sourceClip: any, name: any, startFrame: any, endFrame: any, fps: any) => any;
    };
}
declare namespace THREE {
    class PropertyBinding {
        path: any;
        parsedPath: any;
        node: any;
        rootNode: any;
        targetObject: any;
        resolvedProperty: any;
        propertyIndex: any;
        propertyName: any;
        _getValue_unbound: (targetArray: any, offset: any) => void;
        _setValue_unbound: (sourceArray: any, offset: any) => void;
        constructor(rootNode: any, path: any, parsedPath: any);
        static create(root: any, path: any, parsedPath: any): any;
        /**
         * Replaces spaces with underscores and removes unsupported characters from
         * node names, to ensure compatibility with parseTrackName().
         *
         * @param {string} name Node name to be sanitized.
         * @return {string}
         */
        static sanitizeNodeName(name: any): any;
        static parseTrackName(trackName: any): {
            nodeName: string;
            objectName: string;
            objectIndex: string;
            propertyName: string;
            propertyIndex: string;
        };
        static findNode(root: any, nodeName: any): any;
        _getValue_unavailable(): void;
        _setValue_unavailable(): void;
        BindingType: {
            Direct: number;
            EntireArray: number;
            ArrayElement: number;
            HasFromToArray: number;
        };
        Versioning: {
            None: number;
            NeedsUpdate: number;
            MatrixWorldNeedsUpdate: number;
        };
        GetterByBindingType: ((buffer: any, offset: any) => void)[];
        SetterByBindingTypeAndVersioning: ((buffer: any, offset: any) => void)[][];
        getValue(targetArray: any, offset: any): void;
        setValue(sourceArray: any, offset: any): void;
        bind(): void;
        unbind(): void;
    }
}
declare namespace THREE {
    /**
     *
     * Buffered scene graph property that allows weighted accumulation.
     *
     *
     * @author Ben Houston / http://clara.io/
     * @author David Sarno / http://lighthaus.us/
     * @author tschw
     */
    function PropertyMixer(binding: any, typeName: any, valueSize: any): void;
}
declare namespace THREE {
    /**
     *
     * A Track of vectored keyframe values.
     *
     *
     * @author Ben Houston / http://clara.io/
     * @author David Sarno / http://lighthaus.us/
     * @author tschw
     */
    class VectorKeyframeTrack extends KeyframeTrack {
        ValueTypeName: string;
        constructor(name: any, times: any, values: any, interpolation: any);
    }
}
declare namespace THREE {
    /**
     *
     * A Track of Boolean keyframe values.
     *
     *
     * @author Ben Houston / http://clara.io/
     * @author David Sarno / http://lighthaus.us/
     * @author tschw
     */
    function BooleanKeyframeTrack(name: any, times: any, values: any): void;
    namespace BooleanKeyframeTrack {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     *
     * A Track of keyframe values that represent color.
     *
     *
     * @author Ben Houston / http://clara.io/
     * @author David Sarno / http://lighthaus.us/
     * @author tschw
     */
    function ColorKeyframeTrack(name: any, times: any, values: any, interpolation: any): void;
    namespace ColorKeyframeTrack {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     *
     * A Track of numeric keyframe values.
     *
     * @author Ben Houston / http://clara.io/
     * @author David Sarno / http://lighthaus.us/
     * @author tschw
     */
    class NumberKeyframeTrack extends KeyframeTrack {
        ValueTypeName: string;
        constructor(name: any, times: any, values: any, interpolation?: any);
    }
}
declare namespace THREE {
    /**
     *
     * A Track of quaternion keyframe values.
     *
     * @author Ben Houston / http://clara.io/
     * @author David Sarno / http://lighthaus.us/
     * @author tschw
     */
    function QuaternionKeyframeTrack(name: any, times: any, values: any, interpolation: any): void;
    namespace QuaternionKeyframeTrack {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     *
     * A Track that interpolates Strings
     *
     *
     * @author Ben Houston / http://clara.io/
     * @author David Sarno / http://lighthaus.us/
     * @author tschw
     */
    class StringKeyframeTrack extends KeyframeTrack {
        ValueTypeName: string;
        ValueBufferType: ArrayConstructor;
        DefaultInterpolation: number;
        InterpolantFactoryMethodLinear: any;
        InterpolantFactoryMethodSmooth: any;
        constructor(name: any, times: any, values: any, interpolation: any);
    }
}
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     * @author Reece Aaron Lecrivain / http://reecenotes.com/
     */
    function Audio(listener: any): void;
    namespace Audio {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     */
    function AudioAnalyser(audio: any, fftSize: any): void;
}
declare namespace THREE {
    var AudioContext: {
        getContext: () => any;
        setContext: (value: any) => void;
    };
}
declare namespace THREE {
    function AudioListener(): void;
    namespace AudioListener {
        var prototype: any;
    }
}
declare namespace THREE {
    function PositionalAudio(listener: any): void;
    namespace PositionalAudio {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     * @author mikael emtinger / http://gomo.se/
     * @author WestLangley / http://github.com/WestLangley
    */
    function Camera(): void;
    namespace Camera {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     * @author greggman / http://games.greggman.com/
     * @author zz85 / http://www.lab4games.net/zz85/blog
     * @author tschw
     */
    function PerspectiveCamera(fov?: any, aspect?: any, near?: any, far?: any): void;
    namespace PerspectiveCamera {
        var prototype: any;
    }
}
declare namespace THREE {
    function CubeCamera(near: any, far: any, cubeResolution: any, options?: any): void;
    namespace CubeCamera {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author alteredq / http://alteredqualia.com/
     * @author arose / http://github.com/arose
     */
    function OrthographicCamera(left: any, right: any, top: any, bottom: any, near: any, far: any): void;
    namespace OrthographicCamera {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     */
    function ArrayCamera(array: any): void;
    namespace ArrayCamera {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     */
    function StereoCamera(): void;
}
declare namespace THREE {
    class Texture extends EventDispatcher {
        uuid: string;
        name: string;
        image: any;
        mipmaps: any[];
        mapping: any;
        wrapS: any;
        wrapT: any;
        magFilter: any;
        minFilter: any;
        anisotropy: any;
        format: any;
        type: any;
        offset: any;
        repeat: any;
        center: any;
        rotation: number;
        matrixAutoUpdate: boolean;
        matrix: any;
        generateMipmaps: boolean;
        premultiplyAlpha: boolean;
        flipY: boolean;
        unpackAlignment: number;
        encoding: any;
        version: number;
        onUpdate: any;
        constructor(image?: any, mapping?: any, wrapS?: any, wrapT?: any, magFilter?: any, minFilter?: any, format?: any, type?: any, anisotropy?: any, encoding?: any);
        set needsUpdate(value: any);
        isTexture: boolean;
        updateMatrix(): void;
        clone(): Texture;
        copy(source: any): this;
        toJSON(meta: any): any;
        dispose(): void;
        transformUv(uv: any): any;
        static DEFAULT_IMAGE: any;
        static DEFAULT_MAPPING: number;
    }
}
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     */
    function CanvasTexture(canvas: any, mapping: any, wrapS: any, wrapT: any, magFilter: any, minFilter: any, format: any, type: any, anisotropy: any): void;
    namespace CanvasTexture {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author alteredq / http://alteredqualia.com/
     */
    function CompressedTexture(mipmaps?: any, width?: any, height?: any, format?: any, type?: any, mapping?: any, wrapS?: any, wrapT?: any, magFilter?: any, minFilter?: any, anisotropy?: any, encoding?: any): void;
    namespace CompressedTexture {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     */
    function CubeTexture(images?: any, mapping?: any, wrapS?: any, wrapT?: any, magFilter?: any, minFilter?: any, format?: any, type?: any, anisotropy?: any, encoding?: any): void;
    namespace CubeTexture {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author alteredq / http://alteredqualia.com/
     */
    class DataTexture extends Texture {
        isDataTexture: boolean;
        constructor(data?: any, width?: any, height?: any, format?: any, type?: any, mapping?: any, wrapS?: any, wrapT?: any, magFilter?: any, minFilter?: any, anisotropy?: any, encoding?: any);
    }
}
declare namespace THREE {
    /**
     * @author Takahiro https://github.com/takahirox
     */
    function DataTexture2DArray(data?: any, width?: any, height?: any, depth?: any): void;
    namespace DataTexture2DArray {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author Artur Trzesiok
     */
    function DataTexture3D(data?: any, width?: any, height?: any, depth?: any): void;
    namespace DataTexture3D {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author Matt DesLauriers / @mattdesl
     * @author atix / arthursilber.de
     */
    function DepthTexture(width: any, height: any, type: any, mapping: any, wrapS: any, wrapT: any, magFilter: any, minFilter: any, anisotropy: any, format: any): void;
    namespace DepthTexture {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     */
    function VideoTexture(video: any, mapping: any, wrapS: any, wrapT: any, magFilter: any, minFilter: any, format: any, type: any, anisotropy: any): void;
    namespace VideoTexture {
        var prototype: any;
    }
}
declare namespace THREE.ShaderChunk {
    var alphamap_fragment: string;
}
declare namespace THREE.ShaderChunk {
    var alphamap_pars_fragment: string;
}
declare namespace THREE.ShaderChunk {
    var alphatest_fragment: string;
}
declare namespace THREE.ShaderChunk {
    var aomap_fragment: string;
}
declare namespace THREE.ShaderChunk {
    var aomap_pars_fragment: string;
}
declare namespace THREE.ShaderChunk {
    var begin_vertex: string;
}
declare namespace THREE.ShaderChunk {
    var beginnormal_vertex: string;
}
declare namespace THREE.ShaderChunk {
    var bsdfs: string;
}
declare namespace THREE.ShaderChunk {
    var bumpmap_pars_fragment: string;
}
declare namespace THREE.ShaderChunk {
    var clipping_planes_fragment: string;
}
declare namespace THREE.ShaderChunk {
    var clipping_planes_pars_fragment: string;
}
declare namespace THREE.ShaderChunk {
    var clipping_planes_pars_vertex: string;
}
declare namespace THREE.ShaderChunk {
    var clipping_planes_vertex: string;
}
declare namespace THREE.ShaderChunk {
    var color_fragment: string;
}
declare namespace THREE.ShaderChunk {
    var color_pars_fragment: string;
}
declare namespace THREE.ShaderChunk {
    var color_pars_vertex: string;
}
declare namespace THREE.ShaderChunk {
    var color_vertex: string;
}
declare namespace THREE.ShaderChunk {
    var common: string;
}
declare namespace THREE.ShaderChunk {
    var cube_uv_reflection_fragment: string;
}
declare namespace THREE.ShaderChunk {
    var defaultnormal_vertex: string;
}
declare namespace THREE.ShaderChunk {
    var displacementmap_pars_vertex: string;
}
declare namespace THREE.ShaderChunk {
    var displacementmap_vertex: string;
}
declare namespace THREE.ShaderChunk {
    var emissivemap_fragment: string;
}
declare namespace THREE.ShaderChunk {
    var emissivemap_pars_fragment: string;
}
declare namespace THREE.ShaderChunk {
    var encodings_fragment: string;
}
declare namespace THREE.ShaderChunk {
    var encodings_pars_fragment: string;
}
declare namespace THREE.ShaderChunk {
    var envmap_fragment: string;
}
declare namespace THREE.ShaderChunk {
    var envmap_common_pars_fragment: string;
}
declare namespace THREE.ShaderChunk {
    var envmap_pars_fragment: string;
}
declare namespace THREE.ShaderChunk {
    var envmap_pars_vertex: string;
}
declare namespace THREE.ShaderChunk {
    var envmap_physical_pars_fragment: string;
}
declare namespace THREE.ShaderChunk {
    var envmap_vertex: string;
}
declare namespace THREE.ShaderChunk {
    var fog_vertex: string;
}
declare namespace THREE.ShaderChunk {
    var fog_pars_vertex: string;
}
declare namespace THREE.ShaderChunk {
    var fog_fragment: string;
}
declare namespace THREE.ShaderChunk {
    var fog_pars_fragment: string;
}
declare namespace THREE.ShaderChunk {
    var gradientmap_pars_fragment: string;
}
declare namespace THREE.ShaderChunk {
    var lightmap_fragment: string;
}
declare namespace THREE.ShaderChunk {
    var lightmap_pars_fragment: string;
}
declare namespace THREE.ShaderChunk {
    var lights_lambert_vertex: string;
}
declare namespace THREE.ShaderChunk {
    var lights_pars_begin: string;
}
declare namespace THREE.ShaderChunk {
    var lights_phong_fragment: string;
}
declare namespace THREE.ShaderChunk {
    var lights_phong_pars_fragment: string;
}
declare namespace THREE.ShaderChunk {
    var lights_physical_fragment: string;
}
declare namespace THREE.ShaderChunk {
    var lights_physical_pars_fragment: string;
}
declare namespace THREE.ShaderChunk {
    var lights_fragment_begin: string;
}
declare namespace THREE.ShaderChunk {
    var lights_fragment_maps: string;
}
declare namespace THREE.ShaderChunk {
    var lights_fragment_end: string;
}
declare namespace THREE.ShaderChunk {
    var logdepthbuf_fragment: string;
}
declare namespace THREE.ShaderChunk {
    var logdepthbuf_pars_fragment: string;
}
declare namespace THREE.ShaderChunk {
    var logdepthbuf_pars_vertex: string;
}
declare namespace THREE.ShaderChunk {
    var logdepthbuf_vertex: string;
}
declare namespace THREE.ShaderChunk {
    var map_fragment: string;
}
declare namespace THREE.ShaderChunk {
    var map_pars_fragment: string;
}
declare namespace THREE.ShaderChunk {
    var map_particle_fragment: string;
}
declare namespace THREE.ShaderChunk {
    var map_particle_pars_fragment: string;
}
declare namespace THREE.ShaderChunk {
    var metalnessmap_fragment: string;
}
declare namespace THREE.ShaderChunk {
    var metalnessmap_pars_fragment: string;
}
declare namespace THREE.ShaderChunk {
    var morphnormal_vertex: string;
}
declare namespace THREE.ShaderChunk {
    var morphtarget_pars_vertex: string;
}
declare namespace THREE.ShaderChunk {
    var morphtarget_vertex: string;
}
declare namespace THREE.ShaderChunk {
    var normal_fragment_begin: string;
}
declare namespace THREE.ShaderChunk {
    var normal_fragment_maps: string;
}
declare namespace THREE.ShaderChunk {
    var normalmap_pars_fragment: string;
}
declare namespace THREE.ShaderChunk {
    var clearcoat_normal_fragment_begin: string;
}
declare namespace THREE.ShaderChunk {
    var clearcoat_normal_fragment_maps: string;
}
declare namespace THREE.ShaderChunk {
    var clearcoat_normalmap_pars_fragment: string;
}
declare namespace THREE.ShaderChunk {
    var packing: string;
}
declare namespace THREE.ShaderChunk {
    var premultiplied_alpha_fragment: string;
}
declare namespace THREE.ShaderChunk {
    var project_vertex: string;
}
declare namespace THREE.ShaderChunk {
    var dithering_fragment: string;
}
declare namespace THREE.ShaderChunk {
    var dithering_pars_fragment: string;
}
declare namespace THREE.ShaderChunk {
    var roughnessmap_fragment: string;
}
declare namespace THREE.ShaderChunk {
    var roughnessmap_pars_fragment: string;
}
declare namespace THREE.ShaderChunk {
    var shadowmap_pars_fragment: string;
}
declare namespace THREE.ShaderChunk {
    var shadowmap_pars_vertex: string;
}
declare namespace THREE.ShaderChunk {
    var shadowmap_vertex: string;
}
declare namespace THREE.ShaderChunk {
    var shadowmask_pars_fragment: string;
}
declare namespace THREE.ShaderChunk {
    var skinbase_vertex: string;
}
declare namespace THREE.ShaderChunk {
    var skinning_pars_vertex: string;
}
declare namespace THREE.ShaderChunk {
    var skinning_vertex: string;
}
declare namespace THREE.ShaderChunk {
    var skinnormal_vertex: string;
}
declare namespace THREE.ShaderChunk {
    var specularmap_fragment: string;
}
declare namespace THREE.ShaderChunk {
    var specularmap_pars_fragment: string;
}
declare namespace THREE.ShaderChunk {
    var tonemapping_fragment: string;
}
declare namespace THREE.ShaderChunk {
    var tonemapping_pars_fragment: string;
}
declare namespace THREE.ShaderChunk {
    var uv_pars_fragment: string;
}
declare namespace THREE.ShaderChunk {
    var uv_pars_vertex: string;
}
declare namespace THREE.ShaderChunk {
    var uv_vertex: string;
}
declare namespace THREE.ShaderChunk {
    var uv2_pars_fragment: string;
}
declare namespace THREE.ShaderChunk {
    var uv2_pars_vertex: string;
}
declare namespace THREE.ShaderChunk {
    var uv2_vertex: string;
}
declare namespace THREE.ShaderChunk {
    var worldpos_vertex: string;
}
declare namespace THREE.ShaderChunk {
    var default_vertex: string;
}
declare namespace THREE.ShaderChunk {
    var default_fragment: string;
}
declare namespace THREE.ShaderChunk {
    var background_frag: string;
}
declare namespace THREE.ShaderChunk {
    var background_vert: string;
}
declare namespace THREE.ShaderChunk {
    var cube_frag: string;
}
declare namespace THREE.ShaderChunk {
    var cube_vert: string;
}
declare namespace THREE.ShaderChunk {
    var depth_frag: string;
}
declare namespace THREE.ShaderChunk {
    var depth_vert: string;
}
declare namespace THREE.ShaderChunk {
    var distanceRGBA_frag: string;
}
declare namespace THREE.ShaderChunk {
    var distanceRGBA_vert: string;
}
declare namespace THREE.ShaderChunk {
    var equirect_frag: string;
}
declare namespace THREE.ShaderChunk {
    var equirect_vert: string;
}
declare namespace THREE.ShaderChunk {
    var linedashed_frag: string;
}
declare namespace THREE.ShaderChunk {
    var linedashed_vert: string;
}
declare namespace THREE.ShaderChunk {
    var meshbasic_frag: string;
}
declare namespace THREE.ShaderChunk {
    var meshbasic_vert: string;
}
declare namespace THREE.ShaderChunk {
    var meshlambert_frag: string;
}
declare namespace THREE.ShaderChunk {
    var meshlambert_vert: string;
}
declare namespace THREE.ShaderChunk {
    var meshmatcap_frag: string;
}
declare namespace THREE.ShaderChunk {
    var meshmatcap_vert: string;
}
declare namespace THREE.ShaderChunk {
    var meshphong_frag: string;
}
declare namespace THREE.ShaderChunk {
    var meshphong_vert: string;
}
declare namespace THREE.ShaderChunk {
    var meshphysical_frag: string;
}
declare namespace THREE.ShaderChunk {
    var meshphysical_vert: string;
}
declare namespace THREE.ShaderChunk {
    var normal_frag: string;
}
declare namespace THREE.ShaderChunk {
    var normal_vert: string;
}
declare namespace THREE.ShaderChunk {
    var points_frag: string;
}
declare namespace THREE.ShaderChunk {
    var points_vert: string;
}
declare namespace THREE.ShaderChunk {
    var shadow_frag: string;
}
declare namespace THREE.ShaderChunk {
    var shadow_vert: string;
}
declare namespace THREE.ShaderChunk {
    var sprite_frag: string;
}
declare namespace THREE.ShaderChunk {
    var sprite_vert: string;
}
declare namespace THREE.ShaderChunk {
    var vsm_vert: string;
}
declare namespace THREE.ShaderChunk {
    var vsm_frag: string;
}
declare namespace THREE {
    /**
     * Uniforms library for shared webgl shaders
     */
    var UniformsLib: {
        common: {
            diffuse: {
                value: Color;
            };
            opacity: {
                value: number;
            };
            map: {
                value: any;
            };
            uvTransform: {
                value: any;
            };
            alphaMap: {
                value: any;
            };
        };
        specularmap: {
            specularMap: {
                value: any;
            };
        };
        envmap: {
            envMap: {
                value: any;
            };
            flipEnvMap: {
                value: number;
            };
            reflectivity: {
                value: number;
            };
            refractionRatio: {
                value: number;
            };
            maxMipLevel: {
                value: number;
            };
        };
        aomap: {
            aoMap: {
                value: any;
            };
            aoMapIntensity: {
                value: number;
            };
        };
        lightmap: {
            lightMap: {
                value: any;
            };
            lightMapIntensity: {
                value: number;
            };
        };
        emissivemap: {
            emissiveMap: {
                value: any;
            };
        };
        bumpmap: {
            bumpMap: {
                value: any;
            };
            bumpScale: {
                value: number;
            };
        };
        normalmap: {
            normalMap: {
                value: any;
            };
            normalScale: {
                value: any;
            };
        };
        displacementmap: {
            displacementMap: {
                value: any;
            };
            displacementScale: {
                value: number;
            };
            displacementBias: {
                value: number;
            };
        };
        roughnessmap: {
            roughnessMap: {
                value: any;
            };
        };
        metalnessmap: {
            metalnessMap: {
                value: any;
            };
        };
        gradientmap: {
            gradientMap: {
                value: any;
            };
        };
        fog: {
            fogDensity: {
                value: number;
            };
            fogNear: {
                value: number;
            };
            fogFar: {
                value: number;
            };
            fogColor: {
                value: Color;
            };
        };
        lights: {
            ambientLightColor: {
                value: any[];
            };
            lightProbe: {
                value: any[];
            };
            directionalLights: {
                value: any[];
                properties: {
                    direction: {};
                    color: {};
                    shadow: {};
                    shadowBias: {};
                    shadowRadius: {};
                    shadowMapSize: {};
                };
            };
            directionalShadowMap: {
                value: any[];
            };
            directionalShadowMatrix: {
                value: any[];
            };
            spotLights: {
                value: any[];
                properties: {
                    color: {};
                    position: {};
                    direction: {};
                    distance: {};
                    coneCos: {};
                    penumbraCos: {};
                    decay: {};
                    shadow: {};
                    shadowBias: {};
                    shadowRadius: {};
                    shadowMapSize: {};
                };
            };
            spotShadowMap: {
                value: any[];
            };
            spotShadowMatrix: {
                value: any[];
            };
            pointLights: {
                value: any[];
                properties: {
                    color: {};
                    position: {};
                    decay: {};
                    distance: {};
                    shadow: {};
                    shadowBias: {};
                    shadowRadius: {};
                    shadowMapSize: {};
                    shadowCameraNear: {};
                    shadowCameraFar: {};
                };
            };
            pointShadowMap: {
                value: any[];
            };
            pointShadowMatrix: {
                value: any[];
            };
            hemisphereLights: {
                value: any[];
                properties: {
                    direction: {};
                    skyColor: {};
                    groundColor: {};
                };
            };
            rectAreaLights: {
                value: any[];
                properties: {
                    color: {};
                    position: {};
                    width: {};
                    height: {};
                };
            };
        };
        points: {
            diffuse: {
                value: Color;
            };
            opacity: {
                value: number;
            };
            size: {
                value: number;
            };
            scale: {
                value: number;
            };
            map: {
                value: any;
            };
            alphaMap: {
                value: any;
            };
            uvTransform: {
                value: any;
            };
        };
        sprite: {
            diffuse: {
                value: Color;
            };
            opacity: {
                value: number;
            };
            center: {
                value: any;
            };
            rotation: {
                value: number;
            };
            map: {
                value: any;
            };
            alphaMap: {
                value: any;
            };
            uvTransform: {
                value: any;
            };
        };
    };
}
declare namespace THREE {
    /**
     * Uniform Utilities
     */
    function cloneUniforms(src: any): {};
    function mergeUniforms(uniforms: any): {};
    var UniformsUtils: {
        clone: typeof cloneUniforms;
        merge: typeof mergeUniforms;
    };
}
declare namespace THREE {
    /**
     * @author alteredq / http://alteredqualia.com/
     * @author mrdoob / http://mrdoob.com/
     * @author mikael emtinger / http://gomo.se/
     */
    var ShaderLib: {
        basic: {
            uniforms: {};
            vertexShader: string;
            fragmentShader: string;
        };
        lambert: {
            uniforms: {};
            vertexShader: string;
            fragmentShader: string;
        };
        phong: {
            uniforms: {};
            vertexShader: string;
            fragmentShader: string;
        };
        standard: {
            uniforms: {};
            vertexShader: string;
            fragmentShader: string;
        };
        matcap: {
            uniforms: {};
            vertexShader: string;
            fragmentShader: string;
        };
        points: {
            uniforms: {};
            vertexShader: string;
            fragmentShader: string;
        };
        dashed: {
            uniforms: {};
            vertexShader: string;
            fragmentShader: string;
        };
        depth: {
            uniforms: {};
            vertexShader: string;
            fragmentShader: string;
        };
        normal: {
            uniforms: {};
            vertexShader: string;
            fragmentShader: string;
        };
        sprite: {
            uniforms: {};
            vertexShader: string;
            fragmentShader: string;
        };
        background: {
            uniforms: {
                uvTransform: {
                    value: any;
                };
                t2D: {
                    value: any;
                };
            };
            vertexShader: string;
            fragmentShader: string;
        };
        cube: {
            uniforms: {
                tCube: {
                    value: any;
                };
                tFlip: {
                    value: number;
                };
                opacity: {
                    value: number;
                };
            };
            vertexShader: string;
            fragmentShader: string;
        };
        equirect: {
            uniforms: {
                tEquirect: {
                    value: any;
                };
            };
            vertexShader: string;
            fragmentShader: string;
        };
        distanceRGBA: {
            uniforms: {};
            vertexShader: string;
            fragmentShader: string;
        };
        shadow: {
            uniforms: {};
            vertexShader: string;
            fragmentShader: string;
        };
    };
}
declare namespace THREE {
    /**
     * @author szimek / https://github.com/szimek/
     * @author alteredq / http://alteredqualia.com/
     * @author Marius Kintel / https://github.com/kintel
     */
    class WebGLRenderTarget extends EventDispatcher {
        width: number;
        height: any;
        scissor: any;
        scissorTest: boolean;
        viewport: any;
        texture: Texture;
        depthBuffer: any;
        stencilBuffer: any;
        depthTexture: any;
        constructor(width?: number, height?: any, options?: any);
        isWebGLRenderTarget: boolean;
        setSize(width: any, height: any): void;
        clone(): WebGLRenderTarget;
        copy(source: any): this;
        dispose(): void;
    }
}
declare namespace THREE {
    /**
     * @author Mugen87 / https://github.com/Mugen87
     * @author Matt DesLauriers / @mattdesl
     */
    function WebGLMultisampleRenderTarget(width: any, height: any, options: any): void;
    namespace WebGLMultisampleRenderTarget {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author fernandojsg / http://fernandojsg.com
     * @author Takahiro https://github.com/takahirox
     */
    function WebGLMultiviewRenderTarget(width: any, height: any, numViews: any, options?: any): void;
    namespace WebGLMultiviewRenderTarget {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author alteredq / http://alteredqualia.com
     * @author WestLangley / http://github.com/WestLangley
     */
    class WebGLRenderTargetCube extends WebGLRenderTarget {
        isWebGLRenderTargetCube: boolean;
        constructor(width: any, height: any, options: any);
        fromEquirectangularTexture(renderer: any, texture: any): this;
    }
}
declare namespace THREE {
    /**
     * @author supereggbert / http://www.paulbrunt.co.uk/
     * @author mrdoob / http://mrdoob.com/
     * @author alteredq / http://alteredqualia.com/
     * @author szimek / https://github.com/szimek/
     * @author tschw
     */
    class WebGLRenderer {
        renderBufferDirect: (camera: any, fog: any, geometry: any, material: any, object: any, group: any) => void;
        compile: (scene: any, camera: any) => void;
        setAnimationLoop: (callback: any) => void;
        render: (scene: any, camera: any) => void;
        setFramebuffer: (value: any) => void;
        getActiveCubeFace: () => number;
        getActiveMipmapLevel: () => number;
        getRenderTarget: () => any;
        setRenderTarget: (renderTarget: any, activeCubeFace: any, activeMipmapLevel: any) => void;
        readRenderTargetPixels: (renderTarget: any, x: any, y: any, width: any, height: any, buffer: any, activeCubeFaceIndex: any) => void;
        copyFramebufferToTexture: (position: any, texture: any, level: any) => void;
        copyTextureToTexture: (position: any, srcTexture: any, dstTexture: any, level: any) => void;
        initTexture: (texture: any) => void;
        renderBufferImmediate(object: any, program: any): void;
        domElement: any;
        debug: {
            /**
             * Enables error checking and reporting when shader programs are being compiled
             * @type {boolean}
             */
            checkShaderErrors: boolean;
        };
        autoClear: boolean;
        autoClearColor: boolean;
        autoClearDepth: boolean;
        autoClearStencil: boolean;
        sortObjects: boolean;
        clippingPlanes: any[];
        localClippingEnabled: boolean;
        gammaFactor: number;
        gammaOutput: boolean;
        gammaInput: boolean;
        physicallyCorrectLights: boolean;
        toneMapping: number;
        toneMappingExposure: number;
        toneMappingWhitePoint: number;
        maxMorphTargets: number;
        maxMorphNormals: number;
        capabilities: any;
        extensions: any;
        properties: any;
        renderLists: any;
        state: any;
        info: any;
        vr: any;
        shadowMap: any;
        getContext: () => any;
        getContextAttributes: () => any;
        forceContextLoss: () => void;
        forceContextRestore: () => void;
        getPixelRatio: () => number;
        setPixelRatio: (value: any) => void;
        getSize: (target: any) => any;
        setSize: (width: any, height: any, updateStyle: any) => void;
        getDrawingBufferSize: (target: any) => any;
        setDrawingBufferSize: (width: any, height: any, pixelRatio: any) => void;
        getCurrentViewport: (target: any) => any;
        getViewport: (target: any) => any;
        setViewport: (x: any, y: any, width: any, height: any) => void;
        getScissor: (target: any) => any;
        setScissor: (x: any, y: any, width: any, height: any) => void;
        getScissorTest: () => boolean;
        setScissorTest: (boolean: any) => void;
        getClearColor: () => any;
        setClearColor: () => void;
        getClearAlpha: () => any;
        setClearAlpha: () => void;
        clear: (color: any, depth: any, stencil: any) => void;
        clearColor: () => void;
        clearDepth: () => void;
        clearStencil: () => void;
        dispose: () => void;
        constructor(parameters: any);
    }
}
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     */
    class WebGLAnimation {
        context: any;
        isAnimating: boolean;
        animationLoop: any;
        onAnimationFrame(time: any, frame: any): void;
        start(): void;
        stop(): void;
        setAnimationLoop(callback: any): void;
        setContext(value: any): void;
    }
}
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     */
    class WebGLAttributes {
        constructor(gl: any);
    }
}
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     */
    class WebGLBackground {
        constructor(renderer: any, state: any, objects: any, premultipliedAlpha: any);
    }
}
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     */
    function WebGLBufferRenderer(gl: any, extensions: any, info: any, capabilities: any): void;
}
declare var WebGL2ComputeRenderingContext: any;
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     */
    class WebGLCapabilities {
        constructor(gl: any, extensions: any, parameters: any);
    }
}
declare namespace THREE {
    /**
     * @author tschw
     */
    function WebGLClipping(): void;
}
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     */
    class WebGLExtensions {
        constructor(gl: any);
    }
}
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     */
    class WebGLGeometries {
        constructor(gl: any, attributes: any, info: any);
    }
}
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     */
    class WebGLIndexedBufferRenderer {
        setMode: (value: any) => void;
        setIndex: (value: any) => void;
        render: (start: any, count: any) => void;
        renderInstances: (geometry: any, start: any, count: any, primcount: any) => void;
        constructor(gl: any, extensions: any, info: any, capabilities: any);
    }
}
declare namespace THREE {
    /**
     * @author Mugen87 / https://github.com/Mugen87
     */
    class WebGLInfo {
        constructor(gl: any);
    }
}
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     */
    class UniformsCache {
        lights: {};
        get(light: any): any;
    }
    class WebGLLights {
        setup: (lights: any, shadows: any, camera: any) => void;
        state: any;
        constructor();
    }
}
declare namespace THREE {
    class WebGLMorphtargets {
        constructor(gl: any);
    }
}
declare namespace THREE {
    /**
     * @author fernandojsg / http://fernandojsg.com
     * @author Takahiro https://github.com/takahirox
     */
    function WebGLMultiview(renderer: any, gl: any): void;
}
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     */
    class WebGLObjects {
        constructor(gl: any, geometries: any, attributes: any, info: any);
    }
}
declare namespace THREE {
    class WebGLProgram {
        diagnostics: {
            runnable: boolean;
            material: any;
            programLog: any;
            vertexShader: {
                log: any;
                prefix: any;
            };
            fragmentShader: {
                log: any;
                prefix: any;
            };
        };
        getUniforms: () => any;
        getAttributes: () => any;
        destroy: () => void;
        name: any;
        id: number;
        cacheKey: any;
        usedTimes: number;
        program: any;
        vertexShader: any;
        fragmentShader: any;
        numMultiviewViews: any;
        constructor(renderer: any, extensions: any, cacheKey: any, material: any, shader: any, parameters: any);
    }
}
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     */
    class WebGLPrograms {
        programs: any[];
        releaseProgram: (program: any) => void;
        acquireProgram: (material: any, shader: any, parameters: any, cacheKey: any) => any;
        getProgramCacheKey: (material: any, parameters: any) => string;
        getParameters: any;
        constructor(renderer: any, extensions: any, capabilities: any);
    }
}
declare namespace THREE {
    /**
     * @author fordacious / fordacious.github.io
     */
    class WebGLProperties {
        constructor();
    }
}
declare namespace THREE {
    class WebGLRenderLists {
        constructor();
    }
}
declare namespace THREE {
    /**
     * @author Mugen87 / https://github.com/Mugen87
     */
    class WebGLRenderState {
        constructor();
    }
    class WebGLRenderStates {
        constructor();
    }
}
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     */
    function WebGLShader(gl: any, type: any, string: any): any;
}
declare namespace THREE {
    /**
     * @author alteredq / http://alteredqualia.com/
     * @author mrdoob / http://mrdoob.com/
     */
    function WebGLShadowMap(_renderer: any, _objects: any, maxTextureSize: any): void;
}
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     */
    class WebGLState {
        constructor(gl: any, extensions: any, capabilities: any);
    }
}
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     */
    function WebGLTextures(_gl: any, extensions: any, state: any, properties: any, capabilities: any, utils: any, info: any): void;
}
declare namespace THREE {
    function WebGLUniforms(gl: any, program: any): void;
    namespace WebGLUniforms {
        var upload: (gl: any, seq: any, values: any, textures: any) => void;
        var seqWithValue: (seq: any, values: any) => any[];
    }
}
declare namespace THREE {
    /**
     * @author thespite / http://www.twitter.com/thespite
     */
    class WebGLUtils {
        constructor(gl: any, extensions: any, capabilities: any);
    }
}
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     */
    function WebVRManager(renderer: any): void;
}
declare namespace THREE {
    /**
     * Assumes 2 cameras that are parallel and share an X-axis, and that
     * the cameras' projection and world matrices have already been set.
     * And that near and far planes are identical for both cameras.
     * Visualization of this technique: https://computergraphics.stackexchange.com/a/4765
     */
    function setProjectionFromUnion(camera: any, cameraL: any, cameraR: any): void;
}
declare var XRWebGLLayer: any;
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     */
    function WebXRManager(renderer: any, gl: any): void;
}
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     */
    function Group(): void;
    namespace Group {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author mikael emtinger / http://gomo.se/
     * @author alteredq / http://alteredqualia.com/
     * @author ikerr / http://verold.com
     */
    function Bone(): void;
    namespace Bone {
        var prototype: any;
    }
}
declare namespace THREE {
    function Line(geometry: any, material: any, mode?: any): void;
    namespace Line {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author mgreter / http://github.com/mgreter
     */
    function LineLoop(geometry: any, material: any): void;
    namespace LineLoop {
        var prototype: any;
    }
}
declare namespace THREE {
    function LineSegments(geometry: any, material: any): void;
    namespace LineSegments {
        var prototype: any;
    }
}
declare namespace THREE {
    function LOD(): void;
    namespace LOD {
        var prototype: any;
    }
}
declare namespace THREE {
    function Mesh(geometry: any, material: any): void;
    namespace Mesh {
        var prototype: any;
    }
}
declare namespace THREE {
    function Points(geometry: any, material: any): void;
    namespace Points {
        var prototype: any;
    }
}
declare namespace THREE {
    function Skeleton(bones: any, boneInverses: any): void;
}
declare namespace THREE {
    function Sprite(material: any): void;
    namespace Sprite {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     */
    function InstancedMesh(geometry: any, material: any, count: any): void;
    namespace InstancedMesh {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author mikael emtinger / http://gomo.se/
     * @author alteredq / http://alteredqualia.com/
     * @author ikerr / http://verold.com
     */
    function SkinnedMesh(geometry: any, material: any): void;
    namespace SkinnedMesh {
        var prototype: any;
    }
}
declare namespace THREE {
    class Material extends EventDispatcher {
        uuid: string;
        name: string;
        type: string;
        fog: boolean;
        blending: number;
        side: number;
        flatShading: boolean;
        vertexTangents: boolean;
        vertexColors: number;
        opacity: number;
        transparent: boolean;
        blendSrc: number;
        blendDst: number;
        blendEquation: number;
        blendSrcAlpha: any;
        blendDstAlpha: any;
        blendEquationAlpha: any;
        depthFunc: number;
        depthTest: boolean;
        depthWrite: boolean;
        stencilWriteMask: number;
        stencilFunc: number;
        stencilRef: number;
        stencilFuncMask: number;
        stencilFail: number;
        stencilZPass: number;
        stencilZFail: number;
        stencilWrite: boolean;
        clippingPlanes: any;
        clipIntersection: boolean;
        clipShadows: boolean;
        shadowSide: any;
        colorWrite: boolean;
        precision: any;
        polygonOffset: boolean;
        polygonOffsetFactor: number;
        polygonOffsetUnits: number;
        dithering: boolean;
        alphaTest: number;
        premultipliedAlpha: boolean;
        visible: boolean;
        toneMapped: boolean;
        userData: {};
        needsUpdate: boolean;
        color: any;
        roughness: any;
        metalness: any;
        sheen: any;
        emissive: any;
        emissiveIntensity: any;
        specular: any;
        shininess: any;
        clearcoat: any;
        clearcoatRoughness: any;
        clearcoatNormalMap: any;
        clearcoatNormalScale: any;
        map: any;
        matcap: any;
        alphaMap: any;
        lightMap: any;
        aoMap: any;
        aoMapIntensity: any;
        bumpMap: any;
        bumpScale: any;
        normalMap: any;
        normalMapType: any;
        normalScale: any;
        displacementMap: any;
        displacementBias: any;
        displacementScale: any;
        roughnessMap: any;
        metalnessMap: any;
        emissiveMap: any;
        specularMap: any;
        envMap: any;
        reflectivity: any;
        refractionRatio: any;
        combine: any;
        envMapIntensity: any;
        gradientMap: any;
        size: any;
        sizeAttenuation: any;
        rotation: number;
        linewidth: number;
        dashSize: any;
        gapSize: any;
        scale: any;
        wireframe: boolean;
        wireframeLinewidth: number;
        wireframeLinecap: string;
        wireframeLinejoin: string;
        morphTargets: boolean;
        morphNormals: boolean;
        skinning: boolean;
        defines: any;
        uniforms: any;
        constructor();
        isMaterial: boolean;
        onBeforeCompile(): void;
        setValues(values: any): void;
        toJSON(meta: any): any;
        clone(): any;
        copy(source: any): this;
        dispose(): void;
    }
}
declare namespace THREE {
    /**
     * @author alteredq / http://alteredqualia.com/
     *
     * parameters = {
     *  defines: { "label" : "value" },
     *  uniforms: { "parameter1": { value: 1.0 }, "parameter2": { value2: 2 } },
     *
     *  fragmentShader: <string>,
     *  vertexShader: <string>,
     *
     *  wireframe: <boolean>,
     *  wireframeLinewidth: <float>,
     *
     *  lights: <bool>,
     *
     *  skinning: <bool>,
     *  morphTargets: <bool>,
     *  morphNormals: <bool>
     * }
     */
    class ShaderMaterial extends Material {
        isShaderMaterial: boolean;
        defines: {};
        uniforms: any;
        vertexShader: string;
        fragmentShader: string;
        lights: boolean;
        clipping: boolean;
        extensions: {
            derivatives: boolean;
            fragDepth: boolean;
            drawBuffers: boolean;
            shaderTextureLOD: boolean;
        };
        defaultAttributeValues: {
            'color': number[];
            'uv': number[];
            'uv2': number[];
        };
        index0AttributeName: any;
        uniformsNeedUpdate: boolean;
        constructor(parameters: any);
        copy(source: any): this;
        toJSON(meta: any): any;
    }
}
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     *
     * parameters = {
     *  color: <THREE.Color>
     * }
     */
    function ShadowMaterial(parameters: any): void;
    namespace ShadowMaterial {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author alteredq / http://alteredqualia.com/
     *
     * parameters = {
     *  color: <hex>,
     *  map: new THREE.Texture( <Image> ),
     *  alphaMap: new THREE.Texture( <Image> ),
     *  rotation: <float>,
     *  sizeAttenuation: <bool>
     * }
     */
    function SpriteMaterial(parameters?: any): void;
    namespace SpriteMaterial {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     */
    function RawShaderMaterial(parameters: any): void;
    namespace RawShaderMaterial {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     * @author alteredq / http://alteredqualia.com/
     *
     * parameters = {
     *  color: <hex>,
     *  opacity: <float>,
     *  map: new THREE.Texture( <Image> ),
     *  alphaMap: new THREE.Texture( <Image> ),
     *
     *  size: <float>,
     *  sizeAttenuation: <bool>
     *
     *  morphTargets: <bool>
     * }
     */
    function PointsMaterial(parameters: any): void;
    namespace PointsMaterial {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     * @author alteredq / http://alteredqualia.com/
     *
     * parameters = {
     *  color: <hex>,
     *  specular: <hex>,
     *  shininess: <float>,
     *  opacity: <float>,
     *
     *  map: new THREE.Texture( <Image> ),
     *
     *  lightMap: new THREE.Texture( <Image> ),
     *  lightMapIntensity: <float>
     *
     *  aoMap: new THREE.Texture( <Image> ),
     *  aoMapIntensity: <float>
     *
     *  emissive: <hex>,
     *  emissiveIntensity: <float>
     *  emissiveMap: new THREE.Texture( <Image> ),
     *
     *  bumpMap: new THREE.Texture( <Image> ),
     *  bumpScale: <float>,
     *
     *  normalMap: new THREE.Texture( <Image> ),
     *  normalMapType: THREE.TangentSpaceNormalMap,
     *  normalScale: <Vector2>,
     *
     *  displacementMap: new THREE.Texture( <Image> ),
     *  displacementScale: <float>,
     *  displacementBias: <float>,
     *
     *  specularMap: new THREE.Texture( <Image> ),
     *
     *  alphaMap: new THREE.Texture( <Image> ),
     *
     *  envMap: new THREE.CubeTexture( [posx, negx, posy, negy, posz, negz] ),
     *  combine: THREE.MultiplyOperation,
     *  reflectivity: <float>,
     *  refractionRatio: <float>,
     *
     *  wireframe: <boolean>,
     *  wireframeLinewidth: <float>,
     *
     *  skinning: <bool>,
     *  morphTargets: <bool>,
     *  morphNormals: <bool>
     * }
     */
    class MeshPhongMaterial extends Material {
        isMeshPhongMaterial: boolean;
        lightMapIntensity: number;
        constructor(parameters?: any);
        copy(source: any): this;
    }
}
declare namespace THREE {
    /**
     * @author takahirox / http://github.com/takahirox
     *
     * parameters = {
     *  gradientMap: new THREE.Texture( <Image> )
     * }
     */
    class MeshToonMaterial extends MeshPhongMaterial {
        gradientMap: any;
        defines: {
            'TOON': string;
        };
        constructor(parameters: any);
        isMeshToonMaterial: boolean;
        copy(source: any): this;
    }
}
declare namespace THREE {
    /**
     * @author WestLangley / http://github.com/WestLangley
     *
     * parameters = {
     *  color: <hex>,
     *  roughness: <float>,
     *  metalness: <float>,
     *  opacity: <float>,
     *
     *  map: new THREE.Texture( <Image> ),
     *
     *  lightMap: new THREE.Texture( <Image> ),
     *  lightMapIntensity: <float>
     *
     *  aoMap: new THREE.Texture( <Image> ),
     *  aoMapIntensity: <float>
     *
     *  emissive: <hex>,
     *  emissiveIntensity: <float>
     *  emissiveMap: new THREE.Texture( <Image> ),
     *
     *  bumpMap: new THREE.Texture( <Image> ),
     *  bumpScale: <float>,
     *
     *  normalMap: new THREE.Texture( <Image> ),
     *  normalMapType: THREE.TangentSpaceNormalMap,
     *  normalScale: <Vector2>,
     *
     *  displacementMap: new THREE.Texture( <Image> ),
     *  displacementScale: <float>,
     *  displacementBias: <float>,
     *
     *  roughnessMap: new THREE.Texture( <Image> ),
     *
     *  metalnessMap: new THREE.Texture( <Image> ),
     *
     *  alphaMap: new THREE.Texture( <Image> ),
     *
     *  envMap: new THREE.CubeTexture( [posx, negx, posy, negy, posz, negz] ),
     *  envMapIntensity: <float>
     *
     *  refractionRatio: <float>,
     *
     *  wireframe: <boolean>,
     *  wireframeLinewidth: <float>,
     *
     *  skinning: <bool>,
     *  morphTargets: <bool>,
     *  morphNormals: <bool>
     * }
     */
    function MeshStandardMaterial(parameters: any): void;
    namespace MeshStandardMaterial {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author WestLangley / http://github.com/WestLangley
     *
     * parameters = {
     *  reflectivity: <float>
     *  clearcoat: <float>
     *  clearcoatRoughness: <float>
     *
     *  sheen: <Color>
     *
     *  clearcoatNormalScale: <Vector2>,
     *  clearcoatNormalMap: new THREE.Texture( <Image> ),
     * }
     */
    function MeshPhysicalMaterial(parameters: any): void;
    namespace MeshPhysicalMaterial {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     * @author WestLangley / http://github.com/WestLangley
     *
     * parameters = {
     *  opacity: <float>,
     *
     *  bumpMap: new THREE.Texture( <Image> ),
     *  bumpScale: <float>,
     *
     *  normalMap: new THREE.Texture( <Image> ),
     *  normalMapType: THREE.TangentSpaceNormalMap,
     *  normalScale: <Vector2>,
     *
     *  displacementMap: new THREE.Texture( <Image> ),
     *  displacementScale: <float>,
     *  displacementBias: <float>,
     *
     *  wireframe: <boolean>,
     *  wireframeLinewidth: <float>
     *
     *  skinning: <bool>,
     *  morphTargets: <bool>,
     *  morphNormals: <bool>
     * }
     */
    function MeshNormalMaterial(parameters: any): void;
    namespace MeshNormalMaterial {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author WestLangley / http://github.com/WestLangley
     *
     * parameters = {
     *  color: <hex>,
     *  opacity: <float>,
     *
     *  matcap: new THREE.Texture( <Image> ),
     *
     *  map: new THREE.Texture( <Image> ),
     *
     *  bumpMap: new THREE.Texture( <Image> ),
     *  bumpScale: <float>,
     *
     *  normalMap: new THREE.Texture( <Image> ),
     *  normalMapType: THREE.TangentSpaceNormalMap,
     *  normalScale: <Vector2>,
     *
     *  displacementMap: new THREE.Texture( <Image> ),
     *  displacementScale: <float>,
     *  displacementBias: <float>,
     *
     *  alphaMap: new THREE.Texture( <Image> ),
     *
     *  skinning: <bool>,
     *  morphTargets: <bool>,
     *  morphNormals: <bool>
     * }
     */
    function MeshMatcapMaterial(parameters: any): void;
    namespace MeshMatcapMaterial {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author WestLangley / http://github.com/WestLangley
     *
     * parameters = {
     *
     *  referencePosition: <float>,
     *  nearDistance: <float>,
     *  farDistance: <float>,
     *
     *  skinning: <bool>,
     *  morphTargets: <bool>,
     *
     *  map: new THREE.Texture( <Image> ),
     *
     *  alphaMap: new THREE.Texture( <Image> ),
     *
     *  displacementMap: new THREE.Texture( <Image> ),
     *  displacementScale: <float>,
     *  displacementBias: <float>
     *
     * }
     */
    function MeshDistanceMaterial(parameters: any): void;
    namespace MeshDistanceMaterial {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     * @author alteredq / http://alteredqualia.com/
     * @author bhouston / https://clara.io
     * @author WestLangley / http://github.com/WestLangley
     *
     * parameters = {
     *
     *  opacity: <float>,
     *
     *  map: new THREE.Texture( <Image> ),
     *
     *  alphaMap: new THREE.Texture( <Image> ),
     *
     *  displacementMap: new THREE.Texture( <Image> ),
     *  displacementScale: <float>,
     *  displacementBias: <float>,
     *
     *  wireframe: <boolean>,
     *  wireframeLinewidth: <float>
     * }
     */
    function MeshDepthMaterial(parameters: any): void;
    namespace MeshDepthMaterial {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     * @author alteredq / http://alteredqualia.com/
     *
     * parameters = {
     *  color: <hex>,
     *  opacity: <float>,
     *  map: new THREE.Texture( <Image> ),
     *
     *  lightMap: new THREE.Texture( <Image> ),
     *  lightMapIntensity: <float>
     *
     *  aoMap: new THREE.Texture( <Image> ),
     *  aoMapIntensity: <float>
     *
     *  specularMap: new THREE.Texture( <Image> ),
     *
     *  alphaMap: new THREE.Texture( <Image> ),
     *
     *  envMap: new THREE.CubeTexture( [posx, negx, posy, negy, posz, negz] ),
     *  combine: THREE.Multiply,
     *  reflectivity: <float>,
     *  refractionRatio: <float>,
     *
     *  depthTest: <bool>,
     *  depthWrite: <bool>,
     *
     *  wireframe: <boolean>,
     *  wireframeLinewidth: <float>,
     *
     *  skinning: <bool>,
     *  morphTargets: <bool>
     * }
     */
    function MeshBasicMaterial(parameters: any): void;
    namespace MeshBasicMaterial {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     * @author alteredq / http://alteredqualia.com/
     *
     * parameters = {
     *  color: <hex>,
     *  opacity: <float>,
     *
     *  linewidth: <float>,
     *  linecap: "round",
     *  linejoin: "round"
     * }
     */
    class LineBasicMaterial extends Material {
        isLineBasicMaterial: boolean;
        linecap: string;
        linejoin: string;
        constructor(parameters?: any);
        copy(source: any): this;
    }
}
declare namespace THREE {
    /**
     * @author alteredq / http://alteredqualia.com/
     *
     * parameters = {
     *  color: <hex>,
     *  opacity: <float>,
     *
     *  linewidth: <float>,
     *
     *  scale: <float>,
     *  dashSize: <float>,
     *  gapSize: <float>
     * }
     */
    class LineDashedMaterial extends LineBasicMaterial {
        isLineDashedMaterial: boolean;
        constructor(parameters: any);
        copy(source: any): this;
    }
}
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     * @author alteredq / http://alteredqualia.com/
     */
    function Fog(color: any, near: any, far: any): void;
}
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     * @author alteredq / http://alteredqualia.com/
     */
    function FogExp2(color: any, density: any): void;
}
declare namespace THREE {
    var __THREE_DEVTOOLS__: any;
    /**
     * @author mrdoob / http://mrdoob.com/
     */
    function Scene(): void;
    namespace Scene {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author clockworkgeek / https://github.com/clockworkgeek
     * @author timothypratley / https://github.com/timothypratley
     * @author WestLangley / http://github.com/WestLangley
     * @author Mugen87 / https://github.com/Mugen87
     */
    class PolyhedronGeometry extends Geometry {
        constructor(vertices: any, indices: any, radius: any, detail: any);
    }
    class PolyhedronBufferGeometry extends BufferGeometry {
        constructor(vertices?: any, indices?: any, radius?: any, detail?: any);
    }
}
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     * @author Mugen87 / https://github.com/Mugen87
     */
    function PlaneGeometry(width: any, height: any, widthSegments: any, heightSegments: any): void;
    namespace PlaneGeometry {
        var prototype: any;
    }
    function PlaneBufferGeometry(width: any, height: any, widthSegments?: any, heightSegments?: any): void;
    namespace PlaneBufferGeometry {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     * @author Mugen87 / https://github.com/Mugen87
     */
    class BoxGeometry extends Geometry {
        constructor(width: any, height: any, depth: any, widthSegments: any, heightSegments: any, depthSegments: any);
    }
    class BoxBufferGeometry extends BufferGeometry {
        type: string;
        parameters: {
            width: any;
            height: any;
            depth: any;
            widthSegments: any;
            heightSegments: any;
            depthSegments: any;
        };
        constructor(width: any, height: any, depth: any, widthSegments?: any, heightSegments?: any, depthSegments?: any);
    }
}
declare namespace THREE {
    /**
     * @author benaadams / https://twitter.com/ben_a_adams
     * @author Mugen87 / https://github.com/Mugen87
     * @author hughes
     */
    function CircleGeometry(radius: any, segments: any, thetaStart: any, thetaLength: any): void;
    namespace CircleGeometry {
        var prototype: any;
    }
    function CircleBufferGeometry(radius: any, segments: any, thetaStart: any, thetaLength: any): void;
    namespace CircleBufferGeometry {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     * @author Mugen87 / https://github.com/Mugen87
     */
    class CylinderGeometry extends Geometry {
        constructor(radiusTop: any, radiusBottom: any, height: any, radialSegments: any, heightSegments: any, openEnded: any, thetaStart: any, thetaLength: any);
    }
    class CylinderBufferGeometry extends BufferGeometry {
        constructor(radiusTop: any, radiusBottom: any, height: any, radialSegments: any, heightSegments: any, openEnded?: any, thetaStart?: any, thetaLength?: any);
    }
}
declare namespace THREE {
    /**
     * @author abelnation / http://github.com/abelnation
     */
    class ConeGeometry extends CylinderGeometry {
        constructor(radius: any, height: any, radialSegments: any, heightSegments: any, openEnded: any, thetaStart: any, thetaLength: any);
    }
    class ConeBufferGeometry extends CylinderBufferGeometry {
        constructor(radius: any, height: any, radialSegments: any, heightSegments: any, openEnded: any, thetaStart: any, thetaLength: any);
    }
}
declare namespace THREE {
    /**
     * @author zz85 / http://www.lab4games.net/zz85/blog
     *
     * Creates extruded geometry from a path shape.
     *
     * parameters = {
     *
     *  curveSegments: <int>, // number of points on the curves
     *  steps: <int>, // number of points for z-side extrusions / used for subdividing segments of extrude spline too
     *  depth: <float>, // Depth to extrude the shape
     *
     *  bevelEnabled: <bool>, // turn on bevel
     *  bevelThickness: <float>, // how deep into the original shape bevel goes
     *  bevelSize: <float>, // how far from shape outline (including bevelOffset) is bevel
     *  bevelOffset: <float>, // how far from shape outline does bevel start
     *  bevelSegments: <int>, // number of bevel layers
     *
     *  extrudePath: <THREE.Curve> // curve to extrude shape along
     *
     *  UVGenerator: <Object> // object that provides UV generator functions
     *
     * }
     */
    function ExtrudeGeometry(shapes: any, options: any): void;
    namespace ExtrudeGeometry {
        var prototype: any;
    }
    class ExtrudeBufferGeometry extends BufferGeometry {
        constructor(shapes?: any, options?: any);
    }
}
declare namespace THREE {
    /**
     * @author zz85 / https://github.com/zz85
     * @author bhouston / http://clara.io
     * @author Mugen87 / https://github.com/Mugen87
     */
    function LatheGeometry(points: any, segments: any, phiStart: any, phiLength: any): void;
    namespace LatheGeometry {
        var prototype: any;
    }
    function LatheBufferGeometry(points: any, segments: any, phiStart: any, phiLength: any): void;
    namespace LatheBufferGeometry {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author zz85 / https://github.com/zz85
     * @author Mugen87 / https://github.com/Mugen87
     *
     * Parametric Surfaces Geometry
     * based on the brilliant article by @prideout http://prideout.net/blog/?p=44
     */
    function ParametricGeometry(func: any, slices: any, stacks: any): void;
    namespace ParametricGeometry {
        var prototype: any;
    }
    function ParametricBufferGeometry(func: any, slices: any, stacks: any): void;
    namespace ParametricBufferGeometry {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author jonobr1 / http://jonobr1.com
     * @author Mugen87 / https://github.com/Mugen87
     */
    function ShapeGeometry(shapes: any, curveSegments: any): void;
    namespace ShapeGeometry {
        var prototype: any;
    }
    function ShapeBufferGeometry(shapes: any, curveSegments: any): void;
    namespace ShapeBufferGeometry {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     * @author benaadams / https://twitter.com/ben_a_adams
     * @author Mugen87 / https://github.com/Mugen87
     */
    function SphereGeometry(radius: any, widthSegments: any, heightSegments: any, phiStart: any, phiLength: any, thetaStart: any, thetaLength: any): void;
    namespace SphereGeometry {
        var prototype: any;
    }
    function SphereBufferGeometry(radius: any, widthSegments: any, heightSegments: any, phiStart?: any, phiLength?: any, thetaStart?: any, thetaLength?: any): void;
    namespace SphereBufferGeometry {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author timothypratley / https://github.com/timothypratley
     * @author Mugen87 / https://github.com/Mugen87
     */
    function TetrahedronGeometry(radius: any, detail: any): void;
    namespace TetrahedronGeometry {
        var prototype: any;
    }
    function TetrahedronBufferGeometry(radius: any, detail: any): void;
    namespace TetrahedronBufferGeometry {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author zz85 / http://www.lab4games.net/zz85/blog
     * @author alteredq / http://alteredqualia.com/
     *
     * Text = 3D Text
     *
     * parameters = {
     *  font: <THREE.Font>, // font
     *
     *  size: <float>, // size of the text
     *  height: <float>, // thickness to extrude text
     *  curveSegments: <int>, // number of points on the curves
     *
     *  bevelEnabled: <bool>, // turn on bevel
     *  bevelThickness: <float>, // how deep into text bevel goes
     *  bevelSize: <float>, // how far from text outline (including bevelOffset) is bevel
     *  bevelOffset: <float> // how far from text outline does bevel start
     * }
     */
    function TextGeometry(text: any, parameters: any): void;
    namespace TextGeometry {
        var prototype: any;
    }
    class TextBufferGeometry extends ExtrudeBufferGeometry {
        constructor(text: any, parameters: any);
    }
}
declare namespace THREE {
    /**
     * @author oosmoxiecode
     * @author Mugen87 / https://github.com/Mugen87
     *
     * based on http://www.blackpawn.com/texts/pqtorus/
     */
    function TorusKnotGeometry(radius: any, tube: any, tubularSegments: any, radialSegments: any, p: any, q: any, heightScale: any): void;
    namespace TorusKnotGeometry {
        var prototype: any;
    }
    function TorusKnotBufferGeometry(radius: any, tube: any, tubularSegments: any, radialSegments: any, p: any, q: any): void;
    namespace TorusKnotBufferGeometry {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author oosmoxiecode / https://github.com/oosmoxiecode
     * @author WestLangley / https://github.com/WestLangley
     * @author zz85 / https://github.com/zz85
     * @author miningold / https://github.com/miningold
     * @author jonobr1 / https://github.com/jonobr1
     * @author Mugen87 / https://github.com/Mugen87
     *
     */
    function TubeGeometry(path: any, tubularSegments: any, radius: any, radialSegments: any, closed: any, taper: any): void;
    namespace TubeGeometry {
        var prototype: any;
    }
    function TubeBufferGeometry(path: any, tubularSegments: any, radius: any, radialSegments: any, closed: any): void;
    namespace TubeBufferGeometry {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     * @author Mugen87 / https://github.com/Mugen87
     */
    function WireframeGeometry(geometry: any): void;
    namespace WireframeGeometry {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author WestLangley / http://github.com/WestLangley
     * @author Mugen87 / https://github.com/Mugen87
     */
    function EdgesGeometry(geometry: any, thresholdAngle?: any): void;
    namespace EdgesGeometry {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author Abe Pazos / https://hamoid.com
     * @author Mugen87 / https://github.com/Mugen87
     */
    function DodecahedronGeometry(radius: any, detail: any): void;
    namespace DodecahedronGeometry {
        var prototype: any;
    }
    function DodecahedronBufferGeometry(radius: any, detail: any): void;
    namespace DodecahedronBufferGeometry {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author oosmoxiecode
     * @author mrdoob / http://mrdoob.com/
     * @author Mugen87 / https://github.com/Mugen87
     */
    function TorusGeometry(radius: any, tube: any, radialSegments: any, tubularSegments: any, arc: any): void;
    namespace TorusGeometry {
        var prototype: any;
    }
    function TorusBufferGeometry(radius: any, tube: any, radialSegments: any, tubularSegments: any, arc: any): void;
    namespace TorusBufferGeometry {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author Kaleb Murphy
     * @author Mugen87 / https://github.com/Mugen87
     */
    function RingGeometry(innerRadius: any, outerRadius: any, thetaSegments: any, phiSegments: any, thetaStart: any, thetaLength: any): void;
    namespace RingGeometry {
        var prototype: any;
    }
    function RingBufferGeometry(innerRadius: any, outerRadius: any, thetaSegments: any, phiSegments: any, thetaStart: any, thetaLength: any): void;
    namespace RingBufferGeometry {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author timothypratley / https://github.com/timothypratley
     * @author Mugen87 / https://github.com/Mugen87
     */
    class IcosahedronGeometry extends Geometry {
        constructor(radius: any, detail: any);
    }
    class IcosahedronBufferGeometry extends PolyhedronBufferGeometry {
        constructor(radius: any, detail: any);
    }
}
declare namespace THREE {
    /**
     * @author timothypratley / https://github.com/timothypratley
     * @author Mugen87 / https://github.com/Mugen87
     */
    class OctahedronGeometry extends Geometry {
        constructor(radius: any, detail: any);
    }
    class OctahedronBufferGeometry extends PolyhedronBufferGeometry {
        constructor(radius: any, detail: any);
    }
}
declare namespace THREE {
    var Geometries: {
        WireframeGeometry: typeof WireframeGeometry;
        ParametricGeometry: typeof ParametricGeometry;
        ParametricBufferGeometry: typeof ParametricBufferGeometry;
        TetrahedronGeometry: typeof TetrahedronGeometry;
        TetrahedronBufferGeometry: typeof TetrahedronBufferGeometry;
        OctahedronGeometry: typeof OctahedronGeometry;
        OctahedronBufferGeometry: typeof OctahedronBufferGeometry;
        IcosahedronGeometry: typeof IcosahedronGeometry;
        IcosahedronBufferGeometry: typeof IcosahedronBufferGeometry;
        DodecahedronGeometry: typeof DodecahedronGeometry;
        DodecahedronBufferGeometry: typeof DodecahedronBufferGeometry;
        PolyhedronGeometry: typeof PolyhedronGeometry;
        PolyhedronBufferGeometry: typeof PolyhedronBufferGeometry;
        TubeGeometry: typeof TubeGeometry;
        TubeBufferGeometry: typeof TubeBufferGeometry;
        TorusKnotGeometry: typeof TorusKnotGeometry;
        TorusKnotBufferGeometry: typeof TorusKnotBufferGeometry;
        TorusGeometry: typeof TorusGeometry;
        TorusBufferGeometry: typeof TorusBufferGeometry;
        TextGeometry: typeof TextGeometry;
        TextBufferGeometry: typeof TextBufferGeometry;
        SphereGeometry: typeof SphereGeometry;
        SphereBufferGeometry: typeof SphereBufferGeometry;
        RingGeometry: typeof RingGeometry;
        RingBufferGeometry: typeof RingBufferGeometry;
        PlaneGeometry: typeof PlaneGeometry;
        PlaneBufferGeometry: typeof PlaneBufferGeometry;
        LatheGeometry: typeof LatheGeometry;
        LatheBufferGeometry: typeof LatheBufferGeometry;
        ShapeGeometry: typeof ShapeGeometry;
        ShapeBufferGeometry: typeof ShapeBufferGeometry;
        ExtrudeGeometry: typeof ExtrudeGeometry;
        ExtrudeBufferGeometry: typeof ExtrudeBufferGeometry;
        EdgesGeometry: typeof EdgesGeometry;
        ConeGeometry: typeof ConeGeometry;
        ConeBufferGeometry: typeof ConeBufferGeometry;
        CylinderGeometry: typeof CylinderGeometry;
        CylinderBufferGeometry: typeof CylinderBufferGeometry;
        CircleGeometry: typeof CircleGeometry;
        CircleBufferGeometry: typeof CircleBufferGeometry;
        BoxGeometry: typeof BoxGeometry;
        BoxBufferGeometry: typeof BoxBufferGeometry;
    };
}
declare namespace THREE {
    /**
     * @author Mugen87 / https://github.com/Mugen87
     * Port from https://github.com/mapbox/earcut (v2.1.5)
     */
    var Earcut: {
        triangulate: (data: any, holeIndices: any, dim?: any) => any[];
    };
}
declare namespace THREE {
    var ImageUtils: {
        getDataURL: (image: any) => any;
    };
}
declare namespace THREE {
    /**
     * @author zz85 / http://www.lab4games.net/zz85/blog
     */
    var ShapeUtils: {
        area: (contour: any) => number;
        isClockWise: (pts: any) => boolean;
        triangulateShape: (contour: any, holes: any) => any[];
    };
}
declare namespace THREE {
    /**
     * @author zz85 / http://www.lab4games.net/zz85/blog
     * Extensible curve object
     *
     * Some common of curve methods:
     * .getPoint( t, optionalTarget ), .getTangent( t )
     * .getPointAt( u, optionalTarget ), .getTangentAt( u )
     * .getPoints(), .getSpacedPoints()
     * .getLength()
     * .updateArcLengths()
     *
     * This following curves inherit from THREE.Curve:
     *
     * -- 2D curves --
     * THREE.ArcCurve
     * THREE.CubicBezierCurve
     * THREE.EllipseCurve
     * THREE.LineCurve
     * THREE.QuadraticBezierCurve
     * THREE.SplineCurve
     *
     * -- 3D curves --
     * THREE.CatmullRomCurve3
     * THREE.CubicBezierCurve3
     * THREE.LineCurve3
     * THREE.QuadraticBezierCurve3
     *
     * A series of curves can be represented as a THREE.CurvePath.
     *
     **/
    /**************************************************************
     *	Abstract Curve base class
     **************************************************************/
    class Curve {
        type: string;
        arcLengthDivisions: number;
        needsUpdate: boolean;
        cacheArcLengths: any;
        constructor();
        getPoint(t: any, optionalTarget?: any): any;
        getPointAt(u: any, optionalTarget?: any): any;
        getPoints(divisions: any): any[];
        getSpacedPoints(divisions: any): any[];
        getLength(): any;
        getLengths(divisions?: any): any;
        updateArcLengths(): void;
        getUtoTmapping(u: any, distance?: any): number;
        getTangent(t: any): any;
        getTangentAt(u: any): any;
        computeFrenetFrames(segments: any, closed: any): {
            tangents: any[];
            normals: any[];
            binormals: any[];
        };
        clone(): Curve;
        copy(source: any): this;
        toJSON(): any;
        fromJSON(json: any): this;
    }
}
declare namespace THREE {
    /**
     * @author zz85 / http://www.lab4games.net/zz85/blog
     *
     **/
    /**************************************************************
     *	Curved Path - a curve path is simply a array of connected
     *  curves, but retains the api of a curve
     **************************************************************/
    function CurvePath(): void;
    namespace CurvePath {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author zz85 / http://www.lab4games.net/zz85/blog
     * @author mrdoob / http://mrdoob.com/
     */
    function Font(data: any): void;
}
declare namespace THREE {
    /**
     * @author zz85 / http://www.lab4games.net/zz85/blog
     *
     * Bezier Curves formulas obtained from
     * http://en.wikipedia.org/wiki/Bézier_curve
     */
    function CatmullRom(t: any, p0: any, p1: any, p2: any, p3: any): any;
    function QuadraticBezier(t: any, p0: any, p1: any, p2: any): number;
    function CubicBezier(t: any, p0: any, p1: any, p2: any, p3: any): number;
}
declare namespace THREE {
    /**
     * @author zz85 / http://www.lab4games.net/zz85/blog
     * Creates free form 2d path using series of points, lines or curves.
     **/
    function Path(points?: any): void;
    namespace Path {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author zz85 / http://www.lab4games.net/zz85/blog
     * Defines a 2d shape plane using paths.
     **/
    function Shape(points?: any): void;
    namespace Shape {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author zz85 / http://www.lab4games.net/zz85/blog
     * minimal class for proxing functions to Path. Replaces old "extractSubpaths()"
     **/
    function ShapePath(): void;
}
declare namespace THREE {
    class EllipseCurve extends Curve {
        isEllipseCurve: boolean;
        aX: any;
        aY: any;
        xRadius: any;
        yRadius: any;
        aStartAngle: any;
        aEndAngle: any;
        aClockwise: any;
        aRotation: any;
        constructor(aX: any, aY: any, xRadius: any, yRadius: any, aStartAngle: any, aEndAngle: any, aClockwise: any, aRotation?: any);
        getPoint(t: any, optionalTarget?: any): any;
        copy(source: any): this;
        toJSON(): any;
        fromJSON(json: any): this;
    }
}
declare namespace THREE {
    function LineCurve(v1: any, v2: any): void;
    namespace LineCurve {
        var prototype: any;
    }
}
declare namespace THREE {
    class ArcCurve extends EllipseCurve {
        isArcCurve: boolean;
        constructor(aX: any, aY: any, aRadius: any, aStartAngle: any, aEndAngle: any, aClockwise: any);
    }
}
declare namespace THREE {
    function CatmullRomCurve3(points: any, closed: any, curveType: any, tension: any): void;
    namespace CatmullRomCurve3 {
        var prototype: any;
    }
}
declare namespace THREE {
    function CubicBezierCurve(v0: any, v1: any, v2: any, v3: any): void;
    namespace CubicBezierCurve {
        var prototype: any;
    }
}
declare namespace THREE {
    function CubicBezierCurve3(v0: any, v1: any, v2: any, v3: any): void;
    namespace CubicBezierCurve3 {
        var prototype: any;
    }
}
declare namespace THREE {
    function LineCurve3(v1: any, v2: any): void;
    namespace LineCurve3 {
        var prototype: any;
    }
}
declare namespace THREE {
    function QuadraticBezierCurve(v0: any, v1: any, v2: any): void;
    namespace QuadraticBezierCurve {
        var prototype: any;
    }
}
declare namespace THREE {
    function QuadraticBezierCurve3(v0: any, v1: any, v2: any): void;
    namespace QuadraticBezierCurve3 {
        var prototype: any;
    }
}
declare namespace THREE {
    function SplineCurve(points: any): void;
    namespace SplineCurve {
        var prototype: any;
    }
}
declare namespace THREE {
    var Curves: {
        ArcCurve: typeof ArcCurve;
        CatmullRomCurve3: typeof CatmullRomCurve3;
        CubicBezierCurve: typeof CubicBezierCurve;
        CubicBezierCurve3: typeof CubicBezierCurve3;
        EllipseCurve: typeof EllipseCurve;
        LineCurve: typeof LineCurve;
        LineCurve3: typeof LineCurve3;
        QuadraticBezierCurve: typeof QuadraticBezierCurve;
        QuadraticBezierCurve3: typeof QuadraticBezierCurve3;
        SplineCurve: typeof SplineCurve;
    };
}
declare namespace THREE {
    /**
     * @author alteredq / http://alteredqualia.com/
     */
    function ImmediateRenderObject(material: any): void;
    namespace ImmediateRenderObject {
        var prototype: any;
    }
}
declare namespace THREE {
}
declare namespace THREE {
    /**
     * @author sroucheray / http://sroucheray.org/
     * @author mrdoob / http://mrdoob.com/
     */
    function AxesHelper(size: any): void;
    namespace AxesHelper {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author WestLangley / http://github.com/WestLangley
     */
    function Box3Helper(box: any, color: any): void;
    namespace Box3Helper {
        var prototype: any;
    }
}
declare namespace THREE {
    function BoxHelper(object: any, color: any): void;
    namespace BoxHelper {
        var prototype: any;
    }
}
declare namespace THREE {
    function CameraHelper(camera: any): void;
    namespace CameraHelper {
        var prototype: any;
    }
}
declare namespace THREE {
    function DirectionalLightHelper(light: any, size: any, color: any): void;
    namespace DirectionalLightHelper {
        var prototype: any;
    }
}
declare namespace THREE {
    function FaceNormalsHelper(object: any, size: any, hex: any, linewidth: any): void;
    namespace FaceNormalsHelper {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     */
    function GridHelper(size: any, divisions: any, color1: any, color2: any): void;
    namespace GridHelper {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author WestLangley / http://github.com/WestLangley
     */
    function LightProbeHelper(lightProbe: any, size: any): void;
    namespace LightProbeHelper {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author alteredq / http://alteredqualia.com/
     * @author mrdoob / http://mrdoob.com/
     */
    function PointLightHelper(light: any, sphereSize: any, color: any): void;
    namespace PointLightHelper {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     * @author Mugen87 / http://github.com/Mugen87
     * @author Hectate / http://www.github.com/Hectate
     */
    function PolarGridHelper(radius: any, radials: any, circles: any, divisions: any, color1: any, color2: any): void;
    namespace PolarGridHelper {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author Mugen87 / http://github.com/Mugen87
     */
    function PositionalAudioHelper(audio: any, range: any, divisionsInnerAngle: any, divisionsOuterAngle: any): void;
    namespace PositionalAudioHelper {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author abelnation / http://github.com/abelnation
     * @author Mugen87 / http://github.com/Mugen87
     * @author WestLangley / http://github.com/WestLangley
     *
     *  This helper must be added as a child of the light
     */
    function RectAreaLightHelper(light: any, color: any): void;
    namespace RectAreaLightHelper {
        var prototype: any;
    }
}
declare namespace THREE {
    function SkeletonHelper(object: any): void;
    namespace SkeletonHelper {
        var prototype: any;
    }
}
declare namespace THREE {
    function SpotLightHelper(light: any, color: any): void;
    namespace SpotLightHelper {
        var prototype: any;
    }
}
declare namespace THREE {
    function VertexNormalsHelper(object: any, size: any, hex: any, linewidth: any): void;
    namespace VertexNormalsHelper {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     * @author alteredq / http://alteredqualia.com/
     */
    class Light extends Object3D {
        type: string;
        color: Color;
        intensity: any;
        receiveShadow: any;
        groundColor: any;
        distance: any;
        angle: any;
        decay: any;
        penumbra: any;
        shadow: any;
        constructor(color: any, intensity: any);
        isLight: boolean;
        copy(source: any): this;
        toJSON(meta: any): any;
    }
}
declare namespace THREE {
    /**
     * @author WestLangley / http://github.com/WestLangley
     *
     * A LightProbe is a source of indirect-diffuse light
     */
    class LightProbe extends Light {
        sh: any;
        constructor(sh: any, intensity: any);
        isLightProbe: boolean;
        copy(source: any): this;
        toJSON(meta: any): any;
    }
}
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     */
    function AmbientLight(color: any, intensity: any): void;
    namespace AmbientLight {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author WestLangley / http://github.com/WestLangley
     */
    class AmbientLightProbe extends LightProbe {
        constructor(color: any, intensity: any);
        isAmbientLightProbe: boolean;
        copy(source: any): this;
        toJSON(meta: any): any;
    }
}
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     * @author alteredq / http://alteredqualia.com/
     */
    function DirectionalLight(color: any, intensity: any): void;
    namespace DirectionalLight {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     */
    function PointLight(color: any, intensity: any, distance: any, decay: any): void;
    namespace PointLight {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     */
    class LightShadow {
        _viewportCount: any;
        _frustum: any;
        camera: any;
        matrix: any;
        bias: number;
        radius: number;
        mapSize: any;
        map: any;
        mapPass: any;
        _frameExtents: any;
        _viewports: any[];
        constructor(camera?: any);
        _projScreenMatrix: any;
        _lightPositionWorld: any;
        _lookTarget: any;
        getViewportCount(): any;
        getFrustum(): any;
        updateMatrices(light: any): void;
        getViewport(viewportIndex: any): any;
        getFrameExtents(): any;
        copy(source: any): this;
        clone(): LightShadow;
        toJSON(): any;
    }
}
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     */
    class DirectionalLightShadow extends LightShadow {
        constructor();
        isDirectionalLightShadow: boolean;
        updateMatrices(light: any): void;
    }
}
declare namespace THREE {
    /**
     * @author alteredq / http://alteredqualia.com/
     */
    function HemisphereLight(skyColor: any, groundColor: any, intensity: any): void;
    namespace HemisphereLight {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author WestLangley / http://github.com/WestLangley
     */
    function HemisphereLightProbe(skyColor: any, groundColor: any, intensity: any): void;
    namespace HemisphereLightProbe {
        var prototype: any;
    }
}
declare namespace THREE {
    function PointLightShadow(): void;
    namespace PointLightShadow {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author abelnation / http://github.com/abelnation
     */
    function RectAreaLight(color: any, intensity: any, width: any, height: any): void;
    namespace RectAreaLight {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author alteredq / http://alteredqualia.com/
     */
    function SpotLight(color: any, intensity: any, distance: any, angle: any, penumbra: any, decay: any): void;
    namespace SpotLight {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     */
    function SpotLightShadow(): void;
    namespace SpotLightShadow {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author alteredq / http://alteredqualia.com/
     */
    function Loader(manager: any): void;
}
declare namespace THREE {
    /**
     * @author bhouston / http://clara.io/
     */
    function AnimationLoader(manager: any): void;
    namespace AnimationLoader {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author Reece Aaron Lecrivain / http://reecenotes.com/
     */
    function AudioLoader(manager?: any): void;
    namespace AudioLoader {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     */
    function BufferGeometryLoader(manager?: any): void;
    namespace BufferGeometryLoader {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     */
    var Cache: {
        enabled: boolean;
        files: {};
        add: (key: any, file: any) => void;
        get: (key: any) => any;
        remove: (key: any) => void;
        clear: () => void;
    };
}
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     *
     * Abstract Base class to block based textures loader (dds, pvr, ...)
     *
     * Sub classes have to implement the parse() method which will be used in load().
     */
    function CompressedTextureLoader(manager: any): void;
    namespace CompressedTextureLoader {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author Nikos M. / https://github.com/foo123/
     *
     * Abstract Base class to load generic binary textures formats (rgbe, hdr, ...)
     *
     * Sub classes have to implement the parse() method which will be used in load().
     */
    function DataTextureLoader(manager: any): void;
    namespace DataTextureLoader {
        var prototype: any;
    }
}
declare namespace THREE {
    function FileLoader(manager: any): void;
    namespace FileLoader {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author thespite / http://clicktorelease.com/
     */
    function ImageBitmapLoader(manager: any): void;
    namespace ImageBitmapLoader {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     */
    function ImageLoader(manager: any): void;
    namespace ImageLoader {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author Don McCurdy / https://www.donmccurdy.com
     */
    var LoaderUtils: {
        decodeText: (array: any) => string;
        extractUrlBase: (url: any) => any;
    };
}
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     */
    function LoadingManager(onLoad?: any, onProgress?: any, onError?: any): void;
    var DefaultLoadingManager: any;
}
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     */
    function MaterialLoader(manager?: any): void;
    namespace MaterialLoader {
        var prototype: any;
    }
}
declare namespace THREE {
    var LegacyJSONLoader: any;
    /**
     * @author mrdoob / http://mrdoob.com/
     */
    function ObjectLoader(manager: any): void;
    namespace ObjectLoader {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     */
    function TextureLoader(manager?: any): void;
    namespace TextureLoader {
        var prototype: any;
    }
}
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     */
    function CubeTextureLoader(manager?: any): void;
    namespace CubeTextureLoader {
        var prototype: any;
    }
}
declare namespace THREE {
}
declare namespace THREE {
    /**
     * @author mrdoob / http://mrdoob.com/
     */
    function Face4(a: any, b: any, c: any, d: any, normal: any, color: any, materialIndex: any): any;
    var LineStrip: number;
    var LinePieces: number;
    function MeshFaceMaterial(materials: any): any;
    function MultiMaterial(materials: any): any;
    function PointCloud(geometry: any, material: any): any;
    function Particle(material: any): any;
    function ParticleSystem(geometry: any, material: any): any;
    function PointCloudMaterial(parameters: any): any;
    function ParticleBasicMaterial(parameters: any): any;
    function ParticleSystemMaterial(parameters: any): any;
    function Vertex(x: any, y: any, z: any): any;
    function DynamicBufferAttribute(array: any, itemSize: any): any;
    function Int8Attribute(array: any, itemSize: any): any;
    function Uint8Attribute(array: any, itemSize: any): any;
    function Uint8ClampedAttribute(array: any, itemSize: any): any;
    function Int16Attribute(array: any, itemSize: any): any;
    function Uint16Attribute(array: any, itemSize: any): any;
    function Int32Attribute(array: any, itemSize: any): any;
    function Uint32Attribute(array: any, itemSize: any): any;
    function Float32Attribute(array: any, itemSize: any): any;
    function Float64Attribute(array: any, itemSize: any): any;
    function ClosedSplineCurve3(points: any): void;
    namespace ClosedSplineCurve3 {
        var prototype: any;
    }
    function SplineCurve3(points: any): void;
    namespace SplineCurve3 {
        var prototype: any;
    }
    function Spline(points: any): void;
    namespace Spline {
        var prototype: any;
    }
    function AxisHelper(size: any): any;
    function BoundingBoxHelper(object: any, color: any): any;
    function EdgesHelper(object: any, hex: any): any;
    function WireframeHelper(object: any, hex: any): any;
    function XHRLoader(manager: any): any;
    function BinaryTextureLoader(manager: any): any;
    var GeometryUtils: {
        merge: (geometry1: any, geometry2: any, materialIndexOffset: any) => void;
        center: (geometry: any) => any;
    };
    function CanvasRenderer(): void;
    function JSONLoader(): void;
    var SceneUtils: {
        createMultiMaterialObject: () => void;
        detach: () => void;
        attach: () => void;
    };
    function LensFlare(): void;
}
//# sourceMappingURL=three.d.ts.map