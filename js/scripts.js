
  function run1(){

  	document.calc.display.value += "1"
  };
  function run2(){

  	document.calc.display.value += "2"
  };
  function run3(){

  	document.calc.display.value += "3"
  };
  function run4(){

  	document.calc.display.value += "4"
  };
  function run5(){

  	document.calc.display.value += "5"
  };

  function run6(){

  	document.calc.display.value += "6"
  };

  function run7(){

  	document.calc.display.value += "7"
  };

  function run8(){

  	document.calc.display.value += "8"
  };

  function run9(){

  	document.calc.display.value += "9"
  };

  function run0(){

  	document.calc.display.value += "0"
  };
  function runPlus(){

  	document.calc.display.value += "+"
  };
  function runMinus(){

  	document.calc.display.value += "-"
  };
  function runDivide(){

  	document.calc.display.value += "/"
  };
  function runMultiply(){

  	document.calc.display.value += "*"
  };

  function runC(){

  	document.calc.display.value = ""
  };


  function runEquals() {
  	var equals = eval(document.calc.display.value)
  	document.calc.display.value = equals;
  }
