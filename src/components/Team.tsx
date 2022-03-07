export default function Team() {
  return (
    <div>
      <div className="md:h-[450px] overflow-hidden">
        <div className="z-20 relative h-0 py-0 lg:py-32">
          <div className="py-2 sm:py-20 xl:py-0">
            <h2 className="flex font-poppins font-bold text-[30px] sm:text-[40px] pb-1 text-body text-center justify-center">
              Get to know how we reaches you
            </h2>
            <p className="font-medium text-body text-sm pb-2 sm:pb-7 text-center md:pt-2 lg:px-0 2xl:px-[660px]">
              It is a long established fact that reader will be distracted by
              the readable.
            </p>
            <div className="text-center pb-10">
              <button className="rounded-full border-2 px-6 py-2.5 font-poppins font-medium text-sm text-body hover:text-button hover:bg-body">
                Learn Team
              </button>
            </div>
          </div>
        </div>
        <div className="object-cover">
          <img
            className="z-10 lg:-mt-[350px] xl:-mt-[400px] 2xl:-mt-[565px] filter brightness-75"
            src="https://images.ctfassets.net/freurdme1ae3/169jBkragFwbRx2BJR98QY/86feb6e240698dddefa96d10487d3ccb/jud-mackrill-Of_m3hMsoAA-unsplash.jpg?w=2048&h=1152&q=80&fit=fill&f=face"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
