import React, {useEffect, useState} from "react";
import {FormControl, FormLabel, Radio, RadioGroup, Stack} from "@chakra-ui/react";
import {FormattingStyle} from "../utils/constants";

export const Settings = ({ getOnFormattingSettingChange }) => {
    const [value, setValue] = useState(FormattingStyle.Underscores)

    useEffect(() => {
        getOnFormattingSettingChange(value)
    }, [getOnFormattingSettingChange, value])

    return (
        <FormControl>
            <FormLabel>Color name format</FormLabel>
            <RadioGroup onChange={setValue} value={value} borderWidth='1px' borderRadius='lg' px={4} py={2}>
                <Stack direction='row'>
                    <Radio value={FormattingStyle.Underscores} defaultChecked>under_scores</Radio>
                    <Radio value={FormattingStyle.CamelCase}>camelCase</Radio>
                </Stack>
            </RadioGroup>
        </FormControl>
    )
}
