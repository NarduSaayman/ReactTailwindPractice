import Card from "./Card"
import "./index.css"

function App() {
  return (
    <div>
      <div className="flex bg-body justify-center">
        <div id="PageBody" className="w-[100%] md:w-[80%] lg:w-[60%]">
          <div id="HomePage" className="grid grid-rows-home w-[100%] h-[100%]">
            <div
              id="Header"
              className="mb-6 flex flex-wrap items-center justify-center xl:justify-end"
            >
              <div className="font-bold text-4xl ml-3 justify-center xl:flex-auto xl:justify-start min-w-[100px]">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <div id="Logo" className="font-PT-serif -m-1.5">
                  IT-tech
                </div>
              </div>
              <ul className="flex flex-row font-semibold text-sm items-center px-5 gap-3 sm:gap-20">
                <li className="cursor-pointer text-primary hover:text-primary">
                  Home
                </li>
                <li className="cursor-pointer text-secondary hover:text-primary">
                  About
                </li>
                <li className="cursor-pointer text-secondary hover:text-primary">
                  Services
                </li>
                <li className="cursor-pointer text-secondary hover:text-primary">
                  Team
                </li>
                <button className="bg-primary py-2 sm:py-3 px-6 rounded-lg shadow-lg shadow-glow text-white">
                  Get Started
                </button>
              </ul>
            </div>

            <div id="Home" className="h-[100%]">
              <h1 className="flex h-[20%] lg:h-[30%] pt-10 font-poppins font-bold leading-relaxed text-[40px] text-header justify-end text-center md:text-left w-[100%] md:w-[50vh]">
                Simplify your company systems with our IT Solutions
              </h1>

              <div className="grid md:grid-cols-2">
                <div className="flex items-center justify-center lg:items-end lg:justify-start">
                  <div
                    id="aboutIMG"
                    className="w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] mb-28 rounded-3xl overflow-hidden"
                  ></div>
                </div>

                <div className="flex flex-col mb-16 justify-between font-poppins font-bold">
                  <div className="flex flex-row">
                    <h2 className="itemHeader italic font-medium text-body text-9xl px-4 pl-10">
                      1
                    </h2>
                    <div className="p-11 mt-2">
                      <h3 className="text-2xl text-header pb-3">
                        Project Discussion
                      </h3>
                      <p className="font-medium text-secondary text-sm leading-normal">
                        It is a long established fact that reader will be
                        distracted by the readable content.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-row">
                    <h3 className="itemHeader italic font-medium text-body text-9xl px-4">
                      2
                    </h3>
                    <div className="p-11 mt-2">
                      <h1 className="text-2xl text-header pb-3">Case Study</h1>
                      <p className="font-medium text-secondary text-sm leading-normal">
                        It is a long established fact that reader will be
                        distracted by the readable content.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-row">
                    <h3 className="itemHeader italic font-medium text-body text-9xl px-4">
                      3
                    </h3>
                    <div className="p-11 mt-2">
                      <h1 className="text-2xl text-header pb-3">
                        Execute Project
                      </h1>
                      <p className="font-medium text-secondary text-sm leading-normal">
                        It is a long established fact that reader will be
                        distracted by the readable content.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex bg-body-secondary justify-center">
        <div
          id="PageBody"
          className="lg:w-[60%] md:w-[80%] sm:w-[100%] h-[100%] "
        >
          <div id="ServicesPage" className="bg-body-secondary">
            <div id="ServicesHeader">
              <h1 className="flex mt-44 font-poppins font-bold text-[40px] text-header text-center justify-center">
                Here are the services we provide
              </h1>
              <p className="font-medium text-secondary text-sm text-center pt-2">
                The point of using Lorem Ipsum is that it has.
              </p>
            </div>

            <div
              id="ServicesCards"
              className="flex flex-row flex-wrap font-poppins justify-center mb-48"
            >
              <div className="bg-card shadow-l shadow-card-shadow w-72 h-68 rounded-2xl p-10 mt-20 mx-7">
                <div className="w-16 h-16 text-sm rounded-full bg-cardPink table-cell align-middle text-center">
                  <i className="fa fa-laptop-code fa-2x text-card"></i>
                </div>
                <h3 className="font-bold text-sm text-header pt-6 pb-3">
                  Software Development
                </h3>
                <p className="font-semibold text-secondary text-xs leading-[1.6]">
                  It is a long established fact that a reader will be distracted
                  by the readable content.
                </p>
              </div>

              <div className=" bg-card shadow-l shadow-card-shadow w-72 h-68 rounded-2xl p-10 mt-20 mx-7">
                <div className="w-16 h-16 text-sm rounded-full bg-cardOrange table-cell align-middle text-center">
                  <i className="fa fa-sitemap fa-2x text-card"></i>
                </div>
                <h3 className="font-bold text-sm text-header pt-6 pb-3">
                  System Application
                </h3>
                <p className="font-semibold text-secondary text-xs leading-[1.6]">
                  It is a long established fact that a reader will be distracted
                  by the readable content.
                </p>
              </div>

              <div className=" bg-card shadow-l shadow-card-shadow w-72 h-68 rounded-2xl p-10 mt-20 mx-7">
                <div className="w-16 h-16 text-sm rounded-full bg-cardBlue table-cell align-middle text-center">
                  <i className="fa fa-cloud-download-alt fa-2x text-card"></i>
                </div>
                <h3 className="font-bold text-sm text-header pt-6 pb-3">
                  Network Solutions
                </h3>
                <p className="font-semibold text-secondary text-xs leading-[1.6]">
                  It is a long established fact that a reader will be distracted
                  by the readable content.
                </p>
              </div>

              <div className=" bg-card shadow-l shadow-card-shadow w-72 h-68 rounded-2xl p-10 mt-20 mx-7">
                <div className="w-16 h-16 text-sm rounded-full bg-cardPurple table-cell align-middle text-center">
                  <i className="fa fa-brain fa-2x text-card"></i>
                </div>
                <h3 className="font-bold text-sm text-header pt-6 pb-3">
                  A.I System
                </h3>
                <p className="font-semibold text-secondary text-xs leading-[1.6]">
                  It is a long established fact that a reader will be distracted
                  by the readable content.
                </p>
              </div>

              <div className=" bg-card shadow-l shadow-card-shadow w-72 h-68 rounded-2xl p-10 mt-20 mx-7">
                <div className="w-16 h-16 text-sm rounded-full bg-cardRed table-cell align-middle text-center">
                  <i className="fa fa-window-restore fa-2x text-card"></i>
                </div>
                <h3 className="font-bold text-sm text-header pt-6 pb-3">
                  Web & App Development
                </h3>
                <p className="font-semibold text-secondary text-xs leading-[1.6]">
                  It is a long established fact that a reader will be distracted
                  by the readable content.
                </p>
              </div>

              <div className=" bg-card shadow-l shadow-card-shadow w-72 h-68 rounded-2xl p-10 mt-20 mx-7">
                <div className="w-16 h-16 text-sm rounded-full bg-cardGreen table-cell align-middle text-center">
                  <i className="fa fa-comments fa-2x text-card"></i>
                </div>
                <h3 className="font-bold text-sm text-header pt-6 pb-3">
                  IT Consultation
                </h3>
                <p className="font-semibold text-secondary text-xs leading-[1.6]">
                  It is a long established fact that a reader will be distracted
                  by the readable content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
