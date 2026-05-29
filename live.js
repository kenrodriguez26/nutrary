
const auth = firebase.auth();

auth.onAuthStateChanged((user)=>{
if(!user){
window.location.href = "index.html";
}
});

document.getElementById("logoutBtn").addEventListener("click", async()=>{
await auth.signOut();
window.location.href = "index.html";
});
