window.addEventListener("scroll", (e) => {
  //Get how much has it scrolled
  let scrolled =
    document.documentElement.scrollTop /
    (document.documentElement.scrollHeight -
      document.documentElement.clientHeight);

  //Get the dom elements from the html file
  let $architecture = document.querySelector("#architecture");
  let $illustrations = document.querySelector("#illustrations");
  let $img1 = document.querySelector("#img1");
  let $img2 = document.querySelector("#img2");
  let $n = document.querySelector("#n");
  let $i = document.querySelector("#i");

  let $intro = document.querySelector(".intro");
  let $icon = document.querySelector("#icon");

  //Part1: make the heading blurred while scrolling down, and shift the text in different amounts
  if (scrolled >= 0.01) {
    $intro.style.filter = "blur" + "(" + scrolled * 2 + "px" + ")";
    $icon.style.transform =
      "translateY" + "(" + scrolled * -1 * 1800 + "px" + ")";
    $n.style.transform = "translateY" + "(" + scrolled * -1 * 1000 + "px" + ")";
    $i.style.transform = "translateY" + "(" + scrolled * -1 * 600 + "px" + ")";
  } else {
    $intro.style.filter = "blur" + "(" + 0 + "px" + ")";
  }

  //Part2: make the text changed while scrolling down
  if (scrolled >= 0.3 && scrolled <= 0.4) {
    $architecture.style.opacity = scrolled * -10 + 4;
    $architecture.style.transform =
      "translateY" + "(" + scrolled * 100 * -1 + "px" + ")";
    $illustrations.style.opacity = scrolled * 10 - 3;
    $illustrations.style.transform =
      "translateY" + "(" + scrolled * 400 * -1 + "px" + ")";
  } else if (scrolled < 0.3) {
    $architecture.style.opacity = 1;
    $illustrations.style.opacity = 0;
  } else {
    $architecture.style.opacity = 0;
    $illustrations.style.opacity = 1;
  }

  //Part3: make ui items fade in while scrolling down
  let rows = document.querySelectorAll("#ui ul li");
  let total = 1 / rows.length;

  //Calculate the interval of each item
  for (let [index, row] of rows.entries()) {
    let start = 0.65 + 0.2 * (total * index);
    let end = 0.65 + 0.2 * total * (index + 1);

    //Let the progress value be 0 at the beginning of each item and 1 at the end
    let progress = (scrolled - start) / (end - start);

    if (progress >= 1) {
      progress = 1;
    }

    if (progress <= 0) {
      progress = 0;
    }

    //Assigns a value to the specified CSS custom variable
    row.style.setProperty("--progress", progress);
  }
});
