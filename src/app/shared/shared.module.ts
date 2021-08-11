import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorModalComponent } from './error-modal/error-modal.component';
import { ErrorModalDirective } from './error-modal.directive';



@NgModule({
  declarations: [
    ErrorModalComponent,
    ErrorModalDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[ErrorModalComponent,
            ErrorModalDirective]
})
export class SharedModule { }
