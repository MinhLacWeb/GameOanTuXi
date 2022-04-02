import React, { Component } from 'react'


class KetQuaTroChoi extends Component {
  render() {
    return (
      <div>
          <div className='display-4 text-warning'>Bạn thua</div>
          <div className='display-4 text-success'>Số bàn thắng: <span 
          className='text-warning'>0</span></div>
          <div className='display-4 text-success'>Tổng số bàn chơi: <span 
          className='text-warning'>0</span></div>

      </div>
    )
  }
}


export default KetQuaTroChoi