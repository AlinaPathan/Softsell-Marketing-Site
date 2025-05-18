const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-teal-500 to-teal-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Turn Unused Software Licenses Into Cash
            </h1>
            <p className="text-xl md:text-2xl text-teal-100">
              SoftSell helps businesses recover value from unused or excess software licenses with our simple, secure
              platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-white text-teal-700 px-6 py-3 rounded-md font-medium text-center hover:bg-gray-100 transition-colors"
              >
                Sell My Licenses
              </a>
              <a
                href="#how-it-works"
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-medium text-center hover:bg-white/10 transition-colors"
              >
                Learn How It Works
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <img
            //   src="/HeroSectionSVG.png" //alternate img
              src="/svg.png"
              alt="Software license management illustration"
              className="w-full h-auto rounded-lg "
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
