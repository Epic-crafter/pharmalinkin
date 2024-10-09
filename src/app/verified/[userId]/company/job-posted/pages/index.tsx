// pages/index.js
import Layout from '../components/Layout';
import ApplicationsList from '../components/AppList';
import Filters from '../components/Filters';
import Header from '../../dashboard/Header';
export default function Home() {
  return (
    
    <Layout>
      <div className="flex space-x-4">
        <div className="flex-grow">
            
          <ApplicationsList />
        </div>
        <div>
          <Filters />
        </div>
      </div>
    </Layout>
  );
}
