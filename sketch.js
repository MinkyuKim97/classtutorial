let rotateNum = 0;

function plateRotate(){
  rotateNum += 60;
  let plateControl = document.querySelector("#plate1");
  plateControl.setAttribute("style","transform: rotate(" + rotateNum + "deg);");
}

// -- animation1 collection

function animation1(){
  let animation1Start = document.querySelector("#section1");
  animation1Start.setAttribute("style","background-image: url('assets/main_page/disk_1_ani.gif');");
  setTimeout(function(){
    window.location.href = "work_page1.html";
  },2000);
 }

 function animation1BasicOn(){
  let animation1On = document.querySelector("#allkustom_logo");
  animation1On.setAttribute('src','assets/main_page/none.png');
  let animation1Top = document.querySelector("#section1");
  animation1Top.setAttribute("style","background-image: url('assets/main_page/disk_1_screen_ani.gif');");
  }

 function animation1BasicOff(){
  let animation1Off = document.querySelector("#allkustom_logo");
  animation1Off.setAttribute('src','assets/main_page/allkustom_logo.gif');
  let animation1Down = document.querySelector("#section1");
  animation1Down.setAttribute("style","background-image: url('assets/main_page/BG_1.png');");
  
}

 // -- animation2 collection 

 function animation2(){
  let animation2Start = document.querySelector("#section1");
  animation2Start.setAttribute("style","background-image: url('assets/main_page/disk_2_ani.gif');");
  setTimeout(function(){
    window.location.href = "work_page2.html";
  },2000);
 }

 function animation2BasicOn(){
  let animation2On = document.querySelector("#allkustom_logo");
  animation2On.setAttribute('src','assets/main_page/none.png');
  let animation2Top = document.querySelector("#section1");
  animation2Top.setAttribute("style","background-image: url('assets/main_page/disk_2_screen_ani.gif');");
}

 function animation2BasicOff(){
  let animation2Off = document.querySelector("#allkustom_logo");
  animation2Off.setAttribute('src','assets/main_page/allkustom_logo.gif');
  let animation2Down = document.querySelector("#section1");
  animation2Down.setAttribute("style","background-image: url('assets/main_page/BG_1.png');");
 }


 // -- animation3 collection

 function animation3(){
  let animation3Start = document.querySelector("#section1");
  animation3Start.setAttribute("style","background-image: url('assets/main_page/video_ani.gif');");
  setTimeout(function(){
    window.location.href = "work_page3.html";
  },2000);
 }

 function animation3BasicOn(){
  let animation3On = document.querySelector("#allkustom_logo");
  animation3On.setAttribute('src','assets/main_page/none.png');
  let animation3Top = document.querySelector("#section1");
  animation3Top.setAttribute("style","background-image: url('assets/main_page/video_screen_ani.gif');");
 }

 function animation3BasicOff(){
  let animation3Off = document.querySelector("#allkustom_logo");
  animation3Off.setAttribute('src','assets/main_page/allkustom_logo.gif');
  let animation3Down = document.querySelector("#section1");
  animation3Down.setAttribute("style","background-image: url('assets/main_page/BG_1.png');");
 }


 // -- animation4 collection

 function animation4(){
  let animation4Start = document.querySelector("#section1");
  animation4Start.setAttribute("style","background-image: url('assets/main_page/cassette_ani.gif');");
  setTimeout(function(){
    window.location.href = "work_music.html";
  },2000);
 }

 function animation4BasicOn(){
  let animation4On = document.querySelector("#allkustom_logo");
  animation4On.setAttribute('src','assets/main_page/none.png');
  let animation4Top = document.querySelector("#section1");
  animation4Top.setAttribute("style","background-image: url('assets/main_page/cassette_screen_ani.gif');");
 }

 function animation4BasicOff(){
  let animation4Off = document.querySelector("#allkustom_logo");
  animation4Off.setAttribute('src','assets/main_page/allkustom_logo.gif');
  let animation4Down = document.querySelector("#section1");
  animation4Down.setAttribute("style","background-image: url('assets/main_page/BG_1.png');");
 }


 // -- animation5 collection

 function animation5(){
  let animation5Start = document.querySelector("#section1");
  animation5Start.setAttribute("style","background-image: url('assets//main_page/key_ani.gif');");
  setTimeout(function(){
    window.location.href = "work_page4.html";
  },2000);
 }

 function animation5BasicOn(){
  let animation5On = document.querySelector("#allkustom_logo");
  animation5On.setAttribute('src','assets/main_page/none.png');
  let animation5Top = document.querySelector("#section1");
  animation5Top.setAttribute("style","background-image: url('assets/main_page/key_screen_ani.gif');");  
 }

 function animation5BasicOff(){
  let animation5Off = document.querySelector("#allkustom_logo");
  animation5Off.setAttribute('src','assets/main_page/allkustom_logo.gif');
  let animation5Down = document.querySelector("#section1");
  animation5Down.setAttribute("style","background-image: url('assets/main_page/BG_1.png');");
 }



 function scroll_left1(){
  let scrollleft = document.querySelector(".media-scroller1");
  scrollleft.scrollBy({
    left: -100,
    behavior: "smooth",
  });
 }
 function scroll_right1(){
  let scrollright = document.querySelector(".media-scroller1");
  scrollright.scrollBy({
    left: 100,
    behavior: "smooth",
  });
 }

 function scroll_left2(){
  let scrollleft = document.querySelector(".media-scroller2");
  scrollleft.scrollBy({
    left: -100,
    behavior: "smooth",
  });
 }
 function scroll_right2(){
  let scrollright = document.querySelector(".media-scroller2");
  scrollright.scrollBy({
    left: 100,
    behavior: "smooth",
  });
 }

 function scroll_left3(){
  let scrollleft = document.querySelector(".media-scroller3");
  scrollleft.scrollBy({
    left: -100,
    behavior: "smooth",
  });
 }
 function scroll_right3(){
  let scrollright = document.querySelector(".media-scroller3");
  scrollright.scrollBy({
    left: 100,
    behavior: "smooth",
  });
 }

 function scroll_left4(){
  let scrollleft = document.querySelector(".media-scroller4");
  scrollleft.scrollBy({
    left: -100,
    behavior: "smooth",
  });
 }
 function scroll_right4(){
  let scrollright = document.querySelector(".media-scroller4");
  scrollright.scrollBy({
    left: 100,
    behavior: "smooth",
  });
 }

 function scroll_left5(){
  let scrollleft = document.querySelector(".media-scroller5");
  scrollleft.scrollBy({
    left: -100,
    behavior: "smooth",
  });
 }
 function scroll_right5(){
  let scrollright = document.querySelector(".media-scroller5");
  scrollright.scrollBy({
    left: 100,
    behavior: "smooth",
  });
 }

 function scroll_left6(){
  let scrollleft = document.querySelector(".media-scroller6");
  scrollleft.scrollBy({
    left: -100,
    behavior: "smooth",
  });
 }
 function scroll_right6(){
  let scrollright = document.querySelector(".media-scroller6");
  scrollright.scrollBy({
    left: 100,
    behavior: "smooth",
  });
 }

