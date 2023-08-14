import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';

interface Message {
  user: string;
  content: string;
  timestamp: Date;
}


@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit, OnDestroy {

  messageForm: FormGroup;
  messages: Message[] = [];
  messageSubject: Subject<Message> = new Subject<Message>();

  constructor(private formBuilder: FormBuilder) {
    this.messageForm = this.formBuilder.group({
      user: ['', Validators.required],
      content: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    // Subscribe to the ReplaySubject to get previous messages
    this.messageSubject.subscribe((message) => {
      this.messages.push(message);
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe to avoid memory leaks
    this.messageSubject.unsubscribe();
  }

  onSubmit(): void {
    if (this.messageForm.valid) {
      const message: Message = {
        user: this.messageForm.value.user,
        content: this.messageForm.value.content,
        timestamp: new Date(),
      };
      // Push the new message to the ReplaySubject to store it
      this.messageSubject.next(message);
      // Reset the form after submitting
      this.messageForm.reset();
    }
  }




}
