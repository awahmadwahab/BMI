// DOM -----------------------------------------


let age=document.getElementById('age')

let kg=document.getElementById("kg")
let lbs=document.getElementById("lbs")
let kgInput=document.getElementById('kg-in')
let lbsInput=document.getElementById('lbs-in')

let ft=document.getElementById("ft")
let cm=document.getElementById("cm")
let ftInput=document.getElementById("ft-in")
let inInput=document.getElementById("inc-in")
let cmInput=document.getElementById("cm-in")

let bmi=document.getElementById("bmi")
let result=document.getElementById("result")

// EVENT LISTENERS---------------------------

ft.addEventListener('change',updateInputs)
cm.addEventListener('change',updateInputs)
kg.addEventListener('change',updateInputs)
lbs.addEventListener('change',updateInputs)


//Default Inputs-----------------------------
cmInput.hidden=true;
ftInput.hidden=false;
inInput.hidden=false;
lbsInput.hidden=true;
kgInput.hidden=false



//  INPUT-UPDATE FUNCTION-----------------------------

function updateInputs()
{

// Weight INPUTS-----------------
if(kg.checked)
    {
        lbsInput.hidden=true;
        kgInput.hidden=false
    }
    else if(lbs.checked){
        lbsInput.hidden=false;
        kgInput.hidden=true
    }

// Height INPUTS-----------------
     if(ft.checked)
    {
        cmInput.hidden=true;
        ftInput.hidden=false;
        inInput.hidden=false;
    }
    else if(cm.checked)
        {
            ftInput.hidden=true;
            inInput.hidden=true;
            cmInput.hidden=false;
        }
}




// CALCULATE FUNCTION--------------------------

function calculate()
{
  let weight, height;
  let bmiresult
  //weight-------
 if(kg.checked)
 {
    weight=parseFloat(kgInput.value);
 }
 else if(lbs.checked)
 {
    weight=parseFloat(lbsInput.value)*0.4535;
 }

//height------

if(ft.checked)
{
     height=parseFloat(ftInput.value)*0.3048+parseFloat(inInput.value)*0.0254
}
else if(cm.checked)
{
     height=parseFloat(cmInput.value)*0.01;
}



if(weight&&height)
{
     bmiresult=weight/(height*height);
    bmi.textContent="BMI: "+bmiresult.toFixed(2);
}
else{
    bmi.textContent=" Error"
}

if(bmiresult<18.5 && bmiresult>10)
{
    result.textContent="Under Weight"
}
else if(bmiresult>=18.5&&bmiresult<25){
    result.textContent="Normal Weight"
}
else if(bmiresult>=24&&bmiresult<30){
    result.textContent="Overweight"
}
else if(bmiresult>=30){
    result.textContent="Obesity"
}
else
{
    result.textContent="No Result"
}
}

