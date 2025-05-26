// function changeText() {
// let fpara=document.querySelector("#fPara");
// fpara.textContent = "namaste duniya ";
// }

// let fpara=document.querySelector("#fPara");
// fpara.addEventListener("click", changeText ); /*add eventListener*/
 // fpara.addEventListener('click', function changeText() {         /*same  , but not suggest to use */
//     let fpara=document.querySelector("#fPara");
//     fpara.textContent = "namaste duniya"; //     } );
 // fpara.removeEventListener("click",changeText);  /*remove eventListener*/


 /*----changing default actions----- */
//  let ancorElement = document.querySelector("#ancorTag");//select tag 

//  function ancor(event){//creat function for change behaviour 
//      event.preventDefault();//stop default behaviour
//      ancorElement.textContent="click done";
//     }

//     ancorElement.addEventListener("click",ancor);//add eventListener

/*avoiding many listener */


function eventFunction(event){
    alert("you clicked on : "+event.target.textContent);//target for finding which element i clicked
}

let paras=document.querySelectorAll("div");

 paras.addEventListener("click",eventFunction);

// let paras=document.querySelectorAll("p");//find all p tag 

// for(let i=0;i<paras.length;i++){
//     let para=paras[i];
//     para.addEventListener("click",eventFunction);
// }