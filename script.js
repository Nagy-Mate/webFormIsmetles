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