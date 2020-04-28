/// <reference path="./node_modules/tns-platform-declarations/android.d.ts" />
import { Common, CommonSVGElement, SVG_ATTRIBUTES } from './svg.common';
import { View } from 'tns-core-modules/ui/core/view/view';

declare var com: any;
export class Svg extends Common {
    svg: string;
    svgString: string[] = [];
    public createNativeView() {
        console.log("called create native view")
        return new com.caverock.androidsvg.SVGImageView(this._context); //new org.nativescript.widgets.ImageView(this._context);
    }

    public buildSVGString(name: string, view: CommonSVGElement): void {
        if (!this.svgString.some(v => v.indexOf(`_id="${view.id}"`) >= 0)) {
            this.svgString.push(this.digDeep(name, view));
        }
        this.refreshSVG();
    }

    public digDeep(name: string, view: CommonSVGElement): string {
        const attrs = SVG_ATTRIBUTES.reduce((a, b) => {
            if (view.get(b) != null && view.get(b) != 'auto') {
                a += `${b}="${view.get(b)}" `
            }
            return a;
        }, '');
        if (view.children.length == 0) {
            return `<${name.toLowerCase()} ${attrs} _id="${view.id}"></${name.toLowerCase()}>`
        } else {
            return `<${name.toLowerCase()} ${attrs} _id="${view.id}">${view.children.reduce((a, b) => a + this.digDeep(b.name, b.view), '')}</${name.toLowerCase()}>`;
        }
    }

    public refreshSVG() {
        if (this.nativeView) {
            const svg = `<svg height="100%" width="100%">${this.svgString.join(" ")}</svg>`
            console.log('The SVG', svg);
            this.nativeView.setSVG(com.caverock.androidsvg.SVG.getFromString(svg));
        }
    }

    onLoaded() {
        super.onLoaded();
        this.refreshSVG();
    }

    public _addChildFromBuilder(name: string, child: CommonSVGElement): void {
        this.buildSVGString(name, child)
    }
}


export class Circle extends CommonSVGElement {

}

export class Line extends CommonSVGElement {

}
export class G extends CommonSVGElement {

}
export class Rect extends CommonSVGElement {

}
