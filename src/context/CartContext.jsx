import { useEffect, useMemo, useState } from 'react'
import { CartContext } from './cart-context'
import { buildCartWhatsAppUrl } from '../utils/whatsapp'

const STORAGE_KEY = 'selah-starr-studio-cart-v1'

function readStoredCart() {
  if (typeof window === 'undefined') {
    return []
  }

  try {
    const storedValue = window.localStorage.getItem(STORAGE_KEY)
    if (!storedValue) {
      return []
    }

    const parsedValue = JSON.parse(storedValue)
    if (!Array.isArray(parsedValue)) {
      return []
    }

    return parsedValue.filter(
      (item) =>
        item
        && typeof item.productId === 'string'
        && Number.isInteger(item.quantity)
        && item.quantity > 0,
    )
  } catch {
    return []
  }
}

export function CartProvider({ products, children }) {
  const [entries, setEntries] = useState(readStoredCart)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(entries))
  }, [entries])

  const productMap = useMemo(
    () => new Map(products.map((product) => [product.id, product])),
    [products],
  )

  const cartItems = useMemo(
    () =>
      entries
        .map((entry) => ({
          ...entry,
          product: productMap.get(entry.productId),
        }))
        .filter((entry) => entry.product),
    [entries, productMap],
  )

  const itemCount = useMemo(
    () => cartItems.reduce((count, item) => count + item.quantity, 0),
    [cartItems],
  )

  const checkoutHref = useMemo(
    () => buildCartWhatsAppUrl(cartItems),
    [cartItems],
  )

  const addItem = (productId, quantity = 1) => {
    setEntries((currentEntries) => {
      const nextQuantity = Math.max(1, quantity)
      const existingEntry = currentEntries.find((entry) => entry.productId === productId)

      if (!existingEntry) {
        return [...currentEntries, { productId, quantity: nextQuantity }]
      }

      return currentEntries.map((entry) =>
        entry.productId === productId
          ? { ...entry, quantity: entry.quantity + nextQuantity }
          : entry,
      )
    })
  }

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      setEntries((currentEntries) =>
        currentEntries.filter((entry) => entry.productId !== productId),
      )
      return
    }

    setEntries((currentEntries) =>
      currentEntries.map((entry) =>
        entry.productId === productId
          ? { ...entry, quantity }
          : entry,
      ),
    )
  }

  const removeItem = (productId) => {
    setEntries((currentEntries) =>
      currentEntries.filter((entry) => entry.productId !== productId),
    )
  }

  const clearCart = () => {
    setEntries([])
  }

  const value = {
    cartItems,
    itemCount,
    addItem,
    updateQuantity,
    removeItem,
    clearCart,
    checkoutHref,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
