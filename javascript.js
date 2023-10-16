// 获取外层容器 
const shell = document.querySelector('.boxs');
// 获取所有子元素 
const cells = shell.querySelectorAll('.box');
// 获取容器宽度 
const cellWidth = shell.offsetWidth;
// 获取容器高度 
const cellHeight = shell.offsetHeight;
// 设置子元素大小为容器高度 
const cellSize = cellHeight;
// 子元素数量 
const cellCount = 10;
// 当前选中的子元素索引 
let selectedIndex = 0;
document.body.style.backgroundImage = 'url(' + "./img/1.jpg" + ')';
// 计算半径 
const radius = Math.round((cellSize / 1.8) / Math.tan(Math.PI / cellCount));
// 计算每个子元素的角度 
const theta = 360 / cellCount;
function rotateshell() {
  // 计算旋转角度 
  const angle = theta * selectedIndex * -1;
  // 设置容器的旋转和平移效果 
  shell.style.transform = 'translateZ(' + -radius + 'px) ' + 'rotateX(' + -angle + 'deg)' + 'rotateY(' + -angle + 'deg)';
  // 计算当前选中的子元素索引 
  const cellIndex = selectedIndex < 0 ? (cellCount - ((selectedIndex * -1) % cellCount)) : (selectedIndex % cellCount);
  cells.forEach((cell, index) => {
    if (cellIndex === index) {
      // 添加选中样式 
      cell.classList.add('selected');
    } else {
      // 移除选中样式 
      cell.classList.remove('selected');
    }
  });
}
function selectPrev() {
  // 选中上一个子元素 
  selectedIndex--;
  if ((selectedIndex < 0 ? (cellCount - ((selectedIndex * -1) % cellCount)) + 1 : (selectedIndex % cellCount) + 1) == 7 || (selectedIndex < 0 ? (cellCount - ((selectedIndex * -1) % cellCount)) + 1 : (selectedIndex % cellCount) + 1) == 8) {
    document.body.style.backgroundImage = 'url(' + "./img/" + (selectedIndex < 0 ? (cellCount - ((selectedIndex * -1) % cellCount)) + 1 : (selectedIndex % cellCount) + 1) + ".gif" + ')';
  }
  else document.body.style.backgroundImage = 'url(' + "./img/" + (selectedIndex < 0 ? (cellCount - ((selectedIndex * -1) % cellCount)) + 1 : (selectedIndex % cellCount) + 1) + ".jpg" + ')';
  // 旋转容器 
  rotateshell();

}
function selectNext() {
  // 选中下一个子元素 
  selectedIndex++;
  if ((selectedIndex < 0 ? (cellCount - ((selectedIndex * -1) % cellCount)) + 1 : (selectedIndex % cellCount) + 1) == 7 || (selectedIndex < 0 ? (cellCount - ((selectedIndex * -1) % cellCount)) + 1 : (selectedIndex % cellCount) + 1) == 8) {
    document.body.style.backgroundImage = 'url(' + "./img/" + (selectedIndex < 0 ? (cellCount - ((selectedIndex * -1) % cellCount)) + 1 : (selectedIndex % cellCount) + 1) + ".gif" + ')';
  }
  else document.body.style.backgroundImage = 'url(' + "./img/" + (selectedIndex < 0 ? (cellCount - ((selectedIndex * -1) % cellCount)) + 1 : (selectedIndex % cellCount) + 1) + ".jpg" + ')';
  // 旋转容器 
  rotateshell();
}
// 获取上一个按钮 
const prevButton = document.querySelector('.up');
// 绑定点击事件 
prevButton.addEventListener('click', selectPrev);
// 获取下一个按钮 
const nextButton = document.querySelector('.next');
// 绑定点击事件 
nextButton.addEventListener('click', selectNext);
function initshell() {
  cells.forEach((cell, i) => {
    // 计算每个子元素的角度 
    const cellAngle = theta * i;
    // 设置每个子元素的旋转和平移效果 
    cell.style.transform = 'rotateX(' + -cellAngle + 'deg) translateZ(' + radius + 'px)';
  });
  // 初始化旋转容器 
  rotateshell();
}
// 调用初始化函数
initshell();


// -------------------------------------------------------------
// 首先，通过querySelector方法获取到class为"boxs"的元素，并将其赋值给变量shell。然后，通过shell元素的querySelectorAll方法获取到class为"box"的所有子元素，并将其赋值给变量cells。

// 接下来，通过shell元素的offsetWidth和offsetHeight属性获取到立方体的宽度和高度，并将其赋值给变量cellWidth和cellHeight。由于立方体是正方形，所以将cellHeight赋值给cellSize。

// 然后，定义了一个变量cellCount，表示立方体的边数，这里设定为23。

// 接下来，通过数学计算得到了立方体的半径radius和每个面之间的夹角theta。

// 然后，定义了一个变量selectedIndex，表示当前选中的面的索引，默认为0。

// 接下来，定义了一个函数rotateshell，用来旋转立方体。首先，根据选中面的索引和夹角计算出旋转的角度angle。然后，通过设置shell元素的transform属性实现立方体的旋转效果。接着，根据选中面的索引，给对应的子元素添加selected类，其余子元素移除selected类。

// 然后，定义了两个函数selectPrev和selectNext，分别用来选择上一个和下一个面。这两个函数分别将selectedIndex减一和加一，并调用rotateshell函数来更新立方体的显示。

// 接下来，通过querySelector方法获取到class为"up"的元素，并给其添加了一个点击事件监听器，当点击时调用selectPrev函数。

// 然后，通过querySelector方法获取到class为"next"的元素，并给其添加了一个点击事件监听器，当点击时调用selectNext函数。

// 接下来，定义了一个函数initshell，用来初始化立方体的显示。首先，遍历所有子元素，并根据索引计算出每个面的旋转角度，并设置对应的transform属性。然后，调用rotateshell函数来显示选中的面。

// 最后，调用initshell函数来初始化立方体的显示。