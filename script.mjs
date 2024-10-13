document.addEventListener('DOMContentLoaded', () => {
  const body = document.body
  const moonToggle = document.querySelector('.moon-toggle-container')
  const cloudContainer = document.querySelector('.cloud-container')
  const aurora = document.getElementById('aurora')

  const userPrefersDark =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches

  function getRandomValue (min, max) {
    return Math.random() * (max - min) + min
  }

  function createClouds () {
    const cloudCount = 3 + Math.floor(Math.random() * 2)
    const usedTopPositions = []

    for (let i = 0; i < cloudCount; i++) {
      const cloud = document.createElement('img')
      cloud.src = './images/cloud.png'
      cloud.classList.add('cloud')

      let topPosition
      do {
        topPosition = getRandomValue(10, 60)
      } while (usedTopPositions.some(pos => Math.abs(pos - topPosition) < 10))
      usedTopPositions.push(topPosition)
      cloud.style.top = `${topPosition}%`
      const duration = getRandomValue(20, 30)
      const delay = getRandomValue(0, 5)
      cloud.style.animation = `moveCloud ${duration}s linear ${delay}s forwards`

      cloudContainer.appendChild(cloud)

      setTimeout(() => {
        cloud.remove()
      }, (duration + delay) * 1000)
    }
  }

  function generateStars () {
    const numberOfStars = 100
    const starsContainer = document.querySelector('.stars')

    for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement('div')
      star.classList.add('star')

      const top = getRandomValue(0, 100)
      const left = getRandomValue(0, 100)
      star.style.top = `${top}%`
      star.style.left = `${left}%`

      const delay = getRandomValue(0, 5)
      const duration = getRandomValue(2, 4)
      star.style.animationDelay = `${delay}s`
      star.style.animationDuration = `${duration}s`

      starsContainer.appendChild(star)
    }
  }

  function showAuroraFor5Seconds () {
    aurora.style.display = 'block'

    setTimeout(() => {
      aurora.style.display = 'none'
    }, 5000)
  }

  // Detect and apply user preference for dark mode
  if (userPrefersDark) {
    body.classList.add('dark-mode')
  }

  // Initially generate stars
  generateStars()

  // Create clouds if not in dark mode
  if (!body.classList.contains('dark-mode')) {
    createClouds()
  }

  // Moon toggle functionality
  moonToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode')

    if (body.classList.contains('dark-mode')) {
      cloudContainer.innerHTML = '' // Clear clouds
      showAuroraFor5Seconds() // Show aurora
    } else {
      createClouds() // Generate clouds
    }

    console.log('Dark mode toggled')
  })

  // Remove clouds after 35 seconds if not in dark mode
  if (!body.classList.contains('dark-mode')) {
    setTimeout(() => {
      document.querySelectorAll('.cloud').forEach(cloud => cloud.remove())
    }, 35000)
  }
})
