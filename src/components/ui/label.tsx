"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"

import { cn } from "@/lib/utils"

/**
 * Client-side Label component that wraps Radix UI's Label.Root and applies a set of default layout and state styles.
 *
 * @param className - Additional CSS class names to append to the component's default classes
 * @param props - All other props are forwarded to `LabelPrimitive.Root`
 * @returns The rendered `LabelPrimitive.Root` element with merged classes and forwarded props
 */
function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Label }