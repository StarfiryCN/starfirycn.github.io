window.onload = function () {
    var CastorFiberTag = document.getElementById("CastorFiberTag")
    var MoleTag = document.getElementById("MoleTag")
    var MouseTag = document.getElementById("MouseTag")
    var CastorFiber = document.getElementById("CastorFiber")
    var Mole = document.getElementById("Mole")
    var Mouse = document.getElementById("Mouse")

    CastorFiberTag.setAttribute("style", "background-color:rgb(170,200,170);border-radius:15px;")

    CastorFiberTag.onmouseover = CastorFiberTag.onmouseout = function () {
        CastorFiberTag.setAttribute("style", "background-color:rgb(170,200,170);border-radius:15px;")
        MoleTag.setAttribute("style", "")
        MouseTag.setAttribute("style", "")
        CastorFiber.style.display = "block"
        Mole.style.display = "none"
        Mouse.style.display = "none"
    }

    MoleTag.onmouseover = MoleTag.onmouseout = function () {
        CastorFiberTag.setAttribute("style", "")
        MoleTag.setAttribute("style", "background-color:rgb(170,200,170);border-radius:15px;")
        MouseTag.setAttribute("style", "")
        CastorFiber.style.display = "none"
        Mole.style.display = "block"
        Mouse.style.display = "none"
    }

    MouseTag.onmouseover = MouseTag.onmouseout = function () {
        CastorFiberTag.setAttribute("style", "")
        MoleTag.setAttribute("style", "")
        MouseTag.setAttribute("style", "background-color:rgb(170,200,170);border-radius:15px;")
        CastorFiber.style.display = "none"
        Mole.style.display = "none"
        Mouse.style.display = "block"
    }
}
