/* eslint-disable jsx-a11y/alt-text */
import React, { Component, useEffect } from 'react'
import { movies } from './getMovies'

export default class Banner extends Component {

    constructor(props) {
        super(props);
        this.state = {count:0};
    }

    componentDidMount(){
        setInterval(() => this.setState({count:(this.state.count+1)%20}), 5000);
    }

    render() {
        
        return (
            <>
                <div className="card banner-card">
                    <img src={`https://image.tmdb.org/t/p/original${movies.results[this.state.count].backdrop_path}`} className="card-img-top banner-img" />
                    <div className="card-body">
                        <h5 className="card-title banner-title">{movies.results[this.state.count].title}</h5>
                        <p className="card-text banner-text">{movies.results[this.state.count].overview}.</p>
                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    </div>
                </div>
            </>
        )
    }
}
