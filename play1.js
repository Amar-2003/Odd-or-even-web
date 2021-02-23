import userbat from './toss.js'
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