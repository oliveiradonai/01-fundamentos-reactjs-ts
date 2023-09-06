import { Header } from './components/Header'
import { Post, PostProps } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

import './global.css'

interface Post extends PostProps {
  id: number;
}

const posts: Post[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/oliveiradonai.png",
      name: "Adonai Figueiredo",
      role: "Frontend Developer"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no Ignite, curso da Rocketseat. O nome do projeto é Ignite Feed 🚀' },
      { type: 'link', content: 'https://adnfig.me' }
    ],
    publishedAt: new Date('2023-09-05 09:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @ Rocketseat"
    },
    content: [
      { type: 'paragraph', content: 'Estou escrevendo o conteúdo mais completo que já fiz sobre Server Components no React ⚛️' },
      { type: 'paragraph', content: '◆ Quais problemas estamos resolvendo?' },
      { type: 'paragraph', content: '◆ Vamos fazer queries do banco de dados nos componentes React?' },
      { type: 'paragraph', content: '◆ Como isso difere de outras techs como PHP/Ruby?' },
      { type: 'link', content: 'https://rocketseat.com.br/newsletter' }
    ],
    publishedAt: new Date('2023-09-03 20:00:00')
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educator @ Rocketseat"
    },
    content: [
      { type: 'paragraph', content: 'A versão 2.0 vem depois da versão 1.0' },
      { type: 'paragraph', content: 'Não espere estar na melhor versão para dar resultado!' },
      { type: 'paragraph', content: 'Faça o mais rápido, dando o seu melhor naquele momento, colha feedbacks e melhore na próxima versão!' },
    ],
    publishedAt: new Date('2023-09-01 20:00:00')
  },
]

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
