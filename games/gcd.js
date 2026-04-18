const description = 'Find the greatest common divisor of given numbers.'

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const gcd = (a, b) => {
  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }
  return a
}

const generateRound = () => {
  const num1 = getRandomInt(1, 100)
  const num2 = getRandomInt(1, 100)
  const question = `${num1} ${num2}`
  const correctAnswer = String(gcd(num1, num2))
  return { question, correctAnswer }
}

export { description, generateRound }
