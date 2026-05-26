"use client"

import * as React from "react"

interface BuyMeCoffeeButtonProps {
  username: string
  text?: string
}

function BuyMeCoffeeButton({
  username,
  text = "Buy Me a Coffee",
}: BuyMeCoffeeButtonProps) {
  return (
    <a
      href={`https://www.buymeacoffee.com/${username}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
        alt={text}
        className="h-[50px] w-[217px]"
      />
    </a>
  )
}

function BuyMeCoffeeWidget({ username }: { username: string }) {
  return (
    <script
      data-name="bmc-widget"
      data-slug={username}
      data-color="#FF813F"
      data-emoji=""
      data-font="Inter"
      data-text="Buy me a coffee"
      data-outline-color="#000000"
      data-font-color="#ffffff"
      data-coffee-color="#FFDD00"
      src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
      async
    />
  )
}

export { BuyMeCoffeeButton, BuyMeCoffeeWidget }
