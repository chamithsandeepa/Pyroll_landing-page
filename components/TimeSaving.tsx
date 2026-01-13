import Image from "next/image";

export default function TimeSaving() {
  return (
    <section id="contact" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-12 items-center">
          
          {/* Left: Image */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none flex justify-center lg:justify-start">
            <Image
              src="/time.png"
              alt="Save time with payroll automation"
              width={700}
              height={700}
              className="w-full max-w-sm lg:max-w-md h-auto object-contain" 
            />
          </div>

          {/* Right: Content */}
          <div className="mx-auto max-w-2xl lg:mx-0 text-center lg:text-left">
            <h2 className="text-[40px] font-bold tracking-tight text-gray-900 sm:text-5xl font-istok">
              Ready to save your <span className="text-[#42A5E8]">Time ?</span>
            </h2>
            <p className="mt-6 text-[20px] leading-8 text-gray-600 font-inter max-w-lg mx-auto lg:mx-0">
              Don&apos;t think any longer get now this system for your business
            </p>
            
            <div className="mt-10 flex items-center justify-center lg:justify-start">
              <button className="bg-[#42A5E8] hover:bg-[#3494D6] text-white text-[20px] font-bold py-3 px-8 rounded-lg shadow-md transition-all transform hover:scale-105 font-inter">
                Contact Us
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
