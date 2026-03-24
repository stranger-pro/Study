import FooterHome from '../core/home/FooterHome'
import {FooterLink2} from '../../data/footer-links'

const Footer = () => {
  return (
    <div className='bg-richblack-800 flex gap-8 p-6 justify-evenly'>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-1/2 min-w-0" > {/* Left */}
                <div className='h-fit mx-auto'><FooterHome data={FooterLink2[3]}/></div>
                <div className="flex mx-auto h-fit flex-col gap-3">
                  <div><FooterHome data={FooterLink2[4]}/></div>
                  <div><FooterHome data={FooterLink2[7]}/></div>
                </div>

                <div className="flex flex-col mx-auto h-fit gap-3">
                  <div><FooterHome data={FooterLink2[5]}/></div>
                  <div><FooterHome data={FooterLink2[6]}/></div>
                </div>
              </div>

              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 1/2 border-l-white/5 border-l-2 min-w-0"> {/* Right */}
                <div><FooterHome data={FooterLink2[0]}/></div>

                <div className="flex flex-col gap-3">
                  <div><FooterHome data={FooterLink2[1]}/></div>
                </div>

                <div className="flex flex-col gap-3">
                  <div><FooterHome data={FooterLink2[2]}/></div>
                </div>
              </div>
    </div>
  )
}

export default Footer
