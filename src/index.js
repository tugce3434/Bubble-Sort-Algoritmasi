const container = document.querySelector(".data-container");


function generateBlocks(num = 20) {

  
  for (let i = 0; i < num; i += 1) {
    const value = Math.floor(Math.random() * 100);

    const block = document.createElement("div");
    block.classList.add("block");
    block.style.height = `${value * 3}px`;
    block.style.transform = `translateX(${i * 30}px)`;

    const blockLabel = document.createElement("label");
    blockLabel.classList.add("block__id");
    blockLabel.innerHTML = value;

    block.appendChild(blockLabel);
    container.appendChild(block);
  }
}

function swap(el1, el2) {
  return new Promise(resolve => {
    const style1 = window.getComputedStyle(el1);
    const style2 = window.getComputedStyle(el2);

    const transform1 = style1.getPropertyValue("transform");
    const transform2 = style2.getPropertyValue("transform");

    el1.style.transform = transform2;
    el2.style.transform = transform1;

    // Geçişin bitmesini bekleyin!!
    window.requestAnimationFrame(function() {
      setTimeout(() => {
        container.insertBefore(el2, el1);
        resolve();
      }, 250);
    });
  });
}





function karmasiklik(siraliMi){
  if (siraliMi) {
		$("#karmasiklik").html("O(n)")
	} else {
		$("#karmasiklik").html("O(n²)")
	}
}

async function bubbleSort(delay = 700) {
  let siraliMi= true;
  if (delay && typeof delay !== "number") {
    
    return;
  }

  let blocks = document.querySelectorAll(".block");
  for (let i = 0; i < blocks.length - 1; i += 1) {

    for (let j = 0; j < blocks.length - i - 1; j += 1) {
      blocks[j].style.backgroundColor = "#FFFF00";
      blocks[j + 1].style.backgroundColor = "#FFFF00";


      await new Promise(resolve =>
        setTimeout(() => {
          resolve();
        }, delay)
      );

      const value1 = Number(blocks[j].childNodes[0].innerHTML);
      const value2 = Number(blocks[j + 1].childNodes[0].innerHTML);

      var e = "<hr/>";
      var d = "<hr/>";
      e += "if( " + value1 + " >" + value2 + ")" + "<br/>" + "swap(" + value1 + "," + value2 + ")";
      d +=  value1 + ">" + value2 + " olup olmadığını kontrol edin ve bu doğruysa onları değiştirin."
      document.getElementById("Result").innerHTML = e;
      document.getElementById("Start").innerHTML = d;

      if (value1 > value2) {
        await swap(blocks[j], blocks[j + 1]);
        blocks = document.querySelectorAll(".block");
        karmasiklik(siraliMi=false)

     
      }


      blocks[j].style.backgroundColor = "#FF1493";
      blocks[j + 1].style.backgroundColor = "#FF1493";
    }

    blocks[blocks.length - i - 1].style.backgroundColor = "#00FFFF";


  }
  karmasiklik(siraliMi)
  siraliMi=true
 
}
generateBlocks();
function baslat(){
 
bubbleSort();

}


var modal = $("#myModal")[0];
var btn = $("#myBtn")[0];
var span = $(".close")[0];;
modal.style.display = "block";
btn.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
