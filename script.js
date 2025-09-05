function SaveData(){
    const data = {
        name: document.getElementById('name').value,
        city: document.getElementById('city').value,
        zipcode: document.getElementById('zipcode').value,
        street: document.getElementById('street').value,
        houseNumber: document.getElementById('houseNumber').value
    };

    localStorage.setItem('userData', JSON.stringify(data));
    alert('Adatok sikeresen mentve!');
}