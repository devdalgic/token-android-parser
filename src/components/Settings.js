import React, {useEffect, useState} from "react";
import {Box, FormControl, FormLabel, HStack, Radio, RadioGroup, Spacer, Stack, Switch, Tooltip} from "@chakra-ui/react";
import {FormattingStyle} from "../utils/constants";
import {InfoIcon} from "@chakra-ui/icons";

export const Settings = ({ getOnFormattingSettingChange, getOnUppercaseHexChange, getOnRemoveDuplicateChange }) => {
    const [formatValue, setFormatFormatValue] = useState(FormattingStyle.Underscores)
    const [uppercaseHex, setUppercaseHex] = useState(true)
    const [removeDuplicates, setRemoveDuplicates] = useState(true)

    useEffect(() => {
        getOnFormattingSettingChange(formatValue)
    }, [getOnFormattingSettingChange, formatValue])

    useEffect(() => {
        getOnUppercaseHexChange(uppercaseHex)
    }, [getOnUppercaseHexChange, uppercaseHex])

    useEffect(() => {
        getOnRemoveDuplicateChange(removeDuplicates)
    }, [getOnRemoveDuplicateChange, removeDuplicates])

    return (
        <FormControl>
            <FormLabel>Settings</FormLabel>
            <Box  borderWidth='1px' borderRadius='lg' px={4} py={2}>
                <HStack>
                    <FormLabel htmlFor='uppercase-hex' mb='0'>
                        Color name format
                    </FormLabel>
                    <Spacer />
                    <RadioGroup onChange={setFormatFormatValue} value={formatValue}>
                        <Stack direction='row'>
                            <Radio value={FormattingStyle.Underscores} defaultChecked>under_scores</Radio>
                            <Radio value={FormattingStyle.CamelCase}>camelCase</Radio>
                        </Stack>
                    </RadioGroup>
                </HStack>
                <HStack mt={4}>
                    <FormLabel htmlFor='uppercase-hex' mb='0'>
                        Uppercase hex
                    </FormLabel>
                    <Spacer />
                    <Switch id='uppercase-hex' defaultChecked isChecked={uppercaseHex} onChange={(e) => setUppercaseHex(e.target.checked)}/>
                </HStack>
                <HStack mt={4}>
                    <Tooltip label='Try to simplify names by removing duplicate words from names and values that are the results of JSON parsing'>
                        <FormLabel htmlFor='remove-duplicates' mb='0'>
                            Remove duplicates <InfoIcon />
                        </FormLabel>
                    </Tooltip>
                    <Spacer />
                    <Switch id='remove-duplicates' defaultChecked isChecked={removeDuplicates} onChange={(e) => setRemoveDuplicates(e.target.checked)}/>
                </HStack>
            </Box>
        </FormControl>
    )
}
