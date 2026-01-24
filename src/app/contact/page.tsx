import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { siteConfig } from '@/lib/site-config';

export default function Contact() {
  return (
    <div className="min-h-screen bg-background-default flex flex-col">
      <Header />
      
      <main className="flex-grow py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-600 mb-12 text-left font-heading">
            Contact Us
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="text-left">
              <h2 className="text-2xl font-semibold text-primary-600 mb-6 font-heading">
                Get in Touch
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">Email</h3>
                  <a 
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-secondary-600 hover:text-secondary-700 transition-colors text-lg"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">Phone</h3>
                  <a 
                    href={`tel:${siteConfig.contact.phone.replace(/[^\d]/g, '')}`}
                    className="text-secondary-600 hover:text-secondary-700 transition-colors text-lg"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">Location</h3>
                  <p className="text-neutral-700 text-lg">
                    {siteConfig.contact.address.street}<br />
                    {siteConfig.contact.address.city}, {siteConfig.contact.address.state} {siteConfig.contact.address.zip}
                  </p>
                </div>
              </div>
            </div>

            {/* Office Information */}
            <div className="text-left">
              <h2 className="text-2xl font-semibold text-primary-600 mb-6 font-heading">
                Office Hours
              </h2>
              <div className="bg-neutral-50 rounded-lg p-6 md:p-8">
                <p className="text-neutral-700 mb-4">
                  Please contact us to schedule an appointment. We offer both in-person 
                  and telehealth sessions to accommodate your needs.
                </p>
                <p className="text-neutral-700">
                  Sessions are available by appointment only. We'll work with you to 
                  find a time that fits your schedule.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
