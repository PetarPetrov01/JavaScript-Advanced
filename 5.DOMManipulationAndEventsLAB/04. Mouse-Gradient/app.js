function attachGradientEvents() {
    const gradient = document.querySelector('#gradient')
    const result = document.querySelector('#result')

    gradient.addEventListener('mousemove', getCoords)
    gradient.addEventListener('mouseout', () => result.textContent = '')

    function getCoords(ev) {
        let offset = Math.floor(ev.offsetX / 300 * 100)
        console.log(ev.offsetX);
        result.textContent = offset + '%'

    }

    console.log('TODO:...');
}