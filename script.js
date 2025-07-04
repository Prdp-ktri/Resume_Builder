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

let link = document.getElementById("linkURL");
let url = document.querySelector(".linkedinURL");

let yrs = document.getElementById("clg-yrs");
let clgName = document.getElementById("clg-name");
let uniName = document.getElementById("uni-name");
let degree = document.getElementById("dgr-name");
let clgYrs = document.querySelector(".clg-yrs");
let college = document.querySelector(".college");
let uni = document.querySelector(".university");
let dgrName = document.querySelector(".degree");

let sYrs = document.getElementById("scl-yrs");
let sclName = document.getElementById("scl-nm");
let bName = document.getElementById("board-nm");
let twelth = document.getElementById("12th");
let tenthBoard = document.getElementById("10th");
let sclYrs = document.querySelector(".school-yrs");
let sName = document.querySelector(".school-name");
let board = document.querySelector(".board");
let twelfth = document.querySelector(".twelfth-percent");
let tenth = document.querySelector(".tenth-percent");

let skills = document.getElementById("skills");
let skillful = document.querySelector(".skills-1");
let lang = document.getElementById("lang");
let languages = document.querySelector(".languages");

let imgPreview = document.getElementById("img-preview");
let imgUpload = document.getElementById("img-uploader");

let img2pdf = document.querySelector(".live-preview");

phnNum.addEventListener("keyup", insertData);
uName.addEventListener("keyup", insertData);
designation.addEventListener("keyup", insertData);
add.addEventListener("keyup", insertData);
Email.addEventListener("keyup", insertData);
link.addEventListener("keyup", insertData);

yrs.addEventListener("keyup", insertData);
clgName.addEventListener("keyup", insertData);
uniName.addEventListener("keyup", insertData);
degree.addEventListener("keyup", insertData);

sYrs.addEventListener("keyup", insertData);
sclName.addEventListener("keyup", insertData);
bName.addEventListener("keyup", insertData);
twelth.addEventListener("keyup", insertData);
tenthBoard.addEventListener("keyup", insertData);

skills.addEventListener("keyup", insertData);
lang.addEventListener("keyup", insertData);

function insertData() {
  phnD.innerHTML = phnNum.value;
  name.innerHTML = uName.value;
  post.innerHTML = designation.value;
  address.innerHTML = add.value;
  emailAddress.innerHTML = Email.value;
  url.href = link.value;
  clgYrs.innerHTML = yrs.value;
  college.innerHTML = clgName.value;
  uni.innerHTML = uniName.value;
  dgrName.innerHTML = degree.value;
  sclYrs.innerHTML = sYrs.value;
  sName.innerHTML = sclName.value;
  board.innerHTML = bName.value;
  twelfth.innerHTML = twelth.value;
  tenth.innerHTML = tenthBoard.value;
  skillful.innerHTML = skills.value;
  languages.innerHTML = lang.value;
  imgPreview.src = imgUpload.value.slice(-11);
}

// function downloadPDF() {
//   html2pdf().from(img2pdf).save("resume.pdf");
// }

function downloadPDF() {
  const element = document.getElementById("resume-content");

  const opt = {
    margin: 0,
    filename: "resume.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true, scrollX: 0, scrollY: 0 },
    jsPDF: { unit: "pt", format: "a4", orientation: "portrait" },
    pageBreak: { mode: ["avoid-all", "css", "legacy"] },
  };

  html2pdf().set(opt).from(element).save();
}

// imgPreview.src = imgUpload.value;
