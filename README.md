# Design Token JSON to Android Color Parser
![React](https://shields.io/badge/react-black?logo=react&style=for-the-badge)
![Chakra](https://shields.io/badge/chakra--ui-black?logo=chakraui&style=for-the-badge)
![GitHub](https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white)

Tool to parse exported JSON design tokens to Android color resources.

Use it [here](https://devdalgic.github.io/token-android-parser/).

Capable of parsing JSON string with the following format:
```json
{
    "Colors": {
        "Encore Gray": {
            "Encore Gray-300": {
            "$type": "color",
            "$value": "#a6b6ca"
            }
        }
    }
}
```

To the following
```xml
<color name="encore_gray_300">#A6B6CA</color>
```
