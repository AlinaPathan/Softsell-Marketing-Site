const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "SoftSell helped us recover over $50,000 from unused enterprise software licenses. The process was seamless and their valuation was higher than we expected.",
      name: "Michael Chen",
      img:"/testimonial1.avif",
      role: "IT Director",
      company: "Nexus Technologies",
    },
    {
      quote:
        "After downsizing our team, we had excess licenses that were just sitting idle. SoftSell turned those into immediate cash flow that helped us through a challenging period.",
       name: "Sarah Johnson",
      img:"/testimonial2.avif",
      role: "CFO",
      company: "Horizon Solutions",
    },
  ]

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Our Customers Say</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what businesses like yours have experienced with SoftSell.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-teal-600 text-4xl font-serif mb-4">"</div>
              <p className="text-gray-700 mb-6 italic">{testimonial.quote}</p>
              <div className="flex items-center">
                <img src={testimonial.img} className="h-12 w-12 rounded-full bg-gray-300 mr-4"></img>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
