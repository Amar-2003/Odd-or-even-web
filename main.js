document.addEventListener("DOMContentLoaded",function (){
    let startplay1 = document.querySelector('#start_play1')
    startplay1.style.visibility = "hidden"
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
        let userbat
        if(!("e".localeCompare(chosen)))
        {   
            
            if((cmt+input)%2 == 0)
            {   
               
                document.querySelector('#feedback3').innerHTML = "You won the toss";
                tossquestion.style.visibility = "visible"
                ballbutton.style.visibility = "visible"
                batbutton.style.visibility = "visible"
                document.querySelector('#batchoice').addEventListener('click',function(){
                    userbat = true
                    batbutton.style.backgroundColor = "green"
                    ballbutton.style.visibility = "hidden"
                    startplay1.style.visibility = "visible"
                    
                })
                document.querySelector('#bowlchoice').addEventListener('click',function (){
                    userbat = false
                    ballbutton.style.backgroundColor = "green"
                    batbutton.style.visibility = "hidden"
                    startplay1.style.visibility = "visible"

                })
            }
            else
            {   
                
                document.querySelector('#feedback3').innerHTML = "You lost the toss"
                if(Math.floor(Math.random() + 1.5) == 1)
                {
                    
                    document.querySelector('#cmptosschoice').innerHTML = "Computer chose Bowling"
                    userbat = true
                    startplay1.style.visibility = "visible"

                }
                else
                {
                    
                    document.querySelector('#cmptosschoice').innerHTML = "Computer chose Batting"
                    userbowl = false
                    startplay1.style.visibility = "visible"


                }

            }
        }
        else{
            if((cmt+input)%2 != 0)
            {
                document.querySelector('#feedback3').innerHTML = "You won the toss";
                tossquestion.style.visibility = "visible"
                ballbutton.style.visibility = "visible"
                batbutton.style.visibility = "visible"
                document.querySelector('#batchoice').addEventListener('click',function(){
                    userbat = true
                    batbutton.style.backgroundColor = "green"
                    ballbutton.style.visibility = "hidden"
                    startplay1.style.visibility = "visible"

                })
                document.querySelector('#bowlchoice').addEventListener('click',function (){
                    userbat = false
                    ballbutton.style.backgroundColor = "green"
                    batbutton.style.visibility = "hidden"
                    startplay1.style.visibility = "visible"


                })
            }
            else
            {   
                
                document.querySelector('#feedback3').innerHTML = "You lost the toss"
                if(Math.floor(Math.random() + 1.5) == 1)
                {
                    
                    document.querySelector('#cmptosschoice').innerHTML = "Computer chose Bowling"
                    userbat = true
                    startplay1.style.visibility = "visible"

                }
                else
                {
                    
                    document.querySelector('#cmptosschoice').innerHTML = "Computer chose Batting"
                    userbat = false
                    startplay1.style.visibility = "visible"

                }

            }
        }
        
    })
    
    //play 1
    let score1 = 0
    let score2 = 0
    
    while(true)
    {
        document.querySelector('#runinput1_button').addEventListener('click',function (){
            let userrun = parseInt(document.querySelector('#runinput1').value);
            let cmprun = Math.floor(Math.random() * 7);
            document.querySelector('#enteredrun_1').innerHTML = "You entered " + userrun;
            document.querySelector('#compchosenrun').innerHTML = "Computer chose " + cmprun;
            
            if(userbat)
            {   
                document.querySelector('#status').innerHTML = "You are batting"
                if(userrun == 2)
                {
                    document.querySelector('#feedback4'),innerHTML = "you are out :("
                }
                else
                {
                    score1 += userrun
                    document.querySelector('#player runs').innerHTML = "Your current run is " + score1
                }
            }


        })
    }

})