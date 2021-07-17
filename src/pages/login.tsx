import { useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Login } from 'templates/Login';

export default function LoginPage() {
  const [session] = useSession();
  const { push } = useRouter();

  useEffect(() => {
    if (session) {
      push('/');
    }
  }, [session]);

  return <Login />;
}
