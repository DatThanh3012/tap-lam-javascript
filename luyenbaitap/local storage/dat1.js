const Name = document.getElementById("name");
const btn = document.getElementById("btn");
const nameelement = document.getElementById("ten");
const input = document.getElementById("text");

const dataname = localStorage.getItem("lcname");
if(dataname) {
    nameelement.innerText= dataname ;
}
btn.addEventListener("click",  () => {
    // console.log(input.value);
    localStorage.setItem("lcname", input.value)
    ten.innerText = input.value
})
