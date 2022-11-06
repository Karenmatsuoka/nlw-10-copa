function createGame(player1,hour,player2){
  return `
   <li>
                    <img src="/Bandeiras dos países/icon=${player1}.svg" 
alt="Bandeira do ${player1}">
                    <strong>${hour}</strong>
                    <img src="/Bandeiras dos países/icon=${player2}.svg" alt="Bandeira da ${player2}">
                </li>
`
}

let delay = -0.3;
function createCard(date,day,games){
  delay = delay + 0.3;
  return `
     <div class="card" style="animation-delay: ${delay}s">
            <h2>${date} <span>${day}</span></h2>
            <ul>
               ${games}
            </ul>
         </div>
  `
}


document.querySelector("#cards").innerHTML = `
        
${createCard(
           "24/11",
           "Quinta",
           createGame("switzerland", "7:00", "cameroon") +
           createGame("uruguay", "10:00", "south korea") +
           createGame("portugal", "13:00", "ghana") +
           createGame("brazil", "16:00", "serbia")
         )}
         ${createCard(
           "25/11",
           "Sexta",
           createGame("qatar", "10:00", "senegal")
         )}
         ${createCard(
           "26/11",
           "Sábado",
           createGame("france", "13:00", "denmark")
         )}
         ${createCard(
           "27/11",
           "Domingo",
           createGame("spain", "16:00", "germany")
         )}
      `
