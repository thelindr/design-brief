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
          <button id="menubutton" type="button">Get started</button>
          </ul>
        </div>

        <hr></hr>


          <div className="Header">
            <div className="leftColumn">
              <h1>Interesting ideas that set your mind in motion.</h1>
                <p>Hear directly from the people who know it best. From tech to politics to creativity and more - whatever your interest, we've got you covered</p>
                  <div className="buttons">
                    <button id="firstbutton" type="button">Get started</button>
                    <button id="secondbutton" type="button">Learn more</button>
                  </div>
                </div>
                <div className="headerImg">
                <img src="/images/medium-image.png" />
                </div>
              </div>

              <div className="contentBoxes">
                <div id="box">
                  <div className="imgbox" id="firstBox"></div>
                    <div className="textbox">
                  <h2>The Boy Who Tamed the Sea</h2>
                  <p>At 5:30 am, on any motning I can handle it, I'll slip out of the dark mouth of my covers and creep through the silver lig...</p>
                    <div className="byline">
                    <img src="/images/writer-1.png"></img>
                    <div className="bylinetext">
                      <h3>Carl Moore</h3>
                        <p>Oct 27, 8 min read</p>
                        </div>
                      </div>
                    </div>
                </div>
                <div id="box">
                  <div className="imgbox" id="secondBox"></div>
                    <div className="textbox">
                      <h2>The Role of Human Emotions in the Future of Transport</h2>
                      <p>Getting from A to B is about to feel very different</p>
                      <div className="byline">
                      <img src="/images/writer-2.jpeg"></img>
                      <div className="bylinetext">
                        <h3>Ben Bland</h3>
                          <p>Nov 1, 7 min read</p>
                          </div>
                        </div>
                    </div>
                </div>
                <div id="box">
                  <div className="imgbox" id="thirdBox"></div>
                    <div className="textbox">
                      <h2>The March of the Losers</h2>
                      <p>Around the world, the victims are becoming the abusers, and Donald Trump is their king.</p>
                      <div className="byline">
                      <img src="/images/writer-3.jpeg"></img>
                      <div className="bylinetext">
                        <h3>Carl Moore</h3>
                          <p>Nov 9, 31 min read</p>
                          </div>
                        </div>
                    </div>
                </div>
                <div id="box">
                  <div className="imgbox" id="fourthBox"></div>
                    <div className="textbox">
                      <h2>The Burning Season</h2>
                      <p>You cannot save everything when the fires come to Northern California.</p>
                      <div className="byline">
                      <img src="/images/writer-4.jpeg"></img>
                      <div className="bylinetext">
                        <h3>Lindsey Smith</h3>
                          <p>Nov 9, 31 min read</p>
                          </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
    )
  }

}

export default App
