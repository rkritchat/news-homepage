type pageProp = {
  img: string
  no: string
  header: string
  topic: string
}
function Card({ img, no, header, topic }: pageProp) {
  return (
    <div className='w-full flex gap-6 mt-8 mr-3'>
      <img src={img} alt='img' className='w-36 h-36' />
      <div className='flex flex-col gap-2'>
        <h1 className='text-3xl font-bold text-gray-300'>{no}</h1>
        <p className='text-[#00001a] font-[700] hover:text-[#f15e50] cursor-pointer'>
          {header}
        </p>
        <p className='text-[#5d5f79] text-sm min-w-[12rem]'>{topic}</p>
      </div>
    </div>
  )
}

export default Card
