
import React, { Component } from 'react';

import Directory from '../components/Directory/Directory'

import './Home.scss'

class Home extends Component {

    render() {
        return (
            <div className='container'>
                <Directory/>
            </div>
        )
    }
}

export default Home;