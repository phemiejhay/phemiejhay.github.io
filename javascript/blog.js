function toggleSection() {
    var section = document.getElementById("hiddenSection");
    var button = document.getElementById("toggleButton");

    if (section.style.display === "none") {
      section.style.display = "block";
      button.style.display = "none"; // Hide the button when section is displayed
    } else {
      section.style.display = "none";
      button.style.display = "block"; // Show the button when section is hidden
    }
  }


  // Check the initial state of the section when the page loads
  
  window.onload = function() {
    var section = document.getElementById("hiddenSection");
    var button = document.getElementById("toggleButton");

    if (section.style.display === "block") {
      section.style.display = "none";
      button.style.display = "block"; // Show the button when section is hidden
    }
  };



  function toggleSection1() {
    var section = document.getElementById("hiddenSection1");
    var button = document.getElementById("toggleButton1");

    if (section.style.display === "none") {
      section.style.display = "block";
      button.style.display = "none"; // Hide the button when section is displayed
    } else {
      section.style.display = "none";
      button.style.display = "block"; // Show the button when section is hidden
    }
  }



  function toggleSection2() {
    var section = document.getElementById("hiddenSection2");
    var button = document.getElementById("toggleButton2");

    if (section.style.display === "none") {
      section.style.display = "block";
      button.style.display = "none"; // Hide the button when section is displayed
    } else {
      section.style.display = "none";
      button.style.display = "block"; // Show the button when section is hidden
    }
  }