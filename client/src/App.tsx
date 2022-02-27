import {BrowserRouter, Switch, Route} from "react-router-dom";
import AddTodoPage from "design-system/pages/AddTodoPage";
import TodoListPage from "design-system/pages/TodoListPage";

function App() {
  return (
    <BrowserRouter>
      {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
      <Switch>
        <Route exact path="/" component={AddTodoPage} />
        <Route exact path="/list" component={TodoListPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
