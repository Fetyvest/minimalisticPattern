const info1 = document.querySelector('#info1 .info__value')
const info2 = document.querySelector('#info2 .info__value')
const info3 = document.querySelector('#info3 .info__value')
const info4 = document.querySelector('#info4 .info__value')
const info5 = document.querySelector('#info5 .info__value')
const footerIp = document.querySelector('.footer__ip')
const modal = document.getElementById('modal')

let ip = 'yourServer.ip'
let version = '1.21 - 1.21.10'
let core = 'Vanila'
let seed = '030102600191005'
let difficulty = 'Нормальная'
let howManyModals = 0

async function copyModal() {
    if(howManyModals != 0){
        modal.style.top = '0'
        await new Promise(resolve => setTimeout(resolve, 100))
    }
    howManyModals += 1
    modal.style.top = '100px'
    await new Promise(resolve => setTimeout(resolve, 1500))
    if(howManyModals == 1){
        modal.style.top = '0'
    }
    howManyModals -= 1
}

info1.addEventListener('click', () => {
    navigator.clipboard.writeText(ip)
    copyModal()
})
info2.addEventListener('click', () => {
    navigator.clipboard.writeText(version)
    copyModal()
})
info3.addEventListener('click', () => {
    navigator.clipboard.writeText(core)
    copyModal()
})
info4.addEventListener('click', () => {
    navigator.clipboard.writeText(seed)
    copyModal()
})
info5.addEventListener('click', () => {
    navigator.clipboard.writeText(difficulty)
    copyModal()
})
footerIp.addEventListener('click', () => {
    navigator.clipboard.writeText(ip)
    copyModal()
})
modal.addEventListener('click', () => {
    modal.style.top = '0'
})