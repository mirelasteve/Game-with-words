import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-guess-the-word',
  templateUrl: './guess-the-word.component.html',
  styleUrls: ['./guess-the-word.component.css']
})
export class GuessTheWordComponent implements OnInit {
  public words: string[];
  public wordForGuess: string;
  constructor() {
  this.words = ['journalism', 'falcony', 'capitalism', 'mercury', 'yoghurt', 'temporary'];
  }
  getWord() {
    const randomWord = Math.floor(Math.random() * (this.words.length - 1));
    // console.log(this.words[randomWord]);
    this.reverse(this.words[randomWord], 0);
    return this.wordForGuess;
  }
  reverse(text, i) {
    if (typeof text === 'string') {
        text = text.split('');
        this.mixed(text);
                  }
    if (i >= text.length / 2) {
      this.wordForGuess = text.join('');
          return ;
    }
    [text[i], text[text.length - i - 1]] = [text[text.length - i - 1], text[i]];
    return this.reverse(text, i += 1);
}
  mixed(text) {
    const middle = Math.floor(text.length / 2);
    [text[middle], text[middle + 1]] = [text[middle + 1], text[middle]];
    [text[0], text[middle - 1]] = [text[middle  - 1], text[0]];
     return text;
}
  ngOnInit() {
  this.wordForGuess = this.getWord();
  }

}
