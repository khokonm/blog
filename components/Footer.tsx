import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center border-t border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900">
        <div className="mb-8 flex w-full max-w-4xl flex-col items-center space-y-4 px-4 py-8">
          {/* Social Links */}
          <div className="flex space-x-4">
            <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
            <SocialIcon kind="github" href={siteMetadata.github} size={6} />
            <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
            <SocialIcon kind="x" href={siteMetadata.x} size={6} />
          </div>

          {/* Copyright and Links */}
          <div className="flex flex-col items-center space-y-2 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/" className="transition-colors hover:text-primary-500">
                {siteMetadata.title}
              </Link>
              <span>•</span>
              <Link href="/posts" className="transition-colors hover:text-primary-500">
                Posts
              </Link>
              <span>•</span>
              <Link href="/tags" className="transition-colors hover:text-primary-500">
                Tags
              </Link>
              <span>•</span>
              <Link href="/about" className="transition-colors hover:text-primary-500">
                About
              </Link>
            </div>
            <div className="text-center">
              <div className="mb-1">
                © {new Date().getFullYear()} {siteMetadata.author}. All rights reserved.
              </div>
              <div className="flex items-center justify-center gap-1">
                <span>Built with</span>
                <span className="text-red-500">♥</span>
                <span>using</span>
                <Link
                  href="https://nextjs.org"
                  className="font-medium transition-colors hover:text-primary-500"
                >
                  Next.js
                </Link>
                <span>&</span>
                <Link
                  href="https://tailwindcss.com"
                  className="font-medium transition-colors hover:text-primary-500"
                >
                  Tailwind CSS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
