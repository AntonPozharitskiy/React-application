export function authHeader() {
    // return authorization header with jwt token
    let user = JSON.stringify(localStorage.getItem('user'));

    if (user && user.accessToken) {
        return {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Authorization': 'Bearer ' + user.accessToken };
    } else {
        return {};
    }
}
