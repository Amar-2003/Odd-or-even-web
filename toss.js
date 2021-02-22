document.addEventListener("DOMContentLoaded",function (){
    let batbutton = document.querySelector('#batchoice')
    let ballbutton = document.querySelector('#bowlchoice')
    batbutton.style.visibility = "hidden"
    ballbutton.style.visibility = "hidden"
    let tossquestion = document.querySelector('#tossquestion')
    tossquestion.style.visibility = "hidden"

    let even = document.querySelector('#even')
    let odd = document.querySelector('#odd')
    let chosen = "a"
    even.addEventListener("click", function (){
        odd.style.visibility = "hidden"
        even.style.backgroundColor = "green"
        document.querySelector('#feedback1').innerHTML = "You chose even!"
        chosen = "e"
        
    })
    odd.addEventListener("click", function (){
        even.style.visibility = "hidden"
        odd.style.backgroundColor = "green"
        document.querySelector('#feedback1').innerHTML = "You chose odd!"
        chosen = "o"
    })
    let button = document.querySelector('#tosssubmit')
    button.addEventListener('click',function (){
        let input = parseInt(document.querySelector('#input').value);
        let cmt = Math.floor(Math.random() + 1.5);
        document.querySelector('#feedback2').innerHTML = "Computer chose " + cmt;
        button.style.visibility = "hidden"
        
        if(!("e".localeCompare(chosen)))
        {   
            
            if((cmt+input)%2 == 0)
            {
                document.querySelector('#feedback3').innerHTML = "You won the toss";
                tossquestion.style.visibility = "visible"
                ballbutton.style.visibility = "visible"
                batbutton.style.visibility = "visible"
            }
            else
            {   
                let cmpchosen = 3
                document.querySelector('#feedback3').innerHTML = "You lost the toss"
                if(Math.floor(Math.random() + 1.5) == 1)
                {
                    cmpchosen = 1
                    document.querySelector('#cmptosschoice').innerHTML = "Computer chose Bowling"
                }
                else
                {
                    cmpchosen = 0
                    document.querySelector('#cmptosschoice').innerHTML = "Computer chose Batting"

                }

            }
        }
        
    })

})