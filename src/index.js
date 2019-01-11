import bar from './test'
import './less/index.less'
import img from './img/4.jpg'

console.log(img)
bar()

const getData = async () => new Promise(res => setTimeout(() => res(100), 3000))

const main = async () => {
  
  const data = await getData()
  console.log(data);
}



main()
