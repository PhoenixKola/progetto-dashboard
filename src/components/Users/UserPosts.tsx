import React from 'react'
import { useApiContext } from '../../contexts/ApiContext';
import "../../styles/UserPosts.scss"

const UserPosts: React.FC = () => {
    const { posts, loading, error } = useApiContext();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
            <div className='posts-header'>POST DEGLI UTENTI</div>
            <div className="user-grid">
                {posts.length === 0 ? (
                    <p>No post trovati</p>
                ) : (
                    posts.map((post) => (
                    <div className="user-card" key={post.id}>
                        <img src="icons/profile_placeholder.png" alt="User" className="user-image" />
                        <div className="user-name">{post.title}</div>
                        <div className="user-info">ID autore: {post.userId}</div>
                        <div className="user-description">
                        {post.body}
                        </div>
                    </div>
                    ))
                )}
            </div>
        </>
    )
}

export default UserPosts