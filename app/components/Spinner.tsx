

export default function DotsLoading() {
    return (
        <div className="flex justify-center items-center h-screen space-x-4 sm:space-x-2">
        <div className="w-6 h-6 sm:w-4 sm:h-4 bg-blue-800 rounded-full animate-bounce delay-0"></div>
        <div className="w-6 h-6 sm:w-4 sm:h-4 bg-blue-700 rounded-full animate-bounce delay-200"></div>
        <div className="w-6 h-6 sm:w-4 sm:h-4 bg-blue-600 rounded-full animate-bounce delay-400"></div>
        <div className="w-6 h-6 sm:w-4 sm:h-4 bg-blue-500 rounded-full animate-bounce delay-600"></div>
        <div className="w-6 h-6 sm:w-4 sm:h-4 bg-blue-400 rounded-full animate-bounce delay-800"></div>
        <div className="w-6 h-6 sm:w-4 sm:h-4 bg-blue-300 rounded-full animate-bounce delay-1000"></div>
        <div className="w-6 h-6 sm:w-4 sm:h-4 bg-blue-200 rounded-full animate-bounce delay-1200"></div>
        <div className="w-6 h-6 sm:w-4 sm:h-4 bg-blue-100 rounded-full animate-bounce delay-1400"></div>
      </div>
      
    );
  }
  