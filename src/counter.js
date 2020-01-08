import React from 'react'
let userInput = prompt;
let jumpby;
let value = 1;

class Counter extends React.Component {
    state = {
        counter: 0,

    }

    onIncrementClick = () => {
        this.setState({ counter: this.state.counter + value })

    }
    onDecrementClick = () => {
        this.setState({ counter: this.state.counter - value })

    }
    onResetClick = () => {
        this.setState({ counter: 0 })
        this.setState({})

    }

    jump = () => {
        userInput = parseInt(prompt("enter the number"));
        this.setState({ counter: userInput })
    }



    incrementBy = () => {

        jumpby = prompt("Increase by the number which you want")


    }


    render() {
        return (
            <div className="ui cards">
                <div className="card">
                    <div className="content ">

                        <h1><center>{this.state.counter}</center></h1>

                    </div>


                    <div className="extra content">
                        <div className="ui two buttons">
                            <div className="ui basic green button" onClick={this.onIncrementClick}>Increment</div>
                            <div className="ui basic red button" onClick={this.onDecrementClick}>Decrement</div>


                        </div>

                        <div className="extra content">
                            <div className="ui two buttons">
                                <div className="ui basic brown button" onClick={this.jump}>Jump to </div>

                            </div>
                        </div>
                        <div className="extra content">
                            <div className="ui two buttons">
                                <div className="ui basic black button" onClick={this.onResetClick}>Reset</div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default Counter; 