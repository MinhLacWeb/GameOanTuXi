import React, { Component } from 'react'

class Computer extends Component {
  render() {
    return (
      <div className='text-center playerGame'>
          <div className='theThink'>
          <img style={{transform:'rotate(260deg)'}} className='mt-3' width={40} height={40} src='./img/bao.png' alt='./img/bao.png'/>
          </div>
          <div className='speech-bubble'></div>
          <img style={{ width:200, height:200 }} src='./img/playerComputer.png' alt='./img/playerComputer.png' />
      </div>
    )
  }
}

export default Computer