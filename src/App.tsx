import Navbar from "./Components/Navbar"
import Shining from "./Components/Shining"

const App = () => {
  return (
    <div className="min-h-screen w-full dark:bg-zinc-900 dark:text-[#EFE6DD] text-[#584B53] bg-[#FEF5EF] flex flex-col justify-start items-center">
      <div className="w-full flex items-center justify-center">
        <Navbar />
      </div>
      <div className="h-[20vw] w-[60%] border-b dark:border-zinc-700 border-[#584B53] flex items-center  justify-center font-semibold text-6xl flex-col text-center leading-[4vw]">
        <h1 className="w-[80%] ">Connecting Developers to the </h1>
        <h1 className="w-[60%] flex gap-4 items-center justify-center">Best of <h1 className="dark:bg-[#FEF5EF] px-5 dark:text-zinc-900  rounded-xl border-2 border-[#584B53]">GitHub</h1></h1>
      </div>
      <Shining />
    </div>
  )
}

export default App