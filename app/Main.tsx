import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-hero-pattern py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              <span className="block">Welcome to</span>
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                {siteMetadata.headerTitle}
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300">
              {siteMetadata.description}
            </p>
          </div>
        </div>
      </div>

      {/* Latest Posts Section */}
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10">
              Latest Posts
            </h2>
            {posts.length > MAX_DISPLAY && (
              <Link
                href="/posts"
                className="group inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              >
                View all posts
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            )}
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid gap-8 pt-8 md:grid-cols-1 lg:grid-cols-2">
          {!posts.length && (
            <div className="col-span-full py-12 text-center">
              <div className="mx-auto max-w-md">
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                  No posts found
                </h3>
                <p className="mt-1 text-gray-500 dark:text-gray-400">
                  Check back soon for new content!
                </p>
              </div>
            </div>
          )}

          {posts.slice(0, MAX_DISPLAY).map((post, index) => {
            const { slug, date, title, summary, tags } = post
            const isFirst = index === 0

            return (
              <article
                key={slug}
                className={`group animate-slide-up ${
                  isFirst ? 'md:col-span-2' : ''
                } rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg dark:border-gray-700 dark:bg-gray-800`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex h-full flex-col">
                  {/* Date and Tags */}
                  <div className="mb-4 flex flex-wrap items-center gap-2">
                    <time
                      dateTime={date}
                      className="text-sm font-medium text-gray-500 dark:text-gray-400"
                    >
                      {formatDate(date, siteMetadata.locale)}
                    </time>
                    {tags.length > 0 && (
                      <>
                        <span className="text-gray-300 dark:text-gray-600">•</span>
                        <div className="flex flex-wrap gap-2">
                          {tags.slice(0, 3).map((tag) => (
                            <Tag key={tag} text={tag} />
                          ))}
                          {tags.length > 3 && (
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              +{tags.length - 3} more
                            </span>
                          )}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Title */}
                  <h3
                    className={`mb-4 font-bold leading-tight text-gray-900 dark:text-gray-100 ${
                      isFirst ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
                    }`}
                  >
                    <Link
                      href={`/posts/${slug}`}
                      className="transition-colors group-hover:text-primary-600 dark:group-hover:text-primary-400"
                    >
                      {title}
                    </Link>
                  </h3>

                  {/* Summary */}
                  <div className="flex-1">
                    <p
                      className={`text-gray-600 dark:text-gray-300 ${
                        isFirst ? 'text-base leading-7' : 'text-sm leading-6'
                      }`}
                    >
                      {summary}
                    </p>
                  </div>

                  {/* Read More Link */}
                  <div className="mt-6 border-t border-gray-100 pt-4 dark:border-gray-700">
                    <Link
                      href={`/posts/${slug}`}
                      className="group inline-flex items-center gap-2 text-sm font-medium text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      aria-label={`Read more: "${title}"`}
                    >
                      Read article
                      <svg
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>

      {/* Newsletter Section */}
      {siteMetadata.newsletter?.provider && (
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-primary-50 to-accent-50 p-8 dark:from-gray-800 dark:to-gray-800">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Stay Updated</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Subscribe to get notified about new posts and updates.
            </p>
            <div className="mt-6">
              <NewsletterForm />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
