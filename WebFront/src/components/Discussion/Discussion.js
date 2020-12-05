
import React from 'react';
import Post from './Post'
import  './Discussion.scss'

const watchlist = [{ id:1,count: "1,980",  subject:"price target by Christmas?", text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from", date:"12/12/2018", poster:"Crypto king" },
{ id:2,count: "2,345",  subject:"Re: Team lacks capability",  text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet", date:"12/12/2018", poster:"Brotherly" },
{ id:3,count: "123",  subject:"Team lacks capability",text: "It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.", date:"12/12/2018", poster:"Alex" },
{ id:4,count: "13,233",subject:"main net launch", text: " It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.", date:"12/12/2018", poster:"Robinhood" },
{ id:5,count: "34", subject:"price action recently", text: "Live the life at the fullest.   It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.", date:"12/12/2018", poster:"Love life" },
{ id:6,count: "33", subject:"Dumb question", text: "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source", date:"12/12/2018", poster:"Trevolta" },
{ id:7,count: "2", subject:"Damn it",text: " The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.", date:"12/12/2018", poster:"Lisa" },
{ id:8,count: "23,344",  text: " It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.", date:"12/12/2018", poster:"Millenia" },]

const Discussion = (props) => (
    <div className='forum_container'>
    <div className='heading_section'>
    <div className='forum_heading'>Discussion</div>
    <div className='write_post'><button>Write post</button></div>
    </div>
    {
        watchlist.map((item, index) => 

            <Post id={item.id} count={item.count} poster={item.poster} date={item.date} subject={item.subject}>{item.text}</Post>
        )
    }
    
    </div>
    
);

export default Discussion;