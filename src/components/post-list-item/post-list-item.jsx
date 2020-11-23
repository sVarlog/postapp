import React, {Component} from 'react';
import style from './post-list-item.module.css';

export default class PostListItem extends Component {
    render() {
        const {label, onDelete, onToggleImportant, onToggleLiked, important, like} = this.props;
        let classNames = `${style['app-list-item']} d-flex justify-content-between`;

        if (important) {
            classNames += ` ${style['important']}`;
        }

        if (like) {
            classNames += ` ${style['like']}`;
        }

        return (
            <div className={classNames}>
                <span onClick={onToggleLiked} className={style['app-list-item-label']}>
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button
                        onClick={onToggleImportant} 
                        type="submit" 
                        className={style['btn-star'] + " btn-sm"}>
                        <i className="fa fa-star"></i>
                    </button>
                    <button type="submit" className={style['btn-trash'] + " btn-sm"} onClick={onDelete}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <i className={style['fa-heart'] + " fa fa-heart"}></i>
                </div>
            </div>
        )
    }
}