const c1=document.getElementById("card1");
const c2=document.getElementById("card2");
const c=document.getElementById("card");
let hasPush=true;

function buttonclick(){
    if(hasPush==true){
        hasPush=false;
        c.className='card_back';
    }
    else{
        hasPush=true;
        c.className='card';
    }
}
