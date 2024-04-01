function Add(){
    let input1=parseInt( document.getElementById("in1").value);
    let input2=parseInt( document.getElementById("in2").value);
    document.getElementById("para").innerText="The Result will be: "+(input1+input2);
}
function sub(){
    let input1=( document.getElementById("in1").value);
    let input2=( document.getElementById("in2").value);
    document.getElementById("para").innerText="The Result will be: "+(input1-input2);
}
function mul(){
    let input1=parseInt( document.getElementById("in1").value);
    let input2=parseInt( document.getElementById("in2").value);
    document.getElementById("para").innerText="The Result will be: "+(input1*input2);
}
function rem(){
    let input1=parseInt( document.getElementById("in1").value);
    let input2=parseInt( document.getElementById("in2").value);
    document.getElementById("para").innerText="The Result will be: "+(input1%input2);
}
function div(){
    let input1=parseInt( document.getElementById("in1").value);
    let input2=parseInt( document.getElementById("in2").value);
    document.getElementById("para").innerText="The Result will be: "+(input1/input2);
    
}
function sqroot(){
     let input1=parseInt( document.getElementById("in1").value);
    let input2=parseInt( document.getElementById("in2").value);
    //document.getElementById("para").innerText="The Result will be: "+(Math.sqrt(input1));
    document.getElementById("para").innerText="The Result will be: "+(Math.sqrt(input2).toFixed(2));

}
function power(){
     let input1=parseInt( document.getElementById("in1").value);
    let input2=parseInt( document.getElementById("in2").value);
    document.getElementById("para").innerText="The Result will be: "+(input1**input2);
}
function log(){
//let input1=parseInt( document.getElementById("in1").value);
    let input2=parseInt( document.getElementById("in2").value);
    document.getElementById("para").innerText="The Result will be: "+(Math.log2(input2));
}
function log10(){
    let input2=parseInt( document.getElementById("in2").value);
    document.getElementById("para").innerText="The Result will be: "+(Math.log10(input2));
}