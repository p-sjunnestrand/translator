import {Component} from 'react';

class Results extends Component {
    render () {
        return (
            <h3>{this.props.translation}</h3>
        )
    }
}

export default Results;