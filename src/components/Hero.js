import React from "react";
import {Heading, HStack, Icon, IconButton, Spacer, useColorMode} from "@chakra-ui/react";
import {MoonIcon, SunIcon} from "@chakra-ui/icons";
import {FaFigma} from "react-icons/fa6";

export const Hero = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <>
            <HStack>
                <Heading as="h1">Design Token JSON to Android Color Parser</Heading>
                <Spacer />
                <IconButton onClick={toggleColorMode} aria-label='Toggle color mode'
                            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}>
                    Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
                </IconButton>
            </HStack>
            <Heading as="h2" mt={4}
                 size="md">Parse your exported design token JSON to Android color resource format.</Heading>
            <HStack>
                <Heading as="h3" mt={4} mb={6} size={"sm"}>Works with Figma</Heading>
                <Icon as={FaFigma} boxSize={6} />
                <Heading as="h3" mt={4} mb={6} size={"xs"}>(and probably other design tools as long as the format is the same)</Heading>
            </HStack>
        </>
    )
}
