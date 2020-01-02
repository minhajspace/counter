import React from 'react'
let userInput = prompt;
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
                            <div className="ui basic red button" onClick={() => {
                                // let userInput = prompt;
                                // console.log(userInput)
                                this.setState({ counter: window.prompt })
                            }}>Decrement</div>


                        </div>

                        <div className="extra content">
                            <div className="ui two buttons">
                                <div className="ui basic green button" onClick={this.onResetClick}>Reset</div>
                                <div className="ui basic yellow button" onClick={userInput}>Jump</div>


                            </div>

                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default Counter; 