import React from 'react';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { Layout } from './components/Layout';

// Import pages (we will create these next)
import Login from './pages/Login';
import Home from './pages/Home';
import Users from './pages/Users';
import UserDetail from './pages/UserDetail';
import AppliedWater from './pages/AppliedWater';
import HistoricalWater from './pages/HistoricalWater';
import Evaluation from './pages/Evaluation';
import EvaluationDetail from './pages/EvaluationDetail';
import Practice from './pages/Practice';
import Rules from './pages/Rules';
import RulesSearch from './pages/RulesSearch';
import Support from './pages/Support';
import Inspection from './pages/Inspection';
import InspectionDetail from './pages/InspectionDetail';
import AddInspection from './pages/AddInspection';
import Messages from './pages/Messages';
import MessageDetail from './pages/MessageDetail';
import Profile from './pages/Profile';

const AppContent = () => {
  const { currentPage } = useNavigation();

  const renderPage = () => {
    switch (currentPage) {
      case 'login': return <Login />;
      case 'home': return <Home />;
      case 'users': return <Users />;
      case 'user-detail': return <UserDetail />;
      case 'applied-water': return <AppliedWater />;
      case 'historical-water': return <HistoricalWater />;
      case 'evaluation': return <Evaluation />;
      case 'evaluation-detail': return <EvaluationDetail />;
      case 'practice': return <Practice />;
      case 'rules': return <Rules />;
      case 'rules-search': return <RulesSearch />;
      case 'support': return <Support />;
      case 'inspection': return <Inspection />;
      case 'inspection-detail': return <InspectionDetail />;
      case 'add-inspection': return <AddInspection />;
      case 'messages': return <Messages />;
      case 'message-detail': return <MessageDetail />;
      case 'profile': return <Profile />;
      default: return <Login />;
    }
  };

  return <Layout>{renderPage()}</Layout>;
};

export default function App() {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  );
}
