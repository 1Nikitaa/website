"use strict"

function bindBodyEvent(event, handle) {
    window.addEventListener(event, handle);
}
    function change() {
       var random = document.getElementsByClassName("random-box")[0].getElementsByClassName("move");
        for (var i = 0; i < random.length; i++) {
            var x = random[i].id;

            var ranTop = Math.floor(Math.random() * 450);
            var ranLeft = Math.floor(Math.random() * 90);
            document.getElementById(x).style.top = ranTop+"%";
            document.getElementById(x).style.left = ranLeft+"%";
    }
    }
    setInterval(change, 3000);

function move(flag) {
    console.log("ss");
    if (flag == true) {
        document.getElementById("ss").classList.add("change");
    }
    else {
        document.getElementById("ss").classList.remove("change");
    }
}
function changeCard(self, flag) {
    if (flag == true) {
        self.classList.add("move");
    }
    else {
        self.classList.remove("move");
    }
}
function dp() {
    var a = document.getElementById("op");
    var arr = a.getElementsByTagName("Section");
    var cur = document.getElementsByClassName("current")[0];
    console.log(calculateVisibilityForDiv(cur.id));
}
function calculateVisibilityForDiv(div) {
    var windowHeight = window.innerHeight;
    var divPosition = div.getBoundingClientRect().top;
    var result = ((windowHeight - divPosition) * 100) / windowHeight;
    return result;
}

window.addEventListener(onscroll, sp);
function sp(){
    var current = "";
    var a = document.getElementById("op");
    var sections = a.getElementsByTagName("Section");
    for (var i = 0; i < sections.length; i++) {
        var section = sections[i];
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    }
    var navLi = document.getElementsByTagName("nav");
    for (var j = 0; j < navLi.length; j++) {

        var li = navLi[j];
        li.classList.remove("active");
        if (li.classList.contains(current)) {
            li.classList.add("active");
        }
    }
};
//nikita js
function changeHeader() {
    var sections = document.getElementsByTagName("section");
    for (var i = 0; i < sections.length; i++) {
        var bounding = sections[i].getBoundingClientRect();
        if (window.innerHeight - 600 >= bounding.top) {
            var ul = document.getElementById("header-ul");
            var li = ul.getElementsByTagName("li")
            for (var j = 0; j < li.length; j++) {
                li[j].classList.remove("glow");
                if (li[j].classList.contains(sections[i].id)) {
                    li[j].classList.add("glow");
                }
            }
        }
    }



}
function changeScreen(self) {
    var sections = document.getElementsByTagName("section");
    for (var i = 0; i < sections.length; i++) {
        sections[i].classList.remove("active");
    }
    var section = self.parentElement.classList.item(0); 
    var sectionDiv = document.getElementById(section);
    window.scrollTo({
        top: sectionDiv.offsetTop - 150,
        behavior: 'smooth'
    });
    sectionDiv.classList.add("active");

}


function onLoad() {
    document.removeEventListener("load", onLoad, true);
    if (!checkDeviceSupport()) {
        document.body.classList.add("hide");
    }
}

window.addEventListener("load", onLoad, true)

window.addEventListener("scroll", changeHeader)