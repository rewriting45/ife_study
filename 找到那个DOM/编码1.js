let test_ul = document.getElementById("test-ul");
let test_copy = document.getElementById("test-copy");
// 为element增加一个样式名为newClassName的新样式
function addClass(element, newClassName) {
    // your implement
    element.classList.add(newClassName);
}

addClass(test_ul, 'xxx');

// 移除element中的样式oldClassName
function removeClass(element, oldClassName) {
    // your implement
    element.classList.remove(oldClassName);
}

removeClass(test_ul, 'xxx');

// 判断siblingNode和element是否为同一个父元素下的同一级的元素，返回bool值
function isSiblingNode(element, siblingNode) {
    // your implement
    // 获取 element 元素的父元素下面所有的子元素
    let parentElement = element.parentElement;
    let allChildElement = parentElement.childNodes;
    for(let i = 0 ; i < allChildElement.length ; i ++) {
        if (allChildElement[i] == siblingNode) {
            return true
        }
    }
    return false;
}
console.log(isSiblingNode(test_ul.childNodes[0], test_ul.childNodes[1]));
        

// 获取element相对于浏览器窗口的位置，返回一个对象{x, y}
function getPosition(element) {
    // your implement
    return {
        x: element.offsetTop,
        y: element.offsetLeft
    };
}

console.log(getPosition(test_ul));

// 获取当前element元素所有的兄弟节点
function getSiblings(element){
    // your implement
    let parentElement = element.parentElement;
    return parentElement.childNodes;
}

// 获取当前element元素前一个兄弟节点
function getPrev(element){
    // your implement
    return element.previousElementSibling;
}

// 获取element元素之前所有的兄弟节点
function getPrevaAll(element){
    // your implement
    let allChildElement = element.parentElement.childNodes;
    let allFrontChildElement = [];
    for(let i = 0 ; i < allChildElement.length ; i ++) {
        if (allChildElement[i] == element) {
            break;
        }
        allFrontChildElement.push(allChildElement[i])
    }
    return allFrontChildElement;
}

console.log(getPrevaAll(test_ul.childNodes[8]));

// 获取element元素之后第一个兄弟节点
function getNext(element){
    // your implement
    return element.nextElementSibling;
}

// 获取element元素之后所有的兄弟节点
function getNextAll(element){
    // your implement
    let allChildElement = element.parentElement.childNodes;
    let allFrontChildElement = [];
    for(let i = allChildElement.length - 1 ; i > 0 ; i ++) {
        if (allChildElement[i] == element) {
            break;
        }
        allFrontChildElement.push(allChildElement[i])
    }
    return allFrontChildElement;
}

// 判断element的节点类型，并且返回
function getNodeType(element) {
    // your implement
    return element.nodeType;
}

// 获取element元素完整的HTML内容
function getHTMLContent(element) {
    // your implement
    return element.innerHTML;
}
// 获取element元素的文本内容
function getText(element) {
    // your implement
    return element.innerText;
}
