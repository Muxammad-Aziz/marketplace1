const place = document.querySelector('.container')
const menu = document.querySelector('aside')
const menu_open_btn = document.querySelector('#menu')
const menu_close_btn = document.querySelector('#close')
const btn_one = document.querySelector('#one')
const btn_two = document.querySelector('#two')
const sorted = arr.toSorted((a, b) => a.price - b.price)
const plus = document.querySelector('#plus')
const total = document.querySelector('#total')
const minus = document.querySelector('#minus')
const remove = document.querySelector('#remove')

let count = 0


function reload(data) {
    place.innerHTML = ""

    for (let item of data) {
        const component = Item(item)

        place.append(component)
    }
}

reload(sorted)

btn_one.onclick = () => {
    reload(sorted)
}
btn_two.onclick = () => {
    reload(sorted.slice(0, 5))
}
menu_open_btn.onclick = () => {
    menu.style.right = "0px"
}

menu_close_btn.onclick = () => {
    menu.style.right = "-100%"
}


plus.onclick = () => {
    if (count < Infinity) {
        count++
        total.innerHTML = count

    }
}

minus.onclick = () => {
    if (count > 0) {
        count--
        total.innerHTML = count

    }
}

remove.onclick = () => {
    count = 0
    total.innerHTML = count
}