function activeClass(e) {
  e.preventDefault();
  var parent = document.getElementById("checking");
  var child = parent.getElementsByTagName("li");
  console.log("child", child);
  for (var key in child) {
    if (child[key].nodeType === 1) {
      child[key].classList.remove("active");
      break;
    }
  }
  e.target.classList.add("active");
}
