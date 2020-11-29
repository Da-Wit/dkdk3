window.onkeydown = function () {
  const item = document.getElementById("item");

  if (event.keyCode === 39) {
    const td = item.parentNode;
    const target = td.nextSibling.nextSibling;
    console.log(target);
    console.log(td.nextSibling);
    if (target.className === "way") {
      target.appendChild(item);
    }
  }

  if (event.keyCode === 37) {
    const td = item.parentNode;
    const target = td.previousSibling.previousSibling;
    console.log(target);
    console.log(td.nextSibling);
    if (target.className === "way") {
      target.appendChild(item);
    }
  }

  if (event.keyCode === 38) {
    const td = item.parentNode;
    const tr = td.parentNode;
    const targetTr = tr.previousSibling.previousSibling;
    const tds = tr.children;
    const index = Array.prototype.indexOf.call(tds, td);
    const realTarget = targetTr.children[index];
    if (realTarget.className === "way") {
      realTarget.appendChild(item);
    }
  }
  if (event.keyCode === 40) {
    const td = item.parentNode;
    const tr = td.parentNode;
    const targetTr = tr.nextSibling.nextSibling;
    const tds = tr.children;
    const index = Array.prototype.indexOf.call(tds, td);
    const realTarget = targetTr.children[index];

    if (realTarget.className === "way") {
      realTarget.appendChild(item);
    }
  }
  // console.log(event.keyCode)
};
