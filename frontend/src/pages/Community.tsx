import Navbar from "@/components/common/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const Community = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main className="container py-6 h-[calc(100vh-4rem)] flex flex-col">
                <h1 className="text-2xl font-bold mb-4">Community Chat</h1>
                <Card className="flex-1 flex flex-col overflow-hidden">
                    <CardHeader className="border-b">
                        <CardTitle className="text-lg">Travelers & Locals Public Chat</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                        <div className="bg-muted p-3 rounded-lg max-w-[80%]">
                            <p className="text-sm font-semibold">John Doe (Traveler)</p>
                            <p>Anyone in Bali right now? Looking for cafe recommendations!</p>
                        </div>
                        <div className="bg-primary/10 p-3 rounded-lg max-w-[80%] ml-auto">
                            <p className="text-sm font-semibold text-primary">Local Guide (Bali)</p>
                            <p>Hey John! Check out the Canggu area, lots of great spots there.</p>
                        </div>
                    </CardContent>
                    <div className="p-4 border-t flex gap-2">
                        <Input placeholder="Type your message..." />
                        <Button size="icon">
                            <Send className="h-4 w-4" />
                        </Button>
                    </div>
                </Card>
            </main>
        </div>
    );
};

export default Community;
