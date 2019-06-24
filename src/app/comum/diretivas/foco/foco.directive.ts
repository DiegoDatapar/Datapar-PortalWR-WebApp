import { Directive, Input, ElementRef, AfterContentInit } from "@angular/core";


@Directive({
    // tslint:disable-next-line: directive-selector
    selector: '[fococustomizado]'
})
export class FocoCustomizadoDirective implements AfterContentInit {

    @Input() public AutoFocus: boolean;

    public constructor(private el: ElementRef) {

    }

    public ngAfterContentInit() {

        if (this.AutoFocus === false){
            return;
        }
        setTimeout(() => {
            this.el.nativeElement.focus();
        }, 500);

    }
}

