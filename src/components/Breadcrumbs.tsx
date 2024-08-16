"use client"

// src/app/Breadcrumbs.tsx
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Breadcrumbs = () => {
  const pathname = usePathname();
  const breadcrumbsArray = pathname.split('/').filter((item) => item);

  return (
    <nav aria-label="Breadcrumb" >
      <ul className="flex pl-4 pt-2 space-x-2">
        {breadcrumbsArray.map((item, index) => {
          const href = '/' + breadcrumbsArray.slice(0, index + 1).join('/');
          return (
            <li key={index} className="flex items-center">
              <Link href={href} className="text-blue-600 hover:underline">
                {item}
              </Link>
              {index < breadcrumbsArray.length - 1 && <span>/</span>}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;