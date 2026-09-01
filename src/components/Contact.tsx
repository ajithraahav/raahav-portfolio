import React, { useState } from 'react';
import { RESUME_DATA } from '../data/resumeData';
import { Mail, Phone, MapPin, Send, Copy, Check, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(RESUME_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(RESUME_DATA.personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg('Please fill in your name, email, and message.');
      return;
    }
    setErrorMsg('');
    setIsSubmitting(true);

    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "09db63c1-[#0071E3]-public-portfolio",
          email: RESUME_DATA.personal.email,
          from_name: formData.name,
          replyto: formData.email,
          subject: formData.subject || `New Portfolio Inquiry from ${formData.name}`,
          message: `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`,
        }),
      });

      const mailtoUrl = `mailto:${RESUME_DATA.personal.email}?subject=${encodeURIComponent(
        formData.subject || `Inquiry from Portfolio: ${formData.name}`
      )}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      
      window.location.href = mailtoUrl;

      setIsSubmitting(false);
      setSubmitted(true);
    } catch (err) {
      const mailtoUrl = `mailto:${RESUME_DATA.personal.email}?subject=${encodeURIComponent(
        formData.subject || `Inquiry from Portfolio: ${formData.name}`
      )}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      
      window.location.href = mailtoUrl;
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-[#F5F5F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0071E3]/10 border border-[#0071E3]/20 text-[#0071E3] text-xs font-semibold">
            <Mail className="w-3.5 h-3.5" /> Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1D1D1F] tracking-tight">
            Let's Build Something Great Together
          </h2>
          <p className="text-[#515154] text-base">
            Open to senior Flutter engineering roles, mobile architecture consultations, and contract mobile development engagements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
          
          {/* Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="apple-glass-card rounded-3xl p-6 border border-black/5 space-y-6">
              <h3 className="text-xl font-bold text-[#1D1D1F] flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-[#0071E3]" /> Direct Communication
              </h3>

              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-[#F5F5F7] border border-black/5 flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white text-[#0071E3] border border-black/5 shadow-2xs">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[#86868B] uppercase font-semibold">Email Address</div>
                    <a href={`mailto:${RESUME_DATA.personal.email}`} className="text-sm font-bold text-[#1D1D1F] hover:text-[#0071E3] transition-colors">
                      {RESUME_DATA.personal.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl text-[#86868B] hover:text-[#1D1D1F] hover:bg-white transition-colors"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-2xl bg-[#F5F5F7] border border-black/5 flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white text-indigo-600 border border-black/5 shadow-2xs">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[#86868B] uppercase font-semibold">Phone / WhatsApp</div>
                    <a href={`tel:${RESUME_DATA.personal.phone}`} className="text-sm font-bold text-[#1D1D1F] hover:text-[#0071E3] transition-colors">
                      {RESUME_DATA.personal.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="p-2 rounded-xl text-[#86868B] hover:text-[#1D1D1F] hover:bg-white transition-colors"
                  title="Copy Phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-[#F5F5F7] border border-black/5 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white text-emerald-600 border border-black/5 shadow-2xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#86868B] uppercase font-semibold">Location</div>
                  <div className="text-sm font-bold text-[#1D1D1F]">
                    {RESUME_DATA.personal.location}
                  </div>
                </div>
              </div>

              {/* Social Buttons */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href={RESUME_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-white hover:bg-slate-50 border border-black/5 text-xs font-bold text-[#1D1D1F] hover:text-[#0071E3] shadow-2xs transition-colors"
                >
                  <GithubIcon className="w-4 h-4" /> GitHub
                </a>
                <a
                  href={RESUME_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-white hover:bg-slate-50 border border-black/5 text-xs font-bold text-[#1D1D1F] hover:text-[#0071E3] shadow-2xs transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" /> LinkedIn
                </a>
              </div>

            </div>

          </div>

          {/* Interactive Form */}
          <div className="lg:col-span-7">
            <div className="apple-glass-card rounded-3xl p-6 sm:p-8 border border-black/5">
              
              <h3 className="text-xl font-bold text-[#1D1D1F] mb-6">
                Send a Direct Email Message
              </h3>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 border border-emerald-300 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-950">Email Prepared & Sent!</h4>
                  <p className="text-xs text-emerald-900 leading-relaxed font-medium">
                    Your message has been formatted to deliver directly to <strong>{RESUME_DATA.personal.email}</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2 text-xs font-semibold text-[#0071E3] bg-white border border-black/10 rounded-full shadow-2xs"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs font-semibold text-rose-800">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#86868B] uppercase mb-1.5 font-semibold">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-3 rounded-2xl bg-white border border-black/10 text-sm text-[#1D1D1F] placeholder-[#86868B] focus:outline-none focus:border-[#0071E3] shadow-2xs transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#86868B] uppercase mb-1.5 font-semibold">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. s.jenkins@company.com"
                        className="w-full px-4 py-3 rounded-2xl bg-white border border-black/10 text-sm text-[#1D1D1F] placeholder-[#86868B] focus:outline-none focus:border-[#0071E3] shadow-2xs transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#86868B] uppercase mb-1.5 font-semibold">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Senior Flutter Mobile Engineering Consultation"
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-black/10 text-sm text-[#1D1D1F] placeholder-[#86868B] focus:outline-none focus:border-[#0071E3] shadow-2xs transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#86868B] uppercase mb-1.5 font-semibold">
                      Message *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your mobile project requirements, engineering goals, or timeline..."
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-black/10 text-sm text-[#1D1D1F] placeholder-[#86868B] focus:outline-none focus:border-[#0071E3] shadow-2xs transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-bold text-white bg-[#0071E3] hover:bg-[#0056B3] shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Email...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Email to ajithraahav@gmail.com</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
