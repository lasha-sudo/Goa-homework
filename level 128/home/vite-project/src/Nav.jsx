function Nav(){
    return(
        <nav className="flex justify-between px-6 py-4 items-center ">
            <h3 className="font-bold text-3xl" >digital bank</h3>

            <ul className="flex flex-row gap-3 h-auto pt-5 ">
                <li className="text-[20px]  hover:text-blue-700">Home</li>
                <li className="text-[20px]  hover:text-blue-700">about</li>
                <li className="text-[20px] hover:text-blue-700">contact</li>
                <li className="text-[20px]  hover:text-blue-700">block</li>
            </ul>

            <button className="bg-blue-600 text-white rounded-[5px] hover:bg-blue-900 w-29 h-8">requist invite</button>
        </nav>
    )
}

export default Nav;