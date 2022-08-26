import { Provider } from 'react-redux';
import CompletedTodoList from './components/CompletedTodoList';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import store from './redux/store';

function App() {
    return (
        <Provider store={store}>
            <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans mb-0 max-h-96">
                <Navbar />

                <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
                    <Header />

                    <hr className="mt-4" />

                    <TodoList />

                    <hr className="mt-4" />

                    <Footer />
                </div>
            </div>
            <div className="grid place-items-center p--5 bg-blue-100 px-6 font-sans ">
                <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
                    <h2 className="text-lg">Completed Tasks</h2>
                    <CompletedTodoList />
                </div>
            </div>
        </Provider>
    );
}

export default App;
