import NextImage, { ImageProps } from 'next/image'

const basePath = process.env.BASE_PATH

const Image = ({ src, ...rest }: ImageProps) => {
  const isAbsoluteUrl = typeof src === 'string' && (src.startsWith('http://') || src.startsWith('https://'))
  const imageSrc = isAbsoluteUrl ? src : `${basePath || ''}${src}`
  return <NextImage src={imageSrc} {...rest} />
}

export default Image
