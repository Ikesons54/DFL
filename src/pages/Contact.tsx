import React from 'react'

const Contact: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 max-w-2xl w-full">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">Contact Us</h1>
      <div className="text-gray-600 dark:text-gray-300 space-y-4">
        <p>
          We'd love to hear from you! If you have any questions, suggestions, or need support, please don't hesitate to reach out to us through our social media channels:
        </p>
        <ul className="list-disc list-inside pl-4">
          <li>Twitter: <a href="#" className="text-blue-500 hover:underline">@DropLinkFast</a></li>
          <li>Facebook: <a href="#" className="text-blue-500 hover:underline">facebook.com/DropLinkFast</a></li>
          <li>Instagram: <a href="#" className="text-blue-500 hover:underline">@droplinkfast</a></li>
          <li>Email: <a href="mailto:support@droplinkfast.com" className="text-blue-500 hover:underline">support@droplinkfast.com</a></li>
        </ul>
        <p>
          Our support team is available Monday through Friday, 9 AM to 5 PM EST. We strive to respond to all inquiries within 24 hours.
        </p>
        <p>
          For business inquiries or partnership opportunities, please email us at <a href="mailto:business@droplinkfast.com" className="text-blue-500 hover:underline">business@droplinkfast.com</a>.
        </p>
      </div>
    </div>
  )
}

export default Contact