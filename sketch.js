let rotateNum = 0;

function plateRotate(){
  rotateNum += 60;
  let plateControl = document.querySelector("#plate1");
  plateControl.setAttribute("style","transform: rotate(" + rotateNum + "deg);");
}

