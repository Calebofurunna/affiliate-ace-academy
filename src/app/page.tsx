// app/page.tsx
'use client';

import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Logo from '../../public/affiliate-ace-academy-logo.png';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage('Success! Redirecting to WhatsApp...');
        setTimeout(() => {
          window.open(
            'https://chat.whatsapp.com/HauDOJCLvhxAXkN0jimRgi?mode=ac_t',
            '_self'
          );
        }, 2000);
        setFormData({ name: '', email: '' });
      } else {
        setMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setMessage('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Head>
        <title>Affiliate Ace Academy - Affiliate Ace is Active</title>
        <meta
          name="description"
          content="Join Affiliate Ace Academy and transform your social presence into a profitable business. Get access to high-converting products, expert training, and earn up to 50% commissions. Start your affiliate marketing journey today!"
        />
        <meta
          name="keywords"
          content="affiliate marketing, affiliate program, digital marketing, online income, passive income, affiliate commissions, marketing training, affiliate network, earn money online, social media marketing"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href="https://affiliate-ace-academy.vercel.app/"
        />
        <meta
          property="og:title"
          content="Affiliate Ace Academy - Affiliate Ace is Active"
        />
        <meta
          property="og:description"
          content="Join thousands of successful affiliates earning passive income. High commissions, proven products, expert support."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://affiliate-ace-academy.vercel.app/"
        />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-white sticky top-0 z-50 shadow-sm border-b">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div>
                  <Image
                    src={Logo}
                    alt="Affiliate Ace Academy Logo"
                    width={200}
                    height={50}
                  />
                </div>
              </div>
              <a
                href="#join"
                className="bg-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-600 transition-colors"
              >
                Join Now
              </a>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-black">
                Earn by <span className="text-red-500">Promoting</span>
                <br />
                Join Our Affiliate Network Today
              </h2>

              <p className="text-xl md:text-2xl mb-8 text-gray-600 max-w-3xl mx-auto">
                Transform your social media presence into a profitable business.
                Get access to high-converting products, marketing materials, and
                earn generous commissions on every sale.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="flex items-center space-x-2 bg-gray-50 rounded-full px-6 py-3 border">
                  <span className="text-red-500 text-xl">✓</span>
                  <span className="font-semibold text-black">
                    Up to 50% Commissions
                  </span>
                </div>
                <div className="flex items-center space-x-2 bg-gray-50 rounded-full px-6 py-3 border">
                  <span className="text-red-500 text-xl">✓</span>
                  <span className="font-semibold text-black">
                    Ready-Made Content
                  </span>
                </div>
                <div className="flex items-center space-x-2 bg-gray-50 rounded-full px-6 py-3 border">
                  <span className="text-red-500 text-xl">✓</span>
                  <span className="font-semibold text-black">24/7 Support</span>
                </div>
              </div>

              <a
                href="#join"
                className="inline-block bg-red-500 text-white px-12 py-4 rounded-lg text-xl font-bold hover:bg-red-600 transition-colors shadow-lg"
              >
                Start Earning Today 🚀
              </a>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                How It Works
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Start earning in just 4 simple steps. No technical skills
                required!
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center group">
                <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl text-white shadow-sm group-hover:scale-105 transition-transform">
                  📝
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  1. Sign Up
                </h3>
                <p className="text-gray-600">
                  Join our platform in seconds with just your name and email.
                  It&#39;s completely free to get started.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl text-white shadow-sm group-hover:scale-105 transition-transform">
                  🎯
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  2. Get Products
                </h3>
                <p className="text-gray-600">
                  Access our library of high-converting products with proven
                  sales funnels and marketing materials.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl text-white shadow-sm group-hover:scale-105 transition-transform">
                  📱
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  3. Start Promoting
                </h3>
                <p className="text-gray-600">
                  Share products on social media, blogs, or with your network
                  using our ready-made content and links.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl text-white shadow-sm group-hover:scale-105 transition-transform">
                  💰
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  4. Earn Commissions
                </h3>
                <p className="text-gray-600">
                  Get paid instantly when someone buys through your link.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Join Us */}
        <section id="benefits" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Why Choose Affiliate Ace Academy?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We provide everything you need to build a successful affiliate
                marketing business
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  High Converting Products
                </h3>
                <p className="text-gray-600 mb-4">
                  Promote products with proven track records and conversion
                  rates of 5-15%. Every product is tested and optimized.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <span className="text-red-500 mr-2">✓</span> Tested sales
                    funnels
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-500 mr-2">✓</span> High-quality
                    products
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-500 mr-2">✓</span> Multiple niches
                    available
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">💎</div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  Premium Support
                </h3>
                <p className="text-gray-600 mb-4">
                  Get expert guidance from successful affiliates and dedicated
                  support team members who care about your success.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <span className="text-red-500 mr-2">✓</span> 24/7 WhatsApp
                    support
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-500 mr-2">✓</span> Weekly training
                    calls
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-500 mr-2">✓</span> Success
                    mentoring
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  Marketing Resources
                </h3>
                <p className="text-gray-600 mb-4">
                  Access our library of high-converting ads, email templates,
                  social media content, and landing pages.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <span className="text-red-500 mr-2">✓</span> Ready-made
                    content
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-500 mr-2">✓</span> Video
                    advertisements
                  </li>
                  <li className="flex items-center">
                    <span className="text-red-500 mr-2">✓</span> Email sequences
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section id="join" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
                Ready to Start Earning?
              </h2>
              <p className="text-xl mb-8 text-gray-600">
                Join thousands of successful affiliates who are already building
                their passive income streams. It&apos;s free to get started and
                takes less than 2 minutes.
              </p>

              <div className="bg-white rounded-2xl p-8 shadow-sm border">
                <h3 className="text-2xl font-bold mb-6 text-black">
                  Join Affiliate Ace Academy
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-red-500 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-red-600 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting
                      ? 'Joining...'
                      : 'Join Now & Get WhatsApp Access 🚀'}
                  </button>
                </form>

                {message && (
                  <div
                    className={`mt-4 p-4 rounded-lg ${
                      message.includes('Success')
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {message}
                  </div>
                )}

                <p className="text-sm text-gray-500 mt-6">
                  By joining, you&#39;ll get instant access to our exclusive
                  WhatsApp group where you can connect with other successful
                  affiliates and get real-time support from our team.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white py-12 border-t">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <Image
                  src={Logo}
                  alt="Affiliate Ace Academy Logo"
                  width={200}
                  height={50}
                />
              </div>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Empowering individuals to build successful affiliate marketing
                businesses through proven strategies, premium products, and
                dedicated support.
              </p>
              <div className="flex justify-center space-x-6 mb-8">
                <a
                  href="#"
                  className="text-gray-500 hover:text-red-500 transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-red-500 transition-colors"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-red-500 transition-colors"
                >
                  Contact
                </a>
              </div>
              <p className="text-gray-500">
                © 2025 Affiliate Ace Academy. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
