import { useEffect } from 'react';
import './app.css';

/**
 * React dotenv and custom environment variables
 * https://create-react-app.dev/docs/adding-custom-environment-variables/
 */

function App() {

  useEffect(() => {
    console.log(process.env)
  }, [])

  return (<>
    <h1>Environment (NODE_ENV)</h1>
    <code>
      {process.env.NODE_ENV} | {process.env.NODE_ENV === 'development' ? process.env.REACT_APP_dev : ''}
      
      {process.env.NODE_ENV === 'test' ? process.env.REACT_APP_homol : ''}

      {process.env.NODE_ENV === 'production' ? process.env.REACT_APP_prod : ''}
    </code>

    <h2>.env file</h2>
    <code>
      {JSON.stringify(process.env)}
    </code>

    <h3>REACT_APP_dev</h3>
    <code>{process.env.REACT_APP_dev}</code>

    <h3>REACT_APP_homol</h3>
    <code>{process.env.REACT_APP_homol}</code>

    <h3>REACT_APP_prod</h3>
    <code>{process.env.REACT_APP_prod}</code>

    <h2>Temporary Environment Variables In Your Shell</h2>
    <code>
      REACT_APP_STAGE=123246549 npm start
    </code>
    <code>
      {process.env.REACT_APP_STAGE}
    </code>
    
    <h2>npm_package_version</h2>
    <code>
      {process.env.REACT_APP_VERSION}
    </code>
  </>
  );
}

export default App;
