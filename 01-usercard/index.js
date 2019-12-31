class UserCard extends HTMLElement {
  constructor () {
    super()
    let image = document.createElement('img')
    image.classList.add('image')

    let wrap = document.createElement('div')
    wrap.classList.add('wrap')

    let name = document.createElement('p')
    name.classList.add('name')
    name.innerText = '姓名：白宇'

    let works = document.createElement('p')
    works.classList.add('works')
    works.innerText = '作品：银河补习班'

    wrap.append(name, works)
    this.append(image, wrap)
  }
}

window.customElements.define('user-card', UserCard)