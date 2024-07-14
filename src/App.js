import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './Post';
import NewPost from './NewPost';
import Header from './Header';

const BASE_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8000';

function App() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(BASE_URL + 'post/all')
            .then(response => {
                const json = response.json();
                console.log(json);
                if (response.ok) {
                    return json;
                }
                throw response;
            })
            .then(data => data.reverse())
            .then(data => setPosts(data))
            .catch(error => {
                console.log(error);
                alert(error);
            });
    }, []);
    
    return (
        <div className="App">
            <Header />
            <div className='margin'></div>
            <div className="app_posts">
                {posts.map(post => (
                    <Post key={post.id} post={post} />
                ))}
            </div>
            <div className="new_post">
                <NewPost />
            </div>
        </div>
    );
}

export default App;
