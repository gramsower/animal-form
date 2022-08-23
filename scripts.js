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

    const input = document.querySelector("input#animal1input");

    if (input==="turtles") {
      turtles.removeAttribute("class");
    }
      else if (input==="insects") {
        insects.removeAttribute("class");
      }
      else if (input==="snakes") {
        snakes.removeAttribute("class");
      }
      else {
        other.removeAttribute("class");
      }
    };   
  };