import { Pipe, PipeTransform } from '@angular/core';
import { DropDownMenu } from './ng-bootstrap-dropdown-menu';


@Pipe({name: 'FilterDisplay'})
export class FilterDisplay  implements PipeTransform {
    transform(menus: DropDownMenu[], display: string) {
        if (display !== undefined) {
            display = display.toString().toUpperCase();
            return menus.filter(menu => menu.Display.toUpperCase().includes(display));
        } else {
            return menus;
        }

    }

}
