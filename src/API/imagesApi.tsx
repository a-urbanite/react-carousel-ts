const  fetchImages = async () => {
  const res = await fetch('https://api.unsplash.com/photos/random', {
    // mode: 'cors',
    headers: {
      'Authorization': 'Client-ID q0QKQFpa2DffR2h8Akz1ITaEzNTQi8c1gRyxewil-K4'
    }
  })
  const imgArr = res.json()
  // console.log(imgArr)
  return imgArr
}

export default fetchImages;