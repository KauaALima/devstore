'use client'

import { useCart } from '@/contexts/cart-context'

interface AddToCartButtonProps {
  productid: number
}

export function AddToCartButton({ productid }: AddToCartButtonProps) {
  const { addToCart } = useCart()

  function handdleAddProductCart() {
    addToCart(productid)
  }

  return (
    <button
      type="button"
      onClick={handdleAddProductCart}
      className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold"
    >
      Adicionar ao carrinho
    </button>
  )
}
