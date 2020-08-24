const table = document.getElementById('table');
const searchBar = document.getElementById('search-wrapper');


let cafes = [];
let places = [];
searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredCharacters = cafes['cafes'].filter((character) => {
        return (
            character.name.toLowerCase().includes(searchString)
        );
    });
    console.log(filteredCharacters);

   
    table.innerHTML = "";
    display(filteredCharacters, places['places']);

});

const load = async () => {
    try {
        const res = await fetch('https://raw.githubusercontent.com/debojyoti/places-fake-rest-api/master/cafes.json');
        cafes = await res.json();
        //console.log(cafes['cafes']);
        load2(cafes['cafes']);
    } catch (err) {
        console.error(err);
    }
};

const load2 = async (a) => {
    try {
        const res = await fetch('https://raw.githubusercontent.com/debojyoti/places-fake-rest-api/master/places.json');
        places = await res.json();
        //console.log(cafes['cafes']);
        display(a, places['places']);
    } catch (err) {
        console.error(err);
    }
};
const display = (cafes, places) => {

    const htmlString = cafes.map((cafe, index) => {
        places.map((place, index2) => {
    
            if (place.id === cafe.location_id) {

            
                 let newRow = table.insertRow(-1);
                  let newCell = newRow.insertCell(0);
                  newCell.className='column1';
                  let newText = document.createTextNode(index+1);
                  newCell.appendChild(newText);
                 
          
                  newCell = newRow.insertCell(1);
                  newCell.className='column2';
                  newText = document.createTextNode(cafe.name);
                  newCell.appendChild(newText);
          
                  newCell = newRow.insertCell(2);
                  newCell.className='column3';
                  newText = document.createTextNode(place.street_no + " " + place.locality);
                  newCell.appendChild(newText);
          
                  newCell = newRow.insertCell(3);
                  newCell.className='column4';
                  newText = document.createTextNode(place.postal_code);
                  newCell.appendChild(newText);
          
                  newCell = newRow.insertCell(4);
                  newCell.className='column5';
                  newText = document.createTextNode(place.lat);
                  newCell.appendChild(newText);
          
                  newCell = newRow.insertCell(5);
                  newCell.className='column6';
                  newText = document.createTextNode(place.long);
                  newCell.appendChild(newText);







            }
        })


    })

};


load();