import { AvatarSection } from "../avatar-section"
import { Navigation } from './navigation'
export const Header = () => {
    const navs = [
        {
          href: '/',
          name: 'Overview',
        },
        {
          href: '/management',
          name: 'Management',
        },
        {
          href: '/admin',
          name: 'Admin',
        },
      ];
    return (
        <div className="flex items-center py-4 px-6 justify-between border-solid border-b border-border">
            <div className="flex gap-6 text-xl tracking-tight">
            {navs.map((nav) => (
            <Navigation href={nav.href} title={nav.name} key={nav.name} />
          ))}
            </div>
            <AvatarSection />
        </div>
    )
}