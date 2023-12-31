export type IngredientType = {
    name: string,
    iconUrl?: string,
    onClick?: () => string[] | void
}

type StepType = {
    describe: string,
    image?: string[]
}

export type RecipeType = {
    id: number,
    name: string,
    owner: string,
    ownerAvatar: string,
    like: number,
    heart: number,
    clap: number,
    imgUrl: string,
    ingredient: string[],
    ingredientDetail: string[],
    stepList: StepType[]
}



export type RecipeTagType = {
    name: string,
    recipeList: RecipeType[],
    thumbnail: string
}