function getData(){
    var language;
    if(document.getElementById('allLan').checked){
        language = document.getElementById('allLan').value;
    }
    else if(document.getElementById('javaLan').checked){
        language = document.getElementById('javaLan').value;
    }
    else if(document.getElementById('phpLan').checked){
        language = document.getElementById('phpLan').value;
    }
    else if(document.getElementById('pyLan').checked){
        language = document.getElementById('pyLan').value;
    }
    else if(document.getElementById('jsLan').checked){
        language = document.getElementById('jsLan').value;
    }else{
        alert('Please Select an Option from Language Menu')
    }
    
    if(language){
        var xmlhttp = new XMLHttpRequest(); 
        var responseText;
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText);
            }
        };
    

        xmlhttp.open("GET", "./gitReq.php?language=" + language, true);
        xmlhttp.send();
        alert(responseText + "  -Got it");
    }
}