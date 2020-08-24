import React from "react";
import MainView from "./views/MainView";
import { TodosContextProvider } from "./todos/TodosContext";

const App = () => {
    return (
        <>
            <TodosContextProvider>
                <MainView />
            </TodosContextProvider>
        </>
    );
};

export default App;
