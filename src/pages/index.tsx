import { useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Home } from 'templates/Home';

export default function Index() {
  const [session] = useSession();
  const { push } = useRouter();

  useEffect(() => {
    if (!session) {
      push('/login');
    }
  }, [session]);

  return <Home />;
}
