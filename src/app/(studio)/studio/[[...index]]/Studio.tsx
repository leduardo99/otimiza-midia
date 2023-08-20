'use client'

import { NextStudio } from 'next-sanity/studio'
import { StudioLayout, StudioProvider } from 'sanity'
import sanityConfig from 'sanity.config'

export default function Studio() {
  return (
    <NextStudio config={sanityConfig}>
      <StudioProvider config={sanityConfig}>
        <StudioLayout />
      </StudioProvider>
    </NextStudio>
  )
}
