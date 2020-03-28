import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConversationComponent } from './conversation/conversation.component';


const ROUTES: Routes = [
  {
    path: '',
    component: ConversationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
  providers: []
})
export class ViewsRoutingModule { }
