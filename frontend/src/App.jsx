import { FaList } from "react-icons/fa"
function App() {
    return (
        <div className='font-rem w-full h-full flex justify-center mt-16'>
            <div className="w-1/2 bg-gray-100">
                <div className="bg-gray-400 rounded-2xl h-28 flex justify-between pt-4 px-8">
                    <div className="flex">
                        <div className="mt-2">
                            <div className="relative">
                                <img src="https://imgv3.fotor.com/images/gallery/watercolor-female-avatar.jpg" alt='avatar' className="w-16 h-16 border-4 border-white rounded-full" />
                                <div className="absolute w-4 h-4 border-white border-4 rounded-full bg-green-500 bottom-0 right-2"></div>
                            </div>
                        </div>
                        <div className="text-white ml-5 mt-2.5 text-lg">
                            <p className="font-bold">TeKarim Rashid</p>
                            <p className="mt-1 font-light">Online</p>
                        </div>
                    </div>

                    <div className="text-white text-5xl font-bold mt-3.5 cursor-pointer">
                        <FaList />
                    </div>
                </div>

                <div className="h-96 w-full"></div>
            </div>

        </div>
    )
}

export default App
