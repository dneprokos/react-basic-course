import React from 'react';

const PostStatusFilter = () => {
    return (
        <div className="btn-group">
            <button 
                type="button" 
                className="btn btn-info"
            >All Posts
            </button>
            <button 
                type="button" 
                className="brn btn-outline-secondary"
            >Likes
            </button>
        </div>
    )
}

export default PostStatusFilter;