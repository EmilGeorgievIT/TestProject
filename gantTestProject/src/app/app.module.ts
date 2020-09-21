import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GanttAllModule } from '@syncfusion/ej2-angular-gantt';
import { DropDownListAllModule, MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { CheckBoxAllModule } from '@syncfusion/ej2-angular-buttons';
import { TextBoxAllModule, NumericTextBoxAllModule } from '@syncfusion/ej2-angular-inputs';
import { ContextMenuModule } from '@syncfusion/ej2-angular-navigations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GanttAllModule,
    CheckBoxAllModule,
    ContextMenuModule,
    TextBoxAllModule,
    NumericTextBoxAllModule,
    MultiSelectAllModule,
    DropDownListAllModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
