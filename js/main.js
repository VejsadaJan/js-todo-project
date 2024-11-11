
// document znamena "cely nas html kod"
// cize form hladame v html kode ako takom
// ale vsimni si, ze konkretne inputy potom vieme hladat _vo_ form elemente
// definovane konstanty
const form = document.querySelector('form');
const inputTitle = form.querySelector('input[name=title]');
const inputContent = form.querySelector('input[name=content]');
const cardContainer = document.querySelector('.cards ul');


// naslouchač na submit uložit 
form.addEventListener('submit', (event) => {

    event.preventDefault(); // zabrani nulovani

    // cosole log pro kontrolu
    // console.log('nadpis ' + inputTitle.value); 
    // console.log('text ' + inputContent.value); 
    


    // vytvor novy card element [ funkcia je v utilities.json ]
    createNewCard(
      cardContainer,
      inputTitle.value,
      inputContent.value
    );
      
    	// premaz inputy
    inputTitle.value = '';
    inputContent.value = '';

    

  });

/* // naslouchač na delete na elementu li 
cardContainer.addEventListener('click',(event) => {
    
  event.preventDefault(); // zabrani nulovani  
  
    
  console.log ("klik ");

  
    
  }) */


