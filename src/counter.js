import React from 'react'

class Counter extends React.Component {
    state = {
        counter: 0
    }

    onIncrementClick = () => {
        this.setState({ counter: this.state.counter + 1 })
        console.log(this.state.counter)
    }
    onDecrementClick = () => {
        this.setState({ counter: this.state.counter - 1 })
        console.log(this.state.counter)
    }

    render() {
        return (
            <div className="ui cards">
                <div className="card">
                    <div className="content">
                    </div>



                    <div className="extra content">
                        <div className="ui two buttons">
                            <div className="ui basic green button" onClick={this.onIncrementClick}>Increment</div>
                            <div className="ui basic red button" onClick={this.onDecrementClick}>Decrement</div>

                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default Counter; 