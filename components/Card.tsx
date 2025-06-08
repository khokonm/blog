import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href }) => (
  <div className="group p-4 md:w-1/2">
    <div
      className={`${
        imgSrc && 'h-full'
      } overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800`}
    >
      {imgSrc &&
        (href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            <div className="relative overflow-hidden">
              <Image
                alt={title}
                src={imgSrc}
                className="object-cover object-center transition-transform duration-300 group-hover:scale-105 md:h-36 lg:h-48"
                width={544}
                height={306}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </div>
          </Link>
        ) : (
          <div className="relative overflow-hidden">
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center transition-transform duration-300 group-hover:scale-105 md:h-36 lg:h-48"
              width={544}
              height={306}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          </div>
        ))}
      <div className="p-6">
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
          {href ? (
            <Link
              href={href}
              aria-label={`Link to ${title}`}
              className="transition-colors group-hover:text-primary-600 dark:group-hover:text-primary-400"
            >
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="prose mb-4 line-clamp-3 max-w-none text-gray-600 dark:text-gray-300">
          {description}
        </p>
        {href && (
          <Link
            href={href}
            className="group/link inline-flex items-center gap-2 text-base font-medium text-primary-500 transition-colors hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`Link to ${title}`}
          >
            Learn more
            <svg
              className="h-4 w-4 transition-transform group-hover/link:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default Card
