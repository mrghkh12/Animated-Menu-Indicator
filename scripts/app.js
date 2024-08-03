

const $ = document

const listItems = $.querySelectorAll('.list')

function activeItem(){
    listItems.forEach(item => item.classList.remove('active'))

    this.classList.add('active')
}


listItems.forEach(item => {
    item.addEventListener('click' , activeItem)
})