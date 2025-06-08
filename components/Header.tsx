import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

const Header = () => {
  let headerClass =
    'flex items-center w-full bg-white/80 backdrop-blur-sm dark:bg-gray-950/80 justify-between py-6 border-b border-gray-100 dark:border-gray-800'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  return (
    <header className={headerClass}>
      <Link href="/" aria-label={siteMetadata.headerTitle}>
        <div className="flex items-center justify-between">
          <div className="mr-3 transform transition-transform hover:scale-105">
            <Logo />
          </div>
          {typeof siteMetadata.headerTitle === 'string' ? (
            <div className="hidden h-6 text-xl font-bold text-gray-900 dark:text-white sm:block lg:text-2xl">
              {siteMetadata.headerTitle}
            </div>
          ) : (
            siteMetadata.headerTitle
          )}
        </div>
      </Link>
      <div className="flex items-center space-x-3 leading-5 sm:space-x-5">
        <nav className="no-scrollbar hidden max-w-40 items-center space-x-3 overflow-x-auto pr-2 sm:flex sm:space-x-5 md:max-w-72 lg:max-w-96">
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="relative m-1 block px-3 py-2 font-medium text-gray-700 transition-colors hover:text-primary-600 dark:text-gray-200 dark:hover:text-primary-400"
              >
                <span className="relative z-10">{link.title}</span>
                <span className="absolute inset-0 -z-10 scale-0 rounded-lg bg-primary-50 transition-transform hover:scale-100 dark:bg-primary-900/20"></span>
              </Link>
            ))}
        </nav>
        <div className="flex items-center space-x-2 sm:space-x-3">
          <SearchButton />
          <ThemeSwitch />
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header
