window.onload = function(){

    document.getElementById('submit').onclick = validateForm;
};

function validateForm()
 {

    let username = document.querySelector('#username');

    

    let password = document.querySelector('#password');

    if (username.value =='' && password.value==''){

    
        window.alert(' Username  and password can not be blank ');
       //username.nextElementSibling.innerHTML=  " Username can not be blank ";
    } 
    else if (username.value =='') 
    {
        window.alert(' Username can not be blank ');
    }
    else if (password.value =='') 
    {
        window.alert(' Password can not be blank ');
    }
    
}