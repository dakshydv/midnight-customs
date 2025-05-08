import Image from "next/image";

export function Contacts() {
    return <div className="min-h-screen flex items-center justify-center " id="contact">
    <div className="w-full max-w-[1200px] bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] border-zinc-200 border rounded-xl mx-4 my-8">
      {/* Flex container that changes direction on mobile */}
      <div className="flex flex-col md:flex-row md:h-[500px]">
        
        {/* Image section - now on the left */}
        <div className="w-full md:w-1/2 h-[300px] md:h-full order-2 md:order-1">
          <div className="h-full w-full relative rounded-b-xl md:rounded-r-none md:rounded-l-xl overflow-hidden">
            <Image
              // src={"https://images.unsplash.com/photo-1589134723101-5abd32593adf?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
              src={"/threeCars.jpg"}
              alt="Midnight Customs Garage"
              layout="fill"
              objectFit="cover"
              className="rounded-b-xl md:rounded-r-none md:rounded-l-xl"
            />
          </div>
        </div>

          {/* Details section - now on the right */}
        <div className="w-full md:w-1/2 p-4 md:p-6 order-1 md:order-2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-gray-200 via-slate-700 to-gray-200 text-transparent bg-clip-text">
            Midnight Customs
          </h1>
          
          <div className="space-y-8 md:mt-6 md:px-4">
            <div>
              <h3 className="text-xl md:text-2xl font-bold">Call Us</h3>
              <a className="text-xl md:text-2xl hover:cursor-pointer font-extrabold" href="tel:(365) 987-4165">+1 (365) 987-4165</a>
            </div>
            
            <div>
              <h3 className="text-xl md:text-2xl font-bold">Email Us</h3>
              <a className="text-xl hover:cursor-pointer md:text-xl font-extrabold break-words" href="mailto:customs.midnightclub@gmail.com">customs.midnightclub@gmail.com</a>
            </div>
            
            <div>
              <h3 className="text-xl md:text-2xl font-bold">Address</h3>
              <a className="text-xl md:text-xl lg:text-xl hover:cursor-pointer font-extrabold" target="_blank" href="https://maps.app.goo.gl/Usw19Lxx2RztaGWLA?g_st=com.google.maps.preview.copy">365 Healey Rd #15, Bolton, ON L7E 5C1</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}