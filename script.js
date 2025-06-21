let imgUpload = document.getElementById("img-uploader");
let picMain = document.getElementById("img-uploader");

let form1 = document.getElementById("form");

let phnNum = document.getElementById("phn");
let phnD = document.querySelector(".phnDigits");

let uName = document.getElementById("user-name");
let name = document.querySelector(".name");

let post = document.querySelector(".post");
let designation = document.getElementById("designation");

let add = document.getElementById("address");
let address = document.querySelector(".addressData");

let Email = document.getElementById("email");
let emailAddress = document.querySelector(".emailData");

phnNum.addEventListener("keyup", insertData);
uName.addEventListener("keyup", insertData);
designation.addEventListener("keyup", insertData);
add.addEventListener("keyup", insertData);
Email.addEventListener("keyup", insertData);

function insertData() {
  console.log();
  phnD.innerHTML = phnNum.value;
  name.innerHTML = uName.value;
  post.innerHTML = designation.value;
  address.innerHTML = add.value;
  emailAddress.innerHTML = Email.value;
}
