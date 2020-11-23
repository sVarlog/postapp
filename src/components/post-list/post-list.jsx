import React from 'react';
import PostListItem from '../post-list-item/post-list-item.jsx';
import {ListGroup} from 'reactstrap';
import style from './post-list.module.css';

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {
    const elements = posts.map((el) => {
        const {id, ...elProps} = el;
        return (
            <li key={id} className={style["list"] + " list-group-item"}> 
                <PostListItem
                    {...elProps} 
                    onDelete={() => onDelete(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleLiked={() => onToggleLiked(id)}/>
            </li>
        )
    });

    return (
        <ListGroup className={style['app-list']}>
            {elements}
        </ListGroup>
    )
};

export default PostList;