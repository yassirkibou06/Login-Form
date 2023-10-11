import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "../ui/card"


const CardCategories = () => {
    return (
        <Card className="bg-gray-100 shadow-none">
            <CardHeader className="w-full h-[150px] p-0 m-0">
                <img className="rounded-t-lg rounded-r-lg" src="/assets/courses-14-666x372.png" alt="" />
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center">
                <CardTitle className="p-0 pt-2">
                    <h2 className="text-xl font-semibold">Coaching</h2>
                </CardTitle>
                <CardDescription className="">
                    <p className="text-sm text-gray-400 font-meduim">14 Courses</p>
                </CardDescription>
            </CardContent>
        </Card>
    )
}

export default CardCategories