import { useState } from 'react'

const Volunteer = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [interests, setInterests] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name && email && phone && interests) {
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
        <div className="bg-white rounded-lg shadow-md p-8 max-w-lg text-center">
          <h1 className="text-2xl font-bold text-blue-600 mb-4">Thank You!</h1>
          <p className="text-gray-700">
            Thank you for signing up as a volunteer! We will get in touch with you shortly with more details.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-800"
          >
            Submit Another Form
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex mt-9 flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-lg w-full">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Become a Volunteer</h1>
        <p className="text-gray-600 text-center mb-8">
          Join our community of volunteers and make a positive impact in the world. Fill out the form below to get
          started.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label htmlFor="interests" className="block text-sm font-medium text-gray-700 mb-2">
              Areas of Interest
            </label>
            <textarea
              id="interests"
              value={interests}
              onChange={(e) => setInterests(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              rows={4}
              placeholder="Tell us about your skills, passions, or areas you'd like to contribute to..."
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-800"
          >
            Sign Up as a Volunteer
          </button>
        </form>
      </div>
    </div>
  )
}

export default Volunteer
