import { createContext, useContext } from "react";

const useCreateControlledContext = <ContextType extends unknown>(
    contextName?: string
) => {
    const context = createContext<ContextType | undefined>(undefined);
    const useControlledContext = () => {
        const contextValue = useContext(context);
        if (!contextValue) {
            throw new Error(`${contextName} used outside of its Provider`);
        }
        return contextValue;
    };

    return [useControlledContext, context] as const;
};

export default useCreateControlledContext;
