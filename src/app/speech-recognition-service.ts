import { Injectable, OnInit } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class SpeechService {

  recognizer: SpeechRecognition = new SpeechRecognition;

  constructor(){}

  record(): Observable<string> {

    return new Observable(subscriber => {

      this.recognizer.continuous = true;
      this.recognizer.lang = 'es_ES';
      this.recognizer.onresult = e => subscriber.next();
      this.recognizer.onerror = e => subscriber.error();
      this.recognizer.onend = () => subscriber.complete();
      this.recognizer.start();
    });
  }
}
