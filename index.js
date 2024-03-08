const button= document.getElementById('form-submit');
 

button.addEventListener('click',function(){
    var name = document.getElementById('name').value; 
    alert("Hello "+name+" Your Form Is submitted");
    
})