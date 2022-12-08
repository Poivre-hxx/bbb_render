//获取文件路径的后缀，为小写
function getFileSuffix(filePath) {
  var index = filePath.lastIndexOf(".");
  var suffix = filePath.substr(index + 1);
  return suffix.toLowerCase();
}

  var demFile = document.getElementById('demFile');
  if (!demFile) {
    console.log("Failed to get demFile element!");
    return;
  }

  //加载文件后的事件
  demFile.addEventListener("change", function (event) {
    //判断浏览器是否支持FileReader接口
    if (typeof FileReader == 'undefined') {
      console.log("你的浏览器不支持FileReader接口！");
      return;
    }

    //读取文件后的事件
    var reader = new FileReader();
    reader.onload = function () {
      if (reader.result) {
        var gltfObj = JSON.parse(reader.result);
        for (var fi = 0; fi < input.files.length; fi++) {
          console.log(input.files[fi]);
          //读取bin文件
          if (gltfObj.buffers[0].uri === input.files[fi].name) {
            var binReader = new FileReader();
            binReader.onload = function () {
              if (binReader.result) {
                for (var fi = 0; fi < input.files.length; fi++) {
                  if (gltfObj.images[0].uri === input.files[fi].name) {
                    //读取纹理图像   
                    var imgReader = new FileReader();

                    imgReader.onload = function () {
                      //创建一个image对象
                      var image = new Image();
                      if (!image) {
                        console.log('Failed to create the image object');
                        return false;
                      }

                      //图像加载的响应函数 
                      image.onload = function () {
                        //绘制函数
                        onDraw(gl, canvas, gltfObj, binReader.result, image);
                      };

                      //浏览器开始加载图像
                      image.src = imgReader.result;
                    }

                    imgReader.readAsDataURL(input.files[fi]); //按照base64格式读取
                    break;
                  }
                }
              }
            }
            binReader.readAsArrayBuffer(input.files[fi]);    //按照ArrayBuffer格式读取
            break;
          }
        }
      }
    }

    var input = event.target;

    var flag = false;
    for (var fi = 0; fi < input.files.length; fi++) {
      if (getFileSuffix(input.files[fi].name) === "gltf") {
        flag = true;
        reader.readAsText(input.files[fi]);      //按照字符串格式读取
        break;
      }
    }

    if (!flag) {
      alert("没有找到gltf");
    }
  });
