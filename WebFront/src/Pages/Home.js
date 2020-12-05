
import React, { Component } from 'react';
import Discussion from '../components/Discussion/Discussion'
import PinnedPosts from '../components/Discussion/PinnedPosts'



import './Home.scss'

class Home extends Component {

    render() {
        return (
            <div className='container'>
                <div className='left_container'>
                <PinnedPosts></PinnedPosts>
                </div>
                <div className='right_container'>
                <Discussion></Discussion>
                </div>
            </div>


        )
    }
}

export default Home;