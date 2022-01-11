function reference(){
    var author =  document.getElementById("Author").value;
    var date = document.getElementById("date").value;
    var title = document.getElementById("title").value;
    var URL = document.getElementById("URL").value;
    var DOA = document.getElementById("DOA").value;
    
    var Reference = author + ". " + date + ". " + title + ". " + URL + " Date of access: " + DOA + "."
    console.log("test");
    console.log(author);
    document.getElementById("GenRef").value = Reference;


}

function clearTable(){
    document.getElementById("Author").value = null;
    document.getElementById("date").value = null;
    document.getElementById("title").value = null;
    document.getElementById("URL").value = null;
    document.getElementById("DOA").value = null;
}

