import Image from 'next/image'
import { 
  ComputerDesktopIcon, 
  ShieldCheckIcon, 
  CloudArrowUpIcon,
  CogIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative gradient-bg text-white section-padding overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="IT Support Background"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container mx-auto container-padding relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in font-heading">
                Professional IT Support
                <span className="block text-accent-400">for Your Business</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100 animate-slide-up font-body">
                We provide comprehensive IT support and technology consulting services to help your business thrive in the digital age.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact" 
                  className="btn-primary text-center"
                >
                  Get Started Today
                </a>
                <a 
                  href="#services" 
                  className="btn-secondary text-center"
                >
                  Our Services
                </a>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 animate-fade-in">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <ComputerDesktopIcon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-semibold mb-2">24/7 Support</h3>
                      <p className="text-sm text-blue-100">Round-the-clock technical assistance</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <ShieldCheckIcon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-semibold mb-2">Security First</h3>
                      <p className="text-sm text-blue-100">Advanced cybersecurity solutions</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CloudArrowUpIcon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-semibold mb-2">Cloud Solutions</h3>
                      <p className="text-sm text-blue-100">Scalable cloud infrastructure</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CogIcon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-semibold mb-2">System Integration</h3>
                      <p className="text-sm text-blue-100">Seamless technology integration</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary-900 mb-4 font-heading">Our IT Services</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto font-body">
              Comprehensive technology solutions designed to keep your business running smoothly and securely
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-secondary-100 card-hover group">
                <div className="relative mb-6">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-white/90 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-primary-600" />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-4 font-heading">{service.title}</h3>
                <p className="text-secondary-600 mb-6 font-body">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-secondary-600">
                      <div className="w-2 h-2 bg-accent-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-secondary-50">
        <div className="container mx-auto container-padding">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
              <h2 className="text-4xl font-bold text-secondary-900 mb-6 font-heading">About MoonTree IT</h2>
              <p className="text-lg text-secondary-600 mb-6 font-body">
                We are a team of experienced IT professionals dedicated to providing exceptional technology support and consulting services to businesses of all sizes.
              </p>
              <p className="text-secondary-600 mb-8 font-body">
                With over 10 years of experience in the industry, we understand the unique challenges that businesses face in today's rapidly evolving technology landscape. Our mission is to help organizations leverage technology to achieve their goals and drive growth.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
                  <div className="text-secondary-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
                  <div className="text-secondary-600">Support Available</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">99.9%</div>
                  <div className="text-secondary-600">Uptime Guarantee</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">15min</div>
                  <div className="text-secondary-600">Response Time</div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <Image
                  src="/images/team-working.jpg"
                  alt="MoonTree IT Team"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-semibold text-secondary-900 mb-4">Why Choose Us?</h3>
                  <div className="space-y-4">
                    {whyChooseUs.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                          <item.icon className="w-5 h-5 text-accent-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-secondary-900 mb-1">{item.title}</h4>
                          <p className="text-sm text-secondary-600">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-heading">Trusted by Businesses Worldwide</h2>
            <p className="text-xl text-blue-100">Our track record speaks for itself</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Clients Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-blue-100">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary-900 mb-4 font-heading">Get In Touch</h2>
                          <p className="text-xl text-secondary-600 max-w-2xl mx-auto font-body">
                Ready to transform your IT infrastructure? Contact us today for a free consultation.
              </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="relative mb-8">
                  <Image
                    src="/images/office.jpg"
                    alt="MoonTree Office"
                    width={600}
                    height={300}
                    className="rounded-xl shadow-lg w-full"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-secondary-900 mb-6 font-heading">Contact Information</h3>
                <div className="space-y-6">
                                  {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-secondary-900 mb-1">{item.title}</h4>
                      <p className="text-secondary-600 text-sm leading-relaxed">{item.value}</p>
                    </div>
                  </div>
                ))}
                </div>
              </div>
              <div>
                <div className="bg-secondary-50 p-8 rounded-xl h-full">
                  <h3 className="text-2xl font-semibold text-secondary-900 mb-6 font-heading">Business Hours</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-secondary-200">
                      <span className="font-medium text-secondary-900">Monday - Friday</span>
                      <span className="text-secondary-600">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-secondary-200">
                      <span className="font-medium text-secondary-900">Saturday</span>
                      <span className="text-secondary-600">9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-secondary-200">
                      <span className="font-medium text-secondary-900">Sunday</span>
                      <span className="text-secondary-600">Emergency Support Only</span>
                    </div>
                  </div>
                  <div className="mt-8 p-6 bg-white rounded-lg border border-secondary-200">
                    <h4 className="font-semibold text-secondary-900 mb-3">Emergency Support</h4>
                    <p className="text-secondary-600 text-sm mb-4">
                      For critical issues outside business hours, our emergency support team is available 24/7.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

