import React from 'react'
import './css/plan.css'
import city1 from './Image/city1.png'
import city2 from './Image/city2.png'
import city3     from './Image/city3.png'

export default function Plan() {
  return (
    <>
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
    
    </>
  )
}
