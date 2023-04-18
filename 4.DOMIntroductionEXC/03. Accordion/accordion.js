function toggle() {
    let button = document.getElementsByClassName('button')[0]
    let revealDiv = document.getElementById('extra')
    console.log(revealDiv);
    if (revealDiv.style.display !== 'block'){
        console.log('making it block');
        revealDiv.style.display = 'block'
        button.innerText = 'Less'
    } else {
        revealDiv.style.display = 'none'
        button.innerText = 'More'
    }   
}