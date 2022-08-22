import React, { Component } from 'react'

export class ClassLifeCycle extends Component {
    constructor(props) {
        super(props);
        console.log('class constructor');
        this.state = {
            update: true
        };
    }

    handleUpdate = () => {
        this.setState({
            update: !this.state.update
        })
    }

    componentDidMount() {
        console.log('class component did mount')
    }

    componentDidUpdate() {
        console.log('class component did update')
    }

    componentWillUnmount() {
        console.log('class component will unmount')
    }
    render() {
        console.log('class render');
        return (
        <div>
            <h3>Class Component Lifecycle</h3>

            <button onClick={this.handleUpdate}>
                Update
            </button>
        </div>
        )
    }
}

export default ClassLifeCycle