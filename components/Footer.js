function Footer() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600 mt-32">
            <div className="space-y-4 text-sm text-gray-800">
                <h5 className="font-bold cursor-pointer">About</h5>
                <p className="cursor-pointer hover:text-red-400">How Airbnb Works</p>
                <p className="cursor-pointer hover:text-red-400">NewsRoom</p>
                <p className="cursor-pointer hover:text-red-400">Investors</p>
                <p className="cursor-pointer hover:text-red-400">Airbnb Plus</p>
                <p className="cursor-pointer hover:text-red-400">Airbnb Luxe</p>
            </div>

            <div className="space-y-4 text-sm text-gray-800">
                <h5 className="font-bold cursor-pointer">Community</h5>
                <p className="cursor-pointer hover:text-red-400">Accessibility</p>
                <p className="cursor-pointer hover:text-red-400">This is not a real site</p>
                <p className="cursor-pointer hover:text-red-400">Its a pretty awesome clone</p>
                <p className="cursor-pointer hover:text-red-400">Referals accepted</p>
                <p className="cursor-pointer hover:text-red-400">Jyotindra KT</p>
            </div>
            
            <div className="space-y-4 text-sm text-gray-800">
                <h5 className="font-bold cursor-pointer">Host</h5>
                <p className="cursor-pointer hover:text-red-400">Host your home</p>
                <p className="cursor-pointer hover:text-red-400">Host an Online Experience</p>
                <p className="cursor-pointer hover:text-red-400">Host an Experience</p>
                <p className="cursor-pointer hover:text-red-400">Responsible hosting</p>
                <p className="cursor-pointer hover:text-red-400">Community Centre</p>
            </div>
            
            <div className="space-y-4 text-sm text-gray-800">
                <h5 className="font-bold cursor-pointer">Support</h5>
                <p className="cursor-pointer hover:text-red-400">Our COVID-19 Response</p>
                <p className="cursor-pointer hover:text-red-400">Help Centre</p>
                <p className="cursor-pointer hover:text-red-400">Cancellation options</p>
                <p className="cursor-pointer hover:text-red-400">Neighbourhood Support</p>
                <p className="cursor-pointer hover:text-red-400">Trust & Safety</p>
            </div>

        </div>
    )
}

export default Footer
