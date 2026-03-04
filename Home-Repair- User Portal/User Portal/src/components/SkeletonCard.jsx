export function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl p-4 animate-pulse">
      <div className="bg-gray-200 rounded-xl h-40 mb-3" />
      <div className="bg-gray-200 rounded h-4 w-3/4 mb-2" />
      <div className="bg-gray-200 rounded h-3 w-1/2" />
    </div>
  )
}
