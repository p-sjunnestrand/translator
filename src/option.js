import {Component} from 'react';

class Option extends Component {
    render () {
        return (
            <option>{this.props.language}</option>
        )
    }
}

export default Option;