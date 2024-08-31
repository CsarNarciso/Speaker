import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpeechService } from './speech-recognition-service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private speechService: SpeechService){

    this.speechService.record().subscribe(

      words => console.log(words),
      error => console.log(error),
      () => console.log('Done')
    );
  }

  title = 'SpeechRecognizer';
}
