import React from "react";

const About = () => {
  return (
    <section className="pt-32 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About PetSitter
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We connect pet owners with trusted, caring sitters to keep your
            furry friends happy and safe.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 mb-4">
              At PetSitter, we believe every pet deserves loving care. Our
              mission is to make pet sitting accessible, affordable, and
              trustworthy for everyone.
            </p>
            <p className="text-gray-600 mb-4">
              Whether you're going on vacation, working late, or need daily pet
              care, we connect you with verified pet sitters who treat your pets
              like family.
            </p>
          </div>
          <div className="bg-amber-100 rounded-xl h-80 flex items-center justify-center">
            <span className="text-6xl">🐾</span>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Verified Sitters
              </h3>
              <p className="text-gray-600">
                All sitters are thoroughly vetted and background checked for
                your peace of mind.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Real Reviews
              </h3>
              <p className="text-gray-600">
                Read honest reviews from pet owners just like you to find the
                perfect sitter.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Secure Booking
              </h3>
              <p className="text-gray-600">
                Easy booking, secure payments, and 24/7 support for complete
                peace of mind.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-black text-white rounded-xl p-12 text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">5K+</div>
              <p className="text-gray-300">Happy Pets</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2K+</div>
              <p className="text-gray-300">Trusted Sitters</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <p className="text-gray-300">Cities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
