// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {
    mango: 0,
    banana: 0,
  }

  onEatMango = () => {
    this.setState(prevState => ({
      mango: prevState.mango + 1,
    }))
  }

  onEatBanana = () => {
    this.setState(prevState => ({
      banana: prevState.banana + 1,
    }))
  }

  render() {
    const {mango, banana} = this.state

    return (
      <div className="app-container">
        <div className="fruit-container">
          <h1 className="heading">
            Bob ate <spam className="fruits-count">{mango}</spam> mangoes
            <spam className="fruits-count">{banana}</spam> bananas
          </h1>
          <div className="image-container">
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="fruit-img"
              />

              <div>
                <button
                  className="button"
                  type="button"
                  onClick={this.onEatMango}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="fruit-img"
              />

              <div className="buttons-container">
                <button
                  className="button"
                  type="button"
                  onClick={this.onEatBanana}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
