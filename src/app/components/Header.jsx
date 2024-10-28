"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Tooltip,
} from "@nextui-org/react";
import AcmeLogo from "../AcmeLogo.jsx";
import SearchIcon from "../icons/SearchIcon.jsx";
import { Button } from "@nextui-org/react";

import IconNotifications from "../icons/IconNotifications.jsx";
import IconFocusAdd from "../icons/IconFocusAdd.jsx";
import IconHomeOutline from "../icons/IconHomeOutline.jsx";
import IconBxUserCircle from "../icons/IconBxUserCircle.jsx";
import IconUsers from "../icons/IconUsers.jsx";
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Spinner } from "@nextui-org/react";
import IconMessage from "./../icons/IconMessage";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
 
    <Navbar as="div" className="h-24 flex items-center justify-between" onMenuOpenChange={setIsMenuOpen} justify='between'>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <AcmeLogo fill="rgb(110 231 183)" />
          <p className="font-bold text-inherit">SOLAR</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex w-[50%] gap-4 text-small items-center" >
        <NavbarItem>
          <Link isBlock href="#" color="foreground">
            <IconHomeOutline stroke={"rgb(110 231 183)"} />
            <p className=" pl-2">Homepage</p>
          </Link>
          <Link isBlock href="#" color="foreground">
            <IconUsers fill="rgb(110 231 183)" />
            <p className=" pl-2">Friends</p>
          </Link>
          <Link isBlock href="#" color="foreground">
            <IconFocusAdd fill={"rgb(110 231 183)"} />
            <p className=" pl-2">Stories</p>
          </Link>
          
        </NavbarItem>
     
      </NavbarContent>

      <NavbarContent className="hidden md:flex w-[400%] gap-4 text-small items-center " >
      <NavbarItem>

        <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="search..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent as="div" className="items-center" justify="end">
     
        <ClerkLoading>
          <Spinner color="danger" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className="cursor-pointer">
              <IconNotifications fill={"rgb(110 231 183)"} />
            </div>
            <div className="cursor-pointer">
              <IconMessage fill={"rgb(110 231 183)"} />
            </div>
            <UserButton/>
          </SignedIn>
          <SignedOut>
          <Tooltip color={'danger'} placement='top'content={'LogIn/Register'} className="capitalize">
      
       <Link href="/sign-in" color="danger">   <IconBxUserCircle  fill={"#F31260"}/></Link>
          </Tooltip>
          </SignedOut>
        </ClerkLoaded>

        {/* <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
        
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown> */}
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
    
  );
}
