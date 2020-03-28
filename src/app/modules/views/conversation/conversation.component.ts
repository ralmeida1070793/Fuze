import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ConversationDataService} from '../../services/conversation/conversation-data.service';
import {ForecastDataService} from '../../services/forecast/forecast-data.service';
import {ForecastModel} from '../../models/entities/forecast';
import {ConversationModel} from '../../models/entities/conversation';
import * as requests from '../../models/request-models';
import {GetMessagesResponseModel} from '../../models/response-models';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.less']
})
export class ConversationComponent implements OnInit, OnDestroy {
  private conversation: ConversationModel;
  private forecast: ForecastModel;
  public messages: GetMessagesResponseModel;
  private getMessagesInterval: any;
  private sendForecastInterval: any;

  constructor(
    private conversationDataService: ConversationDataService,
    private forecastDataService: ForecastDataService,
    private messageRequest: requests.CreateMessageRequestModel,
    private conversationRequest: requests.CreateConversationRequestModel,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.GetConversation();
    this.GetMessages();
    this.RegisterMessagesInterval();
    this.SendForecast();
    this.RegisterSendForecastInterval();
  }

  GetConversation() {
    this.conversationRequest.kind = '1-1';
    this.conversationRequest.name = 'Boston\'s Forecast';
    this.conversationRequest.invites = ['user_430775508375430423', 'user_430683090579520063'];

    this.conversationDataService.getConversations().subscribe(
      response => {
        // tslint:disable-next-line:max-line-length
        this.conversation = response.data.results.find(conversation => conversation.participants[0].attendeeId === '' && conversation.participants[1].attendeeId === '');
      }
    );

    if (this.conversation === null) {
      this.conversationDataService.createConversation(this.conversationRequest).subscribe(
        response => {
          this.conversation = response.data;
        }
      );
    }
  }
  GetMessages() {
    this.conversationDataService.getMessages(this.conversation.id).subscribe(
      response => {
        this.messages = response;
      }
    );
  }
  SendForecast() {
    this.forecastDataService.getForecast().subscribe(
      response => {
        this.forecast = response;
      }
    );

    this.messageRequest.kind = 'message';
    this.messageRequest.content = 'Boston\'s Forecase: \n ' + this.forecast.textDescription;

    this.conversationDataService.createMessage(
      this.conversation.id,
      this.messageRequest
    ).subscribe();
  }
  RegisterMessagesInterval() {
    this.getMessagesInterval = setInterval(() =>
      this.GetMessages(),
      60 * 1000
    );
  }
  RegisterSendForecastInterval() {
    this.sendForecastInterval = setInterval(() =>
        this.SendForecast(),
      60 * 60 * 1000
    );
  }

  ngOnDestroy(): void {
    clearInterval(this.getMessagesInterval);
    clearInterval(this.sendForecastInterval);
  }
  public onGoBack() {
    this.router.navigate(['conversation']);
  }
}
