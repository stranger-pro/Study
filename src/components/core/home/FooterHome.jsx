import React from 'react'
import { Link } from 'react-router-dom'

const FooterHome = ({data}) => {
    const items = data.links;
    
  return (
    <div className='p-8 flex-1 min-w-0'>
        <div className='text-[0.9rem] font-bold opacity-55 text-white mb-4'>{data.title}</div>
        
        <div className='text-[0.8rem] opacity-25 text-white wrap-break-word'>
            {
                items.map((item,index) => {
                    return <Link key={index} to={item.link}><p  className='mb-2'>{item.title}</p></Link>
                })
            }
        </div>
    </div>
  )
}

export default FooterHome
