import './style.css'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
    <div class="max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-2xl">
      <h1 class="text-4xl font-bold text-gray-800 mb-4 text-center">
        Vite + TypeScript + Tailwind CSS
      </h1>
      <p class="text-gray-600 mb-6 text-center">
        A modern web development setup with Tailwind CSS styling
      </p>
      <div class="flex flex-col items-center gap-4">
        <button 
          id="counter" 
          type="button"
          class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        ></button>
        <div class="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <h2 class="text-lg font-semibold text-gray-700 mb-2">Features:</h2>
          <ul class="list-disc list-inside text-gray-600 space-y-1">
            <li>⚡ Vite for fast development</li>
            <li>📘 TypeScript for type safety</li>
            <li>🎨 Tailwind CSS for styling</li>
            <li>🚀 Optimized production build</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
