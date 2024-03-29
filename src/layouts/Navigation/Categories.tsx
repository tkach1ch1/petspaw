import 'src/styles/styles.css'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Category } from './Category'
import logo from 'src/img/svg/Logo.svg'

export const Categories = () => {
    return (
        <Box
            sx={{
                display: { sm: 'flex' },
                flexDirection: { sm: 'column' },
                alignItems: { sm: 'center' },
            }}
        >
            <Box
                sx={{
                    display: { sm: 'flex' },
                    flexDirection: { sm: 'column' },
                    alignItems: 'flex-start',
                }}
            >
                <Box mb={10}>
                    <Link to='/'>
                        <img
                            src={logo}
                            alt={logo}
                        />
                    </Link>
                </Box>
                <Typography
                    variant='h1'
                    mb={'10px'}
                >
                    Hi user!
                </Typography>
                <Typography
                    color='primary'
                    mb={'60px'}
                    sx={{ fontSize: '20px' }}
                >
                    Welcome to #catslover application
                </Typography>
                <Typography
                    mb={'20px'}
                    sx={{ fontSize: '20px', fontWeight: 500 }}
                >
                    Lets start using The Cat API
                </Typography>

                <Category />
            </Box>
        </Box>
    )
}
