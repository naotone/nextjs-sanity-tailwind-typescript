import type { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

import { createImageUrlBuilder, createPreviewSubscriptionHook } from 'next-sanity'
import { sanityConfig } from './config'

export const imageBuilder = createImageUrlBuilder(sanityConfig)

export const urlForImage = (source: SanityImageSource): ImageUrlBuilder =>
  imageBuilder.image(source).auto('format').fit('max')

export const usePreviewSubscription = createPreviewSubscriptionHook(sanityConfig)
