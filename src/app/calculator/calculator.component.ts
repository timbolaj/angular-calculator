import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  currentNumber = "0";
  firstOperand = null;
  operator = null;
  waitForSecondNumber = false;

  public getNumber(n: string) {
    console.log(n);
    if (this.waitForSecondNumber) {
      this.currentNumber = n;
      this.waitForSecondNumber = false;
    } else {
      this.currentNumber === '0' ? this.currentNumber = n : this.currentNumber += n
    }
  }

  getDecimal() {
    if (!this.currentNumber.includes(".")) {
      this.currentNumber += '.';
    }
  }

  private calculate(op, secondOp) {
    switch (op) {
      case '+':
        return this.firstOperand += secondOp;
      case '-':
        return this.firstOperand -= secondOp;
      case '*':
        return this.firstOperand *= secondOp;
      case '/':
        return this.firstOperand /= secondOp;
      case '=':
        return secondOp;
    }
  }

  public getOperation(op: string) {
    console.log(op);

    if (this.firstOperand === null) {
      this.firstOperand = Number(this.currentNumber);
    } else if (this.operator) {
      const result = this.calculate(this.operator, Number(this.currentNumber));
      this.currentNumber = String(result);
      this.firstOperand = result;
    }

    this.operator = op;
    this.waitForSecondNumber = true;

    console.log(this.firstOperand);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
