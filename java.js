let monthlyRepayment = document.querySelector('.monthly-repayment');
let overTheTerm = document.querySelector('.over-the-term');
let input = document.querySelectorAll('input');
let years = document.getElementsByName('years');
let rate =document.getElementsByName('rate');
let pounds = '\u00A3';
/*
overTheTerm.textContent = '\u00A3';*/

let button = document.querySelectorAll('button');
button[1].addEventListener("click",(e)=>{
    e.preventDefault()
   /* alert('this is nice ');*/
   let amount = document.querySelectorAll("#amount-input")[0].value;
   let years = document.querySelectorAll("#amount-input")[1].value;
   let rate = document.querySelectorAll("#amount-input")[2].value;
   let amountEntered = amount*years*(1+(rate/100));
   document.querySelector('#results').style.display = 'none';
   document.querySelector('.answer').style.display = 'block';
   let errorMessage = document.querySelectorAll('.alerting');
   let span = document.querySelectorAll('span');
   let borders = document.querySelectorAll('.sub-am');

   if (amountEntered == undefined){
     alert('not working');
   }
   else if(amount == ""){
    errorMessage[0].classList.remove('hide');
    errorMessage[0].classList.add('show');
    span[0].style.backgroundColor = 'red';
    span[0].style.color = 'white';
    borders[0].style.borderColor = 'red';

   }
   else if(years == ""){
    errorMessage[1].classList.remove('hide');
    errorMessage[1].classList.add('show');
    span[1].style.backgroundColor = 'red';
    span[1].style.color = 'white';
    borders[1].style.borderColor = 'red';
    
   }
   else if(rate == ""){
    errorMessage[2].classList.remove('hide');
    errorMessage[2].classList.add('show');
    span[2].style.backgroundColor = 'red';
    span[2].style.color = 'white';
    borders[2].style.borderColor = 'red';
   }
   else
    {
        if(input[3].checked){
            overTheTerm.textContent = pounds + (amountEntered).toFixed(2);
            monthlyRepayment.textContent = pounds + (amountEntered/(years*12)).toFixed(2);
        }
        else if (input[4].checked){
            overTheTerm.textContent = pounds + (amountEntered-amount).toFixed(2);
            monthlyRepayment.textContent = pounds + ((amountEntered-amount)/(years*12)).toFixed(2);
        } 
        else {
            errorMessage[3].classList.remove('hide');
            errorMessage[3].classList.add('show');
        }
        
    }
})
button[0].addEventListener('click', (e)=>{
    e.preventDefault()
    window.location.reload();
/*
    let errorMessage = document.querySelectorAll('.alerting');
    for(a = 0; a<4; a++){
        errorMessage[a].classList.add('hide');
    }

    for(i = 0; i<3; i++){
        input[i].value=" ";
    }
    monthlyRepayment.textContent = " ";
    overTheTerm.textContent = " ";
    input[3].checked = false;
    input[4].checked = false;
    document.querySelector('#results').style.display = 'block';
    document.querySelector('.answer').style.display = 'none';*/
})

let activated = document.querySelectorAll("#amount-input");
let selected = document.querySelectorAll('span');
let focused = document.querySelectorAll(".sub-am");
let typem = document.querySelectorAll('input[type="radio"]');
activated[0].addEventListener('click',(e)=>{
    e.preventDefault()
    selected[0].classList.add('span-active');
    focused[0].classList.add('active');
})
activated[1].addEventListener('click',(e)=>{
    e.preventDefault()
    selected[1].classList.add('span-active');
    focused[1].classList.add('active');
})
activated[2].addEventListener('click',(e)=>{
    e.preventDefault()
    selected[2].classList.add('span-active');
    focused[2].classList.add('active');
})
typem[0].addEventListener('focused',(e)=>{
    e.preventDefault()
    document.querySelector('.repayment').classList.add('active');
})
typem[1].addEventListener('focused',(e)=>{
    e.preventDefault()
    document.querySelector('.repayment').classList.add('active');
})
if(typem[0].focused == false){
    typem[0].parentElement.style.borderColor = 'blue';
}

/*
document.querySelector('.repayment').classList.add('active');*/
