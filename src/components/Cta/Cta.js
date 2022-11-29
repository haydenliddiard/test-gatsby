import React from 'react'
import { Link } from 'gatsby'
import Cta1 from '../../images/coffee-cta-4.svg'
import Cta2 from '../../images/coffee-cta-3.svg'
import {Wrapper} from "./Cta.styles"

function Cta() {
  return (
    <Wrapper>
      <div className='cta-area'>
        <div className='cta-wrapper'>
            <Link to="/our-roasts/">
            <img src={Cta1} loading="lazy" className="cta1" alt="img"   />
            </Link>
            <Link to="/our-roasts/">
            <img src={Cta2} loading="lazy" className="cta2" alt="img"   />
            </Link>
        </div>
        </div>
        <div className='other-div'>
            <h1>Premium Coffee</h1>
            <p>We here at one shot know two things. The first is we only have one shot to impress with our coffee, the second is that’s all we need. Our premium roasted is crafted with industry experts to get you the perfect cup and with enough flavors to make willy wonkas head spin you will be hooked after one shot.</p>
        </div>
    </Wrapper>
  )
}

export default Cta