const INITIAL_STATE = {
    activedOpa: {},
    modules:[
        {
            id: 1,
            title: 'testetitle'
        },
        {
            id: 2,
            title: 'testetitle2'
        }
    ]
}

const teste = (state = INITIAL_STATE, action) => {
    if(action.type === 'OPA_TESTE'){
        return {...state, activedOpa: action.module}
    }
    console.log(action)
    return state
}

export default teste