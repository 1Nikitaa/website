"use strict"

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


function changeCard(self, flag) {
    if (flag == true) {
        self.classList.add("move");
    }
    else {
        self.classList.remove("move");
    }
}

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
   
    var section = self.parentElement.classList.item(0);
    var sectionDiv = document.getElementById(section);
    window.scrollTo({
        top: sectionDiv.offsetTop-150,
        behavior: 'smooth'
    });

    sectionDiv.classList.add("active");
    
}

window.addEventListener("scroll", changeHeader)