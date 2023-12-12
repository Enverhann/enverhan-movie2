export const LOGIN='LOGIN'
export const LOGOUT='LOGOUT'

export const login=(user)=>({
    type:LOGIN,
    payload:user,
})

export const logout=()=>({
    type:LOGOUT,
})

const authReducer=(state=null, action)=>{
    switch(action.type){
        case LOGIN:
            return action.payload
        case LOGOUT:
            return null
        default:
            return state;
    }
}

export default authReducer;