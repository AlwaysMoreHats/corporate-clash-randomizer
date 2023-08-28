export default function rouletteEffect(callback: () => void, iterations: number = 10, delayMs: number = 50) {
  let count = 0
  const interval = setInterval(() => {
    count += 1
    callback()
    if(count >= iterations) {
      clearInterval(interval)
    }
  }, delayMs)
}