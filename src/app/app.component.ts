import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  password = '';
  passwordLength = 0;
  includeLetter = false;
  includeNumbers = false;
  includeSymbols = false;
  onLengthChange(value: string) {
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue)) {
      // if the parsedValue is A number
      this.passwordLength = parsedValue;
    }
  }
  onLetterChange() {
    this.includeLetter = !this.includeLetter;
  }
  onNumbersChange() {
    this.includeNumbers = !this.includeNumbers;
  }
  onSymbolsChange() {
    this.includeSymbols = !this.includeSymbols;
  }
  onClickButton() {
    let numbers = '0123456789';
    let letters = 'abcdefghijklmnopqrstuvwxyz';
    let symbols = '!@#$%^&*()/|}{';
    let validChars = '';
    if (this.includeLetter) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
      console.log(validChars);
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }
    let generatedPassword = '';
    for (let i = 0; i < this.passwordLength; i++) {
      let idx = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[idx];
    }
    this.password = generatedPassword;
  }

  onResetClick() {
    this.password = '';
  }
}
