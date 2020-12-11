
var button = document.querySelector('#btn-regis')
var button_close = document.querySelectorAll('.btn-close')
var button_signin = document.querySelector("#btn-signin1")
console.log(button_signin)

button.onclick = function() {

    document.querySelector('.modal').style.display="flex"
}
button_close[0].onclick = function() {
    document.querySelector('.modal').style.display="none"
  

}
button_close[1].onclick = function() {
    document.querySelector('.modal1').style.display="none"
  

}

button_signin.onclick = function() {
    console.log(document.querySelector('.modal1'))
    document.querySelector('.modal1').style.display="flex"
    // alert()
}