const btn = document.querySelector('#v2');

btn.onclick = function(){
    console.log("You clicked me!")
}

function scream() {
    console.log("AAAAAA");
    console.log("stop touching me");
}

btn.onmouseenter = scream;

document.querySelector('h1').onclick = function(){
    alert('you clicked me')
}

const btn3 = document.querySelector('#v3');
btn3.addEventListener('mouseup', function(){
    alert("You clicked me")
})

function twist(){
    console.log("Twist");
}

function shout(){
    console.log("Shout");
}

const tasButton = document.querySelector('#tas');
// tasButton.onclick = twist;
// tasButton.onclick = shout;

tasButton.addEventListener('click', twist);
tasButton.addEventListener('click', shout);


