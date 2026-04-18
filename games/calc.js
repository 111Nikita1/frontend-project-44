const description = 'What is the result of the expression?'

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const operators = ['+', '-', '*']

const generateRound = () => {
  const num1 = getRandomInt(1, 30)
  const num2 = getRandomInt(1, 30)
  const operator = operators[getRandomInt(0, operators.length - 1)]
  const question = `${num1} ${operator} ${num2}`
  let correctAnswer
  switch (operator) {
    case '+':
      correctAnswer = num1 + num2
      break
    case '-':
      correctAnswer = num1 - num2
      break
    case '*':
      correctAnswer = num1 * num2
      break
    default:
      correctAnswer = null
  }
  return { question, correctAnswer: String(correctAnswer) }
}

export { description, generateRound }
