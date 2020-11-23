import React, {Component} from 'react';
import style from './search-panel.module.css';

export default class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
    }

    onUpdateSearch(e) {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);
    }

    render() {
        return (
            <input 
                type="text" 
                className={style['search-input'] + " form-control"}
                placeholder="Поиск по записям"
                onChange={this.onUpdateSearch}/>
        )
    }
};