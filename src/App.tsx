import { useEffect, useState } from 'react'
import { marked } from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'
import { Github, Twitter, Linkedin, Code2, BookOpen, Target, Zap } from 'lucide-react'
import 'github-markdown-css/github-markdown-light.css'

const markdowns = import.meta.glob('./dsa/**/*.md', { as: 'raw' })
const modules = import.meta.glob('./dsa/**/*.ts', { eager: false })

type TopicId = 'warm-up' | 'arrays' | 'strings' | 'linked-lists'


const renderer = new marked.Renderer()

renderer.code = function (code, language) {
  const validLang = hljs.getLanguage(language) ? language : 'plaintext'

  try {
    const highlighted = hljs.highlight(code, { language: validLang }).value
    return `<pre><code class="hljs language-${validLang}">${highlighted}</code></pre>`
  } catch (err) {
    console.warn(`⚠️ Highlighting failed for language "${language}":`, err)
    return `<pre><code class="hljs">${code}</code></pre>`
  }
}

marked.setOptions({
  renderer,
  gfm: true,
  breaks: true
})


function App() {
  const [topic, setTopic] = useState<TopicId | null>(() => {
    const hash = window.location.hash.substring(1)
    if (!hash) return null
    const [t] = hash.split('/')
    return t as TopicId || null
  })

  const [subtopic, setSubtopic] = useState<string | null>(() => {
    const hash = window.location.hash.substring(1)
    if (!hash) return null
    const [, st] = hash.split('/')
    return st || null
  })
  const [readme, setReadme] = useState<string>('')

  const topics = [
    { id: 'warm-up' as const, name: 'Warm Up', icon: <Zap className="w-5 h-5" />, color: 'from-orange-400 to-pink-500' },
    { id: 'arrays' as const, name: 'Arrays', icon: <Code2 className="w-5 h-5" />, color: 'from-blue-400 to-indigo-600' },
    { id: 'strings' as const, name: 'Strings', icon: <BookOpen className="w-5 h-5" />, color: 'from-green-400 to-emerald-600' },
    { id: 'linked-lists' as const, name: 'Linked Lists', icon: <Target className="w-5 h-5" />, color: 'from-purple-400 to-violet-600' }
  ]

  const subtopics: Record<TopicId, { id: string; name: string }[]> = {
    'warm-up': [
      { id: 'second-largest', name: 'Second Largest Element' },
      { id: 'basics', name: 'Basic Operations' }
    ],
    'arrays': [
      { id: 'sorting', name: 'Sorting Algorithms' },
      { id: 'searching', name: 'Search Techniques' },
      { id: 'two-pointers', name: 'Two Pointers' }
    ],
    'strings': [
      { id: 'pattern-matching', name: 'Pattern Matching' },
      { id: 'palindromes', name: 'Palindromes' }
    ],
    'linked-lists': [
      { id: 'traversal', name: 'Traversal' },
      { id: 'reversal', name: 'Reversal' }
    ]
  }

  useEffect(() => {
    if (topic && subtopic) {
      window.location.hash = `${topic}/${subtopic}`
    } else if (topic) {
      window.location.hash = topic
    } else {
      window.location.hash = ''
    }
  }, [topic, subtopic])

  useEffect(() => {
    if (topic && subtopic) {
      const modulePath = `./dsa/${topic}/${subtopic}/index.ts`
      const moduleLoader = modules[modulePath]
      if (moduleLoader) {
        moduleLoader().then(() => {
          console.log(`✅ Executed: ${modulePath}`)
        }).catch((error) => {
          console.error(`❌ Error importing ${modulePath}:`, error)
        })
      }


      const readmePath = `./dsa/${topic}/README.md`
      const readmeLoader = markdowns[readmePath]
      if (readmeLoader) {
        readmeLoader().then((raw: string) => {
          const parsedContent = marked.parse(raw)
          console.log(`📄 Loaded README for ${topic}/${subtopic}`, parsedContent)
          if (typeof parsedContent === 'string') {
            setReadme(parsedContent)
          } else {
            console.warn('Parsed content is not string:', parsedContent)
            setReadme('')
          }
        }).catch((err) => {
          console.error(`❌ Error loading README for ${topic}/${subtopic}:`, err)
          setReadme('')
        })
      } else {
        setReadme('')
      }
    }
  }, [topic, subtopic])

  useEffect(() => {
    if (import.meta.hot) {
      import.meta.hot.accept(() => {
        console.log("♻️ Hot module update detected")

        if (topic && subtopic) {
          const modulePath = `./dsa/${topic}/${subtopic}/index.ts`
          const moduleLoader = modules[modulePath]

          if (moduleLoader) {
            moduleLoader().then(() => {
              console.log(`🔥 Re-executed after HMR: ${modulePath}`)
            })
          }
        }
      })
    }
  }, [topic, subtopic])

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: '#', label: 'GitHub', color: 'hover:text-gray-900' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter', color: 'hover:text-blue-500' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn', color: 'hover:text-blue-700' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-2 rounded-xl">
                <Code2 className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  DSA Learning Hub
                </h1>
                <p className="text-sm text-gray-600">Master Data Structures & Algorithms</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className={`p-2 rounded-lg bg-gray-100 text-gray-600 transition-all duration-200 ${link.color} hover:bg-gray-200 hover:scale-110`}
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        {!topic && (
          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1 rounded-2xl inline-block mb-6">
              <div className="bg-white rounded-xl px-8 py-6">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Welcome to Your DSA Journey! 🚀
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Dive into the world of Data Structures and Algorithms with interactive examples,
                  comprehensive explanations, and hands-on coding practice.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Topics Grid */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
            <BookOpen className="w-6 h-6 mr-2 text-indigo-600" />
            Choose Your Topic
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {topics.map((topicItem) => (
              <button
                key={topicItem.id}
                onClick={() => {
                  setTopic(topicItem.id)
                  setSubtopic(null)
                }}
                className={`group relative overflow-hidden rounded-xl p-6 bg-gradient-to-r ${topicItem.color} text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${topic === topicItem.id ? 'ring-4 ring-white ring-opacity-50 scale-105' : ''
                  }`}
              >
                <div className="flex items-center justify-between mb-3">
                  {topicItem.icon}
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
                <h4 className="font-semibold text-lg">{topicItem.name}</h4>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            ))}
          </div>
        </div>

        {/* Subtopics */}
        {topic && subtopics[topic] && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <Target className="w-6 h-6 mr-2 text-purple-600" />
              Subtopics in {topics.find(t => t.id === topic)?.name}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {subtopics[topic].map((subtopicItem) => (
                <button
                  key={subtopicItem.id}
                  onClick={() => setSubtopic(subtopicItem.id)}
                  className={`group p-4 rounded-lg border-2 text-left transition-all duration-200 ${subtopic === subtopicItem.id
                    ? 'border-indigo-500 bg-indigo-50 text-indigo-900'
                    : 'border-gray-200 bg-white hover:border-indigo-300 hover:bg-indigo-50/50'
                    }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{subtopicItem.name}</span>
                    <div className={`w-3 h-3 rounded-full transition-colors ${subtopic === subtopicItem.id ? 'bg-indigo-500' : 'bg-gray-300 group-hover:bg-indigo-400'
                      }`}></div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Content Area */}
        {readme && (
          <div className="bg-white rounded-xl shadow-lg border border-gray-200/50 overflow-hidden">
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-indigo-600" />
                Documentation
              </h3>
            </div>
            <div className="p-6">
              <div
                className="markdown-body prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: readme }}
              />
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-16 py-8 border-t border-gray-200">
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Built with ❤️ for the developer community
            </p>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className={`flex items-center space-x-2 text-gray-600 transition-colors ${link.color}`}
                >
                  {link.icon}
                  <span className="text-sm font-medium">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
