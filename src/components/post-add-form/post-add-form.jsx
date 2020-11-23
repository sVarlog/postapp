import React, {Component} from 'react';
import style from './post-add-form.module.css';


export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onValueChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        if (!this.state.text) {
            return;
        } else {
            this.props.onAdd(this.state.text);
            this.setState({
                text: ''
            });
        }
    }

    render() {
        return (
            <form 
                className={style['bottom-panel']}
                onSubmit={this.onSubmit}>
                <input 
                    type="text"
                    placeholder="О чем вы думаете сейчас?"
                    className={style['new-post-label'] + " form-control"}
                    onChange={this.onValueChange}
                    value={this.state.text}/>
                <button 
                    type="submit"
                    className="btn btn-outline-secondary">Добавить</button>
            </form>
        )
    }
};