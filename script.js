var cubes = document.querySelectorAll(".item");

for (var i = 0; i < cubes.length; i++) {
  cubes[i].addEventListener("mousedown", function (event) {
    console.log(this,event)
    this.startX = event.clientX;
    this.startY = event.clientY;
  });

  cubes[i].addEventListener("mousemove", function (event) {
    if (this.startX) {
      this.style.left = `${this.startX - event.clientX}px`;
      this.style.top = `${this.startY - event.clientY}px`;
    }
  });

  cubes[i].addEventListener("mouseup", function (event) {
    this.startX = null;
    this.startY = null;
  });
}
