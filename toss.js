document.addEventListener("DOMContentLoaded",function (){
    let even = document.querySelector('#even')
    let odd = document.querySelector('#odd')
    even.addEventListener("click", function (){
        odd.style.visibility = "hidden"
        even.style.backgroundColor = "green"
        document.querySelector('#feedback1').innerHTML = "You chose even!"
        let chosen = 'o'
    })
    odd.addEventListener("click", function (){
        even.style.visibility = "hidden"
        odd.style.backgroundColor = "green"
        document.querySelector('#feedback1').innerHTML = "You chose odd!"
        let chosen = 'e'
    })
    let button = document.querySelector('#tosssubmit')
    button.addEventListener('click',function (){
        let input = parseInt(document.querySelector('#input').value);
        let cmt = Math.floor(Math.random() + 1.5);
        document.querySelector('#feedback2').innerHTML = "Computer chose " + cmt;     

    })

})