import logo from "./logo.svg";
import "./App.css";

function Feature() {
  return (
    <div className="feature">
      <img src="" alt="" className="feature-image" />
      <h3 className="feature-title">Title</h3>
      <p className="feature-desc">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
        aliquid qui reprehenderit dignissimos possimus. Aperiam, dicta ipsam
        quasi dignissimos perferendis, sit natus nostrum ullam, esse aspernatur
        ipsum quia fuga voluptatibus?
      </p>
    </div>
  );
}

function App() {
  return (
    <div>
      {/* <Feature></Feature>
      <Feature></Feature>
      <Feature></Feature> */}
      <YoutubeItem image="https://images.unsplash.com/photo-1684095756735-6d40bea79cc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=1000&q=60"></YoutubeItem>
      <YoutubeItem image="https://images.unsplash.com/photo-1684437310642-c3660c463cf1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=1000&q=60"></YoutubeItem>
    </div>
  );

  //Pros -> Properties
  function YoutubeItem(props) {
    console.log(props);
    return (
      <div className="youtube-item">
        <div className="youtube-image">
          <img src={props.image} alt="" />
        </div>
        <div className="youtube-footer">
          <img
            src="https://images.unsplash.com/photo-1682686580433-2af05ee670ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=1000&q=60"
            alt=""
            className="youtube-avatar"
          />
          <div className="youtube-info">
            <h3 className="youtube-title">Learning React</h3>
            <h4 className="youtube-author">Evonder</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
