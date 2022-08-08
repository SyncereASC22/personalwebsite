document.addEventListener("scroll", handleScroll);

function handleScroll(){
    let red = document.querySelector("#red");

function handleScroll() {
  let scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let GOLDEN_RATIO = 0.5;

  if ((document.documentElement.scrollTop / scrollableHeight ) > GOLDEN_RATIO) {
    //show button
    red.style.display = "block";
  } else {
    //hide button
    red.style.display = "none";
  }
}
}

red.addEventListener("click", scrollToTop);

function scrollToTop(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
