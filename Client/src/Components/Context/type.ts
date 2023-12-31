import { RecipeType } from "@/Screens/Home/type"

export type IngredientTagReturn ={
    tagList: string[],
    setTagList: (tag: string[]) => void,
    getLength: () => number
}

export type UserReturn = {
    userInfo: UserType,
    setUserData: (user: UserType) => void,
    onDeleteMyDishes: (name: string) => void,
    onAddSaveDishes: (recipe: RecipeType) => void
}

export type UserType = {
    name: string,
    id: string,
    avatar: string,
    myDishes: RecipeType[]
    saveDishes: RecipeType[]
    username: string,
    password: string
}