import data from "./data"
import Image from "./components/Image"
console.log(data)
function App() {
  const images = data.map(item =>{
    return <Image
              img={item.coverImg}
              title={item.title}          
          />
  })
  console.log(images)
  return (
    <div>
      {images}
    </div>
  );
}

export default App;
