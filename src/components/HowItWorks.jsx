import { Upload, DollarSign, CreditCard } from "lucide-react"

const HowItWorks = () => {
  const steps = [
    {
      icon: <Upload className="h-12 w-12 text-teal-600" />,
      title: "Upload License",
      description: "Submit your software license details through our secure portal for evaluation.",
    },
    {
      icon: <DollarSign className="h-12 w-12 text-teal-600" />,
      title: "Get Valuation",
      description: "Receive a competitive market valuation within 24 hours based on current demand.",
    },
    {
      icon: <CreditCard className="h-12 w-12 text-teal-600" />,
      title: "Get Paid",
      description: "Accept our offer and get paid quickly via your preferred payment method.",
    },
  ]

  return (
    <section id="how-it-works" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">How It Works</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined process makes selling your unused software licenses simple and profitable.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              <div className="mt-4 text-teal-600 font-bold">Step {index + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
