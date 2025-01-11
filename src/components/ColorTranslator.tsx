'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import AppTextField from '@/components/core/app-text-field'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form"

import { translateColor } from '@/utils/colorTranslator';

const formSchema = z.object({
  color: z.string().min(1, {
    message: "Please enter a color name.",
  }),
})


const colorMap: Record<string, string> = {
  red: "#FF0000",
  green: "#00FF00",
  blue: "#0000FF",
  yellow: "#FFFF00",
  purple: "#800080",
  orange: "#FFA500",
  pink: "#FFC0CB",
  brown: "#A52A2A",
  black: "#000000",
  white: "#FFFFFF",
  gray: "#808080",
  cyan: "#00FFFF",
  magenta: "#FF00FF",
  lime: "#00FF00",
  indigo: "#4B0082",
  violet: "#EE82EE",
  // Add more colors as needed
};

export default function ColorTranslator() {
  const [result, setResult] = useState<{ hexCode: string } | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [color, setColor] = useState('')


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      color: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    const hexCode = translateColor(values.color.toLowerCase().trim());
    setColor(values.color)

    if (hexCode) {
      setResult({ hexCode });
      setError(null);
    } else {
      setResult(null);
      setError(`Color "${values.color}" not found in our database.`);
    }

  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Color Translator</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="color"
              render={({ field }) => (
                <FormItem>
                  <AppTextField label="Enter a color name" {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Translate
            </Button>
          </form>
        </Form>

        {result && (
        <div className="mt-4 p-4 bg-gray-100 rounded-md">
          <p className="text-lg">
            Hex code for <span className="font-semibold">{color}</span>: 
            <span className="font-mono ml-2">{result.hexCode}</span>
          </p>
          <div 
            className="mt-2 w-full h-12 rounded-md" 
            style={{ backgroundColor: result.hexCode }}
            aria-label={`Color preview for ${color}`}
          ></div>
        </div>
      )}

      {error && (
        <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-md" role="alert">
          <p>{error}</p>
        </div>
      )}
      </CardContent>
    </Card>
  )
}

