import React, { useState } from 'react';
import { Mail, CheckCircle2, X, ShieldCheck } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [formData, setFormData] = useState({
    title: 'Mr.',
    name: '',
    email: '',
    netWorth: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const initiateSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setIsOpen(true);
    }
  };

  const confirmSubscription = () => {
    // Logic to actually submit to backend would go here
    setIsOpen(false);
    setIsSubscribed(true);
    setTimeout(() => setIsSubscribed(false), 5000); // Reset success message after 5s
  };

  return (
    <div className="py-24 bg-slate-900 border-t border-slate-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="bg-slate-950 border border-slate-800 p-8 md:p-12 shadow-2xl">
          
          <div className="text-center mb-10">
            <Mail className="w-12 h-12 text-gold-500 mx-auto mb-4" />
            <h2 className="text-3xl font-serif text-slate-100">The Insider Ledger</h2>
            <p className="text-slate-400 mt-2 max-w-lg mx-auto">
              Receive monthly intelligence on distressed assets, Shmita loopholes, and global arbitrage opportunities.
            </p>
          </div>

          {isSubscribed ? (
            <div className="bg-green-900/20 border border-green-500/30 p-6 text-center rounded-sm">
                <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-green-400 font-serif text-xl mb-2">Mazel Tov!</h3>
                <p className="text-slate-400 text-sm">You have been added to our secure list. We will be watching your career with great interest.</p>
            </div>
          ) : (
            <form onSubmit={initiateSubscribe} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                
                {/* Title */}
                <div className="md:col-span-2">
                  <label className="block text-xs uppercase tracking-widest text-gold-500 mb-2">Title</label>
                  <select 
                    name="title" 
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full bg-slate-900 border border-slate-700 text-slate-200 px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors rounded-none"
                  >
                    <option>Mr.</option>
                    <option>Mrs.</option>
                    <option>Ms.</option>
                    <option>Dr.</option>
                    <option>Rabbi</option>
                    <option>Hon.</option>
                  </select>
                </div>

                {/* Name */}
                <div className="md:col-span-5">
                  <label className="block text-xs uppercase tracking-widest text-gold-500 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Solomon G. Money"
                    required
                    className="w-full bg-slate-900 border border-slate-700 text-slate-200 px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors placeholder:text-slate-700"
                  />
                </div>

                {/* Net Worth */}
                <div className="md:col-span-5">
                  <label className="block text-xs uppercase tracking-widest text-gold-500 mb-2">Liquidity Status</label>
                  <select 
                    name="netWorth"
                    value={formData.netWorth}
                    onChange={handleChange} 
                    className="w-full bg-slate-900 border border-slate-700 text-slate-200 px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors rounded-none"
                  >
                    <option value="">Select Range...</option>
                    <option value="low">Under $1M (Aspiring)</option>
                    <option value="mid">$1M - $10M (Comfortable)</option>
                    <option value="high">$10M - $50M (Accredited)</option>
                    <option value="whale">$50M+ (Partner Material)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-gold-500 mb-2">Direct Contact Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="wealth@example.com"
                  required
                  className="w-full bg-slate-900 border border-slate-700 text-slate-200 px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors placeholder:text-slate-700"
                />
              </div>

              <div className="text-center pt-4">
                <button 
                  type="submit"
                  className="bg-gold-500 text-slate-950 px-12 py-4 text-sm uppercase tracking-widest font-bold hover:bg-white transition-all duration-300 w-full md:w-auto"
                >
                  Apply for Access
                </button>
                <p className="mt-4 text-[10px] text-slate-600 uppercase">
                  By clicking submit, you acknowledge that this list is exclusive.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Confirmation Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-slate-900 border-2 border-gold-500 w-full max-w-2xl shadow-2xl p-8 max-h-[90vh] overflow-y-auto">
            <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-slate-500 hover:text-gold-500"
            >
                <X />
            </button>

            <div className="text-center mb-6">
                <ShieldCheck className="w-16 h-16 text-gold-500 mx-auto mb-4" />
                <h3 className="text-2xl font-serif text-white mb-2">Confirm Allegiance</h3>
                <p className="text-slate-300">Please confirm your subscription details.</p>
            </div>

            <div className="bg-slate-950 p-4 border border-slate-800 mb-6 text-sm text-slate-300">
                <p><span className="text-gold-500 uppercase text-xs font-bold mr-2">Name:</span> {formData.title} {formData.name}</p>
                <p><span className="text-gold-500 uppercase text-xs font-bold mr-2">Email:</span> {formData.email}</p>
            </div>

            {/* THE FINE PRINT */}
            <div className="mb-8 border-t border-slate-800 pt-4">
                <p className="text-[9px] text-slate-500 leading-relaxed text-justify font-mono">
                    By proceeding and clicking the confirmation button below, you are legally attesting that you are signing up for this newsletter because you believe in an Israel-first country that has a unilateral right to defend itself against any and all enemies by any means necessary. You explicitly affirm that there is zero tolerance for any antisemitism in this world and that you support, uphold, and defend Zionist goals which have several mainstream frameworks. Most importantly, you acknowledge that this agreement does not allow for, in any way, the disagreement or opposition to Israel, the Jewish people, or a Jewish individual in any case or circumstance unless it is specifically a Jew going against other Jews in a matter of internal dispute. Violation of this covenant constitutes a breach of spiritual contract.
                </p>
            </div>

            <div className="flex gap-4 justify-center">
                <button 
                    onClick={() => setIsOpen(false)}
                    className="px-6 py-3 border border-slate-600 text-slate-400 hover:text-white hover:border-white uppercase text-xs tracking-widest transition-colors"
                >
                    Cancel
                </button>
                <button 
                    onClick={confirmSubscription}
                    className="px-6 py-3 bg-gold-500 text-slate-950 font-bold uppercase text-xs tracking-widest hover:bg-gold-400 transition-colors"
                >
                    I Affirm & Subscribe
                </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};