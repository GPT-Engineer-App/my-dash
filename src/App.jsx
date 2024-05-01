import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Profile from "./pages/Profile.jsx";
import Contacts from "./pages/Contacts.jsx";
import Drive from "./pages/Drive.jsx";
import Health from "./pages/Health.jsx";
import Artifacts from "./pages/Artifacts.jsx";
import Chat from "./pages/Chat.jsx";
import Maps from "./pages/Maps.jsx";
import Notes from "./pages/Notes.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/drive" element={<Drive />} />
        <Route path="/health" element={<Health />} />
        <Route path="/artifacts" element={<Artifacts />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </Router>
  );
}

export default App;
