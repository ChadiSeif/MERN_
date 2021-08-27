import { Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/NavBar/Navbar";
import ContactList from "./Pages/ContactList/ContactList";
import EditAddContact from "./Pages/EditAddContact/EditAddContact";
import Error from "./Pages/Errors/Error";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={ContactList} />
        <Route
          path={["/Addcontact", "/Editcontact"]}
          component={EditAddContact}
        />
        <Route path="/*" component={Error} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
