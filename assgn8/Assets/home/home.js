function setup() {}
function showCircle(cx, cy, radius) {
    let div = document.createElement('div');
    div.style.width = window.width;
    div.style.height = window.height;
    div.style.left = cx + 'px';
    div.style.top = cy + 'px';
    div.className = 'circle';
    document.body.append(div);

    setTimeout(() => {
      div.style.width = radius * 2 + 'px';
      div.style.height = radius * 2 + 'px';
    }, 0);
  }


