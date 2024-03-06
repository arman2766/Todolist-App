import Welcome from './component/Welcome';



function App() {
  let todoList
  return (
    <div className="bg-[#b2d1f5] h-screen flex items-center justify-center">
      <div className="w-[350px] py-10 px-10 h-[auto] min-h-[600px] rounded-2xl shadow-md bg-gradient-to-b from-primary_bg-start to-primary_bg-end mt-[50px] mb-[50px]">
        <Welcome />
      </div>
    </div>
  )
}

export default App