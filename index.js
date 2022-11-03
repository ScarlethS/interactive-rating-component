let numbersContainer = document.querySelector('.buttons-container');
let rateNumberSelected = document.querySelector('#selected');
let submittedButton = document.querySelector('#submit-score');
let mainState = document.querySelector('.rating-box');
let thankYouState = document.querySelector('.thanks-state');
let backLanginBtn = document.querySelector('#back-btn');


numbersContainer.addEventListener('click', e => {
    e.preventDefault();
    let numberSelected = e.target.innerText;
    rateNumberSelected.innerText = numberSelected;
    // console.log(numberSelected);
    if(numberSelected !== undefined){
        submittedButton.addEventListener('click', () =>{            
            mainState.style.display = 'none';
            thankYouState.style.display= 'block';
        });        
    } 
  
});

    

backLanginBtn.addEventListener('click', () =>{
    mainState.style.display = 'block';
    thankYouState.style.display= 'none';
})