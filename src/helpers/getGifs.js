export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=i7njJYMAOT9UhqYvqmizDOm88vgpG2qY&q=${category}&limit=6&offset=1`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  return gifs;
};
