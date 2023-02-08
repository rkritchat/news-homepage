type pageProp = {
  header: string
  content: string
}
function News({ header, content }: pageProp) {
  return (
    <div className='border-b border-[#5d5f79] mb-4 pb-4'>
      <p className='font-[700] py-2 hover:text-[#e9ab53] cursor-pointer'>
        {header}
      </p>
      <p className='text-sm text-[#5d5f79]'>{content}</p>
    </div>
  )
}

export default News
