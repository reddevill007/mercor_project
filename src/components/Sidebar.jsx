import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { AiFillSetting, AiOutlineTeam } from 'react-icons/ai'
import { BiMessageSquareDots } from 'react-icons/bi'
import { BsBoxes } from 'react-icons/bs'
import { GoKebabHorizontal, GoTasklist } from 'react-icons/go'

const Sidebar = () => {
    return (
        <Flex
            position="fixed"
            top="50px"
            left="0px"
            h="calc(100vh - 50px)"
            w="200px"
            borderRight="1px"
            borderColor="gray.400"
            p="15px"
        >
            <Flex
                flexDirection="column"
                gap="15px"
                alignItems="start"
                justify="space-between"
                w="full"
            >
                <Flex flexDirection="column" gap="20px" w="full" color="gray.500">
                    <Flex gap="10px" alignItems="center">
                        <BsBoxes />
                        <Text>Home</Text>
                    </Flex>
                    <Flex gap="10px" alignItems="center">
                        <BiMessageSquareDots />
                        <Text>Messages</Text>
                    </Flex>
                    <Flex gap="10px" alignItems="center">
                        <GoTasklist />
                        <Text>Tasks</Text>
                    </Flex>
                    <Flex gap="10px" alignItems="center">
                        <AiOutlineTeam />
                        <Text>Members</Text>
                    </Flex>
                    <Flex
                        gap="10px"
                        alignItems="center"
                        borderBottom="1px"
                        pb="10px"
                        borderColor="gray.400"
                    >
                        <AiFillSetting />
                        <Text>Setting</Text>
                    </Flex>
                    <Flex
                        flexDirection="column"
                        gap="20px"
                        w="full"
                        pb="10px"
                        color="gray.500"
                    >
                        <Flex justifyContent="space-between">
                            <Heading fontSize="12px">MY PROJECTS</Heading>
                            <Flex
                                fontSize="12px"
                                border="1px"
                                borderColor="gray.500"
                                h="17px"
                                w="17px"
                                justifyContent="center"
                                alignItems="center"
                                rounded="5px"
                                mb="10px"
                            >
                                +
                            </Flex>
                        </Flex>
                        <Flex
                            justifyContent="space-between"
                            alignItems="center"
                            bg="rgba(80, 48, 229, 0.08)"
                            p="10px"
                            borderRadius="8px"
                            opaci
                        >
                            <Flex alignItems="center" gap="7px">
                                <Box w="5px" h="5px" rounded="full" bg="green.700" />
                                <Heading fontSize="15px" color="black">
                                    Mobile App
                                </Heading>
                            </Flex>
                            <GoKebabHorizontal color="black" />
                        </Flex>
                        <Flex justifyContent="space-between" alignItems="center">
                            <Flex alignItems="center" gap="7px">
                                <Box w="5px" h="5px" rounded="full" bg="#FFA500" />
                                <Heading fontSize="15px" color="#787486">
                                    Website Redesign
                                </Heading>
                            </Flex>
                        </Flex>
                        <Flex justifyContent="space-between" alignItems="center">
                            <Flex alignItems="center" gap="7px">
                                <Box w="5px" h="5px" rounded="full" bg="#E4CCFD" />
                                <Heading fontSize="15px" color="#787486">
                                    Design System
                                </Heading>
                            </Flex>
                        </Flex>
                        <Flex justifyContent="space-between" alignItems="center">
                            <Flex alignItems="center" gap="7px">
                                <Box w="5px" h="5px" rounded="full" bg="#76A5EA" />
                                <Heading fontSize="15px" color="#787486">
                                    Wireframes
                                </Heading>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex
                    flexDirection="column"
                    justifyContent="space-around"
                    position="relative"
                    w="95%"
                    h="180px"
                    bg="gray.300"
                    borderRadius="10px"
                    mx="auto"
                >
                    <Heading fontSize="14px" color="black" textAlign="center">
                        Thoughts Time
                    </Heading>
                    <Text textAlign="center" fontSize="12px" color="#787486">
                        We don not have any notice for you, till then you can share your
                        thoughts with your peers.
                    </Text>
                    <Button
                        color="black"
                        fontSize="12px"
                        bg="white"
                        w="80%"
                        mx="auto"
                        borderRadius="0"
                    >
                        Write a message
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Sidebar