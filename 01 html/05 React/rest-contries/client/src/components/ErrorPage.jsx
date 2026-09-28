

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.errorCode}>404</h1>
      <h2 style={styles.title}>Oops! Page Not Found</h2>
      <p style={styles.message}>
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <a href="/" style={styles.link}>
        Go Back Home
      </a>
    </div>
  );
};

// Basic responsive styling using JavaScript objects
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    backgroundColor: '#f8f9fa',
    fontFamily: 'system-ui, sans-serif',
    padding: '20px',
    boxSizing: 'border-box',
  },
  errorCode: {
    fontSize: '96px',
    fontWeight: 'bold',
    margin: '0',
    color: '#dc3545',
  },
  title: {
    fontSize: '32px',
    margin: '10px 0',
    color: '#343a40',
  },
  message: {
    fontSize: '18px',
    maxWidth: '500px',
    margin: '0 0 30px 0',
    color: '#6c757d',
    lineHeight: '1.5',
  },
  link: {
    padding: '12px 24px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#007bff',
    textDecoration: 'none',
    borderRadius: '4px',
    fontWeight: '500',
    transition: 'background-color 0.2s',
  },
};
export default NotFound;