import React, { Component } from 'react'
import Computer from './Computer'
import './GameOanTuXi.css'
import KetQuaTroChoi from './KetQuaTroChoi'
import Player from './Player'


class GameOanTuXi extends Component {
  render() {
    return (
      <div className='gameOanTuXi'>
          <div className='row text-center mt-5' >
              <div className='col-4'>
               <Player/>
              </div>
              <div className='col-4'>
                 <KetQuaTroChoi/>
                 <button className='btn btn-success p-2 display-4 mt-3'>PlayGame</button>
              </div>
              <div className='col-4'>
                  <Computer/>
              </div>

          </div>
      </div>
    )
  }
}

export default GameOanTuXi
