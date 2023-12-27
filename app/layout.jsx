import '@/styles/globals.css';
import Navbar from '@components/Navbar';
import Provider from '@components/Provider';

export const metadata = {
  title: 'promptpal',
  description: 'Save, Share, Steal amazing AI prompts'
}

function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        <div className='main'>
          <div className='gradient'/>
        </div>
        
        <main className='app'>
          <Navbar />
          {children}
        </main>
      </body>
 
    </html>
  )
}

export default RootLayout