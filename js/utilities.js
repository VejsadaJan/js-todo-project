


/**
 * VYTVORI NOVY CARD A VLOZI HO DO container ELEMENTU
 * 
 * @param {HTMLElement} container 
 * @param {String} title 
 * @param {String} text 
 */
function createNewCard(container, title, text) {
	let newCard = document.createElement('li');

	newCard.innerHTML = `
		<h3>${title}</h3>
		<p>${text}</p>
		<button class="btnDelete">Smazat</button>	
		<button class="btnEdit">Edit</button>
	
		
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="40" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  		<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  		<path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
		</svg>


	`;

	 //  tlačidlo "Delete" 
	 const deleteButton = newCard.querySelector('.btnDelete');
	 deleteButton.addEventListener('click', () => {

		// console.log("klikl jsi na delete");

		newCard.remove(); // Odstráni celý 
	 	});

	// edit button
	const editButton = newCard.querySelector('.btnEdit');
	editButton.addEventListener('click', () => {

		editCard();

	
	});     
	

	

	container.appendChild(newCard);
	
}


// EDIT
function editCard(){


	console.log ("Input : " + inputTitle.value);
		
	
	
	/*
	Swal.fire({
		title: "Super",
		text: "klik na edit",
		icon: "success"
	  });
	*/
	
	// console.log("klikl jsi na edit");
	// prompt("Uprav text " );
	
/*

	<button class="btnDelete">Smazat</button>	
	<button class="btnEdit">Edit</button>


*/



};



