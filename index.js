function scuberGreetingForFeet(feet){
  // Write your code here!
    
    
    if (feet <= 400){
     return 'This one is on me!';
    }
    if(feet > 2000 && feet <= 2500){
    return 'I will gladly take your thirty bucks.';
    }
    else {
    return  'No can do.';
    }
    
}
scuberGreetingForFeet(199);
scuberGreetingForFeet(2001);
scuberGreetingForFeet(2501);



function ternaryCheckCity(city){
  // Write your code here!
  return city === "NYC" ? 'Ok, sounds good.' : 'No go.';  
}
ternaryCheckCity('Pittsburgh')

function switchOnCharmFromTip(tip){
  // Write your code here!
  // const tip = 'generous';
  // let reply;
 switch (tip){
    case 'generous':
      return 'Thank you so much.';
     
    
      case 'not as generous':
        return'Thank you.'
        

      default:
        return 'Bye.'
 }
  
}
switchOnCharmFromTip('generous')
switchOnCharmFromTip('not as generous')
switchOnCharmFromTip('thanks for everything')