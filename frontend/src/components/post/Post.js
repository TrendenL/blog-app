import React from 'react'
import {Link} from 'react-router-dom'
import '../post/post.css'

export default function post() {
    return (
        <div className='post'>
            <img className='postImg' src='https://images.unsplash.com/photo-1606143705650-f13bbe894b78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' alt='' width={200}/>

            <div className='postInfo'>
                <div className='postCats'>
                    <span className='postCat'>Music</span>
                    <span className='postCat'>Life</span>
                </div>
                <Link to='/Post/:PostId'>
                    <span className='postTitle'>Post Title</span>

                </Link>
                <hr/>
                <span className='postDate'>1 hour ago</span>
            </div>
            <p className='postDesc'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias qui labore nesciunt, maiores autem error ducimus laborum, voluptates dolor soluta accusamus veritatis perferendis dolorem.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias qui labore nesciunt, maiores autem error ducimus laborum, voluptates dolor soluta accusamus veritatis perferendis dolorem.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias qui labore nesciunt, maiores autem error ducimus laborum, voluptates dolor soluta accusamus veritatis perferendis dolorem.
            </p>
        </div>
    )
}
