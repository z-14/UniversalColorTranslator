import ColorTranslator from '@/components/ColorTranslator'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-50">
      <h1 className="mb-8 text-4xl font-bold">Dynamic Color Translator</h1>
      <ColorTranslator />
    </main>
  )
}

