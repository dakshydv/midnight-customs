import Image from "next/image";

export function NextLevel() {
  return (
    <div className="min-h-screen max-w-screen flex flex-col sm:flex-row items-center justify-center mt-[100vh] bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex-1 flex flex-col text-center justify-center p-8">
        {/* <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
        Take Your Car to the Next Level
      </h1> */}
        <h1 className="text-4xl px-4 text-center md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-500 to-zinc-400 text-transparent bg-clip-text">
          Take Your Car to the Next Level
        </h1>
        <p className="text-lg text-gray-600 max-w-xl">
          At Midnight Customs, we&#39;re passionate about turning everyday cars into
          bold, head-turning machines. We specialize in both interior and
          exterior modifications, delivering top-quality results with unmatched
          attention to detail. Our skilled team takes pride in offering the best
          price guarantee — lower than any other garage — without compromising
          on quality. We believe in doing exceptional work in a friendly,
          welcoming environment where your vision comes first.
          <br /> <br />
          <span className="font-bold">
            🚨 Limited Time Offer: Quick form, big savings! Drop your details to
            start your car mod & get 20% OFF your final total! Don&#39;t miss out —
            your dream ride starts here.
          </span>
        </p>
      </div>

      {/* Right Image Section */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full h-full flex items-center justify-center">
          <Image
            // src={'https://images.unsplash.com/photo-1506671753197-8d137cc5d53c?q=80&w=2658&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
            src={"/beamer2.jpg"}
            alt="Featured Content"
            width={400}
            height={400}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
}
