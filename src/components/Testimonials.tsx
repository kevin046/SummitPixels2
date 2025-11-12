import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      title: 'CEO',
      company: 'TechFlow Solutions',
      quote: 'Summit Pixels transformed our outdated website into a modern, high-converting platform. The team\'s attention to detail and strategic approach resulted in a 300% increase in user engagement.',
      rating: 5,
      image: 'https://via.placeholder.com/200x200/1E3A8A/FFFFFF?text=SC'
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      title: 'VP of Marketing',
      company: 'Growth Dynamics',
      quote: 'Working with Summit Pixels was a game-changer for our mobile app. Their expertise in React Native and user experience design helped us launch a product that exceeded all expectations.',
      rating: 5,
      image: 'https://via.placeholder.com/200x200/0D9488/FFFFFF?text=MR'
    },
    {
      id: 3,
      name: 'Emily Johnson',
      title: 'Director of Digital',
      company: 'RetailMax',
      quote: 'The e-commerce platform Summit Pixels built for us has been incredible. We saw a 250% increase in online sales within the first quarter. Their ongoing support is exceptional.',
      rating: 5,
      image: 'https://via.placeholder.com/200x200/1E3A8A/FFFFFF?text=EJ'
    },
    {
      id: 4,
      name: 'David Kim',
      title: 'CTO',
      company: 'FinTech Innovations',
      quote: 'Summit Pixels delivered a complex financial platform that handles millions of transactions daily. Their technical expertise and security-first approach gave us complete confidence.',
      rating: 5,
      image: 'https://via.placeholder.com/200x200/0D9488/FFFFFF?text=DK'
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      title: 'Founder',
      company: 'HealthTech Startup',
      quote: 'From concept to launch, Summit Pixels was with us every step. They understood our vision and created a healthcare app that\'s both beautiful and functional.',
      rating: 5,
      image: 'https://via.placeholder.com/200x200/1E3A8A/FFFFFF?text=LT'
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <section id="testimonials" className="section-padding bg-main">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with Summit Pixels.
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="relative bg-white rounded-2xl p-8 md:p-12 shadow-2xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                {/* Quote Icon */}
                <div className="flex justify-center mb-6">
                  <Quote className="w-12 h-12 text-gray-300 opacity-50" />
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                  "{testimonials[currentSlide].quote}"
                </blockquote>

                {/* Client Info */}
                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
                  <img
                    src={testimonials[currentSlide].image}
                    alt={testimonials[currentSlide].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="text-center md:text-left">
                    <h4 className="text-xl font-bold text-gray-900">
                      {testimonials[currentSlide].name}
                    </h4>
                    <p className="text-gray-600">
                      {testimonials[currentSlide].title}, {testimonials[currentSlide].company}
                    </p>
                    <div className="flex justify-center md:justify-start mt-2">
                      {renderStars(testimonials[currentSlide].rating)}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-gray-900 scale-125'
                    : 'bg-gray-400 hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div className="bg-surface rounded-xl p-6">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-secondary">Happy Clients</div>
          </div>
          <div className="bg-surface rounded-xl p-6">
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-secondary">Client Satisfaction</div>
          </div>
          <div className="bg-surface rounded-xl p-6">
            <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-secondary">Average Rating</div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-secondary text-lg mb-6">
            Ready to join our growing list of satisfied clients?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            Start Your Project Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials