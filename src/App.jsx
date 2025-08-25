import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle, 
  Users, 
  Clock, 
  Globe, 
  Zap,
  Shield,
  BarChart3,
  Code,
  Cloud,
  Star,
  ArrowRight,
  Menu,
  X,
  MessageCircle,
  Linkedin,
  ChevronDown
} from 'lucide-react'
import './App.css'

// Import images
import heroImage from './assets/hero_office_image.webp'
import whyChooseImage from './assets/why_choose_office_image.webp'
import realEstateImage from './assets/real_estate_image.webp'
import deliveryImage from './assets/delivery_services_image.webp'
import healthcareImage from './assets/healthcare_image.webp'
import technologyImage from './assets/technology_team_image.webp'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const whatsappNumber = "+18484666666"
  const linkedinUrl = "https://www.linkedin.com/company/ahk-global-solutions/"

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' : 'bg-white/90 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">
                AHK Global<br />
                <span className="text-lg font-semibold text-gray-600">Solutions Limited</span>
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
              >
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
              </button>
              <button 
                onClick={() => scrollToSection('industries')}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
              >
                Industries
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
              </button>
            </nav>
            
            <div className="flex items-center space-x-4">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="hidden md:flex bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Get Started
              </Button>
              
              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-2 space-y-1">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('industries')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Industries
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Contact
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 lg:pt-24 pb-16 lg:pb-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Your Global{' '}
                  <span className="text-blue-600 relative">
                    Back Office Hub
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Comprehensive business support services combining human expertise with advanced automation. 
                  Focus on growing your business while we handle the rest.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Get Started
                </Button>
                <Button 
                  onClick={() => scrollToSection('services')}
                  variant="outline" 
                  className="border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-200"
                >
                  <BarChart3 className="w-5 h-5 mr-2" />
                  View Services
                </Button>
              </div>

              <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-xl shadow-lg inline-block">
                <span className="font-semibold">🎁 Special Offer: 3 Months Free Bookkeeping</span>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img 
                  src={heroImage} 
                  alt="Modern office space" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">24/7 Support Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-200">500+</div>
              <div className="text-gray-600 font-medium">Happy Clients</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-200">24/7</div>
              <div className="text-gray-600 font-medium">Support Available</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-200">99%</div>
              <div className="text-gray-600 font-medium">Client Satisfaction</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-200">50+</div>
              <div className="text-gray-600 font-medium">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Core Service Pillars
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive back office solutions tailored to your business needs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Virtual Assistance */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-blue-600 transition-colors duration-300">
                    <Users className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Virtual Assistance</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Professional administrative support, call handling, scheduling, and CRM management
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">24/7 Call Answering</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Email & Calendar Management</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Lead Qualification</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Multi-language Support</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Accounting & Bookkeeping */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-green-600 transition-colors duration-300">
                    <BarChart3 className="w-8 h-8 text-green-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Accounting & Bookkeeping</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Complete financial management from basic bookkeeping to advanced reporting
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">UAE & USA Compliance</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Multi-entity Consolidation</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Payroll Management</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Financial Reporting</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Why Choose AHK Global Solutions?
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We combine the best of human expertise with cutting-edge technology to deliver exceptional results.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                    <Users className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Human + Technology</h3>
                    <p className="text-gray-600">Skilled professionals enhanced by AI and automation for optimal efficiency.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                    <Globe className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Global Reach</h3>
                    <p className="text-gray-600">Serving clients across 50+ countries with local expertise and understanding.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                    <Clock className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Support</h3>
                    <p className="text-gray-600">Round-the-clock availability to support your business operations.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                    <Zap className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Scalable Solutions</h3>
                    <p className="text-gray-600">Flexible services that grow with your business needs and requirements.</p>
                  </div>
                </div>
              </div>

              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
              >
                Schedule a Consultation
              </Button>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img 
                  src={whyChooseImage} 
                  alt="Professional office environment" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Specialized Industry Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored services for specific industry needs and requirements
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Real Estate */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={realEstateImage} 
                  alt="Real Estate" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Real Estate</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive property management and investor support services
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm text-gray-700">Property Management</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm text-gray-700">MLS Support</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm text-gray-700">Investor Lead Generation</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm text-gray-700">Market Analytics</span>
                  </div>
                </div>
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors duration-200"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* Delivery Services */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={deliveryImage} 
                  alt="Delivery Services" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Delivery Services</h3>
                <p className="text-gray-600 mb-4">
                  Complete operational support for delivery and logistics companies
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm text-gray-700">Fleet Management</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm text-gray-700">Rider Recruitment</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm text-gray-700">24/7 Operations</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm text-gray-700">Performance Tracking</span>
                  </div>
                </div>
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors duration-200"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* Healthcare */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={healthcareImage} 
                  alt="Healthcare" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Healthcare</h3>
                <p className="text-gray-600 mb-4">
                  HIPAA-compliant medical billing and administrative support
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm text-gray-700">Medical Billing</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm text-gray-700">Claims Processing</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm text-gray-700">Patient Management</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm text-gray-700">Compliance Support</span>
                  </div>
                </div>
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors duration-200"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img 
                  src={technologyImage} 
                  alt="Technology team" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
            
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Powered by{' '}
                <span className="text-blue-600">Advanced Technology</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our technology stack ensures efficient, secure, and scalable operations for all your business needs.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                      <Shield className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Zoho One</h3>
                    <p className="text-sm text-gray-600">Complete business suite</p>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                      <Zap className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">AI Integration</h3>
                    <p className="text-sm text-gray-600">Smart automation</p>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                      <Code className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Custom Development</h3>
                    <p className="text-sm text-gray-600">MERN & Python stack</p>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                      <Cloud className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Cloud Hosting</h3>
                    <p className="text-sm text-gray-600">AWS & Azure</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by businesses worldwide for exceptional service delivery
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                  "AHK Global Solutions transformed our back office operations. Their virtual assistants are professional 
                  and efficient, handling everything from customer calls to complex data management."
                </blockquote>
                <div className="flex items-center">
                  <div>
                    <div className="font-bold text-gray-900">Sarah Johnson</div>
                    <div className="text-blue-600 font-medium">Tech Startup CEO</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                  "The accounting services are top-notch. They handle our multi-entity books with precision and 
                  provide excellent reporting that helps us make informed business decisions."
                </blockquote>
                <div className="flex items-center">
                  <div>
                    <div className="font-bold text-gray-900">Michael Chen</div>
                    <div className="text-blue-600 font-medium">Real Estate Investor</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Back Office?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Get started with our comprehensive back office solutions and focus on what matters most - growing your business.
          </p>
          
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl shadow-lg inline-block mb-8">
            <span className="text-lg font-semibold">🎁 Special Offer: 3 Months Free Bookkeeping</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            >
              <Zap className="w-5 h-5 mr-2" />
              Get Started
            </Button>
            <Button 
              onClick={() => scrollToSection('services')}
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-200"
            >
              <BarChart3 className="w-5 h-5 mr-2" />
              View Services
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Services */}
            <div>
              <h3 className="text-lg font-bold mb-6">Services</h3>
              <ul className="space-y-3 text-gray-300">
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">Virtual Assistant</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">Accounting & Bookkeeping</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">Digital Marketing</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">Technology Development</button></li>
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h3 className="text-lg font-bold mb-6">Industries</h3>
              <ul className="space-y-3 text-gray-300">
                <li><button onClick={() => scrollToSection('industries')} className="hover:text-white transition-colors">Real Estate</button></li>
                <li><button onClick={() => scrollToSection('industries')} className="hover:text-white transition-colors">Delivery Services</button></li>
                <li><button onClick={() => scrollToSection('industries')} className="hover:text-white transition-colors">Healthcare</button></li>
                <li><button onClick={() => scrollToSection('industries')} className="hover:text-white transition-colors">Consulting</button></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-bold mb-6">Company</h3>
              <ul className="space-y-3 text-gray-300">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">About Us</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">Contact</button></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms-of-use" className="hover:text-white transition-colors">Terms of Use</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-6">Contact Info</h3>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                  <a href="mailto:info@ahksolution.com" className="hover:text-white transition-colors">info@ahksolution.com</a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                  <a href="mailto:careers@ahksolution.com" className="hover:text-white transition-colors">careers@ahksolution.com</a>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                  <a href={`tel:${whatsappNumber}`} className="hover:text-white transition-colors">+1 (848) 466-6666</a>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 flex-shrink-0 mt-1" />
                  <div className="space-y-2">
                    <div>2082 Michelson Dr, Irvine, CA 92612</div>
                    <div>Office 2304 Prime Tower, Business Bay, Dubai, UAE</div>
                    <div>112 Hall Rd, Block B Gulberg 2, Lahore, Pakistan</div>
                  </div>
                </div>
                
                <div className="pt-4">
                  <h4 className="font-semibold mb-3">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a 
                      href={linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a 
                      href={`https://wa.me/${whatsappNumber.replace('+', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center hover:bg-green-700 transition-colors"
                    >
                      <MessageCircle className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2025 AHK Global Solutions Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href={`https://wa.me/${whatsappNumber.replace('+', '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 animate-pulse"
        >
          <MessageCircle className="w-7 h-7 text-white" />
        </a>
      </div>
    </div>
  )
}

export default App

