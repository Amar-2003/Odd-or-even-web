document.addEventListener("DOMContentLoaded",function (){
    let even = document.querySelector('#even')
    let odd = document.querySelector('#odd')
    even.addEventListener("click", function (){
        odd.style.visibility = "hidden"
        even.style.backgroundColor = "green"
        document.querySelector('#feedback1').innerHTML = "You chose even!"
        let chosen = "odd"
    })
    odd.addEventListener("click", function (){
        even.style.visibility = "hidden"
        odd.style.backgroundColor = "green"
        document.querySelector('#feedback1').innerHTML = "You chose odd!"
        let chosen = "even"
    })
})