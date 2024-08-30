import Head from 'next/head';
import { useState, useEffect } from 'react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    '/img1.jpg',
    '/image2.jpg',
    '/slider2.png',
    '/slider3.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const handlePrevClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const handleNextClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Real time data aggregation" />
        <title>Umeed</title>
      </Head>

      {/* Banner */}
      <div className="bg-red-600 text-white py-2 z-index: 10 mt-2 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-red-700 opacity-50"></div>
        <div className="whitespace-nowrap animate-marquee">
          <span className="px-6">📞 Police Helpline: 100</span>
          <span className="px-6">🚨 NDRF: 011-2342 4099</span>
          <span className="px-6">🚑 Rapid Response Team: 108</span>
          <span className="px-6">🌟 "Prepared for the Unexpected"</span>
          <span className="px-6">📞 Police Helpline: 100</span>
          <span className="px-6">🚑 Rapid Response Team: 108</span>
        </div>
      </div>

      {/* Slider */}
      <div className="relative w-full max-w-4xl mt-2 mx-auto">
        <div className="relative overflow-hidden rounded-lg" style={{ height: '400px' }}>
          <div className="flex transition-transform duration-100 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)`, height: '100%' }}>
            {slides.map((slide, index) => (
              <div key={index} className="w-full flex-shrink-0" style={{ height: '100%' }}>
                <img src={slide} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" style={{ height: '100%' }} />
              </div>
            ))}
          </div>

          {/* Prev Button */}
          <button
            onClick={handlePrevClick}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md focus:outline-none"
          >
            &#10094;
          </button>

          {/* Next Button */}
          <button
            onClick={handleNextClick}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md focus:outline-none"
          >
            &#10095;
          </button>
        </div>

        {/* Indicator Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-blue-500' : 'bg-gray-300'}`}
            ></button>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="p3.jpeg" />
                <p className="leading-relaxed">"Working with the disaster response team has been an incredible experience. Their dedication, quick response times, and ability to adapt to rapidly changing situations are unmatched. They not only provide immediate relief but also offer long-term support to affected communities. Their professionalism and compassion make them a crucial part of disaster management efforts."</p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                <p className="text-gray-500">Disaster Response Coordinator</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="/p1.jpeg" />
                <p className="leading-relaxed">"The disaster response team consistently demonstrates exceptional skill and coordination during critical situations. Their efficiency in mobilizing resources and managing operations on the ground has greatly enhanced our ability to provide timely medical assistance and support. Their teamwork and resilience make a significant difference in the lives of those affected by disasters."</p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">ALPER KAMU</h2>
                <p className="text-gray-500">Emergency Medical Technician</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="/p2.jpeg" />
                <p className="leading-relaxed">"As a volunteer working alongside the disaster response team, I've witnessed firsthand their commitment to making a positive impact. They go above and beyond to ensure that help reaches those in need swiftly and effectively. Their expertise and dedication are vital in coordinating relief efforts and supporting affected communities through challenging times."</p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HENRY LETHAM</h2>
                <p className="text-gray-500">Volunteer Field Officer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-red-100 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-red-600 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { question: 'What should I do during an earthquake?', answer: 'Drop to your hands and knees, cover your head and neck, and stay away from windows.' },
              { question: 'How can I prepare for a flood?', answer: 'Move to higher ground, avoid walking through water, and stay informed through reliable sources.' },
              { question: 'What are the signs of a tornado?', answer: 'Look out for dark, low-lying clouds, large, low-hanging, and fast-moving clouds, and a visible, rotating cloud base.' },
              { question: 'How can I stay safe during a wildfire?', answer: 'Follow evacuation orders, stay indoors with windows closed, and have a fire safety kit ready.' },
              { question: 'What should I include in my emergency kit?', answer: 'Include water, non-perishable food, first aid supplies, flashlights, batteries, and important documents.' },
              { question: 'How do I know if I am in a hurricane\'s path?', answer: 'Monitor weather updates, listen to local authorities, and check official hurricane tracking maps.' },
              { question: 'What is the best way to help after a disaster?', answer: 'Donate to reputable organizations, volunteer with local agencies, and provide support to those in need.' },
              { question: 'How can I volunteer during a disaster?', answer: 'Register with local disaster response organizations, follow their guidelines, and be prepared for immediate deployment.' },
              { question: 'What should I do if I am separated from my family during a disaster?', answer: 'Use social media, emergency contact services, and public communication centers to reunite with your family.' },
              { question: 'How can I stay informed about ongoing disasters?', answer: 'Use reliable news sources, official emergency alerts, and follow updates from disaster management agencies.' },
            ].map((faq, index) => (
              <div key={index} className="border-b border-gray-200 py-4">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left text-red-600 font-semibold flex justify-between items-center"
                >
                  <span>{faq.question}</span>
                  <svg className={`w-6 h-6 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === index && <p className="mt-2 text-gray-600">{faq.answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
