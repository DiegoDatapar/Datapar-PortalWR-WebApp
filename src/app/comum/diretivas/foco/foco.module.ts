import { NgModule } from "@angular/core";
import { FocoCustomizadoDirective } from "./foco.directive";

@NgModule({
    declarations: [ FocoCustomizadoDirective ],
    exports: [ FocoCustomizadoDirective ]
})
export class FocoModule { }