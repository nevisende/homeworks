import axios from 'axios'
export default async(userId=1) => {
    const user = await axios(`https://jsonplaceholder.typicode.com/users/${userId}`)
    return user
}