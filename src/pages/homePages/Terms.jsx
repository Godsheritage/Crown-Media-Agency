import React from 'react'
import HeaderV1 from '../../components/header/HeaderV1'
import FooterV1 from '../../components/footer/FooterV1'

const Terms = () => {
    return (
        <div>
            <HeaderV1 />
            <div className="max-w-4xl mx-auto px-4 py-12 pt-5 mt-5 text-neutral-800">
                <h1 className="text-4xl font-bold mb-8 text-center">Terms of Service & Privacy Policy</h1>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Terms of Service</h2>
                    <p className="text-sm text-gray-500 mb-2">Effective Date: July 1st, 2025</p>

                    <p className="mb-4">
                        Welcome to Crown Media Agency! These Terms of Service ("Terms") govern your use of our website and
                        services. By accessing or using our site, you agree to be bound by these Terms.
                    </p>

                    <ul className="space-y-4 list-disc list-inside">
                        <li>
                            <strong>Services:</strong> Crown Media Agency provides media production and social content services
                            tailored to real estate entrepreneurs.
                        </li>
                        <li>
                            <strong>Eligibility:</strong> You must be at least 18 years old to use our services.
                        </li>
                        <li>
                            <strong>User Responsibilities:</strong> You agree not to use our services for any illegal or unauthorized
                            purpose.
                        </li>
                        <li>
                            <strong>Intellectual Property:</strong> All content provided is owned by or licensed to Crown Media Agency.
                        </li>
                        <li>
                            <strong>Payment & Refunds:</strong> Payments are due upfront unless otherwise agreed. Refunds are issued
                            at our discretion.
                        </li>
                        <li>
                            <strong>Termination:</strong> We may terminate access at our discretion for violations of these Terms.
                        </li>
                        <li>
                            <strong>Limitation of Liability:</strong> We are not liable for indirect or consequential damages.
                        </li>
                        <li>
                            <strong>Changes:</strong> We may update these Terms at any time, and updates will be posted here.
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
                    <p className="text-sm text-gray-500 mb-2">Effective Date: July 1st, 2025</p>

                    <p className="mb-4">
                        Crown Media Agency values your privacy. This Privacy Policy outlines how we collect, use, and protect your
                        information.
                    </p>

                    <ul className="space-y-4 list-disc list-inside">
                        <li>
                            <strong>Information We Collect:</strong> Name, email, phone, payment info, and site usage data.
                        </li>
                        <li>
                            <strong>Use of Information:</strong> To deliver services, communicate with you, and send marketing emails
                            (only with your consent).
                        </li>
                        <li>
                            <strong>Data Sharing:</strong> We never sell your data. We only share it with third-party vendors to provide
                            our services.
                        </li>
                        <li>
                            <strong>Data Security:</strong> We take reasonable steps to protect your data but cannot guarantee complete
                            security.
                        </li>
                        <li>
                            <strong>Cookies:</strong> We use cookies to enhance site experience. You can disable cookies in your browser.
                        </li>
                        <li>
                            <strong>Your Rights:</strong> You can request to access, update, or delete your personal data anytime by
                            emailing <a href="mailto:admin@crowmedia.agency" className="text-blue-600 hover:underline">admin@crowmedia.agency</a>.
                        </li>
                        <li>
                            <strong>Contact:</strong> Questions? Email us at <a href="mailto:admin@crowmedia.agency" className="text-blue-600 hover:underline">admin@crowmedia.agency</a>.
                        </li>
                    </ul>
                </section>
            </div>
            <FooterV1 />
        </div>
    )
}

export default Terms