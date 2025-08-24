//Log-in button 
document.getElementById('Login-btn').
addEventListener('click', function(e){
e.preventDefault();
const mobileNumber = 12345678910;
const pinNumber = 1234;

const mobileNumberValue = parseInt(document.getElementById('mobile-Number').value);

const pinNumberValue = parseInt(document.getElementById('pin-Number').value);


if(mobileNumberValue === mobileNumber &&  pinNumberValue === pinNumber){
    window.location.href="home.html"
}
else{
    alert('Invalid credential');
}

})