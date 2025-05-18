import { Shield, Clock, DollarSign, Award } from "lucide-react"

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <Shield className="h-10 w-10 text-teal-600" />,
      title: "Secure Transactions",
      description: "End-to-end encryption and compliance with industry standards to protect your data.",
    },
    {
      icon: <Clock className="h-10 w-10 text-teal-600" />,
      title: "Fast Process",
      description: "Get valuations within 24 hours and payment within 3 business days after acceptance.",
    },
    {
      icon: <DollarSign className="h-10 w-10 text-teal-600" />,
      title: "Best Market Rates",
      description: "Our extensive network of buyers ensures you get the highest value for your licenses.",
    },
    {
      icon: <Award className="h-10 w-10 text-teal-600" />,
      title: "Expert Support",
      description: "Our team of software licensing experts guides you through every step of the process.",
    },
  ]

  return (
    <section id="why-choose-us" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose Us</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            SoftSell offers unmatched benefits when it comes to reselling your software licenses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-white"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
