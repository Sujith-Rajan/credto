"use client"
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import { persistor, store } from "./store";


type Props = {
    children: React.ReactNode;
}

const PersistProvider = ({ children }: Props) => {
    return (
        <div>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    {children}
                </PersistGate>
            </Provider>
        </div>
    )
}

export default PersistProvider;
