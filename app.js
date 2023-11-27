const connectToDom = (id) => document.querySelector(id);
const updateScreenValue = (value) => connectToDom(".screen").innerHTML = value;
const addToValue = (value) => connectToDom(".screen").innerHTML += value;
const valueFromButton = (e)=>{
    let value = e.target.innerHTML;
    if(e.target.innerHTML === "x") value = "*";
    addToValue(value);
}

const buttons = document.querySelectorAll(".num");
buttons.forEach(button => button.addEventListener("click", (e)=> valueFromButton(e)))

const delButton = connectToDom(".del");
const todDelete = ()=>{
    const screen = connectToDom(".screen").innerHTML;
    let arr = screen.slice(0, screen.length-1);
    updateScreenValue(arr)
}
delButton.addEventListener("click", todDelete)

const reset = connectToDom(".reset");
const toReset = ()=> updateScreenValue("");
reset.addEventListener("click", toReset)

const equalTo = connectToDom(".solve");
const toSolve = ()=> {
    const screen = connectToDom(".screen").innerHTML;
    const answer = eval(screen);
    updateScreenValue(answer)
}
equalTo.addEventListener("click", toSolve)

//handle theme
const themeButton = connectToDom("#theme-container span");
const removeClass = (element, className) => element.classList.remove(className);
const addClass = (element, className) => element.classList.add(className);
const removeAll = ()=>{
    removeClass(themeButton, "second");
    removeClass(themeButton, "third")
}
let count = 1;
const theme = localStorage.getItem("theme");
if(theme === "") count = 1;
if(theme === "second") count = 2;
if(theme === "third") count = 3;
themeButton.addEventListener("click", ()=>{
    count++;
    if(count === 4) count = 1;
    if(count === 1) {
        removeAll();    
        localStorage.setItem("theme", "");
        styleForFirst()
    };
    if(count === 2) {
        addClass(themeButton, "second")
        localStorage.setItem("theme", "second");
        styleForSecond()
    };
    if(count === 3) {
        addClass(themeButton, "third")
        localStorage.setItem("theme", "third")
        styleForThird()
    };
})

const constantStyle = (color, background, btnColor)=>{
    document.querySelectorAll(".white").forEach(i => i.style.color = color);
    document.querySelectorAll(".num").forEach(i=>{
        i.style.background = background;
        i.style.color = btnColor
    })
}
const styleForSecond = ()=>{
    connectToDom("body").style.background = "#E7E7E7";
    connectToDom(".screen").style.background = "#EDEDED";
    connectToDom(".screen").style.color = "white";
    connectToDom(".numbers").style.background = "#D2CDC9";
    document.querySelectorAll(".change_color").forEach(i=> {
        i.style.background = "#387E84";
        i.style.color = "black"
    });
    connectToDom(".solve").style.background = "#CD5500";
    themeButton.style.background = "#DA5703";
    connectToDom("#theme-container").style.background = "#CDCAC5";
    constantStyle("black", "white", "black")
}

const styleForThird = ()=>{
    connectToDom("body").style.background = "#170829";
    connectToDom(".screen").style.background = "#200935";
    connectToDom(".screen").style.color = "rgb(240, 238, 84)";
    connectToDom(".numbers").style.background = "#1F0B31";
    document.querySelectorAll(".change_color").forEach(i=> {
        i.style.background = "#5B0783";
        i.style.color = "#E6E0F4"
    });
    connectToDom(".solve").style.background = "#00E3CB";
    themeButton.style.background = "#0DE0D3";
    connectToDom("#theme-container").style.background = "#120629";
    constantStyle("rgb(240, 238, 84)", "#341C50", "rgb(240, 238, 84)")
}

const styleForFirst = ()=>{
    connectToDom("body").style.background = "#3A4767";
    connectToDom(".screen").style.background = "#182033";
    connectToDom(".screen").style.color = "white";
    connectToDom(".numbers").style.background = "#232C45";
    document.querySelectorAll(".change_color").forEach(i=> {
        i.style.background = "#68729C";
        i.style.color = "white"
    });
    connectToDom(".solve").style.background = "#CC4334";
    themeButton.style.background = "#CC4334";
    connectToDom("#theme-container").style.background = "#232A4";
    constantStyle("white", "white", "black")
}


if(theme === ""){
    removeAll()
    styleForFirst();
}
else if(theme === "second"){
    addClass(themeButton, "second")
    styleForSecond();
}
else{
    addClass(themeButton, "third")
    styleForThird();
}