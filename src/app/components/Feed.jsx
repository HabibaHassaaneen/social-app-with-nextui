"use client"
import React from "react";
import {
  Textarea,
  Divider,
  Chip,

  Avatar,
  User,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Link,
  Image,
} from "@nextui-org/react";
import DropdownContent from './DropdownContent'
import IconLike from "./../icons/IconLike";
import IconMessage from "../icons/IconMessage";
import IconShare from "./../icons/IconShare";
export default function App() {
  return (
    <div className="p-4 flex flex-col gap-12">
      {/* post1 */}
      <Card>
        <CardHeader className="flex gap-3">
          <User
            name="Jane Doe"
            description="Product Designer"
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            }}
          />
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="w-full flex justify-center">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
            />
          </div>

          <p>Make beautiful websites regardless of your design experience.</p>
        </CardBody>
        <Divider />
        <CardFooter>
        <div className="grid  grid-cols-12 w-full ">
          <div className=" col-span-12 w-full flex justify-between my-1 ">
            <Link isBlock href="#" color="foreground">
              <IconLike fill={"#006FEE"} />
              <Divider orientation="vertical" />
              <span className=" pl-2  text-gray-400 ">123</span>
              <span className=" pl-2 hidden sm:inline  text-gray-400">
                Like
              </span>
            </Link>
            <Link isBlock href="#" color="foreground">
              <IconMessage fill={"#006FEE"} />
              <Divider orientation="vertical" />
              <span className=" pl-2  text-gray-400 ">123</span>
              <span className=" pl-2 hidden sm:inline  text-gray-400">
                Comment
              </span>
            </Link>
            <Link isBlock href="#" color="foreground">
              <IconShare fill={"#006FEE"} />
              <Divider orientation="vertical" />
              <span className=" pl-2  text-gray-400 ">123</span>
              <span className=" pl-2 hidden sm:inline  text-gray-400">
                Share
              </span>
            </Link>
            
          </div>
               <Divider className="col-span-12 my-1" />
          <div className="col-span-2 items-center mx-auto my-2   ">
            {" "}
            <Avatar
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              
              size="sm"
              

            />
          </div>
          <div className="  col-span-10 my-2 ">
         
            <Textarea maxRows={1} placeholder="Write a comment...." endContent={ <Link href="#"><Image  src={"/emoji.png"} width={24} height={24} /></Link> } />
          </div>
          <Divider className="col-span-12 my-0 " />
          <div className="col-span-2 items-center mx-auto my-2   ">
            {" "}
            <Avatar
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              
              size="sm"
              

            />
          </div>
          <div className="  col-span-10  my-2 ">
       <div className="flex flex-col flex-wrap " >
       <Textarea
       
       label="Name"
      labelPlacement="outside"
    minRows={1}
    endContent={ <DropdownContent  color={'default'} variant={"light"} /> }
         value={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum impedit officia quisquam animi perferendis facere, voluptas sequi excepturi voluptate illum corrupti ut accusantium distinctio voluptates itaque iusto veritatis laudantium quibusdam?"}
          className="col-span-12 md:col-span-6 mb-6 md:mb-0"
        />
         <div className=" col-span-12 w-full flex items-center justify-between my-1 ">
            <Link isBlock href="#" color="foreground">
              <IconLike fill={"#006FEE"} />
              <Divider orientation="vertical" />
              <span className=" pl-2  text-gray-400 ">123</span>
              <span className=" pl-2 hidden sm:inline  text-gray-400">
                Like
              </span>
            </Link>
            <Link isBlock href="#" >
              <IconMessage fill={"#006FEE"} />
              <Divider orientation="vertical" />
              <span className=" pl-2 ml-2  text-gray-400 ">123</span>
              <span className=" pl-2 hidden sm:inline  text-gray-400">
                Replay
              </span>
            </Link>
            </div>
            </div>
    </div>


       
















         
        </div>
        </CardFooter>
      </Card>
 

    
      {/* post2 */}
      <Card>
        <CardHeader className="flex gap-3">
          <User
            name="Jane Doe"
            description="Product Designer"
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            }}
          />
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="w-full flex justify-center">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src="https://nextui.org/images/hero-card-complete.jpeg"
            />
          </div>

          <p>Make beautiful websites regardless of your design experience.</p>
        </CardBody>
        <Divider />
        <CardFooter>
        <div className="grid  grid-cols-12 w-full ">
          <div className=" col-span-12 w-full flex justify-between my-1 ">
            <Link isBlock href="#" color="foreground">
              <IconLike fill={"#006FEE"} />
              <Divider orientation="vertical" />
              <span className=" pl-2  text-gray-400 ">123</span>
              <span className=" pl-2 hidden sm:inline  text-gray-400">
                Like
              </span>
            </Link>
            <Link isBlock href="#" color="foreground">
              <IconMessage fill={"#006FEE"} />
              <Divider orientation="vertical" />
              <span className=" pl-2  text-gray-400 ">123</span>
              <span className=" pl-2 hidden sm:inline  text-gray-400">
                Comment
              </span>
            </Link>
            <Link isBlock href="#" color="foreground">
              <IconShare fill={"#006FEE"} />
              <Divider orientation="vertical" />
              <span className=" pl-2  text-gray-400 ">123</span>
              <span className=" pl-2 hidden sm:inline  text-gray-400">
                Share
              </span>
            </Link>
            
          </div>
               <Divider className="col-span-12 my-1" />
          <div className="col-span-2 items-center mx-auto my-2   ">
            {" "}
            <Avatar
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              
              size="sm"
              

            />
          </div>
          <div className="  col-span-10 my-2 ">
         
            <Textarea maxRows={1} placeholder="Write a comment...." endContent={ <Link href="#"><Image  src={"/emoji.png"} width={24} height={24} /></Link> } />
          </div>
          <Divider className="col-span-12 my-0 " />
          <div className="col-span-2 items-center mx-auto my-2   ">
            {" "}
            <Avatar
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              
              size="sm"
              

            />
          </div>
          <div className="  col-span-10  my-2 ">
       <div className="flex flex-col flex-wrap " >
       <Textarea
       
       label="Name"
      labelPlacement="outside"
    minRows={1}
    endContent={ <DropdownContent  color={'default'} variant={"light"} /> }
         value={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum impedit officia quisquam animi perferendis facere, voluptas sequi excepturi voluptate illum corrupti ut accusantium distinctio voluptates itaque iusto veritatis laudantium quibusdam?"}
          className="col-span-12 md:col-span-6 mb-6 md:mb-0"
        />
         <div className=" col-span-12 w-full flex items-center justify-between my-1 ">
            <Link isBlock href="#" color="foreground">
              <IconLike fill={"#006FEE"} />
              <Divider orientation="vertical" />
              <span className=" pl-2  text-gray-400 ">123</span>
              <span className=" pl-2 hidden sm:inline  text-gray-400">
                Like
              </span>
            </Link>
            <Link isBlock href="#" >
              <IconMessage fill={"#006FEE"} />
              <Divider orientation="vertical" />
              <span className=" pl-2 ml-2  text-gray-400 ">123</span>
              <span className=" pl-2 hidden sm:inline  text-gray-400">
                Replay
              </span>
            </Link>
            </div>
            </div>
    </div>


       
















         
        </div>
        </CardFooter>
      </Card>
 

    
    
    </div>
  );
}
