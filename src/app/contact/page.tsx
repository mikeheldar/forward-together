import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { siteConfig } from '@/lib/site-config';

export default function Contact() {
  return (
    <div className="min-h-screen bg-background-default flex flex-col">
      <Header />
      
      <main className="flex-grow py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-left font-heading" style={{ color: '#383f51' }}>
            Contact Us
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="text-left rounded-lg">
              <h2 className="text-2xl font-semibold mb-6 font-heading" style={{ color: '#383f51' }}>
                Get in Touch
              </h2>
              <div className="space-y-6">
                <div className="rounded-lg">
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#383f51' }}>Email</h3>
                  <a 
                    href={`mailto:${siteConfig.contact.email}`}
                    className="transition-colors text-lg rounded-lg hover:opacity-80"
                    style={{ color: '#3c4f76' }}
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
                
                <div className="rounded-lg">
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#383f51' }}>Phone</h3>
                  <a 
                    href={`tel:${siteConfig.contact.phone.replace(/[^\d]/g, '')}`}
                    className="transition-colors text-lg rounded-lg hover:opacity-80"
                    style={{ color: '#3c4f76' }}
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>
                
                <div className="rounded-lg">
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#383f51' }}>Location</h3>
                  <p className="text-lg" style={{ color: '#383f51' }}>
                    {siteConfig.contact.address.street}<br />
                    {siteConfig.contact.address.city}, {siteConfig.contact.address.state} {siteConfig.contact.address.zip}
                  </p>
                </div>
              </div>
            </div>

            {/* Office Information */}
            <div className="text-left rounded-lg">
              <h2 className="text-2xl font-semibold mb-6 font-heading" style={{ color: '#383f51' }}>
                Office Hours
              </h2>
              <div className="bg-background-muted rounded-lg p-6 md:p-8">
                <p className="mb-4" style={{ color: '#383f51' }}>
                  Please contact us to schedule an appointment. We offer both in-person 
                  and telehealth sessions to accommodate your needs.
                </p>
                <p style={{ color: '#383f51' }}>
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
