

window.onscroll = function() {TitleShrink(), Indicator()};

// title shrink//
function TitleShrink() {
  var y = document.documentElement.scrollTop
  if (document.documentElement.scrollTop < 200) {  
    document.getElementById("cocktail-name").style.fontSize ="55px";
    document.getElementById("cocktail-name").style.color = "orange";
  } else { 
    document.getElementById("cocktail-name").style.fontSize = "0px";
    document.getElementById("cocktail-name").style.color = "black";
  }

  if (document.documentElement.scrollTop <1000) {  
    document.getElementById("title1").style.fontSize = ((y-450)/450)*45 + "px";
    document.getElementById("title1").style.color = "orange";
  } else { 
    document.getElementById("title1").style.fontSize = ((1200-y)/300)*55 + "px";
    document.getElementById("title1").style.color = "orange";
  } 

  if (document.documentElement.scrollTop <2400) {  
    document.getElementById("title2").style.fontSize = ((y-1800)/350)*45 + "px";
    document.getElementById("title2").style.color = "orange";
  } else { 
    document.getElementById("title2").style.fontSize = ((2800-y)/300)*45 + "px";
    document.getElementById("title2").style.color = "orange";
  } 

   if (document.documentElement.scrollTop <4200) {  
    document.getElementById("title3").style.fontSize = ((y-3800)/300)*45 + "px";
    document.getElementById("title3").style.color = "orange";
  } else { 
    document.getElementById("title3").style.fontSize = ((4500-y)/300)*45 + "px";
    document.getElementById("title3").style.color = "orange";
  } 

   if (document.documentElement.scrollTop <5600) {  
    document.getElementById("title4").style.fontSize = ((y-5200)/300)*45 + "px";
    document.getElementById("title4").style.color = "orange";
  } else { 
    document.getElementById("title4").style.fontSize = ((5900-y)/300)*45 + "px";
    document.getElementById("title4").style.color = "orange";
  } 


}



// process Indicator//

function Indicator() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
  var scrollPosition = document.documentElement.scrollTop;
  console.log(scrollPosition);
}


