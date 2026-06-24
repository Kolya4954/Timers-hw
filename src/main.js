// fist task


let time = 60

const spanRef = document.querySelector(".span")



const timer = setInterval(() =>{
   time -= 1

   spanRef.textContent = time
   if(time === 30){
    alert("лишилась половина часу")
   }
   else if(time === 0){
      clearInterval(timer)
      alert("час вийшов!")
   }
}, 1000)




// second task


const secondsRef = document.querySelector(".timerSeconds")
const MSecondsRef = document.querySelector(".timerMSeconds")
const startRef = document.querySelector(".start")
const stopRef = document.querySelector(".stop")
const resetRef = document.querySelector(".reset")
const divRef = document.querySelector(".div")




let totalSeconds = 30000
let id = null



function stopTimer(){
   clearInterval(id)
   id = null
}

function updateUI() {
    const s = Math.floor((totalSeconds % 60000) / 1000);
    const ms = totalSeconds % 1000;
    secondsRef.textContent = s.toString().padStart(2, "0");
    MSecondsRef.textContent = ms.toString().padStart(3, "0");
}


function startTimer(){
   if(id !== null) return;

   id = setInterval(() =>{
      totalSeconds -= 10

      if(totalSeconds <= 10000){
         divRef.style.backgroundColor = '#ff0000';
      }

      if(totalSeconds <= 0){
         totalSeconds = 0
         id = null
         clearInterval(id)

         divRef.style.display = "block"
      }
      updateUI();
   }, 10)
}



function resetTimer(){
   clearInterval(id)
   id = null
   totalSeconds = 30000
    divRef.style.backgroundColor = 'white';
    updateUI()
}


startRef.addEventListener("click", startTimer)
stopRef.addEventListener("click", stopTimer)
resetRef.addEventListener("click", resetTimer)

updateUI()