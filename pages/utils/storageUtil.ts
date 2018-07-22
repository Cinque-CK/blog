export function getToken() : string {
    return localStorage.getItem('blog-token') || '';
}
export function setToken(token : string) : void {
    localStorage.setItem('blog-token', token);
}