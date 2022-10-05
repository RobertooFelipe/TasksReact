import Sidebar from '../components/Sidebar/Sidebar'
import Tasks from '../components/Tasks/Tasks'

import './Home.scss'

const Home = () => {
  return (
        <div className="home-container">
            <Sidebar />
            <Tasks />
        </div>
  )
}

export default Home
