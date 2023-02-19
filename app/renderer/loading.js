//以下是加载进度代码
// var MTLNUMBER = 5;
// var OBJNUMBER = 17;

var numTime = 0;

var processing = setInterval(function () {
  // for (ii = 0; ii < 22; ii++) {
  //   if (!!objArray[ii]) objOK++;
  // }

  numTime += Math.random() * 5;
  var percentage = numTime.toFixed(2);
  getById('percentage').innerHTML = '加载中...' + percentage + '%';

  if (numTime >= 100) {
    getById('processing').style.display = 'none';
    clearInterval(processing);
  }
}, 10);

function getById(value) {
  return document.getElementById(value);
}
