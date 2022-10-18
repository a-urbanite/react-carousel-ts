const  fetchImages = async () => {
  console.log(process.env.REACT_APP_UNSPLASH_ACCESS_TOKEN)
  const res = await fetch('https://api.unsplash.com/photos/random', {
    // mode: 'cors',
    headers: {
      'Authorization': `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_TOKEN}`
    }
  })
  const imgArr = res.json()
  // console.log(imgArr)
  return imgArr
}

export default fetchImages;