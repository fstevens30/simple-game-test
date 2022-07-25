;(() => {
  const canvas = document.getElementById('background')
  const context = canvas.getContext('2d')

  const width = window.innerWidth
  const height = window.innerHeight

  //set canvas to full screen
  canvas.width = width
  canvas.height = height
})()

//Creating a gradient background
const drawBackground = () => {
  // starts from x, y to x1, y1
  const background = context.createLinearGradient(0, 0, 0, height)
  background.addColorStop(0, '#FF69EB')
  background.addColorStop(1, '##FFDC5E')

  context.fillStyle = background
  context.fillRect(0, 0, width, height)
}

const drawForeground = () => {
  context.fillStyle = '#FF69EB'
  context.fillRect(0, height * 0.95, width, height)

  context.fillStyle = '#FFDC5E'
  context.fillRect(0, height * 0.955, width, height)
}

const drawSus = () => {
  const image = new Image()
  image.src = './assets/sus.png'

  image.onload = function () {
    /**
     * this - references the image object
     * draw at 90% of the width of the canvas - the width of the image
     * draw at 95% of the height of the canvas - the height of the image
     */
    context.drawImage(
      this,
      width * 0.9 - this.width,
      height * 0.95 - this.height
    )
  }
}

//stars setup
const numberOfStars = 100
const random = (min, max) => Math.random() * (max - min) + min

//drawing stars

const drawStars = () => {
  let starCount = numberOfStars

  context.fillStyle = '#fff'

  while (starCount--) {
    const x = random(25, width - 50)
    const y = random(25, height * 0.5)
    const size = random(1, 8)

    context.fillRect(x, y, size, size)
  }
}
