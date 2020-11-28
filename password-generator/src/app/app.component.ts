import { IfStmt } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  password = "";
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  length = 0;

  onLengthChange(value: string){
    const parsedValue = parseInt(value);
    this.length = !isNaN(parsedValue) ? parsedValue : 0;
  }

  onUseLettersChange(){
    this.includeLetters = !this.includeLetters;
  }

  onUseNumbersChange(){
    this.includeNumbers = !this.includeNumbers;
  }

   onUseSymbolsChange(){
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick(){

    let randomGeneratedPassword = "";
    let selectedChars = this.getSelectedChars();

    for(let i = 0; i < this.length; i++){
      const randomIndex = Math.floor(Math.random() * selectedChars.length);

      randomGeneratedPassword += selectedChars[randomIndex];
    }

    this.password = randomGeneratedPassword;
  }  

  getSelectedChars(){
    const numbers = "1234567890";
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const symbols = "!@#$^&*"; 
    let chars = "";

    if(this.includeLetters){
      chars += letters;
    }

    if(this.includeNumbers){
      chars += numbers;
    }

    if(this.includeSymbols){
      chars += symbols;
    }

    return chars;
  }
}
