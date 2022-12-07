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
function changeForm() {
  let spanForm = document.getElementById('spanForm');
  let Str = spanForm.innerHTML;
  if (Str === '上帝视角') {
    spanForm.innerHTML = '玩家视角';
  } else {
    spanForm.innerHTML = '上帝视角';
  }
}
