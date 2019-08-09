import React from 'react';
import { Button} from 'reactstrap'; 
import CreatePost from './containers/CreatePost';
import PostList from './containers/PostList';
import NewPost from './components/NewPost';

function App() {
  return (
    <div className="container">
      <div className="row" style={stylesApp}>
        <div className="col-md-6">
          <CreatePost />
        </div>
        <div className="col-md-6">
          <PostList />
        </div>
      </div>
    </div>
  );
}

export default App;

const stylesApp = {
  marginTop: 40
}
