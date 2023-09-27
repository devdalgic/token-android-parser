import React, {useState} from 'react';
import {FormControl, FormErrorMessage, FormLabel, Textarea,} from '@chakra-ui/react'

export const JSONInput = ({ getInputOnChange, getInputValid }) => {
    const [input, setInput] = useState('')

    const handleInputChange = (e) => {
        setInput(e.target.value)
        if(checkIsError()) {
            getInputValid(false)
        } else {
            getInputValid(true)
            getInputOnChange(e.target.value)
        }
    }

    const checkIsError = () => {
        if(input !== "") {
            try {
                JSON.parse(input)
                return false
            } catch (error) {
                return true;
            }
        } else {
            return false
        }
    }
    const isError = checkIsError()

    return (
        <FormControl isRequired isInvalid={isError} my={8}>
            <FormLabel>Enter design token JSON</FormLabel>
            <Textarea value={input} onChange={handleInputChange}
                      placeholder={"{\n" +
                          "\"Colors\": {\n" +
                          "    \"Encore Gray\": {\n" +
                          "      \"Encore Gray-300\": {\n" +
                          "        \"$type\": \"color\",\n" +
                          "        \"$value\": \"#a6b6ca\"\n" +
                          "      }\n" +
                          "   }\n" +
                          " }\n" +
                          "}"}
            rows={10}/>
            <FormErrorMessage>Incorrect JSON</FormErrorMessage>
        </FormControl>
    )
}
