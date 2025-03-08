import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser'
const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });
const handleChange = ({target:{name,value}}) => {
    setForm({...form, [name]:value});
}
    // service_wz9fymj
    const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    try {
        emailjs.send('service_wz9fymj','template_vstfub8',{
            from_name: form.name,
            to_name: 'Monish',
            from_email: form.email,
            to_email: 'monishsoni89@gmail.com',
            message:form.message,
        },'DfJEmgz95NfDcGfb0')
        setLoading(false);
        alert('your message has been sent.');
    }catch (error) {
setLoading(false);
alert('Something went wrong.');
    }



    }

    return (
        <section className="c-space my-20">
            <div className="relative  min-h-screen flex items-center justify-center flex-col">
<img src='/assets/terminal.png' alt="contact" className="absolute inset-0 min-h-screen"/>
<div className='contact-container'>

            <h3 className="head-text mt-6">Contact Me</h3>
    <p className="text-lg text-white-600 mt-3"> mosanishdfd fjdsafjwe ojoafshew knsaejfwdsjaaojoaf dsafowi</p>
    <form ref={formRef} onSubmit={handleSubmit} className='mt-12flex flex-col space-y-7'>
<label className="space-y-3">
<span className="field-label">
Full Name
</span>
    <input
    type="text"
    name="name"
    value={form.name}
    onChange={handleChange}
    required
    className="field-input"
    placeholder="Monish Soni"
    />
</label>
        <label className="space-y-3">
<span className="field-label">
Email
</span>
    <input
    type="email"
    name="email"
    value={form.email}
    onChange={handleChange}
    required
    className="field-input"
    placeholder="monishsoni89@gmail.com"
    />
</label><label className="space-y-3">
<span className="field-label">
Your message
</span>
    <textarea
    type="message"
    // name=""
    value={form.message}
    onChange={handleChange}
    required
    rows={5}
    className="field-input"
    placeholder="Hi, I wanna give you a job..."
    />
</label>
        <button className="field-btn" type="submit" disabled={loading}>
            {loading? 'sending' : 'Send message'}
            <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
        </button>
    </form>
</div>
            </div>
        </section>
    )
}
export default Contact
