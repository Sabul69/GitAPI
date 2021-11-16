export const Fetch = async (city) =>{
    const request = await fetch(url);
    const result = await request.json();
    return result
}