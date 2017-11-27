import React from "react"

class App extends React.Component {

  render() {
    return (
      <div className="App">

        <div className="Menu">
          <li>Creativity</li>
        </div>


          <div className="Header">
            <div className="leftColumn">
              <h1>Interesting ideas that set your mind in motion.</h1>
                <p>Hear directly from the people who know it best. From tech to politics to creativity and more - whatever your interest, we've got you covered</p>
                  <div className="buttons">
                    <button type="firstbutton">Get started</button>
                    <button type="secondbutton">Learn more</button>
                  </div>
                </div>
              </div>

              <div className="contentBoxes">
                <div id="box" className="firstBox">
                    <div className="textbox">
                  <h2>The Boy Who Tamed the Sea</h2>
                  <p>Lorem ipsum....</p>
                    </div>
                </div>
                <div id="box" className="secondBox">
                    <div className="textbox">
                  <h2>The role of human emotions...</h2>
                  <p>Lorem ipsum....</p>
                    </div>
                </div>
                <div id="box" className="thirdBox">
                    <div className="textbox">
                  <h2>The Boy Who Tamed the Sea</h2>
                  <p>Lorem ipsum....</p>
                    </div>
                </div>
                <div id="box" className="fourthBox">
                    <div className="textbox">
                  <h2>The Boy Who Tamed the Sea</h2>
                  <p>Lorem ipsum....</p>
                    </div>
                </div>
              </div>
            </div>
    )
  }

}

export default App
