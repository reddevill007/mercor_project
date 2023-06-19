import { Flex, Heading, Input, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { BsCalendarDay, BsChevronDown } from 'react-icons/bs'
import { CiSearch } from 'react-icons/ci'
import { TfiCommentAlt } from 'react-icons/tfi'
import { IoMdNotificationsOutline } from 'react-icons/io'

const Header = () => {
    return (
        <Flex
            w="full"
            h="50px"
            borderBottom="1px"
            borderColor="gray.400"
            position="fixed"
            top="0"
            left="0"
            bg="white"
        >
            <Flex
                w="200px"
                h="full"
                borderRight="1px"
                borderColor="gray.400"
                justify="space-between"
                px="10px"
                alignItems="center"
            >
                <Flex alignItems="center" justify="center" gap="10px">
                    <img
                        style={{ height: "20px", width: "20px" }}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABbXr4i-QODqhy7tofHYmTYh05rYPktzacw&usqp=CAU"
                        alt="logo"
                    />
                    <Heading fontSize="15px">Project M.</Heading>
                </Flex>
                <BsChevronDown />
            </Flex>
            <Flex
                justify="space-between"
                alignItems="center"
                w="calc(100% - 200px)"
                px="10px"
                position="relative"
            >
                <Input
                    border="1px"
                    borderColor="gray.300"
                    w="40%"
                    h="35px"
                    placeholder="Search"
                    pl="33px"
                />
                <Flex
                    justify="center"
                    alignItems="center"
                    position="absolute"
                    h="30px"
                    w="30px"
                    top="10px"
                    left="12px"
                    color="gray.400"
                >
                    <CiSearch />
                </Flex>
                <Flex h="full" gap="35px">
                    <Flex justify="center" alignItems="center" gap="15px" h="full">
                        <BsCalendarDay />
                        <TfiCommentAlt />
                        <IoMdNotificationsOutline />
                    </Flex>
                    <Flex gap="10px">
                        <Flex direction="column" justify="center">
                            <Heading fontSize="12px">Anima Agarwal</Heading>
                            <Text fontSize="10px" textAlign="right">
                                UP, India
                            </Text>
                        </Flex>
                        <Flex justify="center" alignItems="center" gap="15px" h="full">
                            <Image
                                style={{ height: "25px", width: "25px", borderRadius: "50%" }}
                                alt="logo"
                                src="/img1.png"
                                height={35}
                                width={35}
                            />
                            <BsChevronDown />
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Header