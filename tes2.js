var personId = 1;
const hasil = document.getElementById('bodyTable')
const button = document.getElementById('button')
let nama = document.getElementById("nama");
let umur = document.getElementById("umur");
let selectedID = 0;
let people = [];

function handleButton () {
    if(button.innerText === "Submit") {
        inputPerson();
    } else {
        updatePerson();
    }
}

function inputPerson () {
    console.log("INPUT")

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
            <td class="tdCenter"><b>${person.id}</b></td>
            <td style="padding-left:2%">${person.nama}</td>
            <td class="tdCenter">${person.umur}</td>
            <td class="tdAction">
                <button class="button" type="button" onclick="updateClicked(${person.id})">Update</button>
                <button class="button" type="button" onclick="deleteClicked(${person.id})">Delete</button>
            </td>
        </tr>
        `
    })
}

function updateClicked(id) {
    selectedID = id;
    const person = people.find(function(person){
        return person.id === id
    })
    button.innerText = "Update";
    nama.value= person.nama;
    umur.value= person.umur;
}

function updatePerson () {
    console.log("UPDATE")
    let person = {
        id: selectedID,
        nama : nama.value,
        umur : umur.value
    };

    const index = people.findIndex( function(person){
        return person.id === selectedID
    })

    people[index] = person;
    
    showData();
    button.innerText = "Submit";
    
    nama.value= "";
    umur.value= "";
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