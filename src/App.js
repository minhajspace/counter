
import Counter from './Counter'
import { Provider } from "react-redux";
import store from './Store'

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
export default App