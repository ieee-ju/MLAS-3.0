const firebaseConfig = {
  apiKey: "AIzaSyCYRRcEvLeRFGGlpYypL_Ry08szBbCyc8k",
  authDomain: "mlas3dot0.firebaseapp.com",
  databaseURL: "https://mlas3dot0-default-rtdb.firebaseio.com",
  projectId: "mlas3dot0",
  storageBucket: "mlas3dot0.appspot.com",
  messagingSenderId: "822080675310",
  appId: "1:822080675310:web:d5f7b69bce8c175a0342ff"
};

firebase.initializeApp(firebaseConfig);

var contactFormDB = firebase.database().ref("contactForm1");

document.getElementById("contactForm1").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var first_name = getElementVal("first_name");
  var middle_name = getElementVal("middle_name");
  var last_name = getElementVal("last_name");
  var emailid = getElementVal("emailid");
  //   var msgContent = getElementVal("msgContent");
  var phone = getElementVal("phone");
  // var age = getElementVal("age");
  var Tshirt = getElementVal("Tshirt");
  var year = getElementVal("year");
  var dept = getElementVal("dept");
  // var pin = getElementVal("pin");
  // var college = getElementVal("college");
  var day = getElementVal("day");
  var food = getElementVal("food");
  // var ieeecs = getElementVal("ieeecs");
  var online = getElementVal("online");
  // var reg_no = getElementVal("reg_no");

  saveMessages(
    first_name,
    middle_name,
    last_name,
    emailid,
    phone,
    // age,
    Tshirt,
    year,
    dept,
    day,
    food,
    // ieeecs,
    online,
    // reg_no
  );
  // document.querySelector(".alert").style.display = "block";

  // setTimeout(() => {
  //   document.querySelector(".alert").style.display = "none";
  // }, 3000);

  window.location.href = "thanks.html";

  document.getElementById("contactForm1").reset();
}

const saveMessages = (
  first_name,
  middle_name,
  last_name,
  emailid,
  phone,
  // age,
  Tshirt,
  year,
  dept,
  day,
  food,
  // ieeecs,
  online,
  // reg_no
) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    first_name: first_name,
    middle_name: middle_name,
    last_name: last_name,
    emailid: emailid,
    phone: phone,
    // age: age,
    Tshirt: Tshirt,
    year: year,
    dept: dept,
    day: day,
    food: food,
    // ieeecs: ieeecs,
    online: online,
    // reg_no: reg_no,
  });
};

const getElementVal = (id) => {
  // console.log(id)
  console.log(document.getElementById(id).value)
  return document.getElementById(id).value;
};
