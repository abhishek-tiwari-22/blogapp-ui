import React, { useState, useEffect } from "react";
import './Post.css';

const BASE_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8000';
function Post({ post }) {
    const [imageURL, setImageURL] = useState('');

    useEffect(() => {
        setImageURL(BASE_URL + post.image_url);
    }, [post.image_url]);

    const handleDelete = (event) => {
        event.preventDefault();

        const requestOptions = {
            method: 'DELETE',
        };

        fetch(BASE_URL + 'post/' + post.id, requestOptions)
            .then(response => {
                if (response.ok) {
                    window.location.reload();
                }
                throw response;
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div className="post">
            <div className="post_header">
                <img className="post_image" src={imageURL} alt={post.title} />
                <div className="post_info">
                    <div className="post_title">{post.title}</div>
                    <div className="post_creator">- {post.creator}</div>
                </div>
                <button className="post_delete_button" onClick={handleDelete}>Delete</button>
            </div>
            <div className="post_content">{post.content}</div>
        </div>
    );
}

export default Post;
