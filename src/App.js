import './index.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import FeedBackList from './components/FeedBackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import { FeedbackProvider } from './context/FeedbackContext';
import AboutIconLink from './components/AboutIconLink';

function App() {
    return (
        <FeedbackProvider>
            <Router>
                <Header text={'Feedback App'} />
                <div className='container'>
                    <Routes>
                        <Route
                            exact
                            path='/'
                            element={
                                <>
                                    <FeedbackForm />
                                    <FeedbackStats />
                                    <FeedBackList />
                                </>
                            }
                        />
                        <Route path='/about' element={<AboutPage />} />
                    </Routes>
                    <AboutIconLink />
                </div>
            </Router>
        </FeedbackProvider>
    );
}

export default App;
