import { useRouter } from 'next/router';

export default function Project() {
    const router = useRouter();

    return (
     <div>
       hello {router.query.project}
     </div>
    )
}
  