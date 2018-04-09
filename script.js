module.exports = {
  difference: function(a,b){
    return a-b;
  },
 
  isEqual: function(a,b){
    return a===b;
  },
 
  isEven: function(num){
    return num%2 === 0;
  },
 
  isDivisible: function(a,b){
    return a%b === 0;
  },
 
  discountPercentage: function(amount, discount){
    if(discount>100 || discount<0){
      return "please enter a number between 0 and 100"
    } else {
      return (amount*discount/100);
    }
  },
 
  isVowel: function(letter){
    if (letter === 'a'|| letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u'){
      return true;
    }else{
      return false;
    }
  },
 
  celsiusToFahrenheit: function(celsius){
    return celsius*1.8+32;
  },
 
  biggestOfThree: function(a, b, c){
    return Math.max(a, b, c);
  },
 
  // Bonus
  federalIncomeTaxCalculator: function(salary){
    salary = new Intl.NumberFormat().format(salary);
    return salary*0.396;
  }
};
