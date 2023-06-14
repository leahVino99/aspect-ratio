 const containerList = document.querySelector('.container');
const inpRatioWidth = document.querySelector('#ratio-width');
const inpRatioHeight = document.querySelector('#ratio-height');
const inpWidth = document.querySelector('#width');
const inpHeight = document.querySelector('#height');

containerList.addEventListener('input',(event) => {
        let ratioWidth =+ inpRatioWidth.value
        let ratioHeight =+ inpRatioHeight.value
        let width =+ inpWidth.value
        let height =+ inpHeight.value
        if (event.target===inpRatioWidth){
            if (inpRatioWidth.value !== "16") {
             inpWidth.value = height / ratioHeight * ratioWidth
             }
        } if (event.target===inpRatioHeight){
            if (inpRatioHeight.value !== "9") {
             inpHeight.value = width / ratioWidth * ratioHeight
             }
        } if (event.target===inpWidth){
            if(inpWidth.value !== "1280") {
             inpHeight.value = width / (ratioWidth / ratioHeight)
             }
        } if (event.target===inpHeight){
            if (inpHeight !== "720") {
             inpWidth.value = height * (ratioWidth / ratioHeight)
             }
        }
})


const inpname = document.querySelector('#name');
const inpweight = document.querySelector('#weight');
const inpheight = document.querySelector('#height1');
const out2 = document.querySelector('#output2');


function threeValues(){
    let name = inpname.value
    let weight = +inpweight.value
    let height = +inpheight.value
    let BMI = weight/(height*height);

    
    if (name && weight && height) {

        if (BMI < 17) {
          return response = `Dear ${name}, You're BMI is ${BMI}. You're wonderful. When the wind blows, you fly.`;
        }else if (BMI < 18.5){
          return response = `Dear ${name}, You're BMI is ${BMI}. You're glorious. You could eat more pasta.`;
        }else if (BMI < 25){
          return response = `Dear ${name}, You're BMI is ${BMI}. You're lovely. Do more sport.`;

        }else {
          return response = `Dear ${name}, You're BMI is ${BMI}. You're beautiful. Do more sport.`;
        }
    }
}


function onOutput2 (){
    out2.innerText =threeValues();
}

inpheight.addEventListener('change', onOutput2);


    
const inpCM = document.querySelector('#centimeters');
const inpButton = document.querySelector('#Converter');
const out1 = document.querySelector('#output1');
const error = document.querySelector('.error');

function convertToMeters(){
    let cm = +inpCM.value
    if(cm){
    error.innerText = '';
    return cm/100;
} else { 
    error.innerText = 'Not enough values'
    return '';
}
}
function onOutput (){
    out1.innerText =convertToMeters();
}

inpButton.addEventListener('click', onOutput);

// document.body.style.color = "rgb(243, 22, 96)"

function changeBodyColor(){

    if (document.body.style.background = "rgb(243, 22, 96)"){
        return (document.body.style.background = "lightgreen");
     } else {
        document.body.style.background = "lightsalmon";
        }
    }

inpCM.addEventListener('change', changeBodyColor);


