import React from 'react';
import { Component } from'react';
import form from './form.css';
import axios from 'axios';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title : "",
            poster : "",
            comment : ""
        }
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangePoster = this.onChangePoster.bind(this);
        this.onChangeComment = this.onChangeComment.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeTitle(e){
        this.setState({ title: e.target.value })
    }

    onChangePoster(e){
        this.setState({ poster: e.target.value })
    }

    onChangeComment(e){
        this.setState({ comment: e.target.value })
    }

    onSubmit(e){
        e.preventDefault()

        const film = {
            title: this.state.title,
            poster: this.state.poster,
            comment: this.state.comment
        };

        axios.post('https://post-a-form.herokuapp.com/api/movies/', film)
            .then((res) => {
                console.log(res.data)
                alert('Le film '+ this.state.title + 'a bien été enregistré')
            }).catch((error) => {
                console.log(error)
            });

        this.setState({ title: '', poster: '', comment: '' });
        }

    render() {
        return (
            <div className='form'>
                <form onSubmit={this.onSubmit}>
                    <label>Nom du film : 
                        <input
                            type="text"
                            value={this.state.title}
                            onChange={this.onChangeTitle}
                        />
                    </label>
                    
                    <label>Poster du film : 
                        <input
                            type="text"
                            value={this.state.poster}
                            onChange={this.onChangePoster}
                        />
                    </label>
                    
                    <label>Commentaire:</label>
                    <textarea
                    className='textarea'
                        type="text-area"
                        value={this.state.comment}
                        onChange={this.onChangeComment}
                    />
                    <button
                    type='submit'
                    >Envoyer</button>
                </form>
            </div>
        )
    }
};

export default Form;