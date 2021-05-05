import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import styles from './global.css';

const App = ({ Component, pageProps }) => <Component {...pageProps} />;

App.propTypes = {
  // Component is not a node until it actually gets rendered as <Component />
  // Before that point, it's a function
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.any,
};

export default App;
