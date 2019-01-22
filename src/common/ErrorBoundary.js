import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, errorInfo){
        this.setState({
            hasError: true
        })
    }

    render(){
        //if there is an error, return a fallback UI
        if (this.state.hasError){
            return(
                <h1>Oops, something went wrong.</h1>
            );
        }
        //otherwise return props.children
        return this.props.children;
    }
}

export default ErrorBoundary;