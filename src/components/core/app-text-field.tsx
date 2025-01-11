'use client'

import React, { forwardRef, useId } from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface AppTextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

const AppTextField = forwardRef<HTMLInputElement, AppTextFieldProps>(
  ({ label, className, ...props }, ref) => {
    const generatedId = useId()
    const elementId = props.id || (label ? `app-text-field-${label}-${generatedId}` : undefined)

    return (
      <div className={className}>
        {label && (
          <Label
            htmlFor={elementId}
            className="mb-1 text-sm font-medium"
          >
            {label}
          </Label>
        )}
        <Input
          ref={ref}
          {...props}
          id={elementId}
        />
      </div>
    )
  }
)

AppTextField.displayName = 'AppTextField'

export default AppTextField

