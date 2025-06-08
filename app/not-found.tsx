import Link from '@/components/Link'

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <div className="animate-fade-in space-y-6">
        {/* 404 Number */}
        <div className="text-6xl font-bold text-primary-500 sm:text-8xl md:text-9xl">404</div>

        {/* Error Message */}
        <div className="space-y-3">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 sm:text-3xl">
            Page Not Found
          </h1>
          <p className="max-w-md text-gray-600 dark:text-gray-400">
            Sorry, we couldn't find the page you're looking for. It might have been moved, deleted,
            or never existed.
          </p>
        </div>

        {/* Navigation Options */}
        <div className="flex flex-col items-center justify-center gap-4 pt-6 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-primary-500 px-6 py-3 font-medium text-white transition-colors hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Go Home
          </Link>

          <Link
            href="/posts"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Browse Posts
          </Link>
        </div>

        {/* Additional Help */}
        <div className="pt-8 text-sm text-gray-500 dark:text-gray-400">
          <p>Looking for something specific?</p>
          <div className="mt-2 flex items-center justify-center gap-4">
            <Link href="/tags" className="transition-colors hover:text-primary-500">
              Browse by tags
            </Link>
            <span>•</span>
            <Link href="/about" className="transition-colors hover:text-primary-500">
              Learn more about us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
