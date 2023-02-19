function changeLight() {
  let spanLight = document.getElementById('spanLight');
  let Str = spanLight.innerHTML;
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
function changeFog() {
  let spanFog = document.getElementById('spanFog');
  let Str = spanFog.innerHTML;
  if (Str === '雾') {
    spanFog.innerHTML = '晴朗';
  } else {
    spanFog.innerHTML = '雾';
  }
}