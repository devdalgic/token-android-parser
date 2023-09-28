import React from "react";
import {Avatar, Box, Button, HStack, Icon, Spacer, Text, VStack} from "@chakra-ui/react";
import {BiSolidHeart} from "react-icons/bi";
import {FaMedium, FaThreads, FaXTwitter} from "react-icons/fa6";
import {SiBento} from "react-icons/si";
import {CgWebsite} from "react-icons/cg";

export const Footer = () => {
    return (
        <Box borderWidth='1px' borderRadius='lg' overflow='hidden' p={4} mt={8}>
            <HStack>
                <VStack>
                    <HStack><Text fontSize="sm">Created with <Icon as={BiSolidHeart}/> using React by</Text><Spacer /></HStack>
                    <HStack>
                        <Avatar size='md' name='Denizhan Dalgıç' src='https://devdalgic.github.io/images/author/small2_hubf7c63af1271a7a1ee0e276025b8cf8a_180002_148x148_fit_q75_box.jpg'
                        placeholder={"blue"}/>
                        <Text>Denizhan Dalgıç</Text>
                    </HStack>
                </VStack>
                <Spacer />
                <Button leftIcon={<Icon as={SiBento} />} colorScheme='blue' variant={"outline"} my={4}
                        as={"a"} href='https://bento.me/devdalgic' target='_blank'>Bento</Button>
                <Button leftIcon={<Icon as={FaMedium} />} colorScheme='blue' variant={"outline"} my={4}
                        as={"a"} href='https://denizhandalgic.medium.com' target='_blank'>Medium</Button>
                <Button leftIcon={<Icon as={FaXTwitter} />} colorScheme='blue' variant={"outline"} my={4}
                        as={"a"} href='https://twitter.com/devdalgic' target='_blank'>X/Twitter</Button>
                <Button leftIcon={<Icon as={FaThreads} />} colorScheme='blue' variant={"outline"} my={4}
                        as={"a"} href='https://www.threads.net/@devdalgic' target='_blank'>Threads</Button>
                <Button leftIcon={<Icon as={CgWebsite} />} colorScheme='blue' variant={"outline"} my={4}
                        as={"a"} href='https://devdalgic.github.io' target='_blank'>Portfolio</Button>
            </HStack>
        </Box>
    )
}
