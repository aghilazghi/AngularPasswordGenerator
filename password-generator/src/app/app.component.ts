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
    if(!isNaN(parsedValue)){
      this.length = parsedValue;
    }
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
    const numbers = "1234567890";
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const symbols = "!@#$^&*";    
    let validChars = "";
    let randomGeneratedPassword = "";

    if(this.includeLetters){
      validChars += letters;
    }

    if(this.includeNumbers){
      validChars += numbers;
    }

    if(this.includeSymbols){
      validChars += symbols;
    }

    for(let i = 0; i < this.length; i++){
      const randomIndex = Math.floor(Math.random() * validChars.length);

      randomGeneratedPassword += validChars[randomIndex];
    }

    this.password = randomGeneratedPassword;
    
  } 
 
}
