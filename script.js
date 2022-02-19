let login= document.getElementById("login");
let icon = document.getElementById("icon");
login.addEventListener("click", function()
{
    document.querySelector(".popup").style.display="flex";
})
icon.addEventListener("click", function()
{
    document.querySelector(".popup").style.display="none";
})