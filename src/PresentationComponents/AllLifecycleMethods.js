import React, { PureComponent } from 'react';
class MyComponent extends PureComponent {
    // Mounting
    constructor(props) { super(props); this.state = { data: props?.data } }
    //Legacy Lifecycle Methods
    UNSAFE_componentWillMount() { /* is invoked just before mounting occurs. It is called before render() */ }
    UNSAFE_componentWillReceiveProps() {/* Using this lifecycle method often leads to bugs and inconsistencies */ }
    UNSAFE_componentWillUpdate() {/* Typically, this method can be replaced by componentDidUpdate() */ }
    // Mounting
    componentDidMount() {/* happens as soon as your component is mounted.You can set state here but with caution. */ }
    //Unmounting
    componentWillUnmount() {
        /* happens just before the component unmounts and is destroyed.
           This is a good place to cleanup all the data.You cannot set state here. */
    }
    //Updating:
    getDerivedStateFromProps() {
        /*  is invoked right before calling the render method, both on the initial mount and on subsequent updates.
         It should return an object to update the state, or null to update nothing */
    }
    shouldComponentUpdate() {
        /* It can be called if you need to tell React not to re-render for a certain state or prop change.
        This needs to be used with caution only for certain performance optimizations. */
    }
    getSnapshotBeforeUpdate() {
        /* s invoked right before the most recently rendered output is committed to e.g. the DOM.
         It enables your component to capture some information from the DOM (e.g. scroll position) before it is potentially changed.
         Any value returned by this lifecycle will be passed as a parameter to componentDidUpdate() */
    }
    componentDidUpdate() {/* happens as soon as the updating happens..You can set state here but with caution. */ }
    getDerivedStateFromError() {
        /* This lifecycle is invoked after an error has been thrown by a descendant component.
         It receives the error that was thrown as a parameter and should return a value to update state. */
    }
    componentDidCatch() {/* is called during the “commit” phase, so side-effects are permitted. It should be used for things like logging errors */ }
    render() {
        return (this.state?.data ? <p>This component is: {data}</p> : <p>No data yet</p>);
    }
}
MyComponent.defaultProps = { data: 'class based' };
export default MyComponent;