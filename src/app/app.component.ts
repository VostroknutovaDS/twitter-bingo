import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private title: string = 'twitter-bingo';

  public get Title(): string {
    return this.title;
  }

  public set Title(title: string) {
    this.title = title;
  }

  private elements: string[] = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'];

  public get Elements(): string[] {
    return this.elements;
  }

  public addElement(): void { }

  public removeElement(): void { }

}
