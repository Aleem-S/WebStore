
import React from 'react';

import './Discussion.scss'

const PinnedPost = (props) => (
    <div className='pinned_post' id={props.id}>
        <div className='heading'>
            <div className='left_section'>{props.poster}</div>
            <div className='right_section'>{props.date}</div>
            <div className='subject_line'>{props.subject}</div>
            
        </div>
        <div className='body'>
            {props.children}
        </div>
        <div className='post_footer'><a href="javascript:void(0)">Like (23)</a><a href="javascript:void(0)">Unpin</a></div>
    </div>
);

export default PinnedPost;