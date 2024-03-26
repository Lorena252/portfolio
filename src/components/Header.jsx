import { Button,Box, Flex} from '@chakra-ui/react'

export default function Header() {
 
return(
    <Box w='100%' h='100px' bgGradient='linear(to-l,#33001c,#b40065)' >
    <Flex justifyContent="flex-end">

<Button m="2">Sobre mi</Button>
<Button m="2">Conocimientos</Button>
<Button m="2">Proyectos</Button>

</Flex>
</Box>
)


}
