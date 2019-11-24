export const LOGIN = 'LOGIN';
export const INITIAL_LOGIN = 'INITIAL_LOGIN';
export const DATA = 'DATA';
export const ERROR = 'ERROR';
export const CLEAR_ERROR = 'CLEAR_ERROR';

export function login(user: any) {
    return {
        type: 'LOGIN',
        user
    }
}

export function initialLogin() {
    return {
        type: 'INITIAL_LOGIN'
    }
}

export function page(data: any) {
    return {
        type: 'DATA',
        data
    }
}

export function errorAction(message: any) {
    return {
        type: 'ERROR',
        message
    }
}

export function clearError() {
    return {
        type: 'CLEAR_ERROR',
    }
}