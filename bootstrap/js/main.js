function getData(){
    var language;
    
    if(document.getElementById('allLan').checked){
        language = document.getElementById('allLan').value;
    }
    else if(document.getElementById('javaLan').checked){
        language = document.getElementById('javaLan').value;
    }
    else if(document.getElementById('all').checked){
        language = document.getElementById('phpLan').value;
    }
    else if(document.getElementById('all').checked){
        language = document.getElementById('pyLan').value;
    }
    else if(document.getElementById('jsLan').checked){
        language = document.getElementById('jsLan').value;
    }
    alert(language + "Hello World");
}