import Layout from '@/components/Layout';

import '../styles/index_modules.css';

export default function App({ Component, pageProps }) {
  return (
  <>
    <Layout>
		
			<Component {...pageProps} />
	
	</Layout>
  </>
  )
}
