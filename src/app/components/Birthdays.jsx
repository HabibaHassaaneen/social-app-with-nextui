import React from "react";
import {
  Button,
  Checkbox,
  Card,
  User,
  RadioGroup,
  Radio,
  CardHeader,
  CardBody,
  CardFooter,
  Link,
  Image,
} from "@nextui-org/react";
import IconClose from "./../icons/IconClose";
import IconCakeCandles from "./../icons/IconCakeCandles";

export default function Birthdays() {
  return (
    <Card>
      <CardHeader className="flex justify-between gap-3">
        <span className="text-gray-500 font-semibold text-sm"> Birthdays</span>
      </CardHeader>
      <CardBody className="flex flex-col justify-between gap-3">
        <div className="flex justify-between gap-3">
          <User
            name="Jane Doe"
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            }}
          />

          <Button color="primary" endContent={<IconCakeCandles />}>
            Celeprate
          </Button>
        </div>

       <Card   className="flex bg-content3  items-center gap-4   ">
       <CardBody   className="flex bg-content3   items-center gap-4   "> 
              <Image src={"/gift.png"} width={24} height={24}  />
              <Link href="#" className="flex flex-col   gap-1 text-xs">
              
            
              <span className= "text-center text-gray-700 font-semibold" >Up comming birthdays  </span>
              <span className=" text-center text-gray-500 font-semibold">see other 16 have upcoming birthdays</span>
          </Link>
           </CardBody>
        </Card>
      </CardBody>
    </Card>
  );
}
