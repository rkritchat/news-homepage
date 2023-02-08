import Card from './Card'
import News from './News'

function Content() {
  return (
    <div className='w-full'>
      <FirstContent />
      <SecondContent />
    </div>
  )
}

function SecondContent() {
  const data = [
    {
      img: '/image-retro-pcs.jpg',
      no: '01',
      header: 'Reviving Retro PCs',
      topic: 'What happens when old PCs are given modern upgrades?',
    },
    {
      img: '/image-top-laptops.jpg',
      no: '02',
      header: 'Top 10 Laptops of 2022',
      topic: 'Our best picks for various needs and budgets.',
    },
    {
      img: '/image-gaming-growth.jpg',
      no: '03',
      header: 'The Growth of Gaming',
      topic: 'How the pandemic has sparked fresh opportunities.',
    },
  ]
  return (
    <div className='flex flex-col md:flex-row mt-4 pb-10'>
      {data.map((e, i) => (
        <Card key={i} img={e.img} no={e.no} header={e.header} topic={e.topic} />
      ))}
    </div>
  )
}

function FirstContent() {
  return (
    <div className='w-full flex gap-6 justify-between flex-col md:flex-row'>
      <LeftSection />
      <RightSection />
    </div>
  )
}

function MainImg() {
  return (
    <div>
      <img
        src='/image-web-3-mobile.jpg'
        alt='img-web-3-mobile'
        className='w-full md:hidden'
      />
      <img
        src='/image-web-3-desktop.jpg'
        alt='img-web-3-desktop'
        className='w-full hidden md:block h-[17rem] object-cover'
      />
    </div>
  )
}

function LeftSection() {
  return (
    <section className='w-full md:w-[96rem]'>
      <MainImg />
      <div className='flex flex-col md:flex-row justify-between gap-4 md:gap-3'>
        <div className='min-w-[18rem]'>
          <h1 className='mt-5 text-[3rem] font-[800] leading-[3rem] w-full'>
            The Bright Future of Web 3.0?
          </h1>
        </div>
        <div className='w-full flex flex-col gap-4 items-end'>
          <div>
            <p className='md:py-4 text-[0.98rem] leading-7 text-[#5d5f79] md:w-[23rem]'>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button className='text-white bg-[#f15e50] tracking-[0.4rem] py-4 px-8 font-[700] text-sm hover:bg-black cursor-pointer w-[15rem] mt-4'>
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function RightSection() {
  const newsData = [
    {
      header: 'Hydrogen VS Electric Cars',
      content: 'Will hydrogen-fueled cars ever catch up to EVs?',
    },
    {
      header: 'The Downsides of Al Artistry',
      content:
        'What are the possible adverse effects of on-demand Al image generation?',
    },
    {
      header: 'Is VC Funding Drying Up?',
      content:
        'Private funding by VC firms is down 50% YOY. We take a look at what that means.',
    },
  ]
  return (
    <section className='md:min-w-[18rem] md:max-w-[25rem] bg-black text-white py-6 px-5'>
      <h1 className='text-[#e9ab53] text-3xl font-[800] mb-3'>New</h1>
      <div className=''>
        {newsData.map((e, i) => (
          <div key={i}>
            <News header={e.header} content={e.content} />
          </div>
        ))}
      </div>
    </section>
  )
}
export default Content
