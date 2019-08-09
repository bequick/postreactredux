import React, {Component} from 'react';
import { Button} from 'reactstrap';
import { thisTypeAnnotation } from '@babel/types';

class NewPost extends React.Component {
    state = {
        title : '',
        body : ''
    };

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.title.trim() && this.state.body.trim()){
            this.props.onAddPost(this.state);
            this.handleReset();
        }
    };

    handleReset = () => {
        this.setState({
            title: '',
            body: ''
        });
    };

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input 
                        type="text"
                        placeholder="Title"
                        className="form-control"
                        name="title"
                        onChange={this.handleInputChange}
                        value={this.state.title}
                        />
                    </div>
                    <div className="form-group">
                    <textarea className="form-control"
                    cols={19}
                    rows={8}
                    placeholder="body"
                    name="body"
                    value={this.state.body}
                    onChange={this.handleInputChange }
                    >
                        prueba textarea
                    </textarea>
                            
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Add Post</button>
                        <button type="submit" className="btn btn-warning" onClick={this.handleReset}>Reset</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default NewPost;