import React, { useState } from "react";

import { motion } from "framer-motion";
import styled from "styled-components";
import { FaHome, FaStar, FaPowerOff, FaMusic } from "react-icons/fa";
import { SiMarketo } from "react-icons/si";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";

import avatar from "../../public/avatar.jpg";

const Container = styled.div`
  position: fixed;
  top: 4%;
  .active {
    border-right: 4px solid var(--white);

    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }
`;

const Button = styled.button`
  background-color: var(--black);
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin: 0.1rem 0 0 0.5rem;
  cursor: pointer;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  &::before,
  &::after {
    content: "";
    background-color: var(--white);
    height: 2px;
    width: 1rem;
    position: absolute;
    transition: all 0.3s ease;
  }

  &::before {
    top: ${(props) => (props.clicked ? "1.5" : "1rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }

  &::after {
    top: ${(props) => (props.clicked ? "1.2" : "1.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

const SidebarContainer = styled.div`
  background-color: var(--black);
  width: 4rem;
  height: 80vh;
  border-radius: 0 30px 30px 0;
  padding: 1rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  position: relative;
`;

const Logo = styled.div`
  width: 2rem;
  img {
    height: auto;
    width: "100%";
    margin: auto;
  }
`;

const SlickBar = styled.ul`
  color: var(--white);
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--black);

  padding: 2rem 0;

  position: absolute;
  top: 6rem;
  left: 0;

  width: ${(props) => (props.clicked ? "12rem" : "3.5rem")};
  transition: all 0.5s ease;
  border-radius: 0 30px 30px 0;
`;

const Item = styled(Link)`
  text-decoration: none;
  color: var(--white);
  width: 100%;
  padding: 1rem 0;
  cursor: pointer;

  display: flex;
  padding-left: 1rem;

  &:hover {
    border-right: 4px solid #ffffff;

    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }

  img {
    width: 1.2rem;
    height: auto;
    filter: invert(92%) sepia(4%) saturate(1033%) hue-rotate(169deg)
      brightness(78%) contrast(85%);
  }
`;

const Text = styled.span`
  width: ${(props) => (props.clicked ? "100%" : "0")};
  overflow: hidden;
  margin-left: ${(props) => (props.clicked ? "1.5rem" : "0")};
  transition: all 0.3s ease;
`;

const Profile = styled.div`
  width: ${(props) => (props.clicked ? "14rem" : "3rem")};
  height: 3rem;
  z-index: 99;

  /* border: 2px solid var(--white); */
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${(props) => (props.clicked ? "9rem" : "0")};

  background-color: var(--black);
  color: var(--white);

  transition: all 0.3s ease;

  img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
      border: 2px solid var(--grey);
      padding: 2px;
    }
  }
`;

const Details = styled.div`
  display: ${(props) => (props.clicked ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
  z-index: 99;
`;

const Name = styled.div`
  padding: 0 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    display: inline-block;
  }

  a {
    font-size: 0.8rem;
    text-decoration: none;
    color: var(--grey);

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Logout = styled.button`
  border: none;
  width: 3rem;
  height: 3rem;
  background-color: transparent;

  img {
    width: 100%;
    height: auto;
    filter: invert(15%) sepia(70%) saturate(6573%) hue-rotate(2deg)
      brightness(100%) contrast(126%);
    transition: all 0.3s ease;
    &:hover {
      border: none;
      padding: 0;
      opacity: 0.5;
    }
  }
`;

const Sidebar = () => {
  const sidebarVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0 },
  };
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [profileClick, setprofileClick] = useState(false);
  const handleProfileClick = () => setprofileClick(!profileClick);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={sidebarVariants}
      className="fixed top-8 z-50"
    >
      <Container>
        <Button clicked={click} onClick={() => handleClick()}>
          Click
        </Button>
        <SidebarContainer>
          <Logo>
            <Image src={logo} width={300} height={300} alt="" />
          </Logo>
          <SlickBar clicked={click}>
            <Item
              onClick={() => setClick(false)}
              exact
              activeClassName="active"
              href="/Homepage"
            >
              <FaHome className="w-6 h-6" />
              <Text clicked={click}>Home</Text>
            </Item>
            <Item
              onClick={() => setClick(false)}
              activeClassName="active"
              href="/Music"
            >
              <FaMusic className="w-6 h-6" />
              <Text clicked={click}>Music</Text>
            </Item>
            <Item
              onClick={() => setClick(false)}
              activeClassName="active"
              href="/NFT"
            >
              <SiMarketo className="w-6 h-6" />
              <Text clicked={click}>NFTs</Text>
            </Item>

            <Item
              onClick={() => setClick(false)}
              activeClassName="active"
              href="/Merchs"
            >
              <FaStar className="w-6 h-6" />
              <Text clicked={click}>Merchs</Text>
            </Item>
          </SlickBar>

          <Profile clicked={profileClick}>
            <Image
              onClick={() => handleProfileClick()}
              src={avatar}
              alt="Profile"
              width={100}
              height={100}
            />
            <Details clicked={profileClick}>
              <Name>
                <h4>Lara&nbsp;Croft</h4>
                <Link href="/#">view&nbsp;profile</Link>
              </Name>

              <Logout>
                <Link href="/Login">
                  <FaPowerOff className="w-6 h-6 z-50" />
                </Link>
              </Logout>
            </Details>
          </Profile>
        </SidebarContainer>
      </Container>
    </motion.div>
  );
};

export default Sidebar;
