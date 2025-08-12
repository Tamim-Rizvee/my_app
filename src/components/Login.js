import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { Stack, Button, TextField, Box } from '@mui/material'

function Login() {
    const navigate = useNavigate();
    const change = () => {
        console.log(name);
    }
    const handleClick = () => { navigate('/home'); }
    const [name, setNamae] = useState();
    const [password, setPassword] = useState();
    return (
        <>
            <Box
                sx={{
                    minHeight: '100vh',
                    width: '100vw',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    margin: 0,
                    padding: 0,
                    paddingLeft: 5,
                    backgroundImage: 'url(/bg.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <Box
                    sx={{
                        height: 400,
                        width: 500,
                        padding: 3,
                        backgroundColor: 'rgba(255, 246, 246, 0.55)',
                        borderRadius: 0,
                        backdropFilter: 'blur(8px)'
                    }}

                >
                    <Stack spacing={2} alignItems="center">
                        <Box
                            component="img"
                            src="/logo192.png"
                            alt="Logo"
                            sx={{
                                height: 100,
                                width: 100,
                                animation: 'spin 10s linear infinite',
                                '@keyframes spin': {
                                    from: { transform: 'rotate(0deg)' },
                                    to: { transform: 'rotate(360deg)' }
                                }
                            }}
                        ></Box>
                        <TextField label='Name' value={name} onChange={change} />
                        <TextField label='password' type='password' />
                        <Button variant='contained' sx={{
                            borderRadius: '25px',
                            '&:hover': {
                                bgcolor: 'black',
                                scale: '1.09'
                            }
                        }}  onClick={handleClick} >Log in</Button>
                    </Stack>
                </Box>
            </Box>
        </>
    )
}

export default Login