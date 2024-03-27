
for (let i = 1; i <= 100; i++) {
    let text;
    let bgclass;
    if(i % 3 === 0 && i % 5 === 0){
        text = "Fizz Buzz";
        bgclass = "fizz-buzz"
    }else if(i % 3 === 0){
        text = "Fizz";
        bgclass = "fizz"
    }else if (i % 5 === 0){
        text = "Buzz";
        bgclass = "buzz"
    }else{
        text = i
    }
    console.log(i, text);
    // PRINT-BOX
    let innerdiv = document.createElement("div")
    innerdiv.classList.add("box")
    innerdiv.classList.add(`${bgclass}`)
    document.querySelector(".row").append(innerdiv)
    innerdiv.innerHTML = `<span class="number">${text}</span>`
    // COLOR-CHANGE
}