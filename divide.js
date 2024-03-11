const option1=document.getElementById("option1");
const option2=document.getElementById("option2");
const option3=document.getElementById("option3");
var answer=0;

function generate_equation(){

    var num1=Math.floor(Math.random()*13 );
    var num2=Math.floor(Math.random()*13 );
    
    if(num1>=num2)
    {
        answer=num1-num2;
    }else
    {
     var temp=num1;
     num1=num2;
     num2=temp;
     
    }
    document.getElementById("num1").innerHTML=num1;
    document.getElementById("num2").innerHTML=num2;
    
    answer=num1-num2;var dummyAnswer1=Math.floor(Math.random()*13 );
    var dummyAnswer2=Math.floor(Math.random()*13 );
    var allAnswers=[];
    var switchAnswers=[];    
    
    answer=num1/num2;
    
    document.getElementById("num1").innerHTML=num1
    document.getElementById("num2").innerHTML=num2;
    allAnswers=[dummyAnswer1,dummyAnswer2,answer];
    
    
    
    
   
    
 
    //The Fisher-Yates algorith for random sort of array

        for (let i = allAnswers.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = allAnswers[i];
          allAnswers[i] = allAnswers[j];
          allAnswers[j] = temp;
          
        }
      
      
        
option1.innerHTML=allAnswers[0];
option2.innerHTML=allAnswers[1];
option3.innerHTML=allAnswers[2];

    
}

option1.addEventListener("click",function(){
    if(option1.innerHTML==answer){
    generate_equation();
    }else{
        alert("Wrong Answer");
    }
})
option2.addEventListener("click",function(){
    if(option2.innerHTML==answer){
        
        generate_equation();
    }else{
        alert("Wrong Answer");
      
    }
})
option3.addEventListener("click",function(){
    if(option3.innerHTML==answer){
    generate_equation();
    }else{
        alert("Wrong Answer");
    }
})


generate_equation();