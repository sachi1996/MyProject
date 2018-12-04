import React, { Component } from 'react';

class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false
        }
    }
    componentDidMount() {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json
                })
            });
    }
    render() {
        var { isLoaded, items } = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>;
        }
        return (
            <div classname="App">

                <ul>
                    {items.map(item => (
                        <li key="{item.id}">
                            Name: {item.name} | Email: {item.email}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
export default Demo;
