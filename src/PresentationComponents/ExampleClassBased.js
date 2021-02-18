import React, { Component } from 'react';

class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            isLoading: false,
            error: null
        }
    }
    async loadAsyncData() {
        this.setState({ isLoading: true, error: null });
        try {
            const resp = await fetch('https://...').then(r => r.json());
            this.setState({ isLoading: false, data: resp });
        } catch (e) {
            this.setState({ isLoading: false, error: e });
        }
    }
    componentDidMount() {
        loadAsyncData();
    }
    render() {
        if (this.state.isLoading) return (<p>Loading...</p>);
        if (this.state.error) return (<p>Something went wrong</p>);
        if (this.state.data) return (<p>The data is: {data}</p>);
        return (<p>No data yet</p>);
    }
}
export default MyComponent;