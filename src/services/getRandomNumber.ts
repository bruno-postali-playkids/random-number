import axios from 'axios'

export type RandomProps = {
  numbers: number
  min: number
  max: number
}


export async function getRandomNumber({numbers, min, max}: RandomProps) {
  const API_URL = `https://www.random.org/integers/?num=${numbers}&min=${min}&max=${max}&col=1&base=10&format=plain&rnd=new`
  const options = {
    method: 'GET',
    url: API_URL,
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const response = await axios.request(options)
  return response.data
}
