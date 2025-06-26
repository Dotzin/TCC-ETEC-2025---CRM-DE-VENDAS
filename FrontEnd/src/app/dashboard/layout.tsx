function Header() {
    return (
        <div className="bg-[#811D1D] p-4 flex justify-between items-center">
            <div className="p-4 text-white flex w-3/4 items-center h-15 flex-5/6">
                <div className="flex items-center justify-between w-16 h-13 m-4 bg-white">
                    Logo
                </div>
                <div className="flex items-center justify-between bg-black p-4 flex-3/4 h-13">
                    Olá! Usuario!
                </div>
            </div>
            <div className="flex flex-1/12 items-center justify-center">
                <div className="m-3">
                    User
                </div>
                <span>
                    user@user.com
                </span>
            </div>
        </div>
    );
}

export default Header;