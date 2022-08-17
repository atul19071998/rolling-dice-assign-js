  //declare arrow function in which inside give the variable ,array .
  const dicedetector = () =>{
    const random=Math.floor(Math.random()*6);
    const Dice=["⚀","⚁","⚂","⚃","⚄","⚅"];
    const dicevalue=document.querySelector('.x-dice');
    dicevalue.innerHTML=Dice[random];
  } 
  let a = true;//declare another variable inside vaiable give the boolean value.
  
  //declare arrow function and use if, else condition. 
  let stopstart = () => {
    if  (a) {
         a = false;
        time=setInterval(dicedetector,60);

    }
    else{
        clearInterval(time);
        a = true;

    }
  }
  ///window load function declare.
  window.onload = function(){
    stopstart();
  }