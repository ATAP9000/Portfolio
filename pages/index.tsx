import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { Box, CircularProgress } from "@chakra-ui/react"
import { NextPage } from "next";
import { MetaHead, NavBar, Hero, PersonalSkillsSection, TechStackSection, AboutMeSection, ContactMeSection } from "components";

const Home: NextPage = (): JSX.Element => {
  return (
    <Box>
      <MetaHead title="Angelo Tarazona - Portfolio" meta={[{ name: "description", content: "Angelo Tarazona, full stack web developer" }]} />
      <NavBar />
      <Hero />
      <PersonalSkillsSection/>
      <TechStackSection />
      <AboutMeSection />
      <ContactMeSection />
    </Box>
  )
}

export default Home;
