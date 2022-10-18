const  fetchImages = async () => {
  const res = await fetch('https://unsplash.com/photos/random')
  const imgArr = res.json()
  // console.log(imgArr)
  return imgArr
}

export default fetchImages;