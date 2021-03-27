import {Provider} from 'react-redux'
import Login from './pages/User/Login'
import store from './store/index'
function App(){
    return (
        <Provider store={store}>
            store is work
            <Login />
        </Provider>
    )
}

export default App