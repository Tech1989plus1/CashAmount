
class CashAmount{
  constructor(amount){
    this.pennies = this.convertIntoPennies(amount);
    this.denomination = {
      'hundreds': 0,
      'fifties': 0,
      'twenties': 0,
      'tens': 0,
      'fives': 0,
      'ones': 0,
      'quarters': 0,
      'dimes': 0,
      'nickels': 0,
      'pennies': 0
    };
  }
  
  quantityOfEach = () => {
    let denomination = ['']
  }
  
  convertIntoPennies = (amount) => {
    let str = Number.parseFloat(amount).toFixed(2).toString().split('');
    let pennies = '';
    
    str.map((item, key) => {
      if(item !== '.'){
        pennies = pennies + str[key];
      } 
    });
    
    return Number(pennies);
  }

  totalInPennies = () => {
    return this.pennies;
  }
  
  addDoubleAmount = (amount) => {
    let pennies = this.convertIntoPennies(amount);
    this.pennies = this.pennies + pennies;
  }
  
  quantityOfEachDenomination = () => {
    return this.denomination;
  }
}