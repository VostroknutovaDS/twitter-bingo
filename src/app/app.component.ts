import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private newElement = '';

  public get NewElement(): string {
    return this.newElement;
  }

  public set NewElement(newElement: string) {
    this.newElement = newElement;
  }

  private elements: string[] = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'];

  public get Elements(): string[] {
    return this.elements;
  }

  public addElement(): void { }

  public removeElement(): void { }

  public editElement(): void {}

}
