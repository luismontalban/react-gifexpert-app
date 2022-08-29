export const getGifs = async (category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Kb7iuc4I6C27h8jo3bMsaLoR3qlg5La7&q=${category}&limit=20`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs=data.map(img=> ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    
    return gifs;
    
}