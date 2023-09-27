import './App.css';
import {ChakraProvider, Container, SlideFade} from '@chakra-ui/react'
import {JSONInput} from "./components/JSONInput";
import {StringOutput} from "./components/StringOutput";
import {useState} from "react";
import {theme} from './theme'
import {Hero} from "./components/Hero";
import {Settings} from "./components/Settings";
import {FormattingStyle} from "./utils/constants";
import {underscoreToCamelCase} from "./utils/utilities";

function App() {
    const [stringInput, setStringInput] = useState("")
    const [stringOutput, setStringOutput] = useState("")
    const [formattingStyle, setFormattingStyle] = useState(FormattingStyle.Underscores)
    const [isInputValid, setInputValid] = useState(false)

    function getInputValid(value) {
        setInputValid(value)
    }

    function getOnFormattingSettingChange(setting) {
        setFormattingStyle(setting)
        setStringOutput(parseJsonToOutput(stringInput))
    }

    function getOnInputChange(input) {
        console.log("Input changed")
        setStringInput(input)
        setStringOutput(parseJsonToOutput(input))
    }

    function parseJsonToOutput(inputJson) {
        try {
            function getObjectAsString(obj, prefix = '') {
                let result = '';
                for (const key in obj) {
                    if (obj[key].$type === 'color') {
                        let colorName = (prefix + key).toLowerCase()
                            .replace(/ /g, '_')
                            .replace(/-/g, '_')
                        let colorValue = obj[key].$value
                            .replace(/ /g, '_')
                            .replace(/-/g, '_')
                        if(colorValue.startsWith("#")) {
                            colorValue = colorValue.toUpperCase()
                        } else {
                            colorValue = colorValue
                                .toLowerCase()
                                .replace(/{/g, "")
                                .replace(/}/g, "")
                                .replace(/\./g, "_")
                                .replace("colors_", "@color/")
                        }
                        if(formattingStyle === FormattingStyle.Underscores) {
                            //
                        } else if(formattingStyle === FormattingStyle.CamelCase) {
                            colorName = underscoreToCamelCase(colorName)
                            colorValue = underscoreToCamelCase(colorValue)
                        }
                        result += `<color name="${colorName}">${colorValue}</color>\n`;
                    } else if (typeof obj[key] === 'object') {
                        result += getObjectAsString(obj[key], prefix + key + '_');
                    }
                }
                return result;
            }

            const parsedData = JSON.parse(inputJson);
            // Get the Colors object from the parsed JSON
            const colorsObject = parsedData.Colors;

            // Generate the output string
            return getObjectAsString(colorsObject, '').trim();
        } catch (e) {
            return ""
        }
    }

    return (
        <ChakraProvider theme={theme}>
            <SlideFade in direction='bottom' offsetY={16}>
                <Container mt={8} maxW='container.md'>
                    <Hero />
                    <JSONInput getInputOnChange={getOnInputChange} getInputValid={getInputValid}/>
                    <Settings getOnFormattingSettingChange={getOnFormattingSettingChange}/>
                    <StringOutput output={stringOutput}/>
                </Container>
            </SlideFade>
        </ChakraProvider>
    );
}

export default App;
