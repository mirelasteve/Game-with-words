import { StarPipe } from './star.pipe';
import { Component, NgModule, Pipe, PipeTransform, OnInit, ElementRef } from '@angular/core'
import { MatInputModule } from '@angular/material/input';
import { DomSanitizer  } from '@angular/platform-browser';

@Component({
  selector: 'app-guess-the-word',
  templateUrl: './guess-the-word.component.html',
  styleUrls: ['./guess-the-word.component.css']
})

export class GuessTheWordComponent implements OnInit {
  public showCongrats: boolean;
  public words: string[];
  public usedWords: any;
  public realWord: string;
  public wordForGuess: string;
  public greeting: string;
  public showValue: boolean;
  public showWrong: boolean;
  public datas: any[];

  constructor(private elementRef: ElementRef) {
  this.words = ['journalism', 'falcony', 'capitalism', 'mercury', 'yoghurt', 'temporary'];
  this.datas = [{name:'Poly', age:12},{name:'Gessy', age:20},{name:'Milly', age:60}];
  this.showValue = true;
  this.showWrong = true;
  this.showCongrats = true;
  this.usedWords = new Set();
  }
  getWord() {
    const randomWord = Math.floor(Math.random() * (this.words.length));
    console.log(this.words[randomWord]);
    if(this.usedWords.has(this.words[randomWord])) {
      if(this.usedWords.size < this.words.length){
        this.getWord();
      }
      else{
        alert('You guessed correct all words');
      }

    }    else {
      this.realWord = this.words[randomWord];
      this.usedWords.add(this.realWord);
      this.reverse(this.words[randomWord], 0);
      return this.wordForGuess;
    }
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
greet() {
  return this.showValue = false;
}
wrong() {
  this.showWrong = false;
}
congrats() {
  const divAnswer = this.elementRef.nativeElement.querySelector('.answer');
  divAnswer.insertAdjacentHTML('beforeend', '<span class="fa fa-star checked"></span>');
    return this.showCongrats = false;
}
checkWord(word: string) {
  if (this.realWord.slice(0, word.length) === word && this.realWord.length === word.length && word.length > 0 ){
  this.congrats();
  setTimeout(()=>{
    const divWords = this.elementRef.nativeElement.querySelector('#wordsField');
    divWords.insertAdjacentHTML('beforeend', '<div>' + this.realWord + '</div>');
    this.getWord();
    this.showCongrats = true;
  }, 600);

  }
  if (this.realWord.slice(0, word.length) === word && this.realWord.length > word.length) {
   console.log(this.realWord.slice(0, word.length) , word);
  this.greet();
  setTimeout(() => {
    this.showValue = true;
  }, 100);
 }
 if (this.realWord.slice(0, word.length) !== word) {
  this.wrong();
  setTimeout(() => {
    this.showWrong = true;
  }, 100);
 }
}

  ngOnInit() {
  this.wordForGuess = this.getWord();
  }

}

