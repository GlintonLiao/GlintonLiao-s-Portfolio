window.addEventListener("scroll", (e) => {
    let scrolled = document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight);


    let $architecture = document.querySelector("#architecture");
    let $illustrations = document.querySelector("#illustrations");
    let $img1 = document.querySelector("#img1");
    let $img2 = document.querySelector("#img2");
    let $n = document.querySelector("#n");
    let $i = document.querySelector("#i");

    let $intro = document.querySelector(".intro");
    let $icon = document.querySelector("#icon");


    
    if (scrolled >= 0.01) {
        $intro.style.filter = "blur" + "(" + scrolled * 1.5 + "px"+ ")"; 
        $icon.style.transform = "translateY" + "(" + scrolled * -1 * 1200 + "px" + ")";
        $n.style.transform = "translateY" + "(" + scrolled * -1 * 1000 + "px" + ")";
        $i.style.transform = "translateY" + "(" + scrolled * -1 * 600 + "px" + ")";
    } else {
        $intro.style.filter = "blur" + "(" + 0 + "px"+ ")";
    };


    if (scrolled >= 0.3 && scrolled <= 0.4) {
        $architecture.style.opacity = scrolled * -10 + 4;
        $architecture.style.transform = "translateY" + "(" + scrolled * 100 * -1 + "px" + ")";
        $illustrations.style.opacity = scrolled * 10 - 3;
        $illustrations.style.transform = "translateY" + "(" + scrolled * 400 * -1 + "px" + ")";
    } else if (scrolled < 0.3){
        $architecture.style.opacity = 1;
        $illustrations.style.opacity = 0;
    } else {
        $architecture.style.opacity = 0;
        $illustrations.style.opacity = 1;
    };






});

const rows = document.querySelectorAll("#ui ul li");
const html = document.documentElement;

document.addEventListener("scroll", (e) => {
  let scrolled = html.scrollTop / (html.scrollHeight - html.clientHeight);

  let total = 1 / rows.length;

  for (let [index, row] of rows.entries()) {
    let start = total * index;
    let end = total * (index + 1);

    let progress = (scrolled - start) / (end - start);
    if (progress >= 1) progress = 1;
    if (progress <= 0) progress = 0;

    row.style.setProperty("--progress", progress);
  }
});

