import { Observable } from 'tns-core-modules/data/observable';
import { Property, View, ContainerView } from "tns-core-modules/ui/core/view";
import * as app from 'tns-core-modules/application';
import * as dialogs from 'tns-core-modules/ui/dialogs';

import { ContentView } from 'tns-core-modules/ui/content-view';
export abstract class Common extends ContainerView {
  protected svg: String = null;
}

export abstract class CommonSVGElement extends ContainerView {
  id: string;
  children: { name: string, view: CommonSVGElement }[] = []
  public _addChildFromBuilder(name: string, view: CommonSVGElement): void {
    this.children.push({ name, view })
  }
  constructor() {
    super(); this.id = Date.now() + '' + Math.random() * 100;
  }
}

export const SVG_ATTRIBUTES = [
  "accent-height",
  "accumulate",
  "additive",
  "alignment-baseline",
  "alphabetic",
  "amplitude",
  "arabic-form",
  "ascent",
  "attributeName",
  "attributeType",
  "azimuth",
  "baseFrequency",
  "baseline-shift",
  "baseProfile",
  "bbox",
  "begin",
  "bias",
  "by",
  "calcMode",
  "cap-height",
  "class",
  "clip",
  "clipPathUnits",
  "clip-path",
  "clip-rule",
  "color",
  "color-interpolation",
  "color-interpolation-filters",
  "color-profile",
  "color-rendering",
  "contentScriptType",
  "contentStyleType",
  "cursor",
  "cx",
  "cy",
  "d",
  "descent",
  "diffuseConstant",
  "direction",
  "display",
  "divisor",
  "dominant-baseline",
  "dur",
  "dx",
  "dy",
  "edgeMode",
  "elevation",
  "enable-background",
  "end",
  "exponent",
  "externalResourcesRequired",
  "fill",
  "fill-opacity",
  "fill-rule",
  "filter",
  "filterRes",
  "filterUnits",
  "flood-color",
  "flood-opacity",
  "font-family",
  "font-size",
  "font-size-adjust",
  "font-stretch",
  "font-style",
  "font-variant",
  "font-weight",
  "format",
  "from",
  "fr",
  "fx",
  "fy",
  "g1",
  "g2",
  "glyph-name",
  "glyph-orientation-horizontal",
  "glyph-orientation-vertical",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "hanging",
  "height",
  "href",
  "horiz-adv-x",
  "horiz-origin-x",
  "id",
  "image-rendering",
  "in",
  "in2",
  "intercept",
  "k",
  "k1",
  "k2",
  "k3",
  "k4",
  "kernelMatrix",
  "kernelUnitLength",
  "kerning",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "lengthAdjust",
  "letter-spacing",
  "lighting-color",
  "limitingConeAngle",
  "local",
  "marker-end",
  "marker-mid",
  "marker-start",
  "markerHeight",
  "markerUnits",
  "markerWidth",
  "mask",
  "maskContentUnits",
  "maskUnits",
  "mathematical",
  "max",
  "media",
  "method",
  "min",
  "mode",
  "name",
  "numOctaves",
  "opacity",
  "operator",
  "order",
  "orientation",
  "overflow",
  "overline-position",
  "overline-thickness",
  "panose-1",
  "paint-order",
  "path",
  "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "pointer-events",
  "points",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "r",
  "radius",
  "refX",
  "refY",
  "rendering-intent",
  "repeatCount",
  "repeatDur",
  "requiredFeatures",
  "restart",
  "result",
  "rx",
  "ry",
  "scale",
  "seed",
  "shape-rendering",
  "spacing",
  "specularConstant",
  "specularExponent",
  "spreadMethod",
  "stdDeviation",
  "stemh",
  "stemv",
  "stitchTiles",
  "stop-color",
  "stop-opacity",
  "strikethrough-position",
  "strikethrough-thickness",
  "stroke",
  "stroke-dasharray",
  "stroke-dashoffset",
  "stroke-linecap",
  "stroke-linejoin",
  "stroke-miterlimit",
  "stroke-opacity",
  "stroke-width",
  "surfaceScale",
  "systemLanguage",
  "tabindex",
  "target",
  "targetX",
  "targetY",
  "text-anchor",
  "text-decoration",
  "text-rendering",
  "textLength",
  "to",
  "transform",
  "type",
  "u1",
  "u2",
  "underline-position",
  "underline-thickness",
  "unicode",
  "unicode-range",
  "units-per-em",
  "v-alphabetic",
  "v-hanging",
  "v-ideographic",
  "v-mathematical",
  "values",
  "vector-effect",
  "version",
  "vert-adv-y",
  "vert-origin-x",
  "vert-origin-y",
  "viewBox",
  "viewTarget",
  "visibility",
  "width",
  "widths",
  "word-spacing",
  "writing-mode",
  "x",
  "x-height",
  "x1",
  "x2",
  "xChannelSelector",
  "xlink:href",
  "xlink:show",
  "xlink:title",
  "xml:lang",
  "xml:space",
  "y",
  "y1",
  "y2",
  "yChannelSelector",
  "z"
]