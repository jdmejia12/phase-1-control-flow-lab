function scuberGreetingForFeet(dist){
  if(dist <= 400){
    return 'This one is on me!';
  }else if (dist > 2000 && dist <=2500){
    return 'I will gladly take your thirty bucks.'
  }else if(dist > 2500){
    return 'No can do.'
  }
}
// scuberGreetingForFeet(199);

where = '';
function ternaryCheckCity(where){
if(where == 'NYC'){
  return 'Ok, sounds good.'}
  else{
    return 'No go.'}
}

function switchOnCharmFromTip(howKind){
  switch(howKind){
    case 'generous' : return 'Thank you so much.'
    break;

    case 'not as generous' : return 'Thank you.'
    break;

    default : return 'Bye.'
  }
}