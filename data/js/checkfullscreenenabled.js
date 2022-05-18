
  function enabledFullScreen(){
  return(
    document.fullscreenEnabled || document.mozFullScreenEnabled || document.documentElement.webkitRequestFullScreen || document.msFullscreenEnabled
  );
}


var fullscreenbtn = document.getElementById("fullscreenbtn");

if(enabledFullScreen() != true){
  fullscreenbtn.remove()
}
