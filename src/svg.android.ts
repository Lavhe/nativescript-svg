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
        const attrs = SVG_ATTRIBUTES.reduce((a, b) => {
            if (view.get(b)) {
                a += `${b}="${view.get(b)}" `
            }
            return a;
        }, '');
        console.log("This is a child of a child .... ", view.children);
        if (!this.svgString.some(v => v.indexOf(`_id="${view.id}"`) >= 0)) {
            this.svgString.push(`<${name.toLowerCase()} ${attrs} _id="${view.id}"/>`);
        }
        this.refreshSVG();
    }

    public digDeep(child: CommonSVGElement): string {
        if (child.children.length == 0) {

        } else {

        }
    }

    public refreshSVG() {
        if (this.nativeView) {
            const svg = `<svg height="100" width="100">${this.svgString.join(" ")}</svg>`
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
