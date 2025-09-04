function SaveDataFromForm(){
    let name = document.getElementById("nev").value;
    localStorage.setItem('Name', name);
}

let submit = document.getElementById("submit");
submit.onclick = function SaveDataFromForm(){

}