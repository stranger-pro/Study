

const HomeTimeline = ({img, title , para}) => {
  return (
    <div className="flex gap-5 items-center">
        <div className="bg-white rounded-full shadow shadow-blue-25 w-fit p-2 px-3 h-9 flex items-center justify-center">
            <img className="w-3 rounded-full" src={img} alt="'logo"/>
        </div>
        <div>
            <div className="text-md font-bold opacity-95">{title}</div>
            <p className="text-sm opacity-75">{para}</p>
        </div>
    </div>
  )
}

export default HomeTimeline
