import { Award, BookOpen, Users, Zap } from "lucide-react";

import { GitHubStarButton } from "./GitHubStarButton";

export const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-100 to-pink-100 px-4 py-2 text-sm font-medium text-orange-800">
            <Zap className="h-4 w-4" />
            Namaste DSA Course Companion
          </div>

          {/* Main Heading */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            <span className="block">Master DSA with</span>
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Interactive Notes & Practice
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
            Your comprehensive companion for the <strong>Namaste DSA course</strong> by Akshay Saini. 
            Practice algorithms, review concepts, and ace your interviews with beautifully organized notes.
          </p>

          {/* GitHub Star Button */}
          <div className="mb-12 flex justify-center">
            <GitHubStarButton />
          </div>

          {/* Stats Cards */}
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-center mb-4">
                <div className="rounded-full bg-blue-100 p-3">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">17+ Topics</h3>
              <p className="text-gray-600">Comprehensive coverage from basics to advanced</p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-center mb-4">
                <div className="rounded-full bg-green-100 p-3">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Course Alumni</h3>
              <p className="text-gray-600">Perfect for Namaste DSA students</p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-center mb-4">
                <div className="rounded-full bg-purple-100 p-3">
                  <Award className="h-6 w-6 text-purple-600" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Interview Ready</h3>
              <p className="text-gray-600">Practice problems and solutions</p>
            </div>
          </div>

          {/* Course Credit */}
          <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-indigo-200 bg-gradient-to-r from-indigo-50 to-purple-50 p-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="text-left">
                <p className="font-semibold text-gray-900">Built by course student</p>
                <p className="text-sm text-gray-600">Learning from Akshay Saini's Namaste DSA</p>
              </div>
            </div>
            <p className="text-sm text-gray-700">
              🧠 Personal notes transformed into an interactive study companion for fellow students.
              If you find this helpful, consider <strong>starring the repo</strong> and sharing with your batch mates!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}; 