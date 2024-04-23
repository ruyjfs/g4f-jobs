"use client";

import { menu } from "@/data/menu";
import useNavigate from "@/modules/dsg/hooks/useNavigate";
import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NavbarNextUI,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

function SelectCountry() {
  return (
    <>
      <Select className="max-w-xs" label="Select country" size="sm">
        <SelectItem
          key="argentina"
          startContent={
            <Avatar
              alt="Argentina"
              className="w-6 h-6"
              src="https://flagcdn.com/ar.svg"
            />
          }
        >
          Argentina
        </SelectItem>
        <SelectItem
          key="venezuela"
          startContent={
            <Avatar
              alt="Venezuela"
              className="w-6 h-6"
              src="https://flagcdn.com/ve.svg"
            />
          }
        >
          Venezuela
        </SelectItem>
        <SelectItem
          key="brazil"
          startContent={
            <Avatar
              alt="Brazil"
              className="w-6 h-6"
              src="https://flagcdn.com/br.svg"
            />
          }
        >
          Brazil
        </SelectItem>
        <SelectItem
          key="switzerland"
          startContent={
            <Avatar
              alt="Switzerland"
              className="w-6 h-6"
              src="https://flagcdn.com/ch.svg"
            />
          }
        >
          Switzerland
        </SelectItem>
        <SelectItem
          key="germany"
          startContent={
            <Avatar
              alt="Germany"
              className="w-6 h-6"
              src="https://flagcdn.com/de.svg"
            />
          }
        >
          Germany
        </SelectItem>
        <SelectItem
          key="spain"
          startContent={
            <Avatar
              alt="Spain"
              className="w-6 h-6"
              src="https://flagcdn.com/es.svg"
            />
          }
        >
          Spain
        </SelectItem>
        <SelectItem
          key="france"
          startContent={
            <Avatar
              alt="France"
              className="w-6 h-6"
              src="https://flagcdn.com/fr.svg"
            />
          }
        >
          France
        </SelectItem>
        <SelectItem
          key="italy"
          startContent={
            <Avatar
              alt="Italy"
              className="w-6 h-6"
              src="https://flagcdn.com/it.svg"
            />
          }
        >
          Italy
        </SelectItem>
        <SelectItem
          key="mexico"
          startContent={
            <Avatar
              alt="Mexico"
              className="w-6 h-6"
              src="https://flagcdn.com/mx.svg"
            />
          }
        >
          Mexico
        </SelectItem>
      </Select>
    </>
  );
}

function SelectDictionary() {
  const router = useNavigate();
  const pathname = usePathname();
  const [selectedKeys, setSelectedKeys] = React.useState(
    new Set([pathname.replace("/", "")])
  );

  const selectedValue = React.useMemo(() => {
    const selected = Array.from(selectedKeys).join(", ").replaceAll("_", " ");
    // if (selected === "us" && pathname !== "/en") {
    //   router.push("/en");
    //   return selected;
    // }
    // if (selected === "br" && pathname !== "/pt-BR") {
    //   router.push("/pt-BR");
    //   return selected;
    // }
    return selected;
  }, [selectedKeys]);

  const onChangeSelect = (value: any) => {
    const selected = Array.from(value).join(", ").replaceAll("_", " ");
    router.redirect(`/${selected}`);
    setSelectedKeys(value);
  };

  return (
    <Dropdown backdrop="blur">
      <DropdownTrigger>
        <Button
          variant="light"
          className="capitalize"
          radius="full"
          startContent={
            <Avatar
              alt="Country"
              className="w-6 h-6"
              src={`https://flagcdn.com/${
                selectedValue === "en" ? "us" : "br"
              }.svg`}
            />
          }
          isIconOnly
        ></Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={onChangeSelect}
      >
        <DropdownItem
          key="en"
          startContent={
            <Avatar
              alt="Argentina"
              className="w-6 h-6"
              src="https://flagcdn.com/us.svg"
            />
          }
        >
          en-US
        </DropdownItem>
        <DropdownItem
          key="pt-BR"
          startContent={
            <Avatar
              alt="Argentina"
              className="w-6 h-6"
              src="https://flagcdn.com/br.svg"
            />
          }
        >
          pt-BR
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

function PerfilMenu() {
  return (
    <Dropdown>
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
    </Dropdown>
  );
}

export default function Navbar(props: any) {
  const { dict } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isCurrent, getFirstPathname } = useNavigate();

  const onPressMenuItem = () => setIsMenuOpen(false);

  console.log(dict);

  return (
    <NavbarNextUI
      shouldHideOnScroll
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        // className="sm:hidden"
      />
      <NavbarMenu>
        {menu.map((item, index) => (
          <NavbarMenuItem key={`-${index}`} isActive={isCurrent(item.url)}>
            <Link
              onPress={onPressMenuItem}
              href={`${getFirstPathname()}/${item.url}`}
              color={isCurrent(item.url) ? "primary" : item.color}
              className="w-full"
              size="lg"
            >
              {dict?.display[item.label] || item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
      <NavbarBrand>
        <p className="font-bold text-inherit">G4F Jobs</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {/* <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem> */}
      </NavbarContent>
      <NavbarContent as="div" justify="end">
        <NavbarItem>
          <SelectDictionary />
        </NavbarItem>
      </NavbarContent>
      {/* <NavbarContent justify="end">
        <SelectCountry />
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent> */}
    </NavbarNextUI>
  );
}
