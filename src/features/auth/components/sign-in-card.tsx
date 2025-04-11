import SignInPage from "@/app/(auth)/sign-in/page";
import{
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/ui/card";

export const SignInCard = () => {
    return (
        <Card className="w-full h-full md:w-[487px] border-none shadow-none">
            <CardHeader>
                <CardTitle>
                    Welcome Back!
                </CardTitle>
            </CardHeader>
        </Card>
    );

};
