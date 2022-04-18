type initialStateType = typeof initialState

const initialState = {
    counter: 0,
    max: 10,
    min: 0
}

export const counterReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case "CHANGE-COUNTER":
            return {
                ...state,
                counter: action.counter + 1
            }
        case "RESET-COUNTER":
            return {
                ...state,
                counter: action.value
            }
        case "MAX-COUNTER":
            return {
                ...state,
                max: action.value
            }
        case "MIN-COUNTER":
            return {
                ...state,
                counter: action.min,
                min: action.min
            }

        default:
            return state
    }
}

export const changeCounter = (counter: number) => ({type: 'CHANGE-COUNTER', counter} as const)
export const resetCounter = (value: number) => ({type: "RESET-COUNTER", value} as const)
export const maxCounter = (value: number) => ({type: "MAX-COUNTER", value} as const)
export const minCounter = (min: number) => ({type: "MIN-COUNTER", min} as const)

export type ActionsType = ReturnType<typeof changeCounter>
    | ReturnType<typeof resetCounter>
    | ReturnType<typeof maxCounter>
    | ReturnType<typeof minCounter>