'use client';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h2 className="text-3xl font-serif font-bold text-black mb-4">404 - Page Not Found</h2>
      <p className="text-gray-500 mb-8">The page you are looking for does not exist.</p>
      <a href="/" className="bg-black text-white px-6 py-3 rounded-xl font-bold uppercase tracking-wider text-xs">Return Home</a>
    </div>
  )
}
