export function toHomeSection(sectionId = 'home') {
  return `#${sectionId}`
}

export function toProductsRoute() {
  return '#/products'
}

export function toProductRoute(slug) {
  return `#/products/${slug}`
}

export function toCollectionRoute(slug) {
  return `#/collections/${slug}`
}

export function toJournalRoute() {
  return '#/journal'
}

export function toJournalPostRoute(slug) {
  return `#/journal/${slug}`
}

export function toCartRoute() {
  return '#/cart'
}

export function parseHashRoute(hash) {
  if (!hash || hash === '#') {
    return { name: 'home', sectionId: 'home' }
  }

  if (!hash.startsWith('#/')) {
    return {
      name: 'home',
      sectionId: hash.slice(1) || 'home',
    }
  }

  const path = hash.slice(2)
  const segments = path.split('/').filter(Boolean)
  const [root, slug] = segments

  if (root === 'products' && slug) {
    return { name: 'product', slug }
  }

  if (root === 'products') {
    return { name: 'products' }
  }

  if (root === 'collections' && slug) {
    return { name: 'collection', slug }
  }

  if (root === 'journal' && slug) {
    return { name: 'journal-post', slug }
  }

  if (root === 'journal') {
    return { name: 'journal' }
  }

  if (root === 'cart') {
    return { name: 'cart' }
  }

  return { name: 'not-found' }
}
