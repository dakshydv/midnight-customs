import Image from "next/image";

export function NextLevel() {
    return <div className="min-h-screen flex flex-col sm:flex-row items-center justify-center mt-[100vh] bg-white py-12 px-4 sm:px-6 lg:px-8">
    <div className="flex-1 flex flex-col text-center justify-center p-8">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
        Take Your Car to the Next Level
      </h1>
      <p className="text-lg text-gray-600 max-w-xl">
        From sleek detailing to precision performance upgrades, we
        transform your car into a masterpiece. At our salon, your vehicle
        gets the care, style, and power it deserves—because exceptional
        cars deserve exceptional treatment.
      </p>
    </div>

    {/* Right Image Section */}
    <div className="flex-1 flex items-center justify-center p-4">
      <div className="w-full h-full flex items-center justify-center">
        
        <Image
        src={'https://images.unsplash.com/photo-1506671753197-8d137cc5d53c?q=80&w=2658&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
        alt="Featured Content"
        width={400}
        height={400}
        layout="responsive"
        />
      </div>
    </div>
  </div>
}