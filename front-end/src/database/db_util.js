import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

// fetch a paginated records list


export async function getSeries(){
    try {
        const records = await pb.collection('series').getFullList({
            sort: 'created',
        });
        return {
            response: "Request was succesfully transferred", 
            data: JSON.parse(JSON.stringify(records)) 
        }
    } catch (err) {
        return {
            response: err.response,
            data: []
        }
    }
}