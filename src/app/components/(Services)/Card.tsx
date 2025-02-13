"use client"
import React, { ReactNode } from 'react'

interface CardProps {
    icon?: ReactNode;
    className?: string;
    hasChildrenPills: boolean;
    title: string;
    description: string;
}

export const Card: React.FC<CardProps> = ({ icon, className, hasChildrenPills, title, description }) => {
    return (
        <div className={`flex flex-col items-start justify-start rounded-3xl  bg-neutral-50  border  p-7 ${className}`}>
            <div className='mb-2 flex items-start justify-start'>
                {icon}
            </div>
            <div className='flex flex-col'>
                <h1 className='text-2xl text-secondary font-semibold mb-4'>{title}</h1>
                <p className='text-base leading-normal text-neutral-700 tracking-wide '>{description}</p>
            </div>
            {hasChildrenPills && (<div className='mt-7 flex flex-col items-start justify-start gap-4 w-full *:w-full *:bg-orange-50 *:text-orange-700 font-medium *:tracking-wider *:p-2 *:text-sm *:rounded-lg *:border *:border-orange-700'>
                <div className=''>User Research & Strategy</div>
                <div className=''>Wireframing & Prototyping</div>
                <div className=''>UI Design & Style Guides</div>
                <div className=''>Responsive & Accessible Design</div>
                <div className=''>UX Testing & Optimization</div>

            </div>)}
        </div>
    )
}
