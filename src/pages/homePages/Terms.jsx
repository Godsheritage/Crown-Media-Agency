import React from 'react'
import HeaderV1 from '../../components/header/HeaderV1'
import FooterV1 from '../../components/footer/FooterV1'

const Terms = () => {
    return (
        <div>
            <HeaderV1 />
             <div className="max-w-4xl mx-auto px-4 py-12 text-neutral-800">
      <h1 className="text-4xl font-bold mb-8 text-center">Terms of Service & Privacy Policy</h1>

      <section className="mb-12 mt-5 pt-5">
        <h2 className="text-2xl font-semibold mb-4">Terms of Service</h2>
        <p className="text-sm text-gray-500 mb-2">Effective Date: July 1st, 2025</p>

        <p className="mb-4">
          Welcome to Crown Media Agency! These Terms of Service ("Terms") govern your use of our website and
          services. By accessing or using our site, you agree to be bound by these Terms.
        </p>

        <ul className="space-y-4 list-disc list-inside">
          <li><strong>Services:</strong> Crown Media Agency provides media production and content services tailored to real estate entrepreneurs.</li>
          <li><strong>Eligibility:</strong> You must be at least 18 years old to use our services.</li>
          <li><strong>User Responsibilities:</strong> Use our services lawfully and responsibly.</li>
          <li><strong>Intellectual Property:</strong> All materials are owned or licensed by Crown Media Agency. No use without permission.</li>
          <li><strong>Payment & Refunds:</strong> Upfront payment is required unless otherwise agreed. Refunds are discretionary.</li>
          <li><strong>Termination:</strong> We may terminate access for violation of these terms.</li>
          <li><strong>Limitation of Liability:</strong> We are not liable for indirect or consequential damages.</li>
          <li><strong>Changes:</strong> We may update these Terms and will post changes on this page.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-8 mb-2">SMS Program Terms</h3>
        <p className="mb-2"><strong>Program Name:</strong> Crown Media SMS Alerts</p>
        <p className="mb-2"><strong>Description:</strong> Receive alerts about appointments, service updates, and exclusive offers.</p>
        <p className="mb-2">You can cancel the SMS service at any time. Simply text "STOP" to the shortcode. Upon sending "STOP," we will confirm your unsubscribe status via SMS. Following this confirmation, you will no longer receive SMS messages from us. To rejoin, sign up as you did initially, and we will resume sending SMS messages to you.</p>
        <p className="mb-2">If you experience issues with the messaging program, reply with the keyword HELP for more assistance, or contact us at <a href="mailto:admin@crowmedia.agency" className="text-blue-600 hover:underline">admin@crowmedia.agency</a>.</p>
        <p className="mb-2">Carriers are not liable for delayed or undelivered messages.</p>
        <p className="mb-2">Message and data rates may apply. Message frequency varies.</p>
        <p className="mb-2">We comply with CTIA and industry SMS standards.</p>
        <p className="mb-2">Use of our services must comply with all applicable laws and regulations.</p>
        <p className="mb-2">For privacy-related inquiries, please refer to our <a href="#privacy" className="text-blue-600 hover:underline">privacy policy</a>.</p>
      </section>

      <section id="privacy">
        <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
        <p className="text-sm text-gray-500 mb-2">Effective Date: July 1st, 2025</p>

        <p className="mb-4">
          Crown Media Agency values your privacy. This Privacy Policy outlines how we collect, use, and protect your
          information.
        </p>

        <ul className="space-y-4 list-disc list-inside">
          <li><strong>Information We Collect:</strong> Name, email, phone number, payment information, and website usage data.</li>
          <li><strong>Use of Information:</strong> To deliver services, communicate with you, and send updates with your consent.</li>
          <li><strong>Mobile Privacy:</strong> No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. Information sharing to subcontractors in support services, such as customer service is permitted. All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.</li>
          <li><strong>Data Security:</strong> We use reasonable security measures to protect your information.</li>
          <li><strong>Cookies:</strong> We use cookies to enhance your browsing experience. You can adjust settings in your browser.</li>
          <li><strong>Your Rights:</strong> Request to access, update, or delete your personal data anytime via <a href="mailto:admin@crowmedia.agency" className="text-blue-600 hover:underline">admin@crowmedia.agency</a>.</li>
          <li><strong>Contact:</strong> Questions? Reach out at <a href="mailto:admin@crowmedia.agency" className="text-blue-600 hover:underline">admin@crowmedia.agency</a>.</li>
        </ul>
      </section>
    </div>
            <FooterV1 />
        </div>
    )
}

export default Terms