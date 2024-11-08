import { Menu } from 'lucide-react'
import React from 'react'

const menu = [
    { id: "Home", name: "Home" },
    { id: "Content", name: "Content" },
    { id: "About", name: "About" },
]

const Navbar = () => {
    return (
        <div className='h-[60px] px-20 bg-[#ff8a8a] flex justify-between items-center'>
            <h1 className='cursor-pointer'>Logo</h1>
            <div className='w-2/4 flex justify-between'>
                {menu.map((item) => (
                    <h1 id={item.id} className='cursor-pointer'>{item.name}</h1>
                ))}
                <Menu className='cursor-pointer' />
            </div>
        </div>
    )
}

export default Navbar