import React from "react";
import MainView from "./views/MainView";
import { TodosContextProvider } from "./todos/TodosContext";

const App: React.FC = () => {
    return (
        <>
            <TodosContextProvider>
                <MainView />
            </TodosContextProvider>
        </>
    );
};

export default App;
