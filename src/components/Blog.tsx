type BlogCardProps = {
  img: string
  heading: string
  chip: string
  description: string
}

const BlogCard = (props: BlogCardProps) => {
  const { img, heading, chip, description } = props
  return (
    <div className="w-[70%] md:w-[40%] lg:w-[28%] font-poppins rounded-xl overflow-hidden bg-card shadow-card-shadow">
      <div className="ml-auto mr-6 relative -mt-8 top-11 w-20 py-[3.5px] text-center text-[8px] font-medium rounded-full bg-slate-50/60">
        {chip}
      </div>
      <div className="object-cover overflow-hidden h-52">
        <img className="z-10 object-cover" src={img} alt={heading} />
      </div>
      <div className="py-6 px-6">
        <h3 className="font-bold text-sm text-header pt-6 pb-3">{heading}</h3>
        <p className="font-medium text-secondary text-left text-ellipsis text-sm pb-10 leading-normal">
          {description}
        </p>
        <div className="text-xs font-medium text-right pb-3 text-header cursor-pointer hover:text-primary">
          Read more
        </div>
      </div>
    </div>
  )
}

export default function Blog() {
  return (
    <div id="BlogHeader" className="pb-44">
      <h4 className="flex justify-center font-poppins text-primary font-medium text-sm">
        FROM THE BLOG
      </h4>
      <h2 className="flex font-poppins font-bold text-[40px] text-header text-center justify-center">
        Recent news from the blog
      </h2>
      <p className="font-medium text-secondary text-sm text-center pt-1 pb-20">
        The point of using Lorem Ipsum is that it has.
      </p>
      <div id="BlogCards" className="flex flex-wrap gap-14 justify-center">
        <BlogCard
          img={"https://m.media-amazon.com/images/I/61vetcMI6tS._AC_SX522_.jpg"}
          heading={"Loren ipsum dolor sit amet lur"}
          chip={"News"}
          description={
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout ..."
          }
        />
        <BlogCard
          img={
            "https://uniim-share.shutterfly.com/procgtaserv/4790db33b3127cce9854895c2d180000000010kAbs2Llo2YtWTJQ"
          }
          heading={"Loren ipsum dolor sit amet lur"}
          chip={"Technology"}
          description={
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout ..."
          }
        />
        <BlogCard
          img={
            "https://i0.wp.com/www.opinza.com/wp-content/uploads/sites/4/2019/01/Screen-Shot-2019-01-25-at-10.03.55-AM.png"
          }
          heading={"Loren ipsum dolor sit amet lur"}
          chip={"Business"}
          description={
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout ..."
          }
        />
      </div>
    </div>
  )
}
