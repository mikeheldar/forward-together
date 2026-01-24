import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { siteConfig } from '@/lib/site-config';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-grow py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-[#284c61] mb-12 text-center">
              Contact Us
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-semibold text-[#284c61] mb-6">
                  Get in Touch
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Email</h3>
                    <a 
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-[#0b8aa6] hover:text-[#096e85] transition-colors text-lg"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Phone</h3>
                    <a 
                      href={`tel:${siteConfig.contact.phone.replace(/[^\d]/g, '')}`}
                      className="text-[#0b8aa6] hover:text-[#096e85] transition-colors text-lg"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Location</h3>
                    <p className="text-gray-700 text-lg">
                      {siteConfig.contact.address.street}<br />
                      {siteConfig.contact.address.city}, {siteConfig.contact.address.state} {siteConfig.contact.address.zip}
                    </p>
                  </div>
                </div>
              </div>

              {/* Office Information */}
              <div>
                <h2 className="text-2xl font-semibold text-[#284c61] mb-6">
                  Office Hours
                </h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700 mb-4">
                    Please contact us to schedule an appointment. We offer both in-person 
                    and telehealth sessions to accommodate your needs.
                  </p>
                  <p className="text-gray-700">
                    Sessions are available by appointment only. We'll work with you to 
                    find a time that fits your schedule.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