const services = [
  {
    title: "IT Support & Helpdesk",
    description: "Comprehensive technical support for all your IT needs, available 24/7.",
    icon: ComputerDesktopIcon,
    image: "/images/it-support.jpg",
    features: [
      "Remote desktop support",
      "Hardware & software troubleshooting",
      "Network connectivity issues",
      "Email & communication setup"
    ]
  },
  {
    title: "Cybersecurity Services",
    description: "Protect your business with advanced security solutions and monitoring.",
    icon: ShieldCheckIcon,
    image: "/images/cybersecurity.jpg",
    features: [
      "Firewall configuration",
      "Antivirus & malware protection",
      "Security audits & assessments",
      "Employee security training"
    ]
  },
  {
    title: "Cloud Solutions",
    description: "Migrate to the cloud with our expert guidance and implementation services.",
    icon: CloudArrowUpIcon,
    image: "/images/cloud-solutions.jpg",
    features: [
      "Cloud migration planning",
      "AWS, Azure, Google Cloud setup",
      "Backup & disaster recovery",
      "Cloud cost optimization"
    ]
  },
  {
    title: "Network Infrastructure",
    description: "Design, implement, and maintain robust network infrastructure for your business.",
    icon: CogIcon,
    image: "/images/network-infrastructure.jpg",
    features: [
      "Network design & implementation",
      "WiFi setup & optimization",
      "VPN configuration",
      "Network monitoring & maintenance"
    ]
  },
  {
    title: "Data Backup & Recovery",
    description: "Ensure your data is safe with comprehensive backup and recovery solutions.",
    icon: ShieldCheckIcon,
    image: "/images/data-backup.jpg",
    features: [
      "Automated backup systems",
      "Disaster recovery planning",
      "Data encryption",
      "Regular backup testing"
    ]
  },
  {
    title: "IT Consulting",
    description: "Strategic technology consulting to help your business grow and innovate.",
    icon: ComputerDesktopIcon,
    image: "/images/it-consulting.jpg",
    features: [
      "Technology roadmapping",
      "Digital transformation",
      "IT strategy development",
      "Vendor selection & management"
    ]
  }
]

const whyChooseUs = [
  {
    title: "Expert Team",
    description: "Certified IT professionals with years of experience in enterprise technology.",
    icon: ComputerDesktopIcon
  },
  {
    title: "Fast Response",
    description: "Average response time of 15 minutes for critical issues and 2 hours for standard requests.",
    icon: ClockIcon
  },
  {
    title: "Proactive Monitoring",
    description: "24/7 system monitoring to prevent issues before they impact your business.",
    icon: ShieldCheckIcon
  },
  {
    title: "Scalable Solutions",
    description: "Technology solutions that grow with your business needs and requirements.",
    icon: CloudArrowUpIcon
  }
]

const contactInfo = [
  {
    title: "Email",
    value: "wyl0201@gmail.com",
    icon: EnvelopeIcon
  },
  {
    title: "Address",
    value: "144 #12-01 Robinsons Square, Robinson Road, Singapore 068908",
    icon: MapPinIcon
  },
  {
    title: "Support Hours",
    value: "24/7 Emergency Support Available",
    icon: ClockIcon
  }
] 