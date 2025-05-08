var btn = document.querySelector('.reset')
var add = document.querySelector('.add')
var sub = document.querySelector('.sub')
var result = document.querySelector('.result')

var value = 0


add.addEventListener('click', ()=>{
    value = value+1
    result.textContent = value
})
sub.addEventListener('click',()=>{
    value = value-1
    result.textContent = value

    if(value<0){
        alert('No values to decreament')
        value = 0
        result.textContent = value
    }
})
btn.addEventListener('click',()=>{
    value=0
    result.textContent = value
})