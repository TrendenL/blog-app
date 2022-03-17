import React from 'react'
import './singlePost.css'

export default function PostPage() {
    return (
        <div className='singlePost'>
            <div className='post-wrapper'>
                <img src='https://images.unsplash.com/photo-1606143705650-f13bbe894b78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' alt='' className='singlePostImg'/>
                <h1 className='singlePostTitle'>
                    Post Title
                    <div className='singlePostEdit'>
                        <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                        <i className="singlePostIcon fa-regular fa-trash-can"></i>
                    </div>
                </h1>

                <div className='singlePostInfo'>
                    <span className='singlePostAuthor'>Author: <b>Trenden</b></span>
                    <span className='singlePostDate'>1 hour ago</span>
                </div>
                <p className='singlePostDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati esse rem temporibus dolor natus debitis quam autem nisi impedit harum tempora nemo omnis libero ullam atque modi, vitae praesentium aspernatur.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati esse rem temporibus dolor natus debitis quam autem nisi impedit harum tempora nemo omnis libero ullam atque modi, vitae praesentium aspernatur.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati esse rem temporibus dolor natus debitis quam autem nisi impedit harum tempora nemo omnis libero ullam atque modi, vitae praesentium aspernatur.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati esse rem temporibus dolor natus debitis quam autem nisi impedit harum tempora nemo omnis libero ullam atque modi, vitae praesentium aspernatur.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati esse rem temporibus dolor natus debitis quam autem nisi impedit harum tempora nemo omnis libero ullam atque modi, vitae praesentium aspernatur.</p>
            </div>
        </div>
    )
}
