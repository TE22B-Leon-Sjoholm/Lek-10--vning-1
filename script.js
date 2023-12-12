let rubrik = document.querySelector("h1");
rubrik.textContent="aaaaa";

let p = document.querySelector("p");
p.textContent="Fan vad lätt";

let text = document.querySelector(".text");
text.style.border="4px solid black"
text.style.marginLeft="10wv";
text.style.marginRight="10wv";

rubrik.classList.add("xtra");
document.body.style.backgroundColor="#3822b6";

let listan = document.querySelector("ul");
let li_1 = document.createElement("li");

li_1.textContent="Lära javascript syntax";
listan.appendChild(li_1);

let li_2 = document.createElement("li");
li_2.textContent = "Lära document objektet";
listan.appendChild(li_2);


listan.style.display="flex";
listan.style.flexDirection="column";
listan.style.alignItems="center";
let li_array = document.querySelectorAll("li");

for (let i=0; i < li_array.length; i++) {
    li_array[i].style.fontWeight="bold";
}