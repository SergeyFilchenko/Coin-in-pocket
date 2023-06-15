import './index.css';
import Header from './components/Header/Header';
// import About from 'components/About/About';
import Footer from 'components/Footer/Footer';
import Main from 'components/Main/Main';

export const App = () => {
  return (
    <>
      <Header />
      {/* <About /> */}
      <Main/>
      <Footer />
    </>
  );
};
