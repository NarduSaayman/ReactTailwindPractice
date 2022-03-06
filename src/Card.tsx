type CardProps = {
  topic: string
  tags: string[]
}

type TagProps = {
  name: string
}

const Tag = (props: TagProps) => {
  const { name } = props
  return <span className="">{name}</span>
}

export default function Card(props: CardProps) {
  console.log(`props:`, props)
  const { topic, tags } = props

  return (
    <div className="">
      <div>{topic}</div>
      {tags.map((tag) => (
        <Tag name={tag} key={tag} />
      ))}
    </div>
  )
}
