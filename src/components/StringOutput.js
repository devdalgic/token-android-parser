import React, {useState} from 'react';
import {Button, Flex, Text, Textarea} from '@chakra-ui/react'
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
        <Flex style={{width: "100%", height: "100%"}} direction={"column"}>
            <Text fontSize='l' whiteSpace="pre-wrap" mb={2}>Android Color Resource</Text>
                <Textarea value={output} rows={10} minH={240} userSelect={"auto"}/>
            <Button leftIcon={icon} colorScheme='blue' mt={4}
                    onClick={copy}>{buttonText}</Button>
        </Flex>
    )
}
