document.addEventListener("DOMContentLoaded",function (){
    let even = document.querySelector('#even')
    let odd = document.querySelector('#odd')
    even.addEventListener("click", function (){
        odd.style.visibility = "hidden"
        even.style.backgroundColor = "green"
        document.querySelector('#feedback1').innerHTML = "You chose even!"
        let chosen = "e"
    })
    odd.addEventListener("click", function (){
        even.style.visibility = "hidden"
        odd.style.backgroundColor = "green"
        document.querySelector('#feedback1').innerHTML = "You chose odd!"
        let chosen = "o"
    })
    let batbutton = document.querySelector('#batchoice')
    let ballbutton = document.querySelector('#bowlchoice')
    batbutton.style.visibility = "hidden"
    ballbutton.style.visibility = "hidden"
    let tossquestion = document.querySelector('#tossquestion')
    tossquestion.style.visibility = "hidden"

    let button = document.querySelector('#tosssubmit')
    button.addEventListener('click',function (){
        let input = parseInt(document.querySelector('#input').value);
        let cmt = Math.floor(Math.random() + 1.5);
        document.querySelector('#feedback2').innerHTML = "Computer chose " + cmt;
        if("e".localeCompare(chosen))
        {
            if((cmt+input)%2 == 0)
            {
                document.querySelector('#feedback3').innerHTML = "You won the toss";
                tossquestion.style.visibility = "visible"
            }
        }
        
    })

})