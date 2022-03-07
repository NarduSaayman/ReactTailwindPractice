import Button from "./Button"

export default function Header() {
  return (
    <div
      id="Header"
      className="bg-body pt-10 pb-8 flex flex-wrap items-center justify-center xl:justify-end w-full"
    >
      <div className="hidden sm:flex flex-col font-bold mb-5 text-4xl ml-3 justify-center xl:flex-auto xl:justify-start min-w-[100px]">
        <div className="w-2 h-2 rounded-full bg-primary"></div>
        <div id="Logo" className="font-PT-serif -m-1.5">
          IT-tech
        </div>
      </div>
      <ul className="flex font-poppins flex-row font-semibold text-sm items-center px-5 gap-3 sm:gap-20">
        <li className="cursor-pointer text-primary hover:text-primary">Home</li>
        <li className="cursor-pointer text-secondary hover:text-primary">
          About
        </li>
        <li className="cursor-pointer text-secondary hover:text-primary">
          Services
        </li>
        <li className="cursor-pointer text-secondary hover:text-primary">
          Team
        </li>
        <div className="shadow-lg shadow-glow ">
          <Button Text={"Get Started"} />
        </div>
      </ul>
    </div>
  )
}
