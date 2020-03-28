import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ConversationDataService} from '../../services/conversation/conversation-data.service';
import {ForecastDataService} from '../../services/forecast/forecast-data.service';
import {ForecastModel} from '../../models/entities/forecast';
import {ConversationModel} from '../../models/entities/conversation';
import * as requests from '../../models/request-models';
import {GetMessagesResponseModel} from '../../models/response-models';
import {filter} from 'rxjs/operators';

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
  private messageRequest: requests.CreateMessageRequestModel = new requests.CreateMessageRequestModel();
  private conversationRequest: requests.CreateConversationRequestModel = new requests.CreateConversationRequestModel();

  constructor(
    private conversationDataService: ConversationDataService,
    private forecastDataService: ForecastDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.GetConversation();
  }

  ///
  /// Inicializes the conversation. If the conversation already exists, use the opened one, instead of creating a new one
  ///
  GetConversation() {
    this.conversationRequest.kind = '1-1';
    this.conversationRequest.invites = ['user_430683090579520063'];

    this.conversationDataService.getConversations().subscribe(
      response => {
        // tslint:disable-next-line:max-line-length
        this.conversation = response.data.results.find(conversation => conversation.participants[0].entityId === this.conversationRequest.invites[0] && conversation.participants[1].entityId ===  'user_430775508375430423');
        if (this.conversation !== undefined) {
          this.GetMessages();
          this.RegisterMessagesInterval();
          this.SendForecast();
          this.RegisterSendForecastInterval();
        } else {
          this.conversationDataService.createConversation(this.conversationRequest).subscribe(
            createResponse => {
              this.conversation = createResponse.data;
              this.GetMessages();
              this.RegisterMessagesInterval();
              this.SendForecast();
              this.RegisterSendForecastInterval();
            }
          );
        }
      }
    );
  }

  ///
  /// Although it wasn't a requirement, a method to get the conversation's messages was implemented so that we
  // can see the messages being generated
  ///
  GetMessages() {
    if (this.conversation !== null && this.conversation !== undefined) {
      this.conversationDataService.getMessages(this.conversation.id).pipe(filter(data => !!data)).subscribe(
        response => {
          this.messages = response;
        }
      );
    }
  }

  ///
  /// Gets the Boston's Forecase and generates a message for the chat with the latest available forecast
  ///
  SendForecast() {
    this.forecastDataService.getForecast().pipe(filter(data => !!data)).subscribe(
      response => {
        this.forecast = response;

        this.messageRequest.kind = 'message';
        this.messageRequest.content = 'Boston\'s Forecase: \n ' + this.forecast.textDescription;

        this.conversationDataService.createMessage(
          this.conversation.id,
          this.messageRequest
        ).subscribe();
      }
    );
  }

  ///
  /// Registers an interval to get the conversation's messages every minute
  ///
  RegisterMessagesInterval() {
    this.getMessagesInterval = setInterval(() =>
      this.GetMessages(),
      60 * 1000
    );
  }

  ///
  /// Registers an interval to send the forecast message every hour
  ///
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
