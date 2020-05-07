// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

let musics = [
  'Jazz',
  'Kpop',
  'Tango'
]

function getSelf(e) {
  return () => { console.log(e) }
}
const Item = (props) => {
  let m = props.music
  return <li onClick={ getSelf(m) }>{m}</li>
}
const makeList = (array) => {
  return array.map(el => <li onClick={ getSelf(el) }>{el}</li>)
}

const ItemList = (props) => {
  return props.musics.map(m => <Item music={m} />)
}

const Hello = props => (
  <div>
    <h1 onClick={clickHandler} >Hello {props.name}!</h1>
    <h2>{props.hehe}</h2>
    <ItemList musics={musics} />
  </div>
)

Hello.defaultProps = {
  name: 'David'
}

Hello.propTypes = {
  name: PropTypes.string
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    // <Hello name="React" />,
    <Hello name="5xReact" musics={musics} hehe="Hehehe" />,
    // document.body.appendChild(document.createElement('div')),
    document.querySelector('#container')
  )
})


function clickHandler() {
  alert('Hi React!!')
}
function overHandler() {
  console.log('AAA')
}