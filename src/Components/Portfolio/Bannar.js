import React from 'react'
import './css/Bannar.css'

import './css/gallery.css'

import './css/portfolio.css'
import './css/finance.css'
import './css/plan.css'
import './css/hotspot.css'
import './css/edge.css'
import './css/mban.css'
import './css/pcard.css'
import './css/finance.css'
import graph from './Image/graph.png'
import left from './Image/left.png'
import right from './Image/right.png'
import logo from './Image/logo.png'
import icons from './Image/Vector.png'
import cp1 from './Image/cpcard1.png'
import cp2 from './Image/cpcard2.png'
import cp3 from './Image/cpcard3.png'
import cp4 from './Image/cpcard4.png'
import loc from './Image/loc.png'
import dart from './Image/dart.png'
import city1 from './Image/city1.png'
import city2 from './Image/city2.png'
import city3     from './Image/city3.png'
import map from './Image/map.png'
import bag from './Image/bag.png'
import shop from './Image/shop.png'
import trans from './Image/trans.png'
import park from './Image/park.png'
import Ga1 from './Image/ga1.png'
import Ga2 from './Image/ga2.png'
import Ga3 from './Image/ga3.png'
import Ga4 from './Image/ga4.png'
export default function Bannar() {
  return (
    <>
    <div className='bannar'>
        <div className='ptitle'>
            <h2>Real Estate Investment Portfolio 2024</h2>
        </div>
        <div className='prow'>
            <img src={left} className='pleft'/>
            <p className='pdesc'>Seeking strategic investments to expand our portfolio.</p>
            <img src={logo} className='plogo'/>
            <p className='pdesc'>Aiming for a 20% ROI over the next three years.</p>
            <img src={right} className='pright'/>
        </div>
        <div className='pbot'>
            <p className='pbot-desc'>Century 21 was founded in 2005 with a mission to revolutionize the real estate industry by offering exceptional properties and investment opportunities. Our focus is on creating sustainable, high-quality living and working spaces.</p>
        </div>
    </div>

    {/* Key Highights */}

    <div>
    <div className='kbannar'>
        <h2>Key Highlights</h2>
        <div className='klists'>
           <div className='kli'>
                <img src={icons} className='klimg'/>
                <p className='kp'>Diverse property portfolio across prime locations.</p>
           </div>

           <div className='kli'>
                <img src={icons} className='klimg'/>
                <p className='kp'>Diverse property portfolio across prime locations.</p>
           </div>

           <div className='kli'>
                <img src={icons} className='klimg'/>
                <p className='kp'>Diverse property portfolio across prime locations.</p>
           </div>
        </div>
    </div>

    <div className='core_ver'>
        <div className='glass'>
            <h1>Core Values & Vison</h1>
            <p>UrbanNest Realty is driven by Integrity, Innovation, Excellence, and Sustainability. Our vision is to be a leader in sustainable real estate development, providing exceptional value to our investors and communities.</p>
        </div>
    </div>

    

    <div className='cur_pro'>
    <h2 className='cur_tit'>Current Properties</h2>

        <div className='crow'>
            <div className='pcard'>
                <div className='cpimg'>
                    <img src={cp1} className='cp1'/>
                    <p className='sps'>Rooftop garden, gym, swimming pool</p>
                    <p className='pos'>For sale</p>
                </div>
                <div className='cpcard-desc'>
                    <p className='highlight'>Residential</p>
                    <h1 className='cpcard-title'>The Heights</h1>
                    <div className='plocat'>
                        <img src={loc} className='ploc'/>
                        <p className='pcity'>Downtown</p>
                        <img src={dart} className='pdart'/>
                        <p className='psqft'>3,000 sq. ft.</p>

                    </div>
                </div>
            </div>

            <div className='pcard'>
                <div className='cpimg'>
                    <img src={cp2} className='cp1'/>
                    <p className='sps'>Conference rooms, parking, cafeteria</p>
                    <p className='pos'>For lease</p>
                </div>
                <div className='cpcard-desc'>
                    <p className='highlight'>Commercial</p>
                    <h1 className='cpcard-title'>Midtown Plaza</h1>
                    <div className='plocat'>
                        <img src={loc} className='ploc'/>
                        <p className='pcity'>Midtown</p>
                        <img src={dart} className='pdart'/>
                        <p className='psqft'>50,000 sq. ft.</p>

                    </div>
                </div>
            </div>
        </div>

    <h2 className='cur_tit'>Past Properties</h2>

        <div className='crow'>
            <div className='pcard'>
                <div className='cpimg'>
                    <img src={cp3} className='cp1'/>
                    <p className='pos'>Achieved a 25% ROI</p>
                </div>
                <div className='cpcard-desc'>
                    <p className='highlight'>Successfully sold</p>
                    <h1 className='cpcard-title'>Riverfront Residences</h1>
                    <div className='plocat'>
                         
                        <img src={dart} className='pdart'/>
                        <p className='psqft'>Testimonials</p>
                    </div>
                    <div class="pcas">
                        <p>"A great investment with excellent returns! - Annie Walker"</p>
                    </div>
                </div>
            </div>

            <div className='pcard'>
                <div className='cpimg'>
                    <img src={cp4} className='cp1'/>
                    <p className='pos'>Generated $2 million in annual revenue</p>
                </div>
                <div className='cpcard-desc'>
                    <p className='highlight'>Leased within six months</p>
                    <h1 className='cpcard-title'>Green Acres Industrial Park</h1>
                    <div className='plocat'>
                        
                        <img src={dart} className='pdart'/>
                        <p className='psqft'>Case Study</p>
                      
                    </div>
                    <div class="pcas">
                            <p>A great Efficient project management and strategic location led to rapid occupancy. </p>
                    </div>
                   </div>
            </div>
        </div>
    </div>
    </div>

    {/* Gallary */}

    <div className='pgal'>
        <div className='pitem1'>
            <div className='ptit'>
                <h1>Gallery of Excellence</h1>
                <p>Witness the unique features and superior quality of our developments, showcasing both interiors and exteriors.</p>
            </div>
            <img src={Ga1}/>
        </div>
        <div className='pitem'>
            <img src={Ga3}/>
        </div>
        <div className='pitem'>
            <img src={Ga4}/>
        </div>
        <div className='pitem'>
            <img src={Ga2} className='spimg'/>
        </div>
    </div>

{/* Ad */}

<div className='cur_pro'>
      <div className='crow'>
            <div className='pcard'>
                <div className='cpimg'>
                    <img src={cp1} className='cp1'/>
                    <p className='sps'>Rooftop garden, gym, swimming pool</p>
                    <p className='pos'>For sale</p>
                </div>
                <div className='cpcard-desc'>
                    <p className='highlight'>Residential</p>
                    <h1 className='cpcard-title'>The Heights</h1>
                    <div className='plocat'>
                        <img src={loc} className='ploc'/>
                        <p className='pcity'>Downtown</p>
                        <img src={dart} className='pdart'/>
                        <p className='psqft'>3,000 sq. ft.</p>

                    </div>
                </div>
            </div>

            <div className='pcard'>
                <div className='cpimg'>
                    <img src={cp2} className='cp1'/>
                    <p className='sps'>Conference rooms, parking, cafeteria</p>
                    <p className='pos'>For lease</p>
                </div>
                <div className='cpcard-desc'>
                    <p className='highlight'>Commercial</p>
                    <h1 className='cpcard-title'>Midtown Plaza</h1>
                    <div className='plocat'>
                        <img src={loc} className='ploc'/>
                        <p className='pcity'>Midtown</p>
                        <img src={dart} className='pdart'/>
                        <p className='psqft'>50,000 sq. ft.</p>

                    </div>
                </div>
            </div>
        </div>
        </div>

{/* Hotspot */}

<div className='pcon'>
                <div className='ptits'>
                    <h1>Nearby Hotspots</h1>
                </div>
                
                <div className='sub_pcon'>
                    <div className='phleft'>
                        <p className='phighlights'>The Heights</p>
                        <h4 className='psub_desc'> Near top-rated schools, central park, shopping mall, and general hospital.</h4>
                    </div>
                    <div className='phmid'>
                        <h3 className='ptitss'>Local Amenities</h3>
                    </div>
                    <div className='phright'>
                        <p className='phighlightsr'>Midtown Plaza</p>
                        <h4 className='psub_desc'>Proximity to public transit, restaurants, and business district.</h4>
                    </div>
                </div>

                <div className='sub_pcon'>
                    <div className='phleft'>
                        <p className='phighlights'>The Heights</p>
                        <h4 className='psub_desc'> 5% job market growth, 2% population increase</h4>
                    </div>
                    <div className='phmid'>
                        <h3 className='ptitss'>Economic Indicators</h3>
                    </div>
                    <div className='phright'>
                        <p className='phighlightsr'>The Heights</p>
                        <h4 className='psub_desc'>$1 billion in new commercial investments</h4>
                    </div>
                </div>

                <div className='sub_pcon'>
                    <div className='phleft'>
                        <p className='phighlights'>The Heights</p>
                        <h4 className='psub_desc'> Upcoming subway extension near The Heights</h4>
                    </div>
                    <div className='phmid'>
                        <h3 className='ptitss'>Future Development</h3>
                    </div>
                    <div className='phright'>
                        <p className='phighlightsr'>The Heights</p>
                        <h4 className='psub_desc'>New tech hub development adjacent to Midtown Plaza</h4>
                    </div>
                </div>
            </div>

            {/* Finance */}

            <div className='pfin'>
   <div className='pftit'>
        <h1>Financial Performance</h1>
    </div>
   <div className='divide'>
        <p className='active'>Revenue Growth </p>
        <p>Profit Growth </p>
    </div>
    <div className='graph'>
        <img src={graph}/>
    </div>
    </div>

    {/* Fy bannaar */}

    <div className='fcon'>
        <h2>FY 2023: Revenue $50 million,<br/> Net Profit $10 million</h2>
        <div className='sub_fcon'>
            <p>Average Profit Margin: 20%</p>
            <p>Average ROI: 22%</p>
        </div>
    </div>

     

{/*Card*/}
<div className='cens'>
        <div className='pccon'>
            <div className='pccard'>
                <div className='sno'>
                    <p>01</p>
                </div>
                <div className='pcctit'>
                    <h3>New Property Acquisitions</h3>
                </div>
                <div className='pccdecs'>
                    <p>
                    We are expanding our portfolio in high-demand areas with strategic acquisitions of prime properties. Our focus is on identifying locations with strong growth potential and excellent returns on investment.
                     </p>
                </div>
            </div>

            <div className='pccard' id='bb'>
                <div className='sno'>
                    <p>02</p>
                </div>
                <div className='pcctit'>
                    <h3>Infrastructure Improvements</h3>
                </div>
                <div className='pccdecs'>
                    <p>
                    We aim to enhance property value through key upgrades and infrastructure improvements. By investing in essential amenities and advanced facilities, we ensure our properties remain competitive and attractive to tenants and buyers.                     </p>
                </div>
            </div>

            <div className='pccard'>
                <div className='sno'>
                    <p>03</p>
                </div>
                <div className='pcctit'>
                    <h3>Development Projects</h3>
                </div>
                <div className='pccdecs'>
                    <p>
                    We are dedicated to creating sustainable residential and commercial developments. Our projects emphasize eco-friendly construction practices and innovative designs to meet the needs of modern living and working spaces.                     </p>
                </div>
            </div>
        </div>
        </div>
        <div className='sban'>
            <div className='sim'>
                <img src={icons}/>
            </div>
            <div className='scons'>
            <h2>Seeking 15% equity investment for $75 million</h2>
            <p>- 2020 Investment: $50 million yielded 25% ROI over four years -</p>
        </div>
        <div className='sim'>
                <img src={icons}/>
            </div>
        </div>

        {/* Plan */}

        <div className='plcon'>
        <div className='row1'>
            <div className='plleft'>
                <h3 className='pltit'>
                Increasing Demand for Sustainable Properties:
                </h3>
                <p className='pldesc'>
                    Consumers are increasingly prioritizing eco-friendly and energy-efficient properties. UrbanNest Realty meets this demand through a strong commitment to sustainable building practices. Our developments feature eco-friendly designs and technologies, which have earned us multiple certifications and awards. Our properties include energy-efficient appliances, green roofing, solar panels, and sustainable materials, all designed to reduce environmental impact and operating costs for residents. By prioritizing sustainability, we not only contribute to a healthier planet but also enhance property value and appeal to a growing segment of environmentally conscious buyers.
                </p>
            </div>
            <div className='plright'>
                <img src={city1}/>
            </div>
        </div>

        <div className='row1'>
            <div className='pllefti'>
            <img src={city2}/>
            </div>
            <div className='plrighti'>
            <h3 className='pltiti'>
                Increasing Demand for Sustainable Properties:
                </h3>
                <p className='pldesci'>
                    Consumers are increasingly prioritizing eco-friendly and energy-efficient properties. UrbanNest Realty meets this demand through a strong commitment to sustainable building practices. Our developments feature eco-friendly designs and technologies, which have earned us multiple certifications and awards. Our properties include energy-efficient appliances, green roofing, solar panels, and sustainable materials, all designed to reduce environmental impact and operating costs for residents. By prioritizing sustainability, we not only contribute to a healthier planet but also enhance property value and appeal to a growing segment of environmentally conscious buyers.
                </p>
            </div>
        </div>

        <div className='row1'>
            <div className='plleft'>
                <h3 className='pltit'>
                Key Competitors
                </h3>
                <p className='pldesc'>
                To illustrate UrbanNest Realty's competitive edge, we provide a detailed comparative analysis against key competitors, ABC Realty and XYZ Developments. This comparison focuses on critical metrics such as property value, return on investment (ROI), and sustainability initiatives.                </p>
            </div>
            <div className='plright'>
                <img src={city3}/>
            </div>
        </div>
    </div>
    <div className='stab'>
        <div>
        <table>
        <tr>
            <th>Metric</th>
            <th className='hightab'>Century 21</th>
            <th>ABC Realty</th>
            <th>XYZ Developments</th>
        </tr>
        <tr>
            <td>Average Property Value</td>
            <td className='hightab'>$500,000</td>
            <td>$480,000</td>
            <td>$470,000</td>
        </tr>
        <tr>
            <td>ROI (5-year average)</td>
            <td className='hightab'>20%</td>
            <td>18%</td>
            <td>17%</td>
        </tr>
        <tr>
            <td>Sustainability Certifications</td>
            <td className='hightab'>LEED Platinum</td>
            <td>LEED Gold</td>
            <td>LEED Silver</td>
        </tr>
        <tr>
            <td>Green Building Initiatives</td>
            <td className='hightab'>Advanced</td>
            <td>Moderate</td>
            <td>Basic</td>
        </tr>
        </table>
    </div>
    </div>

    {/* Edge */}

    <div className='econs'>
        <div className='etop'>
        <div className='etits'>
            <h2>Century 21 Realty's Edge</h2>
        </div>
        <div className='subetit'>
            <h4>Superior Location Strategy</h4>
            <p>Century 21 Realty excels in selecting strategic property locations. Our properties are situated in areas with high demand and excellent growth potential.</p>
        </div>
        </div>
        <div className='eccons'>
        <div className='ecard'>
            <div className='ehead'>
                <p>Century 21 Heights</p>
            </div>
            <div className='imap'>
                <img src={map} className='cmap'/>
            </div>
            <div className='cdesc'>
                <div className='citems'>
                    <img src={bag}/>
                    <p><span>School    </span>0.7 miles to Washington High School, 0.8 miles to Riverside Elementary.</p>
                </div>
                <div className='citems'>
                    <img src={shop}/>
                    <p><span>Shopping  </span>0.7 miles to Washington High School, 0.8 miles to Riverside Elementary.</p>
                </div>
                <div className='citems'>
                    <img src={park}/>
                    <p><span>Parks  </span>0.7 miles to Washington High School, 0.8 miles to Riverside Elementary.</p>
                </div>
                <div className='citems'>
                    <img src={trans}/>
                    <p><span>Public Transport </span>0.7 miles to Washington High School, 0.8 miles to Riverside Elementary.</p>
                </div>
            </div>
        </div>

        <div className='ecard'>
            <div className='ehead'>
                <p>Century 21 Heights</p>
            </div>
            <div className='imap'>
                <img src={map} className='cmap'/>
            </div>
            <div className='cdesc'>
                <div className='citems'>
                    <img src={bag}/>
                    <p><span>School    </span>0.7 miles to Washington High School, 0.8 miles to Riverside Elementary.</p>
                </div>
                <div className='citems'>
                    <img src={shop}/>
                    <p><span>Shopping  </span>0.7 miles to Washington High School, 0.8 miles to Riverside Elementary.</p>
                </div>
                <div className='citems'>
                    <img src={park}/>
                    <p><span>Parks  </span>0.7 miles to Washington High School, 0.8 miles to Riverside Elementary.</p>
                </div>
                <div className='citems'>
                    <img src={trans}/>
                    <p><span>Public Transport </span>0.7 miles to Washington High School, 0.8 miles to Riverside Elementary.</p>
                </div>
            </div>
        </div>

        <div className='ecard'>
            <div className='ehead'>
                <p>Century 21 Heights</p>
            </div>
            <div className='imap'>
                <img src={map} className='cmap'/>
            </div>
            <div className='cdesc'>
                <div className='citems'>
                    <img src={bag}/>
                    <p><span>School    </span>0.7 miles to Washington High School, 0.8 miles to Riverside Elementary.</p>
                </div>
                <div className='citems'>
                    <img src={shop}/>
                    <p><span>Shopping  </span>0.7 miles to Washington High School, 0.8 miles to Riverside Elementary.</p>
                </div>
                <div className='citems'>
                    <img src={park}/>
                    <p><span>Parks  </span>0.7 miles to Washington High School, 0.8 miles to Riverside Elementary.</p>
                </div>
                <div className='citems'>
                    <img src={trans}/>
                    <p><span>Public Transport </span>0.7 miles to Washington High School, 0.8 miles to Riverside Elementary.</p>
                </div>
            </div>
        </div>

        <div className='ecard'>
            <div className='ehead'>
                <p>Century 21 Heights</p>
            </div>
            <div className='imap'>
                <img src={map} className='cmap'/>
            </div>
            <div className='cdesc'>
                <div className='citems'>
                    <img src={bag}/>
                    <p><span>School    </span>0.7 miles to Washington High School, 0.8 miles to Riverside Elementary.</p>
                </div>
                <div className='citems'>
                    <img src={shop}/>
                    <p><span>Shopping  </span>0.7 miles to Washington High School, 0.8 miles to Riverside Elementary.</p>
                </div>
                <div className='citems'>
                    <img src={park}/>
                    <p><span>Parks  </span>0.7 miles to Washington High School, 0.8 miles to Riverside Elementary.</p>
                </div>
                <div className='citems'>
                    <img src={trans}/>
                    <p><span>Public Transport </span>0.7 miles to Washington High School, 0.8 miles to Riverside Elementary.</p>
                </div>
            </div>
        </div>
        </div>
    </div>

    {/* Mid Bannar */}

    <div className='mban'>
        <div className='mfi'>
            <h1>Sustainability &
            Community Impact</h1>
        </div>
        <div className='mlist'>
            <div className='mitem'>
                <p>EED-certified buildings, renewable energy installations, and green spaces</p>
            </div>
            <div className='mitem'>
                <p>Partnering with local organizations for community development</p>
            </div>
            <div className='mitem'>
            <p>Offering affordable housing options</p>    
         </div>
        </div>
    </div>
    </>
  )
}
