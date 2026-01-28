import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full mx-auto max-w-screen-xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-yellow-500">LitPixel</span> Photography
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Capturing moments that matter, telling stories through light and shadow
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="w-full mx-auto max-w-screen-xl py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Meet Isaac Leina</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Isaac Leina is a passionate photographer with a unique vision for capturing life's most meaningful moments. With a deep love for storytelling through imagery, Isaac has built a reputation for creating authentic, emotionally resonant photographs that speak to the heart.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              With over a decade of professional experience, Isaac has worked with diverse clients ranging from families and couples to businesses and brands. His signature style blends technical expertise with artistic intuition, resulting in images that are both technically perfect and beautifully composed.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Isaac founded LitPixel Photography with the vision of making professional photography accessible while maintaining the highest standards of quality and creativity. Every project is approached with dedication, ensuring that your unique story is told in the most compelling way possible.
            </p>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/girl-guitar.avif"
              alt="Isaac Leina - Photographer"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="w-full mx-auto max-w-screen-xl py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Mission & Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission Card */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="bg-yellow-500 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
            <p className="text-gray-600">
              To deliver exceptional photography services that capture authentic moments and create lasting memories for our clients.
            </p>
          </div>

          {/* Quality Card */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="bg-yellow-500 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Quality First</h3>
            <p className="text-gray-600">
              We maintain the highest standards in every aspect of our work, from equipment to post-processing, ensuring premium results.
            </p>
          </div>

          {/* Innovation Card */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="bg-yellow-500 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Innovation</h3>
            <p className="text-gray-600">
              We embrace the latest photography techniques and technologies to bring fresh, creative perspectives to every project.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full mx-auto max-w-screen-xl py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h-2m0 0h-2m2 0v-2m0 2v2m6-8h.01M4 20h16a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Portrait Photography</h3>
              <p className="text-gray-600">Professional portraits that capture personality and emotion with stunning detail.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Event Photography</h3>
              <p className="text-gray-600">Comprehensive coverage of your special events, capturing every magical moment.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Product Photography</h3>
              <p className="text-gray-600">High-quality product images designed to showcase your brand and boost sales.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Post-Processing</h3>
              <p className="text-gray-600">Expert editing and retouching to enhance and perfect every image.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full mx-auto max-w-screen-xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Work Together?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's create something beautiful. Get in touch to discuss your photography needs and how we can help bring your vision to life.
          </p>
          <Link
            href="/contacts"
            className="inline-block bg-yellow-500 text-white font-semibold py-3 px-8 rounded-lg hover:bg-yellow-600 transition duration-300"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  )
}
