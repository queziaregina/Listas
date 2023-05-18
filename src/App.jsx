import { Listas } from './components/Listas'
import { Lists } from './components/Lists'
import { Activity } from './components/Activity'
import { Header } from './components/Header'
import { Lessons } from './components/Lessons'


export function App() {
  return (
    <div>
      <Header />
      <main>
        <Listas />
        <Lists />
        <Activity />
        <Lessons />
      </main>
    </div>
  )
}