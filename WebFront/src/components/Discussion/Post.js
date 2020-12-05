
import React from 'react';

import './Discussion.scss'

const Post = (props) => (
    <div className='post' id={props.id}>
        <div className='heading'>
            <div className='left_section'>{props.poster}</div>
            <div className='middle_section'>{props.subject}</div>
            <div className='right_section'>{props.date}</div>
        </div>
        <div className='body'>
            {props.children}
        </div>
        <div className='post_footer'><a href="javascript:void(0)">Report</a><a href="javascript:void(0)">Reply</a><a href="javascript:void(0)">Like (45)</a><a href="javascript:void(0)">Pin</a></div>
    </div>
);

export default Post;