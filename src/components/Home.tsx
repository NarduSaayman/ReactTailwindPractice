export default function Home() {
  const img = `https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3308&q=80`

  return (
    <div id="HomePage" className="flex flex-col">
      <div id="Home" className="container pb-24">
        <h1 className="flex pt-10 font-poppins font-bold leading-relaxed text-[40px] text-header justify-end text-center md:text-left w-[100%] md:w-[50vh]">
          Simplify your company systems with our IT Solutions
        </h1>

        <div className="flex flex-wrap md:flex-nowrap flex-row gap-10 xl:gap-36 justify-center px-40 lg:px-0">
          <div className="flex items-center justify-center xl:items-end xl:justify-start">
            <div
              id="aboutIMG"
              className="w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] mb-28 rounded-3xl overflow-hidden"
            >
              <img
                className="object-fit -mt-14"
                src={img}
                alt="random image"
              ></img>
            </div>
          </div>

          <div className="flex flex-col mb-16 pl-12 lg:pl-0 justify-between font-poppins font-bold">
            <div className="flex flex-row">
              <div className="w-56 text-center">
                <h2 className="itemHeader italic font-medium text-body text-9xl">
                  1
                </h2>
              </div>
              <div className="p-11 pb-12 pl-0 pr-10 mt-2">
                <h3 className="text-2xl text-header pb-3">
                  Project Discussion
                </h3>
                <p className="font-medium text-secondary text-sm leading-normal">
                  It is a long established fact that reader will be distracted
                  by the readable content.
                </p>
              </div>
            </div>

            <div className="flex flex-row">
              <div className="w-56 text-center">
                <h2 className="itemHeader italic font-medium text-body text-9xl">
                  2
                </h2>
              </div>
              <div className="p-11 pb-12 pl-0 pr-10 mt-2">
                <h3 className="text-2xl text-header pb-3">Case Study</h3>
                <p className="font-medium text-secondary text-sm leading-normal">
                  It is a long established fact that reader will be distracted
                  by the readable content.
                </p>
              </div>
            </div>

            <div className="flex flex-row">
              <div className="w-56 text-center">
                <h2 className="itemHeader italic font-medium text-body text-9xl">
                  3
                </h2>
              </div>
              <div className="p-11 pb-12 pl-0 pr-10 mt-2">
                <h3 className="text-2xl text-header pb-3">Execute Project</h3>
                <p className="font-medium text-secondary text-sm leading-normal">
                  It is a long established fact that reader will be distracted
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
