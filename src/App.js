import React from "react";
import Home from "./components/Home/Home";
import { Switch, Route } from "react-router-dom";
import SinglePost from "./components/SinglePost/SinglePost";
import NewPost from "./components/NewPost/NewPost";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/view_post/:id" component={SinglePost} />
        <Route exact path="/create_post" component={NewPost} />
      </Switch>
    </div>
  );
}

export default App;
