import { Provider } from "react-redux";
import './App.css';
import CakeContainer from "./components/CakeContainer";
import store from './redux/store';
import {HooksCakeContainer} from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/iceCreamContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
      <Provider store={store} >
        <div className="App">
          {/*  <ItemContainer cake/>*/}
          {/*  <ItemContainer />*/}
          {/*  <HooksCakeContainer />*/}
          {/*<CakeContainer />*/}
          {/*  <IceCreamContainer />*/}
          {/*  <NewCakeContainer />*/}
            <UserContainer />

        </div>

      </Provider>
  );
}

export default App;
