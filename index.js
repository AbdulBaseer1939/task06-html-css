ducument.oncontextmenu = () => {
    alert("apna code likho kota")
    return false
}

document.onkeydown = e => {

    if(e.key == "F12") {
        alert("kota insan likho apna code")
        return false
    }

    if(e.ctrlKey && e.key == "u") {
        alert("kota insan likho apna code")
        return false
    }

    if(e.ctrlKey && e.key == "c") {
        alert("kota insan likho apna code")
        return false
    }
 
    if(e.ctrlKey && e.key == "v") {
        alert("kota insan likho apna code")
        return false
    }
}