import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  domainNameGen ();
};
const domainNameGen = () => {
 const pronounArr = ['i', 'you', 'he', 'she', 'the', 'them'];
 const adjArr = ['excellent', 'easy', 'great', 'amazing', 'lush', 'nice'];
 const nounArr = ['actor', 'tiger', 'cat', 'dog', 'lizzard', 'chimp', 'athlete', 'doctor']
 const domainArr = ['.com', '.net', '.org', '.gov', '.edu', '.us', '.mil', '.info', '.biz', '.arpa', '.io', '.online', '.site', '.me', '.ai'];
 
 let combo = "";
  
  for(let i = 0; i < pronounArr.length; i++){
    for(let x = 0; x < adjArr.length; x++) {
      for (let y = 0; y < nounArr.length; y++) {
        for(let z = 0; z < domainArr.length; z++){
          combo += `${pronounArr[i]}${adjArr[x]}${nounArr[y]}${domainArr[z]}<br>`;
          
        }
      }
    }
  }
  document.querySelector(".line").innerHTML = combo;
  console.log(combo)
}
