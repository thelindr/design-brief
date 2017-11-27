import React from "react"

class App extends React.Component {

  render() {
    return (
      <div className="App">

        <div className="Menu">
          <ul>
          <li id="bold">Home</li>
          <li>Technology</li>
          <li>Creativity</li>
          <li>Entrepreneurship</li>
          <li>Self</li>
          <li>Culture</li>
          <li>Digital Design</li>
          <li>Popular on Medium</li>
          <li>Politics</li>
          <button id="menubutton" type="button">More</button>
          </ul>
        </div>


          <div className="Header">
            <div className="leftColumn">
              <h1>Interesting ideas that set your mind in motion.</h1>
                <p>Hear directly from the people who know it best. From tech to politics to creativity and more - whatever your interest, we've got you covered</p>
                  <div className="buttons">
                    <button id="firstbutton" type="button">Get started</button>
                    <button id="secondbutton" type="button">Learn more</button>
                  </div>
                </div>
              </div>

              <div className="contentBoxes">
                <div id="box" className="firstBox">
                    <div className="textbox">
                  <h2>The Boy Who Tamed the Sea</h2>
                  <p>At 5:30 am, on any motning I can handle it, I'll slip out of the dark mouth of my covers and creep through the silver lig...</p>
                    <div className="byline">
                    <img src="/images/writer-1.png"></img>
                      <h3>Carl Moore</h3>
                      </div>
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
