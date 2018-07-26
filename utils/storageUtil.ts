export function getToken() : string {
    return window.localStorage.getItem('blog-token') || '';
}
export function setToken(token : string) : void {
    window.localStorage.setItem('blog-token', token);
}