document.addEventListener('DOMContentLoaded',function() {
    import userbat from './toss.js'
    //play 1
    let score1 = 0
    let score2 = 0
    let feedback4 = document.querySelector('#feedback4')

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
                if(userrun == cmprun)
                {
                    feedback4.innerHTML = "you are out :("
                    break;
                }
                else
                {
                    score1 += userrun
                    document.querySelector('#player_runs').innerHTML = "Your current run is " + score1
                }
            }
            else{
                document.querySelector('#status').innerHTML = "You are bowling"
                if(userrun != cmprun)
                {
                    score2 += cmprun
                    document.querySelector('#computer_runs').innerHTML = "Computer's run is " + score2
                }
                else
                {
                    feedback4.innerHTML = "Computer is out :)"
                    break;
                }

            }   


        })
    }
})