import React from 'react';
import { toast } from 'react-toastify';
import { useEffect } from 'react';



const LeadConnectorForm = () => {
    useEffect(() => {
        // Dynamically load the external script when the component mounts
        const script = document.createElement('script');
        script.src = 'https://link.msgsndr.com/js/form_embed.js';
        script.async = true;
        document.body.appendChild(script);

        // Clean up the script when the component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <iframe
            src="https://api.leadconnectorhq.com/widget/form/O8KR4vpRywZlMJ8ALD0z"
            style={{ width: '100%', height: '600px', border: 'none', borderRadius: '3px' }}
            id="inline-O8KR4vpRywZlMJ8ALD0z"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Main Contact form- Website"
            data-height="600"
            data-layout-iframe-id="inline-O8KR4vpRywZlMJ8ALD0z"
            data-form-id="O8KR4vpRywZlMJ8ALD0z"
            title="Main Contact form- Website"
        ></iframe>
    );
};







const ContactForm = () => {

    const handleForm = (event) => {
        event.preventDefault()
        event.target.reset()
        toast.success("Thanks For Your Message")
    }

    return (
        <>
            <div className="contact-form-style-one">
                <h4 className="sub-title">Have Questions?</h4>
                <h2 className="title">Send us a Message</h2>
                <LeadConnectorForm />
            </div>
        </>
    );
};

export default ContactForm;