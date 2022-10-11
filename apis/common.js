const http = uni.$u.http

// post请求，获取菜单
export const testApi = () => http.get('/test')