var sendButtonVar = document.getElementById('sendButton');
sendButtonVar.addEventListener('click', sendInfo);
function sendInfo(){
  var userAge = document.getElementById('userAge').value;
  if(isNaN(userAge)==true){
    alert('erreur');
  } else{
      if(userAge < 18){
        alert('Dommage... vous êtes mineur :\'\(');
      } else{
        alert('Vous êtes majeur');
      }
  }
};
