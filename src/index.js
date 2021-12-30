document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    makeToDo(e.target.newTaskDescription.value)
    form.reset()
  })
});

function makeToDo(todo) {
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', deleteToDo)
  btn.textContent = ' x '
  p.textContent = `${todo} `
  p.appendChild(btn)
  document.querySelector('#tasks').appendChild(p)
}

function deleteToDo(e) {
  e.target.parentNode.remove()
}