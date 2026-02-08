import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, FileText } from "lucide-react";

const AgentDashboard = () => {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold tracking-tight">Agent Dashboard</h2>
                <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Create Itinerary
                </Button>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Active Itineraries
                        </CardTitle>
                        <FileText className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">12</div>
                    </CardContent>
                </Card>
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-4">Past Itineraries</h3>
            <div className="space-y-4">
                {[1, 2].map((i) => (
                    <Card key={i}>
                        <CardHeader>
                            <CardTitle className="text-lg">Himachal 5-Day Trip</CardTitle>
                            <CardDescription>Created for Group of 4</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">Status: Completed</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default AgentDashboard;
