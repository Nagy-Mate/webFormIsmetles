LoadData();

function SaveData(){
    const data = {
        name: document.getElementById('nev').value,
        city: document.getElementById('telepules').value,
        zipcode: document.getElementById('iranyitoszam').value,
        street: document.getElementById('kozterulet').value,
        houseNumber: document.getElementById('hazszam').value
    };

    localStorage.setItem('userData', JSON.stringify(data));
    alert('Adatok sikeresen mentve!');
}

function LoadData(){
    let firstData = JSON.parse(localStorage.getItem("userData"));
    document.getElementById("outNev").innerHTML = firstData.name;
    document.getElementById("outTelepules").innerHTML = firstData.city;
    document.getElementById("outIranyitoszam").innerHTML = firstData.zipcode;
    document.getElementById("outKozterulet").innerHTML = firstData.street;
    document.getElementById("outHazszam").innerHTML = firstData.houseNumber;
}