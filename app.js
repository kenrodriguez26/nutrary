
const auth = firebase.auth();
const db = firebase.firestore();

const form = document.getElementById("loginForm");

function getDeviceId(){
let deviceId = localStorage.getItem("deviceId");

if(!deviceId){
deviceId = crypto.randomUUID();
localStorage.setItem("deviceId", deviceId);
}

return deviceId;
}

form.addEventListener("submit", async(e)=>{

e.preventDefault();

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

try{

const result = await auth.signInWithEmailAndPassword(email,password);
const user = result.user;

const deviceId = getDeviceId();

const sessionRef = db.collection("sessions").doc(user.uid);
const existing = await sessionRef.get();

if(existing.exists){

const data = existing.data();

if(data.deviceId !== deviceId){
alert("Cuenta activa en otro dispositivo");
await auth.signOut();
return;
}
}

await sessionRef.set({
email:user.email,
deviceId:deviceId,
login:new Date().toISOString()
});

fetch("https://script.google.com/macros/s/AKfycbxw61NpHK62Pte7Byh529ccxgu_aceUhqZCWB7paid3AqYCPoCYl-12y5fpakgtY_jkZw/exec",{
method:"POST",
body:JSON.stringify({
email:user.email,
deviceId:deviceId,
login:new Date().toISOString()
})
});

window.location.href = "live.html";

}catch(err){
alert(err.message);
}

});
