export const getQueryStringFromParams = (params: any) => {
    let query = '';
    Object.keys(params).forEach(((key: string, index: number) => {
        query = query + `${index === 0 ? '?' : '&'}${key}=${params[key]}`
    }))
    if(query) return query
    return query
}