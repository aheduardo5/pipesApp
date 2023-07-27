import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [],
})
export class MenuComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'New',
        icon: 'pi pi-fw pi-plus',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
            routerLink:'/Z',
          },
          {
            label: 'Numeros',
            icon: 'pi pi-dollar',
            routerLink:'/numbers',
          },
          {
            label: 'No Comunes',
            icon: 'pi pi-globe',
            routerLink:'/uncommon',
          },
        ],
      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'No Comunes',
            icon: 'pi pi-globe',
          },
        ],
      },
    ];
  }
}
