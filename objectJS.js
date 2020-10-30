let codes = document.getElementById("codes");
let play = document.getElementById("play");
let remove = document.getElementById("remove");
let result = document.getElementById("result");

play.onclick = ()=>{
    result.innerHTML=codes.value;
    //اذا اردت تعمل خزن محلي
    localStorage.setItem("RESULT" , codes.value);
};
remove.onclick=()=>{
    result.innerHTML="";
    codes.value="";
};
onload=()=>{
    codes.value=localStorage.getItem("RESULT");
}