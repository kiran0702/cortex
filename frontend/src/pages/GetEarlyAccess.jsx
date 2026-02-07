import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Getearlyaccess = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("success");
          setShowModal(true);
          formRef.current.reset();
          setIsSubmitting(false);
        },
        () => {
          setStatus("error");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <main className="min-h-screen bg-linear-to-br from-orange-50 via-white to-orange-100 flex items-center justify-center p-4 sm:p-8">
      <div className="max-w-2xl w-full relative">
        {/* Decorative dotted arrows */}
        <svg className="absolute -top-20 -left-10 w-32 h-32 text-orange-300 opacity-40 hidden lg:block" viewBox="0 0 100 100">
          <path d="M10,50 Q30,20 50,50 T90,50" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4,4" markerEnd="url(#arrowhead1)" />
          <defs>
            <marker id="arrowhead1" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill="currentColor" />
            </marker>
          </defs>
        </svg>

        <svg className="absolute -bottom-16 -right-10 w-32 h-32 text-orange-300 opacity-40 hidden lg:block" viewBox="0 0 100 100">
          <path d="M90,50 Q70,80 50,50 T10,50" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4,4" markerEnd="url(#arrowhead2)" />
          <defs>
            <marker id="arrowhead2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill="currentColor" />
            </marker>
          </defs>
        </svg>

        <section className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-br from-orange-100 to-transparent rounded-full blur-3xl opacity-30 -z-10"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-linear-to-tr from-orange-200 to-transparent rounded-full blur-3xl opacity-20 -z-10"></div>

          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-block mb-4">
              <span className="bg-linear-to-r from-orange-500 to-orange-600 text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">
                Limited Spots Available
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold bg-linear-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent mb-4">
              Join the CORTEX Waitlist
            </h1>

            {/* Dotted arrow pointing down */}
            <svg className="mx-auto w-8 h-12 text-orange-400 opacity-60 animate-bounce" viewBox="0 0 24 48">
              <path d="M12,4 L12,40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3,3" markerEnd="url(#arrowhead3)" />
              <defs>
                <marker id="arrowhead3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                  <polygon points="0 0, 8 3, 0 6" fill="currentColor" />
                </marker>
              </defs>
            </svg>

            <p className="text-gray-600 text-lg max-w-xl mx-auto mt-4">
              Be the first to unlock precision productivity.{' '}
              <span className="block mt-2 text-orange-600 font-semibold">
                Early adopters get exclusive pricing and priority shipping.
              </span>
            </p>
          </div>

          {/* Form */}
          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
            {/* Email */}
            <div className="relative">
              <label htmlFor="user_email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address <span className="text-orange-500">*</span>
              </label>
              <input
                id="user_email"
                type="email"
                name="user_email"
                placeholder="you@example.com"
                required
                className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:bg-white focus:outline-none transition-all duration-200 text-gray-800 placeholder-gray-400"
              />
            </div>

            {/* Phone */}
            <div className="relative">
              <label htmlFor="user_phone" className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number <span className="text-orange-500">*</span>
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value="+91"
                  readOnly
                  className="w-16 px-3 py-4 bg-gray-100 border-2 border-gray-200 rounded-xl text-gray-800 font-semibold text-center"
                />
                <input
                  id="user_phone"
                  type="tel"
                  name="user_phone"
                  placeholder="9876543210"
                  required
                  pattern="[0-9]{10}"
                  className="flex-1 px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:bg-white focus:outline-none transition-all duration-200 text-gray-800 placeholder-gray-400"
                />
              </div>
            </div>

            {/* Flavor Choice */}
            <div className="relative">
              <label htmlFor="flavor" className="block text-sm font-semibold text-gray-700 mb-2">
                Preferred Flavor <span className="text-orange-500">*</span>
              </label>
              <select
                id="flavor"
                name="flavor"
                required
                className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:bg-white focus:outline-none transition-all duration-200 text-gray-800 appearance-none cursor-pointer"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23f97316'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 1rem center',
                  backgroundSize: '1.5em 1.5em'
                }}
              >
                <option value="Blueberry Kick">🫐 Blueberry Kick</option>
                <option value="Midnight Matcha (Coming Soon)">🍵 Midnight Matcha (Coming Soon)</option>
                <option value="Guava Rise (Coming Soon)">🥭 Guava Rise (Coming Soon)</option>
              </select>
            </div>

            {/* How did you hear about us */}
            <div className="relative">
              <label htmlFor="source" className="block text-sm font-semibold text-gray-700 mb-2">
                How did you hear about us? <span className="text-orange-500">*</span>
              </label>
              <select
                id="source"
                name="source"
                required
                className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:bg-white focus:outline-none transition-all duration-200 text-gray-800 appearance-none cursor-pointer"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23f97316'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 1rem center',
                  backgroundSize: '1.5em 1.5em'
                }}
              >
                <option value="">Select an option</option>
                <option value="Social Media">Social Media</option>
                <option value="Friend/Family">Friend or Family</option>
                <option value="Search Engine">Search Engine</option>
                <option value="Advertisement">Advertisement</option>
                <option value="Influencer">Influencer</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-5 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 text-lg"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </>
              ) : (
                <>
                  Join the Waitlist
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </>
              )}
            </button>
          </form>

          {/* Status Messages */}
          {status === "error" && (
            <div className="mt-6 p-5 bg-red-50 border-2 border-red-200 rounded-xl flex items-center gap-3 animate-fade-in">
              <div className="shrink-0 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div>
                <p className="text-red-800 font-semibold">Something went wrong</p>
                <p className="text-red-600 text-sm">Please try again or contact support.</p>
              </div>
            </div>
          )}

          {/* Footer note */}
          <p className="text-center text-sm text-gray-500 mt-8">
            🔒 Your information is secure and will never be shared.
          </p>
        </section>
      </div>

      {/* Success Modal - Full Page Overlay */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
          {/* Backdrop */}
          <button
            className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-default"
            onClick={() => setShowModal(false)}
            aria-label="Close modal"
          ></button>

          {/* Modal Content */}
          <div className="relative z-10 bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-8 md:p-12 animate-scale-in">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Success Icon */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-6 animate-bounce-in">
                <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Welcome to the <span className="bg-linear-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">CORTEX</span> Family!
              </h2>

              <p className="text-lg text-gray-600 mb-6">
                You're officially on the waitlist! 🎉
              </p>
            </div>

            {/* What's Next Section */}
            <div className="space-y-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <span className="text-orange-500">→</span> What happens next?
              </h3>

              <div className="space-y-4">
                <div className="flex gap-4 items-start p-4 bg-orange-50 rounded-2xl border border-orange-100">
                  <div className="shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Check Your Email</h4>
                    <p className="text-gray-600 text-sm">
                      We've sent a confirmation to your inbox with all the exciting details about your early access.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 bg-orange-50 rounded-2xl border border-orange-100">
                  <div className="shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Exclusive Early Access</h4>
                    <p className="text-gray-600 text-sm">
                      You'll be the first to know when CORTEX launches, with special pricing just for you.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-4 bg-orange-50 rounded-2xl border border-orange-100">
                  <div className="shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Priority Shipping</h4>
                    <p className="text-gray-600 text-sm">
                      When we go live, your order ships first. No waiting, no delays—just pure cognitive performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Special Offer Banner */}
            <div className="bg-linear-to-r from-orange-500 to-orange-600 rounded-2xl p-6 text-white text-center mb-6">
              <p className="text-sm font-semibold uppercase tracking-wider mb-2">Early Access Exclusive</p>
              <p className="text-2xl font-black mb-2">Save 25% on Launch Day</p>
              <p className="text-sm opacity-90">Plus FREE shipping on your first order</p>
            </div>

            {/* Social Links */}
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-4">Follow us for updates and cognitive performance tips</p>
              <div className="flex justify-center gap-4">
                <button type="button" onClick={() => window.open('https://twitter.com/cortex', '_blank')} className="w-12 h-12 bg-gray-100 hover:bg-orange-500 hover:text-white rounded-full flex items-center justify-center transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </button>
                <button type="button" onClick={() => window.open('https://instagram.com/cortex', '_blank')} className="w-12 h-12 bg-gray-100 hover:bg-orange-500 hover:text-white rounded-full flex items-center justify-center transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </button>
                <button type="button" onClick={() => window.open('https://facebook.com/cortex', '_blank')} className="w-12 h-12 bg-gray-100 hover:bg-orange-500 hover:text-white rounded-full flex items-center justify-center transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-scale-in {
          animation: scale-in 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        @keyframes bounce-in {
          0% {
            transform: scale(0);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
        .animate-bounce-in {
          animation: bounce-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>
    </main>
  );
};

export default Getearlyaccess;