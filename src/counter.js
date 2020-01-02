import React from 'react'

class Counter extends React.Component {
    state = {
        counter: 0
    }
    render() {
        return (
            <div className="ui cards">
                <div className="card">
                    <div className="content">




                        <div class="extra content">
                            <div class="ui two buttons">
                                <div class="ui basic green button">Increment</div>
                                <div class="ui basic red button">Decrement</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default Counter; 