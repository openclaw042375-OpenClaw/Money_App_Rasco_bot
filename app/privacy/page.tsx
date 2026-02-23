export default function Privacy() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 text-gray-300">
      <h1 className="text-3xl font-bold text-white mb-2">Privacy Policy</h1>
      <p className="text-gray-500 mb-10">Last updated: February 23, 2026</p>
      <div className="space-y-8">
        <section><h2 className="text-xl font-semibold text-white mb-2">1. Information We Collect</h2><p>When you make a purchase, Stripe collects your payment information. We receive only your email address and transaction ID from Stripe to fulfill your order. We do not store credit card details.</p></section>
        <section><h2 className="text-xl font-semibold text-white mb-2">2. How We Use Information</h2><p>Your email is used solely to deliver your purchased product and send a receipt. We do not sell, rent, or share your personal information with third parties.</p></section>
        <section><h2 className="text-xl font-semibold text-white mb-2">3. Cookies</h2><p>This site does not use tracking cookies. Stripe may set cookies for fraud prevention purposes during checkout.</p></section>
        <section><h2 className="text-xl font-semibold text-white mb-2">4. Third-Party Services</h2><p>We use Stripe for payment processing. Their privacy policy is available at <a href="https://stripe.com/privacy" className="text-cyan-400" target="_blank" rel="noopener noreferrer">stripe.com/privacy</a>.</p></section>
        <section><h2 className="text-xl font-semibold text-white mb-2">5. Data Retention</h2><p>Transaction records are retained as required by law. You may request deletion of your data by contacting us.</p></section>
        <section><h2 className="text-xl font-semibold text-white mb-2">6. Contact</h2><p>For privacy-related requests, contact us at <a href="https://x.com/OpenClaw042375" className="text-cyan-400">@OpenClaw042375</a> on X.</p></section>
      </div>
      <a href="/" className="inline-block mt-10 text-gray-500 hover:text-gray-300">← Back to home</a>
    </main>
  );
}
