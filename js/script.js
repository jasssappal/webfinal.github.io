

var form = document.getElementById("contactform");

form.onsubmit = function () {
  const post = postCheck(form.post.value.trim());
  if (post) return true;
  else
    document.getElementById("postinvalid").innerHTML = "Postal Code Invalid!";

  return false;
};

var question = document.getElementById("question");
var comment = document.getElementById("comment");
var hire = document.getElementById("hire");

question.onclick = function () {
  togglePay();
};

comment.onclick = function () {
  togglePay();
};

hire.onclick = function () {
  togglePay();
};

function togglePay() {
  const pr = document.getElementById("payrate");
  if (form.hire.checked) {
    pr.style.display = "block";
  } else pr.style.display = "none";
}

function postCheck(code) {
  // rules: https://www150.statcan.gc.ca/n1/pub/92-154-g/2015001/tech-eng.htm
  return /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ ]?\d[ABCEGHJ-NPRSTV-Z]\d$/i.test(
    code
  );
}
