import { Component } from '@angular/core';

@Component({
  selector: 'app-bingo-handler',
  templateUrl: './bingo-handler.component.html',
  styleUrls: ['./bingo-handler.component.scss']
})
export class BingoHandlerComponent {
  private showEditForm = false;

  public get ShowEditForm(): boolean {
    return this.showEditForm;
  }

  public openEditForm(): void {
    this.showEditForm = true;
  }

  public closeEditForm(): void {
    this.showEditForm = false;
  }

}
