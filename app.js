const txts = ["mom", "geeky","hero"];
let index = 0;

function fun() {
  if (index === txts.length) {
  } else {
    let txt = txts[index];
    const words = txt.slice();
    const domWords = document.querySelector(".words");
    let counter = 0;

    let intervalId = setInterval(show, 300);

    function show() {
      if (counter === words.length) {
        clearInterval(intervalId);
        index++;
        console.log(txts[index]);
        if (index === txts.length) {
        } else {
          domWords.textContent = "";
        }
        fun();
        return;
      } else {
        console.log(words[counter]);
        domWords.textContent += words[counter];
        counter++;
      }
    }
  }
}
fun();
