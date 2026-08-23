import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000'}/api/contact/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: data.detail || 'Message sent successfully!' });
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        // Look for specific validation errors from Django serializers
        if (data.message) {
          setStatus({ type: 'error', message: data.message[0] });
        } else if (data.name) {
          setStatus({ type: 'error', message: data.name[0] });
        } else if (data.email) {
          setStatus({ type: 'error', message: data.email[0] });
        } else {
          setStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
        }
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus({ type: 'error', message: 'Network error. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 px-4 max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8 bg-[#fdfaf2] p-8 rounded-xl shadow-sm border border-[#eaddca]">
        <div>
          <span className="text-amber-700 font-serif italic text-lg">Say hello</span>
          <h2 className="text-4xl font-serif font-bold text-stone-800 mt-2 mb-6">Let's Connect</h2>
          <p className="text-stone-600 mb-8">
            Drop a line if you want to talk about a project build, ask about one of my repositories, or just get in touch.
          </p>
          <div className="space-y-4 text-stone-700 text-sm">
            <div className="p-4 bg-white rounded-lg border border-stone-200">
              <span className="block text-xs font-bold text-amber-600 uppercase">Email Address</span>
              <span className="font-semibold text-stone-800">sharmasujana420@gmail.com</span>
            </div>
            <div className="p-4 bg-white rounded-lg border border-stone-200">
              <span className="block text-xs font-bold text-amber-600 uppercase">LinkedIn Connection</span>
              <a href="https://www.linkedin.com/in/sujana-sharma-b2230b416/" className="font-semibold text-stone-800 hover:underline">linkedin.com/in/sujana-sharma-b2230b416</a>
            </div>
            <div className="p-4 bg-white rounded-lg border border-stone-200">
              <span className="block text-xs font-bold text-amber-600 uppercase">GitHub Repository Profile</span>
              <a href="https://github.com/Sujana-deve" className="font-semibold text-stone-800 hover:underline">github.com/Sujana-deve</a>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-stone-700 uppercase mb-2">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 bg-[#f0f4f8] border border-stone-300 rounded-lg focus:outline-none focus:border-amber-700 text-stone-800"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-stone-700 uppercase mb-2">Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 bg-[#f0f4f8] border border-stone-300 rounded-lg focus:outline-none focus:border-amber-700 text-stone-800"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-stone-700 uppercase mb-2">Message</label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 bg-[#f0f4f8] border border-stone-300 rounded-lg focus:outline-none focus:border-amber-700 text-stone-800"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full p-4 bg-[#3d2a1d] text-white font-bold rounded-lg hover:bg-[#2b1e15] transition-colors disabled:opacity-50"
          >
            {isSubmitting ? 'SENDING...' : 'SEND MESSAGE ✉️'}
          </button>

          {status.message && (
            <div className={`mt-4 text-center p-3 rounded-lg text-sm font-semibold ${
              status.type === 'success' ? 'bg-green-100 text-green-800 border border-green-200' : 'bg-red-100 text-red-800 border border-red-200'
            }`}>
              {status.message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;