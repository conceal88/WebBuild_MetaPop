const container = document.getElementById("unityContainer")
const dummy = document.getElementById("dummyContainer")

const coverElement = document.getElementById("comfirmCover");
const link_yes = document.getElementById("linkconfirm_yes");
const link_no = document.getElementById("linkconfirm_no");
const link_desc = document.getElementById("linkconfirm_desc");

console.log(coverElement);
coverElement.onclick = CloseComfirmation;
link_no.onclick = CloseComfirmation;

checkOrientation();

window.addEventListener("orientationchange", function() {
  checkOrientation();
  // alert(orientation + "\n" + container.style.display);
});

function checkOrientation() {

  /* 向き切り替え時の処理 */
  var orientation = window.orientation;

  if (orientation === 0) {
    /*  縦画面時の処理  */
    container.style.display = "none";
    dummy.style.display = "block";

  } else {
    /*  横画面時の処理  */
    container.style.display = "block";
    dummy.style.display = "none";
  }
  // console.log(orientation);
};

function CloseComfirmation() {
  console.log("CloseComfirmation();");
  coverElement.style.display = "none";
};

function OpenConfirmation(url,name) {
  console.log("OpenComfirmation();");
  link_yes.href = url;
  link_desc.innerHTML = name + "に移動します。";
  coverElement.style.display = "block";
}
