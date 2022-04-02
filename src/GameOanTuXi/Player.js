import React, { Component } from 'react'
import {connect} from 'react-redux';

 class Player extends Component {
  render() {
    console.log("props",this.props.mangDatCuoc);
    return (
      <div className='text-center playerGame'>
          <div className='theThink'>
              <img className='mt-3' width={40} height={40} src={this.props.mangDatCuoc.find(item=>item.datCuoc === true).hinhAnh} alt={this.props.mangDatCuoc.find(item=>item.datCuoc === true).hinhAnh}/>
          </div>
          <div className='speech-bubble'></div>
          <img style={{ width:200, height:200 }} src='./img/player.png' alt='./img/player.png' />

          <div className='row'>
            {this.props.mangDatCuoc.map((item,index)=>{
              let border = {};
              if(item.datCuoc){
                border = {border: '3px solid orange'}
              }

              return    <div className='col-4'>
              <button style={border} className='btnItem'>
                  <img width={40} height={40} src={item.hinhAnh} alt={item.hinhAnh}  />
              </button>
          
          </div>
            })}
              
                
          </div>
      </div>     

            )
  }
}



const mapStateToProps = state => {
    return {
      mangDatCuoc: state.GameOanTuXiReducer.mangDatCuoc
    }
}

export default connect(mapStateToProps)(Player)