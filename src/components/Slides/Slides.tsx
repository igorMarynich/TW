import * as React from 'react';

// This is the main component that you need.
import SlidingContainer from 'react-sliding-container';
// Component comes without CSS styles, so if you want to have default ones you must include this
import 'react-sliding-container/lib/main.css';

// import "assets/scss/App.scss";
import Slide from 'react-sliding-container/lib/components/Slide';

export default class Slides extends React.Component {
  render(): JSX.Element {
    return (
      <div className="container app-component">
        <div className="row">
          <div className="col-4 text-center py-5">
            <SlidingContainer
              options={{
                className: 'my-slider',
                height: '298px',
                width: '455px',
                slideXMarginPx: 10,
                showArrows: true,
              }}
            >
              <Slide backgroundImage="url('https://www.publicdomainpictures.net/pictures/130000/velka/abstract-wallpaper-1442844111BON.jpg')">
                <div>
                  <h2>Hello world!</h2>
                </div>
              </Slide>
              <Slide backgroundImage="url('https://cdn.pixabay.com/photo/2016/06/02/02/33/triangles-1430105__340.png')">
                <div>
                  <h2>This works!</h2>
                </div>
              </Slide>
              <Slide backgroundImage="url('https://images2.alphacoders.com/720/thumb-1920-72092.jpg')">
                <div>
                  <iframe
                    style={{
                      position: 'absolute',
                      top: 0,
                      bottom: 0,
                      left: 0,
                      right: 0,
                      width: '100%',
                      height: '100%',
                    }}
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/JhKBSLRU5XA?start=10"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              </Slide>
              <Slide backgroundImage="url('http://server1.intermedia.ge/pictures/original/190/190695.jpg?/ekranis-foni.jpg')">
                <div className="container-fluid mt-5">
                  <div className="row pt-5">
                    <div className="col-4 py-5" style={{ background: 'rgba(255, 255, 255, 0.2)' }}>
                      1st col
                    </div>
                    <div className="col-4 py-5" style={{ background: 'rgba(255, 255, 255, 0.3)' }}>
                      2nd col
                    </div>
                    <div className="col-4 py-5" style={{ background: 'rgba(255, 255, 255, 0.4)' }}>
                      3rd col
                    </div>
                  </div>
                </div>
              </Slide>
              <Slide backgroundImage="url('https://5dwallpaper.com/wp-content/uploads/2016/06/space-wallpaper-hd6.jpg')">
                <div>
                  <h2>Nice picture.</h2>
                </div>
              </Slide>
              <Slide backgroundImage="url('http://aslania.com/wp-content/uploads/2018/03/abstract-wallpapers-11.jpg')">
                <div>
                  <h2>Why not this one too.</h2>
                </div>
              </Slide>
            </SlidingContainer>
          </div>
        </div>
      </div>
    );
  }
}
