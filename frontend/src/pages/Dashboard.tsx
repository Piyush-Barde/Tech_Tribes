import { useAuth } from "@/context/AuthContext";
import Navbar from "@/components/common/Navbar";
import TravelerDashboard from "@/components/dashboard/TravelerDashboard";
import OwnerDashboard from "@/components/dashboard/OwnerDashboard";
import AgentDashboard from "@/components/dashboard/AgentDashboard";
import AIChatWidget from "@/components/common/AIChatWidget";
import { Navigate } from "react-router-dom";

const Dashboard = () => {
    const { user, isAuthenticated } = useAuth();

    if (!isAuthenticated || !user) {
        return <Navigate to="/login" replace />;
    }

    return (
        <div className="min-h-screen bg-background relative">
            <Navbar />
            <main className="container py-6">
                {user.userType === "traveler" && <TravelerDashboard />}
                {user.userType === "owner" && <OwnerDashboard />}
                {user.userType === "agent" && <AgentDashboard />}
            </main>
            <AIChatWidget />
        </div>
    );
};

export default Dashboard;
