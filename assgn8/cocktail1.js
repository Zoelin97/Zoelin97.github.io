window.onscroll = function() {TitleShrink(), Indicator()};

// shrink title
function TitleShrink() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.getElementById("name-bg").style.padding = "200px 0px";
    document.getElementById("cocktail-name").style.fontSize = "35px";
    document.getElementById("cocktail-name").style.color = "#fc6b03";
  } else {
    document.getElementById("name-bg").style.padding = "300px 0px";
    document.getElementById("cocktail-name").style.fontSize = "55px";
    document.getElementById("cocktail-name").style.color = "orange";
  }
}

// progress bar
function Indicator() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

 // draw circle
// function showCircle(cx, cy, radius) {
//     let div = document.createElement('div');
//     div.style.width = window.width;
//     div.style.height = window.height;
//     div.style.left = cx + 'px';
//     div.style.top = cy + 'px';
//     div.className = 'circle';
//     document.body.append(div);

//     setTimeout(() => {
//       div.style.width = radius * 2 + 'px';
//       div.style.height = radius * 2 + 'px';
//     }, 0);
//   }
