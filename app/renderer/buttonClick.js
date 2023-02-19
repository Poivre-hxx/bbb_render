function changeLight() {
  let spanLight = document.getElementById('spanLight');
  let Str = spanLight.innerHTML;
  console.log(Str);
  if (Str === '开灯') {
    spanLight.innerHTML = '关灯';
  } else {
    spanLight.innerHTML = '开灯';
  }
}
function changeFormZ() {
  let spanForm = document.getElementById('spanFormZ');
  let Str = spanForm.innerHTML;
  if (Str === '自转开') {
    spanForm.innerHTML = '自转关';
  } else {
    spanForm.innerHTML = '自转开';
  }
}
function changeFormG() {
  let spanForm = document.getElementById('spanFormG');
  let Str = spanForm.innerHTML;
  if (Str === '公转开') {
    spanForm.innerHTML = '公转关';
  } else {
    spanForm.innerHTML = '公转开';
  }
}
function changeStre() {
  let spanStre = document.getElementById('spanStre');
  let Str = spanStre.innerHTML;
  if (Str === '描边开') {
    spanStre.innerHTML = '描边关';
  } else {
    spanStre.innerHTML = '描边开';
  }
}