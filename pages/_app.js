import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import styles from './global.css';

const App = ({ Component, pageProps }) => <Component {...pageProps} />;

App.propTypes = {
  Component: PropTypes.node.isRequired,
  pageProps: PropTypes.any,
};

export default App;
