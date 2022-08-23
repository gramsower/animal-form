window.onload = function() {
  const form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
  
    let turtles = document.getElementById("turtles");
    turtles.setAttribute("class", "hidden");
    
    let insects = document.getElementById("insects");
    insects.setAttribute("class", "hidden")

    let snakes = document.getElementById("snakes");
    snakes.setAttribute("class", "hidden");

    let other = document.getElementById("other");
    other.setAttribute("class", "hidden");

    const input = document.querySelector("input#animal1Input").value.toLowerCase();

    if (input === "turtles" || input === "turtle") {
      turtles.removeAttribute("class");
    }
      else if (input === "insects" || input === "insect") {
        insects.removeAttribute("class");
      }
      else if (input === "snakes" || input === "snake") {
        snakes.removeAttribute("class");
      }
      else {
        other.removeAttribute("class");
      }
    };   
  };