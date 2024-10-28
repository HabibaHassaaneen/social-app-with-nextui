import React from "react";
import {
  Button,
  Link,
  Textarea,
  Avatar,
  Card,
  CardBody,
  Divider,
} from "@nextui-org/react";
import IconHeartSharp from "../icons/IconHeartSharp";
import Image from "next/image";

export default function AddPost() {
  return (
    <Card>
      {" "}
      <CardBody>
        <div className="grid  grid-cols-12 ">
          <div className="min-h-24 col-span-2 items-center mx-auto  ">
            {" "}
            <Avatar
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              
              size="md"
              

            />
          </div>
          <div className="min-h-24   col-span-10 ">
         
            <Textarea maxRows={3} placeholder="What's on your mind?" />
          </div>
          <Divider className="col-span-12" />
        </div>
     
       <div className="flex items-center gap-4 flex-wrap ">
          <Button variant="light" aria-label="Take a photo">
            <Image src={"/addimage.png"} width={24} height={24} />
            <span className=" text-gray-400">Photo</span>
          </Button>

          <Button variant="light" aria-label="Take a photo">
            <Image src={"/addVideo.png"} width={24} height={24} />
            <span className=" text-gray-400">Video</span>
          </Button>

          <Button variant="light" aria-label="Take a photo">
            <Image src={"/emoji.png"} width={24} height={24} />
            <span className=" text-gray-400">Emoji</span>
          </Button>

          <Button variant="light" aria-label="Take a photo">
            <Image src={"/addevent.png"} width={24} height={24} />
            <span className=" text-gray-400">Event</span>
          </Button>
        </div>

      
      </CardBody>
    </Card>
  );
}
