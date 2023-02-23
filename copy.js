const buttonCopy = document.getElementById('copy2-button')
buttonCopy.addEventListener('click', (event)=>{
    const content = document.getElementById('contentNumber').textContent
    navigator.clipboard.writeText(content)
})
const buttonMailCopy = document.getElementById('copy1-button')
buttonMailCopy.addEventListener('click', (event)=>{
    const content2 = document.getElementById('contentEmail').textContent
    navigator.clipboard.writeText(content2)
})