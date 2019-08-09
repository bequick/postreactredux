import React from 'react';
import { Button} from 'reactstrap'; 
import NewPost from './components/NewPost';


function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <NewPost />
        </div>
        <div className="col-md-6">
          Display Post
        </div>
      </div>
    </div>
  );
}

export default App;
