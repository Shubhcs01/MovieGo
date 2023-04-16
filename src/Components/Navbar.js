import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logoDark from '../Assets/logoDark.png'

export default class Navbar extends Component {
  render() {
    return (
      <div style={{ display: 'flex', padding: '0.5'}}>
        <Link to="/moviego" style={{ textDecoration: 'none' }}>
          <img style={{ padding:"0.5rem", marginTop: '1rem', marginLeft: '1rem' }} src={logoDark} width="20%"></img>
        </Link>
        <Link to="/moviego/favourites" style={{ textDecoration: 'none' }}><h2 style={{fontFamily:"verdana", marginLeft: '3rem',marginRight:'1rem', marginTop: ' 2rem' }}>Favourites</h2></Link>
      </div>
    )
  }
}
