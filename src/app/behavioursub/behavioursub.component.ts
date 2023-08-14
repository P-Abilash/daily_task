import { Component, OnInit } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-behavioursub',
  templateUrl: './behavioursub.component.html',
  styleUrls: ['./behavioursub.component.scss']
})
export class BehavioursubComponent implements OnInit {

  private chatRoom1 = new Subject<string>();
  chatRoom1Messages: string[] = [];

  // Chat Room 2 (ReplaySubject)
  private chatRoom2 = new ReplaySubject<string>(3);
  chatRoom2Messages: string[] = [];

  ngOnInit() {
    // Restore chat room messages from localStorage (if available)
    this.chatRoom1Messages = JSON.parse(localStorage.getItem('chatRoom1Messages') || '[]');
    this.chatRoom2Messages = JSON.parse(localStorage.getItem('chatRoom2Messages') || '[]');

    // Subscribe to Chat Room 1 (Subject)
    this.chatRoom1.subscribe((message) => {
      this.chatRoom1Messages.push(message);
      this.saveChatRoomMessages('chatRoom1Messages', this.chatRoom1Messages);
    });

    // Subscribe to Chat Room 2 (ReplaySubject)
    this.chatRoom2.subscribe((message) => {
      this.chatRoom2Messages.push(message);
      this.saveChatRoomMessages('chatRoom2Messages', this.chatRoom2Messages);
    });
  }

  sendMessage(chatRoom: string) {
    const message = `New message in ${chatRoom} at ${new Date().toLocaleTimeString()}`;

    if (chatRoom === 'Chat Room 1') {
      this.chatRoom1.next(message);
    } else if (chatRoom === 'Chat Room 2') {
      this.chatRoom2.next(message);
    }
  }

  private saveChatRoomMessages(key: string, messages: string[]) {
    localStorage.setItem(key, JSON.stringify(messages));
  }


}
