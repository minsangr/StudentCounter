
// Counter app

let count =0

function increment(){
    count++
    console.log(count)
    document.getElementById("count-el").innerHTML=count
}

function decrement(){
    if (count > 0) { 
        count--; 
    }
    console.log(count)
    document.getElementById("count-el").innerHTML=count
}

function save(){
    document.getElementById("entered").innerHTML = document.getElementById("entered").innerHTML + count + " - "
}

function reset(){
    count = 0;
    document.getElementById("entered").innerHTML = "Previous Entries: "
    document.getElementById("count-el").innerHTML=count
}