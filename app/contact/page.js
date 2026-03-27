import ContactDetails from '@/components/ContactDetails';

export const metadata = {
  title: 'Contact Us - SJB Institute of Technology',
  description: 'Get in touch with SJB Institute of Technology. Find our contact information, office numbers, and helpline details.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <ContactDetails />
    </main>
  );
}
