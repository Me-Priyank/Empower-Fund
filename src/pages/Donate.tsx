import { useState, useEffect } from 'react'
import { DollarSign, Heart, Globe } from 'lucide-react'

interface Currency {
  code: string
  symbol: string
  name: string
}

interface Donation {
  amount: number
  currency: string
  name: string
  email: string
  message?: string
  date: string
}

const currencies: Currency[] = [
  { code: 'USD', symbol: '$', name: 'US Dollar' },
  { code: 'EUR', symbol: '€', name: 'Euro' },
  { code: 'GBP', symbol: '£', name: 'British Pound' },
  { code: 'JPY', symbol: '¥', name: 'Japanese Yen' },
  { code: 'AUD', symbol: 'A$', name: 'Australian Dollar' },
  { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar' },
  { code: 'INR', symbol: '₹', name: 'Indian Rupee' },
  { code: 'CNY', symbol: '¥', name: 'Chinese Yuan' },
]

const DonationForm = () => {
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>(currencies[0])
  const [customAmount, setCustomAmount] = useState('')
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [donations, setDonations] = useState<Donation[]>([])
  const [submitted, setSubmitted] = useState(false)

  const presetAmounts = [10, 25, 50, 100, 250, 500]

  useEffect(() => {
    const savedDonations = localStorage.getItem('donations')
    if (savedDonations) {
      setDonations(JSON.parse(savedDonations))
    }
  }, [])

  const handlePresetAmount = (amount: number) => {
    setSelectedAmount(amount)
    setCustomAmount(amount.toString()) // Reflect the amount in the input field
  }

  const handleCustomAmount = (value: string) => {
    setCustomAmount(value)
    setSelectedAmount(null)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const amount = selectedAmount || Number(customAmount)

    if (!amount || !name || !email) return

    const newDonation: Donation = {
      amount,
      currency: selectedCurrency.code,
      name,
      email,
      message,
      date: new Date().toISOString(),
    }

    const updatedDonations = [...donations, newDonation]
    setDonations(updatedDonations)
    localStorage.setItem('donations', JSON.stringify(updatedDonations))
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="max-w-md mt-20 mx-auto text-center py-12">
        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <Heart className="w-8 h-8 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold mb-4">Thank You for Your Donation!</h2>
        <p className="text-gray-600 mb-6">Your generosity helps us create a more equitable world.</p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-purple-700 hover:text-purple-900"
        >
          Make another donation
        </button>
      </div>
    )
  }

  return (
    <div className="flex-1 mt-6 py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Support Our Mission</h1>
          <p className="text-xl text-gray-600">
            Your donation helps us create lasting change and promote gender equality worldwide.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Currency Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Currency
              </label>
              <div className="relative">
                <select
                  value={selectedCurrency.code}
                  onChange={(e) => setSelectedCurrency(currencies.find(c => c.code === e.target.value) || currencies[0])}
                  className="block w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  {currencies.map((currency) => (
                    <option key={currency.code} value={currency.code}>
                      {currency.code} - {currency.name}
                    </option>
                  ))}
                </select>
                <Globe className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Donation Amount */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Amount
              </label>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {presetAmounts.map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    onClick={() => handlePresetAmount(amount)}
                    className={`py-2 px-4 rounded-lg border ${
                      selectedAmount === amount
                        ? 'bg-purple-100 border-purple-500 text-purple-700'
                        : 'hover:bg-purple-50'
                    }`}
                  >
                    {selectedCurrency.symbol}{amount}
                  </button>
                ))}
              </div>
              <div className="relative">
                <input
                  type="number"
                  value={customAmount}
                  onChange={(e) => handleCustomAmount(e.target.value)}
                  placeholder="Custom amount"
                  className="block w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <DollarSign className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Personal Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message (Optional)
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                rows={4}
                placeholder="Share why you're supporting our cause..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
              disabled={!selectedAmount && !customAmount}
            >
              Complete Donation
            </button>
          </form>
        </div>

        {/* Recent Donations */}
        {donations.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Recent Donations</h2>
            <div className="space-y-4">
              {donations.slice(-3).reverse().map((donation, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start">
                    <Heart className="w-5 h-5 text-red-500 mr-3 mt-1" />
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-semibold">{donation.name}</p>
                        <span className="text-gray-500">
                          donated {selectedCurrency.symbol}{donation.amount}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{donation.message}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 mt-2">{new Date(donation.date).toLocaleString()}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default DonationForm
