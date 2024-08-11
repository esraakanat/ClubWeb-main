import React from 'react'
import { programsData } from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'

export default function Programs() {
    return (
        <div className='programs' id="programs">
     
            <div className='programs-categories'>
                {programsData.map(program => (
                    <div className='category'>
                        {program.image}
                        <span>{program.heading}</span><span>{program.details}</span>

                        <div className='join-now'><span>انظم الان </span><img src={RightArrow} alt=''/></div>


                    </div>

                ))}

            </div>

        </div>
    )
}
