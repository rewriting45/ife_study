// 实现一个简单的JQuery
function $(selector) {
    let fristStr = selector[0];
    if (fristStr == "#") {
        let strArray = selector.split(" ");
        if (strArray.length <= 1) {
            return document.querySelector(strArray[0]);
        }else {
            let temp = document.querySelector(strArray[0]).children;
            for(let i = 0 ; i < temp.length ; i ++) {
                if (temp[i].className == strArray[1].substr(strArray[1].indexOf(".")+1, strArray[1].length)) {
                    return temp[i];
                }
            }
        }
    }else if (fristStr == ".") {
        return document.querySelector(selector)
    }else if (fristStr == "[") {
        let tempString = selector.substr(selector.indexOf("[")+1, selector.indexOf("]")-1);
        let allTagElement = document.querySelector("body").children;
        if (tempString.indexOf("=") == -1) {
            for(let i = 0; i < allTagElement.length ; i++) {
                if (allTagElement[i].attributes.length > 0) {
                    let targetArr = allTagElement[i].attributes;
                    if (targetArr[tempString] && targetArr[tempString].name == tempString) {
                        return allTagElement[i]
                    }
                }
            }
        }else {
            let temp = tempString.split("=");
            for(let i = 0; i < allTagElement.length ; i++) {
                if (allTagElement[i].attributes.length > 0) {
                    let targetArr = allTagElement[i].attributes;
                    if (targetArr[temp[0]] && targetArr[temp[0]].name == temp[0] && targetArr[temp[0]].value == temp[1]) {
                        return allTagElement[i]
                    }
                }
            }
        }
    }else {
        return document.querySelector(selector);
    }
}

//测试用例
// 可以通过id获取DOM对象，通过#标示，例如
// console.log($("#adom")); // 返回id为adom的DOM对象

// 可以通过tagName获取DOM对象，例如
// console.log($("a"));; // 返回第一个<a>对象

// 可以通过样式名称获取DOM对象，例如
// console.log($(".classa")); // 返回第一个样式定义包含classa的对象

// 可以通过attribute匹配获取DOM对象，例如
// console.log($("[data-log]"));; // 返回第一个包含属性data-log的对象

// console.log($("[data-time=2015]"));; // 返回第一个包含属性data-time且值为2015的对象

// 可以通过简单的组合提高查询便利性，例如
console.log($("#adom .classa"));; // 返回id为adom的DOM所包含的所有子节点中，第一个样式定义包含classa的对象