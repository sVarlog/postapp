import React from 'react';
import style from './app-header.module.css';

const AppHeader = ({liked, allPosts}) => {
    return (
        <div className={style['app-header']}>
            <h1>Todo list</h1>
            <h2>{allPosts} записей, из них понравилось {liked}</h2>
        </div>
    )
};

export default AppHeader;