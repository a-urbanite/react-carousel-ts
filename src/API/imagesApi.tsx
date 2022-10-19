const  fetchImages = async () => {
  const res = await fetch('https://api.unsplash.com/photos/random?count=5', {
    headers: {
      'Authorization': `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_TOKEN}`
    }
  })
  const imgArr = res.json()
  return imgArr
}

export default fetchImages;