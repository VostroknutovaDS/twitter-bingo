import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ElementsFormComponent } from './elements-form/elements-form.component';
import { BingoPreviewComponent } from './bingo-preview/bingo-preview.component';
import { DATA_PROVIDERS } from 'src/assets/configuration/providers';
import { BingoElementComponent } from './bingo-element/bingo-element.component';
import { BingoHandlerComponent } from './bingo-handler/bingo-handler.component';
import { EditFormComponent } from './edit-form/edit-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ElementsFormComponent,
    BingoPreviewComponent,
    BingoElementComponent,
    BingoHandlerComponent,
    EditFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [DATA_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
