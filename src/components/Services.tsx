type ServiceCardProps = {
  Icon: string
  IconColor: string
  Heading: string
  Description: string
}

const ServiceCard = (props: ServiceCardProps) => {
  const { Icon, IconColor, Heading, Description } = props
  return (
    <div className="bg-card shadow-l shadow-card-shadow w-72 h-68 rounded-2xl p-11 mt-20 mx-9">
      <div
        className={`w-16 h-16 text-sm rounded-full ${IconColor} table-cell align-middle text-center`}
      >
        <i className={`fa fa-laptop-code${Icon} fa-2x text-card`}></i>
      </div>
      <h3 className="font-bold text-sm text-header pt-6 pb-3">{Heading}</h3>
      <p className="font-semibold text-secondary text-xs leading-[1.6]">
        {Description}
      </p>
    </div>
  )
}

export default function Services() {
  return (
    <div id="PageBody" className="container">
      <div id="ServicesPage" className="pt-48 pb-3 bg-body-secondary">
        <div id="ServicesHeader">
          <h2 className="flex font-poppins font-bold text-[40px] text-header text-center justify-center">
            Here are the services we provide
          </h2>
          <p className="font-medium text-secondary text-sm text-center pt-2">
            The point of using Lorem Ipsum is that it has.
          </p>
        </div>

        <div
          id="ServicesCards"
          className="flex flex-row flex-wrap font-poppins justify-center mb-48"
        >
          <ServiceCard
            Icon={"fa fa-laptop-code"}
            IconColor={"bg-cardPink"}
            Heading={"Software Development"}
            Description={
              "It is a long established fact that a reader will be distracted by the readable content."
            }
          />

          <ServiceCard
            Icon={"fa fa-sitemap"}
            IconColor={"bg-cardOrange"}
            Heading={"System Application"}
            Description={
              "It is a long established fact that a reader will be distracted by the readable content."
            }
          />

          <ServiceCard
            Icon={"fa fa-cloud-download-alt"}
            IconColor={"bg-cardBlue"}
            Heading={"Network Solutions"}
            Description={
              "It is a long established fact that a reader will be distracted by the readable content."
            }
          />

          <ServiceCard
            Icon={"fa fa-brain"}
            IconColor={"bg-cardPurple"}
            Heading={"A.I System"}
            Description={
              "It is a long established fact that a reader will be distracted by the readable content."
            }
          />

          <ServiceCard
            Icon={"fa fa-window-restore"}
            IconColor={"bg-cardRed"}
            Heading={"Web & App Development"}
            Description={
              "It is a long established fact that a reader will be distracted by the readable content."
            }
          />

          <ServiceCard
            Icon={"fa fa-comments"}
            IconColor={"bg-cardGreen"}
            Heading={"IT Consultation"}
            Description={
              "It is a long established fact that a reader will be distracted by the readable content."
            }
          />
        </div>
      </div>
    </div>
  )
}
