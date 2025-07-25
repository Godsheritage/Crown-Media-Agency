import 'react-toastify/dist/ReactToastify.css';
import 'react-modal-video/css/modal-video.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import '@fortawesome/fontawesome-free/css/all.css';
import 'swiper/css/bundle';
import 'react-circular-progressbar/dist/styles.css';
import 'animate.css';

import './assets/css/elegant-icons.css';
import './assets/css/flaticon-set.css';
import './assets/css/animate.css';
import './assets/css/validnavs.css';
// import './assets/css/unit-test.css';
import './assets/css/spacing.css'
import './assets/css/style.css'

import Routers from './Routers';
import ScrollUpBtn from './components/others/ScrollUpBtn';
import Preloader from './components/others/Preloader';
import { ToastContainer } from 'react-toastify';
import { Helmet } from 'react-helmet';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  //  Preloader 
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1200)
  }, [])

  return (
    <>
      {isLoading ? <Preloader /> :
        <div>
          <Helmet>
            <title>Crown Media</title>
            <link rel="shortcut icon" href="/img/others/favicon.ico"></link>
          </Helmet>
          <Routers />
          <ScrollUpBtn />
          <ToastContainer />
        </div>
      }
    </>
  )
}

export default App
