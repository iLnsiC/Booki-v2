// Show map
var mapBtn = document.getElementsByClassName("map_btn")[0];
var map = document.getElementsByClassName("mapouter")[0];

function showMap() {
  if(map.style.display === ''){
    map.classList.toggle("active");
  }else {
    map.classList.toggle("active");
  }
}

mapBtn.addEventListener("click", showMap)
