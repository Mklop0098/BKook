import React, { PropsWithChildren, createContext, useContext, useEffect, useState } from 'react';
import { IngredientTagReturn } from './type';

export const IngredientTagContext = createContext<IngredientTagReturn>({} as IngredientTagReturn);


export const useTag = (): IngredientTagReturn =>
{
    return useContext(IngredientTagContext);
};

export const IngredientTagProvider: React.FC<PropsWithChildren> = (props) =>
{
    const [tagList, setTagList] = useState<string[]>([]);

    const getLength = () => {
        return tagList.length
    }

    return (
        <IngredientTagContext.Provider value={{ tagList, setTagList, getLength }}>
            {props.children}
        </IngredientTagContext.Provider>
    );
};