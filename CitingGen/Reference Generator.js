function reference(){
    var author =  document.getElementById("Author").value;
    var date = document.getElementById("date").value;
    var title = document.getElementById("title").value;
    var titleStr = title.toString();
    var titleItal = titleStr.italics();
    var URL = document.getElementById("URL").value;
    var DOA = document.getElementById("DOA").value;
    
    var Reference = author + ". " + date+ ". " +  titleItal + ". " + URL + " Date of access: " + DOA + ".";
    
    
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
    document.getElementById("GenRef").value = null;
}



// function btnCopy(){
    
//     GenRef.select();
//     document.execCommand('copy');


// }

function btnCopy() {
    
    var copyText = document.getElementById("GenRef");
  
    copyText.select();
    
  
    navigator.clipboard.writeText(copyText.value);
  

    // alert("Copied the text: " + copyText.value);
  }

