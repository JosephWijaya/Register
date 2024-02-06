var personId = 1;
const hasil = document.getElementById('bodyTable')
const button = document.getElementById('button')
let nama = document.getElementById("nama");
let umur = document.getElementById("umur");
let selectedID = 0;
let people = [];

function handleButton() {
    if(nama.value.length > 0 && umur.value.length > 0) {
	inputPerson()
    } else {
	alert("Data harus terisi!")
    }
}

function inputPerson () {
    let person = {
        id: personId,
        nama : nama.value,
        umur : umur.value
    };
    people.push(person);
    personId++;
    
    showData();
    
    nama.value= "";
    umur.value= "";
}

function showData () {
    hasil.innerHTML = ''
    people.forEach(person => {
        hasil.innerHTML += `
        <tr>
            <td class="tdCenter"> <b> ${person.id} </b> </td>
            <td class="tdText"> ${person.nama} </td>
            <td class="tdCenter"> ${person.umur} </td>
            <td class="tdAction">
                <button class="button" type="button" onclick="deleteClicked(${person.id})">
		    Delete
		 </button>
            </td>
        </tr>
        `
    })
}

function deleteClicked(id) {
    const person = people.find(function(person){
        return person.id === id
    })

    if(confirm(`Apakah Anda yakin inign menghapus data ${person.nama}`)){
        people = people.filter(function(person){
            return person.id != id
        })
    }
    showData();
}