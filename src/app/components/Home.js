import React from "react";

export class Home extends React.Component {
    constructor(props) {
        super();
        //You shouldn't assign props to your state except for the case where this is just the initial value
        this.state = {
            age: props.initialAge,
            status: 0
        };
        setTimeout(() => {
            this.setState({
                status: 1
            });
        }, 2000);
    }

    onMakeOlder() {
        this.setState({
            age: this.state.age + 3
            //status will not be removed
        });
    }

    render() {
        var text = "Something!";
        return(
            <div>
                <p>In a new Component!</p>
                <p>Your name is {this.props.name}, your age is {this.state.age}</p>
                <p>Status: {this.state.status}</p>
                <hr/>
                <button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me older!</button>
            </div>
        )
    }
}

Home.propTypes = {
    name: React.PropTypes.string,
    initialAge: React.PropTypes.number,
};