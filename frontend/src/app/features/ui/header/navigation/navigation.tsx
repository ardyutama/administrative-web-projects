'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Navigation = ({
    href,
    title,
}: {
    href: string;
    title: string;
}) => {
    const pathname = usePathname();
    return (
        <Link
            href={href}
            className={`${pathname === href ? 'font-semibold' : 'font-normal text-slate-300'
                } `}
        >
            {title}
        </Link>
    );
}