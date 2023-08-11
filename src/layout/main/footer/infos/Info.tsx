

const Info = ({
  icon,
  text
}: any) => {
  return (
    <div
    className='
    flex gap-3 items-center
    text-gray-600 text-sm
    #first:border-none
    #last:border-none
    '
    >
      {icon}
      <span>
        {text}
      </span>
    </div>
  )
}

export default Info;