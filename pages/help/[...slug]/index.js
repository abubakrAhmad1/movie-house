import { useRouter } from 'next/router';

export default function HelpPage() {
  const router = useRouter();
  const path = router.query.slug || [];

  let content;

  if (path.length === 0) {
    content = <p>Welcome to the Help Center</p>;
  } else if (path[0] === 'faqs') {
    content = <p>Here are the FAQs</p>;
  } else if (path[0] === 'contact') {
    content = <p>Contact us at support@moviehouse.com</p>;
  } else if (path[0] === 'privacy') {
    content = <p>This is our Privacy Policy</p>;
  } else {
    content = <p>Help section not found.</p>;
  }

  return (
    <div>
      <h1>Help Section</h1>
      {content}
    </div>
  );
}
