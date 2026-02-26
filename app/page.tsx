'use client';
import { useState } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const buy = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/checkout', { method: 'POST' });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert('Error: ' + (data.error || 'Unknown'));
      }
    } catch (error) {
      alert('Network error');
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-blue-900 to-purple-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8 text-center">Money App Rasco Bot</h1>
      <p className="text-xl mb-8 text-center max-w-md">Digital God UGC Pack</p>
      <p className="text-2xl mb-4">$1 Live Test Price</p>
      <button 
        onClick={buy} 
        disabled={loading} 
        className="bg-green-500 hover:bg-green-600 disabled:bg-gray-500 px-12 py-6 rounded-xl font-bold text-xl shadow-2xl transition-all"
      >
        {loading ? 'Processing...' : 'Buy Now - Pay $1'}
      </button>
      <p className="mt-8 text-sm opacity-75">Real payment. Success → fulfillment.</p>
    </div>
  );
}