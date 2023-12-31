import React, { PropsWithChildren, createContext, useContext, useEffect, useState } from 'react';
import { IngredientTagReturn, UserReturn, UserType } from './type';
import { RecipeType } from '@/Screens/Home/type';

export const UserContext = createContext<UserReturn>({} as UserReturn);


export const useUser = (): UserReturn =>
{
    return useContext(UserContext);
};


export const UserContextProvider: React.FC<PropsWithChildren> = (props) =>
{
    const [userInfo, setUserInfo] = useState<UserType>({} as UserType)    

    const setUserData = (user: UserType) => {
        setUserInfo(user)
    }

    const onDeleteMyDishes = (name: string) => {
        setUserInfo({...userInfo, 'myDishes': userInfo.myDishes.filter(i => i.name !== name)})
    }

    const onAddSaveDishes = (recipe: RecipeType) => {
        setUserInfo({...userInfo, 'saveDishes': [...userInfo.saveDishes, recipe]})
    }

    return (
        <UserContext.Provider value={{userInfo, setUserData, onDeleteMyDishes, onAddSaveDishes}}>
            {props.children}
        </UserContext.Provider>
    );
};