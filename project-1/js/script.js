

function onFormSubmit(){

}

//Retrieve data
function readFormData(){
    var formData={};
    formData["name"]=document.getElementById("name").value;
    formData["email"]=document.getElementById("email").value;
    return formData;
}

//Insert data
function insertNewRecord(data){
    var table=document.getElementById("storeList").getElementsByTagName('tbody')[0];
}