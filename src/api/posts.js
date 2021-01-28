export const getPosts = async () => {
    
    const response = await window.fetch('https://gorest.co.in/public-api/posts')
    
    if(!response.ok) {
        throw new Error (
            'Estamos teniendo problemas en el servidor, intenta luego'
        )
    } else {
        return response.json()
    }
}


