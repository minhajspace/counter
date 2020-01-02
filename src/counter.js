import React from 'react'
let userInput = prompt;
console.log(userInput)
console.log(window.userInput)
class Counter extends React.Component {
    state = {
        counter: 0
    }

    onIncrementClick = () => {
        this.setState({ counter: this.state.counter + 1 })

    }
    onDecrementClick = () => {
        this.setState({ counter: this.state.counter - 1 })

    }
    onResetClick = () => {
        this.setState({ counter: 0 })

    }

    jump = () => {
        userInput = prompt("enter the number");
        this.setState({ counter: userInput })
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
                                <div className="ui basic green button" onClick={this.onResetClick}>Reset</div>
                                <div className="ui basic yellow button" onClick={this.jump}>Jump</div>


                            </div>

                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default Counter; 