import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus } from "lucide-react";

const OwnerDashboard = () => {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold tracking-tight">Owner Dashboard</h2>
                <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    New Post
                </Button>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <CardHeader>
                        <CardTitle>Active Subscription</CardTitle>
                        <CardDescription>Your current plan details</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">Premium</div>
                        <p className="text-xs text-muted-foreground">+20% visibility boost</p>
                        <Button variant="link" className="px-0">Upgrade Plan</Button>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Total Views</CardTitle>
                        <CardDescription>Engagement on your posts</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">1,234</div>
                        <p className="text-xs text-muted-foreground">+12% from last month</p>
                    </CardContent>
                </Card>
            </div>

            <div>
                <h3 className="text-xl font-semibold mb-4">Your Posts</h3>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {/* Placeholder posts */}
                    {[1, 2, 3].map((i) => (
                        <Card key={i} className="overflow-hidden">
                            <div className="h-40 bg-muted flex items-center justify-center">
                                Image Placeholder
                            </div>
                            <CardHeader>
                                <CardTitle>Cozy Stay in Mountains</CardTitle>
                                <CardDescription>Posted 2 days ago</CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OwnerDashboard;
