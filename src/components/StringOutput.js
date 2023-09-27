import React, {useState} from 'react';
import {Box, Button, Text} from '@chakra-ui/react'
import {CheckIcon, CopyIcon} from "@chakra-ui/icons";

export const StringOutput = ({output}) => {
    const [icon, setIcon] = useState(<CopyIcon />)
    const [buttonText, setButtonText] = useState("Copy to clipboard")

    const copy = () => {
        navigator.clipboard.writeText(output).then(() => {
            setIcon(<CheckIcon />)
            setButtonText("Copied!")
            setTimeout(() => {
                setIcon(<CopyIcon />)
                setButtonText("Copy to clipboard")
            }, 5000)
        })
    }

    return (
        <>
        <Box borderWidth='1px' borderRadius='lg' overflow='hidden' minH={50} my={8}>
            <Text fontSize='l' whiteSpace="pre-wrap" px={4} py={2}>{output}</Text>
        </Box>
            <Button leftIcon={icon} colorScheme='blue'
                    onClick={copy}>{buttonText}</Button>
        </>
    )
}
