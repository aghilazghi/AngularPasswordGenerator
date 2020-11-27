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
    this.length = parsedValue === NaN ? 0 : parsedValue;
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
  } 
 
}
