import React, { useState } from 'react'
import AuthModal from './AuthModal'

const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      <button onClick={() => setShowModal(true)} style={{ margin: 20, padding: 10 }}>
        Log in
      </button>

      {showModal && <AuthModal onClose={() => setShowModal(false)} />}
    </div>
  )
}

export default Home
