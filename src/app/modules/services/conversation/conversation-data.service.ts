import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as responses from '../../models/response-models';
import * as requests from '../../models/request-models/conversation';
import {CreateMessageRequestModel} from '../../models/request-models/message/create-message-request.model';

@Injectable()
export class ConversationDataService {

  private api: string;
  private apiKey: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.api = 'http://docs.baas.fuze.com/chat/stage';
    this.apiKey = '2.vThQshVYyiGOzgJ.dXNlcjo2Z0FpMjkxbnp6OkN4Z2JyQ1poYlg';
  }

  public getConversations(): Observable<responses.GetConversationsResponseModel> {
    const endpoint = `${this.api}/conversations`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.apiKey
    });

    return this.httpClient.get<responses.GetConversationsResponseModel>(endpoint, {headers});
  }

  public createConversation(request: requests.CreateConversationRequestModel): Observable<responses.ConversationResponseModel> {
    const endpoint = `${this.api}/conversations`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.apiKey
    });

    return this.httpClient.post<responses.ConversationResponseModel>(endpoint, request, {headers});
  }

  public getMessages(conversationId: number): Observable<responses.GetMessagesResponseModel>
  {
    const endpoint = `${this.api}/conversations/${conversationId}/messages`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.apiKey
    });

    return this.httpClient.get<responses.GetMessagesResponseModel>(endpoint, {headers});
  }

  public createMessage(conversationId: number, request: CreateMessageRequestModel): Observable<responses.CreateMessageResponseModel>{
    const endpoint = `${this.api}/conversations`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.apiKey
    });

    return this.httpClient.post<responses.CreateMessageResponseModel>(endpoint, request, {headers});
  }
}
