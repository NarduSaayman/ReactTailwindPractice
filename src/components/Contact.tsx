import Button from "./Button"

export default function Contact() {
  const img =
    "https://updatedgospel.org/wp-content/uploads/2021/09/Tracy-the-writer.jpg"

  return (
    <div className="flex flex-wrap flex-row pb-48 gap-10 lg:gap-0 px-14 items-center">
      <div className="lg:w-1/2 md:pr-16 pl-1">
        <h2 className="flex font-poppins font-bold text-[40px] pb-4 text-header text-left">
          Get handling now
        </h2>
        <p className="font-medium font-poppins text-secondary text-left text-sm pb-12 tracking-tight leading-normal">
          It is a long established fact that reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution.
        </p>
        <Button Text={"Let's Contact"} />
      </div>
      <div className="flex justify-center items-center lg:w-1/2 overflow-hidden rounded-3xl h-[350] md:h-[300px] l:h-[200px] xl:h-[300px] 2xl:h-[325px]">
        <img
          className="flex-shrink-0 object-cover min-h-full min-w-full 2xl:-mt-14"
          src="https://updatedgospel.org/wp-content/uploads/2021/09/Tracy-the-writer.jpg"
          alt="Formal Black Woman with I-Pad Smiling"
        />
      </div>
    </div>
  )
}
