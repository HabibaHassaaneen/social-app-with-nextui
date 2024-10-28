import { Card,Button, CardHeader, CardBody, CardFooter, Avatar } from "@nextui-org/react";
export default function ProfileCard() {
  return (
    <Card className="w-full  mx-auto  rounded-lg overflow-hidden">
    {/* Cover Image */}
    <div className="relative h-32 bg-cover bg-center" style={{ backgroundImage: `url('https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')` }}>
      {/* Profile Image */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
        <Avatar
          size="xl"
          src="https://images.pexels.com/photos/762041/pexels-photo-762041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          bordered
          className=" w-16 h-16 ring-2 ring-white"
        />
      </div>
    </div>
    
    {/* User Info */}
    <div className="px-6 pt-8 pb-4">
      <h2 className="text-center text-lg font-semibold text-gray-800">
        John Doe
      </h2>
      <p className="text-center text-gray-600">@johndoe</p>
  
    </div>
  </Card>
  );
}