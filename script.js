
document.getElementById("val_Range").innerHTML=document.getElementById("rate").value+" %";

for(var i=1 ; i<30;i++){
            var node = document.createElement("option");
            node.value=i;
            node.innerHTML=i;
            document.getElementById("years").appendChild(node);
}
        
function changeRate(){
            document.getElementById("val_Range").innerHTML=document.getElementById("rate").value+" %" ;

        }
function compute(){

            

            amount = document.getElementById("principal").value;
            rate = document.getElementById("rate").value;
            years= document.getElementById("years").value;


            if(parseInt(amount)>0){
                res =parseInt(amount)*parseInt(rate)*parseInt(years)/100                
                var div = document.getElementById("result");
                var span1 = document.createElement("span");
                var span2 = document.createElement("span");
                var span3 = document.createElement("span");
                var span4 = document.createElement("span");
                span1.innerHTML="If you deposit <mark>"+amount +"<mark/> </br>"
                span2.innerHTML="at an interest rate of <mark>"+rate +" % <mark/> </br>"
                span3.innerHTML="you will receive an amount of <mark>"+res +" <mark/></br>"
                span4.innerHTML="in the year <mark>"+ parseInt(new Date().getYear()+1900+parseInt(years)) +" <mark/>"

                div.appendChild(span1);
                div.appendChild(span2);
                div.appendChild(span3);
                div.appendChild(span4);




            }
            else{
             
                alert("Enter a positive number ");

            }
                

        


        }