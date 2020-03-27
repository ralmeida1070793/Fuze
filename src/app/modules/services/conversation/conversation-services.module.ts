import { NgModule } from '@angular/core';
import { ConversationDataService } from './conversation-data.service';


const DATA_SERVICES = [
  ConversationDataService
];


@NgModule({
  imports: [],
  exports: [],
  providers: [
    ...DATA_SERVICES]
})

export class ConversationServicesModule {

}
