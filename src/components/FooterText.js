import React from 'react';
import {Box, Text} from '@chakra-ui/react'

export const FooterText = () => {
    return (
        <Box mt={8} opacity={0.4}>
            <Text>
                Tool description for our crawler friends:
            </Text>
            <Text as={"h2"} mt={1}>
                Design Token JSON to Android Color Parser
            </Text>
            <Text as={"h3"}>
                Welcome to our color design token parser tool, designed to make your Android app development process easier. If you've ever struggled with the manual conversion of color design tokens from popular design tools like Figma to Android color resources, your search ends here. Our intuitive and efficient tool simplifies this task, saving you time and ensuring pixel-perfect consistency in your app's user interface.
            </Text>
            <Text as={"h3"}>
                With our color design token parser, developers can effortlessly import and parse design tokens, converting them into Android color resources with just a few clicks. Gone are the days of manually deciphering and implementing color codes – our tool automates the process, leaving you with more time to focus on perfecting your app's design and functionality. Say goodbye to tedious, error-prone conversions and hello to a seamless and efficient workflow. Try our color design token parser today and experience a new level of ease and precision in Android app development.
            </Text>
        </Box>
    )
}
