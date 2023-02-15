const circles = document.querySelectorAll("circle");
circles.forEach(function(circle){
  circle.addEventListener("mouseover", function(event) {
    event.target.setAttribute("fill", "yellow");
  });

  circle.addEventListener("mouseout", function(event) {
    event.target.setAttribute("fill", "purple");
  });


  circle.addEventListener("click", function(event) {
    event.target.setAttribute("fill", "green");
    event.target.setAttribute("fill", "green");
    const xCoord = event.target.getAttribute("cx");
    const yCoord = event.target.getAttribute("cy");
    if (circle.getAttribute("stroke")==null) {
      console.log(circle.getAttribute("stroke"));
      circle.setAttribute("stroke", "green");
      circle.setAttribute("stroke-width", 4);
    } else {
      circle.removeAttribute("stroke");
    }

    document.getElementById("coordinate-display").innerHTML= `Last point clicked<br> (${(xCoord - 20) / 20}, ${(200 - yCoord) / 20})`;
  })
})
document.getElementById("submit-button").addEventListener("click", function(event) {
    event.preventDefault();
    const x = document.getElementById("x-coordinate").value;
    const y = document.getElementById("y-coordinate").value;
    const xCoord = x * 20 + 20;
    const yCoord = 200 - y * 20;

    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", xCoord);
    circle.setAttribute("cy", yCoord);
    circle.setAttribute("r", 10);
    circle.setAttribute("fill", "purple");

    document.querySelector("svg").appendChild(circle);

    circle.addEventListener("mouseover", function(event) {
      event.target.setAttribute("fill", "yellow");
    });

    circle.addEventListener("mouseout", function(event) {
      event.target.setAttribute("fill", "purple");
    });

    circle.addEventListener("click", function(event) {
      event.target.setAttribute("fill", "green");
      event.target.setAttribute("fill", "green");
      const xCoord = event.target.getAttribute("cx");
      const yCoord = event.target.getAttribute("cy");
      if (circle.getAttribute("stroke")==null) {
        console.log(circle.getAttribute("stroke"));
        circle.setAttribute("stroke", "green");
        circle.setAttribute("stroke-width", 4);
      } else {
        circle.removeAttribute("stroke");
      }
      document.getElementById("coordinate-display").innerHTML= `Last point clicked<br> (${(xCoord - 20) / 20}, ${(200 - yCoord) / 20})`;
     
    });
  });