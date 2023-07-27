import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css'],
})
export class BasicsPageComponent {
  public namelower: string = 'eduardo';
  public nameUpper: string = 'EDUARDO';
  public fullName: string = 'eDuArDo AgUiLaR';

  public customDate: Date = new Date();
}
