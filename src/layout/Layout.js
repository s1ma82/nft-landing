import Header from './Header'
import Footer from './Footer'
import { BrowserRouter as Router, Routes } from 'react-router-dom'
export default ( {children} ) => {
    return (
        <>
            <Router>
                <Header />
                <main className='main'>
                    <Routes>
                        {children}
                    </Routes>
                </main>
                <Footer/>
            </Router>
        </>
    )
}