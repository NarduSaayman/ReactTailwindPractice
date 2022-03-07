type ButtonProps = {
  Text: string
}

export default function Button(props: ButtonProps) {
  const { Text } = props
  return (
    <button className="bg-button py-2 sm:py-3 px-6 rounded-lg text-sm leading-normal text-white">
      {Text}
    </button>
  )
}
