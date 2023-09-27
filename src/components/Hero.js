import React from "react";
import {Heading, HStack, IconButton, useColorMode} from "@chakra-ui/react";
import {MoonIcon, SunIcon} from "@chakra-ui/icons";

export const Hero = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <>
            <HStack>
            <Heading as="h1">Design Token JSON to Android Color Parser</Heading>
                <IconButton onClick={toggleColorMode} aria-label='Toggle color mode'
                            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}>
                    Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
                </IconButton>
            </HStack>
            <Heading as="h2" mt={8} mb={8}
                 size="md">Parse your exported design token JSON to Android color resource format.</Heading>
        </>
    )
}
