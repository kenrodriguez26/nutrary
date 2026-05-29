
const db = firebase.firestore();

db.collection("sessions").get().then(snapshot=>{
document.getElementById("totalUsers").innerHTML = snapshot.size;
});
