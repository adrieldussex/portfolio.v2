export default function Portfolio() {
  return (
    <>        
        <div className="w-full h-full flex gap-4 bg-gray-800/20 rounded-md hover:shadow-sm border-[1px]  border-gray-800/30 p-4">
            <div className="w-1/2">
                <p>Portfolio.</p>
            </div>
            <img src="https://res.cloudinary.com/jlengstorf/image/upload/w_400,h_400,c_fill,g_faces,q_auto,f_auto/press/jason-lengstorf-pws-bridge.jpg" alt="" className="w-1/2 overflow-hidden border-b-4 border-yellow-500"/>
        </div>
        <div className="w-full min-h-[24vh] h-full bg-gray-800/20 rounded-md hover:shadow-sm border-[1px]  border-gray-800/30 p-4">
            <p>Formación</p>
        </div>
        <div className="w-full min-h-[24vh] h-full bg-gray-800/20 rounded-md hover:shadow-sm border-[1px]  border-gray-800/30 p-4">
            <p>Hobbies</p>
        </div>
    </>
  )
}
