document.querySelector('button').addEventListener('click', function(){
    alert('click')
})

const input = document.querySelector('input');
input.addEventListener('keydown', function(e){
    console.log(e.key);
    console.log(e.code);

});
// input.addEventListener('keyup', function(){
//     console.log("Keyu");
// })

window.addEventListener('keydown', function(e){
    switch(e.code){
        case 'ArrowUp':
            console.log("Up!");
            break;
        case 'ArrowDown':
            console.log("Down");
            break;
        default:
            console.log("Ignored!")
    }
})