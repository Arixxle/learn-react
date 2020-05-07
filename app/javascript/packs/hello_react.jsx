// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

let musicsDB = [
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

const ItemList = (props) => {
  return props.musics.map(m => <Item music={m} />)
}


const ItemInput = props => {
  let [music, setMusic] = useState('')

  return (
    <div>
      <input type="text" 
             value={music} 
             onChange={evt => setMusic(evt.target.value) } />
      <button onClick={() => {
        props.addMusic(music)
        setMusic('')
      }}>Add music</button>
    </div>
  )
}

let appStyle = {
  color: 'red'
}


const Hello = props => {
  const [musics, setMusic] = useState(musicsDB)
  const appendMusic = (newMusic) => {
    setMusic([...musics, newMusic])
  }
  return(
    <div>
    <h1>Hello {props.name}!</h1>
    <h2 style={appStyle}>{props.hehe}</h2>
    <ItemList musics={musics} />
    <ItemInput addMusic={appendMusic}/>
  </div>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello name="5xReact" hehe="Hehehe" />,
    document.querySelector('#container')
  )
})
