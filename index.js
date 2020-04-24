// Expand Images into the main image 
function showImage(imgs) {
    var expandImg = document.getElementById("expandedImg");
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
  }

  // select tab
  function openTab(tabName) {
    var i;
    var x = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    var x = document.getElementsByClassName("w3-bar-item");
    for (i = 0; i < x.length; i++) {
      x[i].style.color = "black";
    }
    document.getElementById(tabName).style.display = "block";
    document.getElementById(tabName + "Btn").style.color = "#ff3b3b"
  }

  //click dropdown to select size
  function openDropList() {
    document.getElementById("sizeDropdown").classList.toggle("show");
  }

  // Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// show the selected size on the button 
function selectItem(optionValue){
  document.querySelector("#sizebtn").textContent = optionValue.text;
}