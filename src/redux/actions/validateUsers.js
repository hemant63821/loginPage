import { VALIDATE_USER_ACTION } from '../../core/constants/action'
import { getUsers } from '../../utility/localStorage'

export function validateUser(userData) {
    return dispatch => {
        dispatch(request())
        const user = getUsers
        if (user.username === userData.username && user.password === userData.password) {
            return success('valid')
        }
        else {
            return failure('user not valid')
        }
    }

    function request() { return { type: VALIDATE_USER_ACTION.REQUEST } }
    function success(user) { return { type: VALIDATE_USER_ACTION.SUCCESS, payload: { ...user } } }
    function failure(error) { return { type: VALIDATE_USER_ACTION.FAILURE, payload: { error } } }
}