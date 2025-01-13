'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { translateColor } from '@/utils/colorTranslator'
import  {colorSchema}  from '@/schemas/colorSchema'


export default function EnhancedColorTranslator() {
  const [result, setResult] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [color, setColor] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof colorSchema>>({
    resolver: zodResolver(colorSchema),
    defaultValues: {
      color: "",
    },
  })

  async function onSubmit(values: z.infer<typeof colorSchema>) {
    setIsLoading(true)
    setError(null)
    setResult(null)

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    const translationResult = translateColor(values.color)
    setColor(values.color)

    if (translationResult.success && translationResult.hexCode) {
      setResult(translationResult.hexCode)
    } else {
      setError(`Color "${values.color}" not found in our database.`)
    }

    setIsLoading(false)
  }

  return (
    <div className="w-full max-w-2xl space-y-6">
      
      <Card className="w-full bg-white shadow-sm">
        <CardContent className="p-6 space-y-4">
          <h2 className="text-xl font-semibold">Color Translator</h2>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="color"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-600">Enter a color name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter a color name" 
                        {...field} 
                        className="border border-gray-200 rounded-md p-2 w-full focus:ring-0 focus:border-gray-300"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button 
                type="submit" 
                className="w-full bg-black hover:bg-gray-800 text-white rounded-md py-2"
                disabled={isLoading}
              >
                {isLoading ? 'Translating...' : 'Translate'}
              </Button>
            </form>
          </Form>

          <AnimatePresence mode="wait">
            {result && (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="mt-4"
              >
                <div className="space-y-2">
                  <p className="text-gray-600">
                    Color <span className="font-medium text-black">{color}</span>
                  </p>
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-8 h-8 rounded border"
                      style={{ backgroundColor: result }}
                    />
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                      {result}
                    </code>
                  </div>
                </div>
              </motion.div>
            )}

            {error && (
              <motion.div
                key="error"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="mt-4 text-red-600 text-sm"
                role="alert"
              >
                {error}
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </div>
  )
}

