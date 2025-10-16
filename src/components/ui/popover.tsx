"use client"

import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"

import { cn } from "@/lib/utils"

/**
 * Renders a Popover root element that forwards all props and sets a data-slot attribute.
 *
 * @param props - Props forwarded to the underlying Radix Popover Root element
 * @returns The Popover root element with `data-slot="popover"` and the provided props applied
 */
function Popover({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Root>) {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />
}

/**
 * Renders a Radix Popover Trigger element with a data-slot of "popover-trigger" and forwards any received props.
 *
 * @returns The rendered Radix Popover Trigger element.
 */
function PopoverTrigger({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Trigger>) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />
}

/**
 * Renders popover content inside a Portal with composed styling and placement defaults.
 *
 * @param className - Additional CSS class names to merge with the component's default styles.
 * @param align - Alignment of the content relative to the trigger (default: `"center"`).
 * @param sideOffset - Distance in pixels between the trigger and the content (default: `4`).
 * @returns The rendered popover content element.
 */
function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content>) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
          className
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  )
}

/**
 * Renders a Radix Popover Anchor element with a data-slot="popover-anchor" attribute.
 *
 * @param props - Props forwarded to the underlying Radix Popover Anchor component
 * @returns The rendered Popover Anchor element
 */
function PopoverAnchor({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Anchor>) {
  return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />
}

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor }