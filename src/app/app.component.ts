import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  password = '';
  length = 0;
  check1 = false;
  check2 = false;
  check3 = false;

  onInput(input: string, e: InputEvent) {
    console.log(e.data);
    console.log(e.target);
    // console.log(input);
    const parsInput = parseInt(input);
    if (!isNaN(parsInput)) {
      this.length = parsInput;
    }
  }
  onCheck1() {
    this.check1 = !this.check1;
  }
  onCheck2() {
    this.check2 = !this.check2;
  }
  onCheck3() {
    this.check3 = !this.check3;
  }
  onClick() {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+';

    let validChars = '';
    if (this.check1) {
      validChars += letters;
    }
    if (this.check2) {
      validChars += numbers;
    }
    if (this.check3) {
      validChars += symbols;
    }
    let generatedPass = '';
    for (let i = 0; i < this.length; i++) {
      // const rand = Math.random();
      // console.log(rand);
      // const floor = Math.floor(rand)
      // console.log(floor);
      // const mult = rand*20;
      // console.log(mult);
      // const multfloor = Math.floor(mult);
      // console.log(multfloor);
      const index = Math.floor(Math.random() * validChars.length);
      generatedPass += validChars[index];
    }
    this.password = generatedPass;
  }
}
